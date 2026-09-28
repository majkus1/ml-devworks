interface AboutIntroProps {
  lang?: "pl" | "en";
}

export default function AboutIntro({ lang = "pl" }: AboutIntroProps) {
  const content = {
    pl: {
      title: "Nie rozmawiasz z handlowcem. Pracujesz bezpośrednio z programistą odpowiedzialnym za projekt",
      lead: "Łączę rolę programisty i analityka biznesowego: najpierw rozumiem proces, klienta i cel, liczę, gdzie ginie czas i pieniądze, a dopiero potem dobieram technologię. Ta sama osoba prowadzi analizę, prototyp, wdrożenie i utrzymanie, więc nic nie ginie między handlowcem, project managerem a wykonawcą.",
    },
    en: {
      title: "You do not talk to a salesperson. You work directly with the developer responsible for the project",
      lead: "I combine the roles of developer and business analyst: first I understand the process, customer, and goal, calculate where time and money are lost, and only then choose the technology. The same person runs analysis, prototype, delivery, and maintenance, so nothing gets lost between a salesperson, a project manager, and a contractor.",
    },
  };

  const t = content[lang];

  return (
    <section className="px-4 py-24 md:py-28" aria-labelledby="about-intro-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="about-intro-heading" className="section-heading mb-5 text-white">
          {t.title}
        </h2>
        <p className="section-lead">{t.lead}</p>

      </div>
    </section>
  );
}
