import Link from "next/link";
import type { SiteLang } from "@/lib/services";
import { getAutomationExamples } from "@/lib/automation-examples";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";

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
    problem: isPl ? "Problem" : "Problem",
    solution: isPl ? "Rozwiązanie" : "Solution",
    effect: isPl ? "Efekt" : "Effect",
    intro: isPl
      ? "Automatyzacje AI dla firm najczęściej zaczynają się od jednego powtarzalnego procesu, który zabiera czas zespołu. Poniżej 12 procesów, które automatyzuję najczęściej - z typowym problemem, rozwiązaniem i efektem."
      : "AI automation for companies usually starts with one repetitive process that consumes the team's time. Below are the 12 processes I automate most often - with the typical problem, solution, and effect.",
    ctaTitle: isPl ? "Nie wiesz, od czego zacząć?" : "Not sure where to start?",
    ctaText: isPl
      ? "Opisz asystentowi AI, jak wygląda praca w Twojej firmie. W kilka minut dostaniesz 2-3 kierunki automatyzacji z orientacyjnym budżetem, a rozmowę możesz jednym kliknięciem wysłać do mnie."
      : "Describe to the AI advisor how work looks in your company. Within minutes you get 2-3 automation directions with an indicative budget, and you can send the conversation to me with one click.",
    ctaButton: isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor",
    more: isPl ? `Zobacz wszystkie ${allExamples.length} procesów i ceny` : `See all ${allExamples.length} processes and pricing`,
  };

  return (
    <section id={id} className={compact ? "" : "px-4 py-24 md:py-28"} aria-labelledby={`${id}-heading`}>
      <div className={compact ? "" : "max-w-7xl mx-auto"}>
        <Heading id={`${id}-heading`} className={compact ? "text-2xl font-bold text-white mb-4" : "text-3xl md:text-4xl font-bold mb-4"}>
          {title}
        </Heading>
        <p className={`text-gray-400 leading-relaxed ${compact ? "mb-6" : "text-lg mb-12 max-w-3xl"}`}>
          {limit && isPl
            ? "Automatyzacje AI dla firm zaczynają się od jednego powtarzalnego procesu, który zabiera czas zespołu. Oto te, które automatyzuję najczęściej:"
            : limit
              ? "AI automation for companies starts with one repetitive process that consumes the team's time. These are the ones I automate most often:"
              : labels.intro}
        </p>

        <div className={`grid ${compact ? "gap-4 md:grid-cols-2" : "gap-6 md:grid-cols-2 lg:grid-cols-3"}`}>
          {examples.map((example, index) => (
            <article key={example.id} className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-5 md:p-6 hover:border-primary/50 transition-colors flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-primary/15 border border-primary/40 text-primary text-sm font-bold flex items-center justify-center" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug">{example.title}</h3>
              </div>
              {!condensed && (
                <p className="text-sm text-gray-500 leading-relaxed mb-3">
                  <span className="text-gray-600">{labels.problem}: </span>
                  {example.problem}
                </p>
              )}
              <p className="text-sm md:text-[15px] text-gray-200 leading-relaxed mb-5">{example.solution}</p>
              <p className="mt-auto flex items-start gap-2 rounded-lg bg-background/70 border border-primary/30 px-3.5 py-2.5 text-sm font-semibold text-primary leading-snug">
                <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                <span>
                  <span className="sr-only">{labels.effect}: </span>
                  {example.effect}
                </span>
              </p>
            </article>
          ))}
        </div>

        {showMore && moreHref && (
          <p className="mt-6">
            <Link href={moreHref} className="inline-flex items-center gap-2 text-primary hover:text-primary-light font-semibold">
              {labels.more}
              <span aria-hidden="true">→</span>
            </Link>
          </p>
        )}

        {showCta && (
        <div className={`bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30 rounded-xl p-6 md:p-8 ${compact ? "mt-6" : "mt-10"} flex flex-col md:flex-row md:items-center gap-6`}>
          <div className="flex-1">
            <p className="text-xl md:text-2xl font-bold text-white mb-2">{labels.ctaTitle}</p>
            <p className="text-gray-300 leading-relaxed">{labels.ctaText}</p>
          </div>
          <OpenAssistantButton
            fallbackHref={isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor"}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary !text-background !no-underline font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-[0_0_25px_rgba(0,255,136,0.25)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
            </svg>
            {labels.ctaButton}
          </OpenAssistantButton>
        </div>
        )}
      </div>
    </section>
  );
}
