"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useAiAssistant } from "./AiAssistantProvider";
import { assistantContent } from "./content";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface SendToOwnerFormProps {
  onClose: () => void;
}

const inputClass =
  "w-full px-4 py-3 text-base bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors";

export default function SendToOwnerForm({ onClose }: SendToOwnerFormProps) {
  const { lang, messages, markSent, sentEmail } = useAiAssistant();
  const t = assistantContent[lang];
  const reduceMotion = useReducedMotion();
  const emailRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<string | null>(sentEmail);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
      }
    };
    window.addEventListener("keydown", onKey, true);
    return () => window.removeEventListener("keydown", onKey, true);
  }, [onClose]);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setFieldError(null);
    setSubmitError(null);

    const trimmedEmail = email.trim();
    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setFieldError(t.form.emailInvalid);
      emailRef.current?.focus();
      return;
    }
    if (!consent) {
      setFieldError(t.form.consentRequired);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch("/api/ai-assistant/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          lang,
          consent,
          website,
          pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
          contact: { email: trimmedEmail, name, phone, company },
          messages: messages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (response.ok) {
        markSent(trimmedEmail);
        setDone(trimmedEmail);
      } else if (response.status === 429) {
        setSubmitError(t.form.errorRate);
      } else {
        setSubmitError(t.form.errorGeneric);
      }
    } catch {
      setSubmitError(t.form.errorGeneric);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0 z-10 bg-background-lighter/95 backdrop-blur-sm overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="ai-send-title"
    >
      <div className="p-5 md:p-6 max-w-lg mx-auto">
        {done ? (
          <div className="text-center py-8" role="status" aria-live="polite">
            <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 id="ai-send-title" className="text-2xl font-bold text-white mb-3">
              {t.form.successTitle}
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">{t.form.successText(done)}</p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t.form.cancel}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <h3 id="ai-send-title" className="text-xl md:text-2xl font-bold text-white mb-2">
                {t.form.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{t.form.subtitle}</p>
            </div>

            <div>
              <label htmlFor="ai-send-email" className="block text-sm font-medium mb-1.5">
                {t.form.email} <span className="text-primary">*</span>
              </label>
              <input
                ref={emailRef}
                id="ai-send-email"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
                placeholder="twoj@email.com"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="ai-send-name" className="block text-sm font-medium mb-1.5">
                  {t.form.name}
                </label>
                <input
                  id="ai-send-name"
                  type="text"
                  name="name"
                  autoComplete="given-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={inputClass}
                  maxLength={100}
                />
              </div>
              <div>
                <label htmlFor="ai-send-phone" className="block text-sm font-medium mb-1.5">
                  {t.form.phone}
                </label>
                <input
                  id="ai-send-phone"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className={inputClass}
                  maxLength={40}
                />
              </div>
            </div>

            <div>
              <label htmlFor="ai-send-company" className="block text-sm font-medium mb-1.5">
                {t.form.company}
              </label>
              <input
                id="ai-send-company"
                type="text"
                name="company"
                autoComplete="organization"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className={inputClass}
                maxLength={120}
              />
            </div>

            {/* Honeypot - ukryte dla ludzi, wypełniane przez boty */}
            <div className="absolute -left-[9999px] top-0 w-px h-px overflow-hidden" aria-hidden="true">
              <label htmlFor="ai-send-website">Website</label>
              <input
                id="ai-send-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(event) => setWebsite(event.target.value)}
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-gray-300 cursor-pointer">
              <input
                type="checkbox"
                name="consent"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-[#00ff88]"
                required
              />
              <span>
                {t.form.consent} <span className="text-primary">*</span>
              </span>
            </label>

            {(fieldError || submitError) && (
              <p className="p-3 bg-red-500/15 border border-red-500/60 rounded-lg text-red-300 text-sm" role="alert">
                {fieldError || submitError}
              </p>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-1">
              <button
                type="submit"
                disabled={submitting}
                className="flex-1 px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? t.form.submitting : t.form.submit}
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 bg-background border border-primary/30 rounded-lg hover:border-primary transition-colors text-white"
              >
                {t.form.cancel}
              </button>
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">{t.form.privacyNote}</p>
          </form>
        )}
      </div>
    </motion.div>
  );
}
