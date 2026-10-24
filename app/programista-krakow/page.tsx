import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import LocalDeveloperContent from "@/components/pages/LocalDeveloperContent";

export const metadata: Metadata = {
  title: "Programista Kraków: automatyzacje AI i aplikacje dla firm",
  description:
    "Programista i analityk z Krakowa: automatyzacje AI, aplikacje, systemy rezerwacji i strony dla firm. Biuro przy Rynku Głównym, prototyp w 2–5 dni gratis.",
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
      <main className="min-h-screen">
        <LocalDeveloperContent lang="pl" />
      </main>
      <Footer lang="pl" />
    </>
  );
}
