import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Tworzenie stron internetowych dla firm | ML DevWorks",
  description:
    "Tworzę szybkie strony firmowe, landing page i strony ofertowe pod SEO, konwersję i pozyskiwanie klientów. Bezpośrednia współpraca z programistą.",
  keywords: [
    "tworzenie stron internetowych dla firm",
    "strona internetowa dla firmy uslugowej",
    "strony www dla malych firm",
    "projektowanie i wdrazanie stron www",
    "landing page dla firmy",
    "strona ofertowa dla biznesu",
    "strona internetowa z formularzem kontaktowym",
    "responsywna strona internetowa",
    "strona internetowa SEO",
    "optymalizacja techniczna strony www",
    "strony internetowe krakow",
    "wykonanie strony internetowej cena",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/strony-internetowe",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/strony-internetowe",
      "en": "https://ml-devworks.com/en/services/web-development",
      "x-default": "https://ml-devworks.com/uslugi/strony-internetowe",
    },
  },
  openGraph: {
    title: "Tworzenie stron internetowych dla firm | ML DevWorks",
    description:
      "Tworzę szybkie strony firmowe, landing page i strony ofertowe pod SEO, konwersję i pozyskiwanie klientów. Bezpośrednia współpraca z programistą.",
    url: "https://ml-devworks.com/uslugi/strony-internetowe",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://ml-devworks.com/psi.png",
        width: 1200,
        height: 630,
        alt: "ML DevWorks - Strony Internetowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tworzenie stron internetowych dla firm | ML DevWorks",
    description:
      "Tworzę szybkie strony firmowe, landing page i strony ofertowe pod SEO, konwersję i pozyskiwanie klientów. Bezpośrednia współpraca z programistą.",
    images: ["https://ml-devworks.com/psi.png"],
  },
};

export default function StronyInternetowePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strony Internetowe",
    "description": "Tworzę profesjonalne strony internetowe dla firm. Responsywne, szybkie i zoptymalizowane pod SEO: od landing page po rozbudowane strony ofertowe.",
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
    "serviceType": "Web Development",
    "category": "Website Development"
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
        "name": "Strony Internetowe",
        "item": "https://ml-devworks.com/uslugi/strony-internetowe"
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
      <ServiceFaqSchema serviceId="web-development" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="web-development" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="web-development" lang="pl" />
      </main>

      <Footer lang="pl" />
    </>
  );
}
