interface AboutIntroProps {
  lang?: "pl" | "en";
}

export default function AboutIntro({ lang = "pl" }: AboutIntroProps) {
  const content = {
    pl: {
      title: "Nie rozmawiasz z handlowcem. Pracujesz bezpośrednio z programistą odpowiedzialnym za projekt",
      lead: "Patrzę na projekt jak programista z doświadczeniem biznesowym: najpierw rozumiem proces, klienta i cel, a dopiero potem dobieram technologię. Tworzę dedykowane oprogramowanie dla firm: aplikacje webowe, panele administracyjne, integracje API/CRM, systemy rezerwacji i automatyzacje procesów.",
    },
    en: {
      title: "You do not talk to a salesperson. You work directly with the developer responsible for the project",
      lead: "I approach projects as a developer with business awareness: first I understand the process, customer, and goal, then I choose the right technology. I build custom software for companies: web apps, admin panels, API/CRM integrations, booking systems, and process automation.",
    },
  };

  const t = content[lang];

  return (
    <section className="px-4 py-24 md:py-28" aria-labelledby="about-intro-heading">
      <div className="max-w-7xl mx-auto">
        <h2 id="about-intro-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-left leading-tight mb-5 text-white">
          {t.title}
        </h2>
        <p className="text-base md:text-lg text-gray-300 text-left leading-relaxed max-w-4xl">{t.lead}</p>

      </div>
    </section>
  );
}
