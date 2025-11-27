"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface CookieBannerProps {
  lang?: "pl" | "en";
}

export default function CookieBanner({ lang = "pl" }: CookieBannerProps) {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const currentLang = isEnglish ? "en" : "pl";
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Sprawdź czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    } else {
      // Wczytaj zapisane preferencje
      try {
        const savedPreferences = JSON.parse(consent);
        updateConsent(savedPreferences);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const updateConsent = (prefs: { analytics: boolean }) => {
    // Google Consent Mode v2
    if (typeof window !== "undefined") {
      const dataLayer = (window as any).dataLayer || [];
      
      // Aktualizuj Consent Mode przez dataLayer (działa z GTM i GA)
      dataLayer.push({
        event: "consent",
        command: "update",
        analytics_storage: prefs.analytics ? "granted" : "denied",
        ad_storage: "denied", // Zawsze denied - nie używamy reklam
        ad_user_data: "denied", // Zawsze denied - nie używamy reklam
        ad_personalization: "denied", // Zawsze denied - nie używamy reklam
      });
      
      // Jeśli gtag jest dostępny, użyj go również
      if (typeof (window as any).gtag === "function") {
        (window as any).gtag("consent", "update", {
          analytics_storage: prefs.analytics ? "granted" : "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
        });
      }
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      analytics: true,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    updateConsent(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      analytics: false,
    };
    localStorage.setItem("cookie-consent", JSON.stringify(rejected));
    updateConsent(rejected);
    setIsVisible(false);
  };

  const texts = {
    pl: {
      title: "Używamy plików cookie",
      description: "Ta strona używa plików cookie do analizy ruchu na stronie, aby poprawić Twoje doświadczenie.",
      acceptAll: "Akceptuj",
      rejectAll: "Odrzuć",
    },
    en: {
      title: "We use cookies",
      description: "This website uses cookies to analyze website traffic and improve your experience.",
      acceptAll: "Accept",
      rejectAll: "Reject",
    },
  };

  const t = texts[currentLang];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="max-w-4xl mx-auto bg-background-lighter border border-primary/30 rounded-xl shadow-2xl p-6 md:p-8">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t.title}
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleRejectAll}
              className="px-6 py-3 bg-background border border-primary/30 rounded-lg hover:border-primary/50 transition-colors text-white font-medium"
            >
              {t.rejectAll}
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-colors font-semibold flex-1"
            >
              {t.acceptAll}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

