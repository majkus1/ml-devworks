"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface AboutIntroProps {
  lang?: "pl" | "en";
}

export default function AboutIntro({ lang = "pl" }: AboutIntroProps) {
  const headingRef = useRef(null);
  const leadRef = useRef(null);
  const cardsRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isLeadInView = useInView(leadRef, { once: true, margin: "-100px" });
  const areCardsInView = useInView(cardsRef, { once: true, margin: "-50px" });

  const content = {
    pl: {
      title: "Nie rozmawiasz z handlowcem. Pracujesz bezpośrednio z programistą odpowiedzialnym za projekt",
      lead: "Patrzę na projekt jak programista z doświadczeniem biznesowym: najpierw rozumiem proces, klienta i cel, a dopiero potem dobieram technologię. Tworzę dedykowane oprogramowanie dla firm: aplikacje webowe, panele administracyjne, integracje API/CRM, systemy rezerwacji i automatyzacje procesów.",
      cards: [
        {
          title: "Biznes przed kodem",
          text: "Pomagam przełożyć pomysł, problem operacyjny albo proces sprzedaży na konkretne funkcje i priorytety wdrożenia.",
        },
        {
          title: "Strony, aplikacje i sklepy",
          text: "Projektuję strony internetowe, aplikacje webowe i mobilne, sklepy, panele klienta oraz systemy rezerwacji dla firm.",
        },
        {
          title: "Automatyzacja i AI",
          text: "Wdrażam automatyzacje procesów, integracje API i rozwiązania AI, które ograniczają pracę ręczną.",
        },
        {
          title: "Rozwój i naprawa",
          text: "Przejmuję istniejące projekty po innych wykonawcach: naprawiam błędy, poprawiam Core Web Vitals i SEO.",
        },
      ],
    },
    en: {
      title: "You do not talk to a salesperson. You work directly with the developer responsible for the project",
      lead: "I approach projects as a developer with business awareness: first I understand the process, customer, and goal, then I choose the right technology. I build custom software for companies: web apps, admin panels, API/CRM integrations, booking systems, and process automation.",
      cards: [
        {
          title: "Business before code",
          text: "I help turn an idea, operational problem, or sales process into clear features and implementation priorities.",
        },
        {
          title: "Websites, apps and stores",
          text: "I design websites, web and mobile applications, online stores, customer portals, and booking systems for companies.",
        },
        {
          title: "Automation and AI",
          text: "I implement process automation, API integrations, and AI solutions that reduce manual work.",
        },
        {
          title: "Development and fixes",
          text: "I take over existing projects from other vendors: fixing bugs and improving Core Web Vitals and SEO.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="px-4 py-28 md:py-32" aria-labelledby="about-intro-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="about-intro-heading"
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-left leading-tight mb-6 text-white"
        >
          {t.title}
        </motion.h2>

        <motion.p
          ref={leadRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isLeadInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-300 text-left leading-relaxed mb-12"
        >
          {t.lead}
        </motion.p>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {t.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              animate={areCardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-gray-300 leading-relaxed">{card.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
