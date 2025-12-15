"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { bookingConfig, getAvailableSlotsForDate, isDateAvailable } from "@/lib/bookingConfig";

interface BookingCalendarProps {
  lang?: "pl" | "en";
}

interface BookingFormData {
  email: string;
  name: string;
  date: string;
  time: string;
}

export default function BookingCalendar({ lang = "pl" }: BookingCalendarProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);
  const [formData, setFormData] = useState<BookingFormData>({
    email: "",
    name: "",
    date: "",
    time: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const content = {
    pl: {
      title: "Zarezerwuj bezpłatną konsultację (30 min)",
      subtitle: "Wybierz dogodny termin na rozmowę o Twoim projekcie",
      dateLabel: "Wybierz datę",
      timeLabel: "Wybierz godzinę",
      emailLabel: "Email",
      nameLabel: "Imię (opcjonalnie)",
      submit: "Zarezerwuj konsultację",
      submitting: "Rezerwowanie...",
      success: "Rezerwacja zakończona sukcesem! Sprawdź swój email - wkrótce otrzymasz link do spotkania Google Meet.",
      error: "Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.",
      noSlotsAvailable: "Brak dostępnych terminów w tym dniu",
      selectDateFirst: "Najpierw wybierz datę",
    },
    en: {
      title: "Book a free consultation (30 min)",
      subtitle: "Choose a convenient time to discuss your project",
      dateLabel: "Select date",
      timeLabel: "Select time",
      emailLabel: "Email",
      nameLabel: "Name (optional)",
      submit: "Book consultation",
      submitting: "Booking...",
      success: "Booking successful! Check your email - you'll receive a Google Meet link soon.",
      error: "An error occurred during booking. Please try again.",
      noSlotsAvailable: "No available slots for this day",
      selectDateFirst: "Please select a date first",
    },
  };

  const t = content[lang];

  // Generuj dostępne daty (następne X dni)
  const getAvailableDates = (): Date[] => {
    const dates: Date[] = [];
    const today = new Date();
    const maxDate = new Date(today);
    maxDate.setDate(maxDate.getDate() + bookingConfig.maxDaysInAdvance);

    for (let d = new Date(today); d <= maxDate; d.setDate(d.getDate() + 1)) {
      if (isDateAvailable(new Date(d))) {
        dates.push(new Date(d));
      }
    }

    return dates;
  };

  // Cache dla zajętych slotów (żeby nie pobierać tego samego dnia wielokrotnie)
  const bookedSlotsCache = useRef<Map<string, Date[]>>(new Map());

  // Pobierz zajęte sloty z API (z cache)
  const fetchBookedSlots = async (date: Date): Promise<Date[]> => {
    const dateKey = date.toISOString().split('T')[0];
    
    // Sprawdź cache
    if (bookedSlotsCache.current.has(dateKey)) {
      return bookedSlotsCache.current.get(dateKey)!;
    }
    
    try {
      const response = await fetch(
        `/api/booking/availability?date=${dateKey}`,
        { cache: 'force-cache' } // Cache w przeglądarce
      );
      if (response.ok) {
        const data = await response.json();
        const bookedSlots = data.bookedSlots.map((slot: string) => new Date(slot));
        // Zapisz w cache
        bookedSlotsCache.current.set(dateKey, bookedSlots);
        return bookedSlots;
      }
    } catch (error) {
      console.error("Error fetching booked slots:", error);
    }
    return [];
  };

  // Obsługa wyboru daty
  const handleDateSelect = async (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    setFormData({ ...formData, date: date.toISOString().split('T')[0], time: "" });
    setAvailableSlots([]);
    setIsLoadingSlots(true);
    
    try {
      const bookedSlots = await fetchBookedSlots(date);
      const slots = getAvailableSlotsForDate(date, bookedSlots);
      setAvailableSlots(slots);
    } finally {
      setIsLoadingSlots(false);
    }
  };

  // Obsługa wyboru godziny
  const handleTimeSelect = (slot: Date) => {
    setSelectedSlot(slot);
    const timeStr = slot.toTimeString().slice(0, 5); // HH:MM
    setFormData({ ...formData, time: timeStr });
  };

  // Formatowanie daty do wyświetlenia
  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-US", {
      weekday: "short",
      day: "numeric",
      month: "long",
    }).format(date);
  };

  // Formatowanie godziny
  const formatTime = (date: Date): string => {
    return new Intl.DateTimeFormat(lang === "pl" ? "pl-PL" : "en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  // Obsługa wysyłki formularza
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot || !formData.email) {
      setErrorMessage(lang === "pl" ? "Wypełnij wszystkie wymagane pola" : "Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const datetime = new Date(selectedSlot);
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name || undefined,
          datetime: datetime.toISOString(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setShowSuccessModal(true);
        setFormData({ email: "", name: "", date: "", time: "" });
        setSelectedDate(null);
        setSelectedSlot(null);
        setAvailableSlots([]);
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || t.error);
      }
    } catch (error) {
      console.error("Booking error:", error);
      setSubmitStatus("error");
      setErrorMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const availableDates = getAvailableDates();

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mt-16 bg-background-lighter border border-primary/20 rounded-xl p-6 md:p-8"
    >
      <div className="mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-primary">{t.title}</h3>
        <p className="text-gray-400">{t.subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Wybór daty */}
        <div>
          <label className="block text-sm font-medium mb-3">{t.dateLabel}</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {availableDates.slice(0, 15).map((date) => {
              const dateStr = date.toISOString().split('T')[0];
              const isSelected = selectedDate?.toISOString().split('T')[0] === dateStr;
              
              return (
                <button
                  key={dateStr}
                  type="button"
                  onClick={() => handleDateSelect(date)}
                  className={`px-4 py-3 rounded-lg border transition-all ${
                    isSelected
                      ? "bg-primary text-background border-primary"
                      : "bg-background border-primary/20 hover:border-primary/50 text-white"
                  }`}
                >
                  <div className="text-sm font-semibold">{formatDate(date)}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Wybór godziny */}
        {selectedDate && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
          >
            <label className="block text-sm font-medium mb-3">{t.timeLabel}</label>
            {isLoadingSlots ? (
              <div className="flex items-center justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-3 text-gray-400">{lang === "pl" ? "Ładowanie dostępnych godzin..." : "Loading available times..."}</span>
              </div>
            ) : availableSlots.length > 0 ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {availableSlots.map((slot, index) => {
                  const isSelected = selectedSlot?.getTime() === slot.getTime();
                  
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleTimeSelect(slot)}
                      className={`px-4 py-2 rounded-lg border transition-all ${
                        isSelected
                          ? "bg-primary text-background border-primary"
                          : "bg-background border-primary/20 hover:border-primary/50 text-white"
                      }`}
                    >
                      {formatTime(slot)}
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-400 italic">{t.noSlotsAvailable}</p>
            )}
          </motion.div>
        )}

        {/* Formularz danych */}
        {selectedSlot && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="space-y-4 pt-4 border-t border-primary/20"
          >
            <div>
              <label htmlFor="booking-email" className="block text-sm font-medium mb-2">
                {t.emailLabel} *
              </label>
              <input
                type="email"
                id="booking-email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                placeholder="twoj@email.com"
              />
            </div>

            <div>
              <label htmlFor="booking-name" className="block text-sm font-medium mb-2">
                {t.nameLabel}
              </label>
              <input
                type="text"
                id="booking-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none text-white"
                placeholder={lang === "pl" ? "Jan Kowalski" : "John Doe"}
              />
            </div>

            {(submitStatus === "error" || errorMessage) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
              >
                {errorMessage || t.error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !selectedSlot || !formData.email}
              className="w-full px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark focus:outline-none transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? t.submitting : t.submit}
            </button>
          </motion.div>
        )}
      </form>

      {/* Modal sukcesu */}
      {showSuccessModal && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowSuccessModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background-lighter border-2 border-primary rounded-xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label={lang === "pl" ? "Zamknij" : "Close"}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              {/* Ikona sukcesu */}
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-primary/20 mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {lang === "pl" ? "Rezerwacja zakończona sukcesem!" : "Booking Successful!"}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {t.success}
              </p>

              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105"
              >
                {lang === "pl" ? "Zamknij" : "Close"}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}

