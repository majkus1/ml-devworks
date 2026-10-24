import { Metadata } from "next";
import SolutionLinks from "@/components/SolutionLinks";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import ServiceLanding from "@/components/ServiceSections";
import { AgencyComparison } from "@/components/ServiceExtras";

const TITLE = "AI Automation for Companies and AI Agents | ML DevWorks";
const DESCRIPTION =
  "AI automation for companies: AI agents for tickets and customers, system integrations, office work automation. From PLN 2,500 net, results in 3-14 days.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "ai automation for companies",
    "business process automation ai",
    "ai automation agency",
    "process automation services",
    "ai agents for business",
    "customer support automation",
    "ticket automation ai",
    "contact center automation",
    "office work automation ai",
    "crm automation ai",
    "ai chatbot for website",
    "automation services krakow",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/automation-and-ai",
    languages: {
      pl: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
      en: "https://ml-devworks.com/en/services/automation-and-ai",
      "x-default": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/en/services/automation-and-ai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const process = [
  ["Process analysis", "I map processes, calculate the cost of time and errors, and prioritize what pays back fastest."],
  ["Solution design", "I choose the architecture: AI agent, integration, workflow, or application. I define scope, budget, and metrics."],
  ["Prototype and delivery", "I build a working prototype, integrate it with your systems, and test on real data."],
  ["Testing and launch", "I verify AI accuracy, exception handling, and escalation. I train the team and document everything."],
  ["Monitoring and growth", "I track results, improve agent answers, and add further processes in stages."],
];

export default function AutomationAndAIPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "AI automation for companies",
    description: DESCRIPTION,
    provider: {
      "@type": "Organization",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+48-516-598-792",
        contactType: "customer service",
        email: "office@ml-devworks.com",
        availableLanguage: ["English", "Polish"],
      },
    },
    areaServed: [
      { "@type": "Country", name: "Poland" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
    serviceType: "AI Automation for Companies, Business Process Automation, Customer Support Automation, AI Agents",
    category: "Artificial Intelligence, Automation",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ml-devworks.com/en/services" },
      { "@type": "ListItem", position: 3, name: "AI automation for companies", item: "https://ml-devworks.com/en/services/automation-and-ai" },
    ],
  };

  return (
    <>
      <StructuredData lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="automation-ai" lang="en" />
      <ServiceOfferCatalogSchema serviceId="automation-ai" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="automation-ai" lang="en">
          <AutomationExamplesSection lang="en" />
          <AgencyComparison lang="en" />
          <SolutionLinks lang="en" />
        </ServiceLanding>
      </main>

      <Footer lang="en" />
    </>
  );
}
