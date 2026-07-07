import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { getServices } from "@/lib/services";

const services = getServices("en");

export const metadata: Metadata = {
  title: "Software development services for companies | ML DevWorks",
  description:
    "Websites, web and mobile apps, AI automation, online stores, booking systems, DevOps and maintenance. Software development services for companies.",
  alternates: {
    canonical: "https://ml-devworks.com/en/services",
    languages: {
      pl: "https://ml-devworks.com/uslugi",
      en: "https://ml-devworks.com/en/services",
      "x-default": "https://ml-devworks.com/uslugi",
    },
  },
  openGraph: {
    title: "Software development services | ML DevWorks",
    description:
      "Websites, apps, AI automation, e-commerce, booking systems, DevOps, fixes, and maintenance.",
    url: "https://ml-devworks.com/en/services",
    type: "website",
    locale: "en_US",
  },
};

function ServicesHubSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "ML DevWorks software development services",
    url: "https://ml-devworks.com/en/services",
    description:
      "ML DevWorks software development services for companies: websites, apps, AI automation, e-commerce, DevOps, fixes, and maintenance.",
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
        name: "Home",
        item: "https://ml-devworks.com/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://ml-devworks.com/en/services",
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

export default function ServicesHubPageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <ServicesHubSchema />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <nav className="mb-8 text-sm text-gray-400" aria-label="Breadcrumb">
              <Link href="/en" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Services</span>
            </nav>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software development services for companies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              ML DevWorks means direct cooperation with an experienced developer: I design and implement websites, applications, AI automation, DevOps, e-commerce, booking systems, fixes, and maintenance.
            </p>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="services-list-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="services-list-heading" className="sr-only">ML DevWorks services list</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.id} className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <Link href={service.href} className="inline-flex text-primary hover:text-primary-light font-semibold">
                    View service
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Describe the business problem and I will recommend the right scope: website, application, integration, automation, or a recovery plan for an existing project.
            </p>
            <Link href="/en#contact" className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
