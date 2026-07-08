import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function IntegracjaSystemowContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Integracja systemów w firmie zaczyna się wtedy, gdy dane krążą między CRM, ERP, stroną, formularzami, płatnościami i arkuszami, ale zespół nadal przepisuje je ręcznie. Dobra integracja nie tylko oszczędza czas, ale zmniejsza liczbę błędów i poprawia raportowanie."
          : "Business system integration becomes important when data flows between CRM, ERP, website, forms, payments, and spreadsheets, but the team still re-enters it manually. Good integration saves time, reduces errors, and improves reporting."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Od czego zacząć integrację API, CRM i ERP?" : "Where to start with API, CRM, and ERP integration?"}
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>{isPl ? "Wypisz źródła danych i systemy, które mają ze sobą rozmawiać." : "List data sources and systems that need to talk to each other."}</li>
          <li>{isPl ? "Zaznacz ręczne kroki, opóźnienia i miejsca najczęstszych błędów." : "Mark manual steps, delays, and the most common error points."}</li>
          <li>{isPl ? "Ustal właściciela danych i reguły aktualizacji." : "Define data ownership and update rules."}</li>
          <li>{isPl ? "Wybierz pierwszy proces z największym wpływem na czas lub sprzedaż." : "Choose the first process with the biggest impact on time or sales."}</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Najczęstsze scenariusze integracji" : "Common integration scenarios"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {(isPl
            ? [
                "Formularz ze strony tworzy lead w CRM i zadanie dla handlowca.",
                "Zamówienie lub rezerwacja aktualizuje płatność, fakturę i status klienta.",
                "ERP synchronizuje stany magazynowe lub status realizacji ze sklepem.",
                "Raport tygodniowy zbiera dane z kilku narzędzi bez ręcznego eksportu.",
              ]
            : [
                "Website form creates a CRM lead and a task for sales.",
                "Order or booking updates payment, invoice, and customer status.",
                "ERP syncs inventory or fulfillment status with the store.",
                "Weekly report pulls data from several tools without manual exports.",
              ]
          ).map((item) => (
            <article key={item} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "API, gotowy connector czy dedykowany panel?" : "API, ready connector, or custom panel?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Nie każda integracja wymaga dużej aplikacji. Gotowy connector bywa wystarczający, jeśli przepływ danych jest standardowy. API daje większą kontrolę, a dedykowany panel ma sens wtedy, gdy zespół potrzebuje własnego widoku, walidacji i raportów."
            : "Not every integration requires a large application. A ready connector can be enough for standard data flows. API gives more control, and a custom panel makes sense when the team needs its own view, validation, and reports."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak uniknąć błędów przy integracji?" : "How to avoid integration mistakes?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Nie integruj chaosu - najpierw uporządkuj reguły procesu." : "Do not integrate chaos - clean up process rules first."}</li>
          <li>{isPl ? "Zadbaj o logi, retry, walidację danych i alerty." : "Add logs, retries, data validation, and alerts."}</li>
          <li>{isPl ? "Nie zakładaj, że API zawsze zwraca kompletne dane." : "Do not assume APIs always return complete data."}</li>
          <li>{isPl ? "Dokumentuj pola, statusy i momenty synchronizacji." : "Document fields, statuses, and sync moments."}</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Potrzebujesz integracji systemów w firmie?" : "Need business system integration?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Projektuję integracje API, panele klienta, automatyzacje danych i aplikacje wewnętrzne, które łączą narzędzia firmy w jeden spójny proces."
            : "I design API integrations, client portals, data automations, and internal apps that connect company tools into one coherent process."}
        </p>
        <Link
          href={isPl ? "/uslugi/aplikacje-internetowe-i-mobilne" : "/en/services/web-and-mobile-applications"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
        >
          {isPl ? "Zobacz aplikacje i integracje" : "View apps and integrations"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
