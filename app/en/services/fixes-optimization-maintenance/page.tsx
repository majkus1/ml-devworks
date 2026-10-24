import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Website & app fixes and optimization | ML DevWorks",
  description:
    "I fix broken websites and web apps, improve Core Web Vitals and technical SEO, and provide ongoing maintenance. Fast diagnostics and clear scope.",
  keywords: [
    "website bug fixing service",
    "web app troubleshooting",
    "core web vitals optimization service",
    "technical seo fixes",
    "website speed optimization",
    "ongoing website maintenance",
    "application maintenance support",
    "legacy project rescue",
    "post launch technical support",
    "conversion rate optimization technical",
    "software maintenance services krakow",
    "production incident fixes",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
      "en": "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
      "x-default": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    },
  },
  openGraph: {
    title: "Website & App Fixes | ML DevWorks",
    description:
      "I fix broken websites and web apps, improve Core Web Vitals and technical SEO, and provide ongoing maintenance. Fast diagnostics and clear scope.",
    url: "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website & App Fixes | ML DevWorks",
    description:
      "I fix broken websites and web apps, improve Core Web Vitals and technical SEO, and provide ongoing maintenance. Fast diagnostics and clear scope.",
  },
};

export default function FixesOptimizationMaintenancePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fixes, Optimization & Maintenance",
    "description": "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application. Comprehensive maintenance and technical support for your projects.",
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
        "name": "Home",
        "item": "https://ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fixes, Optimization & Maintenance",
        "item": "https://ml-devworks.com/en/services/fixes-optimization-maintenance"
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
      <ServiceFaqSchema serviceId="maintenance" lang="en" />
      <ServiceOfferCatalogSchema serviceId="maintenance" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="maintenance" lang="en" />
      </main>

      <Footer lang="en" />
    </>
  );
}

