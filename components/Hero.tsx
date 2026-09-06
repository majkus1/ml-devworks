"use client";

import Image from "next/image";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";

interface HeroProps {
  lang?: "pl" | "en";
}

export default function Hero({ lang = "pl" }: HeroProps) {
  const content = {
    pl: {
      eyebrow: "Automatyzacje AI dla firm",
      title: "Zautomatyzuję to, co zabiera czas Twojemu zespołowi",
      lead: "Agenci AI, aplikacje i połączenia między systemami, które odciążają obsługę klienta i biuro. Pracujesz bezpośrednio z programistą, bez pośredników.",
      description: "Bezpłatny prototyp w 2-5 dni po opisie procesu.",
      ctaPrimary: "Zapytaj AI, co zautomatyzować",
      ctaSecondary: "Opisz projekt",
      ctaSecondaryAria: "Przejdź do formularza kontaktowego",
    },
    en: {
      eyebrow: "AI automation for companies",
      title: "I automate what eats your team's time",
      lead: "AI agents, business apps, and connections between your systems that relieve customer service and the back office. You work directly with the developer, no intermediaries.",
      description: "Free prototype within 2-5 days after you describe the process.",
      ctaPrimary: "Ask AI what to automate",
      ctaSecondary: "Describe your project",
      ctaSecondaryAria: "Go to the contact form",
    },
  };

  const t = content[lang];

  return (
    <header className="relative min-h-[90vh] flex items-center overflow-hidden pt-36 pb-24 md:pt-40 md:pb-32 max-[380px]:pt-28 max-[380px]:pb-16" role="banner">
      <div className="absolute inset-0 w-full h-full bg-background" aria-hidden="true">
        <Image src="/hero.webp" alt="" fill priority sizes="100vw" className="object-cover object-center opacity-60" />
        <div className="absolute inset-0 bg-primary/15 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/90" />
      </div>
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <p
            className="text-xs md:text-sm text-primary mb-6 md:mb-8 font-semibold uppercase tracking-[0.18em] max-[380px]:mb-4 max-[380px]:text-[0.68rem] max-[380px]:leading-snug"
            role="doc-subtitle"
          >
            {t.eyebrow}
          </p>
          <h1 className="mb-8 md:mb-10 text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent [text-wrap:balance] max-[380px]:mb-4 max-[380px]:text-[2rem]">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-10 md:mb-12 font-medium leading-relaxed [text-wrap:pretty] max-[380px]:mb-8 max-[380px]:text-base">
            {t.lead}
          </p>
          <nav aria-label={lang === "pl" ? "Główne wezwania do działania" : "Primary calls to action"} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <OpenAssistantButton
              fallbackHref="#ai-advisor"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary !text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-[0_0_30px_rgba(0,255,136,0.3)] max-[380px]:px-6 max-[380px]:py-3.5"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
              </svg>
              {t.ctaPrimary}
            </OpenAssistantButton>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-4 bg-background/60 backdrop-blur border border-primary/50 text-white font-semibold rounded-lg hover:border-primary hover:bg-primary/10 transition-colors max-[380px]:px-6 max-[380px]:py-3.5"
              aria-label={t.ctaSecondaryAria}
            >
              {t.ctaSecondary}
            </a>
          </nav>
          <p className="mt-6 text-sm md:text-base text-gray-400 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {t.description}
          </p>
        </div>
      </div>

    </header>
  );
}
