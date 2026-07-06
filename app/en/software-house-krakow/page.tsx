import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Software house Krakow – apps, websites, AI | ML DevWorks",
  description:
    "Software house from Krakow, Poland. We build websites, web and mobile apps, booking systems, AI automation and integrations for companies. Get a free quote.",
  alternates: {
    canonical: "https://ml-devworks.com/en/software-house-krakow",
    languages: {
      pl: "https://ml-devworks.com/software-house-krakow",
      en: "https://ml-devworks.com/en/software-house-krakow",
      "x-default": "https://ml-devworks.com/software-house-krakow",
    },
  },
  openGraph: {
    title: "Software house Krakow | ML DevWorks",
    description:
      "Websites, apps, AI automation, booking systems, integrations, and DevOps for companies in Krakow and Poland.",
    url: "https://ml-devworks.com/en/software-house-krakow",
    type: "website",
    locale: "en_US",
  },
};

function LocalSchema() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@id": "https://ml-devworks.com/#localbusiness",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "ML DevWorks",
    url: "https://ml-devworks.com",
    image: "https://ml-devworks.com/ogimg.png",
    logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
    telephone: "+48 516 598 792",
    email: "office@ml-devworks.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rynek Główny 34/15",
      postalCode: "31-010",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.06248,
      longitude: 19.936336,
    },
    areaServed: [
      { "@type": "City", name: "Krakow" },
      { "@type": "Country", name: "Poland" },
    ],
    makesOffer: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business website development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web and mobile applications" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business process automation and AI" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online booking systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DevOps and cloud deployment" } },
    ],
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Software house Krakow", item: "https://ml-devworks.com/en/software-house-krakow" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function SoftwareHouseKrakowPageEn() {
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
                { label: "Software house Krakow" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Software house Krakow for companies that need leads, systems, and automation
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              ML DevWorks designs and implements websites, applications, booking systems, integrations, AI automation, and DevOps for companies in Krakow and remote clients across Poland.
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

        <section className="px-4 py-16" aria-labelledby="local-services-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="local-services-heading" className="text-3xl md:text-4xl font-bold mb-8">
              What we build for companies in Krakow and Poland
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

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="krakow-proof-heading">
          <div className="max-w-5xl mx-auto">
            <h2 id="krakow-proof-heading" className="text-3xl md:text-4xl font-bold mb-6">
              Local presence in Krakow, end-to-end technical delivery
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We work with companies that need more than a website contractor. We cover business analysis, architecture, implementation, maintenance, optimization, and growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              By combining senior development, technical SEO, and AI automation, we build solutions that are fast, understandable for Google, and useful for the team using them every day.
            </p>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
