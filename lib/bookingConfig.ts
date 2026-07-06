/**
 * Konfiguracja dostępnych slotów czasowych dla rezerwacji konsultacji
 * 
 * Możesz tutaj konfigurować:
 * - Dni tygodnia, w które są dostępne konsultacje
 * - Godziny rozpoczęcia i zakończenia
 * - Długość spotkania
 * - Strefę czasową
 * - Dni wykluczone (np. święta, urlopy)
 */

export interface TimeSlot {
  hour: number; // 0-23
  minute: number; // 0-59
}

export interface BookingConfig {
  // Dni tygodnia, w które są dostępne konsultacje (1 = poniedziałek, 7 = niedziela)
  availableDaysOfWeek: number[];
  
  // Godziny pracy (w formacie 24h)
  startTime: TimeSlot;
  endTime: TimeSlot;
  
  // Długość spotkania w minutach
  meetingDuration: number;
  
  // Strefa czasowa (użyj formatu IANA, np. 'Europe/Warsaw')
  timezone: string;
  
  // Dni wykluczone (daty w formacie YYYY-MM-DD)
  excludedDates: string[];
  
  // Minimalny czas przed rezerwacją (w godzinach)
  minHoursBeforeBooking: number;
  
  // Maksymalny czas w przód (w dniach)
  maxDaysInAdvance: number;
}

// Domyślna konfiguracja - dostosuj do swoich potrzeb
export const bookingConfig: BookingConfig = {
  // Dostępne od poniedziałku do piątku
  availableDaysOfWeek: [1, 2, 3, 4, 5], // 1=pon, 2=wt, 3=śr, 4=czw, 5=pt
  
  // Godziny pracy: 17:00 - 22:00
  startTime: { hour: 17, minute: 0 },
  endTime: { hour: 22, minute: 0 },
  
  // Spotkanie trwa 30 minut
  meetingDuration: 30,
  
  // Strefa czasowa: Warszawa
  timezone: 'Europe/Warsaw',
  
  // Przykładowe dni wykluczone (święta, urlopy)
  // Dodaj tutaj daty w formacie 'YYYY-MM-DD'
  excludedDates: [
    // '2024-12-25', // Święta Bożego Narodzenia
    // '2025-01-01', // Nowy Rok
  ],
  
  // Rezerwacja możliwa minimum 2 godziny przed terminem
  minHoursBeforeBooking: 2,
  
  // Można zarezerwować maksymalnie 30 dni w przód
  maxDaysInAdvance: 30,
};

/**
 * Zwraca datę YYYY-MM-DD (na podstawie kalendarzowego dnia przekazanej daty).
 */
function toDateStr(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Tworzy instant (Date) odpowiadający podanej godzinie ściennej w danej strefie czasowej.
 * Dzięki temu godziny są takie same niezależnie od strefy serwera (np. UTC na produkcji).
 */
function zonedTimeToUtc(dateStr: string, hour: number, minute: number, timeZone: string): Date {
  const hh = String(hour).padStart(2, '0');
  const mm = String(minute).padStart(2, '0');
  // Interpretujemy godzinę ścienną jako UTC, a następnie korygujemy o offset strefy.
  const naive = new Date(`${dateStr}T${hh}:${mm}:00Z`);
  const tzTime = new Date(naive.toLocaleString('en-US', { timeZone }));
  const utcTime = new Date(naive.toLocaleString('en-US', { timeZone: 'UTC' }));
  const offset = tzTime.getTime() - utcTime.getTime();
  return new Date(naive.getTime() - offset);
}

/**
 * Generuje dostępne sloty czasowe dla danego dnia
 */
export function getAvailableSlotsForDate(date: Date, bookedSlots: Date[]): Date[] {
  const slots: Date[] = [];
  const config = bookingConfig;

  // Sprawdź czy dzień jest wykluczony
  const dateStr = toDateStr(date);
  if (config.excludedDates.includes(dateStr)) {
    return [];
  }

  // Sprawdź czy dzień tygodnia jest dostępny
  const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay(); // Konwersja: niedziela = 7
  if (!config.availableDaysOfWeek.includes(dayOfWeek)) {
    return [];
  }

  // Utwórz sloty od startTime do endTime (w skonfigurowanej strefie czasowej)
  let currentSlot = zonedTimeToUtc(dateStr, config.startTime.hour, config.startTime.minute, config.timezone);
  const endTime = zonedTimeToUtc(dateStr, config.endTime.hour, config.endTime.minute, config.timezone);
  const stepMs = config.meetingDuration * 60 * 1000;

  while (currentSlot < endTime) {
    const slotEnd = new Date(currentSlot.getTime() + stepMs);

    // Sprawdź czy slot nie wykracza poza godzinę zakończenia
    if (slotEnd <= endTime) {
      // Sprawdź czy slot nie jest już zarezerwowany
      const isBooked = bookedSlots.some(booked => {
        const diff = Math.abs(booked.getTime() - currentSlot.getTime());
        return diff < stepMs; // W tym samym przedziale czasowym
      });

      if (!isBooked) {
        slots.push(new Date(currentSlot));
      }
    }

    // Przejdź do następnego slotu
    currentSlot = new Date(currentSlot.getTime() + stepMs);
  }

  return slots;
}

/**
 * Sprawdza czy data jest dostępna do rezerwacji
 */
export function isDateAvailable(date: Date): boolean {
  const config = bookingConfig;
  const now = new Date();
  
  // Porównaj tylko daty (bez czasu) - żeby przeszłe daty nie były pokazywane
  const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const todayOnly = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Sprawdź czy data nie jest w przeszłości
  if (dateOnly < todayOnly) {
    return false;
  }
  
  // Sprawdź minimalny czas przed rezerwacją (pełna data z czasem)
  const minTime = new Date(now.getTime() + config.minHoursBeforeBooking * 60 * 60 * 1000);
  if (date < minTime) {
    return false;
  }
  
  // Sprawdź maksymalny czas w przód
  const maxTime = new Date(now.getTime() + config.maxDaysInAdvance * 24 * 60 * 60 * 1000);
  if (date > maxTime) {
    return false;
  }
  
  // Sprawdź wykluczone daty
  const dateStr = date.toISOString().split('T')[0];
  if (config.excludedDates.includes(dateStr)) {
    return false;
  }
  
  // Sprawdź dzień tygodnia
  const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
  if (!config.availableDaysOfWeek.includes(dayOfWeek)) {
    return false;
  }
  
  return true;
}

