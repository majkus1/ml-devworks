import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, description, budget } = body;

    // Validate required fields
    if (!email || !description) {
      return NextResponse.json(
        { error: "Email and description are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    const gmailEmail = process.env.GMAIL_EMAIL;
    const gmailPassword = process.env.GMAIL_PASSWORD;

    if (!gmailEmail || !gmailPassword) {
      console.error("Gmail credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create transporter for Gmail SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: gmailEmail,
        pass: gmailPassword,
      },
    });

    // Email content
    const mailOptions = {
      from: `"ML Devworks Contact Form" <${gmailEmail}>`,
      to: gmailEmail, // Send to your email
      replyTo: email, // Reply to will be the form submitter's email
      subject: "Nowa wiadomość z formularza kontaktowego - ML Devworks",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff88; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
            Nowa wiadomość z formularza kontaktowego
          </h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Email klienta:</strong> <a href="mailto:${email}">${email}</a></p>
            ${budget ? `<p style="margin: 10px 0;"><strong>Budżet:</strong> ${budget}</p>` : ""}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Opis projektu:</h3>
            <p style="background-color: #fff; padding: 15px; border-left: 4px solid #00ff88; white-space: pre-wrap;">${description}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>Wiadomość wysłana: ${new Date().toLocaleString("pl-PL")}</p>
            <p>Odpowiedz na ten email, aby skontaktować się bezpośrednio z klientem.</p>
          </div>
        </div>
      `,
      text: `
Nowa wiadomość z formularza kontaktowego - ML Devworks

Email klienta: ${email}
${budget ? `Budżet: ${budget}` : ""}

Opis projektu:
${description}

---
Wiadomość wysłana: ${new Date().toLocaleString("pl-PL")}
Odpowiedz na ten email, aby skontaktować się bezpośrednio z klientem.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Contact form email sent successfully:", {
      to: gmailEmail,
      from: email,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

