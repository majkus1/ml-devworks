import HomeFAQAnimated from "./HomeFAQAnimated";

interface HomeFAQProps {
  lang?: "pl" | "en";
}

const faq = {
  pl: [
    {
      q: "Czym zajmuje się ML DevWorks?",
      a: "ML DevWorks to marka doświadczonego programisty z Krakowa. Tworzę strony internetowe, aplikacje webowe i mobilne, systemy rezerwacji, sklepy internetowe oraz automatyzacje AI dla firm.",
    },
    {
      q: "Czy pracuję bezpośrednio z programistą?",
      a: "Tak. Kontakt, analiza, decyzje techniczne, prototyp i finalne wdrożenie są prowadzone bezpośrednio przeze mnie, bez rozbudowanego procesu agencyjnego.",
    },
    {
      q: "Jak AI pomaga w realizacji projektu?",
      a: "Narzędzia AI przyspieszają analizę, prototypowanie i wybrane etapy pracy. Architektura, bezpieczeństwo, jakość kodu i efekt końcowy pozostają po mojej stronie.",
    },
    {
      q: "Jakie projekty mogę zlecić?",
      a: "Najczęściej są to strony firmowe, landing pages, aplikacje dla firm, panele administracyjne, integracje CRM/API, systemy rezerwacji online, e-commerce i automatyzacje procesów.",
    },
    {
      q: "Czy można dostać prototyp przed decyzją o wdrożeniu?",
      a: "Po dokładnym opisie pomysłu lub problemu wracam zwykle w ciągu 2-5 dni z kierunkiem rozwiązania, zakresem i w wielu przypadkach interaktywnym prototypem do omówienia.",
    },
  ],
  en: [
    {
      q: "What does ML DevWorks do?",
      a: "ML DevWorks is the brand of an experienced developer from Krakow. I build websites, web and mobile apps, booking systems, online stores, and AI automation for companies.",
    },
    {
      q: "Will I work directly with the developer?",
      a: "Yes. Communication, analysis, technical decisions, prototype, and final delivery are handled directly by me, without a heavy agency process.",
    },
    {
      q: "How does AI help in the project?",
      a: "AI tools speed up analysis, prototyping, and selected implementation steps. Architecture, security, code quality, and the final result remain my responsibility.",
    },
    {
      q: "What projects can I request?",
      a: "Typical projects include business websites, landing pages, company apps, admin panels, CRM/API integrations, online booking systems, e-commerce, and process automation.",
    },
    {
      q: "Can I get a prototype before deciding on implementation?",
      a: "After a clear description of the idea or problem, I usually return within 2-5 days with a solution direction, scope, and often an interactive prototype for discussion.",
    },
  ],
};

export default function HomeFAQ({ lang = "pl" }: HomeFAQProps) {
  const items = faq[lang];
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-28 md:py-32 px-4 bg-background" aria-labelledby="home-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomeFAQAnimated lang={lang} items={items} />
    </section>
  );
}
