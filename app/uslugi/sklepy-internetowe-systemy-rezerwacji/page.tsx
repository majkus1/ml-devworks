import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Sklepy internetowe i e-commerce dla firm | ML DevWorks",
  description:
    "Tworzę sklepy internetowe B2C i B2B: katalog, koszyk, płatności online, dostawy, integracje ERP/CRM i automatyzacje sprzedaży.",
  keywords: [
    "sklep internetowy dla firmy",
    "tworzenie sklepu internetowego",
    "wdrozenie woocommerce",
    "wdrozenie shopify",
    "platforma e commerce b2b b2c",
    "integracja platnosci online",
    "integracja kurier paczkomat",
    "woocommerce sklep internetowy",
    "shopify sklep internetowy",
    "integracja sklepu z erp crm",
    "sklepy internetowe krakow",
    "automatyzacja sprzedazy online",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
      "en": "https://ml-devworks.com/en/services/online-stores-booking-systems",
      "x-default": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    },
  },
  openGraph: {
    title: "Sklepy internetowe dla firm | ML DevWorks",
    description:
      "Tworzę sklepy internetowe B2C i B2B: katalog, koszyk, płatności online, dostawy, integracje ERP/CRM i automatyzacje sprzedaży.",
    url: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sklepy internetowe dla firm | ML DevWorks",
    description:
      "Tworzę sklepy internetowe B2C i B2B: katalog, koszyk, płatności online, dostawy, integracje ERP/CRM i automatyzacje sprzedaży.",
  },
};

export default function SklepyInternetoweSystemyRezerwacjiPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sklepy internetowe i e-commerce dla firm",
    "description": "Tworzę sklepy internetowe i rozwiązania e-commerce dla firm: katalog produktów, koszyk, płatności online, dostawy i integracje ERP/CRM.",
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
    "serviceType": "E-commerce Development",
    "category": "E-commerce"
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
        "name": "Sklepy internetowe",
        "item": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji"
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
      <ServiceFaqSchema serviceId="ecommerce-booking" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="ecommerce-booking" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="ecommerce-booking" lang="pl" />
      </main>

      <Footer lang="pl" />
    </>
  );
}
