import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "E-commerce Development for Businesses | ML DevWorks",
  description:
    "I build B2C and B2B online stores with product catalogs, checkout, payment gateways, shipping integrations, ERP/CRM and sales automation.",
  keywords: [
    "ecommerce development company",
    "online store development",
    "woocommerce development services",
    "shopify store development",
    "payment gateway integration",
    "shipping and fulfillment integration",
    "erp crm integration for ecommerce",
    "b2b ecommerce platform development",
    "ecommerce development krakow",
    "conversion focused online store",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/online-stores-booking-systems",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
      "en": "https://ml-devworks.com/en/services/online-stores-booking-systems",
      "x-default": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    },
  },
  openGraph: {
    title: "E-commerce Development for Businesses | ML DevWorks",
    description:
      "I build B2C and B2B online stores with product catalogs, checkout, payment gateways, shipping integrations, ERP/CRM and sales automation.",
    url: "https://ml-devworks.com/en/services/online-stores-booking-systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-commerce Development for Businesses | ML DevWorks",
    description:
      "I build B2C and B2B online stores with product catalogs, checkout, payment gateways, shipping integrations, ERP/CRM and sales automation.",
  },
};

export default function OnlineStoresBookingSystemsPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "E-commerce development for businesses",
    "description": "I build online stores and e-commerce systems for companies: product catalogs, checkout, payment gateways, shipping and ERP/CRM integrations.",
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
        "availableLanguage": ["English"]
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
        "name": "Home",
        "item": "https://ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Online Stores",
        "item": "https://ml-devworks.com/en/services/online-stores-booking-systems"
      }
    ]
  };

  return (
    <>
      <StructuredData lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ServiceFaqSchema serviceId="ecommerce-booking" lang="en" />
      <ServiceOfferCatalogSchema serviceId="ecommerce-booking" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="ecommerce-booking" lang="en" />
      </main>

      <Footer lang="en" />
    </>
  );
}
