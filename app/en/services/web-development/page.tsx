import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";

export const metadata: Metadata = {
  title: "Web development for businesses | ML DevWorks",
  description:
    "I build fast business websites, service pages and conversion-focused landing pages with technical SEO that turn traffic into qualified leads.",
  keywords: [
    "web development for businesses",
    "website development company",
    "business website design and development",
    "service company website",
    "conversion focused landing page",
    "technical seo website setup",
    "responsive website development",
    "fast loading website development",
    "small business web development",
    "custom website developer",
    "web development krakow",
    "lead generation website development",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/web-development",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/strony-internetowe",
      "en": "https://ml-devworks.com/en/services/web-development",
      "x-default": "https://ml-devworks.com/uslugi/strony-internetowe",
    },
  },
  openGraph: {
    title: "Web Development for Businesses | ML DevWorks",
    description:
      "I build fast business websites, service pages and conversion-focused landing pages with technical SEO that turn traffic into qualified leads.",
    url: "https://ml-devworks.com/en/services/web-development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development for Businesses | ML DevWorks",
    description:
      "I build fast business websites, service pages and conversion-focused landing pages with technical SEO that turn traffic into qualified leads.",
  },
};

export default function WebDevelopmentPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development",
    "description": "I build professional business websites that are responsive, fast, and SEO-ready: from landing pages to clear service websites.",
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
        "name": "Home",
        "item": "https://ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Development",
        "item": "https://ml-devworks.com/en/services/web-development"
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
      <ServiceFaqSchema serviceId="web-development" lang="en" />
      <ServiceOfferCatalogSchema serviceId="web-development" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="web-development" lang="en" />
      </main>

      <Footer lang="en" />
    </>
  );
}
