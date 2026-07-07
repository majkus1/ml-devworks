import { getServices } from "@/lib/services";

interface StructuredDataProps {
  lang?: "pl" | "en";
}

export default function StructuredData({ lang = "pl" }: StructuredDataProps) {
  const googleMapsUrl =
    "https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu";
  const sameAs = [googleMapsUrl];
  const services = getServices(lang);

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ml-devworks.com/#organization",
    name: "ML DevWorks",
    url: "https://ml-devworks.com",
    logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
    email: "office@ml-devworks.com",
    telephone: "+48-516-598-792",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rynek Główny 34/15",
      postalCode: "31-010",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-516-598-792",
      contactType: "customer service",
      email: "office@ml-devworks.com",
      availableLanguage: ["Polish", "English"],
    },
    sameAs,
    founder: { "@id": "https://ml-devworks.com/#person" },
    description:
      lang === "pl"
        ? "ML DevWorks to marka doświadczonego programisty z Krakowa, który tworzy strony internetowe, aplikacje webowe i mobilne, automatyzacje AI, sklepy internetowe, systemy rezerwacji, wdrożenia DevOps oraz utrzymuje projekty dla firm."
        : "ML DevWorks is the brand of an experienced developer from Krakow who builds websites, web and mobile applications, AI automation, online stores, booking systems, DevOps deployments, and maintenance for companies.",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@id": "https://ml-devworks.com/#localbusiness",
    "@type": ["ProfessionalService", "LocalBusiness"],
    name: "ML DevWorks",
    url: "https://ml-devworks.com",
    image: "https://ml-devworks.com/ogimg.png",
    logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
    telephone: "+48-516-598-792",
    email: "office@ml-devworks.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rynek Główny 34/15",
      postalCode: "31-010",
      addressLocality: "Kraków",
      addressRegion: "Małopolskie",
      addressCountry: "PL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.06248,
      longitude: 19.936336,
    },
    areaServed: [
      { "@type": "City", name: "Kraków" },
      { "@type": "Country", name: "Poland" },
      { "@type": "AdministrativeArea", name: "European Union" },
    ],
    sameAs,
    founder: { "@id": "https://ml-devworks.com/#person" },
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
      },
    })),
    description: organization.description,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ML DevWorks",
    url: "https://ml-devworks.com",
    description:
      lang === "pl"
        ? "Profesjonalne rozwiązania cyfrowe - strony internetowe, aplikacje, sklepy online"
        : "Professional digital solutions - websites, applications, online stores",
    inLanguage: lang === "pl" ? "pl-PL" : "en-US",
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://ml-devworks.com/#person",
    name: "Michał Lipka",
    jobTitle: lang === "pl" ? "Programista / Software Developer" : "Software Developer",
    url: "https://ml-devworks.com",
    worksFor: { "@id": "https://ml-devworks.com/#localbusiness" },
    knowsAbout: [
      "Web development",
      "Next.js",
      "React",
      "TypeScript",
      "AI automation",
      "API integration",
      "E-commerce",
      "DevOps",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kraków",
      addressCountry: "PL",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}

