interface StructuredDataProps {
  lang?: "pl" | "en";
}

export default function StructuredData({ lang = "pl" }: StructuredDataProps) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ML Devworks",
    url: "https://www.ml-devworks.com",
    logo: "https://www.ml-devworks.com/primary-on-transparent-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+48-516-598-792",
      contactType: "customer service",
      email: "office@ml-devworks.com",
      availableLanguage: ["Polish", "English"],
    },
    sameAs: [],
    description:
      lang === "pl"
        ? "ML Devworks - Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI."
        : "ML Devworks - We create professional digital solutions for your business. From simple websites to advanced applications and cloud deployments. Quality by Us. Speed by AI.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ML Devworks",
    url: "https://www.ml-devworks.com",
    description:
      lang === "pl"
        ? "Profesjonalne rozwiązania cyfrowe - strony internetowe, aplikacje, sklepy online"
        : "Professional digital solutions - websites, applications, online stores",
    inLanguage: lang === "pl" ? "pl-PL" : "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.ml-devworks.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
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
      serviceUrl: "https://www.ml-devworks.com",
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
        item: "https://www.ml-devworks.com" + (lang === "en" ? "/en" : ""),
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

