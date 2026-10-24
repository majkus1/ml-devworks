import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceLanding from "@/components/ServiceSections";
import { ServiceFaqSchema } from "@/components/ServiceSeoSections";
import SolutionLinks from "@/components/SolutionLinks";

export const metadata: Metadata = {
  title: "System rezerwacji online dla firm | ML DevWorks",
  description:
    "Tworzę systemy rezerwacji online z kalendarzem, płatnościami, zaliczkami, przypomnieniami i integracją CRM dla firm usługowych.",
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    languages: {
      pl: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
      en: "https://ml-devworks.com/en/services/online-booking-systems",
      "x-default": "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    },
  },
  openGraph: {
    title: "System rezerwacji online dla firm | ML DevWorks",
    description:
      "Tworzę systemy rezerwacji online z kalendarzem, płatnościami, zaliczkami, przypomnieniami i integracją CRM dla firm usługowych.",
    url: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    type: "website",
    locale: "pl_PL",
  },
};

function BookingSystemsSchema() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Systemy rezerwacji online dla firm",
    description:
      "Dedykowane systemy rezerwacji klientów z kalendarzem dostępności, płatnościami online, przypomnieniami i integracjami CRM.",
    serviceType: "Online booking system development",
    url: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
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
      { "@type": "Country", name: "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "System rezerwacji online - zakres",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Wdrożenie systemu rezerwacji online",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "PLN",
            description: "Zwykle od 6 000 zł netto, zależnie od integracji, płatności i panelu administracyjnego.",
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
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://ml-devworks.com/uslugi" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Systemy rezerwacji online",
        item: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
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

export default function OnlineBookingSystemsPage() {
  return (
    <>
      <StructuredData lang="pl" />
      <BookingSystemsSchema />
      <ServiceFaqSchema serviceId="booking-systems" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ServiceLanding serviceId="booking-systems" lang="pl">
          <SolutionLinks lang="pl" />
        </ServiceLanding>
      </main>

      <Footer lang="pl" />
    </>
  );
}
