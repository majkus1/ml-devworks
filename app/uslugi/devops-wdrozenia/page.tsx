import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";
import { DevopsBeforeAfter } from "@/components/ServiceExtras";

export const metadata: Metadata = {
  title: "DevOps i automatyzacja wdrożeń w chmurze | ML DevWorks",
  description:
    "Automatyzacja wdrożeń w chmurze i DevOps dla firm: CI/CD, Docker, monitoring, backup. Wsparcie dla e-commerce, SaaS i agencji. Od 4 500 zł netto.",
  keywords: [
    "automatyzacja wdrożeń w chmurze",
    "devops w chmurze",
    "wdrożenie devops",
    "wsparcie devops dla e-commerce",
    "usługi devops dla agencji",
    "devops dla firm",
    "wdrozenia chmurowe aplikacji",
    "konfiguracja ci cd",
    "docker kubernetes wdrozenie",
    "monitoring infrastruktury produkcyjnej",
    "backup i disaster recovery",
    "aws azure google cloud deployment",
    "infrastructure as code terraform",
    "utrzymanie serwerow i aplikacji",
    "automatyzacja deploymentu",
    "devops krakow",
    "optymalizacja kosztow chmury",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/devops-wdrozenia",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/devops-wdrozenia",
      "en": "https://ml-devworks.com/en/services/devops-deployment",
      "x-default": "https://ml-devworks.com/uslugi/devops-wdrozenia",
    },
  },
  openGraph: {
    title: "DevOps i automatyzacja wdrożeń w chmurze | ML DevWorks",
    description:
      "Automatyzacja wdrożeń w chmurze i DevOps dla firm: CI/CD, Docker, monitoring, backup, bezpieczeństwo. Wsparcie dla e-commerce, SaaS i agencji.",
    url: "https://ml-devworks.com/uslugi/devops-wdrozenia",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps i automatyzacja wdrożeń w chmurze | ML DevWorks",
    description:
      "Automatyzacja wdrożeń w chmurze i DevOps dla firm: CI/CD, Docker, monitoring, backup, bezpieczeństwo. Wsparcie dla e-commerce, SaaS i agencji.",
  },
};

export default function DevOpsWdrozeniaPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DevOps & Wdrożenia",
    "description": "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji.",
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
    "serviceType": "DevOps, Cloud Deployment, Infrastructure Management",
    "category": "IT Infrastructure, Cloud Services"
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
        "name": "Usługi",
        "item": "https://ml-devworks.com/uslugi"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "DevOps i wdrożenia w chmurze",
        "item": "https://ml-devworks.com/uslugi/devops-wdrozenia"
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
      <ServiceFaqSchema serviceId="devops" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="devops" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="devops" lang="pl">
          <DevopsBeforeAfter lang="pl" />
        </ServiceLanding>
      </main>

      <Footer lang="pl" />
    </>
  );
}

