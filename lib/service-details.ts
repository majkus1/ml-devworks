import type { SiteLang } from "@/lib/services";

export type ServiceDetailId =
  | "web-development"
  | "apps"
  | "mobile-apps"
  | "automation-ai"
  | "ecommerce-booking"
  | "booking-systems"
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
  "mobile-apps": {
    pl: {
      definition:
        "Aplikacje mobilne dla firm na zamówienie to dedykowane aplikacje iOS i Android (natywne lub cross-platform), które wspierają pracowników w terenie, obsługę klienta, sprzedaż, serwis i rezerwacje, z panelem administracyjnym i integracjami z systemami firmy.",
      pains: [
        "Pracownicy w terenie pracują na telefonie, notatkach i zdjęciach wysyłanych na WhatsAppie, a dane trafiają do systemu z opóźnieniem.",
        "Klienci chcą zamawiać, rezerwować lub sprawdzać status z telefonu, a strona mobilna tego nie obsługuje.",
        "Gotowe aplikacje z rynku nie pasują do procesu firmy albo nie integrują się z CRM, ERP i magazynem.",
      ],
      deliverables: ["Analiza procesu i makiety ekranów", "Aplikacja iOS i Android (React Native / natywnie)", "Backend, panel administracyjny i integracje API", "Publikacja w App Store i Google Play oraz utrzymanie"],
      industries: ["serwis i firmy terenowe", "logistyka i transport", "sprzedaż B2B", "usługi z rezerwacjami", "produkcja"],
      proof: "Aplikacje mobilne projektuję pod realny proces: offline, zdjęcia, podpisy, geolokalizacja, powiadomienia push i synchronizacja z systemem firmy.",
      price: "MVP aplikacji mobilnej najczęściej od 12 000 zł netto; rozbudowane aplikacje z panelem i integracjami wyceniamy etapami.",
      timeline: "Zwykle 3-8 tygodni dla pierwszej wersji w sklepach.",
      faq: [
        { q: "Ile kosztuje aplikacja mobilna dla firmy na zamówienie?", a: "MVP aplikacji mobilnej zwykle zaczyna się od 12 000 zł netto. Cena zależy od liczby ekranów, pracy offline, integracji z systemami firmy, panelu administracyjnego i wymagań bezpieczeństwa." },
        { q: "Natywna czy cross-platform (React Native, Flutter)?", a: "Dla większości aplikacji firmowych cross-platform (React Native) daje jedną bazę kodu na iOS i Android przy niższym koszcie. Natywne podejście wybieram, gdy potrzebne są bardzo specyficzne funkcje sprzętowe lub maksymalna wydajność." },
        { q: "Czy aplikacja może działać offline i integrować się z naszym systemem?", a: "Tak. Projektuję pracę offline z synchronizacją oraz integracje API z CRM, ERP, magazynem, kalendarzem i płatnościami." },
        { q: "Czy zajmujesz się publikacją w App Store i Google Play?", a: "Tak. Przygotowuję konta deweloperskie, materiały do sklepów, buildy, przegląd i aktualizacje po publikacji." },
      ],
      relatedPosts: [
        { title: "Aplikacje mobilne dla firm na zamówienie: koszt, czas, natywna czy cross-platform", href: "/blog/aplikacje-mobilne-dla-firm-na-zamowienie-koszt-czas-natywna-czy-cross-platform" },
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
      ],
    },
    en: {
      definition:
        "Custom mobile apps for companies are dedicated iOS and Android applications (native or cross-platform) that support field employees, customer service, sales, service operations, and bookings, with an admin panel and integrations with company systems.",
      pains: [
        "Field employees work on phone calls, notes, and photos sent via WhatsApp, and data reaches the system late.",
        "Customers want to order, book, or check status from their phone, and the mobile website does not support it.",
        "Off-the-shelf apps do not fit the company process or do not integrate with CRM, ERP, and inventory.",
      ],
      deliverables: ["Process analysis and screen mockups", "iOS and Android app (React Native / native)", "Backend, admin panel, and API integrations", "App Store and Google Play publishing and maintenance"],
      industries: ["field service companies", "logistics and transport", "B2B sales", "booking-based services", "manufacturing"],
      proof: "I design mobile apps around the real process: offline mode, photos, signatures, geolocation, push notifications, and sync with company systems.",
      price: "A mobile app MVP usually starts from PLN 12,000 net; larger apps with panels and integrations are estimated in stages.",
      timeline: "Usually 3-8 weeks for the first version in the stores.",
      faq: [
        { q: "How much does a custom mobile app for a company cost?", a: "A mobile app MVP usually starts from PLN 12,000 net. The price depends on the number of screens, offline mode, integrations with company systems, the admin panel, and security requirements." },
        { q: "Native or cross-platform (React Native, Flutter)?", a: "For most business apps, cross-platform (React Native) gives one codebase for iOS and Android at a lower cost. I choose native when very specific hardware features or maximum performance are required." },
        { q: "Can the app work offline and integrate with our system?", a: "Yes. I design offline mode with synchronization and API integrations with CRM, ERP, inventory, calendars, and payments." },
        { q: "Do you handle App Store and Google Play publishing?", a: "Yes. I prepare developer accounts, store assets, builds, review, and post-launch updates." },
      ],
      relatedPosts: [
        { title: "Custom mobile apps for companies: cost, timeline, native vs cross-platform", href: "/en/blog/custom-mobile-apps-for-companies-cost-timeline-native-vs-cross-platform" },
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
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
      price: "Proste automatyzacje od 2 500 zł netto; agenci AI i integracje wielosystemowe wyceniamy po analizie.",
      timeline: "Pierwsze automatyzacje zwykle 3-14 dni roboczych.",
      faq: [
        { q: "Od czego zacząć automatyzację procesów?", a: "Najpierw wybieram powtarzalny proces z dużą liczbą ręcznych kroków i mierzalnym kosztem czasu." },
        { q: "Czy agenci AI mogą działać z CRM lub formularzami?", a: "Tak. Integruję agentów AI z CRM, formularzami, bazami danych, pocztą i narzędziami operacyjnymi." },
        { q: "Jak liczyć ROI automatyzacji?", a: "Porównuję koszt wdrożenia z oszczędnością czasu, redukcją błędów, szybszą obsługą leadów i wzrostem przepustowości zespołu." },
        { q: "Czy automatyzacja AI opłaca się dla małej firmy?", a: "Tak, jeśli zaczniesz od jednego procesu, który regularnie zabiera czas: odpowiadania na zapytania, umawiania terminów, przepisywania zamówień albo raportów. Proste automatyzacje od 2 500 zł netto zwracają się zwykle w kilka miesięcy przy kilku godzinach oszczędności tygodniowo." },
        { q: "Jak wygląda automatyzacja obsługi zgłoszeń i klientów?", a: "Agent AI odczytuje zgłoszenie z maila, formularza lub czatu, klasyfikuje je, odpowiada na powtarzalne pytania z bazy wiedzy firmy, zapisuje sprawę w CRM lub helpdesku i eskaluje trudniejsze tematy do człowieka z gotowym podsumowaniem." },
        { q: "Czym różni się agencja automatyzacji od współpracy z programistą?", a: "Agencja zwykle składa scenariusze w narzędziach no-code i rozlicza abonament. Programista buduje automatyzacje jako kod i integracje, które należą do Ciebie, dają większą kontrolę nad danymi i nie ograniczają się do gotowych klocków." },
      ],
      relatedPosts: [
        { title: "Automatyzacje AI dla firm: 12 procesów, które warto zautomatyzować", href: "/blog/co-mozna-zautomatyzowac-w-firmie-z-ai-przyklady-procesow" },
        { title: "Automatyzacja obsługi zgłoszeń i klienta z AI", href: "/blog/automatyzacja-obslugi-zgloszen-i-klienta-z-ai-helpdesk-contact-center" },
        { title: "Agencja automatyzacji AI czy programista?", href: "/blog/agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce" },
        { title: "Kiedy firmie opłaca się automatyzacja procesów z AI?", href: "/blog/kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai" },
      ],
    },
    en: {
      definition:
        "Business process automation and AI includes AI agents, API integrations, workflows, automated reports, and repetitive task handling that currently consumes team time.",
      pains: ["Lead handling is slow or chaotic.", "Data is copied between tools manually.", "The team is not sure which processes to automate first."],
      deliverables: ["Process map", "Workflow automations", "AI agents and chatbots", "CRM, form, and API integrations"],
      industries: ["B2B sales", "customer support", "e-commerce", "service companies"],
      proof: "I design automation around measurable impact: less manual work, faster response times, and fewer data errors.",
      price: "Simple automations from PLN 2,500 net; AI agents and multi-system integrations are estimated after analysis.",
      timeline: "First automations usually take 3-14 business days.",
      faq: [
        { q: "Where should process automation start?", a: "Start with a repetitive process with many manual steps and a measurable time cost." },
        { q: "Can AI agents work with CRM or forms?", a: "Yes. I integrate AI agents with CRM, forms, databases, email, and operational tools." },
        { q: "How do you calculate automation ROI?", a: "I compare implementation cost with time saved, error reduction, faster lead handling, and team capacity gains." },
        { q: "Is AI automation worth it for a small company?", a: "Yes, if you start with one process that regularly consumes time: answering enquiries, scheduling, re-entering orders, or reports. Simple automations from PLN 2,500 net usually pay back within a few months with a few hours saved per week." },
        { q: "How does ticket and customer service automation work?", a: "An AI agent reads the request from email, a form, or chat, classifies it, answers repetitive questions from the company knowledge base, logs the case in CRM or helpdesk, and escalates harder topics to a human with a ready summary." },
        { q: "What is the difference between an automation agency and working with a developer?", a: "An agency usually assembles scenarios in no-code tools and bills a subscription. A developer builds automations as code and integrations that belong to you, give more control over data, and are not limited to ready-made blocks." },
      ],
      relatedPosts: [
        { title: "AI automation for companies: 12 processes worth automating", href: "/en/blog/what-can-be-automated-in-a-company-with-ai-process-examples" },
        { title: "AI automation of customer support and tickets", href: "/en/blog/ai-automation-of-customer-support-tickets-helpdesk-contact-center" },
        { title: "AI automation agency or developer?", href: "/en/blog/ai-automation-agency-or-developer-how-to-choose-a-vendor" },
        { title: "When AI process automation is worth it", href: "/en/blog/when-ai-process-automation-is-worth-it-for-business" },
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
  "booking-systems": {
    pl: {
      definition:
        "Systemy rezerwacji online dla firm to dedykowane rozwiązania z kalendarzem dostępności, płatnościami online, zaliczkami, przypomnieniami, panelem administracyjnym i integracjami z CRM lub stroną internetową.",
      pains: ["Klienci dzwonią lub piszą, żeby ustalić wolny termin, a zespół traci czas na koordynację.", "No-show i ręczne potwierdzanie wizyt obniżają przychód i dezorganizują grafik.", "Gotowy kalendarz nie obsługuje płatności, zaliczek, wielu pracowników lub Twoich reguł biznesowych."],
      deliverables: ["Kalendarz dostępności, usługi, pracownicy i limity", "Płatności online, zaliczki i reguły anulowania", "Panel administracyjny i raporty", "Powiadomienia e-mail/SMS i integracje CRM"],
      industries: ["beauty", "medycyna", "edukacja", "konsulting", "wynajem", "wydarzenia", "usługi lokalne"],
      proof: "Projektuję rezerwacje tak, żeby klient umawiał się sam, a zespół widział grafik, płatności i historię w jednym panelu.",
      price: "Najczęściej od 6 000 zł netto za prosty system rezerwacji; płatności, integracje i role pracowników wyceniamy po analizie.",
      timeline: "Zwykle 1-4 tygodnie dla pierwszej wersji produkcyjnej.",
      faq: [
        { q: "Ile kosztuje system rezerwacji online dla firmy?", a: "Prosty system rezerwacji online zwykle zaczyna się od 6 000 zł netto. Cena rośnie przy płatnościach online, integracjach CRM/ERP, rolach pracowników i niestandardowych grafikach." },
        { q: "Czy system rezerwacji może obsługiwać płatności i zaliczki?", a: "Tak. Płatności online, zaliczki, potwierdzenia e-mail, przypomnienia i reguły anulowania ograniczają no-show." },
        { q: "Czy system rezerwacji integruje się ze stroną internetową?", a: "Tak. Rezerwacje mogą działać jako sekcja na stronie, osobny panel klienta albo widget połączony z kalendarzem, CRM i płatnościami." },
      ],
      relatedPosts: [
        { title: "System rezerwacji dla firmy usługowej", href: "/blog/system-rezerwacji-dla-firmy-uslugowej-funkcje-integracje-platnosci-wdrozenie" },
        { title: "System rezerwacji online dla salonu kosmetycznego", href: "/blog/system-rezerwacji-online-dla-salonu-kosmetycznego-co-wybrac-i-ile-to-trwa" },
      ],
    },
    en: {
      definition:
        "Online booking systems for companies are custom solutions with an availability calendar, online payments, deposits, reminders, an admin panel, and integrations with CRM or the website.",
      pains: ["Customers call or write to find a free slot and the team wastes time coordinating.", "No-shows and manual confirmations reduce revenue and disrupt the schedule.", "A ready-made calendar does not support payments, deposits, multiple staff members, or your business rules."],
      deliverables: ["Availability calendar, services, staff, and limits", "Online payments, deposits, and cancellation rules", "Admin panel and reports", "Email/SMS notifications and CRM integrations"],
      industries: ["beauty", "healthcare", "education", "consulting", "rentals", "events", "local services"],
      proof: "I design bookings so customers schedule themselves while the team sees the calendar, payments, and history in one panel.",
      price: "Usually from PLN 6,000 net for a simple booking system; payments, integrations, and staff roles are estimated after analysis.",
      timeline: "Usually 1-4 weeks for the first production version.",
      faq: [
        { q: "How much does an online booking system cost?", a: "A simple online booking system usually starts from PLN 6,000 net. The price grows with online payments, CRM/ERP integrations, staff roles, and custom schedules." },
        { q: "Can the booking system handle payments and deposits?", a: "Yes. Online payments, deposits, email confirmations, reminders, and cancellation rules reduce no-shows." },
        { q: "Does the booking system integrate with the website?", a: "Yes. Bookings can run as a section on the website, a separate customer panel, or a widget connected to the calendar, CRM, and payments." },
      ],
      relatedPosts: [
        { title: "Booking system for a service business", href: "/en/blog/booking-system-for-service-business-features-payment-integrations-implementation" },
        { title: "Online booking system for a beauty salon", href: "/en/blog/online-booking-system-for-beauty-salon-what-to-choose-and-how-long-it-takes" },
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
