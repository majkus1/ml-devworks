import { Metadata } from "next";
import SolutionLinks from "@/components/SolutionLinks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import ServiceLanding from "@/components/ServiceSections";
import { AgencyComparison } from "@/components/ServiceExtras";

const TITLE = "Automatyzacje AI dla firm: agenci i integracje | ML DevWorks";
const DESCRIPTION =
  "Automatyzacje AI dla firm: agenci AI do zapytań i zgłoszeń, integracje systemów, faktury i raporty. Od 2 500 zł netto, efekty w 3–14 dni, prototyp gratis.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "automatyzacje ai dla firm",
    "automatyzacja ai dla firm",
    "automatyzacja procesów biznesowych ai",
    "agencja automatyzacji ai",
    "usługi automatyzacji procesów",
    "automatyzacja z użyciem agentów ai",
    "agenci ai dla biznesu",
    "automatyzacja obsługi zgłoszeń",
    "automatyzacja procesów obsługi klienta",
    "automatyzacja procesów w contact center",
    "automatyzacja pracy biurowej z ai",
    "automatyzacja crm ai",
    "chatbot ai dla strony",
    "automatyzacja ai kraków",
    "automatyzacja biznesu",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    languages: {
      pl: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
      en: "https://ml-devworks.com/en/services/automation-and-ai",
      "x-default": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function AutomatyzacjaIAIPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatyzacje AI dla firm",
    description: DESCRIPTION,
    provider: {
      "@type": "Organization",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+48-516-598-792",
        contactType: "customer service",
        email: "office@ml-devworks.com",
        availableLanguage: ["Polish", "English"],
      },
    },
    areaServed: [
      { "@type": "Country", name: "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
    serviceType: "AI Automation for Companies, Business Process Automation, Customer Support Automation, AI Agents",
    category: "Artificial Intelligence, Automation",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://ml-devworks.com/uslugi" },
      { "@type": "ListItem", position: 3, name: "Automatyzacje AI dla firm", item: "https://ml-devworks.com/uslugi/automatyzacja-i-ai" },
    ],
  };

  return (
    <>
      <StructuredData lang="pl" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="automation-ai" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="automation-ai" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="automation-ai" lang="pl">
          <AutomationExamplesSection lang="pl" />
          <AgencyComparison lang="pl" />
          <SolutionLinks lang="pl" />
        </ServiceLanding>
      </main>

      <Footer lang="pl" />
    </>
  );
}
