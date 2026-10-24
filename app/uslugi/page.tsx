import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { getServices } from "@/lib/services";
import ServicesHubContent from "@/components/pages/ServicesHubContent";

const services = getServices("pl");

export const metadata: Metadata = {
  title: "Usługi programistyczne dla firm | ML DevWorks",
  description:
    "Aplikacje webowe i mobilne, strony internetowe, automatyzacja AI, e-commerce, systemy rezerwacji, DevOps i utrzymanie projektów dla firm.",
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
      "Aplikacje webowe i mobilne, strony internetowe, automatyzacja AI, e-commerce, systemy rezerwacji, DevOps i utrzymanie projektów dla firm.",
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
      <main className="min-h-screen">
        <ServicesHubContent lang="pl" />
      </main>
      <Footer lang="pl" />
    </>
  );
}
