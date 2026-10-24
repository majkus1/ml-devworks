"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import BookingCalendar from "./BookingCalendar";

interface ContactProps {
  lang?: "pl" | "en";
  /** Wersja skrócona (strona główna): bez boxa o prototypie i kalendarza. */
  compact?: boolean;
}

export default function Contact({ lang = "pl", compact = false }: ContactProps) {
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const content = {
    pl: {
      title: "Opisz swój pomysł albo problem do rozwiązania",
      subtitle: "Napisz, czy chodzi o aplikację, automatyzację, stronę, system rezerwacji, integrację albo naprawę istniejącego projektu.",
      email: "Email",
      phone: "Telefon",
      address: "Adres",
      role: "Programista / AI-assisted development",
      form: {
        email: "Twój Email",
        description: "Opisz dokładnie pomysł, proces albo problem",
        descriptionPlaceholder: "Np. aplikacja, automatyzacja, CRM/API, rezerwacje albo problem w projekcie...",
        budget: "Szacunkowy budżet (opcjonalnie)",
        submit: "Wyślij opis projektu",
        submitting: "Wysyłanie...",
        success: "Wiadomość wysłana! Skontaktuję się wkrótce.",
        error: "Wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
        responseTime: "Po dokładnym opisie pomysłu na aplikację lub automatyzację wrócę zwykle w ciągu 2-5 dni z bezpłatnym, interaktywnym prototypem albo konkretną propozycją kolejnych kroków.",
        prototypeTitle: "Bezpłatny prototyp po dobrym opisie",
        prototypeText: "Jeśli opiszesz cel, użytkowników, obecny proces i oczekiwany efekt, mogę przygotować pierwszy interaktywny prototyp aplikacji lub automatyzacji za darmo. Dzięki temu szybciej zobaczysz, czy kierunek ma sens.",
      },
    },
    en: {
      title: "Describe your idea or the problem you want to solve",
      subtitle: "Tell me whether it is an app, automation, website, booking system, integration, or an existing project that needs fixing.",
      email: "Email",
      phone: "Phone",
      address: "Address",
      role: "Developer / AI-assisted development",
      form: {
        email: "Your Email",
        description: "Describe your idea, process, or problem in detail",
        descriptionPlaceholder: "E.g. app, automation, CRM/API, bookings, or a project issue...",
        budget: "Estimated budget (optional)",
        submit: "Send project brief",
        submitting: "Sending...",
        success: "Message sent! I will contact you soon.",
        error: "An error occurred. Please try again or contact me directly.",
        responseTime: "After a detailed description of an app or automation idea, I usually come back within 2-5 days with a free interactive prototype or a concrete proposal for next steps.",
        prototypeTitle: "Free prototype after a clear brief",
        prototypeText: "If you describe the goal, users, current process, and expected result, I can prepare a first interactive prototype for your app or automation for free. This helps you quickly see whether the direction makes sense.",
      },
    },
  };

  const t = content[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ email: "", description: "", budget: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-background/70 px-4 py-3 text-base text-white placeholder:text-gray-500 transition-colors focus:border-primary/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40";

  const nextSteps =
    lang === "pl"
      ? ["Czytam opis i w razie potrzeby dopytuję mailem", "W 2–5 dni wracam z prototypem albo konkretną propozycją", "Ty decydujesz, czy idziemy dalej — bez zobowiązań"]
      : ["I read your brief and ask follow-up questions by email if needed", "Within 2–5 days I come back with a prototype or a concrete proposal", "You decide whether we continue — no commitment"];

  return (
    <section id="contact" className="section-y relative scroll-mt-24 overflow-hidden" style={{ scrollMarginTop: "100px" }} aria-labelledby="contact-heading">
      <div className="pointer-events-none absolute bottom-0 left-0 h-[28rem] w-[36rem] rounded-full bg-primary/[0.06] blur-[120px]" aria-hidden="true" />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
          <div>
            <p className="eyebrow mb-5">
              <span className="eyebrow-dot" aria-hidden="true" />
              {lang === "pl" ? "Kontakt" : "Contact"}
            </p>
            <h2 id="contact-heading" className="section-heading">
              {t.title}
            </h2>
            <p className="section-lead mt-4">{t.subtitle}</p>

            <address className="card mt-8 not-italic">
              <div className="flex items-center gap-4 border-b border-white/[0.08] pb-5">
                <Image src="/IM.webp" alt="Michał Lipka" width={56} height={56} className="h-14 w-14 rounded-full border border-white/15 object-cover" />
                <div>
                  <p className="font-semibold text-white">Michał Lipka</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-3 text-[0.95rem]">
                <li>
                  <a
                    href="mailto:office@ml-devworks.com"
                    className="flex items-center gap-3 text-gray-200 transition-colors hover:text-primary"
                    aria-label={lang === "pl" ? "Wyślij email do ML DevWorks" : "Send email to ML DevWorks"}
                  >
                    <span className="icon-tile !h-9 !w-9 !rounded-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    office@ml-devworks.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+48516598792"
                    className="flex items-center gap-3 text-gray-200 transition-colors hover:text-primary"
                    aria-label={lang === "pl" ? "Zadzwoń do ML DevWorks" : "Call ML DevWorks"}
                  >
                    <span className="icon-tile !h-9 !w-9 !rounded-lg">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
                      </svg>
                    </span>
                    +48 516 598 792
                  </a>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="icon-tile !h-9 !w-9 !rounded-lg">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </span>
                  Rynek Główny 34/15, 31-010 Kraków
                </li>
              </ul>
            </address>

            <div className="mt-8">
              <h3 className="font-sans text-base font-semibold text-white">{lang === "pl" ? "Co dzieje się po wysłaniu" : "What happens next"}</h3>
              <ol className="mt-4 space-y-3">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-[0.95rem] text-gray-300">
                    <span className="font-display text-sm font-semibold text-primary">{String(index + 1).padStart(2, "0")}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {!compact && (
              <div className="card-accent mt-8">
                <h3 className="font-sans text-lg font-semibold text-white">{t.form.prototypeTitle}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-300">{t.form.prototypeText}</p>
              </div>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="h-fit space-y-5 rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-card md:p-8"
            aria-label={lang === "pl" ? "Formularz kontaktowy" : "Contact form"}
            noValidate
          >
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-200">
                {t.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder={lang === "pl" ? "twoj@email.com" : "you@company.com"}
                aria-required="true"
                aria-describedby="email-description"
              />
              <span id="email-description" className="sr-only">
                {lang === "pl" ? "Wprowadź poprawny adres email" : "Enter a valid email address"}
              </span>
            </div>

            <div>
              <label htmlFor="description" className="mb-2 block text-sm font-medium text-gray-200">
                {t.form.description}
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={7}
                value={formData.description}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder={t.form.descriptionPlaceholder}
                aria-required="true"
                aria-describedby="description-description"
              />
              <span id="description-description" className="sr-only">
                {lang === "pl" ? "Opisz szczegółowo swój projekt" : "Describe your project in detail"}
              </span>
            </div>

            <div>
              <label htmlFor="budget" className="mb-2 block text-sm font-medium text-gray-200">
                {t.form.budget}
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className={inputClass}
                placeholder={lang === "pl" ? "np. 5 000–10 000 zł" : "e.g. PLN 5,000–10,000"}
                aria-describedby="budget-description"
              />
              <span id="budget-description" className="sr-only">
                {lang === "pl" ? "Opcjonalnie podaj swój budżet" : "Optionally provide your budget"}
              </span>
            </div>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl border border-primary/50 bg-primary/10 p-4 text-primary"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {t.form.success}
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-xl border border-red-500/60 bg-red-500/10 p-4 text-red-300"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                {t.form.error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full !py-4 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
              aria-label={isSubmitting ? t.form.submitting : t.form.submit}
            >
              {isSubmitting ? t.form.submitting : t.form.submit}
            </button>
            <p className="text-sm leading-relaxed text-gray-500">{t.form.responseTime}</p>
          </form>
        </div>

        {/* Booking Calendar */}
        {!compact && <BookingCalendar lang={lang} />}
      </div>
    </section>
  );
}
