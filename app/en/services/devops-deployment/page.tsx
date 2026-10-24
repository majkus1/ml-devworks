import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import ServiceLanding from "@/components/ServiceSections";
import { DevopsBeforeAfter } from "@/components/ServiceExtras";

export const metadata: Metadata = {
  title: "DevOps Services and Cloud Deployment (CI/CD) | ML DevWorks",
  description:
    "Cloud deployment automation and DevOps for companies: CI/CD, Docker, monitoring, backups. Support for e-commerce, SaaS and agencies. From PLN 4,500 net.",
  keywords: [
    "cloud deployment automation",
    "devops support for e-commerce",
    "devops services for agencies",
    "devops services for companies",
    "cloud deployment services",
    "ci cd pipeline setup",
    "docker kubernetes deployment",
    "aws azure gcp infrastructure",
    "infrastructure as code terraform",
    "production monitoring setup",
    "backup and disaster recovery setup",
    "platform reliability engineering",
    "server and infrastructure management",
    "devops consulting krakow",
    "secure cloud infrastructure",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/devops-deployment",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/devops-wdrozenia",
      "en": "https://ml-devworks.com/en/services/devops-deployment",
      "x-default": "https://ml-devworks.com/uslugi/devops-wdrozenia",
    },
  },
  openGraph: {
    title: "DevOps Services and Cloud Deployment | ML DevWorks",
    description:
      "I configure DevOps and cloud deployments: CI/CD pipelines, Docker/Kubernetes, monitoring, backups and security for stable application releases.",
    url: "https://ml-devworks.com/en/services/devops-deployment",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps Services and Cloud Deployment | ML DevWorks",
    description:
      "I configure DevOps and cloud deployments: CI/CD pipelines, Docker/Kubernetes, monitoring, backups and security for stable application releases.",
  },
};

export default function DevOpsDeploymentPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DevOps & Deployment",
    "description": "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production.",
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
        "name": "Home",
        "item": "https://ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "DevOps & Deployment",
        "item": "https://ml-devworks.com/en/services/devops-deployment"
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
      <ServiceFaqSchema serviceId="devops" lang="en" />
      <ServiceOfferCatalogSchema serviceId="devops" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="devops" lang="en">
          <DevopsBeforeAfter lang="en" />
        </ServiceLanding>
      </main>

      <Footer lang="en" />
    </>
  );
}

