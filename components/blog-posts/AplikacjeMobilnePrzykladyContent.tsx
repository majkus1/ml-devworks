import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

type Example = {
  name: string;
  who: string;
  problem: string;
  does: string;
  price: string;
  time: string;
  effect: string;
};

/**
 * Wpis pod zapytanie „aplikacje mobilne dla firm” (intencja: przykłady zastosowań).
 * Koszt i wybór technologii są w osobnym wpisie — tu konkretne przypadki z ceną, czasem i efektem.
 */
export default function AplikacjeMobilnePrzykladyContent({ lang }: Props) {
  const isPl = lang === "pl";

  const examples: Example[] = isPl
    ? [
        {
          name: "Aplikacja dla serwisantów w terenie",
          who: "Serwis, instalatorzy, firmy utrzymaniowe",
          problem: "Zlecenia przychodzą telefonem, protokoły są na papierze, a faktura wychodzi tydzień po wizycie.",
          does: "Lista zleceń na dziś, nawigacja do klienta, zdjęcia, podpis klienta na ekranie, protokół PDF wysłany od razu i praca bez zasięgu.",
          price: "25 000–40 000 zł netto",
          time: "6–8 tygodni",
          effect: "Protokół u klienta w dniu wizyty, faktura tego samego dnia, koniec przepisywania kartek w biurze.",
        },
        {
          name: "Aplikacja dla handlowców",
          who: "Hurtownie, producenci, dystrybutorzy",
          problem: "Handlowiec spisuje zamówienie w notesie albo w Excelu, a biuro przepisuje je do systemu.",
          does: "Katalog z cenami klienta i stanami z ERP, zamówienie składane u klienta, historia zakupów i notatki z wizyty.",
          price: "20 000–35 000 zł netto",
          time: "5–8 tygodni",
          effect: "Zamówienie trafia do ERP od razu, bez błędów w kodach i ilościach.",
        },
        {
          name: "Magazyn: skanowanie kodów telefonem",
          who: "Magazyny, sklepy, produkcja",
          problem: "Przyjęcia i inwentaryzacja na kartkach albo drogie terminale, których nikt nie lubi.",
          does: "Przyjęcie i wydanie towaru skanem aparatu, inwentaryzacja, lokalizacje półek i różnice widoczne od razu w panelu.",
          price: "15 000–30 000 zł netto",
          time: "4–6 tygodni",
          effect: "Zwykłe telefony zamiast terminali i stany magazynowe, którym można ufać.",
        },
        {
          name: "Czas pracy, urlopy i grafik",
          who: "Firmy z zespołem zmianowym lub rozproszonym",
          problem: "Godziny w arkuszach, wnioski urlopowe mailem i grafik, który żyje w jednej głowie.",
          does: "Logowanie czasu pracy z telefonu, wnioski urlopowe z akceptacją, grafik z powiadomieniami i eksport do kadr.",
          price: "od 12 000 zł netto (lub gotowy system SaaS)",
          time: "3–5 tygodni",
          effect: "Kadry dostają zestawienie bez przepisywania, a przełożony akceptuje wnioski z telefonu.",
        },
        {
          name: "Kontrole, audyty i przeglądy",
          who: "BHP, jakość, zarządcy nieruchomości, flota",
          problem: "Checklisty na papierze, zdjęcia w galerii telefonu, a terminy kolejnych przeglądów w kalendarzu jednej osoby.",
          does: "Checklisty krok po kroku ze zdjęciami, raport PDF dla klienta, terminy kolejnych przeglądów i automatyczne przypomnienia.",
          price: "15 000–30 000 zł netto",
          time: "4–6 tygodni",
          effect: "Raport gotowy na miejscu, a żaden termin przeglądu nie umyka.",
        },
        {
          name: "Rezerwacje i karnety dla klientów",
          who: "Salony, studia, szkoły, gabinety",
          problem: "Zapisy przez telefon i Messengera, karnety liczone ręcznie, klienci zapominają o wizytach.",
          does: "Rezerwacja wolnego terminu, płatność online, karnet z licznikiem wejść i przypomnienia SMS lub push przed wizytą.",
          price: "15 000–35 000 zł netto",
          time: "4–8 tygodni",
          effect: "Mniej telefonów i nieobecności; często wystarczy aplikacja webowa instalowana na telefonie (PWA).",
        },
        {
          name: "Kierowcy i potwierdzenia dostaw",
          who: "Transport, dostawy, firmy z własną flotą",
          problem: "Klient dzwoni z pytaniem, gdzie jest dostawa, a potwierdzenia odbioru giną.",
          does: "Trasa na dziś, status dostawy dla klienta, zdjęcie i podpis przy odbiorze, zgłaszanie szkód.",
          price: "20 000–40 000 zł netto",
          time: "5–8 tygodni",
          effect: "Potwierdzenie dostawy w systemie od razu, mniej telefonów do biura.",
        },
        {
          name: "Aplikacja zakupowa i lojalnościowa",
          who: "Sieci lokali, sklepy z powracającymi klientami",
          problem: "Klienci kupują regularnie, ale firma nie ma z nimi bezpośredniego kontaktu.",
          does: "Zamówienia, punkty i nagrody, oferty dla stałych klientów i powiadomienia push.",
          price: "od ok. 30 000 zł netto",
          time: "8–12 tygodni",
          effect: "Ma sens dopiero przy dużej liczbie stałych klientów; mniejszym firmom lepiej zacząć od strony i newslettera.",
        },
      ]
    : [
        {
          name: "Field service technician app",
          who: "Service companies, installers, maintenance firms",
          problem: "Jobs arrive by phone, reports are on paper, and the invoice goes out a week after the visit.",
          does: "Today's job list, navigation to the customer, photos, the customer's signature on screen, a PDF report sent immediately, and offline mode.",
          price: "PLN 25,000–40,000 net",
          time: "6–8 weeks",
          effect: "The customer gets the report on the day of the visit, the invoice goes out the same day, and nobody retypes paper forms.",
        },
        {
          name: "Sales rep app",
          who: "Wholesalers, manufacturers, distributors",
          problem: "Reps write orders in a notebook or Excel and the office retypes them into the system.",
          does: "A catalogue with the customer's prices and ERP stock, orders placed on site, purchase history, and visit notes.",
          price: "PLN 20,000–35,000 net",
          time: "5–8 weeks",
          effect: "Orders reach the ERP immediately, without wrong codes or quantities.",
        },
        {
          name: "Warehouse: barcode scanning with a phone",
          who: "Warehouses, shops, production",
          problem: "Goods receipt and stocktaking on paper, or expensive terminals nobody likes.",
          does: "Receiving and issuing goods with the camera, stocktaking, shelf locations, and discrepancies visible in the panel at once.",
          price: "PLN 15,000–30,000 net",
          time: "4–6 weeks",
          effect: "Ordinary phones instead of terminals, and stock levels you can trust.",
        },
        {
          name: "Working time, leave, and schedules",
          who: "Companies with shift-based or distributed teams",
          problem: "Hours in spreadsheets, leave requests by email, and a schedule that lives in one person's head.",
          does: "Time logging from the phone, leave requests with approval, a schedule with notifications, and export for payroll.",
          price: "from PLN 12,000 net (or a ready SaaS)",
          time: "3–5 weeks",
          effect: "Payroll gets the summary without retyping, and managers approve requests from their phone.",
        },
        {
          name: "Inspections, audits, and reviews",
          who: "Health and safety, quality, property managers, fleets",
          problem: "Paper checklists, photos in the phone gallery, and the next review dates in one person's calendar.",
          does: "Step-by-step checklists with photos, a PDF report for the customer, next review dates, and automatic reminders.",
          price: "PLN 15,000–30,000 net",
          time: "4–6 weeks",
          effect: "The report is ready on site and no review deadline slips.",
        },
        {
          name: "Bookings and passes for customers",
          who: "Salons, studios, schools, clinics",
          problem: "Bookings by phone and Messenger, passes counted by hand, customers forgetting appointments.",
          does: "Booking a free slot, online payment, a pass with a visit counter, and SMS or push reminders before the visit.",
          price: "PLN 15,000–35,000 net",
          time: "4–8 weeks",
          effect: "Fewer calls and no-shows; a web app installed on the phone (PWA) is often enough.",
        },
        {
          name: "Drivers and proof of delivery",
          who: "Transport, deliveries, companies with their own fleet",
          problem: "Customers call to ask where the delivery is, and delivery confirmations get lost.",
          does: "Today's route, delivery status for the customer, a photo and signature on delivery, and damage reports.",
          price: "PLN 20,000–40,000 net",
          time: "5–8 weeks",
          effect: "Proof of delivery is in the system immediately, with fewer calls to the office.",
        },
        {
          name: "Ordering and loyalty app",
          who: "Restaurant chains, shops with returning customers",
          problem: "Customers buy regularly, but the company has no direct channel to them.",
          does: "Orders, points and rewards, offers for regular customers, and push notifications.",
          price: "from about PLN 30,000 net",
          time: "8–12 weeks",
          effect: "Only makes sense with many regular customers; smaller companies should start with a website and a newsletter.",
        },
      ];

  const labels = isPl
    ? { who: "Dla kogo", problem: "Problem", does: "Co robi aplikacja", price: "Cena", time: "Czas", effect: "Efekt" }
    : { who: "For whom", problem: "Problem", does: "What the app does", price: "Price", time: "Time", effect: "Effect" };

  const mobileCostHref = isPl
    ? "/blog/aplikacje-mobilne-dla-firm-na-zamowienie-koszt-czas-natywna-czy-cross-platform"
    : "/en/blog/custom-mobile-apps-for-companies-cost-timeline-native-vs-cross-platform";
  const serviceHref = isPl ? "/uslugi/aplikacje-mobilne-dla-firm" : "/en/services/mobile-apps-for-companies";
  const contactHref = isPl ? "/kontakt" : "/en/contact";

  return (
    <div className="space-y-12 leading-relaxed text-gray-300">
      <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-6 md:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{isPl ? "Krótka odpowiedź" : "Short answer"}</p>
        <p className="text-lg text-gray-100">
          {isPl
            ? "Aplikacje mobilne dla firm najczęściej zastępują papier, telefony i przepisywanie danych: w serwisie w terenie, u handlowców, w magazynie, przy kontrolach, w ewidencji czasu pracy, przy dostawach i w rezerwacjach dla klientów. Prosta aplikacja dla jednej roli kosztuje od 12 000 zł netto i powstaje w 3–5 tygodni; aplikacja z panelem, rolami, pracą offline i integracjami to zwykle 20 000–40 000 zł netto i 5–8 tygodni."
            : "Mobile apps for business most often replace paper, phone calls, and retyping data: in field service, sales, warehouses, inspections, time tracking, deliveries, and customer bookings. A simple single-role app costs from PLN 12,000 net and takes 3–5 weeks; an app with a panel, roles, offline mode, and integrations usually costs PLN 20,000–40,000 net and takes 5–8 weeks."}
        </p>
      </div>

      <section>
        <h2 className="mb-5 text-2xl font-semibold text-white md:text-3xl">{isPl ? "8 przykładów w skrócie" : "8 examples at a glance"}</h2>
        {/* Telefon: karty zamiast tabeli przewijanej w bok. */}
        <ul className="space-y-3 sm:hidden">
          {examples.map((example, index) => (
            <li key={example.name}>
              <a href={`#przyklad-${index + 1}`} className="block rounded-xl border border-white/[0.08] bg-white/[0.025] p-4 !no-underline">
                <span className="font-semibold text-white">
                  {index + 1}. {example.name}
                </span>
                <span className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-3 text-[0.95rem]">
                  <span className="font-semibold text-primary">{example.price}</span>
                  <span className="text-gray-400">{example.time}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden overflow-x-auto rounded-2xl border border-white/[0.08] sm:block">
          <table className="w-full min-w-[640px] text-left text-[0.95rem]">
            <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.1em] text-gray-400">
              <tr>
                <th className="px-5 py-3 font-semibold">{isPl ? "Aplikacja" : "App"}</th>
                <th className="px-5 py-3 font-semibold">{labels.price}</th>
                <th className="px-5 py-3 font-semibold">{labels.time}</th>
              </tr>
            </thead>
            <tbody>
              {examples.map((example, index) => (
                <tr key={example.name} className="border-t border-white/[0.06] align-top">
                  <td className="px-5 py-3.5">
                    <a href={`#przyklad-${index + 1}`} className="!no-underline">
                      <span className="font-semibold text-white">
                        {index + 1}. {example.name}
                      </span>
                    </a>
                    <p className="mt-0.5 text-sm text-gray-400">{example.who}</p>
                  </td>
                  <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-primary">{example.price}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-gray-300">{example.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          {isPl
            ? "Ceny orientacyjne netto dla aplikacji na iOS i Android z panelem dla biura. Dokładną kwotę podaję po bezpłatnym prototypie."
            : "Indicative net prices for iOS and Android apps with an office panel. I give the exact amount after the free prototype."}
        </p>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Przykłady: problem, rozwiązanie, efekt" : "Examples: problem, solution, effect"}</h2>
        <div className="space-y-5">
          {examples.map((example, index) => (
            <article key={example.name} id={`przyklad-${index + 1}`} className="scroll-mt-28 rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 md:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-white">
                  <span className="mr-2 text-primary">{String(index + 1).padStart(2, "0")}</span>
                  {example.name}
                </h3>
                <p className="text-sm text-gray-400">{example.who}</p>
              </div>
              <dl className="mt-4 grid gap-3 text-[0.95rem] sm:grid-cols-[9rem_1fr]">
                <dt className="font-semibold text-gray-400">{labels.problem}</dt>
                <dd>{example.problem}</dd>
                <dt className="font-semibold text-gray-400">{labels.does}</dt>
                <dd>{example.does}</dd>
                <dt className="font-semibold text-gray-400">{labels.effect}</dt>
                <dd className="text-gray-100">{example.effect}</dd>
              </dl>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-white/[0.06] pt-4 text-sm">
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-semibold text-primary">{example.price}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-gray-300">{example.time}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Jak wybrać pierwszą aplikację" : "How to choose your first app"}</h2>
        <p className="mb-4">
          {isPl
            ? "Najlepiej zwraca się aplikacja dla procesu, który dzieje się codziennie i dziś wymaga przepisywania. Zanim zaczniesz, odpowiedz na trzy pytania:"
            : "The app that pays back best covers a process that happens every day and today requires retyping. Before you start, answer three questions:"}
        </p>
        <ol className="ml-2 list-inside list-decimal space-y-2">
          {(isPl
            ? [
                "Kto będzie jej używał i gdzie — w biurze, w terenie, bez zasięgu?",
                "Co dziś trafia na papier, do Excela albo jest przekazywane telefonem?",
                "Do jakiego systemu dane mają trafić dalej: ERP, CRM, program do faktur, kadry?",
              ]
            : [
                "Who will use it and where — in the office, in the field, without coverage?",
                "What goes on paper, into Excel, or gets passed on by phone today?",
                "Which system should the data reach next: ERP, CRM, invoicing, payroll?",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="mt-4">
          {isPl
            ? "Pierwsza wersja powinna obsłużyć jedną rolę i jeden proces. Kolejne funkcje łatwiej dobrać, gdy zespół już z niej korzysta."
            : "The first version should cover one role and one process. Further features are easier to choose once the team is using it."}
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Aplikacja w sklepie czy aplikacja webowa (PWA)?" : "App store app or web app (PWA)?"}</h2>
        <p>
          {isPl
            ? "Aplikacja w App Store i Google Play daje pełną pracę offline, skaner, GPS i pewne powiadomienia. Aplikacja webowa instalowana na ekranie telefonu (PWA) jest tańsza i szybsza do wdrożenia — wystarcza przy rezerwacjach, grafikach, zgłoszeniach i panelach dla klientów. Szczegółowe porównanie technologii i kosztów opisałem w artykule "
            : "An app in the App Store and Google Play gives full offline mode, scanning, GPS, and reliable notifications. A web app installed on the phone's home screen (PWA) is cheaper and faster to deliver — it's enough for bookings, schedules, requests, and customer portals. I compare technologies and costs in detail in "}
          <Link href={mobileCostHref}>{isPl ? "aplikacje mobilne na zamówienie: koszt, czas, natywna czy cross-platform" : "custom mobile apps: cost, timeline, native vs cross-platform"}</Link>.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Koszty po wdrożeniu" : "Costs after launch"}</h2>
        <ul className="ml-2 list-inside list-disc space-y-2">
          {(isPl
            ? [
                "Serwer i baza danych: zwykle 50–300 zł miesięcznie, zależnie od liczby użytkowników.",
                "Konta deweloperskie: Apple 99 USD rocznie, Google Play 25 USD jednorazowo (PWA ich nie wymaga).",
                "Utrzymanie i aktualizacje systemów iOS i Android: stała opłata albo pakiet godzin, ustalane przed startem.",
              ]
            : [
                "Server and database: usually PLN 50–300 per month, depending on the number of users.",
                "Developer accounts: Apple USD 99 per year, Google Play USD 25 one-off (a PWA doesn't need them).",
                "Maintenance and iOS/Android updates: a fixed fee or a block of hours, agreed before the start.",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Kiedy aplikacja mobilna się nie opłaca" : "When a mobile app doesn't pay off"}</h2>
        <p>
          {isPl
            ? "Gdy proces dzieje się rzadko, korzysta z niego kilka osób przy biurku albo wystarczy dobry formularz i automatyczny e-mail. Wtedy taniej i szybciej będzie zautomatyzować sam proces albo zbudować prosty panel w przeglądarce."
            : "When the process is rare, a few people use it at a desk, or a good form with an automatic email is enough. Then it's cheaper and faster to automate the process itself or build a simple browser panel."}
        </p>
      </section>

      <section className="card-accent">
        <h2 className="mb-3 text-2xl font-semibold text-white">{isPl ? "Sprawdź, jak wyglądałaby u Ciebie" : "See what it would look like for you"}</h2>
        <p className="mb-5 text-gray-300">
          {isPl
            ? "Opisz, kto ma korzystać z aplikacji i co dziś robi ręcznie. W 2–5 dni pokażę klikalny prototyp na Twoim procesie i podam dokładną cenę — za darmo i bez zobowiązań."
            : "Describe who will use the app and what they do manually today. Within 2–5 days I'll show a clickable prototype of your process and give an exact price — free and with no commitment."}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href={contactHref} className="btn-primary !text-[#03140b] !no-underline">
            {isPl ? "Odbierz bezpłatny prototyp" : "Get a free prototype"}
          </Link>
          <Link href={serviceHref} className="btn-secondary !text-white !no-underline">
            {isPl ? "Aplikacje mobilne dla firm — usługa" : "Mobile apps for companies — service"}
          </Link>
        </div>
      </section>
    </div>
  );
}
