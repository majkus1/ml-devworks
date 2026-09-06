import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Software Developer Krakow | Apps & AI Automation",
  description:
    "Software developer from Krakow with a business-first approach: websites, apps, booking systems, integrations and AI automation matched to company goals.",
  alternates: {
    canonical: "https://ml-devworks.com/en/software-developer-krakow",
    languages: {
      pl: "https://ml-devworks.com/programista-krakow",
      en: "https://ml-devworks.com/en/software-developer-krakow",
      "x-default": "https://ml-devworks.com/programista-krakow",
    },
  },
  openGraph: {
    title: "Software developer Krakow | ML DevWorks",
    description:
      "Websites, apps, AI automation, booking systems, integrations, and DevOps for companies in Krakow and Poland.",
    url: "https://ml-devworks.com/en/software-developer-krakow",
    type: "website",
    locale: "en_US",
  },
};

function LocalSchema() {
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Software developer Krakow", item: "https://ml-devworks.com/en/software-developer-krakow" },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
  );
}

export default function SoftwareDeveloperKrakowPageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <LocalSchema />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs
              className="mb-8"
              items={[
                { label: "Home", href: "/en" },
                { label: "Software developer Krakow" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software developer from Krakow with a business-first approach
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              I design websites, applications, booking systems, integrations, and AI automation for companies. First I understand the goal, process, and customer, then I choose the right technical solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/en#contact" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
                Book a consultation
              </Link>
              <Link href="/en/services" className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center">
                View services
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-12 bg-background-lighter/40" aria-labelledby="business-approach-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="business-approach-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Business-first development
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                ["Goal analysis", "I clarify what the solution should improve: sales, customer service, team time, or process quality."],
                ["Implementation priorities", "I help choose the features that make the most business sense first instead of building everything at once."],
                ["Technology for the outcome", "I choose a website, app, integration, or AI automation for the problem, not the other way around."],
              ].map(([title, description]) => (
                <article key={title} className="bg-background border border-primary/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="local-services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="local-services-heading" className="text-3xl md:text-4xl font-bold mb-8">
              What I build for companies in Krakow and Poland
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                ["Business websites", "Fast company websites, landing pages, and offer pages prepared for technical SEO and lead generation."],
                ["Business applications", "Admin panels, web and mobile apps, MVPs, and internal systems for operations-heavy teams."],
                ["AI automation", "AI agents, workflows, API integrations, automated reports, and reduction of manual business work."],
                ["Booking systems", "Customer bookings, availability calendars, online payments, reminders, and CRM integrations."],
                ["DevOps", "CI/CD, Docker, cloud deployment, monitoring, backups, and production application stability."],
                ["Maintenance", "Taking over existing projects, bug fixing, Core Web Vitals, technical SEO, and further development."],
              ].map(([title, description]) => (
                <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-primary mb-3">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="krakow-automation-heading">
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <h2 id="krakow-automation-heading" className="text-3xl md:text-4xl font-bold mb-4">
                AI automation in Krakow: implementations for local companies
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Companies from Krakow and the region most often ask about automating enquiries and tickets, integrating CRM with forms and the online store, automatic reports, and AI agents that relieve the office. I deliver such solutions from PLN 2,500 net, with first results after 3-14 business days.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I can meet on site in Krakow to walk through the process with the team, and run delivery and maintenance remotely. Start with the AI advisor on the contact page or describe the process in the form.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/en/services/automation-and-ai" className="px-5 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
                  AI automation for companies
                </Link>
                <Link href="/en/contact#ai-advisor" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                  Ask the AI advisor
                </Link>
              </div>
            </div>
            <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Software for companies in Krakow</h3>
              <ul className="space-y-3 text-gray-300">
                <li>- Mobile apps for field employees and service teams</li>
                <li>- Booking systems for clinics, salons, and local services</li>
                <li>- CRM/ERP integrations and customer portals</li>
                <li>- Business websites prepared for local SEO</li>
              </ul>
              <Link href="/en/services/mobile-apps-for-companies" className="inline-block mt-4 text-primary hover:text-primary-light font-semibold">
                Custom mobile apps for companies
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="krakow-proof-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="krakow-proof-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Local presence in Krakow, end-to-end technical delivery
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I work with companies that need more than a website contractor. I cover business analysis, architecture, implementation, maintenance, optimization, and growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By combining development experience, technical SEO, and AI automation, I build solutions that are fast, understandable for Google, and useful for the team using them every day.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
