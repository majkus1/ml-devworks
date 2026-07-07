"use client";

import Image from "next/image";

interface HeroProps {
  lang?: "pl" | "en";
}

export default function Hero({ lang = "pl" }: HeroProps) {
  const content = {
    pl: {
      eyebrow: "Doświadczony programista + narzędzia AI",
      title: "Strony, aplikacje i automatyzacje AI dla firm",
      lead: "Tworzę rozwiązania, które wspierają sprzedaż, obsługę klientów i pracę zespołu.",
      description:
        "AI przyspiesza prototyp, ja pilnuję architektury, kodu i jakości.",
      cta: "Opisz swój pomysł",
    },
    en: {
      eyebrow: "Experienced developer + AI tools",
      title: "Websites, apps and AI automation for companies",
      lead: "I build solutions that support sales, customer service, and team operations.",
      description:
        "AI speeds up the prototype; I own architecture, code, and quality.",
      cta: "Describe your idea",
    },
  };

  const t = content[lang];

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16" role="banner">
      <div className="absolute inset-0 w-full h-full bg-background" aria-hidden="true">
        <Image
          src="/hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-primary/15 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/55 to-background/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/85" />
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
        <div className="text-left">
          <p className="text-sm md:text-base text-primary mb-4 font-semibold uppercase tracking-[0.18em]" role="doc-subtitle">
            {t.eyebrow}
          </p>

          <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            {t.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-5 font-semibold leading-relaxed">
            {t.lead}
          </p>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {t.description}
          </p>

          <nav aria-label={lang === "pl" ? "Nawigacja do sekcji kontaktowej" : "Navigation to contact section"}>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,136,0.3)]"
              aria-label={lang === "pl" ? "Przejdź do formularza kontaktowego" : "Go to contact form"}
              aria-describedby="cta-description"
            >
              {t.cta}
            </a>
            <span id="cta-description" className="sr-only">
              {lang === "pl" ? "Kliknij, aby przejść do sekcji kontaktowej" : "Click to go to contact section"}
            </span>
          </nav>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" aria-hidden="true">
        <div className="flex flex-col items-center">
          <span className="text-primary mb-2 text-sm sr-only">{lang === "pl" ? "Przewiń w dół" : "Scroll down"}</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center overflow-hidden" aria-hidden="true">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-scroll-wheel" />
          </div>
        </div>
      </div>
    </header>
  );
}
