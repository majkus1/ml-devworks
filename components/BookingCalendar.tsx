"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useMemo } from "react";

interface BookingCalendarProps {
  lang?: "pl" | "en";
}

const AVAILABLE_DAYS = [1, 2, 3, 4, 5]; // poniedziałek-piątek
const DAYS_TO_SHOW = 21;

function getNextWeekdays(count: number): Date[] {
  const result: Date[] = [];
  const now = new Date();
  let day = new Date(now);
  day.setHours(0, 0, 0, 0);
  day.setDate(day.getDate() + 1); // pomiń dzisiaj, zacznij od jutra

  while (result.length < count) {
    const dow = day.getDay() === 0 ? 7 : day.getDay();
    if (AVAILABLE_DAYS.includes(dow)) {
      result.push(new Date(day));
    }
    day.setDate(day.getDate() + 1);
  }
  return result;
}

function formatDateKey(d: Date): string {
  return d.toISOString().split("T")[0];
}

function formatDateDisplay(d: Date, lang: "pl" | "en"): string {
  return d.toLocaleDateString(lang === "pl" ? "pl-PL" : "en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function formatTime(iso: string, lang: "pl" | "en"): string {
  return new Date(iso).toLocaleTimeString(lang === "pl" ? "pl-PL" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
}

export default function BookingCalendar({ lang = "pl" }: BookingCalendarProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [slots, setSlots] = useState<string[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const weekdays = useMemo(() => getNextWeekdays(DAYS_TO_SHOW), []);

  const content = {
    pl: {
      title: "Zarezerwuj bezpłatną konsultację (30 min)",
      subtitle: "Wybierz dogodny termin i umów bezpłatne 30-minutowe spotkanie online.",
      pickDate: "Wybierz dzień",
      pickTime: "Wybierz godzinę",
      noSlots: "Brak dostępnych terminów tego dnia.",
      yourEmail: "Twój email",
      yourName: "Imię (opcjonalnie)",
      book: "Zarezerwuj",
      submitting: "Rezerwowanie...",
      success: "Rezerwacja potwierdzona! Wysłaliśmy potwierdzenie na email.",
      error: "Wystąpił błąd. Spróbuj ponownie.",
    },
    en: {
      title: "Book a free consultation (30 min)",
      subtitle: "Choose a convenient time and schedule a free 30-minute online meeting.",
      pickDate: "Pick a day",
      pickTime: "Pick a time",
      noSlots: "No available slots for this day.",
      yourEmail: "Your email",
      yourName: "Name (optional)",
      book: "Book",
      submitting: "Booking...",
      success: "Booking confirmed! We've sent a confirmation to your email.",
      error: "An error occurred. Please try again.",
    },
  };

  const t = content[lang];

  const fetchSlots = async (dateStr: string) => {
    setLoadingSlots(true);
    setSlots([]);
    setSelectedSlot(null);
    try {
      const res = await fetch(`/api/booking/availability?date=${dateStr}`);
      const data = await res.json();
      if (res.ok && data.availableSlots) {
        setSlots(data.availableSlots);
      } else {
        setSlots([]);
      }
    } catch {
      setSlots([]);
    } finally {
      setLoadingSlots(false);
    }
  };

  const handleDateClick = (dateStr: string) => {
    if (selectedDate === dateStr) {
      setSelectedDate(null);
      setSlots([]);
      setSelectedSlot(null);
      return;
    }
    setSelectedDate(dateStr);
    fetchSlots(dateStr);
  };

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot || !email.trim()) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          name: name.trim() || undefined,
          datetime: selectedSlot,
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus("success");
        setSelectedDate(null);
        setSelectedSlot(null);
        setSlots([]);
        setEmail("");
        setName("");
      } else {
        setSubmitStatus("error");
        setErrorMessage(data.error || t.error);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(t.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetFlow = () => {
    setSelectedDate(null);
    setSelectedSlot(null);
    setSlots([]);
    setEmail("");
    setName("");
    setSubmitStatus("idle");
  };

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mt-12 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 md:p-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left text-white">
          {lang === "pl"
            ? "Wolisz porozmawiać online?"
            : "Prefer to talk online?"}
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-left text-primary">
          {t.title}
        </h3>
        <p className="text-base text-gray-400 text-left mb-6" style={{ fontSize: "16px" }}>
          {t.subtitle}
        </p>

        {submitStatus === "success" ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-6 bg-primary/20 border border-primary rounded-xl"
          >
            <p className="text-primary font-semibold text-lg mb-4">{t.success}</p>
            <button
              type="button"
              onClick={resetFlow}
              className="px-4 py-2 bg-primary text-background rounded-lg hover:opacity-90 transition-opacity"
            >
              {lang === "pl" ? "Zarezerwuj inny termin" : "Book another slot"}
            </button>
          </motion.div>
        ) : (
          <>
            <p className="text-sm font-medium text-gray-400 mb-3">{t.pickDate}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {weekdays.map((d) => {
                const key = formatDateKey(d);
                const isSelected = selectedDate === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleDateClick(key)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isSelected
                        ? "bg-primary text-background"
                        : "bg-background/50 border border-primary/30 text-white hover:border-primary"
                    }`}
                  >
                    {formatDateDisplay(d, lang)}
                  </button>
                );
              })}
            </div>

            {selectedDate && (
              <>
                <p className="text-sm font-medium text-gray-400 mb-3">{t.pickTime}</p>
                {loadingSlots ? (
                  <p className="text-gray-400 mb-6">{lang === "pl" ? "Ładowanie..." : "Loading..."}</p>
                ) : slots.length === 0 ? (
                  <p className="text-gray-500 mb-6">{t.noSlots}</p>
                ) : (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {slots.map((slot) => {
                      const isSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleSlotClick(slot)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            isSelected
                              ? "bg-primary text-background"
                              : "bg-background/50 border border-primary/30 text-white hover:border-primary"
                          }`}
                        >
                          {formatTime(slot, lang)}
                        </button>
                      );
                    })}
                  </div>
                )}

                {selectedSlot && (
                  <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                    <div>
                      <label htmlFor="booking-email" className="block text-sm font-medium mb-2 text-gray-300">
                        {t.yourEmail}
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-white focus:border-primary focus:outline-none"
                        placeholder="twoj@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="booking-name" className="block text-sm font-medium mb-2 text-gray-300">
                        {t.yourName}
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg text-white focus:border-primary focus:outline-none"
                        placeholder={lang === "pl" ? "Jan Kowalski" : "John Doe"}
                      />
                    </div>
                    {submitStatus === "error" && (
                      <p className="text-red-400 text-sm">{errorMessage}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 transition-opacity"
                    >
                      {isSubmitting ? t.submitting : t.book}
                    </button>
                  </form>
                )}
              </>
            )}
          </>
        )}
      </div>
    </motion.section>
  );
}
