import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Programista Kraków | Aplikacje i automatyzacje AI",
  description:
    "Programista z Krakowa z biznesowym podejściem: strony, aplikacje, systemy rezerwacji, integracje i automatyzacje AI dopasowane do celu firmy.",
  alternates: {
    canonical: "https://ml-devworks.com/programista-krakow",
    languages: {
      pl: "https://ml-devworks.com/programista-krakow",
      en: "https://ml-devworks.com/en/software-developer-krakow",
      "x-default": "https://ml-devworks.com/programista-krakow",
    },
  },
  openGraph: {
    title: "Programista Kraków | ML DevWorks",
    description:
      "Strony, aplikacje, automatyzacje AI, systemy rezerwacji, integracje i DevOps dla firm z Krakowa i całej Polski.",
    url: "https://ml-devworks.com/programista-krakow",
    type: "website",
    locale: "pl_PL",
  },
};

function LocalSchema() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Programista Kraków", item: "https://ml-devworks.com/programista-krakow" },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  );
}

export default function ProgramistaKrakowPage() {
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
                { label: "Programista Kraków" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programista z Krakowa, który rozumie technologię i biznes
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              Projektuję strony internetowe, aplikacje, systemy rezerwacji, integracje i automatyzacje AI dla firm. Najpierw rozumiem cel, proces i klienta, potem dobieram rozwiązanie techniczne.
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

        <section className="px-4 py-12 bg-background-lighter/40" aria-labelledby="business-approach-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="business-approach-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Biznesowe podejście do programowania
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Analiza celu", "Ustalam, co rozwiązanie ma realnie poprawić: sprzedaż, obsługę klienta, czas pracy albo jakość procesu."],
                ["Priorytety wdrożenia", "Pomagam wybrać funkcje, które mają największy sens biznesowy na start, zamiast budować wszystko naraz."],
                ["Technologia pod wynik", "Dobieram stronę, aplikację, integrację albo automatyzację AI do problemu, nie odwrotnie."],
              ].map(([title, description]) => (
                <article key={title} className="bg-background border border-primary/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="local-services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="local-services-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Co tworzę dla firm z Krakowa i okolic
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
              Pracuję z firmami, które potrzebują nie tylko wykonawcy strony, ale partnera technicznego: od analizy celu biznesowego, przez architekturę i wdrożenie, po utrzymanie, optymalizację i rozwój.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Dzięki połączeniu doświadczenia programistycznego, SEO technicznego i automatyzacji AI pomagam budować rozwiązania, które są szybkie, czytelne dla Google i realnie użyteczne dla zespołu.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
