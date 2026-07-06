import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { getServices } from "@/lib/services";

const services = getServices("pl");

export const metadata: Metadata = {
  title: "Usługi programistyczne dla firm | ML DevWorks",
  description:
    "Strony, aplikacje webowe i mobilne, automatyzacja AI, sklepy, systemy rezerwacji, DevOps i utrzymanie. Kompleksowe usługi programistyczne dla firm.",
  alternates: {
    canonical: "https://ml-devworks.com/uslugi",
    languages: {
      pl: "https://ml-devworks.com/uslugi",
      en: "https://ml-devworks.com/en/services",
      "x-default": "https://ml-devworks.com/uslugi",
    },
  },
  openGraph: {
    title: "Usługi programistyczne dla firm | ML DevWorks",
    description:
      "Strony, aplikacje, automatyzacja AI, e-commerce, systemy rezerwacji, DevOps i utrzymanie projektów.",
    url: "https://ml-devworks.com/uslugi",
    type: "website",
    locale: "pl_PL",
  },
};

function ServicesHubSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Usługi programistyczne ML DevWorks",
    url: "https://ml-devworks.com/uslugi",
    description:
      "Lista usług programistycznych ML DevWorks dla firm: strony, aplikacje, automatyzacja AI, e-commerce, DevOps i utrzymanie.",
    mainEntity: services.map((service) => ({
      "@type": "Service",
      name: service.title,
      description: service.description,
      url: `https://ml-devworks.com${service.href}`,
      provider: {
        "@type": "Organization",
        name: "ML DevWorks",
        url: "https://ml-devworks.com",
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://ml-devworks.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Usługi",
        item: "https://ml-devworks.com/uslugi",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function ServicesHubPage() {
  return (
    <>
      <StructuredData lang="pl" />
      <ServicesHubSchema />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-primary">Strona główna</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Usługi</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Usługi programistyczne dla firm
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              ML DevWorks projektuje i wdraża rozwiązania cyfrowe dla biznesu: od stron i aplikacji, przez automatyzację AI, po DevOps, e-commerce, systemy rezerwacji i utrzymanie projektów.
            </p>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="services-list-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="services-list-heading" className="sr-only">Lista usług ML DevWorks</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.id} className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex text-primary hover:text-primary-light font-semibold">
                    Zobacz usługę
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nie wiesz, od czego zacząć?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Opisz problem biznesowy, a dobierzemy zakres: stronę, aplikację, integrację, automatyzację albo plan naprawczy dla istniejącego projektu.
            </p>
            <Link href="/#contact" className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
              Skontaktuj się
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
