export type SiteLang = "pl" | "en";

export interface ServiceItem {
  id: string;
  title: Record<SiteLang, string>;
  shortTitle: Record<SiteLang, string>;
  description: Record<SiteLang, string>;
  href: Record<SiteLang, string>;
}

export const serviceItems: ServiceItem[] = [
  {
    id: "web-development",
    title: {
      pl: "Strony internetowe dla firm",
      en: "Web development for businesses",
    },
    shortTitle: {
      pl: "Strony internetowe",
      en: "Websites",
    },
    description: {
      pl: "Projektuję szybkie strony firmowe i landing page, które dobrze wyglądają na telefonie, pokazują się w Google i zamieniają odwiedziny w zapytania.",
      en: "I design fast business websites and landing pages that look good on phones, show up in Google, and turn visits into enquiries.",
    },
    href: {
      pl: "/uslugi/strony-internetowe",
      en: "/en/services/web-development",
    },
  },
  {
    id: "apps",
    title: {
      pl: "Aplikacje webowe i mobilne dla firm",
      en: "Web and mobile applications for companies",
    },
    shortTitle: {
      pl: "Aplikacje web/mobile",
      en: "Web/mobile apps",
    },
    description: {
      pl: "Buduję aplikacje webowe, panele klienta, systemy wewnętrzne oraz aplikacje iOS/Android z bezpieczną i skalowalną architekturą.",
      en: "I build web applications, customer portals, internal systems, and iOS/Android apps with secure, scalable architecture.",
    },
    href: {
      pl: "/uslugi/aplikacje-internetowe-i-mobilne",
      en: "/en/services/web-and-mobile-applications",
    },
  },
  {
    id: "mobile-apps",
    title: {
      pl: "Aplikacje mobilne dla firm na zamówienie",
      en: "Custom mobile apps for companies",
    },
    shortTitle: {
      pl: "Aplikacje mobilne",
      en: "Mobile apps",
    },
    description: {
      pl: "Tworzę aplikacje mobilne iOS i Android na zamówienie: dla pracowników w terenie, klientów, serwisu, sprzedaży i rezerwacji, z panelem administracyjnym i integracjami.",
      en: "I build custom iOS and Android mobile apps: for field employees, customers, service, sales, and bookings, with an admin panel and integrations.",
    },
    href: {
      pl: "/uslugi/aplikacje-mobilne-dla-firm",
      en: "/en/services/mobile-apps-for-companies",
    },
  },
  {
    id: "automation-ai",
    title: {
      pl: "Automatyzacja procesów i AI dla firm",
      en: "Business process automation and AI",
    },
    shortTitle: {
      pl: "Automatyzacja i AI",
      en: "Automation and AI",
    },
    description: {
      pl: "Wdrażam automatyzacje i agentów AI, które zdejmują z zespołu powtarzalną pracę, łączą programy firmy i odpowiadają klientom w kilka sekund.",
      en: "I implement automations and AI agents that take repetitive work off your team, connect your software, and answer customers in seconds.",
    },
    href: {
      pl: "/uslugi/automatyzacja-i-ai",
      en: "/en/services/automation-and-ai",
    },
  },
  {
    id: "ecommerce-booking",
    title: {
      pl: "Sklepy internetowe i e-commerce dla firm",
      en: "E-commerce development for businesses",
    },
    shortTitle: {
      pl: "Sklepy internetowe",
      en: "Online stores",
    },
    description: {
      pl: "Tworzę sklepy internetowe B2C i B2B z katalogiem produktów, koszykiem, bramkami płatniczymi, dostawami kurierskimi, integracjami ERP/CRM i automatyzacją sprzedaży.",
      en: "I build B2C and B2B online stores with product catalogs, carts, payment gateways, shipping integrations, ERP/CRM integrations, and sales automation.",
    },
    href: {
      pl: "/uslugi/sklepy-internetowe-systemy-rezerwacji",
      en: "/en/services/online-stores-booking-systems",
    },
  },
  {
    id: "booking-systems",
    title: {
      pl: "Systemy rezerwacji online dla firm",
      en: "Online booking systems for companies",
    },
    shortTitle: {
      pl: "Systemy rezerwacji online",
      en: "Online booking systems",
    },
    description: {
      pl: "Projektuję systemy rezerwacji klientów z kalendarzem dostępności, płatnościami online, przypomnieniami, panelem administracyjnym i integracjami CRM.",
      en: "I design customer booking systems with availability calendars, online payments, reminders, admin panels, and CRM integrations.",
    },
    href: {
      pl: "/uslugi/systemy-rezerwacji-online",
      en: "/en/services/online-booking-systems",
    },
  },
  {
    id: "devops",
    title: {
      pl: "DevOps i wdrożenia w chmurze",
      en: "DevOps and cloud deployment",
    },
    shortTitle: {
      pl: "DevOps i wdrożenia",
      en: "DevOps and deployment",
    },
    description: {
      pl: "Ustawiam aktualizacje aplikacji bez przestojów, kopie zapasowe i powiadomienia o awariach: CI/CD, monitoring, Docker i chmura.",
      en: "I set up app updates without downtime, backups, and outage alerts: CI/CD, monitoring, Docker, and the cloud.",
    },
    href: {
      pl: "/uslugi/devops-wdrozenia",
      en: "/en/services/devops-deployment",
    },
  },
  {
    id: "maintenance",
    title: {
      pl: "Naprawa, optymalizacja i utrzymanie projektów",
      en: "Fixes, optimization, and maintenance",
    },
    shortTitle: {
      pl: "Naprawa i utrzymanie",
      en: "Fixes and maintenance",
    },
    description: {
      pl: "Naprawiam strony i aplikacje po innych wykonawcach: szybsze ładowanie, lepsza widoczność w Google, więcej zapytań i mniej awarii.",
      en: "I fix websites and apps after other vendors: faster loading, better Google visibility, more enquiries, and fewer outages.",
    },
    href: {
      pl: "/uslugi/naprawa-optymalizacja-utrzymanie",
      en: "/en/services/fixes-optimization-maintenance",
    },
  },
];

export function getServices(lang: SiteLang) {
  return serviceItems.map((service) => ({
    id: service.id,
    title: service.title[lang],
    shortTitle: service.shortTitle[lang],
    description: service.description[lang],
    href: service.href[lang],
    alternateHref: service.href[lang === "pl" ? "en" : "pl"],
  }));
}
