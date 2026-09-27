import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";
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

      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="px-4 pt-10 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs
              className="mb-8"
              items={[
                { label: isEnglish ? "Home" : "Strona główna", href: homeHref },
                { label: isEnglish ? "Services" : "Usługi", href: servicesHref },
                { label: t.breadcrumb },
              ]}
            />
            <p className="inline-flex text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1 mb-6">
              {t.eyebrow}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight [text-wrap:balance]">
              {t.h1} <span className="text-primary">{t.h1Highlight}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-4 [text-wrap:pretty]">{t.lead}</p>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">{t.priceLine}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={contactHref}
                className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center"
              >
                {t.ctaPrimary}
              </Link>
              <OpenAssistantButton
                fallbackHref={`${contactHref}#ai-advisor`}
                className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center"
              >
                {t.ctaAssistant}
              </OpenAssistantButton>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="px-4 py-16" aria-labelledby="solution-pains-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="solution-pains-heading" className="text-3xl md:text-4xl font-bold mb-10 [text-wrap:balance]">
              {t.painsHeading}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {t.pains.map((pain, index) => (
                <article key={pain} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <span className="block text-sm font-semibold text-primary mb-3" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <p className="text-gray-200 leading-relaxed">{pain}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Przepływ */}
        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="solution-flow-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="solution-flow-heading" className="text-3xl md:text-4xl font-bold mb-4 [text-wrap:balance]">
              {t.flowHeading}
            </h2>
            <p className="text-lg text-gray-400 mb-10">{t.flowIntro}</p>
            <ol className="space-y-8">
              {t.flow.map((step, index) => (
                <li key={step.title} className="flex gap-4 md:gap-5">
                  <span
                    className="shrink-0 w-11 h-11 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-lg md:text-xl"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Funkcje */}
        <section className="px-4 py-16" aria-labelledby="solution-features-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="solution-features-heading" className="text-3xl md:text-4xl font-bold mb-10 [text-wrap:balance]">
              {t.featuresHeading}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {t.features.map((feature) => (
                <article
                  key={feature.title}
                  className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Dla kogo + integracje */}
        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="solution-audience-heading">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 lg:gap-12 items-start">
            <div>
              <h2 id="solution-audience-heading" className="text-3xl md:text-4xl font-bold mb-6">
                {t.audienceHeading}
              </h2>
              <ul className="flex flex-wrap gap-3">
                {t.audience.map((item) => (
                  <li key={item} className="px-4 py-2 rounded-full bg-background border border-primary/25 text-gray-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-3">{t.integrationsHeading}</h2>
              <p className="text-gray-300 leading-relaxed">{t.integrations}</p>
            </div>
          </div>
        </section>

        {/* Przykład */}
        <section className="px-4 py-16" aria-labelledby="solution-example-heading">
          <div className="max-w-4xl mx-auto bg-background-lighter border border-primary/25 rounded-xl p-6 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">{t.example.label}</p>
            <h2 id="solution-example-heading" className="text-2xl md:text-3xl font-bold mb-4 [text-wrap:balance]">
              {t.example.title}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">{t.example.text}</p>
            {t.example.linkHref && t.example.linkLabel ? (
              <Link href={t.example.linkHref} className="inline-flex mt-6 text-primary hover:text-primary-light font-semibold underline underline-offset-4">
                {t.example.linkLabel}
              </Link>
            ) : null}
          </div>
        </section>

        {/* Koszty */}
        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="solution-pricing-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="solution-pricing-heading" className="text-3xl md:text-4xl font-bold mb-10">
              {t.pricingHeading}
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {t.pricing.map((item) => (
                <article key={item.title} className="bg-background border border-primary/20 rounded-xl p-6 flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-300 mb-2">{item.title}</h3>
                  <p className="text-2xl font-bold text-primary mb-3">{item.value}</p>
                  <p className="text-gray-400 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 py-16" aria-labelledby="solution-faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="solution-faq-heading" className="text-3xl md:text-4xl font-bold mb-8">
              {t.faqHeading}
            </h2>
            <div className="space-y-3">
              {t.faq.map((item) => (
                <details key={item.q} className="group bg-background-lighter border border-primary/20 rounded-xl open:border-primary/50 transition-colors">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-5 md:p-6 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                    <span>{item.q}</span>
                    <svg
                      className="mt-1 shrink-0 text-primary transition-transform group-open:rotate-180"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <p className="px-5 pb-5 md:px-6 md:pb-6 -mt-1 text-gray-300 leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Powiązane */}
        <section className="px-4 pb-4" aria-labelledby="solution-related-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="solution-related-heading" className="text-xl font-bold mb-4 text-gray-300">
              {t.relatedHeading}
            </h2>
            <div className="flex flex-wrap gap-3">
              {t.related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 bg-background-lighter border border-primary/20 rounded-lg text-primary hover:border-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 [text-wrap:balance]">{t.ctaHeading}</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{t.ctaText}</p>
            <Link
              href={contactHref}
              className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              {t.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </>
  );
}
