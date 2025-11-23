"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GlobeIcon,
  CodeIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
  CloudIcon,
  WrenchIcon,
} from "@/components/icons/ServiceIcons";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ServicesProps {
  lang?: "pl" | "en";
}

const services = {
  pl: [
    {
      icon: GlobeIcon,
      title: "Strony Internetowe",
      description: "Proste i zaawansowane strony internetowe dostosowane do Twoich potrzeb. Responsywne, szybkie i zoptymalizowane pod podstawy SEO.",
    },
    {
      icon: CodeIcon,
      title: "Aplikacje Internetowe",
      description: "Nowoczesne aplikacje webowe z wykorzystaniem najnowszych technologii. Szybkie, bezpieczne i skalowalne rozwiązania.",
    },
    {
      icon: SmartphoneIcon,
      title: "Aplikacje Mobilne",
      description: "Aplikacje mobilne na iOS i Android. Natywne i cross-platform rozwiązania dla Twojego biznesu.",
    },
    {
      icon: ShoppingCartIcon,
      title: "Sklepy Internetowe / Systemy Rezerwacji",
      description: "Kompletne rozwiązania e-commerce i systemy rezerwacji z integracją płatności, zarządzaniem produktami i analityką sprzedaży.",
    },
    {
      icon: CloudIcon,
      title: "DevOps & Wdrożenia",
      description: "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji.",
    },
    {
      icon: WrenchIcon,
      title: "Naprawa i Optymalizacja",
      description: "Naprawa błędów w istniejących projektach, optymalizacja wydajności, SEO i konwersji. Przywróć pełną funkcjonalność swojej strony lub aplikacji.",
    },
  ],
  en: [
    {
      icon: GlobeIcon,
      title: "Websites",
      description: "Simple and advanced websites tailored to your needs. Responsive, fast, and optimized for SEO basics.",
    },
    {
      icon: CodeIcon,
      title: "Web Applications",
      description: "Modern web applications using the latest technologies. Fast, secure, and scalable solutions.",
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile Applications",
      description: "Mobile applications for iOS and Android. Native and cross-platform solutions for your business.",
    },
    {
      icon: ShoppingCartIcon,
      title: "Online Stores / Booking Systems",
      description: "Complete e-commerce solutions and booking systems with payment integration, product management, and sales analytics.",
    },
    {
      icon: CloudIcon,
      title: "DevOps & Deployment",
      description: "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production.",
    },
    {
      icon: WrenchIcon,
      title: "Fixes & Optimization",
      description: "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application.",
    },
  ],
};

export default function Services({ lang = "pl" }: ServicesProps) {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const footerRef = useRef(null);
  
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-100px" });
  const isSubtitleInView = useInView(subtitleRef, { once: true, margin: "-100px" });
  const isDescription1InView = useInView(description1Ref, { once: true, margin: "-100px" });
  const isDescription2InView = useInView(description2Ref, { once: true, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-100px" });

  const serviceList = services[lang];

  return (
    <section id="services" className="pt-20 px-4 relative scroll-mt-[20px]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="services-heading"
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          {lang === "pl" ? "Nasze Usługi" : "Our Services"}
        </motion.h2>
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-xl text-gray-400 text-center mb-4 max-w-3xl mx-auto"
        >
          {lang === "pl"
            ? "Kompleksowe rozwiązania cyfrowe dla Twojego biznesu"
            : "Comprehensive digital solutions for your business"}
        </motion.p>
        
        <motion.p
          ref={description1Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescription1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-base text-gray-300 text-center mb-4 max-w-3xl mx-auto"
        >
          {lang === "pl" ? (
            <>
              Realizujemy projekty kompleksowo - od koncepcji, przez wdrożenie, aż po utrzymanie.
              <br />
              Stawiamy na długotrwałą współpracę.
            </>
          ) : (
            <>
              We execute projects comprehensively - from concept, through deployment, to maintenance.
              <br />
              We focus on long-term partnerships.
            </>
          )}
        </motion.p>
        
        <motion.p
          ref={description2Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescription2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-base text-gray-300 text-center mb-8 max-w-3xl mx-auto"
        >
          {lang === "pl"
            ? "Podejmujemy się również istniejących projektów - ich rozwoju, naprawy błędów, optymalizacji i rozbudowy."
            : "We also take on existing projects - their development, bug fixes, optimization, and expansion."}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {serviceList.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16 max-w-4xl mx-auto"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            {lang === "pl" ? (
              <>
                Korzystamy z <span className="text-primary font-semibold">nowoczesnych, wydajnych technologii</span> dopasowanych do specyfiki Twojego projektu oraz z <span className="text-primary font-semibold">narzędzi AI</span>, które znacznie przyspieszają wykonanie Twojego projektu.
              </>
            ) : (
              <>
                We use <span className="text-primary font-semibold">modern, efficient technologies</span> tailored to your project&apos;s needs and <span className="text-primary font-semibold">AI tools</span> that significantly speed up your project execution.
              </>
            )}
          </p>
          <p className="text-base text-gray-400 italic">
            {lang === "pl"
              ? "My pilnujemy i pracujemy nad jakością każdego rozwiązania, aby spełniało najwyższe standardy."
              : "We ensure and work on the quality of every solution to meet the highest standards."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const IconComponent = service.icon;
  const cardRef = useRef(null);
  const isCardInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-all cursor-pointer group"
      role="listitem"
    >
      <div className="mb-4 transform group-hover:scale-110 transition-transform" aria-hidden="true">
        <IconComponent 
          className="w-12 h-12 text-primary group-hover:text-primary-light transition-colors" 
        />
      </div>
      <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-primary-light transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{service.description}</p>
    </motion.article>
  );
}

