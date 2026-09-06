import type { SiteLang } from "@/lib/services";

export interface AutomationExample {
  id: string;
  title: Record<SiteLang, string>;
  problem: Record<SiteLang, string>;
  solution: Record<SiteLang, string>;
  effect: Record<SiteLang, string>;
}

/**
 * Wspólna lista procesów, które najczęściej automatyzuję.
 * Używana na stronie głównej, stronie usługi automatyzacji, we wpisie blogowym
 * oraz w bazie wiedzy asystenta AI. Teksty celowo krótkie - to karty, nie artykuł.
 */
export const automationExamples: AutomationExample[] = [
  {
    id: "leads",
    title: { pl: "Zapytania i leady", en: "Enquiries and leads" },
    problem: {
      pl: "Zapytania z formularza, maila i telefonu lądują w różnych miejscach, a odpowiedź zajmuje godziny.",
      en: "Enquiries from forms, email, and phone end up in different places and replies take hours.",
    },
    solution: {
      pl: "Agent AI odpowiada w kilka sekund, dopytuje o szczegóły i zapisuje lead w Twoim systemie z podsumowaniem.",
      en: "An AI agent replies within seconds, asks follow-ups, and saves the lead to your system with a summary.",
    },
    effect: { pl: "Odpowiedź w sekundy zamiast godzin", en: "Reply in seconds, not hours" },
  },
  {
    id: "tickets",
    title: { pl: "Zgłoszenia i helpdesk", en: "Tickets and helpdesk" },
    problem: {
      pl: "Zespół ręcznie czyta i przekazuje zgłoszenia, a powtarzalne pytania blokują trudniejsze sprawy.",
      en: "The team manually reads and routes tickets while repetitive questions block harder cases.",
    },
    solution: {
      pl: "AI klasyfikuje zgłoszenia, odpowiada na powtarzalne sprawy z bazy wiedzy i przekazuje resztę człowiekowi z gotowym kontekstem.",
      en: "AI classifies tickets, answers repetitive cases from a knowledge base, and hands the rest to a human with context.",
    },
    effect: { pl: "40-60% zgłoszeń bez udziału człowieka", en: "40-60% of tickets resolved without a human" },
  },
  {
    id: "orders",
    title: { pl: "Zamówienia i statusy", en: "Orders and status updates" },
    problem: {
      pl: "Zamówienia z maila i telefonu są przepisywane ręcznie, a klienci dzwonią z pytaniem o status.",
      en: "Orders from email and phone are re-entered manually and customers call about status.",
    },
    solution: {
      pl: "Zamówienia wchodzą do systemu same, klient dostaje powiadomienia, a na „gdzie moja przesyłka” odpowiada agent.",
      en: "Orders enter the system automatically, customers get notifications, and an agent answers 'where is my order'.",
    },
    effect: { pl: "Mniej błędów i telefonów do biura", en: "Fewer errors and calls to the office" },
  },
  {
    id: "documents",
    title: { pl: "Faktury i dokumenty", en: "Invoices and documents" },
    problem: {
      pl: "Dane z faktur, umów i formularzy są ręcznie przepisywane do arkuszy lub księgowości.",
      en: "Data from invoices, contracts, and forms is manually copied into spreadsheets or accounting.",
    },
    solution: {
      pl: "AI odczytuje PDF-y, skany i maile, wyciąga dane, sprawdza je i przekazuje do systemu.",
      en: "AI reads PDFs, scans, and emails, extracts the data, validates it, and pushes it to the system.",
    },
    effect: { pl: "Godziny pracy biurowej zamienione na minuty", en: "Hours of office work turned into minutes" },
  },
  {
    id: "data-sync",
    title: { pl: "Dane między systemami", en: "Data between systems" },
    problem: {
      pl: "CRM, arkusze, sklep i program księgowy nie rozmawiają ze sobą, więc ktoś kopiuje dane ręcznie.",
      en: "CRM, spreadsheets, the store, and accounting do not talk to each other, so someone copies data by hand.",
    },
    solution: {
      pl: "Połączenia między systemami synchronizują dane automatycznie, bez kopiuj-wklej.",
      en: "Connections between systems sync data automatically, without copy-paste.",
    },
    effect: { pl: "Zero podwójnego wprowadzania", en: "Zero double entry" },
  },
  {
    id: "reports",
    title: { pl: "Raporty i wskaźniki", en: "Reports and KPIs" },
    problem: {
      pl: "Raporty tygodniowe i miesięczne składane są ręcznie z kilku źródeł.",
      en: "Weekly and monthly reports are compiled manually from several sources.",
    },
    solution: {
      pl: "Raport generuje się sam i trafia na maila lub Slacka, z alertem, gdy coś odbiega od normy.",
      en: "The report builds itself and lands in email or Slack, with an alert when something is off.",
    },
    effect: { pl: "Aktualne dane bez pracy analityka", en: "Fresh data without analyst work" },
  },
  {
    id: "crm",
    title: { pl: "Sprzedaż i follow-upy", en: "Sales and follow-ups" },
    problem: {
      pl: "Handlowcy zapominają o follow-upach, a notatki ze spotkań nie trafiają do systemu.",
      en: "Salespeople forget follow-ups and meeting notes never make it into the system.",
    },
    solution: {
      pl: "AI streszcza rozmowy, aktualizuje CRM, przygotowuje szkice maili i przypomina o kolejnych krokach.",
      en: "AI summarizes calls, updates the CRM, drafts follow-up emails, and reminds about next steps.",
    },
    effect: { pl: "Więcej domkniętych szans tym samym zespołem", en: "More closed deals with the same team" },
  },
  {
    id: "booking",
    title: { pl: "Rezerwacje i wizyty", en: "Bookings and appointments" },
    problem: {
      pl: "Klienci dzwonią, żeby umówić termin, a zespół traci czas na koordynację i przypomnienia.",
      en: "Customers call to book, and the team wastes time coordinating and sending reminders.",
    },
    solution: {
      pl: "Rezerwacje online z płatnościami, przypomnieniami SMS i kalendarzem, który wypełnia się sam.",
      en: "Online booking with payments, SMS reminders, and a calendar that fills itself.",
    },
    effect: { pl: "Mniej no-show, rezerwacje po godzinach", en: "Fewer no-shows, after-hours bookings" },
  },
  {
    id: "office",
    title: { pl: "Powtarzalna praca biurowa", en: "Repetitive office work" },
    problem: {
      pl: "Te same maile, oferty, formularze i tabele wypełniane dzień w dzień.",
      en: "The same emails, quotes, forms, and tables filled in day after day.",
    },
    solution: {
      pl: "Asystent AI przygotowuje szkice odpowiedzi i dokumentów z szablonów i danych firmy.",
      en: "An AI assistant drafts replies and documents from templates and company data.",
    },
    effect: { pl: "Kilka godzin tygodniowo na osobę z powrotem", en: "Several hours per person per week back" },
  },
  {
    id: "field-service",
    title: { pl: "Serwis i technicy w terenie", en: "Field service" },
    problem: {
      pl: "Zgłoszenia serwisowe, części i grafik techników żyją w telefonie i notatkach.",
      en: "Service requests, parts, and technician schedules live in phone calls and notes.",
    },
    solution: {
      pl: "Aplikacja do zgłoszeń, planowania wizyt i historii urządzeń, z powiadomieniami dla klienta.",
      en: "An app for requests, visit planning, and equipment history, with customer notifications.",
    },
    effect: { pl: "Szybsza reakcja serwisu, mniej pomyłek", en: "Faster service response, fewer mistakes" },
  },
  {
    id: "hr",
    title: { pl: "Onboarding i kadry", en: "Onboarding and HR" },
    problem: {
      pl: "Nowi pracownicy dostają dostępy z opóźnieniem, a pytania o urlopy trafiają do jednej osoby.",
      en: "New employees get access late, and leave questions land on one person.",
    },
    solution: {
      pl: "Automatyczne checklisty onboardingu, wnioski urlopowe i asystent odpowiadający na pytania kadrowe.",
      en: "Automatic onboarding checklists, leave requests, and an assistant answering HR questions.",
    },
    effect: { pl: "Uporządkowane procesy bez dodatkowego etatu", en: "Organized processes without an extra hire" },
  },
  {
    id: "ecommerce",
    title: { pl: "Sklep internetowy", en: "Online store" },
    problem: {
      pl: "Opisy produktów, pytania klientów i zwroty pochłaniają czas zespołu sklepu.",
      en: "Product descriptions, customer questions, and returns consume the store team's time.",
    },
    solution: {
      pl: "AI pisze opisy i odpowiedzi, a automat obsługuje zwroty, reklamacje i stany magazynowe.",
      en: "AI writes content and replies, while automation handles returns, complaints, and stock levels.",
    },
    effect: { pl: "Większy katalog bez nowych etatów", en: "A bigger catalog without new hires" },
  },
];

export function getAutomationExamples(lang: SiteLang) {
  return automationExamples.map((item) => ({
    id: item.id,
    title: item.title[lang],
    problem: item.problem[lang],
    solution: item.solution[lang],
    effect: item.effect[lang],
  }));
}
