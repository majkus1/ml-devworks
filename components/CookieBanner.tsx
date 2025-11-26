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
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics: false,
  });

  useEffect(() => {
    // Sprawdź czy użytkownik już wyraził zgodę
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    } else {
      // Wczytaj zapisane preferencje
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
        updateConsent(savedPreferences);
      } catch (e) {
        setIsVisible(true);
      }
    }
  }, []);

  const updateConsent = (prefs: typeof preferences) => {
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
    setPreferences(allAccepted);
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted));
    updateConsent(allAccepted);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const rejected = {
      analytics: false,
    };
    setPreferences(rejected);
    localStorage.setItem("cookie-consent", JSON.stringify(rejected));
    updateConsent(rejected);
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences));
    updateConsent(preferences);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleToggleAnalytics = () => {
    setPreferences((prev) => ({ ...prev, analytics: !prev.analytics }));
  };

  const texts = {
    pl: {
      title: "Używamy plików cookie",
      description: "Ta strona używa plików cookie, aby poprawić Twoje doświadczenie. Niektóre są niezbędne do działania strony, inne pomagają nam analizować ruch na stronie.",
      analytics: "Analityka",
      analyticsDesc: "Pozwalają nam analizować ruch na stronie i poprawiać jej działanie.",
      acceptAll: "Akceptuj wszystkie",
      rejectAll: "Odrzuć opcjonalne",
      savePreferences: "Zapisz preferencje",
      settings: "Ustawienia",
      close: "Zamknij",
    },
    en: {
      title: "We use cookies",
      description: "This website uses cookies to improve your experience. Some are essential for the site to function, others help us analyze website traffic.",
      analytics: "Analytics",
      analyticsDesc: "Allow us to analyze website traffic and improve its performance.",
      acceptAll: "Accept all",
      rejectAll: "Reject optional",
      savePreferences: "Save preferences",
      settings: "Settings",
      close: "Close",
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
          {!showSettings ? (
            <>
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
                  onClick={() => setShowSettings(true)}
                  className="px-6 py-3 bg-background border border-primary/30 rounded-lg hover:border-primary/50 transition-colors text-white font-medium"
                >
                  {t.settings}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-colors font-semibold"
                >
                  {t.acceptAll}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    {t.settings}
                  </h3>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={t.close}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-gray-300 text-sm mb-6">
                  {t.description}
                </p>
              </div>

              <div className="space-y-4 mb-6">
                {/* Analytics Cookies */}
                <div className="flex items-start gap-4 p-4 bg-background rounded-lg border border-primary/20">
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-2">{t.analytics}</h4>
                    <p className="text-sm text-gray-400">{t.analyticsDesc}</p>
                  </div>
                  <button
                    onClick={handleToggleAnalytics}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      preferences.analytics ? "bg-primary" : "bg-gray-600"
                    }`}
                    aria-label={t.analytics}
                  >
                    <div
                      className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        preferences.analytics ? "translate-x-6" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-3 bg-background border border-primary/30 rounded-lg hover:border-primary/50 transition-colors text-white font-medium"
                >
                  {t.rejectAll}
                </button>
                <button
                  onClick={handleSavePreferences}
                  className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary-light transition-colors font-semibold flex-1"
                >
                  {t.savePreferences}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

