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
        "Strona internetowa dla firmy, która przyprowadza klientów: jasno tłumaczy ofertę, szybko ładuje się na telefonie i zamienia odwiedziny z Google w zapytania. W cenie projekt, wykonanie, przygotowanie pod wyszukiwarkę (SEO) i formularze.",
      pains: [
        "Firma ma stronę, która wygląda poprawnie, ale nie generuje zapytań.",
        "Strona ładuje się wolno, słabo działa na telefonach albo ma problemy z indeksacją.",
        "Oferta jest niejasna dla klienta B2B i dla wyszukiwarek.",
      ],
      deliverables: ["Treści i układ, które prowadzą klienta do zapytania", "Strona wygodna na telefonie i komputerze", "Przygotowanie pod Google, żeby klienci Cię znajdowali", "Formularz prosto na Twoją skrzynkę i statystyki odwiedzin"],
      industries: ["firmy usługowe", "B2B", "lokalne firmy", "eksperci i konsultanci"],
      proof: "Mierzę, ile osób z Google zostawia zapytanie. Szybka strona i jasna oferta to mniej uciekających klientów, a stronę można potem rozbudowywać bez zaczynania od zera.",
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
        "A business website that brings in customers: it explains the offer clearly, loads fast on phones, and turns Google visits into enquiries. Design, build, search engine preparation (SEO), and forms included.",
      pains: ["The website looks fine but does not generate leads.", "The website is slow, weak on mobile, or hard to index.", "The offer is unclear for B2B buyers and search engines."],
      deliverables: ["Content and layout that lead visitors to enquire", "A site that works well on phones and desktops", "Search preparation so customers can find you", "Forms straight to your inbox and visitor statistics"],
      industries: ["service companies", "B2B", "local businesses", "consultants and experts"],
      proof: "I measure how many Google visitors leave an enquiry. A fast site and a clear offer mean fewer customers lost, and the site can grow later without starting over.",
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
        "Aplikacja dla firmy zastępuje arkusze, maile i przepisywanie danych jednym miejscem, w którym zespół i klienci załatwiają sprawy sami. Aplikacje webowe i mobilne na zamówienie: panele klienta, systemy wewnętrzne i pierwsze wersje produktów.",
      pains: ["Procesy są obsługiwane w arkuszach i wiadomościach email.", "Zespół traci czas na ręczne przepisywanie danych.", "Gotowe narzędzia nie pasują do modelu biznesowego."],
      deliverables: ["Rozpisanie procesu: kto, co i kiedy robi w aplikacji", "Ekrany na tyle proste, że zespół nie potrzebuje szkolenia", "Dane w jednym miejscu, bezpieczne i z kopiami zapasowymi", "Panel dla biura i połączenie z programami, których już używasz"],
      industries: ["SaaS", "usługi", "logistyka", "firmy operacyjne"],
      proof: "Aplikacja ma działać latami: każdy widzi tylko to, co powinien, błędne dane nie przechodzą, a awarię widzę wcześniej niż Twoi klienci. Nowe funkcje dokładamy bez przepisywania całości.",
      price: "MVP aplikacji najczęściej od 12 000 zł netto; systemy produkcyjne wyceniamy etapami.",
      timeline: "Zwykle 2-8 tygodni dla MVP lub pierwszej wersji produkcyjnej.",
      faq: [
        { q: "Czy lepiej zacząć od MVP?", a: "Najczęściej tak. Pierwsza wersja (MVP) z najważniejszą funkcją trafia do zespołu po kilku tygodniach. Sprawdzasz, co naprawdę jest potrzebne, zanim wydasz więcej." },
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
        "A business app replaces spreadsheets, email, and retyping data with one place where your team and customers get things done themselves. Custom web and mobile apps: customer portals, internal systems, and first product versions.",
      pains: ["Processes live in spreadsheets and email.", "The team wastes time re-entering data.", "Off-the-shelf tools do not fit the business model."],
      deliverables: ["Mapping the process: who does what, and when, in the app", "Screens simple enough that the team needs no training", "Data in one place, secure and backed up", "An office panel connected to the software you already use"],
      industries: ["SaaS", "services", "logistics", "operations-heavy companies"],
      proof: "The app should work for years: everyone sees only what they should, bad data doesn't get in, and I spot problems before your customers do. New features are added without rewriting everything.",
      price: "Application MVPs usually start from PLN 12,000 net; production systems are estimated in stages.",
      timeline: "Usually 2-8 weeks for an MVP or first production version.",
      faq: [
        { q: "Should we start with an MVP?", a: "Usually yes. A first version (MVP) with the key feature reaches the team within a few weeks. You check what is really needed before spending more." },
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
        "Aplikacja mobilna dla firmy sprawia, że zlecenia, zdjęcia, podpisy i zamówienia trafiają do biura od razu, a nie po tygodniu. Aplikacje mobilne dla firm na zamówienie (iOS i Android) dla pracowników w terenie, handlowców, serwisu i klientów — z panelem dla biura.",
      pains: [
        "Pracownicy w terenie pracują na telefonie, notatkach i zdjęciach wysyłanych na WhatsAppie, a dane trafiają do systemu z opóźnieniem.",
        "Klienci chcą zamawiać, rezerwować lub sprawdzać status z telefonu, a strona mobilna tego nie obsługuje.",
        "Gotowe aplikacje z rynku nie pasują do procesu firmy albo nie integrują się z CRM, ERP i magazynem.",
      ],
      deliverables: ["Klikalny projekt ekranów do sprawdzenia przed startem", "Jedna aplikacja na iPhone'a i Androida, działająca także bez zasięgu", "Panel dla biura połączony z programami firmy", "Publikacja w App Store i Google Play oraz opieka po starcie"],
      industries: ["serwis i firmy terenowe", "logistyka i transport", "sprzedaż B2B", "usługi z rezerwacjami", "produkcja"],
      proof: "Projektuję pod prawdziwy dzień pracy: aplikacja działa w piwnicy bez zasięgu, protokół z podpisem klienta powstaje na miejscu, a biuro widzi wszystko bez dzwonienia.",
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
        "A business mobile app gets jobs, photos, signatures, and orders to the office immediately instead of a week later. Custom mobile apps (iOS and Android) for field staff, sales reps, service teams, and customers — with an office panel.",
      pains: [
        "Field employees work on phone calls, notes, and photos sent via WhatsApp, and data reaches the system late.",
        "Customers want to order, book, or check status from their phone, and the mobile website does not support it.",
        "Off-the-shelf apps do not fit the company process or do not integrate with CRM, ERP, and inventory.",
      ],
      deliverables: ["A clickable screen design to review before the build", "One app for iPhone and Android, working without coverage too", "An office panel connected to your company software", "App Store and Google Play publishing and post-launch care"],
      industries: ["field service companies", "logistics and transport", "B2B sales", "booking-based services", "manufacturing"],
      proof: "I design for a real working day: the app works in a basement without signal, the report with the customer's signature is created on site, and the office sees everything without phone calls.",
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
        "Automatyzacja zdejmuje z zespołu powtarzalną pracę: odpowiadanie na te same pytania, przepisywanie danych, składanie raportów. Automatyzacje AI dla firm łączą Twoje programy tak, że robią to same, a AI czyta maile i dokumenty tam, gdzie wcześniej musiał to robić człowiek.",
      pains: ["Odpowiedź na zapytanie od klienta trwa godzinami albo ginie w skrzynce.", "Dane są kopiowane między narzędziami ręcznie.", "Zespół nie wie, które procesy warto automatyzować najpierw."],
      deliverables: ["Lista procesów, które najszybciej się zwrócą", "Zadania, które wykonują się same, bez przypominania", "Asystent AI, który odpowiada klientom w kilka sekund", "Połączenie Twoich programów: formularzy, poczty, CRM, faktur"],
      industries: ["sprzedaż B2B", "obsługa klienta", "e-commerce", "firmy usługowe"],
      proof: "Przed startem mierzymy, ile godzin i błędów kosztuje proces, a po wdrożeniu porównujemy. Płacisz za odzyskany czas zespołu, nie za technologię.",
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
        "Automation takes repetitive work off your team: answering the same questions, retyping data, putting reports together. AI automation for business connects your software so it happens by itself, with AI reading emails and documents where a person used to.",
      pains: ["Replies to customer enquiries take hours or get lost in the inbox.", "Data is copied between tools manually.", "The team is not sure which processes to automate first."],
      deliverables: ["A list of the processes that pay back fastest", "Tasks that run themselves, without reminders", "An AI assistant that answers customers in seconds", "Your software connected: forms, email, CRM, invoicing"],
      industries: ["B2B sales", "customer support", "e-commerce", "service companies"],
      proof: "Before we start we measure how many hours and errors the process costs, and compare after launch. You pay for team time won back, not for technology.",
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
        "Sklep internetowy, który sprzedaje także wtedy, gdy nikt nie odbiera telefonu: klient wybiera, płaci i dostaje przesyłkę, a zamówienie, faktura i stan magazynu aktualizują się same. Sklepy internetowe B2C i B2B z płatnościami, dostawami i połączeniem z magazynem.",
      pains: ["Sprzedaż online jest rozproszona między formularzami, wiadomościami i ręczną obsługą.", "Sklep nie integruje się z magazynem, fakturowaniem, CRM albo analityką.", "Proces zakupowy jest zbyt długi i obniża konwersję na mobile."],
      deliverables: ["Katalog, w którym klient szybko znajduje swój produkt", "Krótki zakup z BLIK-iem, kartą i szybkim przelewem", "Faktury, przesyłki i stany magazynu bez przepisywania", "Raport, co się sprzedaje i skąd przychodzą klienci"],
      industries: ["e-commerce B2C", "sprzedaż B2B", "marki produktowe", "dystrybutorzy i producenci"],
      proof: "Każdy dodatkowy krok w koszyku to uciekający klient. Projektuję zakup w kilku kliknięciach na telefonie i mierzę, gdzie klienci rezygnują, żeby to poprawiać.",
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
        "An online store that sells even when nobody answers the phone: customers choose, pay, and get the parcel, while the order, invoice, and stock update themselves. B2C and B2B online stores with payments, shipping, and inventory connection.",
      pains: ["Online sales are scattered across forms, messages, and manual handling.", "The store is not connected to inventory, invoicing, CRM, or analytics.", "The checkout flow is too long and lowers mobile conversion."],
      deliverables: ["A catalogue where customers find their product fast", "A short checkout with cards, BLIK, and fast transfers", "Invoices, shipments, and stock without retyping", "A report on what sells and where customers come from"],
      industries: ["B2C e-commerce", "B2B commerce", "product brands", "distributors and manufacturers"],
      proof: "Every extra checkout step loses customers. I design purchases in a few taps on a phone and measure where people drop off, so it can be improved.",
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
        "System rezerwacji online sprawia, że klienci umawiają się sami o każdej porze, płacą zaliczkę i dostają przypomnienie, więc telefon dzwoni rzadziej, a nieodwołanych wizyt jest mniej. Kalendarz dostępności, płatności, przypomnienia i panel dla zespołu.",
      pains: ["Klienci dzwonią lub piszą, żeby ustalić wolny termin, a zespół traci czas na koordynację.", "No-show i ręczne potwierdzanie wizyt obniżają przychód i dezorganizują grafik.", "Gotowy kalendarz nie obsługuje płatności, zaliczek, wielu pracowników lub Twoich reguł biznesowych."],
      deliverables: ["Klient widzi wolne terminy i rezerwuje sam, także w nocy", "Zaliczki i zasady odwoływania, które ograniczają nieobecności", "Grafik, płatności i historia klienta w jednym panelu", "Przypomnienia SMS i e-mail wysyłane automatycznie"],
      industries: ["beauty", "medycyna", "edukacja", "konsulting", "wynajem", "wydarzenia", "usługi lokalne"],
      proof: "Mniej telefonów w trakcie pracy i mniej pustych terminów: klient umawia się sam, a przypomnienie i zaliczka sprawiają, że przychodzi.",
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
        "An online booking system lets customers book themselves at any hour, pay a deposit, and get a reminder, so the phone rings less and fewer appointments are missed. Availability calendar, payments, reminders, and a team panel.",
      pains: ["Customers call or write to find a free slot and the team wastes time coordinating.", "No-shows and manual confirmations reduce revenue and disrupt the schedule.", "A ready-made calendar does not support payments, deposits, multiple staff members, or your business rules."],
      deliverables: ["Customers see free slots and book themselves, even at night", "Deposits and cancellation rules that reduce no-shows", "Schedule, payments, and customer history in one panel", "SMS and email reminders sent automatically"],
      industries: ["beauty", "healthcare", "education", "consulting", "rentals", "events", "local services"],
      proof: "Fewer calls during work and fewer empty slots: customers book themselves, and the reminder and deposit make sure they show up.",
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
        "Aktualizacje aplikacji bez przestojów, nerwów i nocnych telefonów: nowa wersja wchodzi jednym kliknięciem, kopie zapasowe robią się same, a o awarii wiesz, zanim zauważą ją klienci. DevOps i wdrożenia w chmurze: CI/CD, Docker, monitoring, backupy.",
      pains: ["Wdrożenia są ręczne i stresujące.", "Brakuje monitoringu, backupu albo jasnego planu awaryjnego.", "Koszty chmury rosną bez kontroli."],
      deliverables: ["Nowa wersja publikowana jednym kliknięciem, sprawdzona przed startem (CI/CD)", "Serwery ustawione tak, żeby płacić tylko za to, czego używasz", "Powiadomienie o awarii, zanim zadzwoni klient", "Kopie zapasowe i instrukcja przywrócenia działania"],
      industries: ["SaaS", "aplikacje webowe", "e-commerce", "zespoły produktowe"],
      proof: "Publikacja nowej wersji ma być nudna: bez ręcznych kroków, bez wyłączania aplikacji i bez ryzyka, że coś zniknie.",
      price: "Podstawowe uporządkowanie deploymentu zwykle od 4 500 zł netto; stałe utrzymanie wyceniamy miesięcznie.",
      timeline: "Zwykle 2-10 dni roboczych dla pierwszego stabilnego pipeline.",
      faq: [
        { q: "Czy możesz skonfigurować CI/CD?", a: "Tak. Konfiguruję pipeline z testami, buildem i deploymentem na wybrane środowisko." },
        { q: "Czy pomagasz obniżyć koszty chmury?", a: "Tak. Analizuję zasoby, cache, skalowanie i konfigurację usług, żeby ograniczyć niepotrzebne koszty." },
        { q: "Czy DevOps obejmuje monitoring?", a: "Tak. Mogę wdrożyć monitoring, alerty, logi i podstawowe procedury reakcji na incydenty." },
        {
          q: "Na czym polega wdrożenie DevOps w firmie?",
          a: "Zaczynam od przeglądu, jak dziś wygląda publikacja aplikacji: kto ją robi, ile trwa i co może pójść źle. Potem ustawiam pipeline CI/CD (testy, build, wdrożenie), środowiska testowe i produkcyjne, monitoring, kopie zapasowe i krótką dokumentację. Zespół publikuje zmiany jednym zatwierdzeniem zamiast ręcznej procedury.",
        },
        {
          q: "Ile trwa wdrożenie DevOps?",
          a: "Pierwszy stabilny pipeline zwykle 2-10 dni roboczych. Pełne uporządkowanie infrastruktury (środowiska, monitoring, backup, kontrola kosztów) to najczęściej 2-4 tygodnie, zależnie od liczby aplikacji.",
        },
        {
          q: "DevOps w chmurze czy na własnym serwerze?",
          a: "Dla większości małych i średnich firm chmura (AWS, Google Cloud, Azure, a dla aplikacji webowych Vercel) jest tańsza w utrzymaniu i bezpieczniejsza niż własny serwer: kopie zapasowe, skalowanie i aktualizacje są w standardzie. Własny serwer ma sens przy stałym, dużym obciążeniu albo wymaganiach co do miejsca przechowywania danych.",
        },
        {
          q: "Czy mogę zostać przy obecnym hostingu?",
          a: "Tak. Automatyczne wdrożenia da się ustawić także na zwykłym serwerze VPS lub hostingu z dostępem SSH. Przeprowadzka do chmury nie jest warunkiem.",
        },
      ],
      relatedPosts: [
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
      ],
    },
    en: {
      definition:
        "App updates without downtime, stress, or late-night calls: a new version goes live in one click, backups run themselves, and you know about an outage before customers notice. DevOps and cloud deployment: CI/CD, Docker, monitoring, backups.",
      pains: ["Deployments are manual and stressful.", "Monitoring, backups, or incident plans are missing.", "Cloud costs grow without control."],
      deliverables: ["New versions published in one click, checked before going live (CI/CD)", "Servers set up so you pay only for what you use", "An outage alert before a customer calls", "Backups and instructions for restoring service"],
      industries: ["SaaS", "web applications", "e-commerce", "product teams"],
      proof: "Releasing a new version should be boring: no manual steps, no taking the app offline, and no risk of losing anything.",
      price: "Basic deployment cleanup usually starts from PLN 4,500 net; ongoing maintenance is estimated monthly.",
      timeline: "Usually 2-10 business days for the first stable pipeline.",
      faq: [
        { q: "Can you configure CI/CD?", a: "Yes. I configure pipelines with tests, builds, and deployment to the chosen environment." },
        { q: "Can you help reduce cloud costs?", a: "Yes. I analyze resources, cache, scaling, and service configuration to reduce unnecessary cost." },
        { q: "Does DevOps include monitoring?", a: "Yes. I can implement monitoring, alerts, logs, and basic incident response procedures." },
        {
          q: "What does a DevOps implementation involve?",
          a: "I start by reviewing how releases work today: who does them, how long they take and what can go wrong. Then I set up a CI/CD pipeline (tests, build, deployment), staging and production environments, monitoring, backups and short documentation. The team ships changes with one approval instead of a manual procedure.",
        },
        {
          q: "How long does a DevOps implementation take?",
          a: "The first stable pipeline usually takes 2-10 business days. A full infrastructure cleanup (environments, monitoring, backups, cost control) is typically 2-4 weeks, depending on the number of applications.",
        },
        {
          q: "DevOps in the cloud or on your own server?",
          a: "For most small and mid-sized companies the cloud (AWS, Google Cloud, Azure, or Vercel for web apps) is cheaper to maintain and safer than an own server: backups, scaling and updates come standard. An own server makes sense with constant heavy load or strict data-location requirements.",
        },
        {
          q: "Can I stay with my current hosting?",
          a: "Yes. Automated deployments can also run on a regular VPS or hosting with SSH access. Moving to the cloud is not a requirement.",
        },
      ],
      relatedPosts: [
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
      ],
    },
  },
  maintenance: {
    pl: {
      definition:
        "Strona lub aplikacja, która znowu działa szybko i bez błędów — także gdy poprzedni wykonawca zniknął. Naprawa, przyspieszenie, lepsza widoczność w Google (SEO techniczne, Core Web Vitals), bezpieczeństwo i dalszy rozwój.",
      pains: ["Projekt działa wolno albo niestabilnie.", "Poprzedni wykonawca nie rozwija już systemu.", "Błędy techniczne obniżają sprzedaż, SEO lub zaufanie klientów."],
      deliverables: ["Diagnoza: co nie działa i ile Cię to kosztuje", "Plan napraw od najważniejszych dla sprzedaży", "Naprawione błędy i szybsza strona", "Stała opieka, żeby problemy nie wracały"],
      industries: ["firmy po wdrożeniu", "e-commerce", "SaaS", "strony usługowe"],
      proof: "Najpierw diagnoza, potem naprawa przyczyny, a nie objawu. Dzięki temu nie płacisz drugi raz za ten sam problem.",
      price: "Diagnozy i małe poprawki zwykle od 1 500 zł netto; większe prace wyceniamy po audycie.",
      timeline: "Diagnoza zwykle 1-3 dni robocze, wdrożenie poprawek zależy od zakresu.",
      faq: [
        { q: "Czy naprawiacie projekty po innych wykonawcach?", a: "Tak. Przejmujemy istniejące strony i aplikacje, wykonujemy audyt, porządkujemy kod i planujemy poprawki etapami." },
        { q: "Czy możecie poprawić Core Web Vitals?", a: "Tak. Core Web Vitals to wskaźniki Google mówiące, czy strona ładuje się szybko i nie „skacze”. Poprawiam obrazy, skrypty i serwer, żeby strona wczytywała się szybciej, co pomaga i w pozycjach w Google, i w sprzedaży." },
        { q: "Czy oferujecie stałe utrzymanie?", a: "Tak. Możemy ustalić miesięczny zakres wsparcia, aktualizacji, monitoringu i rozwoju." },
      ],
      relatedPosts: [
        { title: "Czy AI wystarczy do stworzenia strony lub aplikacji?", href: "/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji" },
        { title: "Strona internetowa dla firmy - jak wybrać wykonawcę", href: "/blog/strona-internetowa-dla-firmy-jak-wybrac-wykonawce" },
      ],
    },
    en: {
      definition:
        "A website or app that runs fast and error-free again — even if the previous vendor disappeared. Fixes, speed-ups, better Google visibility (technical SEO, Core Web Vitals), security, and further development.",
      pains: ["The project is slow or unstable.", "The previous vendor no longer develops the system.", "Technical issues reduce sales, SEO, or customer trust."],
      deliverables: ["Diagnosis: what is broken and what it costs you", "A repair plan starting with what matters for sales", "Bugs fixed and a faster site", "Ongoing care so problems don't come back"],
      industries: ["post-launch companies", "e-commerce", "SaaS", "service websites"],
      proof: "Diagnosis first, then fixing the cause rather than the symptom. That way you don't pay twice for the same problem.",
      price: "Diagnostics and small fixes usually start from PLN 1,500 net; larger work is estimated after audit.",
      timeline: "Diagnosis usually takes 1-3 business days; implementation depends on scope.",
      faq: [
        { q: "Do you fix projects after other vendors?", a: "Yes. We take over existing websites and applications, audit them, organize the code, and plan fixes in stages." },
        { q: "Can you improve Core Web Vitals?", a: "Yes. Core Web Vitals are Google's measures of whether a page loads fast and doesn't jump around. I fix images, scripts, and the server so the page loads faster, which helps both Google rankings and sales." },
        { q: "Do you offer ongoing maintenance?", a: "Yes. We can agree on monthly support, updates, monitoring, and development scope." },
      ],
      relatedPosts: [
        { title: "Is AI enough to build a website or app?", href: "/en/blog/is-ai-enough-to-build-a-website-or-app" },
        { title: "Business website - how to choose a developer", href: "/en/blog/business-website-how-to-choose-a-developer" },
      ],
    },
  },
};
