import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { getServices } from "@/lib/services";
import ServicesHubContent from "@/components/pages/ServicesHubContent";

const services = getServices("en");

export const metadata: Metadata = {
  title: "Software development services for companies | ML DevWorks",
  description:
    "Business websites, web and mobile apps, AI automation, online stores, booking systems, DevOps, fixes and maintenance for companies.",
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
      "Business websites, web and mobile apps, AI automation, online stores, booking systems, DevOps, fixes and maintenance for companies.",
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
      <main className="min-h-screen">
        <ServicesHubContent lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
