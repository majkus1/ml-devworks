import Link from "next/link";
import type { SiteLang } from "@/lib/services";
import { getAutomationExamples } from "@/lib/automation-examples";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  ArrowRightIcon,
  BoltIcon,
  CalendarIcon,
  ChartIcon,
  ChatIcon,
  CheckIcon,
  DocIcon,
  LayersIcon,
  PinIcon,
  PlugIcon,
  ShieldIcon,
  SparkIcon,
  UserIcon,
  WalletIcon,
} from "@/components/ui/icons";

interface AutomationExamplesSectionProps {
  lang?: SiteLang;
  /** Nagłówek sekcji - domyślnie "Co można zautomatyzować w Twojej firmie?" */
  heading?: string;
  /** Poziom nagłówka (h2 na stronach usług, h2/h3 w treści wpisu). */
  headingLevel?: "h2" | "h3";
  /** Kompaktowy wariant do osadzenia w treści wpisu blogowego. */
  compact?: boolean;
  id?: string;
  /** Pokaż tylko N pierwszych procesów (np. na stronie głównej). */
  limit?: number;
  /** Link "zobacz wszystkie" pokazywany, gdy lista jest ograniczona. */
  moreHref?: string;
  /** Box "Nie wiesz, od czego zacząć?" z przyciskiem asystenta. */
  showCta?: boolean;
}

const ICONS: Record<string, (props: { size?: number }) => JSX.Element> = {
  leads: ChatIcon,
  tickets: ShieldIcon,
  orders: LayersIcon,
  documents: DocIcon,
  "data-sync": PlugIcon,
  reports: ChartIcon,
  crm: UserIcon,
  booking: CalendarIcon,
  office: BoltIcon,
  "field-service": PinIcon,
  hr: UserIcon,
  ecommerce: WalletIcon,
};

export default function AutomationExamplesSection({
  lang = "pl",
  heading,
  headingLevel = "h2",
  compact = false,
  id = "co-mozna-zautomatyzowac",
  limit,
  moreHref,
  showCta = true,
}: AutomationExamplesSectionProps) {
  const isPl = lang === "pl";
  const allExamples = getAutomationExamples(lang);
  const examples = limit ? allExamples.slice(0, limit) : allExamples;
  const showMore = Boolean(limit && moreHref && allExamples.length > examples.length);
  const condensed = Boolean(limit);
  const Heading = headingLevel;
  const title = heading ?? (isPl ? "Co można zautomatyzować w Twojej firmie?" : "What can be automated in your company?");

  const labels = {
    problem: isPl ? "Dziś" : "Today",
    effect: isPl ? "Efekt" : "Effect",
    intro: isPl
      ? "Automatyzacja zaczyna się od jednego powtarzalnego procesu, który zabiera czas zespołu. Poniżej 12 procesów, które automatyzuję najczęściej — z typowym problemem, rozwiązaniem i efektem."
      : "Automation starts with one repetitive process that consumes the team's time. Below are the 12 processes I automate most often — with the typical problem, solution, and effect.",
    shortIntro: isPl
      ? "Najczęściej zaczynamy od jednego z tych procesów. Każdy to osobna, mała automatyzacja z mierzalnym efektem."
      : "We usually start with one of these processes. Each one is a separate, small automation with a measurable effect.",
    ctaTitle: isPl ? "Nie wiesz, od czego zacząć?" : "Not sure where to start?",
    ctaText: isPl
      ? "Opisz asystentowi AI, jak wygląda praca w Twojej firmie. W kilka minut dostaniesz 2–3 kierunki automatyzacji z orientacyjnym budżetem, a rozmowę możesz jednym kliknięciem wysłać do mnie."
      : "Describe to the AI advisor how work looks in your company. Within minutes you get 2–3 automation directions with an indicative budget, and you can send the conversation to me with one click.",
    ctaButton: isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor",
    more: isPl ? `Wszystkie ${allExamples.length} procesów i ceny` : `All ${allExamples.length} processes and pricing`,
  };

  const grid = (
    <div className={`grid ${compact ? "gap-4 md:grid-cols-2" : "gap-5 md:grid-cols-2 lg:grid-cols-3"}`}>
      {examples.map((example) => {
        const Icon = ICONS[example.id] ?? SparkIcon;
        return (
          <article key={example.id} className="card-interactive flex flex-col !p-6">
            <div className="flex items-center gap-3">
              <span className="icon-tile">
                <Icon size={20} />
              </span>
              <h3 className="font-sans text-lg font-semibold leading-snug text-white">{example.title}</h3>
            </div>
            {!condensed && (
              <p className="mt-4 text-sm leading-relaxed text-gray-500">
                <span className="font-medium text-gray-400">{labels.problem}: </span>
                {example.problem}
              </p>
            )}
            <p className="mt-4 text-[0.95rem] leading-relaxed text-gray-300">{example.solution}</p>
            <p className="mt-auto flex items-start gap-2 pt-5 text-sm font-semibold leading-snug text-primary">
              <CheckIcon size={16} className="mt-0.5 shrink-0" />
              <span>
                <span className="sr-only">{labels.effect}: </span>
                {example.effect}
              </span>
            </p>
          </article>
        );
      })}
    </div>
  );

  const more = showMore && moreHref && (
    <Link href={moreHref} className="btn-link">
      {labels.more}
      <ArrowRightIcon size={16} />
    </Link>
  );

  const cta = showCta && (
    <div className={`card-accent ${compact ? "mt-6" : "mt-10"} flex flex-col gap-6 md:flex-row md:items-center`}>
      <div className="flex-1">
        <p className="font-display text-xl font-semibold text-white md:text-2xl">{labels.ctaTitle}</p>
        <p className="mt-2 leading-relaxed text-gray-300">{labels.ctaText}</p>
      </div>
      <OpenAssistantButton fallbackHref={isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor"} className="btn-primary shrink-0 !no-underline">
        <SparkIcon size={18} />
        {labels.ctaButton}
      </OpenAssistantButton>
    </div>
  );

  if (compact) {
    return (
      <section id={id} aria-labelledby={`${id}-heading`}>
        <Heading id={`${id}-heading`} className="mb-4 text-2xl font-bold text-white">
          {title}
        </Heading>
        <p className="mb-6 leading-relaxed text-gray-400">{labels.intro}</p>
        {grid}
        {cta}
      </section>
    );
  }

  return (
    <section id={id} className="section-y relative scroll-mt-24" aria-labelledby={`${id}-heading`}>
      <div className="container-site">
        <SectionHeader
          id={`${id}-heading`}
          eyebrow={isPl ? "Co automatyzuję" : "What I automate"}
          title={title}
          lead={condensed ? labels.shortIntro : labels.intro}
          action={more || undefined}
        />
        {grid}
        {cta}
      </div>
    </section>
  );
}
