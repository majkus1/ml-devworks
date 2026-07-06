import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Software house Kraków – aplikacje, strony, AI | ML DevWorks",
  description:
    "Software house z Krakowa. Tworzymy strony, aplikacje webowe i mobilne, automatyzacje AI, systemy rezerwacji i integracje dla firm. Umów bezpłatną wycenę.",
  alternates: {
    canonical: "https://ml-devworks.com/software-house-krakow",
    languages: {
      pl: "https://ml-devworks.com/software-house-krakow",
      en: "https://ml-devworks.com/en/software-house-krakow",
      "x-default": "https://ml-devworks.com/software-house-krakow",
    },
  },
  openGraph: {
    title: "Software house Kraków | ML DevWorks",
    description:
      "Strony, aplikacje, automatyzacje AI, systemy rezerwacji, integracje i DevOps dla firm z Krakowa i całej Polski.",
    url: "https://ml-devworks.com/software-house-krakow",
    type: "website",
    locale: "pl_PL",
  },
};

function LocalSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@id": "https://ml-devworks.com/#localbusiness",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "ML DevWorks",
    url: "https://ml-devworks.com",
    image: "https://ml-devworks.com/ogimg.png",
    logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
    telephone: "+48 516 598 792",
    email: "office@ml-devworks.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rynek Główny 34/15",
      postalCode: "31-010",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.06248,
      longitude: 19.936336,
    },
    areaServed: [
      { "@type": "City", name: "Kraków" },
      { "@type": "Country", name: "Polska" },
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tworzenie stron internetowych dla firm" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplikacje webowe i mobilne dla firm" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatyzacja procesów i AI dla firm" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Systemy rezerwacji online dla firm" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps i wdrożenia w chmurze" } },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Software house Kraków", item: "https://ml-devworks.com/software-house-krakow" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function SoftwareHouseKrakowPage() {
  return (
    <>
      <StructuredData lang="pl" />
      <LocalSchema />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs
              className="mb-8"
              items={[
                { label: "Strona główna", href: "/" },
                { label: "Software house Kraków" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software house Kraków dla firm, które chcą pozyskiwać klientów i automatyzować pracę
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              ML DevWorks projektuje i wdraża strony internetowe, aplikacje, systemy rezerwacji, integracje, automatyzacje AI i DevOps dla firm z Krakowa oraz klientów pracujących zdalnie w całej Polsce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
                Umów konsultację
              </Link>
              <Link href="/uslugi" className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center">
                Zobacz usługi
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="local-services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="local-services-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Co robimy dla firm z Krakowa i okolic
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Strony internetowe", "Szybkie strony firmowe, landing page i serwisy ofertowe przygotowane pod SEO techniczne i lead generation."],
                ["Aplikacje dla firm", "Panele administracyjne, aplikacje webowe i mobilne, MVP oraz systemy wewnętrzne dla zespołów operacyjnych."],
                ["Automatyzacja AI", "Agenci AI, workflow, integracje API, automatyczne raporty i redukcja pracy manualnej w procesach biznesowych."],
                ["Systemy rezerwacji", "Rezerwacje klientów, kalendarze dostępności, płatności online, przypomnienia i integracje z CRM."],
                ["DevOps", "CI/CD, Docker, wdrożenia w chmurze, monitoring, backup i stabilizacja aplikacji produkcyjnych."],
                ["Utrzymanie", "Przejmowanie projektów po innych wykonawcach, bugfixing, Core Web Vitals, SEO techniczne i rozwój."],
              ].map(([title, description]) => (
                <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="krakow-proof-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="krakow-proof-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Lokalnie w Krakowie, technicznie end-to-end
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Pracujemy z firmami, które potrzebują nie tylko wykonawcy strony, ale partnera technicznego: od analizy celu biznesowego, przez architekturę i wdrożenie, po utrzymanie, optymalizację i rozwój.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Dzięki połączeniu senior developmentu, SEO technicznego i automatyzacji AI pomagamy budować rozwiązania, które są szybkie, czytelne dla Google i realnie użyteczne dla zespołu.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
