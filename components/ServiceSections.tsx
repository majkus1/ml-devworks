import type { ReactNode } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/ui/FaqAccordion";
import PageHero from "@/components/ui/PageHero";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CtaBand from "@/components/ui/CtaBand";
import { ArrowRightIcon, CheckIcon, DocIcon } from "@/components/ui/icons";
import { serviceDetails, type ServiceDetailId } from "@/lib/service-details";
import { serviceItems } from "@/lib/services";
import { servicePages } from "@/lib/service-pages";

type Lang = "pl" | "en";

export interface FeatureItem {
  title: string;
  text: string;
  points?: string[];
  tag?: string;
  highlight?: boolean;
  href?: string;
}

/** Siatka kart z zakresem usługi albo przykładami zastosowań. */
export function FeatureGrid({
  id,
  eyebrow,
  title,
  lead,
  items,
  columns = 2,
  tone = "default",
  moreLabel = "Zobacz więcej",
}: {
  id: string;
  moreLabel?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  items: FeatureItem[];
  columns?: 2 | 3;
  tone?: "default" | "muted";
}) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeader id={`${id}-heading`} eyebrow={eyebrow} title={title} lead={lead} />
      <div className={`grid gap-5 ${columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2"}`}>
        {items.map((item) => {
          const content = (
            <>
              {item.tag && <span className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">{item.tag}</span>}
              <h3 className="font-sans text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-[0.97rem] leading-relaxed text-gray-400">{item.text}</p>
              {item.points && item.points.length > 0 && (
                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              {item.href && (
                <span className="btn-link mt-6 text-sm">
                  {moreLabel}
                  <ArrowRightIcon size={15} />
                </span>
              )}
            </>
          );
          const className = item.highlight
            ? "rounded-2xl border border-primary/35 bg-gradient-to-br from-primary/[0.10] via-white/[0.02] to-accent/[0.05] p-6 md:p-7"
            : "card";
          return item.href ? (
            <Link key={item.title} href={item.href} className={`${className} block transition hover:-translate-y-0.5 hover:border-primary/40`}>
              {content}
            </Link>
          ) : (
            <article key={item.title} className={className}>
              {content}
            </article>
          );
        })}
      </div>
    </Section>
  );
}

/** „Dziś” kontra „Po wdrożeniu” + dla kogo, budżet i czas. Treść z lib/service-details. */
export function ServiceOverview({ serviceId, lang }: { serviceId: ServiceDetailId; lang: Lang }) {
  const detail = serviceDetails[serviceId][lang];
  const isPl = lang === "pl";

  return (
    <Section id="overview" labelledBy="service-overview-heading">
      <SectionHeader
        id="service-overview-heading"
        eyebrow={isPl ? "Co obejmuje usługa" : "What the service covers"}
        title={isPl ? "Problem, rozwiązanie i to, co dostajesz" : "The problem, the solution, and what you get"}
        lead={detail.definition}
      />

      <div className="grid gap-5 md:grid-cols-2">
        <div className="card">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{isPl ? "Dziś w wielu firmach" : "Today in many companies"}</p>
          <ul className="mt-5 space-y-4">
            {detail.pains.map((pain) => (
              <li key={pain} className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-gray-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-500" aria-hidden="true" />
                {pain}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/[0.09] to-white/[0.02] p-6 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{isPl ? "Co dostajesz" : "What you get"}</p>
          <ul className="mt-5 space-y-4">
            {detail.deliverables.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-gray-100">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[#03140b]">
                  <CheckIcon size={12} strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <dl className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.06] md:grid-cols-3">
        <div className="bg-background px-6 py-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{isPl ? "Dla kogo" : "For whom"}</dt>
          <dd className="mt-2 text-[0.95rem] leading-relaxed text-gray-200">{detail.industries.join(", ")}</dd>
        </div>
        <div className="bg-background px-6 py-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{isPl ? "Budżet" : "Budget"}</dt>
          <dd className="mt-2 text-[0.95rem] leading-relaxed text-gray-200">{detail.price}</dd>
        </div>
        <div className="bg-background px-6 py-5">
          <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{isPl ? "Czas realizacji" : "Timeline"}</dt>
          <dd className="mt-2 text-[0.95rem] leading-relaxed text-gray-200">{detail.timeline}</dd>
        </div>
      </dl>

      <p className="mt-5 flex items-start gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-6 py-5 text-[0.95rem] leading-relaxed text-gray-300">
        <CheckIcon size={18} className="mt-0.5 shrink-0 text-primary" />
        <span>
          <span className="font-semibold text-white">{isPl ? "Jak pokazuję wartość: " : "How I prove value: "}</span>
          {detail.proof}
        </span>
      </p>
    </Section>
  );
}

/** FAQ usługi + powiązane artykuły. */
export function ServiceFaq({ serviceId, lang }: { serviceId: ServiceDetailId; lang: Lang }) {
  const detail = serviceDetails[serviceId][lang];
  const isPl = lang === "pl";

  return (
    <Section id="faq" labelledBy="service-faq-heading">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            id="service-faq-heading"
            eyebrow="FAQ"
            title={isPl ? "Najczęstsze pytania" : "Frequently asked questions"}
            className="!mb-8"
          />
          {detail.relatedPosts.length > 0 && (
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{isPl ? "Warto przeczytać" : "Worth reading"}</p>
              <ul className="space-y-2">
                {detail.relatedPosts.map((post) => (
                  <li key={post.href}>
                    <Link href={post.href} className="group flex items-start gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-gray-300 transition-colors hover:border-primary/35 hover:text-white">
                      <DocIcon size={17} className="mt-0.5 shrink-0 text-primary" />
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <FaqAccordion items={detail.faq} />
      </div>
    </Section>
  );
}

/** Przed / po: krótkie porównanie zmian po wdrożeniu. */
export function BeforeAfter({
  id,
  lang,
  title,
  lead,
  rows,
}: {
  id: string;
  lang: Lang;
  title: string;
  lead?: string;
  rows: [string, string, string][];
}) {
  const isPl = lang === "pl";
  return (
    <Section id={id} tone="muted" labelledBy={`${id}-heading`}>
      <SectionHeader id={`${id}-heading`} eyebrow={isPl ? "Przed i po" : "Before and after"} title={title} lead={lead} />
      <div className="grid gap-3">
        {rows.map(([area, before, after]) => (
          <article key={area} className="card grid items-start gap-3 !p-5 md:grid-cols-[1fr_1.4fr_1.4fr] md:gap-6 md:!p-6">
            <h3 className="font-sans text-lg font-semibold text-white">{area}</h3>
            <p className="text-[0.95rem] text-gray-500">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">{isPl ? "Przed" : "Before"}</span>
              {before}
            </p>
            <p className="text-[0.95rem] text-gray-200">
              <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.12em] text-primary">{isPl ? "Po wdrożeniu" : "After"}</span>
              {after}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/**
 * Pełna strona usługi w jednym, spójnym układzie:
 * hero → co obejmuje → zakres → (sekcje własne strony) → proces → FAQ → CTA.
 */
export default function ServiceLanding({ serviceId, lang, children }: { serviceId: ServiceDetailId; lang: Lang; children?: ReactNode }) {
  const page = servicePages[serviceId][lang];
  const service = serviceItems.find((item) => item.id === serviceId);
  const isPl = lang === "pl";

  return (
    <>
      <PageHero
        lang={lang}
        breadcrumbs={[
          { label: isPl ? "Strona główna" : "Home", href: isPl ? "/" : "/en" },
          { label: isPl ? "Usługi" : "Services", href: isPl ? "/uslugi" : "/en/services" },
          { label: service?.shortTitle[lang] ?? page.eyebrow },
        ]}
        eyebrow={page.eyebrow}
        title={
          <>
            {page.title}
            <span className="text-gradient">{page.highlight}</span>
          </>
        }
        lead={page.lead}
        facts={page.facts}
      />
      <ServiceOverview serviceId={serviceId} lang={lang} />
      <FeatureGrid
        id="scope"
        eyebrow={page.offer.eyebrow}
        title={page.offer.title}
        lead={page.offer.lead}
        items={page.offer.items}
        columns={page.offer.items.length % 3 === 0 ? 3 : 2}
        tone="muted"
        moreLabel={isPl ? "Zobacz więcej" : "Learn more"}
      />
      {children}
      <ProcessSteps lang={lang} tone="default" />
      <ServiceFaq serviceId={serviceId} lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
