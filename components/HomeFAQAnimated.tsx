"use client";

import { motion } from "framer-motion";

type FAQItem = {
  q: string;
  a: string;
};

interface HomeFAQAnimatedProps {
  lang: "pl" | "en";
  items: FAQItem[];
}

export default function HomeFAQAnimated({ lang, items }: HomeFAQAnimatedProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-primary font-semibold uppercase tracking-[0.18em] text-sm mb-3">
          FAQ
        </p>
        <h2 id="home-faq-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-left leading-tight">
          {lang === "pl" ? "Najczęstsze pytania" : "Frequently asked questions"}
        </h2>
        <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
          {lang === "pl"
            ? "Krótkie odpowiedzi dla osób, które chcą szybko ocenić, czy mogę pomóc w projekcie strony, aplikacji albo automatyzacji."
            : "Short answers for people who want to quickly decide whether I can help with a website, app, or automation project."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <motion.article
            key={item.q}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 transition-colors hover:border-primary/50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -40px 0px" }}
            transition={{ duration: 0.45, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4">{item.q}</h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">{item.a}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
