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
  dateModified?: string; // ISO date
  readingTime?: { pl: string; en: string };
  keywords?: { pl: string[]; en: string[] };
  faq?: {
    pl: { q: string; a: string }[];
    en: { q: string; a: string }[];
  };
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi",
    slugEn: "how-much-does-business-process-automation-cost-and-how-to-calculate-roi",
    title: {
      pl: "Koszt automatyzacji procesów i ROI dla firm",
      en: "Business Process Automation Cost and ROI",
    },
    excerpt: {
      pl: "Sprawdź, od czego zależy koszt automatyzacji, które procesy dają szybki zwrot i jak policzyć ROI przed wdrożeniem.",
      en: "See what drives automation cost, which workflows deliver fast ROI, and how to estimate payback before implementation.",
    },
    publishedAt: "2026-07-06",
    dateModified: "2026-07-06",
    readingTime: { pl: "10 min", en: "10 min" },
    keywords: {
      pl: [
        "ile kosztuje automatyzacja procesow w firmie",
        "automatyzacja procesow roi",
        "uslugi automatyzacji procesow",
        "automatyzacja ai dla firm koszt",
        "jak liczyc roi automatyzacji",
        "automatyzacja procesow biznesowych ai",
        "firma od automatyzacji ai",
        "programista automatyzacji ai",
      ],
      en: [
        "business process automation cost",
        "automation roi calculation",
        "ai automation cost for companies",
        "workflow automation roi",
        "business process automation services",
        "ai automation developer",
        "how to calculate automation roi",
      ],
    },
    faq: {
      pl: [
        {
          q: "Ile kosztuje automatyzacja procesów w firmie?",
          a: "Proste automatyzacje zwykle zaczynają się od kilku tysięcy złotych netto. Koszt rośnie przy integracjach z CRM/ERP, agentach AI, panelach administracyjnych i automatyzacjach obejmujących kilka systemów.",
        },
        {
          q: "Jak policzyć ROI automatyzacji?",
          a: "Najprościej porównać miesięczny koszt pracy ręcznej, błędów i opóźnień z kosztem wdrożenia oraz utrzymania automatyzacji. Dobrze wybrany proces powinien mieć mierzalny czas zwrotu.",
        },
      ],
      en: [
        {
          q: "How much does business process automation cost?",
          a: "Simple automations usually start from a few thousand PLN net. Cost increases with CRM/ERP integrations, AI agents, admin panels, and workflows spanning multiple systems.",
        },
        {
          q: "How do you calculate automation ROI?",
          a: "Compare the monthly cost of manual work, errors, and delays with implementation and maintenance cost. A well-selected process should have a measurable payback period.",
        },
      ],
    },
  },
  {
    slug: "system-rezerwacji-dla-firmy-uslugowej-funkcje-integracje-platnosci-wdrozenie",
    slugEn: "booking-system-for-service-business-features-payment-integrations-implementation",
    title: {
      pl: "System rezerwacji dla firmy usługowej",
      en: "Booking System for a Service Business",
    },
    excerpt: {
      pl: "Jak zaplanować system rezerwacji: kalendarz dostępności, płatności online, przypomnienia, CRM i panel administracyjny.",
      en: "How to plan a customer booking system for a service business: availability calendar, online payments, reminders, CRM, admin panel, and implementation stages.",
    },
    publishedAt: "2026-07-03",
    dateModified: "2026-07-06",
    readingTime: { pl: "9 min", en: "9 min" },
    keywords: {
      pl: [
        "system rezerwacji klientow",
        "system rezerwacji dla firmy uslugowej",
        "system elektronicznych rezerwacji",
        "system platnosci dla rezerwacji online",
        "rezerwacje online dla firm",
        "program do rezerwacji wizyt",
        "integracja platnosci z systemem rezerwacji",
      ],
      en: [
        "booking system for service business",
        "customer booking system",
        "online appointment booking system",
        "booking system payment integration",
        "service business booking software",
        "online reservations for companies",
      ],
    },
    faq: {
      pl: [
        {
          q: "Co powinien zawierać system rezerwacji dla firmy usługowej?",
          a: "Najczęściej: kalendarz dostępności, usługi, pracowników, płatności lub zaliczki, automatyczne potwierdzenia, przypomnienia, panel administracyjny i integracje z CRM lub stroną internetową.",
        },
        {
          q: "Czy system rezerwacji warto budować jako dedykowane rozwiązanie?",
          a: "Tak, jeśli gotowe narzędzia nie obsługują Twoich reguł, płatności, integracji albo wielu typów usług. W prostych przypadkach wystarczy konfiguracja gotowej platformy.",
        },
      ],
      en: [
        {
          q: "What should a booking system for a service business include?",
          a: "Usually: availability calendar, services, staff, payments or deposits, automatic confirmations, reminders, admin panel, and integrations with CRM or website.",
        },
        {
          q: "Is a custom booking system worth building?",
          a: "Yes, when ready-made tools cannot handle your rules, payments, integrations, or service types. In simple cases, configuring an existing platform may be enough.",
        },
      ],
    },
  },
  {
    slug: "agenci-ai-w-obsludze-klienta-kiedy-sie-oplacaja",
    slugEn: "ai-agents-in-customer-service-when-they-are-worth-it",
    title: {
      pl: "Agenci AI w obsłudze klienta - kiedy się opłacają?",
      en: "AI Agents in Customer Service - When Are They Worth It?",
    },
    excerpt: {
      pl: "Kiedy agent AI realnie pomaga w obsłudze klienta, a kiedy wystarczy zwykły chatbot lub lepszy formularz? Sprawdź kryteria, koszty, ryzyka i przykładowe procesy.",
      en: "When does an AI agent actually help customer service, and when is a simple chatbot or better form enough? Learn criteria, costs, risks, and example workflows.",
    },
    publishedAt: "2026-06-26",
    dateModified: "2026-07-06",
    readingTime: { pl: "8 min", en: "8 min" },
    keywords: {
      pl: [
        "agenci ai w obsludze klienta",
        "agent ai dla firmy",
        "automatyzacja obslugi klienta ai",
        "chatbot ai dla strony",
        "automatyzacja leadow i obslugi klienta",
        "ai dla biznesu",
      ],
      en: [
        "ai agents in customer service",
        "ai customer support automation",
        "ai agent for business",
        "website ai chatbot",
        "lead handling automation",
        "ai for customer service roi",
      ],
    },
    faq: {
      pl: [
        {
          q: "Kiedy agent AI opłaca się w obsłudze klienta?",
          a: "Gdy firma ma powtarzalne pytania, dużo zapytań poza godzinami pracy, długi czas reakcji lub potrzebę kwalifikowania zgłoszeń przed kontaktem z człowiekiem.",
        },
        {
          q: "Czy agent AI zastępuje dział obsługi klienta?",
          a: "Najczęściej nie. Dobrze zaprojektowany agent AI obsługuje powtarzalne sprawy, zbiera dane i przekazuje trudniejsze tematy do zespołu.",
        },
      ],
      en: [
        {
          q: "When is an AI agent worth it in customer service?",
          a: "When the company has repetitive questions, many enquiries outside business hours, slow response times, or needs to qualify requests before human contact.",
        },
        {
          q: "Does an AI agent replace the customer service team?",
          a: "Usually not. A well-designed AI agent handles repetitive cases, collects data, and routes more complex topics to the team.",
        },
      ],
    },
  },
  {
    slug: "integracja-systemow-w-firmie-api-crm-erp-jak-zaczac",
    slugEn: "business-system-integration-api-crm-erp-how-to-start",
    title: {
      pl: "Integracja systemów w firmie: API, CRM, ERP - jak zacząć",
      en: "Business System Integration: API, CRM, ERP - How to Start",
    },
    excerpt: {
      pl: "Jak uporządkować integracje API, CRM, ERP, formularze, płatności i raportowanie oraz ograniczyć ręczne przepisywanie danych.",
      en: "How to organize API, CRM, ERP, forms, payments, and reporting integrations. A practical plan for companies that want to reduce manual data entry.",
    },
    publishedAt: "2026-06-18",
    dateModified: "2026-07-06",
    readingTime: { pl: "10 min", en: "10 min" },
    keywords: {
      pl: [
        "integracja systemow w firmie",
        "integracje api crm erp",
        "integracja crm ze strona",
        "oprogramowanie dla firm",
        "panel klienta dla firmy",
        "automatyzacja przeplywu danych",
        "dedykowane oprogramowanie dla firm",
      ],
      en: [
        "business system integration",
        "api crm erp integration",
        "crm website integration",
        "custom software for companies",
        "client portal development",
        "data workflow automation",
        "business software integration",
      ],
    },
    faq: {
      pl: [
        {
          q: "Od czego zacząć integrację systemów w firmie?",
          a: "Od mapy przepływu danych: skąd dane przychodzą, kto je przetwarza, gdzie są błędy i które ręczne kroki generują największy koszt czasu.",
        },
        {
          q: "Czy każda integracja wymaga dedykowanej aplikacji?",
          a: "Nie. Czasem wystarczy automatyzacja przez API lub gotowy connector. Dedykowana aplikacja ma sens, gdy potrzebny jest panel, niestandardowe reguły lub wiele źródeł danych.",
        },
      ],
      en: [
        {
          q: "Where should business system integration start?",
          a: "Start with a data flow map: where data comes from, who processes it, where errors happen, and which manual steps cost the most time.",
        },
        {
          q: "Does every integration require a custom application?",
          a: "No. Sometimes an API automation or ready connector is enough. Custom software makes sense when you need a panel, custom rules, or multiple data sources.",
        },
      ],
    },
  },
  {
    slug: "kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy",
    slugEn: "comprehensive-software-services-for-businesses-how-to-match-solutions-to-industry",
    title: {
      pl: "Usługi programistyczne dla firm - jak dobrać zakres",
      en: "Software Services for Businesses - How to Choose",
    },
    excerpt: {
      pl: "Jak dobrać rozwiązanie do branży: aplikację, stronę, system rezerwacji, integrację lub automatyzację procesu.",
      en: "How to match software work to your industry: app, website, booking system, integration, or process automation.",
    },
    publishedAt: "2026-03-11",
    dateModified: "2026-07-06",
    readingTime: { pl: "11 min", en: "11 min" },
    keywords: {
      pl: [
        "kompleksowe uslugi programistyczne dla firm",
        "aplikacja dla firm budowlanych",
        "strona dla salonu fryzjerskiego",
        "system rezerwacji dla salonu beauty",
        "aplikacja dla firmy transportowej",
        "system zarzadzania klientami dla firmy uslugowej",
        "panel administracyjny dla firmy",
        "panel klienta dla firmy",
        "strona internetowa dla gabinetu medycznego",
        "oprogramowanie dla malych i srednich firm",
        "dedykowane rozwiazania it dla biznesu",
        "programista dla firm z roznych branż",
      ],
      en: [
        "comprehensive software services for businesses",
        "app for construction company",
        "website for hair salon business",
        "online booking system for beauty salon",
        "software for transport and logistics company",
        "customer management system for service business",
        "admin dashboard for business operations",
        "client portal development for companies",
        "website for medical clinic",
        "custom software solutions for small business",
        "industry specific web application development",
        "software developer for business digital transformation",
      ],
    },
    faq: {
      pl: [
        {
          q: "Jak dobrać usługę programistyczną do branży?",
          a: "Najpierw określamy proces, który ma zarabiać lub oszczędzać czas: pozyskiwanie leadów, rezerwacje, obsługę klienta, panel administracyjny albo integracje z narzędziami firmy.",
        },
        {
          q: "Czy każda firma potrzebuje dedykowanej aplikacji?",
          a: "Nie. Czasem wystarczy szybka strona z dobrym SEO albo gotowe narzędzie z integracją. Dedykowana aplikacja ma sens, gdy proces jest nietypowy lub mocno wpływa na koszty operacyjne.",
        },
      ],
      en: [
        {
          q: "How do you match software services to an industry?",
          a: "We start with the process that should create revenue or save time: lead generation, booking, customer service, admin panels, or integrations with existing business tools.",
        },
        {
          q: "Does every company need a custom application?",
          a: "No. Sometimes a fast SEO-ready website or a ready tool with integration is enough. Custom software makes sense when the process is unusual or strongly affects operating costs.",
        },
      ],
    },
  },
  {
    slug: "social-media-czy-wlasna-strona-firmowa-co-bardziej-sie-oplaca",
    slugEn: "social-media-vs-business-website-what-brings-better-results",
    title: {
      pl: "Social media czy własna strona firmowa?",
      en: "Social Media vs Business Website",
    },
    excerpt: {
      pl: "Sprawdź, kiedy social media nie wystarczają i jak własna strona zwiększa konwersję, SEO oraz stabilność pozyskiwania klientów.",
      en: "Learn when social media is not enough and how a business website improves conversion, SEO, and stable customer acquisition.",
    },
    publishedAt: "2026-03-11",
    dateModified: "2026-06-28",
    readingTime: { pl: "9 min", en: "9 min" },
    keywords: {
      pl: [
        "social media czy strona internetowa dla firmy",
        "czy firma potrzebuje strony www majac instagram",
        "instagram vs strona internetowa",
        "facebook tiktok a wlasna strona firmowa",
        "dlaczego strona internetowa jest wazna dla firmy",
        "pozyskiwanie klientow z google i social media",
        "seo dla firm uslugowych",
        "konwersja na stronie internetowej firmy",
        "marketing firmy social media i strona",
        "jak promowac firme w internecie skutecznie",
      ],
      en: [
        "social media vs business website",
        "does a business need a website if it has instagram",
        "instagram vs website for lead generation",
        "facebook tiktok and company website strategy",
        "why every business needs a website",
        "google seo and social media marketing together",
        "how to get clients from website and social media",
        "business website conversion optimization",
        "digital marketing strategy for small business",
        "owned channel vs rented platform marketing",
      ],
    },
    faq: {
      pl: [
        {
          q: "Czy social media mogą zastąpić stronę firmową?",
          a: "Mogą wspierać sprzedaż, ale nie zastępują własnej strony. Strona daje kontrolę nad treścią, SEO, formularzami, analityką i ścieżką konwersji.",
        },
        {
          q: "Kiedy firma powinna inwestować w stronę zamiast kolejnego kanału social media?",
          a: "Gdy chce pozyskiwać klientów z Google, zbierać zapytania ofertowe i budować wiarygodność poza platformami, których algorytm może się zmienić z dnia na dzień.",
        },
      ],
      en: [
        {
          q: "Can social media replace a business website?",
          a: "Social media can support sales, but it does not replace an owned website. A website gives control over content, SEO, forms, analytics, and conversion flow.",
        },
        {
          q: "When should a company invest in a website instead of another social channel?",
          a: "When it wants to acquire clients from Google, collect qualified enquiries, and build credibility outside platforms whose algorithms can change overnight.",
        },
      ],
    },
  },
  {
    slug: "czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji",
    slugEn: "is-ai-enough-to-build-a-website-or-app",
    title: {
      pl: "Czy AI wystarczy do stworzenia strony lub aplikacji?",
      en: "Is AI Enough to Build a Website or App?",
    },
    excerpt: {
      pl: "Sprawdź, kiedy AI pomaga w budowie strony lub aplikacji, a kiedy potrzebna jest architektura, kontrola jakości i bezpieczeństwo.",
      en: "Learn when AI helps build a website or app and when architecture, quality control, and security decisions are still needed.",
    },
    publishedAt: "2026-03-11",
    dateModified: "2026-06-20",
    readingTime: { pl: "10 min", en: "10 min" },
    keywords: {
      pl: [
        "czy ai wystarczy do stworzenia strony internetowej",
        "czy ai zastapi programiste",
        "strona internetowa z ai czy programista",
        "aplikacja z ai ryzyko techniczne",
        "dlug technologiczny w projektach ai",
        "bezpieczenstwo aplikacji generowanych przez ai",
        "jak dobrac architekture aplikacji",
        "stack technologiczny dla aplikacji webowej",
        "kiedy warto zatrudnic programiste do aplikacji",
        "ai w tworzeniu stron i aplikacji",
      ],
      en: [
        "is ai enough to build a website",
        "can ai replace software developers",
        "ai generated app technical debt",
        "website built with ai vs developer",
        "security risks of ai generated code",
        "how to choose software architecture",
        "tech stack selection for web app",
        "when to hire an experienced developer",
        "ai assisted software development best practices",
        "business risks of ai only development",
      ],
    },
    faq: {
      pl: [
        {
          q: "Czy AI może samodzielnie stworzyć gotową stronę lub aplikację?",
          a: "AI pomaga przy kodzie i prototypach, ale produkcyjny projekt wymaga architektury, testów, bezpieczeństwa, dostępów, SEO i odpowiedzialności za utrzymanie.",
        },
        {
          q: "Kiedy warto zaangażować programistę do projektu z AI?",
          a: "Gdy projekt ma działać produkcyjnie, obsługiwać dane klientów, integrować się z narzędziami firmy albo rozwijać się dłużej niż jednorazowy prototyp.",
        },
      ],
      en: [
        {
          q: "Can AI build a production-ready website or app on its own?",
          a: "AI helps with code and prototypes, but production projects still need architecture, testing, security, permissions, SEO, and maintenance accountability.",
        },
        {
          q: "When should a company involve a software developer in an AI-assisted project?",
          a: "When the project must run in production, handle customer data, integrate with business tools, or evolve beyond a one-off prototype.",
        },
      ],
    },
  },
  {
    slug: "system-rezerwacji-online-dla-salonu-kosmetycznego-co-wybrac-i-ile-to-trwa",
    slugEn: "online-booking-system-for-beauty-salon-what-to-choose-and-how-long-it-takes",
    title: {
      pl: "System rezerwacji online dla salonu kosmetycznego",
      en: "Online Booking System for a Beauty Salon",
    },
    excerpt: {
      pl: "Jak wybrać system rezerwacji online dla salonu: kluczowe funkcje, czas wdrożenia, płatności, przypomnienia i błędy.",
      en: "How to choose an online booking system for a beauty salon: key features, timeline, payments, reminders, and mistakes.",
    },
    publishedAt: "2026-03-11",
    dateModified: "2026-07-01",
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
    faq: {
      pl: [
        {
          q: "Ile trwa wdrożenie systemu rezerwacji online?",
          a: "Prosty system rezerwacji można wdrożyć zwykle w 1-3 tygodnie. Rozbudowane płatności, integracje CRM i niestandardowe grafiki wydłużają zakres.",
        },
        {
          q: "Czy system rezerwacji powinien mieć płatności online?",
          a: "W wielu usługach tak, szczególnie gdy problemem są nieobecności. Zaliczki i automatyczne potwierdzenia zmniejszają no-show i porządkują obsługę.",
        },
      ],
      en: [
        {
          q: "How long does an online booking system implementation take?",
          a: "A simple booking system usually takes 1-3 weeks. Advanced payments, CRM integrations, and custom interfaces increase the scope.",
        },
        {
          q: "Should a booking system include online payments?",
          a: "For many service businesses, yes. Deposits and automated confirmations reduce no-shows and make operations easier to manage.",
        },
      ],
    },
  },
  {
    slug: "kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai",
    slugEn: "when-ai-process-automation-is-worth-it-for-business",
    title: {
      pl: "Kiedy opłaca się automatyzacja procesów z AI?",
      en: "When Is AI Process Automation Worth It?",
    },
    excerpt: {
      pl: "Kiedy automatyzacja z AI daje zwrot, które procesy wybrać najpierw i jak policzyć wpływ na koszty oraz czas zespołu.",
      en: "When AI automation delivers ROI, which workflows to automate first, and how to estimate impact on cost and team time.",
    },
    publishedAt: "2026-03-11",
    dateModified: "2026-07-04",
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
    faq: {
      pl: [
        {
          q: "Jakie procesy warto automatyzować jako pierwsze?",
          a: "Najpierw warto wybrać proces powtarzalny, mierzalny i kosztowny czasowo: obsługę leadów, raportowanie, przepisywanie danych, kwalifikację zapytań albo powiadomienia.",
        },
        {
          q: "Jak sprawdzić, czy automatyzacja AI się opłaca?",
          a: "Liczymy obecny koszt czasu, liczbę błędów, czas reakcji i potencjalny wzrost przepustowości zespołu, a potem porównujemy to z kosztem wdrożenia.",
        },
      ],
      en: [
        {
          q: "Which processes should be automated first?",
          a: "Start with repeatable, measurable, time-consuming workflows: lead handling, reporting, data entry, enquiry qualification, or notifications.",
        },
        {
          q: "How do you know whether AI automation is worth it?",
          a: "We compare current time cost, error volume, response time, and team capacity gains with the implementation cost.",
        },
      ],
    },
  },
  {
    slug: "strona-internetowa-dla-firmy-jak-wybrac-wykonawce",
    slugEn: "business-website-how-to-choose-a-developer",
    title: {
      pl: "Strona internetowa dla firmy - jak wybrać wykonawcę",
      en: "Business Website - How to Choose a Developer",
    },
    excerpt: {
      pl: "Kiedy firma potrzebuje strony www, jak wybrać dobrego wykonawcę i na co zwrócić uwagę przed podpisaniem umowy.",
      en: "When your company needs a website, how to choose a good developer, and what to check before signing a contract.",
    },
    publishedAt: "2025-03-11",
    dateModified: "2026-06-12",
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
        "how to choose website developer",
        "business website cost and timeline",
        "website checklist for small business",
        "what to ask before building a website",
      ],
    },
    faq: {
      pl: [
        {
          q: "Jak wybrać wykonawcę strony internetowej dla firmy?",
          a: "Sprawdź portfolio, sposób rozmowy o celu biznesowym, podejście do SEO technicznego, szybkości strony, utrzymania i tego, kto będzie właścicielem kodu oraz domeny.",
        },
        {
          q: "Czy cena strony firmowej powinna być najważniejszym kryterium?",
          a: "Nie. Zbyt niska cena często oznacza brak strategii treści, SEO, optymalizacji wydajności lub wsparcia po publikacji. Ważniejszy jest efekt biznesowy i jakość wdrożenia.",
        },
      ],
      en: [
        {
          q: "How should a company choose a website developer?",
          a: "Check the portfolio, how the vendor discusses business goals, technical SEO, website speed, maintenance, and ownership of code and domain.",
        },
        {
          q: "Should website price be the most important criterion?",
          a: "No. Very low pricing often means no content strategy, SEO, performance work, or support after launch. Business outcome and implementation quality matter more.",
        },
      ],
    },
  },
];
