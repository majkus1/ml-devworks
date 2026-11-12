import { PlusIcon } from "@/components/ui/icons";

interface FaqAccordionProps {
  items: { q: string; a: string }[];
  /** Pierwsza odpowiedź otwarta, żeby od razu było widać, że to rozwijana lista. */
  openFirst?: boolean;
}

/** Lista pytań i odpowiedzi bez JavaScriptu (details/summary), więc treść jest w HTML dla Google. */
export default function FaqAccordion({ items, openFirst = true }: FaqAccordionProps) {
  return (
    <div className="divide-y divide-ink/[0.08] overflow-hidden rounded-2xl border border-ink/[0.08] bg-ink/[0.02]">
      {items.map((item, index) => (
        <details key={item.q} className="group" open={openFirst && index === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-ink/[0.03] md:px-7 [&::-webkit-details-marker]:hidden">
            <h3 className="font-sans text-base font-semibold leading-snug text-ink md:text-lg">{item.q}</h3>
            <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink-soft transition-transform duration-200 group-open:rotate-45 group-open:border-primary/50 group-open:text-primary">
              <PlusIcon size={16} />
            </span>
          </summary>
          <p className="px-6 pb-6 text-[0.98rem] leading-relaxed text-muted md:px-7">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
