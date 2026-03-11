/**
 * Blog posts configuration.
 * Add new posts here - each post can have PL and EN versions.
 */
export interface BlogPost {
  slug: string;
  slugEn: string;
  title: { pl: string; en: string };
  excerpt: { pl: string; en: string };
  image?: string;
  publishedAt: string; // ISO date
  readingTime?: { pl: string; en: string };
  keywords?: { pl: string[]; en: string[] };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji",
    slugEn: "is-ai-enough-to-build-a-website-or-app",
    title: {
      pl: "Czy AI wystarczy do stworzenia strony lub aplikacji? Dług technologiczny, bezpieczeństwo i architektura",
      en: "Is AI Enough to Build a Website or App? Technical Debt, Security, and Architecture",
    },
    excerpt: {
      pl: "Wielu przedsiębiorców chce stworzyć stronę lub aplikację wyłącznie z AI. Sprawdź, kiedy to ma sens, jakie są ryzyka i dlaczego bez architekta technicznego łatwo o dług technologiczny, błędy i problemy bezpieczeństwa.",
      en: "Many business owners want to build websites or apps using only AI. Learn when it works, where the risks are, and why technical architecture is essential to avoid debt, bugs, and security issues.",
    },
    publishedAt: "2026-03-11",
    readingTime: { pl: "10 min", en: "10 min" },
    keywords: {
      pl: [
        "czy ai wystarczy do stworzenia strony internetowej",
        "czy ai zastapi programiste",
        "strona internetowa z ai czy software house",
        "aplikacja z ai ryzyko techniczne",
        "dlug technologiczny w projektach ai",
        "bezpieczenstwo aplikacji generowanych przez ai",
        "jak dobrac architekture aplikacji",
        "stack technologiczny dla aplikacji webowej",
        "kiedy warto zatrudnic software house",
        "ai w tworzeniu stron i aplikacji",
      ],
      en: [
        "is ai enough to build a website",
        "can ai replace software developers",
        "ai generated app technical debt",
        "website built with ai vs agency",
        "security risks of ai generated code",
        "how to choose software architecture",
        "tech stack selection for web app",
        "when to hire software development agency",
        "ai assisted software development best practices",
        "business risks of ai only development",
      ],
    },
  },
  {
    slug: "system-rezerwacji-online-dla-salonu-kosmetycznego-co-wybrac-i-ile-to-trwa",
    slugEn: "online-booking-system-for-beauty-salon-what-to-choose-and-how-long-it-takes",
    title: {
      pl: "System rezerwacji online dla salonu kosmetycznego - co wybrać i ile to trwa",
      en: "Online Booking System for a Beauty Salon - What to Choose and How Long It Takes",
    },
    excerpt: {
      pl: "Praktyczny poradnik dla właścicieli salonów kosmetycznych: jak wybrać system rezerwacji online, jakie funkcje są kluczowe, ile trwa wdrożenie i jak uniknąć najczęstszych błędów. Konkretne wskazówki pod wzrost liczby wizyt.",
      en: "Practical guide for beauty salon owners: how to choose an online booking system, which features matter most, how long implementation takes, and how to avoid common mistakes. Actionable tips to increase appointment volume.",
    },
    publishedAt: "2026-03-11",
    readingTime: { pl: "9 min", en: "9 min" },
    keywords: {
      pl: [
        "system rezerwacji online dla salonu kosmetycznego",
        "rezerwacje online salon kosmetyczny",
        "jak wybrac system rezerwacji do salonu",
        "wdrozenie systemu rezerwacji ile trwa",
        "program do rezerwacji wizyt kosmetyczka",
        "system zapisow online dla salonu urody",
        "platnosci online w salonie kosmetycznym",
        "jak ograniczyc no show w salonie",
        "system rezerwacji z przypomnieniami sms",
        "integracja rezerwacji ze strona salonu",
      ],
      en: [
        "online booking system for beauty salon",
        "beauty salon appointment booking software",
        "how to choose salon booking system",
        "beauty salon booking system implementation time",
        "appointment scheduling software for salons",
        "reduce no shows beauty salon",
        "beauty salon deposits online payments",
        "booking system with sms reminders",
        "website booking integration for salon",
        "best booking workflow for beauty business",
      ],
    },
  },
  {
    slug: "kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai",
    slugEn: "when-ai-process-automation-is-worth-it-for-business",
    title: {
      pl: "Kiedy firmie opłaca się automatyzacja procesów z AI?",
      en: "When Is AI Process Automation Worth It for a Company?",
    },
    excerpt: {
      pl: "Dowiedz się, kiedy automatyzacja procesów z AI realnie przynosi zwrot z inwestycji, które obszary warto automatyzować najpierw i jak policzyć ROI. Przewodnik dla firm, które chcą rosnąć bez zwiększania kosztów operacyjnych.",
      en: "Learn when AI process automation delivers real ROI, which workflows to automate first, and how to calculate business impact. A practical guide for companies that want to scale without increasing operational costs.",
    },
    publishedAt: "2026-03-11",
    readingTime: { pl: "8 min", en: "8 min" },
    keywords: {
      pl: [
        "kiedy automatyzacja ai sie oplaca",
        "automatyzacja procesow z ai w firmie",
        "ai dla biznesu roi",
        "jak policzyc roi automatyzacji",
        "automatyzacja leadow i obslugi klienta",
        "automatyzacja workflow w malej firmie",
        "wdrozenie ai w firmie krok po kroku",
        "agenci ai dla firm",
        "automatyzacja procesow biznesowych przykłady",
        "optymalizacja kosztow operacyjnych ai",
      ],
      en: [
        "when ai automation is worth it",
        "ai process automation for business roi",
        "how to calculate automation roi",
        "business workflow automation with ai",
        "ai automation for lead handling",
        "customer support automation for companies",
        "how to implement ai in company processes",
        "ai agents for business operations",
        "high impact processes to automate first",
        "reduce operational costs with ai",
      ],
    },
  },
  {
    slug: "strona-internetowa-dla-firmy-jak-wybrac-wykonawce",
    slugEn: "business-website-how-to-choose-a-developer",
    title: {
      pl: "Strona internetowa dla firmy – jak wybrać wykonawcę i na co zwrócić uwagę",
      en: "Business Website – How to Choose a Developer and What to Look For",
    },
    excerpt: {
      pl: "Kompletny przewodnik dla przedsiębiorców: kiedy firma potrzebuje strony www, jak znaleźć i wybrać dobrego wykonawcę oraz na co zwrócić uwagę przed podpisaniem umowy. Praktyczne wskazówki od ML Devworks.",
      en: "Complete guide for business owners: when your company needs a website, how to find and choose a good developer, and what to look for before signing a contract. Practical tips from ML Devworks.",
    },
    publishedAt: "2025-03-11",
    readingTime: { pl: "8 min", en: "8 min" },
    keywords: {
      pl: [
        "strona internetowa dla firmy",
        "tworzenie strony internetowej",
        "jak wybrać firmę do strony www",
        "ile kosztuje strona internetowa",
        "wykonawca strony internetowej",
        "strona www dla firmy",
        "kiedy firma potrzebuje strony",
        "jak wybrac wykonawce strony internetowej",
        "na co zwrocic uwage przy stronie firmowej",
        "ile trwa stworzenie strony internetowej",
        "strona internetowa dla malej firmy",
      ],
      en: [
        "business website",
        "website for business",
        "how to choose web developer",
        "website development company",
        "when does business need website",
        "professional website",
        "how to choose website development agency",
        "business website cost and timeline",
        "website checklist for small business",
        "what to ask before building a website",
      ],
    },
  },
];
