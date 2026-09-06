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
  const serviceList = services[lang];

  return (
    <section id="services" className="py-28 md:py-32 px-4 relative scroll-mt-[20px]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="max-w-5xl text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-left leading-tight mb-4 [text-wrap:balance]"
        >
          {lang === "pl" ? "Usługi programistyczne i dedykowane oprogramowanie dla firm" : "Software development and custom business systems"}
        </h2>
        <p className="text-base md:text-lg text-gray-400 text-left leading-relaxed mb-10 max-w-3xl">
          {lang === "pl"
            ? "Od strony firmowej po agenta AI: dobieram zakres do procesu, który ma zarabiać albo oszczędzać czas. Każdą usługę opisuję z cenami „od” i czasem realizacji."
            : "From a business website to an AI agent: I match the scope to the process that should earn money or save time. Every service page lists 'from' prices and timelines."}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0" role="list">
          {serviceList.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
            />
          ))}
        </ul>
        
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
  const isCardInView = useInView(cardRef, { once: true, margin: "0px 0px -40px 0px" });
  
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
      <h3 className={`text-lg md:text-xl font-bold mb-3 transition-colors duration-200 ${
        isAutomationAI
          ? "text-amber-400 group-hover:text-amber-300"
          : "text-primary group-hover:text-primary-light"
      }`}>
        {service.title}
      </h3>
      <p className="text-sm md:text-base text-gray-400 leading-relaxed">{service.description}</p>
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
        initial={{ opacity: 0, y: 24 }}
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
      initial={{ opacity: 0, y: 24 }}
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

