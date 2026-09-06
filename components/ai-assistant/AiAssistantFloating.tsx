"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useAiAssistant } from "./AiAssistantProvider";
import { assistantContent } from "./content";
import AiAssistantChat from "./AiAssistantChat";

export const COOKIE_CONSENT_EVENT = "mld:cookie-consent";

function readConsentDecided() {
  try {
    return Boolean(window.localStorage.getItem("cookie-consent"));
  } catch {
    return true;
  }
}

export default function AiAssistantFloating() {
  const { enabled, lang, hydrated, isOpen, open, close, inlineVisible, messages, status } = useAiAssistant();
  const t = assistantContent[lang];
  const reduceMotion = useReducedMotion();
  const fabRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const [consentDecided, setConsentDecided] = useState(false);

  useEffect(() => {
    setConsentDecided(readConsentDecided());
    const onConsent = () => setConsentDecided(true);
    window.addEventListener(COOKIE_CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, onConsent);
  }, []);

  // Po zamknięciu panelu fokus wraca na (ponownie zamontowany) przycisk.
  const refocusFabRef = useRef(false);
  const showFab = consentDecided && !inlineVisible && !isOpen;
  useEffect(() => {
    if (showFab && refocusFabRef.current && fabRef.current) {
      fabRef.current.focus();
      refocusFabRef.current = false;
    }
  }, [showFab]);

  // Blokada scrolla strony i Escape, gdy panel jest otwarty.
  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), [href], input:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      refocusFabRef.current = true;
    };
  }, [isOpen, close]);

  const handleClose = useCallback(() => close(), [close]);

  if (!enabled || !hydrated) return null;

  const hasUnread = messages.length > 0 && status !== "streaming";

  return (
    <>
      <AnimatePresence>
        {showFab && (
          <motion.button
            key="ai-fab"
            ref={fabRef}
            type="button"
            onClick={open}
            aria-label={t.openFabAria}
            aria-expanded={isOpen}
            aria-controls="ai-assistant-panel"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 12 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-5 right-4 md:bottom-6 md:right-6 z-[60] inline-flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-primary text-background font-semibold shadow-[0_0_30px_rgba(0,255,136,0.35)] hover:bg-primary-light transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span className="relative flex w-7 h-7 items-center justify-center rounded-full bg-background/15" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
              </svg>
              {hasUnread && <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-amber-400 border-2 border-primary" />}
            </span>
            <span className="text-sm">{t.openFab}</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="ai-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={handleClose}
              className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-[2px]"
              aria-hidden="true"
            />
            <motion.aside
              key="ai-panel"
              ref={panelRef}
              id="ai-assistant-panel"
              role="dialog"
              aria-modal="true"
              aria-label={t.chatTitle}
              initial={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              animate={reduceMotion ? { opacity: 1 } : { x: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { x: "100%" }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-[70] w-full sm:w-[440px] h-[100dvh] sm:border-l border-primary/25 shadow-2xl bg-background-lighter"
            >
              <AiAssistantChat variant="panel" onClose={handleClose} autoFocus />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
