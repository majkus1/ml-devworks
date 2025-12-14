import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@/lib/supabase";
import { createCalendarEvent } from "@/lib/googleCalendar";
import { bookingConfig } from "@/lib/bookingConfig";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, datetime } = body;

    // Walidacja
    if (!email || !datetime) {
      return NextResponse.json(
        { error: "Email and datetime are required" },
        { status: 400 }
      );
    }

    // Sprawdź format emaila
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Sprawdź format daty
    const bookingDate = new Date(datetime);
    if (isNaN(bookingDate.getTime())) {
      return NextResponse.json(
        { error: "Invalid datetime format" },
        { status: 400 }
      );
    }

    // Sprawdź czy data jest dostępna
    const now = new Date();
    const minTime = new Date(now.getTime() + bookingConfig.minHoursBeforeBooking * 60 * 60 * 1000);
    if (bookingDate < minTime) {
      return NextResponse.json(
        { error: `Booking must be at least ${bookingConfig.minHoursBeforeBooking} hours in advance` },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    // Sprawdź czy slot nie jest już zarezerwowany
    const startCheck = new Date(bookingDate);
    startCheck.setMinutes(startCheck.getMinutes() - bookingConfig.meetingDuration);
    const endCheck = new Date(bookingDate);
    endCheck.setMinutes(endCheck.getMinutes() + bookingConfig.meetingDuration);

    const { data: existingBookings } = await supabase
      .from("bookings")
      .select("id")
      .gte("datetime", startCheck.toISOString())
      .lte("datetime", endCheck.toISOString())
      .eq("cancelled", false);

    if (existingBookings && existingBookings.length > 0) {
      return NextResponse.json(
        { error: "This time slot is already booked" },
        { status: 409 }
      );
    }

    // Oblicz czas zakończenia
    const endTime = new Date(bookingDate);
    endTime.setMinutes(endTime.getMinutes() + bookingConfig.meetingDuration);

    // Utwórz wydarzenie w Google Calendar
    const summary = name
      ? `Konsultacja z ${name} (${email})`
      : `Konsultacja z ${email}`;
    const description = `Konsultacja z klientem.\nEmail: ${email}${name ? `\nImię: ${name}` : ""}`;

    let eventId: string;

    try {
      const calendarResult = await createCalendarEvent(
        summary,
        description,
        bookingDate,
        endTime,
        email
      );
      eventId = calendarResult.eventId;
    } catch (error) {
      console.error("Error creating calendar event:", error);
      return NextResponse.json(
        { error: "Failed to create calendar event" },
        { status: 500 }
      );
    }

    // Zapisz rezerwację w bazie danych
    const { data: booking, error: dbError } = await supabase
      .from("bookings")
      .insert({
        email,
        name: name || null,
        datetime: bookingDate.toISOString(),
        google_event_id: eventId,
        meet_link: null, // Google Meet będzie dodawany ręcznie
        cancelled: false,
      })
      .select()
      .single();

    if (dbError || !booking) {
      console.error("Error saving booking:", dbError);
      // TODO: Można by tu spróbować usunąć wydarzenie z kalendarza, ale to opcjonalne
      return NextResponse.json(
        { error: "Failed to save booking" },
        { status: 500 }
      );
    }

    // Wyślij email z potwierdzeniem do klienta
    try {
      await sendConfirmationEmail(email, name, bookingDate);
    } catch (emailError) {
      console.error("Error sending confirmation email:", emailError);
      // Nie przerywamy procesu - rezerwacja została już utworzona
    }

    // Wyślij powiadomienie do właściciela
    try {
      await sendOwnerNotificationEmail(email, name, bookingDate);
    } catch (emailError) {
      console.error("Error sending owner notification email:", emailError);
      // Nie przerywamy procesu - rezerwacja została już utworzona
    }

    return NextResponse.json({
      success: true,
      booking: {
        id: booking.id,
        datetime: booking.datetime,
      },
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

async function sendConfirmationEmail(
  email: string,
  name: string | null,
  datetime: Date
) {
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPassword = process.env.GMAIL_PASSWORD;

  if (!gmailEmail || !gmailPassword) {
    throw new Error("Email service not configured");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  }).format(datetime);

  const mailOptions = {
    from: `"ML Devworks" <${gmailEmail}>`,
    to: email,
    subject: "Potwierdzenie rezerwacji konsultacji - ML Devworks",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
          Potwierdzenie rezerwacji konsultacji
        </h2>
        
        <p>Witaj${name ? ` ${name}` : ""}!</p>
        
        <p>Twoja rezerwacja konsultacji została potwierdzona.</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Data i godzina:</strong> ${formattedDate}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #e3f2fd; border-left: 4px solid #2196f3; border-radius: 5px;">
          <p style="margin: 0;"><strong>Link do spotkania Google Meet:</strong></p>
          <p style="margin: 10px 0 0 0;">Wkrótce wyślemy Ci link do spotkania Google Meet na ten adres email.</p>
        </div>
        
        <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          Jeśli masz pytania, skontaktuj się z nami: office@ml-devworks.com
        </p>
      </div>
    `,
    text: `
Potwierdzenie rezerwacji konsultacji - ML Devworks

Witaj${name ? ` ${name}` : ""}!

Twoja rezerwacja konsultacji została potwierdzona.

Data i godzina: ${formattedDate}

Link do spotkania Google Meet:
Wkrótce wyślemy Ci link do spotkania Google Meet na ten adres email.

---
Jeśli masz pytania, skontaktuj się z nami: office@ml-devworks.com
    `,
  };

  await transporter.sendMail(mailOptions);
}

async function sendOwnerNotificationEmail(
  clientEmail: string,
  clientName: string | null,
  datetime: Date
) {
  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPassword = process.env.GMAIL_PASSWORD;
  const ownerEmail = process.env.OWNER_EMAIL || gmailEmail; // Email właściciela (domyślnie taki sam jak GMAIL_EMAIL)

  if (!gmailEmail || !gmailPassword) {
    throw new Error("Email service not configured");
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: gmailEmail,
      pass: gmailPassword,
    },
  });

  const formattedDate = new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Warsaw",
  }).format(datetime);

  const mailOptions = {
    from: `"ML Devworks Booking System" <${gmailEmail}>`,
    to: ownerEmail,
    subject: `🔔 Nowa rezerwacja konsultacji - ${formattedDate}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
          🔔 Nowa rezerwacja konsultacji
        </h2>
        
        <p>Masz nową rezerwację konsultacji!</p>
        
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>📅 Data i godzina:</strong> ${formattedDate}</p>
          <p style="margin: 10px 0;"><strong>📧 Email klienta:</strong> <a href="mailto:${clientEmail}">${clientEmail}</a></p>
          ${clientName ? `<p style="margin: 10px 0;"><strong>👤 Imię klienta:</strong> ${clientName}</p>` : ""}
        </div>
        
        <p style="margin-top: 20px;">
          <a href="https://calendar.google.com" style="background-color: #00ff88; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: bold;">
            📅 Otwórz Google Calendar
          </a>
        </p>
        
        <div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107; border-radius: 5px;">
          <p style="margin: 0; font-weight: bold;">⚠️ Pamiętaj:</p>
          <p style="margin: 10px 0 0 0;">Dodaj link do Google Meet do wydarzenia w kalendarzu, a następnie wyślij go klientowi na email: <a href="mailto:${clientEmail}">${clientEmail}</a></p>
        </div>
        
        <p style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          To powiadomienie zostało wysłane automatycznie z systemu rezerwacji ML Devworks.
        </p>
      </div>
    `,
    text: `
🔔 Nowa rezerwacja konsultacji - ML Devworks

Masz nową rezerwację konsultacji!

📅 Data i godzina: ${formattedDate}
📧 Email klienta: ${clientEmail}
${clientName ? `👤 Imię klienta: ${clientName}` : ""}

📅 Otwórz Google Calendar: https://calendar.google.com

⚠️ Pamiętaj: Dodaj link do Google Meet do wydarzenia w kalendarzu, a następnie wyślij go klientowi na email: ${clientEmail}

---
To powiadomienie zostało wysłane automatycznie z systemu rezerwacji ML Devworks.
    `,
  };

  await transporter.sendMail(mailOptions);
}

