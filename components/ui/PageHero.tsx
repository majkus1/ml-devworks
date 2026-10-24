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
  eyebrow,
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
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-primary/[0.09] blur-[120px]" />
        <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-accent/[0.08] blur-[100px]" />
      </div>

      <div className="container-site relative pb-14 md:pb-20">
        {breadcrumbs && <Breadcrumbs className="mb-8" items={breadcrumbs} />}

        <div className={aside ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]" : ""}>
          <div className="max-w-3xl">
            {eyebrow && (
              <p className="eyebrow mb-6">
                <span className="eyebrow-dot" aria-hidden="true" />
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-[2.35rem] font-semibold leading-[1.06] tracking-tight text-white text-balance sm:text-5xl lg:text-[3.6rem]">
              {title}
            </h1>
            {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 text-pretty md:text-xl">{lead}</p>}

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
              <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] sm:grid-cols-3">
                {facts.map((fact) => (
                  <div key={fact.label} className="bg-background/90 px-5 py-4">
                    <dt className="text-xs font-medium uppercase tracking-[0.12em] text-gray-500">{fact.label}</dt>
                    <dd className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-white">{fact.value}</dd>
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
