type FAQItem = {
  q: string;
  a: string;
};

interface HomeFAQAnimatedProps {
  lang: "pl" | "en";
  items: FAQItem[];
}

export default function HomeFAQAnimated({ lang, items }: HomeFAQAnimatedProps) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="text-primary font-semibold uppercase tracking-[0.18em] text-sm mb-3">
          FAQ
        </p>
        <h2 id="home-faq-heading" className="section-heading">
          {lang === "pl" ? "Najczęstsze pytania" : "Frequently asked questions"}
        </h2>
        <p className="mt-4 section-lead">
          {lang === "pl"
            ? "Krótkie odpowiedzi dla osób, które chcą szybko ocenić, czy mogę pomóc w projekcie strony, aplikacji albo automatyzacji."
            : "Short answers for people who want to quickly decide whether I can help with a website, app, or automation project."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item) => (
          <article
            key={item.q}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 transition-colors hover:border-primary/50"
          >
            <h3 className="text-lg md:text-xl font-bold text-primary mb-4">{item.q}</h3>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
