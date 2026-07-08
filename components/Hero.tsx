"use client";

import Image from "next/image";

interface HeroProps {
  lang?: "pl" | "en";
}

export default function Hero({ lang = "pl" }: HeroProps) {
  const content = {
    pl: {
      eyebrow: "Programowanie wspierane przez AI",
      title: "Aplikacje dla firm, strony internetowe i automatyzacje AI",
      lead: "Projektuję aplikacje internetowe, systemy dla firm i automatyzacje AI, które usprawniają sprzedaż, obsługę klientów i pracę zespołu.",
      description:
        "AI przyspiesza analizę i prototypowanie. Za architekturę, kod i jakość odpowiadam osobiście.",
      cta: "Opisz swój pomysł",
    },
    en: {
      eyebrow: "AI-assisted software development",
      title: "Business apps, websites and AI automation",
      lead: "I design web applications, business systems and AI automation that improve sales, customer service and team workflows.",
      description:
        "AI speeds up analysis and prototyping. I personally own architecture, code and quality.",
      cta: "Describe your idea",
    },
  };

  const t = content[lang];

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16 max-[380px]:pt-20 max-[380px]:pb-10" role="banner">
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
          <p className="text-sm md:text-base text-primary mb-4 font-semibold uppercase tracking-[0.18em] max-[380px]:mb-3 max-[380px]:text-[0.72rem] max-[380px]:leading-snug max-[380px]:tracking-[0.16em]" role="doc-subtitle">
            {t.eyebrow}
          </p>

          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent max-[380px]:mb-5 max-[380px]:text-[2.25rem] max-[380px]:leading-[1.08]">
            {t.title}
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-5 font-semibold leading-relaxed max-[380px]:mb-4 max-[380px]:text-[1.04rem] max-[380px]:leading-[1.45]">
            {t.lead}
          </p>

          <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-[380px]:mb-6 max-[380px]:text-[0.98rem] max-[380px]:leading-[1.45]">
            {t.description}
          </p>

          <nav aria-label={lang === "pl" ? "Nawigacja do sekcji kontaktowej" : "Navigation to contact section"}>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,136,0.3)] max-[380px]:px-7 max-[380px]:py-3.5"
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

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 max-[380px]:bottom-5" aria-hidden="true">
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

