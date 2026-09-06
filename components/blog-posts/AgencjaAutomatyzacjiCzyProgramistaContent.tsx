import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function AgencjaAutomatyzacjiCzyProgramistaContent({ lang }: Props) {
  const isPl = lang === "pl";
  const automationHref = isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai";
  const contactHref = isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor";

  const models = isPl
    ? [
        ["Agencja automatyzacji AI", "Zespół sprzedażowy + wykonawcy. Zwykle buduje scenariusze w Make, Zapier, n8n i podłącza gotowe modele AI. Dobra do prostych, standardowych przepływów.", ["Szybki start, gotowe szablony", "Handlowiec, project manager i wykonawca to różne osoby", "Abonament za narzędzia i często za utrzymanie", "Ograniczenia narzędzia = ograniczenia rozwiązania"]],
        ["Freelancer no-code", "Jedna osoba składająca automatyzacje w narzędziach no-code. Najtańsza opcja na start.", ["Niski koszt wejścia", "Bez kodu trudno o niestandardową logikę i bezpieczeństwo", "Ryzyko: brak dostępności, brak dokumentacji", "Uzależnienie od platformy i jej cennika"]],
        ["Programista wspierany AI", "Doświadczony programista, który buduje automatyzacje jako kod, integracje API i agentów AI, używając narzędzi AI do przyspieszenia pracy. Ten model realizuję w ML DevWorks.", ["Rozwiązanie należy do Ciebie (kod, dane, konfiguracja)", "Dowolna logika, integracje z Twoimi systemami, panel jeśli potrzebny", "Jedna osoba odpowiada za analizę, wdrożenie i utrzymanie", "Bezpłatny prototyp po dobrym opisie, potem etapy"]],
        ["Zespół wewnętrzny", "Własny programista lub dział IT. Ma sens przy ciągłym rozwoju wielu procesów.", ["Pełna kontrola i znajomość firmy", "Koszt etatu niezależnie od liczby projektów", "Trudno o kompetencje AI + integracje + UX w jednej osobie", "Często łączony z zewnętrznym wsparciem"]],
      ]
    : [
        ["AI automation agency", "A sales team + implementers. Usually builds scenarios in Make, Zapier, n8n and plugs in ready AI models. Good for simple, standard flows.", ["Fast start, ready templates", "Salesperson, project manager, and implementer are different people", "Subscription for tools and often for maintenance", "Tool limits = solution limits"]],
        ["No-code freelancer", "One person assembling automations in no-code tools. The cheapest option to start.", ["Low entry cost", "Custom logic and security are hard without code", "Risk: availability, no documentation", "Dependence on the platform and its pricing"]],
        ["AI-assisted developer", "An experienced developer who builds automations as code, API integrations, and AI agents, using AI tools to speed up work. This is the model I run at ML DevWorks.", ["The solution belongs to you (code, data, configuration)", "Any logic, integrations with your systems, a panel if needed", "One person accountable for analysis, delivery, and maintenance", "Free prototype after a clear brief, then stages"]],
        ["In-house team", "Your own developer or IT department. Makes sense with continuous development of many processes.", ["Full control and company knowledge", "Salary cost regardless of project count", "Hard to find AI + integrations + UX skills in one person", "Often combined with external support"]],
      ];

  const criteria = isPl
    ? [
        ["Własność rozwiązania", "Kto jest właścicielem kodu, kont w narzędziach, kluczy API i danych? Po zakończeniu współpracy musisz móc wszystko przenieść."],
        ["Model kosztów", "Jednorazowe wdrożenie + niski koszt użycia modeli, czy abonament rosnący z liczbą operacji? Policz koszt przy 3x większym wolumenie."],
        ["Bezpieczeństwo danych", "Jakie dane trafiają do modelu AI i do narzędzi zewnętrznych? Gdzie są logi rozmów? Czy jest umowa powierzenia (RODO)?"],
        ["Eskalacja i obsługa wyjątków", "Co się dzieje, gdy AI nie wie? Kto dostaje sprawę i z jakim kontekstem?"],
        ["Pomiar efektu", "Czy wykonawca ustali mierniki „przed” i „po” (czas reakcji, godziny, błędy)? Bez tego nie sprawdzisz ROI."],
        ["Utrzymanie", "Kto poprawia bazę wiedzy i obsługuje zmiany w API systemów? Jaki jest czas reakcji na awarię?"],
      ]
    : [
        ["Solution ownership", "Who owns the code, tool accounts, API keys, and data? After the cooperation ends you must be able to move everything."],
        ["Cost model", "One-off delivery + low model usage cost, or a subscription growing with operations? Calculate the cost at 3x the volume."],
        ["Data security", "Which data goes to the AI model and external tools? Where are conversation logs? Is there a data processing agreement (GDPR)?"],
        ["Escalation and exceptions", "What happens when the AI does not know? Who gets the case and with what context?"],
        ["Measuring the effect", "Will the vendor define 'before' and 'after' metrics (response time, hours, errors)? Without them you cannot verify ROI."],
        ["Maintenance", "Who improves the knowledge base and handles API changes in your systems? What is the response time for an outage?"],
      ];

  const questions = isPl
    ? ["Jaki proces zautomatyzujemy jako pierwszy i dlaczego ten?", "Jakie mierniki ustalimy przed startem?", "Czy dostanę działający prototyp przed decyzją o pełnym wdrożeniu?", "Kto będzie pisał kod / składał automatyzację - ta sama osoba, z którą rozmawiam?", "Do kogo należą kod, konta i dane po zakończeniu projektu?", "Jakie dane trafią do modelu AI i jak są chronione?", "Co się stanie, gdy agent AI nie będzie znał odpowiedzi?", "Ile będzie kosztować utrzymanie i użycie modeli przy obecnym wolumenie i przy 3x większym?", "Jak wygląda przekazanie dokumentacji, gdybym chciał zmienić wykonawcę?", "Jakie podobne wdrożenia zrobiliście i jakie były efekty w liczbach?"]
    : ["Which process will we automate first and why this one?", "Which metrics will we define before the start?", "Will I get a working prototype before deciding on full delivery?", "Who will write the code / build the automation - the same person I am talking to?", "Who owns the code, accounts, and data after the project ends?", "Which data goes to the AI model and how is it protected?", "What happens when the AI agent does not know the answer?", "How much will maintenance and model usage cost at the current volume and at 3x?", "How is documentation handed over if I want to change vendors?", "Which similar projects have you delivered and what were the results in numbers?"];

  const redFlags = isPl
    ? ["Obietnica „zautomatyzujemy całą firmę” bez pytania o konkretny proces i liczby.", "Brak rozmowy o eskalacji do człowieka - agent ma „obsłużyć wszystko”.", "Wycena bez analizy procesu i bez mierników.", "Konta w narzędziach i klucze API zakładane na wykonawcę, nie na Twoją firmę.", "Abonament za utrzymanie bez określonego zakresu i czasu reakcji.", "Niechęć do pokazania prototypu przed podpisaniem umowy."]
    : ["A promise to 'automate the whole company' without asking about a specific process and numbers.", "No conversation about escalation to a human - the agent is supposed to 'handle everything'.", "An estimate without process analysis and without metrics.", "Tool accounts and API keys created for the vendor, not your company.", "A maintenance subscription without a defined scope and response time.", "Reluctance to show a prototype before signing a contract."];

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Szukając wykonawcy automatyzacji, trafisz na agencje automatyzacji AI, freelancerów od narzędzi no-code, programistów i oferty budowy zespołu wewnętrznego. Różnią się nie tylko ceną, ale przede wszystkim tym, do kogo należy rozwiązanie, jak rośnie koszt razem ze skalą i kto odpowiada, gdy coś przestaje działać. W tym artykule porównuję cztery modele współpracy, podaję 10 pytań, które warto zadać przed podpisaniem umowy, i listę sygnałów ostrzegawczych."
          : "When looking for an automation vendor you will find AI automation agencies, no-code freelancers, developers, and offers to build an in-house team. They differ not only in price, but above all in who owns the solution, how the cost grows with scale, and who is accountable when something stops working. In this article I compare four cooperation models, list 10 questions to ask before signing, and point out warning signs."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Cztery modele współpracy przy automatyzacji" : "Four cooperation models for automation"}
        </h2>
        <div className="space-y-4">
          {models.map(([title, description, points]) => (
            <article key={title as string} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title as string}</h3>
              <p className="mb-3">{description as string}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
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
          {isPl ? "Agencja automatyzacji czy programista: porównanie w 6 kryteriach" : "Automation agency or developer: comparison in 6 criteria"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {criteria.map(([title, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          {isPl
            ? "Narzędzia no-code nie są złe - sam używam ich tam, gdzie wystarczą. Problem zaczyna się, gdy cały proces firmy zależy od abonamentu liczonego od operacji, a każda niestandardowa reguła wymaga obejścia. Kod daje kontrolę, a narzędzia gotowe - szybkość. Dobry wykonawca łączy jedno i drugie i mówi wprost, gdzie użył czego."
            : "No-code tools are not bad - I use them myself where they suffice. The problem starts when the whole company process depends on a per-operation subscription and every custom rule needs a workaround. Code gives control; ready tools give speed. A good vendor combines both and says plainly where each was used."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile kosztują usługi automatyzacji procesów w każdym modelu" : "What process automation services cost in each model"}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {(isPl
            ? [
                ["Agencja", "od ok. 10 000-15 000 zł netto", "za pierwszy projekt + abonament narzędzi (200-1 500 zł/mies.) + często opieka miesięczna."],
                ["Freelancer no-code", "od ok. 2 000-5 000 zł netto", "za prosty scenariusz + abonament narzędzi. Tanio, dopóki proces jest standardowy."],
                ["Programista wspierany AI", "od 2 500 zł netto", "za prostą automatyzację jako kod; agenci AI i integracje od ok. 8 000 zł; koszt użycia modeli zwykle kilkadziesiąt do kilkuset zł/mies."],
              ]
            : [
                ["Agency", "from about PLN 10,000-15,000 net", "for the first project + tool subscriptions (PLN 200-1,500/month) + often a monthly retainer."],
                ["No-code freelancer", "from about PLN 2,000-5,000 net", "for a simple scenario + tool subscriptions. Cheap as long as the process is standard."],
                ["AI-assisted developer", "from PLN 2,500 net", "for a simple automation as code; AI agents and integrations from about PLN 8,000; model usage usually tens to a few hundred PLN/month."],
              ]
          ).map(([title, price, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="font-semibold text-white mb-2">{price}</p>
              <p className="text-sm">{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          {isPl ? (
            <>
              Jak liczyć zwrot niezależnie od modelu, opisuję w artykule{" "}
              <Link href="/blog/ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi">Koszt automatyzacji procesów i ROI dla firm</Link>.
            </>
          ) : (
            <>
              How to calculate payback regardless of the model is described in{" "}
              <Link href="/en/blog/how-much-does-business-process-automation-cost-and-how-to-calculate-roi">Business Process Automation Cost and ROI</Link>.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "10 pytań do wykonawcy automatyzacji" : "10 questions for an automation vendor"}
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          {questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Czerwone flagi" : "Red flags"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          {redFlags.map((flag) => (
            <li key={flag}>{flag}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wygląda współpraca ze mną" : "How working with me looks"}
        </h2>
        <ol className="space-y-3">
          {(isPl
            ? [
                ["Opis procesu", "Piszesz (albo rozmawiasz z asystentem AI na stronie), co zabiera czas, jakich narzędzi używacie i ile tego jest miesięcznie."],
                ["Bezpłatny prototyp w 2-5 dni", "Dostajesz działający szkic automatyzacji lub agenta na Twoich przykładach, zakres i orientacyjną wycenę."],
                ["Wdrożenie etapami", "Pierwszy proces w 3-14 dni roboczych. Kod, konta i dane należą do Ciebie. Mierzymy efekt „przed” i „po”."],
                ["Utrzymanie w Twoim tempie", "Poprawki bazy wiedzy, kolejne procesy i integracje - bez stałego abonamentu, jeśli go nie potrzebujesz."],
              ]
            : [
                ["Process description", "You write (or talk to the AI advisor on the website) about what takes time, which tools you use, and how much of it there is per month."],
                ["Free prototype in 2-5 days", "You get a working draft of the automation or agent on your examples, a scope, and an indicative estimate."],
                ["Delivery in stages", "The first process in 3-14 business days. Code, accounts, and data belong to you. We measure the 'before' and 'after' effect."],
                ["Maintenance at your pace", "Knowledge base fixes, further processes, and integrations - without a fixed subscription if you do not need one."],
              ]
          ).map(([title, description], index) => (
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
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Porównaj na własnym procesie" : "Compare on your own process"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Zamiast wybierać wykonawcę na podstawie oferty, sprawdź go na prototypie. Opisz jeden proces, a ja wrócę z działającym szkicem i wyceną - bez zobowiązań. Możesz też zacząć od rozmowy z asystentem AI, który wskaże, co w Twojej firmie ma największy potencjał."
            : "Instead of choosing a vendor based on a proposal, test them on a prototype. Describe one process and I will come back with a working draft and an estimate - no obligation. You can also start with the AI advisor, which points out what has the biggest potential in your company."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={automationHref} className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black !no-underline">
            {isPl ? "Automatyzacje AI dla firm" : "AI automation for companies"}
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
