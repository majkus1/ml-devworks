import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function AplikacjeMobilneNaZamowienieContent({ lang }: Props) {
  const isPl = lang === "pl";
  const mobileHref = isPl ? "/uslugi/aplikacje-mobilne-dla-firm" : "/en/services/mobile-apps-for-companies";
  const contactHref = isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor";

  const whenApp = isPl
    ? [
        ["Aplikacja mobilna ma sens, gdy…", ["ludzie pracują poza biurkiem: serwis, montaż, sprzedaż w terenie, logistyka", "potrzebujesz aparatu, GPS, skanera kodów, podpisu albo pracy offline", "klienci wracają regularnie (rezerwacje, zamówienia, status), więc ikona na ekranie ma wartość", "chcesz powiadomień push zamiast maili, których nikt nie czyta"]],
        ["Wystarczy strona lub PWA, gdy…", ["użytkownik korzysta rzadko i zawsze ma zasięg", "proces to głównie formularze i przeglądanie danych", "budżet jest ograniczony, a chcesz szybko sprawdzić, czy pomysł ma sens", "nie potrzebujesz obecności w App Store / Google Play"]],
      ]
    : [
        ["A mobile app makes sense when…", ["people work away from a desk: service, installation, field sales, logistics", "you need the camera, GPS, barcode scanner, signature, or offline mode", "customers return regularly (bookings, orders, status), so an icon on the screen has value", "you want push notifications instead of emails nobody reads"]],
        ["A website or PWA is enough when…", ["the user works rarely and always has coverage", "the process is mostly forms and browsing data", "the budget is limited and you want to quickly validate the idea", "you do not need a presence in the App Store / Google Play"]],
      ];

  const costFactors = isPl
    ? [
        ["Liczba ekranów i ról", "Aplikacja dla technika (5-8 ekranów) kosztuje mniej niż system z rolami: technik, dyspozytor, klient, administrator."],
        ["Praca offline", "Synchronizacja danych po odzyskaniu zasięgu, rozwiązywanie konfliktów, kolejkowanie zdjęć - to znacząca część pracy przy aplikacjach terenowych."],
        ["Integracje", "CRM, ERP, magazyn, kalendarz, płatności, systemy kurierskie. Każda integracja to analiza API i obsługa błędów."],
        ["Backend i panel", "Aplikacja mobilna potrzebuje serwera, bazy danych i panelu administracyjnego dla biura. To często połowa budżetu."],
        ["Bezpieczeństwo", "Logowanie, uprawnienia, szyfrowanie danych na urządzeniu, RODO - obowiązkowe przy danych klientów."],
        ["Publikacja i utrzymanie", "Konta deweloperskie (Apple 99 USD/rok, Google 25 USD jednorazowo), przegląd w sklepach, aktualizacje pod nowe wersje systemów."],
      ]
    : [
        ["Number of screens and roles", "An app for a technician (5-8 screens) costs less than a system with roles: technician, dispatcher, customer, administrator."],
        ["Offline mode", "Syncing data after regaining coverage, conflict resolution, queuing photos - a significant part of the work in field apps."],
        ["Integrations", "CRM, ERP, inventory, calendar, payments, courier systems. Each integration means API analysis and error handling."],
        ["Backend and admin panel", "A mobile app needs a server, a database, and an admin panel for the office. This is often half the budget."],
        ["Security", "Login, permissions, on-device data encryption, GDPR - mandatory with customer data."],
        ["Publishing and maintenance", "Developer accounts (Apple USD 99/year, Google USD 25 one-off), store review, updates for new OS versions."],
      ];

  const stages = isPl
    ? [
        ["Analiza i makiety (1 tydzień)", "Kto używa aplikacji, w jakich warunkach, jakie dane zbiera, z czym się łączy. Klikalny prototyp ekranów do omówienia z zespołem."],
        ["Backend i integracje (1-3 tygodnie)", "API, baza danych, uwierzytelnianie, połączenia z systemami firmy. Równolegle panel administracyjny."],
        ["Aplikacja mobilna (2-4 tygodnie)", "Ekrany, praca offline, aparat, GPS, powiadomienia. Testy na realnych urządzeniach, także starszych."],
        ["Publikacja i pilotaż (1-2 tygodnie)", "Konta deweloperskie, materiały do sklepów, przegląd Apple/Google, pilot z kilkoma użytkownikami, poprawki."],
      ]
    : [
        ["Analysis and mockups (1 week)", "Who uses the app, in what conditions, what data it collects, what it connects to. A clickable screen prototype to discuss with the team."],
        ["Backend and integrations (1-3 weeks)", "API, database, authentication, connections to company systems. The admin panel in parallel."],
        ["Mobile app (2-4 weeks)", "Screens, offline mode, camera, GPS, notifications. Tests on real devices, including older ones."],
        ["Publishing and pilot (1-2 weeks)", "Developer accounts, store assets, Apple/Google review, a pilot with a few users, fixes."],
      ];

  const brief = isPl
    ? ["Kto będzie używał aplikacji i w jakich warunkach (biuro, teren, hala, klient w domu)?", "Jakie 3-5 czynności musi wykonać w aplikacji, żeby była użyteczna od pierwszego dnia?", "Czy potrzebna jest praca bez zasięgu?", "Z jakimi systemami aplikacja ma się łączyć (CRM, ERP, arkusz, kalendarz, płatności)?", "Kto w biurze ma widzieć dane i w jakiej formie (panel, raport, powiadomienie)?", "Ile urządzeń i jakie (iOS, Android, oba, tablety)?", "Jaki jest orientacyjny budżet i termin?"]
    : ["Who will use the app and in what conditions (office, field, shop floor, customer at home)?", "Which 3-5 actions must be possible in the app for it to be useful from day one?", "Is offline mode required?", "Which systems must the app connect to (CRM, ERP, spreadsheet, calendar, payments)?", "Who in the office should see the data and in what form (panel, report, notification)?", "How many devices and which (iOS, Android, both, tablets)?", "What is the rough budget and deadline?"];

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Aplikacja mobilna dla firmy na zamówienie to dedykowana aplikacja iOS i Android zbudowana pod konkretny proces: pracę techników w terenie, zamówienia handlowców, rezerwacje klientów albo zgłoszenia serwisowe. W tym artykule wyjaśniam, kiedy aplikacja mobilna ma sens (a kiedy wystarczy strona), z czego składa się koszt, ile trwa wdrożenie, czy wybrać technologię natywną czy cross-platform, oraz co przygotować przed rozmową z wykonawcą."
          : "A custom mobile app for a company is a dedicated iOS and Android application built for a specific process: technicians' field work, sales reps' orders, customer bookings, or service requests. In this article I explain when a mobile app makes sense (and when a website is enough), what makes up the cost, how long delivery takes, whether to choose native or cross-platform, and what to prepare before talking to a vendor."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Kiedy firma potrzebuje aplikacji mobilnej, a kiedy wystarczy strona" : "When a company needs a mobile app and when a website is enough"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {whenApp.map(([title, points]) => (
            <article key={title as string} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-primary mb-3">{title as string}</h3>
              <ul className="list-disc list-inside space-y-2">
                {(points as string[]).map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Natywna, cross-platform czy PWA: co wybrać" : "Native, cross-platform, or PWA: what to choose"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Dla większości aplikacji firmowych rekomenduję cross-platform (React Native): jedna baza kodu działa na iOS i Android, co obniża koszt budowy i utrzymania o 30-40% względem dwóch aplikacji natywnych. Dostęp do aparatu, GPS, skanera, powiadomień push i pracy offline jest pełny."
            : "For most business apps I recommend cross-platform (React Native): one codebase runs on iOS and Android, cutting build and maintenance cost by 30-40% compared with two native apps. Access to the camera, GPS, scanner, push notifications, and offline mode is complete."}
        </p>
        <p className="mb-4">
          {isPl
            ? "Technologię natywną (Swift, Kotlin) wybieram, gdy aplikacja intensywnie używa sprzętu (Bluetooth do urządzeń przemysłowych, AR, przetwarzanie wideo) albo gdy jest produktem konsumenckim, w którym liczy się każdy detal wydajności."
            : "I choose native technology (Swift, Kotlin) when the app relies heavily on hardware (Bluetooth for industrial devices, AR, video processing) or when it is a consumer product where every performance detail matters."}
        </p>
        <p>
          {isPl
            ? "PWA (aplikacja webowa instalowana na ekranie telefonu) to dobry pierwszy etap, jeśli chcesz sprawdzić proces bez publikacji w sklepach. Ograniczenia: słabsze powiadomienia na iOS, ograniczona praca offline, brak dostępu do części funkcji systemu."
            : "A PWA (a web app installed on the phone's home screen) is a good first stage if you want to validate the process without app store publishing. Limitations: weaker notifications on iOS, limited offline mode, no access to some system features."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile kosztuje aplikacja mobilna dla firmy na zamówienie" : "How much a custom mobile app for a company costs"}
        </h2>
        <div className="grid gap-4 md:grid-cols-3 mb-6">
          {(isPl
            ? [
                ["MVP jednej roli", "od 12 000 zł netto", "5-8 ekranów, jedna rola (np. technik), backend, prosty panel dla biura, jedna integracja. 3-5 tygodni."],
                ["Aplikacja z panelem i rolami", "ok. 25 000-45 000 zł netto", "Kilka ról, praca offline, zdjęcia i podpisy, 2-3 integracje, panel administracyjny z raportami. 6-8 tygodni."],
                ["System z aplikacją dla klientów", "wycena po analizie", "Aplikacja dla klientów + dla zespołu + panel, płatności, powiadomienia, integracje ERP. Realizacja etapami."],
              ]
            : [
                ["Single-role MVP", "from PLN 12,000 net", "5-8 screens, one role (e.g. technician), backend, a simple office panel, one integration. 3-5 weeks."],
                ["App with panel and roles", "about PLN 25,000-45,000 net", "Several roles, offline mode, photos and signatures, 2-3 integrations, admin panel with reports. 6-8 weeks."],
                ["System with a customer app", "estimated after analysis", "Customer app + team app + panel, payments, notifications, ERP integrations. Delivered in stages."],
              ]
          ).map(([title, price, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="font-semibold text-white mb-2">{price}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-white mb-3">{isPl ? "Co wpływa na koszt" : "What drives the cost"}</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {costFactors.map(([title, description]) => (
            <div key={title} className="bg-background border border-primary/15 rounded-xl p-4">
              <p className="font-semibold text-white mb-1">{title}</p>
              <p className="text-sm">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile trwa wdrożenie: etapy" : "How long delivery takes: stages"}
        </h2>
        <ol className="space-y-4">
          {stages.map(([title, description], index) => (
            <li key={title} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-background font-bold flex items-center justify-center" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-4">
          {isPl
            ? "Łącznie: 3-8 tygodni dla pierwszej wersji w sklepach. Najwięcej czasu zabierają nie ekrany, tylko integracje i przypadki brzegowe (brak zasięgu, błędne dane, uprawnienia)."
            : "In total: 3-8 weeks for the first version in the stores. The most time goes not into screens but into integrations and edge cases (no coverage, wrong data, permissions)."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Publikacja w App Store i Google Play" : "Publishing in the App Store and Google Play"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Konta deweloperskie zakładamy na firmę (nie na wykonawcę), żeby aplikacja należała do Ciebie." : "Developer accounts are created for the company (not the vendor), so the app belongs to you."}</li>
          <li>{isPl ? "Apple wymaga polityki prywatności, opisu zbieranych danych i konta testowego dla recenzenta. Przegląd trwa zwykle 1-3 dni." : "Apple requires a privacy policy, a description of collected data, and a test account for the reviewer. Review usually takes 1-3 days."}</li>
          <li>{isPl ? "Aplikacje wewnętrzne (tylko dla pracowników) można dystrybuować bez publicznego sklepu: Apple Business Manager, Google Play prywatna dystrybucja lub link do instalacji." : "Internal apps (employees only) can be distributed without the public store: Apple Business Manager, Google Play private distribution, or an install link."}</li>
          <li>{isPl ? "Po publikacji aplikacja wymaga aktualizacji 2-4 razy w roku pod nowe wersje iOS/Android - warto ująć to w budżecie utrzymania." : "After launch the app needs updates 2-4 times a year for new iOS/Android versions - include it in the maintenance budget."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Checklista briefu: co przygotować przed rozmową z wykonawcą" : "Brief checklist: what to prepare before talking to a vendor"}
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          {brief.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p className="mt-4">
          {isPl ? (
            <>
              Nie potrzebujesz specyfikacji. Odpowiedzi na te pytania wystarczą, żebym przygotował klikalny prototyp i wycenę. Jeśli zastanawiasz się, czy AI może zbudować taką aplikację samodzielnie, przeczytaj{" "}
              <Link href="/blog/czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji">Czy AI wystarczy do stworzenia strony lub aplikacji?</Link>
            </>
          ) : (
            <>
              You do not need a specification. Answers to these questions are enough for me to prepare a clickable prototype and an estimate. If you wonder whether AI can build such an app on its own, read{" "}
              <Link href="/en/blog/is-ai-enough-to-build-a-website-or-app">Is AI Enough to Build a Website or App?</Link>
            </>
          )}
        </p>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Zastanawiasz się nad aplikacją mobilną dla swojej firmy?" : "Considering a mobile app for your company?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Opisz proces, który aplikacja ma obsłużyć. Wrócę w 2-5 dni z klikalnym prototypem ekranów i orientacyjną wyceną - bezpłatnie. Możesz też najpierw zapytać asystenta AI, czy w Twoim przypadku lepsza będzie aplikacja, PWA czy automatyzacja."
            : "Describe the process the app should handle. I come back within 2-5 days with a clickable screen prototype and an indicative estimate - free of charge. You can also first ask the AI advisor whether an app, a PWA, or an automation fits your case better."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={mobileHref} className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black !no-underline">
            {isPl ? "Aplikacje mobilne dla firm na zamówienie" : "Custom mobile apps for companies"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link href={contactHref} className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors !no-underline">
            {isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor"}
          </Link>
        </div>
      </section>
    </div>
  );
}
