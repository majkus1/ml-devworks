import HomeFAQAnimated from "./HomeFAQAnimated";
import { homeFaq } from "@/lib/home-faq";

interface HomeFAQProps {
  lang?: "pl" | "en";
}

export default function HomeFAQ({ lang = "pl" }: HomeFAQProps) {
  // Dwa pierwsze pytania (czym się zajmuję, praca bezpośrednio z programistą) mają już odpowiedź wyżej na stronie.
  const items = homeFaq[lang].slice(2);
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
