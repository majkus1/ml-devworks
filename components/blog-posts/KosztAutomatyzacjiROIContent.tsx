import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function KosztAutomatyzacjiROIContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Automatyzacja procesów w firmie nie powinna zaczynać się od wyboru narzędzia. Najpierw trzeba policzyć, który proces kosztuje najwięcej czasu, generuje błędy albo blokuje sprzedaż. Dopiero wtedy koszt wdrożenia można porównać z realnym zwrotem."
          : "Business process automation should not start with choosing a tool. First, identify which workflow consumes the most time, creates errors, or blocks sales. Only then can implementation cost be compared with real return."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Od czego zależy koszt automatyzacji?" : "What affects automation cost?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Liczba systemów do połączenia: CRM, ERP, formularze, e-mail, płatności, arkusze." : "Number of systems to connect: CRM, ERP, forms, email, payments, spreadsheets."}</li>
          <li>{isPl ? "Jakość danych i jasność reguł procesu." : "Data quality and clarity of process rules."}</li>
          <li>{isPl ? "Czy potrzebny jest agent AI, czy wystarczy klasyczny workflow." : "Whether the process needs an AI agent or a classic workflow is enough."}</li>
          <li>{isPl ? "Czy firma potrzebuje panelu administracyjnego i raportów." : "Whether the company needs an admin panel and reports."}</li>
          <li>{isPl ? "Poziom bezpieczeństwa, logowania zdarzeń i monitoringu." : "Security, event logging, and monitoring requirements."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Typowe widełki kosztów" : "Typical cost ranges"}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {(isPl
            ? [
                ["Prosty workflow", "od ok. 4 000 zł netto", "np. formularz -> CRM -> e-mail -> zadanie dla handlowca."],
                ["Integracja wielu systemów", "od ok. 8 000-18 000 zł netto", "np. CRM, płatności, raporty i automatyczne statusy."],
                ["Agent AI lub panel", "wycena po analizie", "np. agent obsługi klienta, baza wiedzy, dashboard i monitoring jakości."],
              ]
            : [
                ["Simple workflow", "from about PLN 4,000 net", "for example form -> CRM -> email -> sales task."],
                ["Multi-system integration", "from about PLN 8,000-18,000 net", "for example CRM, payments, reports, and automatic statuses."],
                ["AI agent or panel", "estimated after analysis", "for example customer service agent, knowledge base, dashboard, and quality monitoring."],
              ]
          ).map(([title, price, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="font-semibold text-white mb-2">{price}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak policzyć ROI automatyzacji?" : "How to calculate automation ROI?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Najprostszy model nie wymaga skomplikowanego arkusza. Wystarczy policzyć obecny koszt procesu i porównać go z kosztem wdrożenia."
            : "The simplest model does not require a complex spreadsheet. Calculate the current process cost and compare it with implementation cost."}
        </p>
        <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
          <p className="text-white font-semibold mb-3">
            {isPl ? "Wzór praktyczny:" : "Practical formula:"}
          </p>
          <p>
            {isPl
              ? "ROI = miesięczna oszczędność czasu + mniejszy koszt błędów + dodatkowy przychód z szybszej obsługi - koszt utrzymania."
              : "ROI = monthly time saved + lower error cost + additional revenue from faster handling - maintenance cost."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Które procesy zwykle zwracają się najszybciej?" : "Which processes usually pay back fastest?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Obsługa leadów i automatyczne follow-upy." : "Lead handling and automated follow-ups."}</li>
          <li>{isPl ? "Kwalifikacja zapytań i routing do właściwej osoby." : "Inquiry qualification and routing to the right person."}</li>
          <li>{isPl ? "Raporty cykliczne i przepisywanie danych między systemami." : "Recurring reports and data entry between systems."}</li>
          <li>{isPl ? "Powiadomienia, statusy, przypomnienia i dokumenty." : "Notifications, statuses, reminders, and documents."}</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Chcesz policzyć ROI automatyzacji w swojej firmie?" : "Want to calculate automation ROI for your company?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Zaczynam od krótkiego audytu procesu, kosztu czasu i potencjału zwrotu. Dzięki temu wdrażam automatyzację tam, gdzie ma największy sens biznesowy."
            : "We start with a short audit of the process, time cost, and return potential. This helps implement automation where it makes the strongest business sense."}
        </p>
        <Link
          href={isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
        >
          {isPl ? "Zobacz usługę automatyzacji AI" : "View AI automation service"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
