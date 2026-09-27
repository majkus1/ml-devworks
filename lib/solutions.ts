import type { SiteLang } from "@/lib/services";

/**
 * Rozwiązania branżowe: strony pod konkretne nisze (szkoły i akademie, firmy pilnujące terminów).
 * Treść PL i EN w jednym miejscu, jeden szablon strony (components/SolutionPage.tsx).
 */
export type SolutionId = "class-enrollment" | "deadline-reminders";

export interface SolutionContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  breadcrumb: string;
  eyebrow: string;
  h1: string;
  h1Highlight: string;
  lead: string;
  priceLine: string;
  ctaPrimary: string;
  ctaAssistant: string;
  painsHeading: string;
  pains: string[];
  flowHeading: string;
  flowIntro: string;
  flow: { title: string; text: string }[];
  featuresHeading: string;
  features: { title: string; text: string }[];
  audienceHeading: string;
  audience: string[];
  integrationsHeading: string;
  integrations: string;
  example: { label: string; title: string; text: string; linkLabel?: string; linkHref?: string };
  pricingHeading: string;
  pricing: { title: string; value: string; text: string }[];
  faqHeading: string;
  faq: { q: string; a: string }[];
  relatedHeading: string;
  related: { label: string; href: string }[];
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
}

export interface Solution {
  id: SolutionId;
  href: Record<SiteLang, string>;
  lastModified: string;
  content: Record<SiteLang, SolutionContent>;
}

