import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceLanding from "@/components/ServiceSections";
import { ServiceFaqSchema } from "@/components/ServiceSeoSections";
import SolutionLinks from "@/components/SolutionLinks";

export const metadata: Metadata = {
  title: "Online booking systems for companies | ML DevWorks",
  description:
    "I build online booking systems with availability calendars, payments, deposits, reminders, admin panels and CRM integrations for service companies.",
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
      "I build online booking systems with availability calendars, payments, deposits, reminders, admin panels and CRM integrations for service companies.",
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


  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

export default function OnlineBookingSystemsPageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <BookingSystemsSchema />
      <ServiceFaqSchema serviceId="booking-systems" lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="booking-systems" lang="en">
          <SolutionLinks lang="en" />
        </ServiceLanding>
      </main>

      <Footer lang="en" />
    </>
  );
}
