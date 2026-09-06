import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";

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

const offer = [
  {
    title: "Intelligent AI agents",
    highlight: true,
    text: "AI agents that understand natural language, collect data, ask follow-up questions, classify the case, and trigger actions in your systems.",
    points: ["AI chatbots and assistants on the website and in messengers", "Lead and ticket qualification 24/7", "Internal agents for the team (knowledge base, documents)", "Data analysis and processing"],
  },
  {
    title: "Business process automation",
    text: "Automation of repetitive processes that consume employees' time. From simple tasks to workflows spanning multiple systems.",
    points: ["Workflows and notifications", "CRM, ERP, form, and API integrations", "Automatic reporting", "Document and invoice processing"],
  },
  {
    title: "Customer service and ticket automation",
    text: "Helpdesk, contact center, orders, and complaints: AI classifies, answers repetitive cases, and escalates harder ones with full context.",
    points: ["Ticket classification and prioritization", "Answers from the company knowledge base", "Order and shipment status", "Escalation to a human with a summary"],
  },
  {
    title: "RPA and data analysis",
    text: "Robots that perform repetitive clicks in applications without APIs, and models that analyze data and support decisions.",
    points: ["Automatic form and system filling", "Data extraction from scans and PDFs", "Anomaly detection and prediction", "Segmentation and recommendations"],
  },
];

const whyMe = [
  ["Latest AI models", "I use GPT, Claude, and other models, choosing the tool for the specific process, not the other way around."],
  ["Fast delivery", "First automations usually run after 3-14 business days. After a clear process description, I prepare a free prototype."],
  ["Measurable results", "Every automation is designed around numbers: time saved, response time, error count, tickets handled."],
  ["Security and GDPR", "Access control, limiting data sent to models, logging agent actions, and GDPR compliance."],
  ["Ownership, no lock-in", "The code and configuration belong to you. I do not lock your company into one no-code tool with a growing subscription."],
  ["One accountable developer", "Analysis, design, delivery, and maintenance are handled by me personally. No intermediaries or sales reps."],
];

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
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI automation for companies: <span className="text-amber-400">AI agents, integrations, and workflows</span> that remove manual work
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-4">
              Business process automation with AI agents: ticket and customer handling, lead qualification, copying data between systems, reports, and office work.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
              Simple automations from PLN 2,500 net, first results in 3-14 business days. You work directly with a Krakow-based developer, remotely across Poland and the EU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenAssistantButton
                fallbackHref="/en/contact#ai-advisor"
                className="px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors text-center"
              >
                Check with AI what to automate
              </OpenAssistantButton>
              <Link
                href="/en/contact"
                className="px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors text-center"
              >
                Free estimate and prototype
              </Link>
            </div>
          </div>
        </section>

        <ServiceSeoSections serviceId="automation-ai" lang="en" />

        <AutomationExamplesSection lang="en" />

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="automation-offer-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="automation-offer-heading" className="text-3xl md:text-4xl font-bold mb-10">
              What process automation services include
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {offer.map((item) => (
                <article
                  key={item.title}
                  className={`bg-background rounded-xl p-6 ${item.highlight ? "border-2 border-amber-400/60 shadow-lg shadow-amber-500/10" : "border border-primary/20"}`}
                >
                  <h3 className={`text-2xl font-bold mb-3 ${item.highlight ? "text-amber-400" : "text-primary"}`}>{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{item.text}</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="agency-heading">
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <h2 id="agency-heading" className="text-3xl md:text-4xl font-bold mb-4">
                AI automation agency or a developer?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                An automation agency usually sells ready-made scenarios in no-code tools and bills a subscription for every step. That works for simple flows, but breaks down when the process needs logic, integration with your system, or control over data.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I build automations as code that belongs to you: AI agents, API integrations, and applications. Where a ready tool is enough, I use it - without locking the company into a subscription.
              </p>
              <Link href="/en/blog/ai-automation-agency-or-developer-how-to-choose-a-vendor" className="inline-flex text-primary hover:text-primary-light font-semibold underline">
                How to choose an automation vendor: comparison of cooperation models
              </Link>
            </div>
            <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">AI automation in Krakow and remotely</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am based in Krakow (Rynek Główny 34/15) and work remotely with companies across Poland and the EU. On-site meeting, video call, or email - the analysis process is the same.
              </p>
              <Link href="/en/software-developer-krakow" className="text-primary hover:text-primary-light font-semibold">
                Software developer from Krakow: business-first approach
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="why-me-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-me-heading" className="text-3xl md:text-4xl font-bold mb-10">
              Why automate with me
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyMe.map(([title, text], index) => (
                <article key={title} className="bg-background rounded-xl p-6 border border-primary/20">
                  <h3 className={`text-xl font-bold mb-3 ${index === 0 ? "text-amber-400" : "text-primary"}`}>{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="process-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold mb-10">
              How an automation project works
            </h2>
            <ol className="space-y-6">
              {process.map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-400/20 to-amber-400/10 rounded-xl p-8 md:p-12 text-center border-2 border-amber-400/60 shadow-lg shadow-amber-500/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">Ready for AI automation?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Describe the process that takes the most of your team&apos;s time. I come back within 2-5 days with a free automation prototype and an indicative estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/en/contact" className="inline-block px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors">
                Get in touch
              </Link>
              <Link href="/en/blog/what-can-be-automated-in-a-company-with-ai-process-examples" className="inline-block px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors">
                Read: 12 processes to automate
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
