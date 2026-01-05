"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface BookingCalendarProps {
  lang?: "pl" | "en";
}

export default function BookingCalendar({ lang = "pl" }: BookingCalendarProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const content = {
    pl: {
      title: "Zarezerwuj bezpłatną konsultację (30 min)",
      subtitle: "Wkrótce będą dostępne terminy konsultacji. Do tego czasu możesz skorzystać z formularza, napisać email bądź zadzwonić telefonicznie.",
    },
    en: {
      title: "Book a free consultation (30 min)",
      subtitle: "Booking slots will be available soon. Until then, you can use the contact form, send an email or call us by phone.",
    },
  };

  const t = content[lang];

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mt-12 bg-background-lighter border border-primary/20 rounded-xl p-6 md:p-8"
    >
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left text-white">
          {lang === "pl" 
            ? "Wolisz porozmawiać online?"
            : "Prefer to talk online?"}
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-left text-primary">{t.title}</h3>
        <p className="text-base text-gray-400 text-left" style={{ fontSize: '16px' }}>{t.subtitle}</p>
      </div>
    </motion.section>
  );
}
