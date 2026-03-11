import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function CzyAIWystarczyDoStronyContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Coraz więcej firm pyta: \"po co płacić za stronę lub aplikację, skoro AI wygeneruje to w kilka minut?\" To dobre pytanie - ale tylko na poziomie prototypu. W realnym biznesie liczy się stabilność, bezpieczeństwo, skalowalność i koszty utrzymania. Bez tego szybko pojawia się dług technologiczny, który bywa droższy niż profesjonalne wdrożenie od początku."
          : "More and more companies ask: \"why pay for a website or app if AI can generate it in minutes?\" That is a valid question - at prototype level. In real business, what matters is stability, security, scalability, and maintenance cost. Without these, technical debt appears quickly and often costs more than a professional implementation from day one."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "AI zrobi kod. Ale czy zrobi odpowiednią architekturę?" : "AI can generate code. But can it design the right architecture?"}
        </h2>
        <p>
          {isPl
            ? "Sam kod to tylko fragment produktu. Kluczowe decyzje to dobór stacku, podział modułów, strategia bazy danych, integracje, monitorowanie i plan rozwoju. Te decyzje powinny wynikać z kontekstu biznesu: skali ruchu, modelu sprzedaży, procesów operacyjnych i planów firmy na 12-24 miesiące."
            : "Code is only one part of the product. Critical decisions include stack selection, module boundaries, database strategy, integrations, monitoring, and growth path. These choices must come from business context: traffic scale, sales model, operations, and 12-24 month company plans."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Najczęstszy problem: AI nie zna Twojego kontekstu biznesowego" : "Most common issue: AI does not know your business context"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Nie zna Twoich realnych procesów sprzedaży i obsługi klienta."
              : "It does not know your real sales and customer support workflows."}
          </li>
          <li>
            {isPl
              ? "Nie rozumie ograniczeń prawnych i branżowych (np. RODO, logowanie zdarzeń)."
              : "It does not fully understand legal and domain constraints (e.g., GDPR, audit logging)."}
          </li>
          <li>
            {isPl
              ? "Nie przewidzi, jak aplikacja zachowa się pod obciążeniem produkcyjnym."
              : "It cannot reliably predict production behavior under real load."}
          </li>
          <li>
            {isPl
              ? "Bez dobrego promptu i walidacji wygeneruje kod \"działający na demo\", ale trudny do utrzymania."
              : "Without strong prompting and review, it often produces demo-working code that is hard to maintain."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Dług technologiczny: dlaczego \"taniej teraz\" bywa drożej później?" : "Technical debt: why \"cheaper now\" is often more expensive later"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W projektach budowanych wyłącznie przez AI najczęściej pojawiają się te same problemy: niespójna architektura, brak testów, słabe bezpieczeństwo i trudna rozbudowa. Każda nowa funkcja trwa dłużej, bo zespół najpierw naprawia fundamenty."
            : "Projects built only with AI often show the same problems: inconsistent architecture, weak testing, poor security, and hard extensibility. Every new feature takes longer because the team first needs to fix the foundations."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Duplikacja logiki i chaotyczna struktura kodu." : "Duplicated logic and chaotic code structure."}</li>
          <li>{isPl ? "Brak standardów i dokumentacji technicznej." : "Missing standards and technical documentation."}</li>
          <li>{isPl ? "Wysoki koszt refaktoryzacji po kilku miesiącach." : "High refactoring cost after a few months."}</li>
          <li>{isPl ? "Spadek prędkości rozwoju produktu." : "Slower product development velocity."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Bezpieczeństwo: największe ryzyko przy \"AI-only\"" : "Security: the biggest risk in \"AI-only\" builds"}
        </h2>
        <p>
          {isPl
            ? "AI potrafi wygenerować poprawny składniowo kod, ale nie gwarantuje bezpieczeństwa aplikacji. Brak odpowiedniej walidacji wejścia, błędna autoryzacja, wycieki danych czy nieprawidłowa konfiguracja środowisk to ryzyka, które mogą kosztować firmę utratę danych, klientów i reputacji."
            : "AI can generate syntactically correct code, but it does not guarantee application security. Missing input validation, weak authorization, data leaks, or incorrect environment setup can lead to data loss, customer churn, and reputation damage."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak używać AI mądrze w projekcie IT?" : "How to use AI wisely in software projects"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Najlepszy model to AI + doświadczony zespół techniczny. AI przyspiesza pracę, a architekt i senior developer pilnują jakości produktu, bezpieczeństwa oraz spójności architektury."
            : "The best model is AI + experienced technical team. AI accelerates execution, while an architect and senior developers ensure product quality, security, and architecture consistency."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "AI do przyspieszania implementacji i analiz." : "Use AI to accelerate implementation and analysis."}</li>
          <li>{isPl ? "Człowiek do decyzji architektonicznych i bezpieczeństwa." : "Use humans for architecture and security decisions."}</li>
          <li>{isPl ? "Code review, testy i monitoring jako standard." : "Make code review, testing, and monitoring mandatory."}</li>
          <li>{isPl ? "Iteracyjne wdrożenia z mierzeniem efektów biznesowych." : "Deploy iteratively and measure business impact."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{isPl ? "FAQ" : "FAQ"}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy AI może całkowicie zastąpić software house?" : "Can AI fully replace a software agency?"}
            </h3>
            <p>
              {isPl
                ? "Na etapie prostego prototypu - częściowo tak. Na etapie produktu biznesowego - nie. Potrzebne są decyzje architektoniczne, doświadczenie produkcyjne i odpowiedzialność za jakość oraz bezpieczeństwo."
                : "For a simple prototype - partially yes. For a business-grade product - no. You still need architecture decisions, production experience, and accountability for quality and security."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Kiedy warto zapłacić za profesjonalne wdrożenie?" : "When is professional implementation worth paying for?"}
            </h3>
            <p>
              {isPl
                ? "Gdy projekt ma wspierać sprzedaż, obsługę klientów lub operacje firmy przez dłuższy czas. Wtedy kluczowe są: skalowalność, bezpieczeństwo, utrzymanie i możliwość rozwoju bez przepisywania całości."
                : "When the product is meant to support sales, customer service, or operations long-term. Then scalability, security, maintainability, and extensibility become critical."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy AI w ogóle jest przydatne przy tworzeniu stron i aplikacji?" : "Is AI useful in website and app development at all?"}
            </h3>
            <p>
              {isPl
                ? "Tak - bardzo. AI skraca czas pracy i pomaga w wielu zadaniach, ale najlepsze efekty daje jako wsparcie dla doświadczonego zespołu, a nie jedyne źródło decyzji technicznych."
                : "Absolutely. AI can save a lot of time and help in many tasks, but it works best as an accelerator for an experienced team, not as the only source of technical decisions."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Chcesz zbudować produkt bez długu technologicznego?" : "Want to build without technical debt?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W ML Devworks łączymy szybkość AI z doświadczeniem architektonicznym i inżynierskim. Projektujemy rozwiązania, które działają dziś i są gotowe na wzrost jutro."
            : "At ML Devworks, we combine AI speed with architectural and engineering expertise. We design solutions that work today and scale tomorrow."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={isPl ? "/uslugi/aplikacje-internetowe-i-mobilne" : "/en/services/web-and-mobile-applications"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
          >
            {isPl ? "Zobacz ofertę aplikacji" : "View app development services"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={isPl ? "/#contact" : "/en#contact"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isPl ? "Umów konsultację techniczną" : "Book a technical consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
