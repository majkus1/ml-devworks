import SectionHeader from "@/components/ui/SectionHeader";
import FaqAccordion from "@/components/ui/FaqAccordion";

type FAQItem = {
  q: string;
  a: string;
};

interface HomeFAQAnimatedProps {
  lang: "pl" | "en";
  items: FAQItem[];
}

export default function HomeFAQAnimated({ lang, items }: HomeFAQAnimatedProps) {
  const isPl = lang === "pl";

  return (
    <div className="container-site">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeader
          id="home-faq-heading"
          eyebrow="FAQ"
          title={isPl ? "Najczęstsze pytania" : "Frequently asked questions"}
          lead={
            isPl
              ? "Krótkie odpowiedzi dla osób, które chcą szybko ocenić, czy mogę pomóc przy automatyzacji, aplikacji albo stronie."
              : "Short answers for people who want to quickly decide whether I can help with automation, an app, or a website."
          }
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <FaqAccordion items={items} />
      </div>
    </div>
  );
}
