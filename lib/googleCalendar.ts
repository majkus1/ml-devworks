import { google } from 'googleapis';

/**
 * Tworzy wydarzenie w Google Calendar
 */
export async function createCalendarEvent(
  summary: string,
  description: string,
  startTime: Date,
  endTime: Date,
  attendeeEmail: string
): Promise<{ eventId: string }> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!calendarId || !serviceAccountEmail || !privateKey) {
    throw new Error('Missing Google Calendar configuration');
  }

  // Autoryzacja z Service Account
  const auth = new google.auth.JWT({
    email: serviceAccountEmail,
    key: privateKey,
    scopes: [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events',
    ],
  });

  const calendar = google.calendar({ version: 'v3', auth });

  // Utwórz wydarzenie w Google Calendar
  // UWAGA: Nie dodajemy attendees tutaj, bo Service Account nie może zapraszać bez Domain-Wide Delegation
  // Zamiast tego dodamy uczestnika do opisu i wyślemy mu email osobno
  
  const event = {
    summary,
    description: `${description}\n\nEmail uczestnika: ${attendeeEmail}`,
    start: {
      dateTime: startTime.toISOString(),
      timeZone: 'Europe/Warsaw',
    },
    end: {
      dateTime: endTime.toISOString(),
      timeZone: 'Europe/Warsaw',
    },
    reminders: {
      useDefault: false,
      overrides: [
        { method: 'email', minutes: 24 * 60 }, // Dzień wcześniej
        { method: 'popup', minutes: 15 }, // 15 minut przed
      ],
    },
  };

  try {
    const response = await calendar.events.insert({
      calendarId,
      requestBody: event,
    });

    const eventId = response.data.id!;
    return { eventId };
  } catch (error) {
    console.error('Error creating calendar event:', error);
    throw new Error('Failed to create calendar event');
  }
}

