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
        submit: "Wyślij",
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
        submit: "Send",
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

  return (
    <section id="contact" className="py-28 md:py-32 px-4 relative scroll-mt-[100px]" style={{ scrollMarginTop: '100px' }} aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-left mb-8">
          <h2 id="contact-heading" className="max-w-5xl text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4 [text-wrap:balance]">{t.title}</h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">{t.subtitle}</p>
        </header>

        <div className="space-y-8">
          {/* Contact Info */}
          <address className="space-y-6 not-italic">
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
              <h3 className="text-lg md:text-xl font-bold mb-4 text-primary">{lang === "pl" ? "Dane kontaktowe" : "Contact details"}</h3>
              
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary/20">
                <Image
                  src="/IM.webp"
                  alt="Michał Lipka"
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-white font-semibold text-base md:text-lg">Michał Lipka</p>
                  <p className="text-gray-400 text-sm">{t.role}</p>
                </div>
              </div>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.email}</p>
                  <a
                    href="mailto:office@ml-devworks.com"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={lang === "pl" ? "Wyślij email do ML DevWorks" : "Send email to ML DevWorks"}
                  >
                    office@ml-devworks.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.phone}</p>
                  <a
                    href="tel:+48516598792"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={lang === "pl" ? "Zadzwoń do ML DevWorks" : "Call ML DevWorks"}
                  >
                    +48 516 598 792
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.address}</p>
                  <address className="text-white not-italic">
                    31-010 Kraków<br />
                    Rynek Główny 34/15
                  </address>
                </div>
              </div>
            </div>
          </address>

          {!compact && (
            <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{t.form.prototypeTitle}</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{t.form.prototypeText}</p>
            </div>
          )}

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 space-y-6"
            aria-label={lang === "pl" ? "Formularz kontaktowy" : "Contact form"}
            noValidate
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t.form.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                placeholder="twoj@email.com"
                aria-required="true"
                aria-describedby="email-description"
              />
              <span id="email-description" className="sr-only">
                {lang === "pl" ? "Wprowadź poprawny adres email" : "Enter a valid email address"}
              </span>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium mb-2"
              >
                {t.form.description}
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors resize-none"
                placeholder={t.form.descriptionPlaceholder}
                aria-required="true"
                aria-describedby="description-description"
              />
              <span id="description-description" className="sr-only">
                {lang === "pl" ? "Opisz szczegółowo swój projekt" : "Describe your project in detail"}
              </span>
            </div>

            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                {t.form.budget}
              </label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
                placeholder={lang === "pl" ? "np. 5000-10000 PLN" : "e.g. 5000-10000 PLN"}
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
                className="p-4 bg-primary/20 border border-primary rounded-lg text-primary"
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
                className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400"
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
              className="w-full px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              aria-label={isSubmitting ? t.form.submitting : t.form.submit}
            >
              {isSubmitting ? t.form.submitting : t.form.submit}
            </button>
            <p className="text-sm text-gray-400 text-left mt-2">
              {t.form.responseTime}
            </p>
          </form>
        </div>

        {/* Booking Calendar */}
        {!compact && <BookingCalendar lang={lang} />}
      </div>
    </section>
  );
}

