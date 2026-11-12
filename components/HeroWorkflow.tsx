import { CheckIcon, MailIcon, SparkIcon } from "@/components/ui/icons";

interface HeroWorkflowProps {
  lang?: "pl" | "en";
}

/**
 * Ilustracja w hero: przykładowy przepływ automatyzacji (zapytanie → agent AI → efekty).
 * Zastępuje zdjęcie stockowe — od razu pokazuje klientowi, co konkretnie dostaje.
 */
export default function HeroWorkflow({ lang = "pl" }: HeroWorkflowProps) {
  const isPl = lang === "pl";
  const t = isPl
    ? {
        label: "Przykład",
        title: "Zapytanie ofertowe",
        inbox: "Nowy e-mail od klienta",
        message: "„Dzień dobry, proszę o wycenę 40 szt. z montażem do końca miesiąca…”",
        agent: "Agent AI",
        agentText: "rozpoznaje temat, wyciąga dane i liczy wstępną wycenę z Twojego cennika",
        outputs: ["Odpowiedź do klienta z wyceną", "Klient zapisany w CRM z podsumowaniem", "Zadanie dla handlowca na jutro"],
        before: "Wcześniej",
        beforeValue: "kilka godzin",
        after: "Teraz",
        afterValue: "poniżej minuty",
      }
    : {
        label: "Example",
        title: "Quote request",
        inbox: "New email from a customer",
        message: "“Hello, could you quote 40 units with installation by the end of the month…”",
        agent: "AI agent",
        agentText: "recognises the topic, extracts the data, and drafts a quote from your price list",
        outputs: ["Reply to the customer with a quote", "Customer saved in the CRM with a summary", "Task for sales for tomorrow"],
        before: "Before",
        beforeValue: "a few hours",
        after: "Now",
        afterValue: "under a minute",
      };

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="relative rounded-2xl border border-ink/10 bg-paper p-5 md:p-6">
        <p className="font-display text-lg font-semibold text-ink">
          <span className="text-muted">{t.label}: </span>
          {t.title}
        </p>

        {/* Wejście */}
        <div className="mt-4 rounded-2xl border border-ink/[0.08] bg-ink/[0.03] p-4">
          <div className="flex items-center gap-2 text-xs font-medium text-muted">
            <MailIcon size={15} className="text-ink-soft" />
            {t.inbox}
            <span className="ml-auto font-mono tabular-nums text-muted">09:12</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.message}</p>
        </div>

        {/* Łącznik */}
        <div className="relative mx-auto my-2 h-7 w-px overflow-hidden bg-ink/10">
          <span className="absolute inset-x-0 top-0 h-[200%] animate-flow bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>

        {/* Agent */}
        <div className="rounded-2xl border border-primary/30 bg-primary/[0.05] p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <SparkIcon size={16} />
            </span>
            <span className="text-sm font-semibold text-ink">{t.agent}</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.agentText}</p>
        </div>

        <div className="relative mx-auto my-2 h-7 w-px overflow-hidden bg-ink/10">
          <span className="absolute inset-x-0 top-0 h-[200%] animate-flow bg-gradient-to-b from-transparent via-primary to-transparent [animation-delay:0.8s]" />
        </div>

        {/* Efekty */}
        <ul className="divide-y divide-ink/[0.07] border-y border-ink/[0.07]">
          {t.outputs.map((output) => (
            <li key={output} className="flex items-center gap-3 py-2.5 text-sm text-ink">
              <CheckIcon size={16} strokeWidth={2.4} className="shrink-0 text-primary" />
              {output}
            </li>
          ))}
        </ul>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-muted">{t.before}</p>
            <p className="mt-0.5 font-display text-xl font-semibold text-muted line-through decoration-ink/30">{t.beforeValue}</p>
          </div>
          <div>
            <p className="text-sm text-muted">{t.after}</p>
            <p className="mt-0.5 font-display text-xl font-semibold text-primary">{t.afterValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
