import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Web and Mobile App Development for Companies | ML DevWorks",
  description:
    "I build custom web and mobile apps for companies: customer portals, admin panels, business tools, iOS/Android apps and MVPs.",
  keywords: [
    "web application development company",
    "mobile app development for business",
    "custom web app development",
    "ios android app development",
    "customer portal development",
    "internal business app development",
    "mvp app development for startup",
    "react native app development",
    "next js web application",
    "scalable software development",
    "mobile app development krakow",
    "secure web and mobile apps",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/web-and-mobile-applications",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
      "en": "https://ml-devworks.com/en/services/web-and-mobile-applications",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    },
  },
  openGraph: {
    title: "Web and Mobile App Development | ML DevWorks",
    description:
      "I build custom web and mobile apps for companies: customer portals, admin panels, business tools, iOS/Android apps and MVPs.",
    url: "https://ml-devworks.com/en/services/web-and-mobile-applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web and Mobile App Development | ML DevWorks",
    description:
      "I build custom web and mobile apps for companies: customer portals, admin panels, business tools, iOS/Android apps and MVPs.",
  },
};

export default function WebAndMobileApplicationsPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web and Mobile Applications",
    "description": "I build modern web and mobile applications for companies: customer portals, admin panels, MVPs and iOS/Android applications.",
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
        "name": "Home",
        "item": "https://ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web and Mobile Applications",
        "item": "https://ml-devworks.com/en/services/web-and-mobile-applications"
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
      <ServiceFaqSchema serviceId="apps" lang="en" />
      <ServiceOfferCatalogSchema serviceId="apps" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="apps" lang="en" />
      </main>

      <Footer lang="en" />
    </>
  );
}
