import type { ServiceDetailId } from "@/lib/service-details";
import type { SiteLang } from "@/lib/services";

export interface ServicePageContent {
  eyebrow: string;
  /** Pierwsza część nagłówka H1 (zwykła). */
  title: string;
  /** Druga część nagłówka H1 (wyróżniona gradientem). */
  highlight: string;
  lead: string;
  facts: { label: string; value: string }[];
  offer: {
    eyebrow: string;
    title: string;
    lead?: string;
    items: { title: string; text: string; points?: string[]; tag?: string; highlight?: boolean; href?: string }[];
  };
}

const plFacts = (price: string, time: string, start = "Prototyp w 2–5 dni, gratis") => [
  { label: "Cena", value: price },
  { label: "Czas", value: time },
  { label: "Start", value: start },
];

const enFacts = (price: string, time: string, start = "Prototype in 2–5 days, free") => [
  { label: "Price", value: price },
  { label: "Timeline", value: time },
  { label: "Start", value: start },
];

/**
 * Treści stron usług: nagłówek, krótkie fakty i zakres.
 * Definicja, problemy, FAQ i budżet są w lib/service-details (wspólne z danymi strukturalnymi).
 */
export const servicePages: Record<ServiceDetailId, Record<SiteLang, ServicePageContent>> = {
  "web-development": {
    pl: {
      eyebrow: "Strony internetowe dla firm",
      title: "Strona internetowa, która ",
      highlight: "zamienia odwiedzających w zapytania",
      lead: "Klient w kilka sekund rozumie, co robisz, ile to kosztuje i jak się z Tobą skontaktować. Szybkie strony firmowe i landing page przygotowane pod Google, z formularzem prosto do Twojej skrzynki albo CRM.",
      facts: plFacts("od 3 500 zł netto", "1–3 tygodnie", "Makieta w 2–5 dni, gratis"),
      offer: {
        eyebrow: "Zakres",
        title: "Jaką stronę mogę dla Ciebie zrobić",
        items: [
          {
            title: "Strona firmowa",
            text: "Kilka podstron, które jasno mówią, co robisz, dla kogo i ile to kosztuje. Dla firm usługowych, B2B i lokalnych.",
            points: ["Oferta ułożona pod pytania klientów", "Formularz i telefon jednym kliknięciem", "Przygotowanie pod Google, żeby klienci Cię znajdowali"],
            highlight: true,
          },
          {
            title: "Landing page pod kampanię",
            text: "Jedna strona pod konkretną usługę albo reklamę: nagłówek, dowody, cena i formularz. Zaprojektowana tak, żeby odwiedzający zostawił kontakt, a nie zamknął kartę.",
            points: ["Ładuje się od razu, także na telefonie", "Widzisz, ile osób z reklamy zostawia kontakt", "Można porównać dwie wersje i zostawić lepszą"],
          },
          {
            title: "Strona z panelem treści",
            text: "Blog, cennik, galerie albo ceny edytujesz sam w panelu, bez programisty. Wersje językowe, gdy sprzedajesz za granicę.",
            points: ["Prosty panel do edycji", "Wielojęzyczność", "Integracje z CRM i mailingiem"],
          },
          {
            title: "Przebudowa istniejącej strony",
            text: "Zostawiam to, co działa w Google, i poprawiam resztę: szybkość, wygląd na telefonie i drogę do kontaktu.",
            points: ["Audyt i plan przekierowań", "Bez utraty pozycji w Google", "Pomiar efektu przed i po"],
          },
        ],
      },
    },
    en: {
      eyebrow: "Websites for businesses",
      title: "A website that ",
      highlight: "turns visitors into enquiries",
      lead: "Visitors understand in seconds what you do, what it costs, and how to contact you. Fast business websites and landing pages prepared for Google, with forms straight to your inbox or CRM.",
      facts: enFacts("from PLN 3,500 net", "1–3 weeks", "Mock-up in 2–5 days, free"),
      offer: {
        eyebrow: "Scope",
        title: "What kind of website I can build for you",
        items: [
          {
            title: "Business website",
            text: "A few pages that clearly say what you do, for whom, and what it costs. For service companies, B2B, and local businesses.",
            points: ["Offer structured around customer questions", "Form and one-tap phone call", "Search preparation so customers can find you"],
            highlight: true,
          },
          {
            title: "Campaign landing page",
            text: "One page for a specific service or ad: headline, proof, price, and form. Designed so visitors leave their details instead of closing the tab.",
            points: ["Loads instantly, on phones too", "See how many ad visitors leave their details", "Compare two versions and keep the better one"],
          },
          {
            title: "Website with a content panel",
            text: "Edit the blog, price list, galleries, or prices yourself, without a developer. Language versions if you sell abroad.",
            points: ["Simple editing panel", "Multilingual", "CRM and newsletter integrations"],
          },
          {
            title: "Rebuild of an existing website",
            text: "I keep what works in Google and fix the rest: speed, mobile layout, and the path to contact.",
            points: ["Audit and redirect plan", "No loss of Google rankings", "Before/after measurement"],
          },
        ],
      },
    },
  },

  apps: {
    pl: {
      eyebrow: "Aplikacje webowe i mobilne dla firm",
      title: "Aplikacja dla firmy, która ",
      highlight: "zastępuje arkusze, maile i przepisywanie danych",
      lead: "Panele klienta, systemy wewnętrzne i aplikacje iOS/Android dopasowane do Twojego procesu. Zaczynamy od pierwszej wersji z najważniejszą funkcją, którą zespół sprawdza w prawdziwej pracy.",
      facts: plFacts("od 12 000 zł netto (MVP)", "2–8 tygodni"),
      offer: {
        eyebrow: "Zakres",
        title: "Co najczęściej buduję dla firm",
        items: [
          {
            title: "Panel dla klientów",
            text: "Klient sam sprawdza status zamówienia, pobiera dokumenty, zgłasza sprawy i płaci — zamiast dzwonić do biura.",
            points: ["Logowanie i role", "Statusy, dokumenty, płatności", "Powiadomienia e-mail i push"],
            highlight: true,
          },
          {
            title: "System wewnętrzny",
            text: "Zlecenia, grafiki, terminy, magazyn albo raporty w jednym miejscu zamiast w arkuszach i wątkach mailowych.",
            points: ["Uprawnienia dla zespołu", "Raporty i eksport do Excela", "Integracje z CRM i księgowością"],
          },
          {
            title: "Aplikacja mobilna iOS i Android",
            text: "Dla pracowników w terenie, serwisu i klientów: praca offline, zdjęcia, podpisy i powiadomienia.",
            points: ["Jedna baza kodu na oba systemy", "Publikacja w App Store i Google Play", "Panel administracyjny"],
            href: "/uslugi/aplikacje-mobilne-dla-firm",
          },
          {
            title: "Pierwsza wersja produktu (MVP, SaaS)",
            text: "Twój pomysł na produkt u pierwszych klientów w kilka tygodni: rejestracja, abonamenty, panel i najważniejsza funkcja.",
            points: ["Gotowa do pokazania klientom po kilku tygodniach", "Gotowa na kolejnych klientów i funkcje", "Widzisz, z czego klienci naprawdę korzystają"],
          },
        ],
      },
    },
    en: {
      eyebrow: "Web and mobile apps for companies",
      title: "A business app that ",
      highlight: "replaces spreadsheets, emails, and manual data entry",
      lead: "Customer portals, internal systems, and iOS/Android apps tailored to your process. We start with a first version of the key feature that the team tests in real work.",
      facts: enFacts("from PLN 12,000 net (MVP)", "2–8 weeks"),
      offer: {
        eyebrow: "Scope",
        title: "What I build for companies most often",
        items: [
          {
            title: "Customer portal",
            text: "Customers check order status, download documents, raise requests, and pay — instead of calling the office.",
            points: ["Login and roles", "Statuses, documents, payments", "Email and push notifications"],
            highlight: true,
          },
          {
            title: "Internal system",
            text: "Orders, schedules, deadlines, stock, or reports in one place instead of spreadsheets and email threads.",
            points: ["Team permissions", "Reports and Excel export", "CRM and accounting integrations"],
          },
          {
            title: "iOS and Android mobile app",
            text: "For field staff, service teams, and customers: offline mode, photos, signatures, and notifications.",
            points: ["One codebase for both platforms", "App Store and Google Play publishing", "Admin panel"],
            href: "/en/services/mobile-apps-for-companies",
          },
          {
            title: "First product version (MVP, SaaS)",
            text: "Your product idea in front of first customers within weeks: sign-up, subscriptions, admin panel, and the key feature.",
            points: ["Ready to show customers within weeks", "Ready for more customers and features", "See what customers actually use"],
          },
        ],
      },
    },
  },

  "mobile-apps": {
    pl: {
      eyebrow: "Aplikacje mobilne dla firm",
      title: "Aplikacje mobilne dla firm na zamówienie: ",
      highlight: "iOS i Android z panelem i integracjami",
      lead: "Dla pracowników w terenie, serwisu, sprzedaży i klientów. Praca offline, zdjęcia, podpisy, geolokalizacja i powiadomienia push — zsynchronizowane z systemem firmy.",
      facts: plFacts("od 12 000 zł netto (MVP)", "3–8 tygodni", "Makiety ekranów gratis"),
      offer: {
        eyebrow: "Zastosowania",
        title: "Do czego firmy zamawiają aplikacje mobilne",
        items: [
          { title: "Pracownicy w terenie", text: "Zlecenia, checklisty, zdjęcia, podpisy klienta i praca offline. Dane trafiają do systemu od razu, a nie po powrocie do biura.", highlight: true },
          { title: "Serwis i zgłoszenia", text: "Zgłoszenia serwisowe, historia urządzeń, części, harmonogram wizyt i powiadomienia o statusie dla klienta." },
          { title: "Sprzedaż B2B i handlowcy", text: "Katalog, cenniki, zamówienia u klienta, stany magazynowe i notatki ze spotkań zsynchronizowane z CRM." },
          { title: "Aplikacja dla klientów", text: "Rezerwacje, zamówienia, status realizacji, płatności i powiadomienia push zamiast telefonów do biura." },
          { title: "Logistyka i transport", text: "Trasy, potwierdzenia dostaw, skanowanie kodów, dokumenty przewozowe i komunikacja kierowca–dyspozytor." },
          { title: "Produkcja i magazyn", text: "Rejestracja operacji, kontrola jakości ze zdjęciami, inwentaryzacja skanerem i zgłaszanie awarii z hali." },
        ],
      },
    },
    en: {
      eyebrow: "Mobile apps for companies",
      title: "Custom mobile apps for companies: ",
      highlight: "iOS and Android with a panel and integrations",
      lead: "For field staff, service, sales, and customers. Offline mode, photos, signatures, geolocation, and push notifications — synced with your company systems.",
      facts: enFacts("from PLN 12,000 net (MVP)", "3–8 weeks", "Screen mock-ups free"),
      offer: {
        eyebrow: "Use cases",
        title: "What companies order mobile apps for",
        items: [
          { title: "Field staff", text: "Jobs, checklists, photos, customer signatures, and offline mode. Data reaches the system immediately, not after returning to the office.", highlight: true },
          { title: "Service and tickets", text: "Service requests, device history, parts, visit schedules, and status notifications for the customer." },
          { title: "B2B sales reps", text: "Catalogue, price lists, on-site orders, stock levels, and meeting notes synced with the CRM." },
          { title: "Customer app", text: "Bookings, orders, fulfilment status, payments, and push notifications instead of calls to the office." },
          { title: "Logistics and transport", text: "Routes, delivery confirmations, barcode scanning, transport documents, and driver–dispatcher communication." },
          { title: "Production and warehouse", text: "Operation logging, photo-based quality control, scanner stocktaking, and reporting breakdowns from the floor." },
        ],
      },
    },
  },

  "automation-ai": {
    pl: {
      eyebrow: "Automatyzacje AI dla firm",
      title: "Automatyzacje AI dla firm: ",
      highlight: "agenci AI i integracje, które zdejmują pracę ręczną",
      lead: "Obsługa zapytań i zgłoszeń, faktury i dokumenty, dane między systemami, raporty. Zaczynamy od jednego procesu, który zabiera najwięcej czasu, i mierzymy efekt.",
      facts: plFacts("od 2 500 zł netto", "3–14 dni roboczych"),
      offer: {
        eyebrow: "Zakres",
        title: "Co obejmują usługi automatyzacji procesów",
        items: [
          {
            title: "Agenci AI",
            text: "Rozumieją język naturalny, zbierają dane, dopytują, klasyfikują sprawę i uruchamiają akcje w Twoich systemach.",
            points: ["Asystent na stronie i w komunikatorach", "Kwalifikacja leadów i zgłoszeń 24/7", "Agent wewnętrzny z wiedzą firmy"],
            highlight: true,
          },
          {
            title: "Automatyzacja procesów biznesowych",
            text: "Powtarzalne zadania, które zajmują czas zespołu — od prostych powiadomień po workflow obejmujący wiele systemów.",
            points: ["CRM, ERP, formularze i poczta połączone ze sobą", "Raporty, które przychodzą same", "Faktury i dokumenty bez przepisywania"],
          },
          {
            title: "Obsługa klienta i zgłoszeń",
            text: "AI odpowiada na powtarzalne sprawy z bazy wiedzy, a trudniejsze przekazuje człowiekowi z gotowym podsumowaniem.",
            points: ["Klasyfikacja i priorytety", "Statusy zamówień i przesyłek", "Eskalacja z pełnym kontekstem"],
          },
          {
            title: "Dane, dokumenty i RPA",
            text: "Dane ze skanów i PDF-ów trafiają do systemu same, także do programów, które nie mają połączeń z innymi. Do tego analiza, która podpowiada decyzje.",
            points: ["Ekstrakcja danych z dokumentów", "Automatyczne wypełnianie formularzy", "Wykrywanie anomalii"],
          },
        ],
      },
    },
    en: {
      eyebrow: "AI automation for companies",
      title: "AI automation for companies: ",
      highlight: "AI agents and integrations that remove manual work",
      lead: "Enquiries and tickets, invoices and documents, data between systems, reports. We start with the one process that takes the most time and measure the effect.",
      facts: enFacts("from PLN 2,500 net", "3–14 business days"),
      offer: {
        eyebrow: "Scope",
        title: "What process automation services cover",
        items: [
          {
            title: "AI agents",
            text: "They understand natural language, collect data, ask follow-up questions, classify the case, and trigger actions in your systems.",
            points: ["Assistant on your website and messengers", "24/7 lead and ticket qualification", "Internal agent with company knowledge"],
            highlight: true,
          },
          {
            title: "Business process automation",
            text: "Repetitive tasks that eat the team's time — from simple notifications to workflows across several systems.",
            points: ["CRM, ERP, forms, and email connected", "Reports that arrive by themselves", "Invoices and documents without retyping"],
          },
          {
            title: "Customer service and tickets",
            text: "AI answers repetitive cases from the knowledge base and hands harder ones to a person with a ready summary.",
            points: ["Classification and priorities", "Order and shipment status", "Escalation with full context"],
          },
          {
            title: "Data, documents, and RPA",
            text: "Data from scans and PDFs reaches your system by itself, even software with no connections to others. Plus analysis that supports decisions.",
            points: ["Data extraction from documents", "Automatic form filling", "Anomaly detection"],
          },
        ],
      },
    },
  },

  "ecommerce-booking": {
    pl: {
      eyebrow: "Sklepy internetowe",
      title: "Sklep internetowy, który ",
      highlight: "sam obsługuje płatności, wysyłki i faktury",
      lead: "Sklepy B2C i B2B z bramką płatniczą, kurierami, integracją z magazynem i ERP oraz automatycznym fakturowaniem.",
      facts: plFacts("od 7 000 zł netto", "2–4 tygodnie"),
      offer: {
        eyebrow: "Zakres",
        title: "Co obejmuje wdrożenie sklepu",
        items: [
          {
            title: "Sklep B2C",
            text: "Katalog, wyszukiwarka, koszyk i szybki checkout na telefonie. Projektowany tak, żeby klient kończył zakup.",
            points: ["Płatności BLIK, karty, przelewy", "Kody rabatowe i promocje", "SEO kart produktów"],
            highlight: true,
          },
          {
            title: "Platforma B2B",
            text: "Ceny indywidualne, limity kupieckie, szybkie zamówienia z listy i historia zamówień dla stałych klientów.",
            points: ["Cenniki per klient", "Zamówienia z pliku", "Konta firmowe i role"],
          },
          {
            title: "Dostawy i zaplecze",
            text: "Etykiety kurierskie, statusy przesyłek, stany magazynowe i dokumenty bez ręcznego przepisywania.",
            points: ["InPost, DPD i inni przewoźnicy", "Synchronizacja z magazynem i ERP", "Automatyczne faktury"],
          },
          {
            title: "Analityka i rozwój",
            text: "Wiesz, które produkty i kampanie zarabiają, a gdzie klienci porzucają koszyk.",
            points: ["Raporty sprzedaży", "Widzisz, na którym kroku klienci rezygnują", "Poprawki, po których więcej osób kończy zakup"],
          },
        ],
      },
    },
    en: {
      eyebrow: "Online stores",
      title: "An online store that ",
      highlight: "handles payments, shipping, and invoices on its own",
      lead: "B2C and B2B stores with a payment gateway, couriers, stock and ERP integration, and automatic invoicing.",
      facts: enFacts("from PLN 7,000 net", "2–4 weeks"),
      offer: {
        eyebrow: "Scope",
        title: "What a store implementation covers",
        items: [
          {
            title: "B2C store",
            text: "Catalogue, search, cart, and fast mobile checkout. Designed so customers finish the purchase.",
            points: ["Cards, transfers, local payment methods", "Discount codes and promotions", "SEO-ready product pages"],
            highlight: true,
          },
          {
            title: "B2B platform",
            text: "Individual prices, credit limits, quick orders from a list, and order history for regular customers.",
            points: ["Per-customer price lists", "Orders from a file", "Company accounts and roles"],
          },
          {
            title: "Shipping and back office",
            text: "Courier labels, shipment statuses, stock levels, and documents without manual re-typing.",
            points: ["Major courier integrations", "Stock and ERP sync", "Automatic invoices"],
          },
          {
            title: "Analytics and growth",
            text: "You know which products and campaigns make money and where customers abandon the cart.",
            points: ["Sales reports", "See at which step customers give up", "Fixes that get more people to finish checkout"],
          },
        ],
      },
    },
  },

  "booking-systems": {
    pl: {
      eyebrow: "Systemy rezerwacji online",
      title: "System rezerwacji online, w którym ",
      highlight: "klient sam wybiera termin i płaci",
      lead: "Kalendarz dostępności, płatności online, przypomnienia SMS i e-mail oraz panel dla Ciebie i pracowników. Mniej telefonów i mniej nieobecności.",
      facts: plFacts("od 6 000 zł netto", "1–4 tygodnie"),
      offer: {
        eyebrow: "Zakres",
        title: "Co obejmuje system rezerwacji",
        items: [
          {
            title: "Kalendarz i rezerwacje",
            text: "Wolne terminy liczone z grafiku pracowników, sal lub sprzętu. Klient rezerwuje w minutę, także wieczorem.",
            points: ["Grafiki i przerwy", "Usługi o różnej długości", "Zapisy grupowe i limity miejsc"],
            highlight: true,
          },
          {
            title: "Płatności i zaliczki",
            text: "Przedpłata albo zaliczka przy rezerwacji ogranicza nieobecności i puste okienka w grafiku.",
            points: ["Płatności online", "Zwroty i anulowanie", "Faktury"],
          },
          {
            title: "Przypomnienia",
            text: "Automatyczne przypomnienia SMS i e-mail przed wizytą oraz link do przełożenia terminu bez telefonu.",
            points: ["SMS i e-mail", "Przełożenie jednym kliknięciem", "Lista oczekujących"],
          },
          {
            title: "Panel i integracje",
            text: "Panel dla Ciebie i pracowników, raporty obłożenia oraz połączenie z kalendarzem Google i CRM.",
            points: ["Role pracowników", "Raporty i eksport", "Google Calendar, CRM, strona"],
          },
        ],
      },
    },
    en: {
      eyebrow: "Online booking systems",
      title: "An online booking system where ",
      highlight: "customers pick a time and pay on their own",
      lead: "Availability calendar, online payments, SMS and email reminders, and a panel for you and your staff. Fewer calls and fewer no-shows.",
      facts: enFacts("from PLN 6,000 net", "1–4 weeks"),
      offer: {
        eyebrow: "Scope",
        title: "What a booking system covers",
        items: [
          {
            title: "Calendar and bookings",
            text: "Free slots calculated from staff, room, or equipment schedules. Customers book in a minute, even in the evening.",
            points: ["Schedules and breaks", "Services of different lengths", "Group bookings and capacity limits"],
            highlight: true,
          },
          {
            title: "Payments and deposits",
            text: "Prepayment or a deposit at booking reduces no-shows and empty slots.",
            points: ["Online payments", "Refunds and cancellations", "Invoices"],
          },
          {
            title: "Reminders",
            text: "Automatic SMS and email reminders before the visit and a link to reschedule without calling.",
            points: ["SMS and email", "One-click rescheduling", "Waiting list"],
          },
          {
            title: "Panel and integrations",
            text: "A panel for you and your staff, occupancy reports, and a connection to Google Calendar and your CRM.",
            points: ["Staff roles", "Reports and export", "Google Calendar, CRM, website"],
          },
        ],
      },
    },
  },

  devops: {
    pl: {
      eyebrow: "DevOps i wdrożenia w chmurze",
      title: "Automatyzacja wdrożeń w chmurze: ",
      highlight: "nowa wersja aplikacji bez stresu i przestojów",
      lead: "Nowa wersja aplikacji wchodzi jednym kliknięciem, bez przestoju. Kopie zapasowe robią się same, a o awarii wiesz przed klientami. Automatyczne wdrożenia (CI/CD), monitoring i porządek na AWS, Google Cloud, Vercel, Dockerze albo Twoim serwerze.",
      facts: plFacts("od 4 500 zł netto", "2–10 dni roboczych", "Bezpłatny przegląd infrastruktury"),
      offer: {
        eyebrow: "Zakres",
        title: "Co obejmuje wdrożenie DevOps",
        items: [
          {
            title: "Wdrożenia w chmurze",
            text: "Aplikacja na AWS, Google Cloud, Azure, Vercel albo własnym serwerze — z konfiguracją, którą da się odtworzyć.",
            points: ["Wersja testowa do sprawdzenia przed publikacją", "Domeny, certyfikaty SSL i szybkie ładowanie", "Konfiguracja zapisana, więc po awarii da się ją odtworzyć"],
            highlight: true,
          },
          {
            title: "CI/CD",
            text: "Każda zmiana przechodzi testy i trafia na produkcję automatycznie, bez ręcznego kopiowania plików.",
            points: ["GitHub Actions, GitLab CI", "Automatyczne testy", "Szybki powrót do poprzedniej wersji"],
          },
          {
            title: "Monitoring i alerty",
            text: "Wiesz o problemie, zanim zadzwoni klient: logi, metryki, błędy i powiadomienia w jednym miejscu.",
            points: ["Monitoring dostępności", "Logi i błędy aplikacji", "Alerty e-mail i Slack"],
          },
          {
            title: "Kopie zapasowe i bezpieczeństwo",
            text: "Automatyczne kopie bazy i plików, sprawdzone odtwarzanie i podstawy bezpieczeństwa infrastruktury.",
            points: ["Backup i test odtworzenia", "Zarządzanie sekretami", "Aktualizacje i hardening"],
          },
        ],
      },
    },
    en: {
      eyebrow: "DevOps and cloud deployment",
      title: "Cloud deployment automation: ",
      highlight: "new app versions without stress or downtime",
      lead: "A new app version goes live in one click, without downtime. Backups run themselves and you hear about outages before customers do. Automated deployments (CI/CD), monitoring, and order on AWS, Google Cloud, Vercel, Docker, or your own server.",
      facts: enFacts("from PLN 4,500 net", "2–10 business days", "Free infrastructure review"),
      offer: {
        eyebrow: "Scope",
        title: "What a DevOps implementation covers",
        items: [
          {
            title: "Cloud deployment",
            text: "Your app on AWS, Google Cloud, Azure, Vercel, or your own server — with configuration you can reproduce.",
            points: ["A test version to check before publishing", "Domains, SSL certificates, and fast loading", "Configuration saved, so it can be restored after a failure"],
            highlight: true,
          },
          {
            title: "CI/CD",
            text: "Every change is tested and shipped to production automatically, with no manual file copying.",
            points: ["GitHub Actions, GitLab CI", "Automated tests", "Fast rollback"],
          },
          {
            title: "Monitoring and alerts",
            text: "You know about a problem before a customer calls: logs, metrics, errors, and notifications in one place.",
            points: ["Uptime monitoring", "Application logs and errors", "Email and Slack alerts"],
          },
          {
            title: "Backups and security",
            text: "Automatic database and file backups, tested restores, and infrastructure security basics.",
            points: ["Backups and restore tests", "Secrets management", "Updates and hardening"],
          },
        ],
      },
    },
  },

  maintenance: {
    pl: {
      eyebrow: "Naprawa, optymalizacja i utrzymanie",
      title: "Naprawa błędów, szybsza strona i ",
      highlight: "opieka nad projektem po poprzednim wykonawcy",
      lead: "Diagnozuję problem w kilka dni, naprawiam błędy, przyspieszam stronę, poprawiam SEO techniczne i błędy z Google Search Console, a potem pilnuję, żeby wszystko działało.",
      facts: plFacts("od 1 500 zł netto", "Diagnoza w 1–3 dni", "Bezpłatna wstępna ocena"),
      offer: {
        eyebrow: "Zakres",
        title: "Co naprawiam i poprawiam",
        items: [
          {
            title: "Naprawa błędów",
            text: "Formularz nie wysyła, płatności nie przechodzą, panel się wiesza. Znajduję przyczynę, a nie tylko objaw.",
            points: ["Diagnoza i raport", "Poprawki z testami", "Przejęcie projektu po innym wykonawcy"],
            highlight: true,
          },
          {
            title: "Wydajność i Core Web Vitals",
            text: "Wolna strona traci klientów i pozycje w Google. Przyspieszam ładowanie, obrazy, skrypty i serwer.",
            points: ["Pomiar przed i po", "Optymalizacja obrazów i kodu", "Cache i CDN"],
          },
          {
            title: "SEO techniczne i błędy w Google",
            text: "Strony poza indeksem, przekierowania, duplikaty, błędy w Search Console i brak danych strukturalnych.",
            points: ["Podstrony znowu widoczne w Google", "Stare adresy przekierowane bez utraty klientów", "Gwiazdki i pytania FAQ w wynikach Google (schema)"],
          },
          {
            title: "Utrzymanie i bezpieczeństwo",
            text: "Aktualizacje, kopie zapasowe, monitoring i drobne zmiany w stałym rytmie, bez czekania tygodniami.",
            points: ["Aktualizacje i łatki", "Kopie zapasowe", "Szybka reakcja na awarie"],
          },
        ],
      },
    },
    en: {
      eyebrow: "Fixes, optimization, and maintenance",
      title: "Bug fixes, a faster website, and ",
      highlight: "care for a project left by a previous vendor",
      lead: "I diagnose the problem within days, fix bugs, speed up the site, improve technical SEO and Google Search Console errors, and then keep everything running.",
      facts: enFacts("from PLN 1,500 net", "Diagnosis in 1–3 days", "Free initial assessment"),
      offer: {
        eyebrow: "Scope",
        title: "What I fix and improve",
        items: [
          {
            title: "Bug fixes",
            text: "The form doesn't send, payments fail, the panel freezes. I find the cause, not just the symptom.",
            points: ["Diagnosis and report", "Fixes with tests", "Taking over from another vendor"],
            highlight: true,
          },
          {
            title: "Performance and Core Web Vitals",
            text: "A slow website loses customers and Google rankings. I speed up loading, images, scripts, and the server.",
            points: ["Before/after measurement", "Image and code optimisation", "Cache and CDN"],
          },
          {
            title: "Technical SEO and Google errors",
            text: "Pages out of the index, redirects, duplicates, Search Console errors, and missing structured data.",
            points: ["Pages visible in Google again", "Old addresses redirected without losing customers", "Stars and FAQs in Google results (schema)"],
          },
          {
            title: "Maintenance and security",
            text: "Updates, backups, monitoring, and small changes on a steady schedule, without waiting weeks.",
            points: ["Updates and patches", "Backups", "Fast incident response"],
          },
        ],
      },
    },
  },
};
