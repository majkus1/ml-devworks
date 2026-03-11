import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function AutomatyzacjaProcesowAIContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Automatyzacja procesów z AI opłaca się wtedy, gdy firma regularnie wykonuje powtarzalne zadania, które zabierają czas zespołu i spowalniają obsługę klienta. Dobrze zaprojektowana automatyzacja nie zastępuje ludzi - usuwa powtarzalną pracę, dzięki czemu zespół może skupić się na sprzedaży, jakości i rozwoju."
          : "AI process automation becomes profitable when your company performs repetitive tasks that consume team time and slow down customer service. Well-designed automation does not replace people - it removes repetitive work so your team can focus on sales, quality, and growth."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Kiedy automatyzacja AI naprawdę ma sens?" : "When does AI automation actually make sense?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Masz dużo powtarzalnych zapytań od klientów (mail, formularz, chat)."
              : "You receive a high volume of repetitive customer questions (email, forms, chat)."}
          </li>
          <li>
            {isPl
              ? "Zespół ręcznie przenosi dane między systemami (CRM, ERP, arkusze)."
              : "Your team manually moves data between systems (CRM, ERP, spreadsheets)."}
          </li>
          <li>
            {isPl
              ? "Długi czas odpowiedzi obniża konwersję i sprzedaż."
              : "Slow response times reduce conversion and sales."}
          </li>
          <li>
            {isPl
              ? "Masz procesy wymagające stałej klasyfikacji i priorytetyzacji zgłoszeń."
              : "You have workflows that require constant ticket classification and prioritization."}
          </li>
          <li>
            {isPl
              ? "Rosną koszty operacyjne przy tym samym wolumenie pracy."
              : "Operational costs keep growing at the same workload volume."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Przykłady procesów, które najczęściej opłaca się automatyzować" : "Processes that are usually worth automating first"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Obsługa leadów: kwalifikacja zapytań, przypisanie handlowca, follow-up."
              : "Lead handling: inquiry qualification, sales assignment, automated follow-ups."}
          </li>
          <li>
            {isPl
              ? "Obsługa klienta: odpowiedzi na FAQ, statusy zamówień, eskalacje."
              : "Customer support: FAQ responses, order updates, escalation routing."}
          </li>
          <li>
            {isPl
              ? "Back office: faktury, wnioski, obieg dokumentów, raporty cykliczne."
              : "Back office: invoices, requests, document flow, periodic reporting."}
          </li>
          <li>
            {isPl
              ? "Marketing i sprzedaż: segmentacja kontaktów, scoring leadów, automatyczne kampanie."
              : "Marketing and sales: contact segmentation, lead scoring, automated campaigns."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak policzyć, czy automatyzacja się opłaca?" : "How to estimate if automation is profitable?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Najprostszy model ROI: policz czas, który miesięcznie kosztuje Cię dany proces, a następnie porównaj go z kosztem wdrożenia i utrzymania automatyzacji."
            : "A simple ROI model: calculate the monthly labor cost of a process, then compare it with implementation and maintenance costs of automation."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Koszt pracy ręcznej (godziny x stawka)." : "Manual work cost (hours x rate)."}</li>
          <li>{isPl ? "Koszt błędów i opóźnień." : "Cost of errors and delays."}</li>
          <li>{isPl ? "Wpływ na sprzedaż i czas reakcji." : "Impact on sales and response time."}</li>
          <li>{isPl ? "Koszt wdrożenia + koszt utrzymania." : "Implementation cost + maintenance cost."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile trwa wdrożenie automatyzacji AI?" : "How long does AI automation implementation take?"}
        </h2>
        <p>
          {isPl
            ? "Pierwszy proces można zwykle uruchomić w 2-6 tygodni, jeśli dane i systemy są dobrze przygotowane. Najlepsza strategia to podejście etapowe: najpierw jeden proces o wysokim wpływie biznesowym, potem skalowanie na kolejne obszary."
            : "The first process can usually be launched in 2-6 weeks if data and systems are ready. The best strategy is phased implementation: start with one high-impact process, then scale to additional workflows."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Najczęstsze błędy firm przy automatyzacji AI" : "Most common AI automation mistakes"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Wybór narzędzia bez mapy procesu i mierników sukcesu."
              : "Choosing a tool before mapping the process and defining success metrics."}
          </li>
          <li>
            {isPl
              ? "Automatyzowanie chaosu zamiast uporządkowania procesu."
              : "Automating chaos instead of cleaning and standardizing the workflow first."}
          </li>
          <li>
            {isPl
              ? "Brak właściciela procesu po stronie firmy."
              : "No internal process owner on the company side."}
          </li>
          <li>
            {isPl
              ? "Brak monitoringu jakości i aktualizacji promptów/reguł."
              : "No quality monitoring and no updates to prompts/rules after launch."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{isPl ? "FAQ" : "FAQ"}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy mała firma też skorzysta na automatyzacji AI?" : "Can small businesses also benefit from AI automation?"}
            </h3>
            <p>
              {isPl
                ? "Tak. Często właśnie małe firmy zyskują najszybciej, bo jeden automatyczny proces potrafi odciążyć cały zespół i przyspieszyć obsługę klientów."
                : "Yes. Small businesses often benefit fastest, because one automated process can significantly reduce team workload and speed up customer response."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Od czego zacząć wdrożenie?" : "Where should we start?"}
            </h3>
            <p>
              {isPl
                ? "Od audytu procesu, który ma największy wpływ na czas i koszty. Zazwyczaj jest to obsługa leadów, support lub obieg danych między narzędziami."
                : "Start with an audit of the process with the highest impact on time and cost. Usually this is lead handling, support, or data flow between tools."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy AI zastąpi pracowników?" : "Will AI replace employees?"}
            </h3>
            <p>
              {isPl
                ? "W praktyce AI najczęściej przejmuje powtarzalne zadania, a ludzie koncentrują się na bardziej wartościowych działaniach: sprzedaży, relacjach i rozwoju usług."
                : "In practice, AI usually takes repetitive tasks, while people focus on higher-value work such as sales, relationships, and service development."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Sprawdźmy, które procesy warto zautomatyzować u Ciebie" : "Let's identify which workflows to automate first"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W ML Devworks projektujemy automatyzacje procesów i wdrożenia AI dopasowane do realnych celów biznesowych. Zaczynamy od audytu, kończymy na działającym systemie i mierzalnych efektach."
            : "At ML Devworks, we design AI and workflow automation around real business goals. We start with process audit and finish with working systems and measurable outcomes."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
          >
            {isPl ? "Zobacz ofertę automatyzacji AI" : "View AI automation services"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={isPl ? "/#contact" : "/en#contact"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isPl ? "Umów konsultację" : "Book a consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
