"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  GlobeIcon,
  CodeIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
  CloudIcon,
  WrenchIcon,
  AutomationIcon,
} from "@/components/icons/ServiceIcons";

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
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
      href: "/uslugi/strony-internetowe",
    },
    {
      icon: CodeIcon,
      title: "Aplikacje Internetowe i Mobilne",
      description: "Nowoczesne aplikacje webowe z wykorzystaniem najnowszych technologii. Szybkie, bezpieczne i skalowalne rozwiązania. Aplikacje mobilne na iOS i Android. Natywne i cross-platform rozwiązania dla Twojego biznesu.",
      href: "/uslugi/aplikacje-internetowe-i-mobilne",
    },
    {
      icon: AutomationIcon,
      title: "Automatyzacja i AI",
      description: "Inteligentni agenci AI i systemy automatyzacji procesów biznesowych. Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu.",
      href: "/uslugi/automatyzacja-i-ai",
    },
    {
      icon: ShoppingCartIcon,
      title: "Sklepy Internetowe",
      description: "Kompletne rozwiązania e-commerce z integracją płatności, dostaw, katalogu produktów, ERP/CRM i analityki sprzedaży.",
      href: "/uslugi/sklepy-internetowe-systemy-rezerwacji",
    },
    {
      icon: CloudIcon,
      title: "DevOps & Wdrożenia",
      description: "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji.",
      href: "/uslugi/devops-wdrozenia",
    },
    {
      icon: WrenchIcon,
      title: "Naprawa, Optymalizacja i Utrzymanie",
      description: "Naprawa błędów w istniejących projektach, optymalizacja wydajności, SEO i konwersji. Przywróć pełną funkcjonalność swojej strony lub aplikacji. Kompleksowe utrzymanie i wsparcie techniczne dla Twoich projektów.",
      href: "/uslugi/naprawa-optymalizacja-utrzymanie",
    },
  ],
  en: [
    {
      icon: GlobeIcon,
      title: "Websites",
      description: "Simple and advanced websites tailored to your needs. Responsive, fast, and optimized for SEO basics.",
      href: "/en/services/web-development",
    },
    {
      icon: CodeIcon,
      title: "Web and Mobile Applications",
      description: "Modern web applications using the latest technologies. Fast, secure, and scalable solutions. Mobile applications for iOS and Android. Native and cross-platform solutions for your business.",
      href: "/en/services/web-and-mobile-applications",
    },
    {
      icon: AutomationIcon,
      title: "Automation & AI",
      description: "Intelligent AI agents and business process automation systems. Automate repetitive tasks and increase your business efficiency.",
      href: "/en/services/automation-and-ai",
    },
    {
      icon: ShoppingCartIcon,
      title: "Online Stores",
      description: "Complete e-commerce solutions with payment, delivery, product catalog, ERP/CRM, and sales analytics integrations.",
      href: "/en/services/online-stores-booking-systems",
    },
    {
      icon: CloudIcon,
      title: "DevOps & Deployment",
      description: "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production.",
      href: "/en/services/devops-deployment",
    },
    {
      icon: WrenchIcon,
      title: "Fixes, Optimization & Maintenance",
      description: "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application. Comprehensive maintenance and technical support for your projects.",
      href: "/en/services/fixes-optimization-maintenance",
    },
  ],
};

