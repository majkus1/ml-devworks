"use client";

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
          className="section-heading mb-4"
        >
          {lang === "pl" ? "Usługi programistyczne i dedykowane oprogramowanie dla firm" : "Software development and custom business systems"}
        </h2>
        <p className="section-lead mb-10">
          {lang === "pl"
            ? "Od strony firmowej po agenta AI: dobieram zakres do procesu, który ma zarabiać albo oszczędzać czas. Każdą usługę opisuję z cenami „od” i czasem realizacji."
            : "From a business website to an AI agent: I match the scope to the process that should earn money or save time. Every service page lists 'from' prices and timelines."}
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0" role="list">
          {serviceList.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </ul>
        
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const IconComponent = service.icon;
  
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

  const cardClassName = `bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 transition-[transform,border-color] duration-200 hover:-translate-y-1 cursor-pointer group ${
    isAutomationAI
      ? "border-2 border-amber-400/60 hover:border-amber-400 shadow-lg shadow-amber-500/20"
      : "border border-primary/20 hover:border-primary/50"
  }`;

  if (service.href) {
    return (
      <li
        className={cardClassName}
      >
        <Link 
          href={service.href} 
          className="block h-full w-full no-underline"
        >
          <article>{cardContent}</article>
        </Link>
      </li>
    );
  }

  return (
    <li
      className={cardClassName}
    >
      <article>{cardContent}</article>
    </li>
  );
}

