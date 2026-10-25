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
        label: "Przykładowy przepływ",
        title: "Zapytanie ofertowe",
        inbox: "Nowy e-mail od klienta",
        message: "„Dzień dobry, proszę o wycenę 40 szt. z montażem do końca miesiąca…”",
        agent: "Agent AI",
        agentText: "rozpoznaje temat, wyciąga dane i liczy wstępną wycenę z Twojego cennika",
        outputs: ["Odpowiedź do klienta z wyceną", "Lead w CRM z podsumowaniem", "Zadanie dla handlowca na jutro"],
        before: "Wcześniej",
        beforeValue: "kilka godzin",
        after: "Teraz",
        afterValue: "poniżej minuty",
      }
    : {
        label: "Example workflow",
        title: "Quote request",
        inbox: "New email from a customer",
        message: "“Hello, could you quote 40 units with installation by the end of the month…”",
        agent: "AI agent",
        agentText: "recognises the topic, extracts the data, and drafts a quote from your price list",
        outputs: ["Reply to the customer with a quote", "Lead in the CRM with a summary", "Task for sales for tomorrow"],
        before: "Before",
        beforeValue: "a few hours",
        after: "Now",
        afterValue: "under a minute",
      };

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-accent/15 blur-2xl" />

      <div className="relative rounded-3xl border border-white/10 bg-[#0b1013]/90 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur md:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.68rem] font-medium uppercase tracking-[0.12em] text-gray-400">{t.label}</span>
        </div>

        <p className="font-display text-lg font-semibold text-white">{t.title}</p>

        {/* Wejście */}
        <div className="mt-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <MailIcon size={15} className="text-gray-300" />
            {t.inbox}
            <span className="ml-auto tabular-nums text-gray-500">09:12</span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.message}</p>
        </div>

        {/* Łącznik */}
        <div className="relative mx-auto my-2 h-7 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-[200%] animate-flow bg-gradient-to-b from-transparent via-primary to-transparent" />
        </div>

        {/* Agent */}
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.12] to-accent/[0.05] p-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <SparkIcon size={16} />
            </span>
            <span className="text-sm font-semibold text-white">{t.agent}</span>
            <span className="ml-auto flex gap-1">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary" />
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary [animation-delay:0.3s]" />
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-primary [animation-delay:0.6s]" />
            </span>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-300">{t.agentText}</p>
        </div>

        <div className="relative mx-auto my-2 h-7 w-px overflow-hidden bg-white/10">
          <span className="absolute inset-x-0 top-0 h-[200%] animate-flow bg-gradient-to-b from-transparent via-primary to-transparent [animation-delay:0.8s]" />
        </div>

        {/* Efekty */}
        <ul className="space-y-2">
          {t.outputs.map((output) => (
            <li key={output} className="flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.025] px-3.5 py-2.5 text-sm text-gray-200">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[#03140b]">
                <CheckIcon size={13} strokeWidth={3} />
              </span>
              {output}
            </li>
          ))}
        </ul>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/[0.07] pt-4">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-gray-500">{t.before}</p>
            <p className="mt-1 text-sm font-semibold text-gray-400 line-through decoration-gray-600">{t.beforeValue}</p>
          </div>
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.12em] text-gray-500">{t.after}</p>
            <p className="mt-1 text-sm font-semibold text-primary">{t.afterValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
