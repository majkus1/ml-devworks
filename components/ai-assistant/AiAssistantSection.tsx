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

  return (
    <section
      ref={sectionRef}
      id="ai-advisor"
      className="relative py-24 md:py-28 px-4 scroll-mt-[100px] overflow-hidden"
      aria-labelledby="ai-advisor-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,136,0.08),transparent_45%)] pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <header className="mb-10 md:mb-14 max-w-3xl">
          <p className="text-primary font-semibold mb-3 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            {t.sectionEyebrow}
          </p>
          <h2 id="ai-advisor-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            {t.sectionTitle}
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">{t.sectionSubtitle}</p>
        </header>

        <div className={showSteps ? "grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] items-start" : "max-w-4xl"}>
          {showSteps && (
          <aside className="space-y-4 lg:sticky lg:top-28">
            <h3 className="text-lg font-bold text-white">{t.howItWorksTitle}</h3>
            <ol className="space-y-3">
              {t.howItWorks.map((step, index) => (
                <li key={step.title} className="flex gap-4 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-4 hover:border-primary/50 transition-colors">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-background font-bold flex items-center justify-center" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white mb-1">{step.title}</p>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </aside>
          )}

          {enabled ? (
            <AiAssistantChat variant="inline" />
          ) : (
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-2">{t.unavailableTitle}</h3>
              <p className="text-gray-400">{t.unavailableText}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
