import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumbs, { type BreadcrumbItem } from "@/components/Breadcrumbs";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";
import { ArrowRightIcon, SparkIcon } from "@/components/ui/icons";

export interface HeroFact {
  label: string;
  value: string;
}

interface PageHeroProps {
  lang?: "pl" | "en";
  breadcrumbs?: BreadcrumbItem[];
  /** Zachowane dla zgodności wywołań; nie jest wyświetlane. */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Główny przycisk; domyślnie formularz kontaktowy. */
  primaryCta?: { label: string; href: string } | null;
  /** Drugi przycisk otwiera asystenta AI (domyślnie włączony). */
  showAssistant?: boolean;
  facts?: HeroFact[];
  /** Prawa kolumna (np. ilustracja albo karta z ofertą). */
  aside?: ReactNode;
  children?: ReactNode;
}

/** Nagłówek podstrony: ten sam układ, tło i przyciski na wszystkich stronach usług i treści. */
export default function PageHero({
  lang = "pl",
  breadcrumbs,
  title,
  lead,
  primaryCta,
  showAssistant = true,
  facts,
  aside,
  children,
}: PageHeroProps) {
  const isPl = lang === "pl";
  const cta = primaryCta === undefined ? { label: isPl ? "Opisz projekt" : "Describe your project", href: isPl ? "/kontakt" : "/en/contact" } : primaryCta;

  return (
    <header className="relative overflow-hidden pt-28 md:pt-36">

      <div className="container-site relative pb-14 md:pb-20">
        {breadcrumbs && <Breadcrumbs className="mb-8" items={breadcrumbs} />}

        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : ""}>
          <div className="max-w-3xl">
            <h1 className="font-display text-[2.35rem] font-semibold leading-[1.06] tracking-tight text-ink text-balance sm:text-5xl lg:text-[3.6rem]">
              {title}
            </h1>
            {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty md:text-xl">{lead}</p>}

            {(cta || showAssistant) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {cta && (
                  <Link href={cta.href} className="btn-primary">
                    {cta.label}
                    <ArrowRightIcon size={18} />
                  </Link>
                )}
                {showAssistant && (
                  <OpenAssistantButton fallbackHref={isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor"} className="btn-secondary">
                    <SparkIcon size={18} className="text-primary" />
                    {isPl ? "Zapytaj AI, co zautomatyzować" : "Ask AI what to automate"}
                  </OpenAssistantButton>
                )}
              </div>
            )}

            {facts && facts.length > 0 && (
              <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-ink/[0.08] bg-ink/[0.06] sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-background/90 px-5 py-4">
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-muted">{fact.label}</dt>
                    <dd className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            {children}
          </div>

          {aside && <div className="relative">{aside}</div>}
        </div>
      </div>
    </header>
  );
}
