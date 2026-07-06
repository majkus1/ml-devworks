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
      title: "Technologia dla firm, które chcą szybciej sprzedawać i sprawniej działać",
      lead: "Łączymy pracę senior developera z narzędziami AI. Jakość architektury, bezpieczeństwo i SEO techniczne zostają po naszej stronie — projekty powstają szybciej, bez długu technologicznego.",
      cards: [
        {
          title: "Strony, aplikacje i sklepy",
          text: "Projektujemy strony internetowe, aplikacje webowe i mobilne, sklepy oraz systemy rezerwacji dla firm.",
        },
        {
          title: "Automatyzacja i AI",
          text: "Wdrażamy automatyzacje procesów, integracje API i rozwiązania AI, które ograniczają pracę ręczną.",
        },
        {
          title: "Rozwój i naprawa",
          text: "Przejmujemy istniejące projekty po innych wykonawcach: naprawiamy błędy, poprawiamy Core Web Vitals i SEO.",
        },
      ],
    },
    en: {
      title: "Technology for companies that want to sell faster and operate more efficiently",
      lead: "We combine senior development work with AI tools. Architecture quality, security, and technical SEO stay under human control — projects move faster, without technical debt.",
      cards: [
        {
          title: "Websites, apps and stores",
          text: "We design websites, web and mobile applications, online stores, and booking systems for companies.",
        },
        {
          title: "Automation and AI",
          text: "We implement process automation, API integrations, and AI solutions that reduce manual work.",
        },
        {
          title: "Development and fixes",
          text: "We take over existing projects from other vendors: fixing bugs and improving Core Web Vitals and SEO.",
        },
      ],
    },
  };

  const t = content[lang];

  return (
    <section className="px-4 py-20" aria-labelledby="about-intro-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="about-intro-heading"
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center leading-tight mb-6 text-white max-w-4xl mx-auto"
        >
          {t.title}
        </motion.h2>

        <motion.p
          ref={leadRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isLeadInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-300 text-center leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          {t.lead}
        </motion.p>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-3">
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
