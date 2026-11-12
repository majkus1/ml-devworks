"use client";

import { useEffect, useRef } from "react";
import type { SiteLang } from "@/lib/services";
import { useAiAssistant } from "./AiAssistantProvider";
import { assistantContent } from "./content";
import AiAssistantChat from "./AiAssistantChat";

interface AiAssistantSectionProps {
  lang?: SiteLang;
  /** Boczna kolumna "Jak to działa". Na stronie głównej wyłączona (kroki są w sekcji procesu). */
  showSteps?: boolean;
}

export default function AiAssistantSection({ lang = "pl", showSteps = true }: AiAssistantSectionProps) {
  const { enabled, setInlineVisible } = useAiAssistant();
  const t = assistantContent[lang];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        setInlineVisible(entries.some((entry) => entry.isIntersecting));
      },
      { threshold: 0.15 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      setInlineVisible(false);
    };
  }, [setInlineVisible]);

  const benefits =
    lang === "pl"
      ? ["2–3 konkretne kierunki automatyzacji", "Orientacyjny budżet i czas wdrożenia", "Rozmowę wysyłasz do mnie jednym kliknięciem"]
      : ["2–3 concrete automation directions", "Indicative budget and timeline", "Send the conversation to me in one click"];

  const unavailable = (
    <div className="card text-center">
      <h3 className="mb-2 text-xl font-semibold text-ink">{t.unavailableTitle}</h3>
      <p className="text-muted">{t.unavailableText}</p>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      id="ai-advisor"
      className="section-y relative scroll-mt-24 overflow-hidden"
      aria-labelledby="ai-advisor-heading"
    >
      <div className="container-site relative">
        {showSteps ? (
          <>
            <header className="mb-10 max-w-3xl md:mb-14">
              <h2 id="ai-advisor-heading" className="section-heading">
                {t.sectionTitle}
              </h2>
              <p className="section-lead mt-4">{t.sectionSubtitle}</p>
            </header>

            <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)]">
              <aside className="space-y-4 lg:sticky lg:top-28">
                <h3 className="text-lg font-semibold text-ink">{t.howItWorksTitle}</h3>
                <ol className="space-y-3">
                  {t.howItWorks.map((step, index) => (
                    <li key={step.title} className="card flex gap-4 !p-5">
                      <span className="font-display text-sm font-semibold text-primary" aria-hidden="true">
                        {index + 1}.
                      </span>
                      <div>
                        <p className="mb-1 font-semibold text-ink">{step.title}</p>
                        <p className="text-sm leading-relaxed text-muted">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
              {enabled ? <AiAssistantChat variant="inline" /> : unavailable}
            </div>
          </>
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
            <header>
              <h2 id="ai-advisor-heading" className="section-heading">
                {t.sectionTitle}
              </h2>
              <p className="section-lead mt-4">{t.sectionSubtitle}</p>
              <ul className="mt-8 space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-ink">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </header>
            {enabled ? <AiAssistantChat variant="inline" /> : unavailable}
          </div>
        )}
      </div>
    </section>
  );
}