export default function Services({ lang = "pl" }: ServicesProps) {
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const description1Ref = useRef(null);
  const description2Ref = useRef(null);
  const footerRef = useRef(null);
  
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-50px" });
  const isSubtitleInView = useInView(subtitleRef, { once: true, margin: "-50px" });
  const isDescription1InView = useInView(description1Ref, { once: true, margin: "-50px" });
  const isDescription2InView = useInView(description2Ref, { once: true, margin: "-50px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" });

  const serviceList = services[lang];

  return (
    <section id="services" className="py-28 md:py-32 px-4 relative scroll-mt-[20px]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="services-heading"
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-left mb-4"
        >
          {lang === "pl" ? "Usługi programistyczne i dedykowane oprogramowanie dla firm" : "Software development and custom business systems"}
        </motion.h2>
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isSubtitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-xl text-gray-400 text-left mb-4"
        >
          {lang === "pl"
            ? "Aplikacje webowe, strony internetowe, integracje API/CRM i automatyzacja procesów"
            : "Web applications, websites, API/CRM integrations and process automation"}
        </motion.p>
        
        <motion.p
          ref={description1Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescription1InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-base text-gray-300 text-left mb-4"
        >
          {lang === "pl" ? (
            <>
              Tworzę dedykowane oprogramowanie dla firm: aplikacje internetowe, panele administracyjne, systemy rezerwacji, sklepy e-commerce i automatyzacje AI.
              <br />
              Pracujesz bezpośrednio z programistą, który rozumie proces biznesowy i odpowiada za efekt końcowy.
            </>
          ) : (
            <>
              I build custom software for companies: web applications, admin panels, booking systems, e-commerce stores, and AI automation.
              <br />
              You work directly with the developer who understands the business process and owns the final result.
            </>
          )}
        </motion.p>
        
        <motion.p
          ref={description2Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isDescription2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-base text-gray-300 text-left mb-8"
        >
          {lang === "pl"
            ? "Podejmuję się również istniejących projektów: rozwijam aplikacje, naprawiam błędy, poprawiam wydajność, SEO i integracje."
            : "I also take over existing projects: app development, bug fixes, performance work, SEO improvements, and integrations."}
        </motion.p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0" role="list">
          {serviceList.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </ul>
        
        <motion.div
          ref={footerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-left mt-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            {lang === "pl" ? (
              <>
                Korzystam z <span className="text-primary font-semibold">nowoczesnych, wydajnych technologii</span> dopasowanych do specyfiki Twojego projektu oraz z <span className="text-primary font-semibold">narzędzi AI</span>, które przyspieszają analizę, prototypowanie i wdrożenie.
              </>
            ) : (
              <>
                I use <span className="text-primary font-semibold">modern, efficient technologies</span> tailored to your project&apos;s needs and <span className="text-primary font-semibold">AI tools</span> that speed up analysis, prototyping, and implementation.
              </>
            )}
          </p>
          <p className="text-base text-gray-400 italic">
            {lang === "pl"
              ? "Za jakość, bezpieczeństwo i finalny efekt odpowiada doświadczony programista, nie automatyczny generator kodu."
              : "Quality, security, and the final result are owned by an experienced developer, not an automatic code generator."}
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
  const isCardInView = useInView(cardRef, { once: true, margin: "-50px" });
  
  // Sprawdź czy to usługa "Automatyzacja i AI" / "Automation & AI"
  const isAutomationAI = service.title === "Automatyzacja i AI" || service.title === "Automation & AI";
  
  const cardContent = (
    <>
      <div className="mb-4 transform group-hover:scale-110 transition-transform duration-200" aria-hidden="true">
        <IconComponent 
          className={`w-12 h-12 transition-colors duration-200 ${
            isAutomationAI
              ? "text-amber-400 group-hover:text-amber-300"
              : "text-primary group-hover:text-primary-light"
          }`}
        />
      </div>
      <h3 className={`text-2xl font-bold mb-3 transition-colors duration-200 ${
        isAutomationAI
          ? "text-amber-400 group-hover:text-amber-300"
          : "text-primary group-hover:text-primary-light"
      }`}>
        {service.title}
      </h3>
      <p className="text-gray-400 leading-relaxed">{service.description}</p>
    </>
  );

  const cardClassName = `bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 transition-colors cursor-pointer group ${
    isAutomationAI
      ? "border-2 border-amber-400/60 hover:border-amber-400 shadow-lg shadow-amber-500/20"
      : "border border-primary/20 hover:border-primary/50"
  }`;

  if (service.href) {
    return (
      <motion.li
        ref={cardRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isCardInView ? { opacity: 1, y: 0 } : {}}
        transition={{ 
          duration: 0.5,
          delay: 0.1 + index * 0.05,
          ease: [0.16, 1, 0.3, 1]
        }}
        whileHover={{ 
          scale: 1.02,
          y: -5,
          transition: { duration: 0.2, ease: "easeOut" }
        }}
        className={cardClassName}
      >
        <Link 
          href={service.href} 
          className="block h-full w-full no-underline"
        >
          <article>{cardContent}</article>
        </Link>
      </motion.li>
    );
  }

  return (
    <motion.li
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isCardInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.5,
        delay: 0.1 + index * 0.05,
        ease: [0.16, 1, 0.3, 1]
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      className={cardClassName}
    >
      <article>{cardContent}</article>
    </motion.li>
  );
}

