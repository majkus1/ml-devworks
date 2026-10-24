import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Aplikacje webowe i mobilne dla firm | ML DevWorks",
  description:
    "Aplikacje webowe i mobilne dla firm: panele klienta, systemy wewnętrzne, aplikacje iOS/Android i MVP od 12 000 zł netto. Prototyp w 2–5 dni gratis.",
  keywords: [
    "aplikacje webowe dla firm",
    "aplikacje mobilne dla biznesu",
    "tworzenie aplikacji internetowych",
    "tworzenie aplikacji ios android",
    "aplikacja do obslugi klientow",
    "system zamowien online",
    "panel administracyjny aplikacji",
    "mvp dla startupu",
    "aplikacje react native",
    "aplikacje next js",
    "skalowalne aplikacje biznesowe",
    "aplikacje mobilne krakow",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
      "en": "https://ml-devworks.com/en/services/web-and-mobile-applications",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    },
  },
  openGraph: {
    title: "Aplikacje webowe i mobilne dla firm | ML DevWorks",
    description:
      "Aplikacje webowe i mobilne dla firm: panele klienta, systemy wewnętrzne, aplikacje iOS/Android i MVP od 12 000 zł netto. Prototyp w 2–5 dni gratis.",
    url: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacje webowe i mobilne dla firm | ML DevWorks",
    description:
      "Aplikacje webowe i mobilne dla firm: panele klienta, systemy wewnętrzne, aplikacje iOS/Android i MVP od 12 000 zł netto. Prototyp w 2–5 dni gratis.",
  },
};

export default function AplikacjeInternetoweIMobilnePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aplikacje Internetowe i Mobilne",
    "description": "Tworzę nowoczesne aplikacje webowe i mobilne dla firm: panele klienta, systemy zamówień, MVP oraz aplikacje iOS/Android.",
    "provider": {
      "@type": "Organization",
      "name": "ML DevWorks",
      "url": "https://ml-devworks.com",
      "logo": "https://ml-devworks.com/primary-on-transparent-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-516-598-792",
        "contactType": "customer service",
        "email": "office@ml-devworks.com",
        "availableLanguage": ["Polish"]
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "serviceType": "Web Application Development, Mobile Application Development",
    "category": "Software Development"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://ml-devworks.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Aplikacje Internetowe i Mobilne",
        "item": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne"
      }
    ]
  };

  return (
    <>
      <StructuredData lang="pl" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ServiceFaqSchema serviceId="apps" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="apps" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="apps" lang="pl" />
      </main>

      <Footer lang="pl" />
    </>
  );
}
