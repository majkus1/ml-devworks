import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Naprawa błędów stron, SEO techniczne i optymalizacja | ML DevWorks",
  description:
    "Naprawa błędów stron i aplikacji, błędy SEO i Search Console, przyspieszenie (Core Web Vitals) i utrzymanie. Diagnoza w 1–3 dni, poprawki od 1 500 zł netto.",
  keywords: [
    "naprawa strony internetowej",
    "naprawa aplikacji webowej",
    "bug fixing dla stron i aplikacji",
    "optymalizacja core web vitals",
    "optymalizacja wydajnosci strony",
    "techniczne seo naprawa",
    "utrzymanie strony internetowej",
    "utrzymanie aplikacji produkcyjnej",
    "wsparcie techniczne dla firm",
    "audyt i plan naprawczy projektu",
    "naprawa strony po agencji",
    "optymalizacja krakow",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
      "en": "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
      "x-default": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    },
  },
  openGraph: {
    title: "Naprawa stron i aplikacji | ML DevWorks",
    description:
      "Naprawa błędów stron i aplikacji, błędy SEO i Search Console, przyspieszenie (Core Web Vitals) i utrzymanie. Diagnoza w 1–3 dni, poprawki od 1 500 zł netto.",
    url: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naprawa stron i aplikacji | ML DevWorks",
    description:
      "Naprawa błędów stron i aplikacji, błędy SEO i Search Console, przyspieszenie (Core Web Vitals) i utrzymanie. Diagnoza w 1–3 dni, poprawki od 1 500 zł netto.",
  },
};

export default function NaprawaOptymalizacjaUtrzymaniePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Naprawa, Optymalizacja i Utrzymanie",
    "description": "Naprawa błędów w istniejących projektach, optymalizacja wydajności, SEO i konwersji. Przywróć pełną funkcjonalność swojej strony lub aplikacji. Kompleksowe utrzymanie i wsparcie techniczne dla Twoich projektów.",
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
    "serviceType": "Technical Support, Bug Fixing, Performance Optimization, Maintenance",
    "category": "IT Support, Maintenance"
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
        "name": "Naprawa, Optymalizacja i Utrzymanie",
        "item": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie"
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
      <ServiceFaqSchema serviceId="maintenance" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="maintenance" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="maintenance" lang="pl" />
      </main>

      <Footer lang="pl" />
    </>
  );
}

