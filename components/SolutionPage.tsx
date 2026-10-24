import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/ui/FaqAccordion";
import CtaBand from "@/components/ui/CtaBand";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";
import type { SiteLang } from "@/lib/services";
import { getSolution, type SolutionId } from "@/lib/solutions";

const BASE_URL = "https://ml-devworks.com";

/** Metadane strony rozwiązania: tytuł, opis, canonical i wersje językowe. */
export function solutionMetadata(id: SolutionId, lang: SiteLang): Metadata {
  const solution = getSolution(id);
  const content = solution.content[lang];
  const url = `${BASE_URL}${solution.href[lang]}`;

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    keywords: content.keywords,
    alternates: {
      canonical: url,
      languages: {
        pl: `${BASE_URL}${solution.href.pl}`,
        en: `${BASE_URL}${solution.href.en}`,
        "x-default": `${BASE_URL}${solution.href.pl}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url,
      type: "website",
      locale: lang === "pl" ? "pl_PL" : "en_US",
    },
    twitter: { card: "summary_large_image", title: content.metaTitle, description: content.metaDescription },
  };
}

export default function SolutionPage({ id, lang }: { id: SolutionId; lang: SiteLang }) {
  const solution = getSolution(id);
  const t = solution.content[lang];
  const isEnglish = lang === "en";
  const url = `${BASE_URL}${solution.href[lang]}`;
  const homeHref = isEnglish ? "/en" : "/";
  const servicesHref = isEnglish ? "/en/services" : "/uslugi";
  const contactHref = isEnglish ? "/en/contact" : "/kontakt";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t.breadcrumb,
    description: t.metaDescription,
    url,
    serviceType: t.breadcrumb,
    audience: { "@type": "BusinessAudience", audienceType: t.audience.join(", ") },
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: BASE_URL,
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
    },
    areaServed: [
      { "@type": "Country", name: isEnglish ? "Poland" : "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
    offers: { "@type": "Offer", priceCurrency: "PLN", price: "2500", description: t.priceLine },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isEnglish ? "Home" : "Strona główna", item: `${BASE_URL}${isEnglish ? "/en" : ""}` },
      { "@type": "ListItem", position: 2, name: isEnglish ? "Services" : "Usługi", item: `${BASE_URL}${servicesHref}` },
      { "@type": "ListItem", position: 3, name: t.breadcrumb, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <StructuredData lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar lang={lang} />

      <main className="min-h-screen">
        <PageHero
          lang={lang}
          breadcrumbs={[
            { label: isEnglish ? "Home" : "Strona główna", href: homeHref },
            { label: isEnglish ? "Services" : "Usługi", href: servicesHref },
            { label: t.breadcrumb },
          ]}
          eyebrow={t.eyebrow}
          title={
            <>
              {t.h1} <span className="text-gradient">{t.h1Highlight}</span>
            </>
          }
          lead={t.lead}
          primaryCta={{ label: t.ctaPrimary, href: contactHref }}
        >
          <p className="mt-8 flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-gray-400">
            <CheckIcon size={18} className="mt-0.5 shrink-0 text-primary" />
            {t.priceLine}
          </p>
        </PageHero>

        {/* Problem */}
        <Section id="pains" labelledBy="solution-pains-heading">
          <SectionHeader id="solution-pains-heading" eyebrow={isEnglish ? "The problem" : "Problem"} title={t.painsHeading} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.pains.map((pain, index) => (
              <article key={pain} className="card">
                <span className="font-display text-sm font-semibold text-primary" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 leading-relaxed text-gray-200">{pain}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Przepływ */}
        <Section id="flow" tone="muted" labelledBy="solution-flow-heading">
          <SectionHeader id="solution-flow-heading" eyebrow={isEnglish ? "How it works" : "Jak to działa"} title={t.flowHeading} lead={t.flowIntro} />
          <ol className="relative grid gap-4 md:grid-cols-2">
            {t.flow.map((step, index) => (
              <li key={step.title} className="card flex gap-5">
                <span className="font-display text-2xl font-semibold text-primary/80" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-sans text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-gray-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        {/* Funkcje */}
        <Section id="features" labelledBy="solution-features-heading">
          <SectionHeader id="solution-features-heading" eyebrow={isEnglish ? "Features" : "Funkcje"} title={t.featuresHeading} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((feature) => (
              <article key={feature.title} className="card-interactive">
                <h3 className="font-sans text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 leading-relaxed text-gray-400">{feature.text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* Dla kogo + integracje */}
        <Section id="audience" tone="muted" labelledBy="solution-audience-heading">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <SectionHeader id="solution-audience-heading" eyebrow={isEnglish ? "For whom" : "Dla kogo"} title={t.audienceHeading} className="!mb-8" />
              <ul className="flex flex-wrap gap-2.5">
                {t.audience.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-accent">
              <h2 className="font-sans text-xl font-semibold text-white">{t.integrationsHeading}</h2>
              <p className="mt-3 leading-relaxed text-gray-300">{t.integrations}</p>
            </div>
          </div>
        </Section>

        {/* Przykład */}
        <Section id="example" labelledBy="solution-example-heading">
          <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-primary/[0.08] via-white/[0.02] to-accent/[0.05] p-7 md:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{t.example.label}</p>
            <h2 id="solution-example-heading" className="section-heading mt-3 max-w-3xl">
              {t.example.title}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-300">{t.example.text}</p>
            {t.example.linkHref && t.example.linkLabel ? (
              <Link href={t.example.linkHref} className="btn-link mt-6">
                {t.example.linkLabel}
                <ArrowRightIcon size={16} />
              </Link>
            ) : null}
          </div>
        </Section>

        {/* Koszty */}
        <Section id="pricing" tone="muted" labelledBy="solution-pricing-heading">
          <SectionHeader id="solution-pricing-heading" eyebrow={isEnglish ? "Pricing" : "Ceny"} title={t.pricingHeading} />
          <div className="grid gap-5 md:grid-cols-3">
            {t.pricing.map((item, index) => (
              <article
                key={item.title}
                className={`flex flex-col rounded-2xl border p-7 ${index === 0 ? "border-primary/40 bg-gradient-to-b from-primary/[0.10] to-white/[0.02]" : "border-white/[0.08] bg-white/[0.025]"}`}
              >
                <h3 className="font-sans text-base font-semibold text-gray-300">{item.title}</h3>
                <p className="mt-3 font-display text-3xl font-semibold tracking-tight text-white">{item.value}</p>
                <p className="mt-3 leading-relaxed text-gray-400">{item.text}</p>
              </article>
            ))}
          </div>
        </Section>

        {/* FAQ + powiązane */}
        <Section id="faq" labelledBy="solution-faq-heading">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionHeader id="solution-faq-heading" eyebrow="FAQ" title={t.faqHeading} className="!mb-8" />
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">{t.relatedHeading}</p>
              <ul className="space-y-2">
                {t.related.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3 text-sm text-gray-300 transition-colors hover:border-primary/35 hover:text-white"
                    >
                      {item.label}
                      <ArrowRightIcon size={15} className="text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <FaqAccordion items={t.faq} />
          </div>
        </Section>

        <CtaBand lang={lang} title={t.ctaHeading} text={t.ctaText} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
