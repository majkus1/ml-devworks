import type { SiteLang } from "@/lib/services";

export type ServiceDetailId =
  | "web-development"
  | "apps"
  | "automation-ai"
  | "ecommerce-booking"
  | "devops"
  | "maintenance";

export interface ServiceDetail {
  definition: string;
  pains: string[];
  deliverables: string[];
  industries: string[];
  proof: string;
  price: string;
  timeline: string;
  faq: { q: string; a: string }[];
  relatedPosts: { title: string; href: string }[];
}

export const serviceDetails: Record<ServiceDetailId, Record<SiteLang, ServiceDetail>> = {
  "web-development": {
    pl: {
      definition:
        "Tworzenie stron internetowych dla firm obejmuje projekt, wdrożenie, SEO techniczne, szybkie ładowanie, formularze kontaktowe i strukturę treści przygotowaną pod pozyskiwanie zapytań z Google.",
      pains: [
        "Firma ma stronę, która wygląda poprawnie, ale nie generuje zapytań.",
        "Strona ładuje się wolno, słabo działa na telefonach albo ma problemy z indeksacją.",
        "Oferta jest niejasna dla klienta B2B i dla wyszukiwarek.",
      ],
      deliverables: ["Architektura treści i sekcji sprzedażowych", "Responsywny frontend", "SEO techniczne i schema", "Formularze kontaktowe i analityka"],
      industries: ["firmy usługowe", "B2B", "lokalne firmy", "eksperci i konsultanci"],
      proof: "W projektach stron stawiamy na Core Web Vitals, przejrzysty układ oferty i kod możliwy do dalszego rozwoju.",
      price: "Najczęściej od 3 500 zł netto za prostą stronę firmową; rozbudowane serwisy wyceniamy po zakresie.",
      timeline: "Zwykle 1-3 tygodnie, zależnie od liczby podstron, treści i integracji.",
      faq: [
        { q: "Ile kosztuje strona internetowa dla firmy?", a: "Prosta strona firmowa zwykle zaczyna się od 3 500 zł netto. Dokładna cena zależy od liczby podstron, treści, animacji, formularzy i integracji." },
        { q: "Czy strona będzie przygotowana pod SEO?", a: "Tak. W standardzie uwzględniamy strukturę nagłówków, metadane, szybkość ładowania, responsywność, schema i podstawy indeksacji." },
        { q: "Czy możecie przejąć istniejącą stronę?", a: "Tak. Możemy wykonać audyt, poprawić wydajność, uporządkować SEO techniczne albo przebudować stronę bez utraty najważniejszych treści." },
      ],
      relatedPosts: [
        { title: "Strona internetowa dla firmy - jak wybrać wykonawcę", href: "/blog/strona-internetowa-dla-firmy-jak-wybrac-wykonawce" },
        { title: "Social media czy własna strona firmowa", href: "/blog/social-media-czy-wlasna-strona-firmowa-co-bardziej-sie-oplaca" },
      ],
    },
    en: {
      definition:
        "Business website development covers design, implementation, technical SEO, fast loading, contact flows, and content structure prepared for lead generation from search.",
      pains: ["The website looks fine but does not generate leads.", "The website is slow, weak on mobile, or hard to index.", "The offer is unclear for B2B buyers and search engines."],
      deliverables: ["Content architecture", "Responsive frontend", "Technical SEO and schema", "Contact forms and analytics"],
      industries: ["service companies", "B2B", "local businesses", "consultants and experts"],
      proof: "I focus on Core Web Vitals, clear offer structure, and code that can be developed further.",
      price: "Usually from PLN 3,500 net for a simple business website; larger websites are estimated by scope.",
      timeline: "Usually 1-3 weeks, depending on pages, content, and integrations.",
      faq: [
        { q: "How much does a business website cost?", a: "A simple business website usually starts from PLN 3,500 net. The final price depends on pages, content, animations, forms, and integrations." },
        { q: "Will the website be SEO-ready?", a: "Yes. We include headings, metadata, loading speed, responsiveness, schema, and indexing basics." },
        { q: "Can you take over an existing website?", a: "Yes. We can audit, improve performance, fix technical SEO, or rebuild the website while preserving key content." },
      ],
      relatedPosts: [
        { title: "Business website - how to choose a developer", href: "/en/blog/business-website-how-to-choose-a-developer" },
        { title: "Social media vs business website", href: "/en/blog/social-media-vs-business-website-what-brings-better-results" },
      ],
    },
  },
  apps: {
    pl: {
      definition:
        "Aplikacje webowe i mobilne dla firm to dedykowane systemy, panele klienta, aplikacje operacyjne i MVP, które automatyzują pracę oraz porządkują procesy sprzedaży, obsługi i raportowania.",
      pains: ["Procesy są obsługiwane w arkuszach i wiadomościach email.", "Zespół traci czas na ręczne przepisywanie danych.", "Gotowe narzędzia nie pasują do modelu biznesowego."],
      deliverables: ["Analiza wymagań", "UX/UI i frontend", "Backend i baza danych", "Panel administracyjny i integracje"],
      industries: ["SaaS", "usługi", "logistyka", "firmy operacyjne"],
      proof: "Buduję aplikacje z myślą o utrzymaniu: role użytkowników, walidacja danych, monitoring i możliwość dalszej rozbudowy.",
      price: "MVP aplikacji najczęściej od 12 000 zł netto; systemy produkcyjne wyceniamy etapami.",
      timeline: "Zwykle 2-8 tygodni dla MVP lub pierwszej wersji produkcyjnej.",
      faq: [
        { q: "Czy lepiej zacząć od MVP?", a: "Najczęściej tak. MVP pozwala sprawdzić kluczowy proces i zebrać feedback przed większą inwestycją." },
        { q: "Czy aplikacja może mieć panel administratora?", a: "Tak. Panele administracyjne, role użytkowników, raporty i eksporty danych są częścią typowego zakresu." },
        { q: "Czy tworzycie aplikacje mobilne iOS/Android?", a: "Tak. Dobieramy podejście natywne albo cross-platform w zależności od budżetu, funkcji i planu rozwoju." },
      ],
      relatedPosts: [
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
        { title: "Kompleksowe usługi programistyczne dla firm", href: "/blog/kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy" },
      ],
    },
    en: {
      definition:
        "Web and mobile applications for companies are custom systems, customer portals, operational apps, and MVPs that automate work and organize sales, service, and reporting workflows.",
      pains: ["Processes live in spreadsheets and email.", "The team wastes time re-entering data.", "Off-the-shelf tools do not fit the business model."],
      deliverables: ["Requirements analysis", "UX/UI and frontend", "Backend and database", "Admin panel and integrations"],
      industries: ["SaaS", "services", "logistics", "operations-heavy companies"],
      proof: "I build maintainable applications with user roles, validation, monitoring, and room for future development.",
      price: "Application MVPs usually start from PLN 12,000 net; production systems are estimated in stages.",
      timeline: "Usually 2-8 weeks for an MVP or first production version.",
      faq: [
        { q: "Should we start with an MVP?", a: "Usually yes. An MVP validates the key workflow and gathers feedback before a larger investment." },
        { q: "Can the app include an admin panel?", a: "Yes. Admin panels, user roles, reports, and exports are common parts of the scope." },
        { q: "Do you build iOS and Android apps?", a: "Yes. We choose native or cross-platform delivery based on budget, features, and product roadmap." },
      ],
      relatedPosts: [
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
        { title: "Comprehensive software services for businesses", href: "/en/blog/comprehensive-software-services-for-businesses-how-to-match-solutions-to-industry" },
      ],
    },
  },
  "automation-ai": {
    pl: {
      definition:
        "Automatyzacja procesów i AI dla firm obejmuje agentów AI, integracje API, workflow, automatyczne raporty i obsługę powtarzalnych zadań, które dziś zabierają czas zespołu.",
      pains: ["Obsługa zapytań i leadów jest wolna lub chaotyczna.", "Dane są kopiowane między narzędziami ręcznie.", "Zespół nie wie, które procesy warto automatyzować najpierw."],
      deliverables: ["Mapa procesów", "Automatyzacje workflow", "Agenci AI i chatboty", "Integracje z CRM, formularzami i API"],
      industries: ["sprzedaż B2B", "obsługa klienta", "e-commerce", "firmy usługowe"],
      proof: "Automatyzacje projektuję pod mierzalny efekt: mniej pracy manualnej, krótszy czas reakcji i mniej błędów w danych.",
      price: "Proste automatyzacje od 4 000 zł netto; agenci AI i integracje wielosystemowe wyceniamy po analizie.",
      timeline: "Pierwsze automatyzacje zwykle 3-14 dni roboczych.",
      faq: [
        { q: "Od czego zacząć automatyzację procesów?", a: "Najpierw wybieram powtarzalny proces z dużą liczbą ręcznych kroków i mierzalnym kosztem czasu." },
        { q: "Czy agenci AI mogą działać z CRM lub formularzami?", a: "Tak. Integruję agentów AI z CRM, formularzami, bazami danych, pocztą i narzędziami operacyjnymi." },
        { q: "Jak liczyć ROI automatyzacji?", a: "Porównuję koszt wdrożenia z oszczędnością czasu, redukcją błędów, szybszą obsługą leadów i wzrostem przepustowości zespołu." },
      ],
      relatedPosts: [
        { title: "Kiedy firmie opłaca się automatyzacja procesów z AI?", href: "/blog/kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai" },
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
      ],
    },
    en: {
      definition:
        "Business process automation and AI includes AI agents, API integrations, workflows, automated reports, and repetitive task handling that currently consumes team time.",
      pains: ["Lead handling is slow or chaotic.", "Data is copied between tools manually.", "The team is not sure which processes to automate first."],
      deliverables: ["Process map", "Workflow automations", "AI agents and chatbots", "CRM, form, and API integrations"],
      industries: ["B2B sales", "customer support", "e-commerce", "service companies"],
      proof: "I design automation around measurable impact: less manual work, faster response times, and fewer data errors.",
      price: "Simple automations from PLN 4,000 net; AI agents and multi-system integrations are estimated after analysis.",
      timeline: "First automations usually take 3-14 business days.",
      faq: [
        { q: "Where should process automation start?", a: "Start with a repetitive process with many manual steps and a measurable time cost." },
        { q: "Can AI agents work with CRM or forms?", a: "Yes. I integrate AI agents with CRM, forms, databases, email, and operational tools." },
        { q: "How do you calculate automation ROI?", a: "I compare implementation cost with time saved, error reduction, faster lead handling, and team capacity gains." },
      ],
      relatedPosts: [
        { title: "When AI process automation is worth it", href: "/en/blog/when-ai-process-automation-is-worth-it-for-business" },
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
      ],
    },
  },
  "ecommerce-booking": {
    pl: {
      definition:
        "Sklepy internetowe i e-commerce dla firm obejmują katalog produktów, koszyk, płatności online, dostawy, panel administracyjny, integracje ERP/CRM oraz automatyzację sprzedaży.",
      pains: ["Sprzedaż online jest rozproszona między formularzami, wiadomościami i ręczną obsługą.", "Sklep nie integruje się z magazynem, fakturowaniem, CRM albo analityką.", "Proces zakupowy jest zbyt długi i obniża konwersję na mobile."],
      deliverables: ["Katalog produktów i wariantów", "Koszyk, checkout i płatności online", "Integracje dostaw, faktur, ERP/CRM", "Analityka sprzedaży i automatyzacje"],
      industries: ["e-commerce B2C", "sprzedaż B2B", "marki produktowe", "dystrybutorzy i producenci"],
      proof: "Projektuję ścieżkę zakupową tak, żeby była krótka, mierzalna, wygodna na telefonie i gotowa do dalszej optymalizacji sprzedaży.",
      price: "Sklepy internetowe zwykle od 7 000 zł netto; platformy B2B/B2C i większe integracje wyceniamy po analizie katalogu oraz procesów.",
      timeline: "Zwykle 2-4 tygodnie.",
      faq: [
        { q: "Czy sklep może obsługiwać płatności online?", a: "Tak. Integruję płatności kartą, szybkie przelewy, BLIK, Stripe, Przelewy24 lub inne bramki dopasowane do rynku." },
        { q: "Czy sklep może integrować się z CRM lub ERP?", a: "Tak. Integruję sprzedaż, zamówienia, klientów i stany magazynowe z narzędziami zaplecza." },
        { q: "Czy lepiej wybrać WooCommerce, Shopify czy dedykowany sklep?", a: "Dobór zależy od katalogu, integracji, budżetu i planu rozwoju. Prosty sklep może działać na gotowej platformie, a nietypowy model sprzedaży często wymaga dedykowanych elementów." },
      ],
      relatedPosts: [
        { title: "Integracja systemów w firmie: API, CRM, ERP", href: "/blog/integracja-systemow-w-firmie-api-crm-erp-jak-zaczac" },
        { title: "Kompleksowe usługi programistyczne dla firm", href: "/blog/kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy" },
      ],
    },
    en: {
      definition:
        "E-commerce development for businesses covers product catalogs, cart and checkout, online payments, shipping, admin panels, ERP/CRM integrations, and sales automation.",
      pains: ["Online sales are scattered across forms, messages, and manual handling.", "The store is not connected to inventory, invoicing, CRM, or analytics.", "The checkout flow is too long and lowers mobile conversion."],
      deliverables: ["Product catalog and variants", "Cart, checkout, and online payments", "Shipping, invoicing, ERP/CRM integrations", "Sales analytics and automation"],
      industries: ["B2C e-commerce", "B2B commerce", "product brands", "distributors and manufacturers"],
      proof: "I design purchase flows to be short, measurable, mobile-friendly, and ready for ongoing sales optimization.",
      price: "Online stores usually start from PLN 7,000 net; larger B2B/B2C platforms and integrations are estimated after catalog and process analysis.",
      timeline: "Usually 2-4 weeks.",
      faq: [
        { q: "Can an online store collect payments?", a: "Yes. I integrate card payments, fast bank transfers, BLIK, Stripe, Przelewy24, or other gateways matched to the market." },
        { q: "Can an online store integrate with CRM or ERP?", a: "Yes. I integrate sales, orders, customers, and inventory with back office tools." },
        { q: "Should I choose WooCommerce, Shopify, or a custom store?", a: "The choice depends on catalog size, integrations, budget, and growth plans. A simple store can use a ready platform, while unusual sales workflows often need custom elements." },
      ],
      relatedPosts: [
        { title: "Business system integration: API, CRM, ERP", href: "/en/blog/business-system-integration-api-crm-erp-how-to-start" },
        { title: "Comprehensive software services for businesses", href: "/en/blog/comprehensive-software-services-for-businesses-how-to-match-solutions-to-industry" },
      ],
    },
  },
  devops: {
    pl: {
      definition:
        "DevOps i wdrożenia chmurowe obejmują CI/CD, Docker, konfigurację środowisk, monitoring, backupy, bezpieczeństwo i stabilne publikowanie aplikacji.",
      pains: ["Wdrożenia są ręczne i stresujące.", "Brakuje monitoringu, backupu albo jasnego planu awaryjnego.", "Koszty chmury rosną bez kontroli."],
      deliverables: ["Pipeline CI/CD", "Konfiguracja chmury", "Monitoring i alerty", "Backup i dokumentacja wdrożeń"],
      industries: ["SaaS", "aplikacje webowe", "e-commerce", "zespoły produktowe"],
      proof: "Celem DevOps jest przewidywalne wdrożenie: mniej ręcznych kroków, szybsze wydania i większa odporność produkcji.",
      price: "Podstawowe uporządkowanie deploymentu zwykle od 4 500 zł netto; stałe utrzymanie wyceniamy miesięcznie.",
      timeline: "Zwykle 2-10 dni roboczych dla pierwszego stabilnego pipeline.",
      faq: [
        { q: "Czy możesz skonfigurować CI/CD?", a: "Tak. Konfiguruję pipeline z testami, buildem i deploymentem na wybrane środowisko." },
        { q: "Czy pomagasz obniżyć koszty chmury?", a: "Tak. Analizuję zasoby, cache, skalowanie i konfigurację usług, żeby ograniczyć niepotrzebne koszty." },
        { q: "Czy DevOps obejmuje monitoring?", a: "Tak. Mogę wdrożyć monitoring, alerty, logi i podstawowe procedury reakcji na incydenty." },
      ],
      relatedPosts: [
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
      ],
    },
    en: {
      definition:
        "DevOps and cloud deployment covers CI/CD, Docker, environment configuration, monitoring, backups, security, and stable application releases.",
      pains: ["Deployments are manual and stressful.", "Monitoring, backups, or incident plans are missing.", "Cloud costs grow without control."],
      deliverables: ["CI/CD pipeline", "Cloud configuration", "Monitoring and alerts", "Backups and deployment documentation"],
      industries: ["SaaS", "web applications", "e-commerce", "product teams"],
      proof: "DevOps should make releases predictable: fewer manual steps, faster shipping, and more resilient production.",
      price: "Basic deployment cleanup usually starts from PLN 4,500 net; ongoing maintenance is estimated monthly.",
      timeline: "Usually 2-10 business days for the first stable pipeline.",
      faq: [
        { q: "Can you configure CI/CD?", a: "Yes. I configure pipelines with tests, builds, and deployment to the chosen environment." },
        { q: "Can you help reduce cloud costs?", a: "Yes. I analyze resources, cache, scaling, and service configuration to reduce unnecessary cost." },
        { q: "Does DevOps include monitoring?", a: "Yes. I can implement monitoring, alerts, logs, and basic incident response procedures." },
      ],
      relatedPosts: [
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
      ],
    },
  },
  maintenance: {
    pl: {
      definition:
        "Naprawa, optymalizacja i utrzymanie obejmuje audyt istniejącej strony lub aplikacji, bugfixing, Core Web Vitals, SEO techniczne, bezpieczeństwo i dalszy rozwój.",
      pains: ["Projekt działa wolno albo niestabilnie.", "Poprzedni wykonawca nie rozwija już systemu.", "Błędy techniczne obniżają sprzedaż, SEO lub zaufanie klientów."],
      deliverables: ["Audyt techniczny", "Plan naprawczy", "Bugfixing i optymalizacja", "Monitoring i wsparcie utrzymaniowe"],
      industries: ["firmy po wdrożeniu", "e-commerce", "SaaS", "strony usługowe"],
      proof: "Zaczynamy od diagnozy, żeby naprawiać przyczynę problemu, nie tylko widoczny objaw.",
      price: "Diagnozy i małe poprawki zwykle od 1 500 zł netto; większe prace wyceniamy po audycie.",
      timeline: "Diagnoza zwykle 1-3 dni robocze, wdrożenie poprawek zależy od zakresu.",
      faq: [
        { q: "Czy naprawiacie projekty po innych wykonawcach?", a: "Tak. Przejmujemy istniejące strony i aplikacje, wykonujemy audyt, porządkujemy kod i planujemy poprawki etapami." },
        { q: "Czy możecie poprawić Core Web Vitals?", a: "Tak. Analizuję LCP, CLS, INP, obrazy, JS, cache i sposób renderowania krytycznych elementów strony." },
        { q: "Czy oferujecie stałe utrzymanie?", a: "Tak. Możemy ustalić miesięczny zakres wsparcia, aktualizacji, monitoringu i rozwoju." },
      ],
      relatedPosts: [
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
        { title: "Strona internetowa dla firmy - jak wybrać wykonawcę", href: "/blog/strona-internetowa-dla-firmy-jak-wybrac-wykonawce" },
      ],
    },
    en: {
      definition:
        "Fixes, optimization, and maintenance include auditing an existing website or application, bug fixing, Core Web Vitals, technical SEO, security, and further development.",
      pains: ["The project is slow or unstable.", "The previous vendor no longer develops the system.", "Technical issues reduce sales, SEO, or customer trust."],
      deliverables: ["Technical audit", "Repair plan", "Bug fixing and optimization", "Monitoring and maintenance support"],
      industries: ["post-launch companies", "e-commerce", "SaaS", "service websites"],
      proof: "I start with diagnosis so I fix the cause, not just the visible symptom.",
      price: "Diagnostics and small fixes usually start from PLN 1,500 net; larger work is estimated after audit.",
      timeline: "Diagnosis usually takes 1-3 business days; implementation depends on scope.",
      faq: [
        { q: "Do you fix projects after other vendors?", a: "Yes. We take over existing websites and applications, audit them, organize the code, and plan fixes in stages." },
        { q: "Can you improve Core Web Vitals?", a: "Yes. I analyze LCP, CLS, INP, images, JavaScript, cache, and critical rendering." },
        { q: "Do you offer ongoing maintenance?", a: "Yes. We can agree on monthly support, updates, monitoring, and development scope." },
      ],
      relatedPosts: [
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
        { title: "Business website - how to choose a developer", href: "/en/blog/business-website-how-to-choose-a-developer" },
      ],
    },
  },
};
