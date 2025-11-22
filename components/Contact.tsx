"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface ContactProps {
  lang?: "pl" | "en";
}

export default function Contact({ lang = "pl" }: ContactProps) {
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const contactInfoRef = useRef(null);
  
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-50px" });
  const isContactInfoInView = useInView(contactInfoRef, { once: true, margin: "-50px" });
  
  const [formData, setFormData] = useState({
    email: "",
    description: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const content = {
    pl: {
      title: "Skontaktuj Się Z Nami",
      subtitle: "Opisz swój projekt, a my przygotujemy najlepszą ofertę",
      email: "Email",
      phone: "Telefon",
      address: "Adres",
      form: {
        email: "Twój Email",
        description: "Opisz swój projekt",
        budget: "Budżet / Środki",
        submit: "Wyślij",
        submitting: "Wysyłanie...",
        success: "Wiadomość wysłana! Skontaktujemy się wkrótce.",
        error: "Wystąpił błąd. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
      },
    },
    en: {
      title: "Get In Touch",
      subtitle: "Describe your project and we'll prepare the best offer",
      email: "Email",
      phone: "Phone",
      address: "Address",
      form: {
        email: "Your Email",
        description: "Describe your project",
        budget: "Budget / Resources",
        submit: "Send",
        submitting: "Sending...",
        success: "Message sent! We'll contact you soon.",
        error: "An error occurred. Please try again or contact us directly.",
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
    <section id="contact" className="pt-20 pb-20 px-4 relative scroll-mt-[20px]" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-400">{t.subtitle}</p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form - First on mobile, second on desktop */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="bg-background-lighter border border-primary/20 rounded-xl p-6 space-y-6 order-1 md:order-2"
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
                placeholder={lang === "pl" ? "Opisz swój projekt..." : "Describe your project..."}
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
          </motion.form>

          {/* Contact Info - Second on mobile, first on desktop */}
          <motion.address
            ref={contactInfoRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isContactInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 not-italic order-2 md:order-1"
          >
            <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">{lang === "pl" ? "Kontakt" : "Contact"}</h3>
              
              {/* Profile Photo and Name */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-primary/20">
                <img
                  src="/IM.jpeg"
                  alt="Michał Lipka"
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="text-white font-semibold text-lg">Michał Lipka</p>
                  <p className="text-gray-400 text-sm">{lang === "pl" ? "Założyciel" : "Founder"}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.email}</p>
                  <a
                    href="mailto:office@ml-devworks.com"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={lang === "pl" ? "Wyślij email do ML Devworks" : "Send email to ML Devworks"}
                  >
                    office@ml-devworks.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.phone}</p>
                  <a
                    href="tel:+48516598792"
                    className="text-white hover:text-primary transition-colors"
                    aria-label={lang === "pl" ? "Zadzwoń do ML Devworks" : "Call ML Devworks"}
                  >
                    +48 516 598 792
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">{t.address}</p>
                  <address className="text-white not-italic">
                    00-000 Warszawa<br />
                    ul. Przykładowa 123
                  </address>
                </div>
              </div>
            </div>
          </motion.address>
        </div>
      </div>
    </section>
  );
}

