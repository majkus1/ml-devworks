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
                ["Prosty workflow", "od ok. 2 500 zł netto", "np. formularz -> CRM -> e-mail -> zadanie dla handlowca."],
                ["Integracja wielu systemów", "od ok. 8 000-18 000 zł netto", "np. CRM, płatności, raporty i automatyczne statusy."],
                ["Agent AI lub panel", "wycena po analizie", "np. agent obsługi klienta, baza wiedzy, dashboard i monitoring jakości."],
              ]
            : [
                ["Simple workflow", "from about PLN 2,500 net", "for example form -> CRM -> email -> sales task."],
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

      <section id="automatyzacja-procesu-sprzedazowego">
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile kosztuje automatyzacja procesu sprzedażowego?" : "How much does sales process automation cost?"}
        </h2>
        <p className="mb-6">
          {isPl
            ? "Proces sprzedażowy to najczęstsze miejsce, gdzie automatyzacja zwraca się najszybciej: zapytania przestają czekać, follow-upy wychodzą same, a handlowiec widzi tylko to, co wymaga rozmowy. Koszt zależy od tego, ile etapów lejka obejmuje automatyzacja."
            : "The sales process is where automation usually pays back fastest: inquiries stop waiting, follow-ups go out on their own, and salespeople only see what needs a conversation. The cost depends on how many funnel stages the automation covers."}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {(isPl
            ? [
                ["Zapytanie do CRM", "ok. 2 500-4 000 zł netto", "Formularz lub mail trafia do CRM, handlowiec dostaje zadanie, klient automatyczne potwierdzenie."],
                ["Kwalifikacja i follow-upy", "ok. 6 000-12 000 zł netto", "AI ocenia i opisuje zapytanie, przypomnienia po ofercie wychodzą same, raport tygodniowy."],
                ["Pełny lejek", "od ok. 12 000 zł netto", "CRM, oferty, przypomnienia, integracja z fakturami i raport sprzedaży w jednym przepływie."],
              ]
            : [
                ["Inquiry to CRM", "about PLN 2,500-4,000 net", "Form or email lands in the CRM, the salesperson gets a task, the client an automatic confirmation."],
                ["Qualification and follow-ups", "about PLN 6,000-12,000 net", "AI scores and summarizes the inquiry, post-offer reminders go out automatically, weekly report."],
                ["Full funnel", "from about PLN 12,000 net", "CRM, offers, reminders, invoicing integration and sales reporting in one flow."],
              ]
          ).map(([title, price, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="font-semibold text-white mb-2">{price}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6">
          {isPl
            ? "Do tego koszty stałe: licencja CRM (jeśli firma go jeszcze nie ma) oraz użycie modeli AI, zwykle od kilkudziesięciu do kilkuset złotych miesięcznie."
            : "Plus recurring costs: a CRM licence (if the company doesn't have one yet) and AI model usage, usually from a few dozen to a few hundred PLN per month."}
        </p>
        <div className="bg-background-lighter border border-primary/20 rounded-xl p-6 mt-6">
          <p className="text-white font-semibold mb-3">{isPl ? "Przykładowe wyliczenie:" : "Example calculation:"}</p>
          <p>
            {isPl
              ? "Handlowiec spędza godzinę dziennie na przepisywaniu zapytań i ręcznych przypomnieniach, czyli około 20 godzin miesięcznie. Przy koszcie 80 zł za godzinę to 1 600 zł miesięcznie. Automatyzacja za 6 000 zł netto zwraca się w niespełna 4 miesiące, a to bez liczenia klientów, którzy nie odeszli do konkurencji, bo dostali odpowiedź tego samego dnia."
              : "A salesperson spends an hour a day retyping inquiries and sending manual reminders, about 20 hours a month. At PLN 80 per hour that is PLN 1,600 a month. A PLN 6,000 net automation pays back in under 4 months, not counting clients who stayed because they got an answer the same day."}
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
