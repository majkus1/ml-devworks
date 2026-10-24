import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";
import { MobileTechComparison } from "@/components/ServiceExtras";

const TITLE = "Custom Mobile Apps for Companies | ML DevWorks";
const DESCRIPTION =
  "Custom iOS and Android apps for companies: offline mode, admin panel, integrations with your systems. MVP from PLN 12,000 net in 3-8 weeks. Krakow and remote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "custom mobile apps for companies",
    "mobile app development for business",
    "ios android app development poland",
    "field service mobile app",
    "mobile app for field employees",
    "customer mobile app development",
    "react native app developer",
    "mobile app developer krakow",
    "how much does a business mobile app cost",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
    languages: {
      pl: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
      en: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function MobileAppsForCompaniesPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom mobile apps for companies",
    description: DESCRIPTION,
    serviceType: "Mobile Application Development, iOS and Android App Development",
    url: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
    },
    areaServed: [
      { "@type": "Country", name: "Poland" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ml-devworks.com/en/services" },
      { "@type": "ListItem", position: 3, name: "Mobile apps for companies", item: "https://ml-devworks.com/en/services/mobile-apps-for-companies" },
    ],
  };

  return (
    <>
      <StructuredData lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="mobile-apps" lang="en" />
      <ServiceOfferCatalogSchema serviceId="mobile-apps" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="mobile-apps" lang="en">
          <MobileTechComparison lang="en" />
        </ServiceLanding>
      </main>

      <Footer lang="en" />
    </>
  );
}
