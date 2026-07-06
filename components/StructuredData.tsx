interface StructuredDataProps {
  lang?: "pl" | "en";
}

export default function StructuredData({ lang = "pl" }: StructuredDataProps) {
  const googleMapsUrl =
    "https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
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
    sameAs: [googleMapsUrl],
    description:
      lang === "pl"
        ? "ML DevWorks to software house z Krakowa tworzący strony internetowe, aplikacje webowe i mobilne, automatyzacje AI, sklepy internetowe, systemy rezerwacji, wdrożenia DevOps oraz utrzymanie projektów dla firm."
        : "ML DevWorks is a software house from Krakow that builds websites, web and mobile applications, AI automation, online stores, booking systems, DevOps deployments, and maintenance for companies.",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [googleMapsUrl],
    description: organization.description,
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ML Devworks",
    url: "https://ml-devworks.com",
    description:
      lang === "pl"
        ? "Profesjonalne rozwiązania cyfrowe - strony internetowe, aplikacje, sklepy online"
        : "Professional digital solutions - websites, applications, online stores",
    inLanguage: lang === "pl" ? "pl-PL" : "en-US",
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "ML Devworks",
    },
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://ml-devworks.com",
      servicePhone: "+48-516-598-792",
    },
    description:
      lang === "pl"
        ? "Tworzenie stron internetowych, aplikacji webowych i mobilnych, sklepów internetowych, DevOps i wdrożenia w chmurze, naprawa i optymalizacja projektów"
        : "Website development, web and mobile applications, online stores, DevOps and cloud deployments, bug fixes and project optimization",
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "pl" ? "Strona główna" : "Home",
        item: "https://ml-devworks.com" + (lang === "en" ? "/en" : ""),
      },
    ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}