export const solutions: Solution[] = [
  {
    id: "class-enrollment",
    href: { pl: "/uslugi/system-zapisow-na-zajecia", en: "/en/services/class-enrollment-system" },
    lastModified: "2026-09-27",
    content: {
      pl: {
        metaTitle: "System zapisów na zajęcia dla szkół i akademii | ML DevWorks",
        metaDescription:
          "System zapisów na zajęcia: zgłoszenia z formularza, lekcja próbna, automatyczne pytanie o decyzję i odrabianie zajęć. Bezpłatny prototyp, od 2 500 zł netto.",
        keywords: [
          "system zapisów na zajęcia",
          "system zapisów dla szkoły językowej",
          "program do zapisów na zajęcia dla dzieci",
          "zapisy na lekcję próbną",
          "automatyzacja zapisów w szkole",
          "system do odrabiania zajęć",
          "aplikacja dla szkoły tańca",
          "aplikacja dla akademii piłkarskiej",
          "system zapisów dla szkoły robotyki",
          "panel dla szkoły językowej",
        ],
        breadcrumb: "System zapisów na zajęcia",
        eyebrow: "Dla szkół językowych, tańca, akademii sportowych",
        h1: "System zapisów na zajęcia dla szkół i akademii:",
        h1Highlight: "od lekcji próbnej do zapisu",
        lead: "Zgłoszenia z formularza, lekcja próbna, pytanie o decyzję po zajęciach i odrabianie odwołanych lekcji dzieją się same. Biuro dzwoni tylko tam, gdzie naprawdę trzeba.",
        priceLine: "Działający prototyp w Twoich kolorach i z Twoimi grupami bezpłatnie. Wdrożenie od 2 500 zł netto, pierwsza wersja w około tydzień.",
        ctaPrimary: "Poproś o prototyp",
        ctaAssistant: "Zapytaj asystenta AI",
        painsHeading: "Gdzie szkoły tracą zapisy",
        pains: [
          "Po lekcji próbnej nikt nie pyta o decyzję na czas. Rodzic odkłada odpowiedź, a potem zapisuje dziecko gdzie indziej.",
          "Odwołane zajęcia to kilkanaście telefonów i szukanie wolnych miejsc w innych grupach na tym samym poziomie.",
          "Zgłoszenia leżą w skrzynce mailowej, a wiedza o tym, kto jest na jakim etapie, siedzi w głowie jednej osoby.",
        ],
        flowHeading: "Jak to działa, krok po kroku",
        flowIntro: "Formularz na Twojej stronie zostaje bez zmian. System przejmuje wszystko, co dzieje się później.",
        flow: [
          {
            title: "Zgłoszenie trafia do panelu",
            text: "Każde zgłoszenie z formularza pojawia się jako karta z podpowiedzianą grupą: według wieku, poziomu i wolnych miejsc.",
          },
          {
            title: "Umawiasz lekcję próbną",
            text: "Dwa kliknięcia. Panel pokazuje tylko terminy w pasujących grupach, a rodzic dostaje przypomnienie dzień wcześniej.",
          },
          {
            title: "System sam pyta o decyzję",
            text: "Po zajęciach wiadomość wychodzi po 2 godzinach, 2 dniach i 5 dniach. Rodzic odpowiada jednym kliknięciem, bez zakładania konta.",
          },
          {
            title: "Odpowiedź zatrzymuje przypomnienia",
            text: "Zapis, pytanie albo rezygnacja z powodem trafiają na kartę. Rano widzisz tylko listę osób, do których warto zadzwonić.",
          },
          {
            title: "Odwołane zajęcia bez obdzwaniania",
            text: "Każdy uczeń dostaje dwa terminy odrabiania w innej grupie na tym samym poziomie. Kliknięcie rodzica od razu rezerwuje miejsce.",
          },
        ],
        featuresHeading: "Co jest w panelu",
        features: [
          { title: "Tablica zapisów", text: "Wszystkie zgłoszenia od pierwszego kontaktu do decyzji, z wyszukiwarką i filtrami." },
          { title: "Na dziś", text: "Jedna lista: do kogo zadzwonić, co uzupełnić, co wymaga uwagi." },
          { title: "Wolne miejsca w grupach", text: "Obłożenie każdej grupy i liczba chętnych czekających na miejsce." },
          { title: "Statystyki", text: "Zgłoszenia, lekcje próbne i zapisy miesiąc po miesiącu oraz powody rezygnacji." },
          { title: "Historia działań", text: "Każda wysłana wiadomość i każde działanie automatu, z możliwością ponowienia." },
          { title: "Twoje logo i kolory", text: "Panel i strony dla rodziców wyglądają jak część Twojej szkoły. Działa na komputerze i telefonie." },
        ],
        audienceHeading: "Dla kogo",
        audience: [
          "Szkoły językowe",
          "Szkoły tańca",
          "Akademie piłkarskie i sportowe",
          "Szkoły robotyki i programowania",
          "Szkoły muzyczne",
          "Kursy i zajęcia dla dzieci",
        ],
        integrationsHeading: "Nie zastępuje tego, co już działa",
        integrations:
          "E-dziennik, płatności i umowy zostają w systemie, którego używasz. Panel działa przed zapisem i obok grafiku, a dane zapisanego dziecka przenosisz jednym kliknięciem albo plikiem CSV. Wiadomości idą e-mailem, na życzenie także SMS-em.",
        example: {
          label: "Przykład",
          title: "Panel zapisów dla szkoły językowej w Krakowie",
          text: "Szkoła miała zautomatyzowany formularz i e-dziennik, ale luka była po lekcji pokazowej i przy odwołanych zajęciach. Zobacz, jak zaprojektowałem panel, który zamyka tę lukę.",
          linkLabel: "Przeczytaj studium przypadku",
          linkHref: "/blog/panel-zapisow-dla-szkoly-jezykowej-studium-przypadku",
        },
        pricingHeading: "Ile to kosztuje",
        pricing: [
          { title: "Prototyp", value: "bezpłatnie", text: "Działająca wersja na przykładowych danych, w Twoich kolorach, do przetestowania bez zobowiązań." },
          { title: "Wdrożenie", value: "od 2 500 zł netto", text: "Podłączenie formularza, Twoje grupy i lektorzy, wysyłka wiadomości z Twojej domeny, krótkie szkolenie." },
          { title: "Utrzymanie", value: "stała opłata miesięczna", text: "Hosting, kopie zapasowe, poprawki i drobne zmiany. Nowe funkcje wyceniane osobno, przed rozpoczęciem pracy." },
        ],
        faqHeading: "Najczęstsze pytania",
        faq: [
          {
            q: "Czy muszę zmieniać formularz zapisu na stronie?",
            a: "Nie. Formularz zostaje, dochodzi jedno wywołanie, które przekazuje zgłoszenie do panelu. Działa z WordPressem (Contact Form 7, WPForms, Elementor) i z własnymi formularzami.",
          },
          {
            q: "Czy rodzic musi zakładać konto?",
            a: "Nie. Rodzic dostaje wiadomość z jednorazowym, podpisanym linkiem i odpowiada jednym kliknięciem. Link działa 14 dni i nie da się go użyć dwa razy.",
          },
          {
            q: "Czy system zastąpi e-dziennik albo system płatności?",
            a: "Nie i nie ma takiego celu. Panel obsługuje to, czego systemy szkolne zwykle nie robią: czas przed zapisem, decyzję po lekcji próbnej i odrabianie zajęć.",
          },
          {
            q: "Ile kosztuje system zapisów na zajęcia?",
            a: "Prototyp na przykładowych danych jest bezpłatny. Wdrożenie zaczyna się od 2 500 zł netto, do tego stała, niewielka opłata za utrzymanie. Nowe funkcje wyceniam osobno, przed rozpoczęciem pracy.",
          },
          {
            q: "Czy działa na telefonie?",
            a: "Tak. Panel działa w przeglądarce na komputerze i telefonie, a na życzenie instaluje się jak aplikacja, z ikoną na ekranie i powiadomieniami.",
          },
        ],
        relatedHeading: "Powiązane",
        related: [
          { label: "Automatyzacje AI dla firm", href: "/uslugi/automatyzacja-i-ai" },
          { label: "Systemy rezerwacji online", href: "/uslugi/systemy-rezerwacji-online" },
          { label: "Programista Kraków", href: "/programista-krakow" },
        ],
        ctaHeading: "Zobacz to na swoich grupach",
        ctaText: "Napisz, jakie masz grupy i jak dziś wygląda zapis. Przygotuję działającą wersję pokazową w Twoich kolorach, bez dostępu do Twoich systemów.",
        ctaButton: "Poproś o prototyp",
      },
      en: {
        metaTitle: "Class Enrollment System for Schools & Academies | ML DevWorks",
        metaDescription:
          "Class enrollment system: form sign-ups, trial lessons, automatic decision follow-ups and make-up classes for cancelled lessons. Free prototype, from PLN 2,500 net.",
        keywords: [
          "class enrollment system",
          "enrollment system for language schools",
          "trial lesson follow-up automation",
          "make-up class scheduling",
          "software for dance schools",
          "software for football academies",
          "enrollment automation for kids classes",
        ],
        breadcrumb: "Class enrollment system",
        eyebrow: "For language schools, dance schools, sports academies",
        h1: "Class enrollment system for schools and academies:",
        h1Highlight: "from trial lesson to sign-up",
        lead: "Form sign-ups, trial lessons, decision follow-ups after class and make-up lessons for cancelled classes run on their own. The office only calls where it really matters.",
        priceLine: "A working prototype in your colours and with your groups for free. Implementation from PLN 2,500 net, first version in about a week.",
        ctaPrimary: "Request a prototype",
        ctaAssistant: "Ask the AI assistant",
        painsHeading: "Where schools lose sign-ups",
        pains: [
          "After a trial lesson nobody asks for a decision in time. Parents postpone the answer and then sign up somewhere else.",
          "A cancelled class means a dozen phone calls and hunting for free seats in other groups at the same level.",
          "Sign-ups sit in an inbox, and knowing who is at which stage lives in one person's head.",
        ],
        flowHeading: "How it works, step by step",
        flowIntro: "The form on your website stays as it is. The system takes over everything that happens next.",
        flow: [
          { title: "The sign-up lands in the panel", text: "Each form submission becomes a card with a suggested group based on age, level and free seats." },
          { title: "You book the trial lesson", text: "Two clicks. The panel only shows matching groups, and the parent gets a reminder the day before." },
          { title: "The system asks for a decision", text: "After class, messages go out after 2 hours, 2 days and 5 days. Parents answer with one click, no account needed." },
          { title: "The answer stops the reminders", text: "Sign-up, question or cancellation with a reason lands on the card. In the morning you see only who to call." },
          { title: "Cancelled classes without phone calls", text: "Each student gets two make-up slots in another group at the same level. The parent's click books the seat instantly." },
        ],
        featuresHeading: "What's in the panel",
        features: [
          { title: "Enrollment board", text: "All sign-ups from first contact to decision, with search and filters." },
          { title: "Today", text: "One list: who to call, what to complete, what needs attention." },
          { title: "Free seats per group", text: "Occupancy of every group and how many people are waiting for a seat." },
          { title: "Statistics", text: "Sign-ups, trial lessons and enrollments month by month, plus reasons for dropping out." },
          { title: "Activity history", text: "Every message sent and every automated action, with a retry button." },
          { title: "Your logo and colours", text: "The panel and parent pages look like part of your school. Works on desktop and mobile." },
        ],
        audienceHeading: "Who it's for",
        audience: ["Language schools", "Dance schools", "Football and sports academies", "Robotics and coding schools", "Music schools", "Kids' courses and classes"],
        integrationsHeading: "It doesn't replace what already works",
        integrations:
          "Your gradebook, payments and contracts stay in the system you use. The panel covers the time before sign-up and runs alongside the timetable; enrolled students move over with one click or a CSV file. Messages go by email, and by SMS on request.",
        example: {
          label: "Example",
          title: "Enrollment panel for a language school in Krakow",
          text: "The school already had an automated form and gradebook, but the gap was after the trial lesson and around cancelled classes. See how I designed a panel that closes it.",
          linkLabel: "Read the case study",
          linkHref: "/en/blog/enrollment-panel-for-a-language-school-case-study",
        },
        pricingHeading: "What it costs",
        pricing: [
          { title: "Prototype", value: "free", text: "A working version on sample data, in your colours, to test with no commitment." },
          { title: "Implementation", value: "from PLN 2,500 net", text: "Form connection, your groups and teachers, messages from your domain, short training." },
          { title: "Maintenance", value: "fixed monthly fee", text: "Hosting, backups, fixes and small changes. New features are quoted separately before work starts." },
        ],
        faqHeading: "FAQ",
        faq: [
          {
            q: "Do I need to change the sign-up form on my website?",
            a: "No. The form stays, one call is added to pass the sign-up to the panel. It works with WordPress (Contact Form 7, WPForms, Elementor) and custom forms.",
          },
          {
            q: "Do parents need an account?",
            a: "No. Parents get a message with a one-time signed link and answer with one click. The link is valid for 14 days and cannot be used twice.",
          },
          {
            q: "Does it replace the gradebook or payment system?",
            a: "No, and that's not the goal. The panel covers what school systems usually don't: the time before sign-up, the decision after a trial lesson and make-up classes.",
          },
          {
            q: "How much does a class enrollment system cost?",
            a: "The prototype on sample data is free. Implementation starts from PLN 2,500 net, plus a small fixed maintenance fee. New features are quoted separately before work starts.",
          },
          {
            q: "Does it work on mobile?",
            a: "Yes. The panel works in the browser on desktop and mobile, and on request installs like an app, with a home-screen icon and notifications.",
          },
        ],
        relatedHeading: "Related",
        related: [
          { label: "AI automation for companies", href: "/en/services/automation-and-ai" },
          { label: "Online booking systems", href: "/en/services/online-booking-systems" },
          { label: "Software developer Krakow", href: "/en/software-developer-krakow" },
        ],
        ctaHeading: "See it with your own groups",
        ctaText: "Tell me about your groups and how sign-ups work today. I'll prepare a working demo in your colours, without access to your systems.",
        ctaButton: "Request a prototype",
      },
    },
  },
  {
    id: "deadline-reminders",
    href: { pl: "/uslugi/system-przypomnien-o-terminach", en: "/en/services/deadline-reminder-system" },
    lastModified: "2026-09-27",
    content: {
      pl: {
        metaTitle: "System przypomnień o terminach szkoleń BHP | ML DevWorks",
        metaDescription:
          "Program pilnuje terminów szkoleń BHP, przeglądów i serwisu u klientów, sam przypomina i pozwala wybrać datę jednym kliknięciem. Bezpłatny prototyp.",
        keywords: [
          "przypomnienia o terminach szkoleń bhp",
          "program do ewidencji szkoleń bhp",
          "terminy szkoleń okresowych bhp",
          "system przypomnień o przeglądach",
          "przypomnienia o serwisie dla klientów",
          "program dla firmy szkoleniowej bhp",
          "automatyczne przypomnienia sms email dla klientów",
          "przypomnienia o przeglądach okresowych",
        ],
        breadcrumb: "System przypomnień o terminach",
        eyebrow: "Dla firm szkoleniowych BHP, serwisów i przeglądów",
        h1: "System przypomnień o terminach szkoleń, przeglądów i serwisu:",
        h1Highlight: "klient wraca na czas",
        lead: "Program pilnuje dat ważności szkoleń BHP, przeglądów i serwisów u Twoich klientów, sam im przypomina i pozwala wybrać termin jednym kliknięciem. Ty widzisz tylko, do kogo zadzwonić.",
        priceLine: "Działający prototyp na przykładowych danych bezpłatnie. Wdrożenie od 2 500 zł netto, pierwsza wersja w 1–2 tygodnie.",
        ctaPrimary: "Poproś o prototyp",
        ctaAssistant: "Zapytaj asystenta AI",
        painsHeading: "Gdzie uciekają zlecenia",
        pains: [
          "Terminy ważności szkoleń i przeglądów są w Excelu albo w głowie. Łatwo przegapić klienta, któremu właśnie mija termin.",
          "Klient przypomina sobie o szkoleniu okresowym w ostatniej chwili albo dzwoni do firmy, która odezwała się pierwsza.",
          "Umawianie terminu to seria maili i telefonów, a po szkoleniu ręczne zaświadczenia i faktury.",
        ],
        flowHeading: "Jak to działa, krok po kroku",
        flowIntro: "Raz wgrywasz klientów i ustawiasz okresy ważności. Resztę liczy i pilnuje system.",
        flow: [
          { title: "Wgrywasz listę klientów", text: "Firmy, pracownicy, stanowiska i daty ostatnich szkoleń lub przeglądów, z Excela albo wpisane ręcznie." },
          {
            title: "System liczy kolejne terminy",
            text: "Okresy ważności ustawiasz raz dla rodzaju szkolenia lub urządzenia. Daty kolejnych terminów wyliczają się same.",
          },
          {
            title: "Przypomnienia wychodzą same",
            text: "60 i 30 dni przed terminem klient dostaje wiadomość z linkiem do wyboru daty. Bez logowania, jednym kliknięciem.",
          },
          { title: "Masz listę na dziś", text: "Kto ma termin w tym miesiącu, kto nie odpowiedział i do kogo warto zadzwonić, na jednym ekranie." },
          {
            title: "Po szkoleniu wpisujesz datę",
            text: "Zaświadczenie w PDF i faktura mogą powstać od razu, a kolejny termin liczy się od nowa.",
          },
        ],
        featuresHeading: "Co jest w systemie",
        features: [
          { title: "Kartoteka klientów", text: "Firmy, pracownicy, stanowiska i urządzenia z historią szkoleń i przeglądów." },
          { title: "Kalendarz terminów", text: "Co wygasa w tym i w przyszłym miesiącu, z podziałem na klientów." },
          { title: "Wybór terminu przez klienta", text: "Klient sam wybiera datę szkolenia lub wizyty z listy wolnych terminów." },
          { title: "Zaświadczenia PDF", text: "Gotowe zaświadczenie po szkoleniu, wysłane klientowi i zapisane w kartotece." },
          { title: "Faktury i KSeF", text: "Faktura przez Twój program do faktur, z wysyłką do KSeF, bez przepisywania danych." },
          { title: "Na telefonie", text: "Działa w przeglądarce, a na życzenie jak aplikacja, z ikoną na ekranie i powiadomieniami." },
        ],
        audienceHeading: "Dla kogo",
        audience: [
          "Firmy szkoleniowe BHP i PPOŻ",
          "Służba BHP w abonamencie",
          "Serwisy klimatyzacji i kotłów",
          "Przeglądy gaśnic i instalacji",
          "Serwis maszyn i urządzeń",
          "Przeglądy okresowe i kontrole",
        ],
        integrationsHeading: "Łączy się z tym, czego już używasz",
        integrations:
          "Program do faktur (np. Fakturownia, wFirma, inFakt) z wysyłką do KSeF, kalendarz Google lub Outlook, platforma e-learningowa i arkusze Excel. Dane wprowadzasz raz, a nie w trzech miejscach.",
        example: {
          label: "Przykładowy scenariusz",
          title: "Firma BHP z 40 klientami w abonamencie",
          text: "Każdego ranka właściciel widzi, że w tym miesiącu wygasają szkolenia u 6 klientów. Czterech wybrało już termin z linku, dwóch nie odpowiedziało, więc to do nich dzwoni. Po szkoleniu wpisuje datę, a zaświadczenia i faktura wychodzą same.",
        },
        pricingHeading: "Ile to kosztuje",
        pricing: [
          { title: "Prototyp", value: "bezpłatnie", text: "Działająca wersja na przykładowych danych, do przetestowania bez zobowiązań i bez dostępu do Twoich plików." },
          { title: "Wdrożenie", value: "od 2 500 zł netto", text: "Import klientów, okresy ważności, wzory wiadomości i zaświadczeń, integracja z programem do faktur." },
          { title: "Utrzymanie", value: "stała opłata miesięczna", text: "Hosting, kopie zapasowe, poprawki i drobne zmiany. Nowe funkcje wyceniane osobno, przed rozpoczęciem pracy." },
        ],
        faqHeading: "Najczęstsze pytania",
        faq: [
          {
            q: "Jak system liczy terminy szkoleń okresowych BHP?",
            a: "Okres ważności ustawiasz dla rodzaju szkolenia albo stanowiska, zgodnie z przepisami, na przykład co rok, co 3, 5 lub 6 lat. Od daty ostatniego szkolenia system wylicza kolejny termin i pilnuje go sam.",
          },
          {
            q: "Czy klient musi zakładać konto?",
            a: "Nie. Klient dostaje wiadomość z jednorazowym linkiem i wybiera termin jednym kliknięciem.",
          },
          {
            q: "Czy da się wystawiać faktury do KSeF?",
            a: "Tak, przez integrację z programem do faktur, którego używasz. Po szkoleniu faktura powstaje automatycznie i trafia do KSeF bez przepisywania danych.",
          },
          {
            q: "Czy mogę wgrać klientów z Excela?",
            a: "Tak. Import z arkusza to pierwszy krok wdrożenia, więc nie trzeba niczego przepisywać ręcznie.",
          },
          {
            q: "Ile kosztuje system przypomnień o terminach?",
            a: "Prototyp jest bezpłatny. Wdrożenie zaczyna się od 2 500 zł netto, do tego stała, niewielka opłata za utrzymanie. Integracje z dodatkowymi systemami wyceniam po krótkiej rozmowie.",
          },
        ],
        relatedHeading: "Powiązane",
        related: [
          { label: "Automatyzacje AI dla firm", href: "/uslugi/automatyzacja-i-ai" },
          { label: "Integracja systemów w firmie", href: "/blog/integracja-systemow-w-firmie-api-crm-erp-jak-zaczac" },
          { label: "Koszt automatyzacji i ROI", href: "/blog/ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi" },
        ],
        ctaHeading: "Sprawdź na przykładowych danych",
        ctaText: "Napisz, jakie terminy pilnujesz dziś i w czym. Przygotuję działającą wersję pokazową, bez dostępu do Twoich plików.",
        ctaButton: "Poproś o prototyp",
      },
      en: {
        metaTitle: "Training & Inspection Deadline Reminders | ML DevWorks",
        metaDescription:
          "Software that tracks training, inspection and service deadlines for your clients, sends reminders and lets clients pick a date with one click. Free prototype.",
        keywords: [
          "training deadline reminder system",
          "inspection reminder software",
          "service reminder for customers",
          "health and safety training tracking",
          "automatic customer reminders",
        ],
        breadcrumb: "Deadline reminder system",
        eyebrow: "For safety training providers, service and inspection companies",
        h1: "Deadline reminder system for training, inspections and service:",
        h1Highlight: "clients come back on time",
        lead: "The system tracks expiry dates of safety training, inspections and services for your clients, reminds them automatically and lets them pick a date with one click. You only see who to call.",
        priceLine: "A working prototype on sample data for free. Implementation from PLN 2,500 net, first version in 1–2 weeks.",
        ctaPrimary: "Request a prototype",
        ctaAssistant: "Ask the AI assistant",
        painsHeading: "Where orders slip away",
        pains: [
          "Training and inspection expiry dates live in a spreadsheet or in someone's head. It's easy to miss a client whose date is due.",
          "Clients remember their periodic training at the last minute, or call whichever company reached out first.",
          "Booking a date means a chain of emails and calls, followed by manual certificates and invoices.",
        ],
        flowHeading: "How it works, step by step",
        flowIntro: "You upload clients and set validity periods once. The system calculates and tracks the rest.",
        flow: [
          { title: "Upload your client list", text: "Companies, employees, roles and dates of the last training or inspection, from Excel or entered manually." },
          { title: "The system calculates due dates", text: "Set validity periods once per training type or device. Next due dates are calculated automatically." },
          { title: "Reminders go out on their own", text: "60 and 30 days before the deadline the client gets a message with a date-picker link. No login, one click." },
          { title: "Your list for today", text: "Who's due this month, who hasn't replied and who to call, on one screen." },
          { title: "Enter the date after the training", text: "A PDF certificate and invoice can be created instantly, and the next due date starts counting again." },
        ],
        featuresHeading: "What's in the system",
        features: [
          { title: "Client records", text: "Companies, employees, roles and devices with training and inspection history." },
          { title: "Deadline calendar", text: "What expires this month and next, broken down by client." },
          { title: "Client picks the date", text: "Clients choose a training or visit date from the list of free slots." },
          { title: "PDF certificates", text: "A ready certificate after training, sent to the client and stored in the records." },
          { title: "Invoices", text: "Invoices through your invoicing software, including Poland's KSeF e-invoicing, with no retyping." },
          { title: "On mobile", text: "Works in the browser and, on request, like an app with a home-screen icon and notifications." },
        ],
        audienceHeading: "Who it's for",
        audience: [
          "Health & safety training providers",
          "Outsourced safety services",
          "HVAC and boiler service",
          "Fire extinguisher and installation inspections",
          "Machine and equipment service",
          "Periodic inspections and checks",
        ],
        integrationsHeading: "Connects to what you already use",
        integrations:
          "Invoicing software (e.g. Fakturownia, wFirma, inFakt) with KSeF e-invoicing, Google or Outlook calendar, an e-learning platform and Excel sheets. Enter data once, not in three places.",
        example: {
          label: "Example scenario",
          title: "A safety training company with 40 clients on subscription",
          text: "Every morning the owner sees that training expires for 6 clients this month. Four have already picked a date from the link, two haven't replied, so those are the calls to make. After the training they enter the date, and certificates and the invoice go out automatically.",
        },
        pricingHeading: "What it costs",
        pricing: [
          { title: "Prototype", value: "free", text: "A working version on sample data to test with no commitment and no access to your files." },
          { title: "Implementation", value: "from PLN 2,500 net", text: "Client import, validity periods, message and certificate templates, invoicing integration." },
          { title: "Maintenance", value: "fixed monthly fee", text: "Hosting, backups, fixes and small changes. New features are quoted separately before work starts." },
        ],
        faqHeading: "FAQ",
        faq: [
          {
            q: "How does the system calculate periodic training deadlines?",
            a: "You set the validity period per training type or role, according to regulations, for example every year or every 3, 5 or 6 years. From the last training date the system calculates the next deadline and tracks it.",
          },
          { q: "Does the client need an account?", a: "No. The client gets a message with a one-time link and picks a date with one click." },
          {
            q: "Can invoices go to KSeF?",
            a: "Yes, through an integration with the invoicing software you use. After the training the invoice is created automatically and sent to KSeF without retyping data.",
          },
          { q: "Can I import clients from Excel?", a: "Yes. Importing a spreadsheet is the first step of implementation, so nothing has to be retyped." },
          {
            q: "How much does a deadline reminder system cost?",
            a: "The prototype is free. Implementation starts from PLN 2,500 net, plus a small fixed maintenance fee. Integrations with additional systems are quoted after a short call.",
          },
        ],
        relatedHeading: "Related",
        related: [
          { label: "AI automation for companies", href: "/en/services/automation-and-ai" },
          { label: "Business system integration", href: "/en/blog/business-system-integration-api-crm-erp-how-to-start" },
          { label: "Automation cost and ROI", href: "/en/blog/how-much-does-business-process-automation-cost-and-how-to-calculate-roi" },
        ],
        ctaHeading: "Try it on sample data",
        ctaText: "Tell me which deadlines you track today and where. I'll prepare a working demo without access to your files.",
        ctaButton: "Request a prototype",
      },
    },
  },
];

export function getSolution(id: SolutionId): Solution {
  const solution = solutions.find((item) => item.id === id);
  if (!solution) throw new Error(`Unknown solution: ${id}`);
  return solution;
}
