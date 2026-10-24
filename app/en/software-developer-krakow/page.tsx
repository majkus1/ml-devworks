import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LocalDeveloperContent from "@/components/pages/LocalDeveloperContent";

export const metadata: Metadata = {
  title: "Software Developer Krakow | Apps & AI Automation",
  description:
    "Software developer from Krakow with a business-first approach: websites, apps, booking systems, integrations and AI automation matched to company goals.",
  alternates: {
    canonical: "https://ml-devworks.com/en/software-developer-krakow",
    languages: {
      pl: "https://ml-devworks.com/programista-krakow",
      en: "https://ml-devworks.com/en/software-developer-krakow",
      "x-default": "https://ml-devworks.com/programista-krakow",
    },
  },
  openGraph: {
    title: "Software developer Krakow | ML DevWorks",
    description:
      "Websites, apps, AI automation, booking systems, integrations, and DevOps for companies in Krakow and Poland.",
    url: "https://ml-devworks.com/en/software-developer-krakow",
    type: "website",
    locale: "en_US",
  },
};

function LocalSchema() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Software developer Krakow", item: "https://ml-devworks.com/en/software-developer-krakow" },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  );
}

export default function SoftwareDeveloperKrakowPageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <LocalSchema />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <LocalDeveloperContent lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
