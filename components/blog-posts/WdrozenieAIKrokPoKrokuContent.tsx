import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

/**
 * Wpis pod zapytania o wdrożenie AI w firmie: ile trwa, ile kosztuje, od czego zacząć.
 * Uzupełnia wpis z przykładami procesów (automatyzacje AI dla firm) — tu plan i harmonogram.
 */
export default function WdrozenieAIKrokPoKrokuContent({ lang }: Props) {
  const isPl = lang === "pl";

  const steps = isPl
    ? [
        {
          when: "Dni 1–3",
          title: "Wybierz jeden proces",
          text: "Taki, który dzieje się co tydzień, zajmuje ludziom godziny i ma jasne wejście i wyjście: zapytania od klientów, faktury z maila, raporty, przepisywanie danych między systemami.",
          output: "Opis procesu na jedną stronę i osoba odpowiedzialna po stronie firmy.",
        },
        {
          when: "Dni 2–5",
          title: "Zmierz stan „przed”",
          text: "Ile spraw miesięcznie, ile minut zajmuje jedna, ile jest błędów i opóźnień. Bez tego po wdrożeniu nie da się powiedzieć, czy AI się opłaciło.",
          output: "3–4 liczby, do których porównasz efekt.",
        },
        {
          when: "Dni 3–10",
          title: "Prototyp na prawdziwych przykładach",
          text: "Agent AI albo automatyzacja działająca na kilkudziesięciu prawdziwych (zanonimizowanych) przypadkach z Twojej firmy. Od razu widać, co AI robi dobrze, a gdzie potrzebny jest człowiek.",
          output: "Działający szkic, zakres i dokładna wycena.",
        },
        {
          when: "Tydzień 2–3",
          title: "Pilotaż z jedną osobą lub zespołem",
          text: "AI przygotowuje odpowiedzi, dane lub dokumenty, a człowiek je zatwierdza. Poprawiamy instrukcje i reguły na podstawie tego, co wychodzi w codziennej pracy.",
          output: "Lista poprawek i decyzja, co AI robi samodzielnie.",
        },
        {
          when: "Tydzień 3–4",
          title: "Wdrożenie i przekazanie zespołowi",
          text: "Połączenie z Twoimi narzędziami (CRM, poczta, program do faktur, arkusze), krótkie szkolenie, instrukcja i monitoring błędów.",
          output: "Proces działa na co dzień, a zespół wie, co robić, gdy AI nie jest pewne.",
        },
        {
          when: "Po 30 dniach",
          title: "Pomiar efektu i kolejny proces",
          text: "Porównujesz liczby „przed” i „po”. Jeśli efekt jest, bierzesz kolejny proces — zwykle szybciej, bo integracje i dane są już gotowe.",
          output: "Twarde dane do decyzji o dalszych wdrożeniach.",
        },
      ]
    : [
        {
          when: "Days 1–3",
          title: "Pick one process",
          text: "One that happens every week, takes people hours, and has a clear input and output: customer enquiries, invoices from email, reports, copying data between systems.",
          output: "A one-page process description and an owner on the company side.",
        },
        {
          when: "Days 2–5",
          title: "Measure the “before” state",
          text: "How many cases a month, how many minutes each takes, how many errors and delays. Without this you can't tell after launch whether AI paid off.",
          output: "3–4 numbers to compare the result against.",
        },
        {
          when: "Days 3–10",
          title: "Prototype on real examples",
          text: "An AI agent or automation running on dozens of real (anonymised) cases from your company. You see right away what AI does well and where a person is needed.",
          output: "A working draft, the scope, and an exact price.",
        },
        {
          when: "Weeks 2–3",
          title: "Pilot with one person or team",
          text: "AI prepares replies, data, or documents and a person approves them. We refine instructions and rules based on what comes up in daily work.",
          output: "A list of fixes and a decision on what AI does on its own.",
        },
        {
          when: "Weeks 3–4",
          title: "Rollout and handover to the team",
          text: "Connecting your tools (CRM, email, invoicing, spreadsheets), a short training session, instructions, and error monitoring.",
          output: "The process runs every day and the team knows what to do when AI isn't sure.",
        },
        {
          when: "After 30 days",
          title: "Measure the result and pick the next process",
          text: "Compare the “before” and “after” numbers. If the effect is there, take the next process — usually faster, because integrations and data are already in place.",
          output: "Hard data for deciding on further rollouts.",
        },
      ];

  const costs = isPl
    ? [
        ["Automatyzacja jednego procesu", "2 500–6 000 zł netto", "3–14 dni roboczych"],
        ["Agent AI z bazą wiedzy firmy", "od ok. 8 000 zł netto", "2–4 tygodnie"],
        ["Integracja kilku systemów", "8 000–18 000 zł netto", "3–6 tygodni"],
        ["Modele AI i narzędzia (miesięcznie)", "kilkadziesiąt–kilkaset zł", "od startu"],
      ]
    : [
        ["Automating one process", "PLN 2,500–6,000 net", "3–14 business days"],
        ["AI agent with a company knowledge base", "from about PLN 8,000 net", "2–4 weeks"],
        ["Integrating several systems", "PLN 8,000–18,000 net", "3–6 weeks"],
        ["AI models and tools (monthly)", "tens to a few hundred PLN", "from launch"],
      ];

  const examplesHref = isPl
    ? "/blog/co-mozna-zautomatyzowac-w-firmie-z-ai-przyklady-procesow"
    : "/en/blog/what-can-be-automated-in-a-company-with-ai-process-examples";
  const roiHref = isPl
    ? "/blog/ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi"
    : "/en/blog/how-much-does-business-process-automation-cost-and-how-to-calculate-roi";
  const smallCompanyHref = isPl ? "/blog/kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai" : "/en/blog/when-ai-process-automation-is-worth-it-for-business";
  const serviceHref = isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai";
  const contactHref = isPl ? "/kontakt" : "/en/contact";

  return (
    <div className="space-y-12 leading-relaxed text-gray-300">
      <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-6 md:p-7">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">{isPl ? "Krótka odpowiedź" : "Short answer"}</p>
        <p className="text-lg text-gray-100">
          {isPl
            ? "Wdrożenie AI w małej lub średniej firmie najlepiej zacząć od jednego procesu i przejść 6 kroków: wybór procesu, pomiar stanu „przed”, prototyp na prawdziwych przykładach, pilotaż z człowiekiem zatwierdzającym wynik, wdrożenie i pomiar efektu. Pierwszy proces zajmuje zwykle 2–4 tygodnie i kosztuje od 2 500 zł netto, a agent AI z bazą wiedzy firmy od ok. 8 000 zł netto. Do tego modele AI — najczęściej kilkadziesiąt do kilkuset złotych miesięcznie."
            : "AI implementation in a small or mid-sized company works best when it starts with one process and follows 6 steps: choosing the process, measuring the “before” state, a prototype on real examples, a pilot with a person approving the output, rollout, and measuring the result. The first process usually takes 2–4 weeks and costs from PLN 2,500 net, and an AI agent with a company knowledge base from about PLN 8,000 net. Add AI model usage — usually tens to a few hundred PLN per month."}
        </p>
      </div>

      <section>
        <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Plan wdrożenia AI w 6 krokach" : "AI implementation plan in 6 steps"}</h2>
        <ol className="relative space-y-4 border-l border-white/10 pl-6 md:pl-8">
          {steps.map((step, index) => (
            <li key={step.title} className="relative">
              <span
                className="absolute -left-[2.15rem] top-1 flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-background font-display text-sm font-semibold text-primary md:-left-[2.65rem]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{step.when}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2">{step.text}</p>
                <p className="mt-3 border-t border-white/[0.06] pt-3 text-sm text-gray-400">
                  <span className="font-semibold text-gray-200">{isPl ? "Wynik: " : "Outcome: "}</span>
                  {step.output}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Ile trwa i ile kosztuje wdrożenie AI" : "How long AI implementation takes and what it costs"}</h2>
        {/* Telefon: karty zamiast tabeli przewijanej w bok. */}
        <ul className="space-y-3 sm:hidden">
          {costs.map(([scope, price, time]) => (
            <li key={scope} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
              <p className="font-semibold text-white">{scope}</p>
              <p className="mt-1.5 flex flex-wrap items-baseline justify-between gap-x-3 text-[0.95rem]">
                <span className="font-semibold text-primary">{price}</span>
                <span className="text-gray-400">{time}</span>
              </p>
            </li>
          ))}
        </ul>
        <div className="hidden overflow-x-auto rounded-2xl border border-white/[0.08] sm:block">
          <table className="w-full min-w-[580px] text-left text-[0.95rem]">
            <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.1em] text-gray-400">
              <tr>
                <th className="px-5 py-3 font-semibold">{isPl ? "Zakres" : "Scope"}</th>
                <th className="px-5 py-3 font-semibold">{isPl ? "Koszt" : "Cost"}</th>
                <th className="px-5 py-3 font-semibold">{isPl ? "Czas" : "Time"}</th>
              </tr>
            </thead>
            <tbody>
              {costs.map(([scope, price, time]) => (
                <tr key={scope} className="border-t border-white/[0.06]">
                  <td className="px-5 py-3.5 font-semibold text-white">{scope}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 font-semibold text-primary">{price}</td>
                  <td className="whitespace-nowrap px-5 py-3.5 text-gray-300">{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4">
          {isPl ? "Jak policzyć, czy to się zwróci, pokazuję na przykładzie w artykule " : "I show how to check whether it pays back, with an example, in "}
          <Link href={roiHref}>{isPl ? "ile kosztuje automatyzacja procesów i jak liczyć ROI" : "business process automation cost and ROI"}</Link>.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Od jakiego procesu zacząć" : "Which process to start with"}</h2>
        <p className="mb-4">
          {isPl
            ? "Najszybciej zwracają się procesy tekstowe i powtarzalne, w których AI czyta, porządkuje i przygotowuje szkic, a człowiek decyduje:"
            : "Text-heavy, repetitive processes pay back fastest — AI reads, sorts, and drafts, while a person decides:"}
        </p>
        <ul className="ml-2 list-inside list-disc space-y-2">
          {(isPl
            ? [
                "odpowiedzi na zapytania i kwalifikacja leadów,",
                "faktury i dokumenty z maila przepisywane do systemu,",
                "zgłoszenia klientów i serwisowe przypisywane do właściwej osoby,",
                "raporty tygodniowe zbierane z kilku narzędzi.",
              ]
            : [
                "replies to enquiries and lead qualification,",
                "invoices and documents from email copied into a system,",
                "customer and service requests routed to the right person,",
                "weekly reports gathered from several tools.",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-4">
          {isPl ? "Pełną listę z budżetami znajdziesz w artykule " : "You'll find the full list with budgets in "}
          <Link href={examplesHref}>{isPl ? "automatyzacje AI dla firm: 12 procesów, które warto zautomatyzować" : "AI automation for companies: 12 processes worth automating"}</Link>
          {isPl ? ", a odpowiedź na pytanie, czy to się opłaca przy kilkuosobowym zespole, w tekście " : ", and whether it pays off for a small team in "}
          <Link href={smallCompanyHref}>{isPl ? "czy automatyzacja AI opłaca się małej firmie" : "does AI automation pay off for a small company"}</Link>.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Bezpieczeństwo danych i RODO" : "Data security and GDPR"}</h2>
        <ul className="ml-2 list-inside list-disc space-y-2">
          {(isPl
            ? [
                "Dane klientów przetwarzane na serwerach w UE, z umową powierzenia przetwarzania danych.",
                "Modele AI używane przez API, w którym dane nie służą do trenowania modeli.",
                "AI widzi tylko te dane, których potrzebuje do zadania — bez dostępu do całej skrzynki czy bazy.",
                "Każda decyzja AI jest zapisana, a sprawy niepewne trafiają do człowieka.",
              ]
            : [
                "Customer data processed on EU servers, with a data processing agreement.",
                "AI models used via an API where data isn't used to train models.",
                "AI sees only the data it needs for the task — no access to the whole mailbox or database.",
                "Every AI decision is logged, and uncertain cases go to a person.",
              ]
          ).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "5 błędów, przez które wdrożenia AI nie działają" : "5 mistakes that make AI rollouts fail"}</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {(isPl
            ? [
                ["Zaczynanie od narzędzia", "„Kupmy ChatGPT dla wszystkich” zamiast „skróćmy czas odpowiedzi na zapytania”."],
                ["Za duży pierwszy zakres", "Pięć procesów naraz to miesiące bez efektu. Jeden proces daje wynik w kilka tygodni."],
                ["Brak pomiaru „przed”", "Bez liczb na starcie każda ocena po wdrożeniu jest odczuciem."],
                ["AI bez człowieka na starcie", "W pilotażu człowiek zatwierdza wynik. Samodzielność AI zwiększa się dopiero na podstawie danych."],
                ["Brak właściciela procesu", "Ktoś w firmie musi decydować o regułach i zgłaszać poprawki — inaczej wdrożenie stoi."],
              ]
            : [
                ["Starting with a tool", "“Let's buy ChatGPT for everyone” instead of “let's cut enquiry response time”."],
                ["Too big a first scope", "Five processes at once means months without results. One process delivers in a few weeks."],
                ["No “before” measurement", "Without starting numbers, any assessment after launch is just a feeling."],
                ["AI without a person at first", "During the pilot a person approves the output. AI autonomy grows only based on data."],
                ["No process owner", "Someone in the company must decide on rules and report fixes — otherwise the rollout stalls."],
              ]
          ).map(([title, text]) => (
            <div key={title} className="rounded-xl border border-white/[0.08] bg-white/[0.025] p-5">
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-1.5 text-[0.95rem]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{isPl ? "Co przygotować przed startem" : "What to prepare before you start"}</h2>
        <ul className="space-y-2.5">
          {(isPl
            ? [
                "Krótki opis procesu: skąd przychodzą sprawy, kto je obsługuje, gdzie trafia wynik.",
                "20–50 prawdziwych przykładów (mogą być zanonimizowane).",
                "Listę narzędzi, z których korzystacie: poczta, CRM, program do faktur, arkusze.",
                "Osobę, która przez 2–3 tygodnie pilotażu oceni wyniki AI.",
              ]
            : [
                "A short process description: where cases come from, who handles them, where the result goes.",
                "20–50 real examples (they can be anonymised).",
                "A list of the tools you use: email, CRM, invoicing, spreadsheets.",
                "A person who will review AI output during the 2–3 week pilot.",
              ]
          ).map((item) => (
            <li key={item} className="flex items-start gap-3">
              <svg className="mt-1 shrink-0 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="card-accent">
        <h2 className="mb-3 text-2xl font-semibold text-white">{isPl ? "Zacznij od prototypu" : "Start with a prototype"}</h2>
        <p className="mb-5 text-gray-300">
          {isPl
            ? "Opisz jeden proces, który zabiera Twojemu zespołowi najwięcej czasu. W 2–5 dni pokażę działający prototyp na Twoich przykładach i podam dokładną cenę wdrożenia — za darmo i bez zobowiązań."
            : "Describe the one process that takes your team the most time. Within 2–5 days I'll show a working prototype on your examples and give an exact implementation price — free and with no commitment."}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href={contactHref} className="btn-primary !text-[#03140b] !no-underline">
            {isPl ? "Opisz swój proces" : "Describe your process"}
          </Link>
          <Link href={serviceHref} className="btn-secondary !text-white !no-underline">
            {isPl ? "Automatyzacje AI dla firm — usługa" : "AI automation for companies — service"}
          </Link>
        </div>
      </section>
    </div>
  );
}
