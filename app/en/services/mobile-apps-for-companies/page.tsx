import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";

const TITLE = "Custom Mobile Apps for Companies | ML DevWorks";
const DESCRIPTION =
  "Custom iOS and Android apps for companies: offline mode, admin panel, integrations with your systems. MVP from PLN 12,000 net in 3-8 weeks. Krakow and remote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "custom mobile apps for companies",
    "mobile app development for business",
    "ios android app development poland",
    "field service mobile app",
    "mobile app for field employees",
    "customer mobile app development",
    "react native app developer",
    "mobile app developer krakow",
    "how much does a business mobile app cost",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
    languages: {
      pl: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
      en: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const useCases = [
  { title: "Field employees", text: "Jobs, checklists, photos, customer signatures, geolocation, and offline mode. Data reaches the system immediately, not after returning to the office." },
  { title: "Service and tickets", text: "An app for technicians and customers: service requests, equipment history, parts, visit schedules, and status notifications." },
  { title: "B2B sales reps", text: "Catalog, price lists, placing orders at the customer's site, stock visibility, and meeting notes synced with CRM." },
  { title: "Customer app", text: "Bookings, orders, order status, payments, loyalty programs, and push notifications instead of calls to the office." },
  { title: "Logistics and transport", text: "Routes, delivery confirmations, barcode scanning, transport documents, and driver-dispatcher communication in one place." },
  { title: "Manufacturing and warehouse", text: "Operation logging, quality control with photos, scanner-based inventory, and reporting breakdowns from the shop floor." },
];

const comparison = [
  { title: "Cross-platform (React Native)", tag: "Most common choice", points: ["One codebase for iOS and Android", "Lower cost and faster delivery", "Sufficient for most business apps", "Easier maintenance and growth"] },
  { title: "Native (Swift / Kotlin)", tag: "When required", points: ["Maximum performance and hardware access", "Best for unusual features (AR, BLE, sensors)", "Two codebases = higher cost", "Justified for consumer products"] },
  { title: "PWA / web app", tag: "Cheaper start", points: ["No app store publishing", "Lowest entry cost", "Limited notifications and offline mode", "Good as a stage before a full app"] },
];

const process = [
  ["Process analysis", "We define who uses the app and when, what data it collects, and what it must integrate with."],
  ["Mockups and prototype", "Clickable screens to discuss with the team. After a clear brief, I prepare the first prototype for free."],
  ["MVP delivery", "Backend, iOS/Android app, admin panel, and integrations. First version in 3-8 weeks."],
  ["Publishing and growth", "Developer accounts, App Store and Google Play, monitoring, updates, and new features in stages."],
];

export default function MobileAppsForCompaniesPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Custom mobile apps for companies",
    description: DESCRIPTION,
    serviceType: "Mobile Application Development, iOS and Android App Development",
    url: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
    },
    areaServed: [
      { "@type": "Country", name: "Poland" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ml-devworks.com/en/services" },
      { "@type": "ListItem", position: 3, name: "Mobile apps for companies", item: "https://ml-devworks.com/en/services/mobile-apps-for-companies" },
    ],
  };

  return (
    <>
      <StructuredData lang="en" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="mobile-apps" lang="en" />
      <ServiceOfferCatalogSchema serviceId="mobile-apps" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Custom mobile apps for companies: <span className="text-primary">iOS, Android, cross-platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-4">
              I build dedicated mobile apps for field employees, service teams, sales, and customers. With an admin panel, offline mode, and integrations with CRM, ERP, or inventory.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
              A mobile app MVP usually starts from PLN 12,000 net, with the first version in the stores in 3-8 weeks. Direct cooperation with a Krakow-based developer, remote across Poland and the EU.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/en/contact" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
                Get a free app estimate
              </Link>
              <OpenAssistantButton fallbackHref="/en/contact#ai-advisor" className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center">
                Ask the AI advisor whether an app makes sense
              </OpenAssistantButton>
            </div>
          </div>
        </section>

        <ServiceSeoSections serviceId="mobile-apps" lang="en" />

        <section className="px-4 py-16" aria-labelledby="mobile-usecases-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="mobile-usecases-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Who custom mobile apps are for
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl">
              A business mobile app makes sense when people work away from a desk or customers want to handle things from their phone. The most common use cases:
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="mobile-tech-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="mobile-tech-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Native, cross-platform, or PWA?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl">
              The technology choice drives cost, timeline, and maintenance. I recommend the option that fits the process and budget, not the other way around.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {comparison.map((item) => (
                <article key={item.title} className="bg-background border border-primary/20 rounded-xl p-6 flex flex-col">
                  <span className="self-start text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1 mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {item.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="mobile-process-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="mobile-process-heading" className="text-3xl md:text-4xl font-bold mb-10">
              How mobile app development works
            </h2>
            <ol className="space-y-6">
              {process.map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl" aria-hidden="true">
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

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="mobile-web-heading">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <h2 id="mobile-web-heading" className="text-2xl md:text-3xl font-bold mb-4">
              Need a web app or admin panel too?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              A mobile app rarely works alone. It usually comes with an admin panel, a web app for the office, or an integration with an existing system. See how I combine web and mobile applications into one coherent system.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/en/services/web-and-mobile-applications" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                Web and mobile applications
              </Link>
              <Link href="/en/services/automation-and-ai" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                AI automation for companies
              </Link>
              <Link href="/en/software-developer-krakow" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                Software developer Krakow
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Describe the process and get an app prototype</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tell me who will use the app, what it should do, and what it must connect to. After a clear brief, I come back within 2-5 days with a clickable prototype and an indicative estimate.
            </p>
            <Link href="/en/contact" className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
