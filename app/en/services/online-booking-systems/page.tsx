import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

const faq = [
  {
    q: "How much does an online booking system cost?",
    a: "A simple online booking system usually starts from PLN 6,000 net. The price increases when online payments, deposits, CRM/ERP integrations, employee roles, custom interfaces, or automated reminders are required.",
  },
  {
    q: "Can the booking system handle payments and deposits?",
    a: "Yes. We can implement online payments, deposits, email confirmations, reminders, and cancellation rules that reduce no-shows.",
  },
  {
    q: "Can the booking system integrate with a website?",
    a: "Yes. Booking can work as a website section, a customer portal, or a widget connected with a calendar, CRM, and payment provider.",
  },
  {
    q: "Which industries use custom booking systems?",
    a: "Most often service companies, beauty, healthcare, education, consulting, rental businesses, events, and companies that want to sell appointments online without manual scheduling.",
  },
];

export const metadata: Metadata = {
  title: "Online booking systems for companies | ML DevWorks",
  description:
    "We build customer booking systems with availability calendars, online payments, deposits, reminders, admin panels, and CRM integrations for service companies.",
  alternates: {
    canonical: "https://ml-devworks.com/en/services/online-booking-systems",
    languages: {
      pl: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
      en: "https://ml-devworks.com/en/services/online-booking-systems",
      "x-default": "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    },
  },
  openGraph: {
    title: "Online booking systems for companies | ML DevWorks",
    description:
      "Custom booking systems with payments, reminders, admin panels, and business integrations.",
    url: "https://ml-devworks.com/en/services/online-booking-systems",
    type: "website",
    locale: "en_US",
  },
};

function BookingSystemsSchema() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Online booking systems for companies",
    description:
      "Custom customer booking systems with availability calendars, online payments, reminders, and CRM integrations.",
    serviceType: "Online booking system development",
    url: "https://ml-devworks.com/en/services/online-booking-systems",
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kraków",
        addressCountry: "PL",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Poland" },
      { "@type": "City", name: "Kraków" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Online booking system scope",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Online booking system implementation",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "PLN",
            description: "Usually from PLN 6,000 net, depending on integrations, payments, and admin panel scope.",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://ml-devworks.com/en/services" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Online booking systems",
        item: "https://ml-devworks.com/en/services/online-booking-systems",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default function OnlineBookingSystemsPageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <BookingSystemsSchema />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs
              className="mb-8"
              items={[
                { label: "Home", href: "/en" },
                { label: "Services", href: "/en/services" },
                { label: "Online booking systems" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Online booking system for companies: clients, payments, and calendar
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              We design custom booking systems for service companies: from a simple appointment calendar to online payments, deposits, reminders, and CRM integrations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/en#contact" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
                Ask about a booking system
              </Link>
              <Link href="/en/blog/online-booking-system-for-beauty-salon-what-to-choose-and-how-long-it-takes" className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center">
                Read the guide
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="booking-problems-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="booking-problems-heading" className="text-3xl md:text-4xl font-bold mb-8">
              When a custom booking system makes sense
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Customers call or message to find an available slot, and the team loses time coordinating schedules.",
                "No-shows and manual appointment confirmation reduce revenue and disrupt operations.",
                "Ready-made calendars do not support payments, deposits, multiple employees, or your business rules.",
              ].map((item) => (
                <article key={item} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="booking-scope-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="booking-scope-heading" className="text-3xl md:text-4xl font-bold mb-8">
              What a customer booking system can include
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Availability calendar, services, locations, employees, and capacity limits.",
                "Online payments, deposits, vouchers, invoices, and cancellation rules.",
                "Admin panel for appointments, customers, schedules, and reports.",
                "Email/SMS notifications, reminders, post-visit surveys, and automated follow-ups.",
                "Integrations with CRM, website, Google Calendar, analytics, and sales tools.",
                "Mobile customer experience and ergonomic back office for the team.",
              ].map((item) => (
                <article key={item} className="bg-background border border-primary/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="booking-budget-heading">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
            <div>
              <h2 id="booking-budget-heading" className="text-2xl font-bold mb-3">Budget</h2>
              <p className="text-gray-300">Usually from PLN 6,000 net for a simple system. Integrations and payment flows are estimated after analysis.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Timeline</h2>
              <p className="text-gray-300">Usually 1-4 weeks for the first production version.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Best fit</h2>
              <p className="text-gray-300">Beauty, healthcare, education, consulting, rental, events, local services, and B2B.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="booking-faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="booking-faq-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <article key={item.q} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
