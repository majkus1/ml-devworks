import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceDetails, type ServiceDetailId } from "@/lib/service-details";
import { serviceItems } from "@/lib/services";

interface ServiceSeoSectionsProps {
  serviceId: ServiceDetailId;
  lang?: "pl" | "en";
}

export function ServiceFaqSchema({ serviceId, lang = "pl" }: ServiceSeoSectionsProps) {
  const detail = serviceDetails[serviceId][lang];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export function ServiceOfferCatalogSchema({ serviceId, lang = "pl" }: ServiceSeoSectionsProps) {
  const detail = serviceDetails[serviceId][lang];
  const service = serviceItems.find((item) => item.id === serviceId);
  if (!service) return null;

  const baseUrl = "https://ml-devworks.com";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title[lang],
    description: service.description[lang],
    serviceType: service.shortTitle[lang],
    url: `${baseUrl}${service.href[lang]}`,
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: baseUrl,
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
    },
    areaServed: [
      { "@type": "Country", name: lang === "pl" ? "Polska" : "Poland" },
      { "@type": "City", name: "Kraków" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "pl" ? "Oferta i orientacyjny budżet" : "Offer and typical budget",
      itemListElement: [
        {
          "@type": "Offer",
          name: service.title[lang],
          url: `${baseUrl}${service.href[lang]}`,
          availability: "https://schema.org/InStock",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "PLN",
            description: detail.price,
          },
          description: `${detail.definition} ${lang === "pl" ? "Typowy czas realizacji:" : "Typical timeline:"} ${detail.timeline}`,
        },
      ],
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default function ServiceSeoSections({ serviceId, lang = "pl" }: ServiceSeoSectionsProps) {
  const detail = serviceDetails[serviceId][lang];
  const service = serviceItems.find((item) => item.id === serviceId);
  const isEnglish = lang === "en";
  const hubHref = isEnglish ? "/en/services" : "/uslugi";
  const homeHref = isEnglish ? "/en" : "/";

  return (
    <section className="px-4 py-16 border-y border-primary/10" aria-labelledby="service-business-heading">
      <div className="max-w-5xl mx-auto space-y-14">
        {service && (
          <Breadcrumbs
            className="mb-2"
            items={[
              { label: isEnglish ? "Home" : "Strona główna", href: homeHref },
              { label: isEnglish ? "Services" : "Usługi", href: hubHref },
              { label: service.shortTitle[lang] },
            ]}
          />
        )}

        <div>
          <p className="text-primary font-semibold mb-3">
            {isEnglish ? "Service definition" : "Definicja usługi"}
          </p>
          <h2 id="service-business-heading" className="text-3xl md:text-4xl font-bold mb-5">
            {isEnglish ? "What this service covers" : "Co obejmuje ta usługa"}
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">{detail.definition}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {isEnglish ? "Problems we solve" : "Problemy, które rozwiązujemy"}
            </h3>
            <ul className="space-y-3 text-gray-300">
              {detail.pains.map((pain) => (
                <li key={pain}>- {pain}</li>
              ))}
            </ul>
          </div>
          <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-primary mb-4">
              {isEnglish ? "What you receive" : "Co dostajesz"}
            </h3>
            <ul className="space-y-3 text-gray-300">
              {detail.deliverables.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold mb-3">{isEnglish ? "For whom" : "Dla kogo"}</h3>
            <p className="text-gray-300">{detail.industries.join(", ")}.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">{isEnglish ? "Typical budget" : "Typowy budżet"}</h3>
            <p className="text-gray-300">{detail.price}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">{isEnglish ? "Timeline" : "Czas realizacji"}</h3>
            <p className="text-gray-300">{detail.timeline}</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-3">{isEnglish ? "How we prove value" : "Jak pokazujemy wartość"}</h3>
          <p className="text-gray-300 leading-relaxed">{detail.proof}</p>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-6">{isEnglish ? "FAQ" : "Najczęstsze pytania"}</h3>
          <div className="space-y-4">
            {detail.faq.map((item) => (
              <article key={item.q} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-primary mb-3">{item.q}</h4>
                <p className="text-gray-300 leading-relaxed">{item.a}</p>
              </article>
            ))}
          </div>
        </div>

        {detail.relatedPosts.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {isEnglish ? "Related articles" : "Powiązane artykuły"}
            </h3>
            <div className="flex flex-wrap gap-3">
              {detail.relatedPosts.map((post) => (
                <Link key={post.href} href={post.href} className="px-4 py-3 bg-background-lighter border border-primary/20 rounded-lg text-primary hover:border-primary transition-colors">
                  {post.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
