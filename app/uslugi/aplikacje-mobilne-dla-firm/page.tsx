import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";
import { MobileTechComparison } from "@/components/ServiceExtras";

const TITLE = "Aplikacje mobilne dla firm na zamówienie (iOS, Android) | ML DevWorks";
const DESCRIPTION =
  "Aplikacje mobilne iOS i Android na zamówienie: praca offline, panel administracyjny, integracje z systemami firmy. MVP od 12 000 zł netto w 3-8 tygodni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "aplikacje mobilne dla firm",
    "aplikacje mobilne na zamówienie",
    "dedykowane aplikacje mobilne dla firm",
    "tworzenie aplikacji mobilnych ios android",
    "aplikacja mobilna dla pracowników terenowych",
    "aplikacja mobilna dla serwisu",
    "aplikacja mobilna dla klientów firmy",
    "developer aplikacji mobilnych",
    "aplikacje react native dla firm",
    "aplikacje mobilne kraków",
    "ile kosztuje aplikacja mobilna dla firmy",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    languages: {
      pl: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
      en: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AplikacjeMobilneDlaFirmPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aplikacje mobilne dla firm na zamówienie",
    description: DESCRIPTION,
    serviceType: "Mobile Application Development, iOS and Android App Development",
    url: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
    },
    areaServed: [
      { "@type": "Country", name: "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://ml-devworks.com/uslugi" },
      { "@type": "ListItem", position: 3, name: "Aplikacje mobilne dla firm", item: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm" },
    ],
  };

  return (
    <>
      <StructuredData lang="pl" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="mobile-apps" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="mobile-apps" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="mobile-apps" lang="pl">
          <MobileTechComparison lang="pl" />
        </ServiceLanding>
      </main>

      <Footer lang="pl" />
    </>
  );
}
