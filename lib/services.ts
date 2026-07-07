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
      pl: "Projektuję szybkie, responsywne strony firmowe, landing page i serwisy ofertowe przygotowane pod SEO techniczne oraz pozyskiwanie zapytań.",
      en: "I design fast, responsive business websites, landing pages, and offer pages prepared for technical SEO and lead generation.",
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
      pl: "Wdrażam agentów AI, automatyzacje workflow, integracje narzędzi i systemy, które ograniczają pracę manualną oraz przyspieszają obsługę klienta.",
      en: "I implement AI agents, workflow automation, tool integrations, and systems that reduce manual work and speed up customer service.",
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
      pl: "Porządkuję deploymenty, CI/CD, monitoring, backup, Docker, chmurę i utrzymanie infrastruktury dla aplikacji produkcyjnych.",
      en: "I improve deployments, CI/CD, monitoring, backups, Docker, cloud infrastructure, and maintenance for production applications.",
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
      pl: "Diagnozuję i naprawiam strony oraz aplikacje po innych wykonawcach, poprawiam Core Web Vitals, SEO techniczne, konwersję i stabilność.",
      en: "I diagnose and fix websites and applications after other vendors, improving Core Web Vitals, technical SEO, conversion, and stability.",
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
