import Link from "next/link";
import type { SiteLang } from "@/lib/services";

interface HomeProcessProps {
  lang?: SiteLang;
}

export default function HomeProcess({ lang = "pl" }: HomeProcessProps) {
  const isPl = lang === "pl";

  const steps = isPl
    ? [
        ["Opisujesz proces", "Piszesz w formularzu albo rozmawiasz z asystentem AI: co robicie ręcznie, jakich narzędzi używacie, ile tego jest. Bez specyfikacji."],
        ["Dostajesz prototyp", "W 2-5 dni wracam z klikalnym prototypem lub działającym szkicem automatyzacji, zakresem i orientacyjną wyceną. Bezpłatnie."],
        ["Wdrażam etapami", "Pierwszy proces zwykle w 3-14 dni roboczych, aplikacja w 3-8 tygodni. Kod, konta i dane należą do Ciebie od pierwszego dnia."],
        ["Mierzymy i rozwijamy", "Sprawdzamy efekt „przed” i „po” (czas, błędy, zapytania). Kolejne procesy i funkcje dokładamy w Twoim tempie, bez stałego abonamentu."],
      ]
    : [
        ["You describe the process", "You write in the form or talk to the AI advisor: what you do manually, which tools you use, how much of it there is. No specification needed."],
        ["You get a prototype", "Within 2-5 days I come back with a clickable prototype or a working automation draft, a scope, and an indicative estimate. Free of charge."],
        ["I deliver in stages", "The first process usually in 3-14 business days, an app in 3-8 weeks. Code, accounts, and data belong to you from day one."],
        ["We measure and grow", "We compare the 'before' and 'after' effect (time, errors, enquiries). Further processes and features are added at your pace, without a fixed subscription."],
      ];

  return (
    <section className="px-4 py-24 md:py-28 bg-background-lighter/40" aria-labelledby="home-process-heading">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <p className="text-primary font-semibold uppercase tracking-[0.18em] text-sm mb-3">
            {isPl ? "Jak wygląda współpraca" : "How we work together"}
          </p>
          <h2 id="home-process-heading" className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-tight mb-4">
            {isPl ? "Od opisu problemu do działającego rozwiązania w czterech krokach" : "From problem description to a working solution in four steps"}
          </h2>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            {isPl
              ? "Nie podpisujesz umowy na „projekt IT”. Zaczynamy od jednego procesu, sprawdzamy efekt i dopiero wtedy idziemy dalej."
              : "You do not sign up for an 'IT project'. We start with one process, verify the effect, and only then move on."}
          </p>
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, text], index) => (
            <li key={title} className="relative bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors">
              <span className="inline-flex w-10 h-10 items-center justify-center rounded-full bg-primary text-background font-bold text-lg mb-4" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed">{text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <Link href={isPl ? "/kontakt" : "/en/contact"} className="inline-flex items-center justify-center px-7 py-3.5 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
            {isPl ? "Opisz swój proces" : "Describe your process"}
          </Link>
          <Link href={isPl ? "/blog/agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce" : "/en/blog/ai-automation-agency-or-developer-how-to-choose-a-vendor"} className="text-primary hover:text-primary-light font-semibold">
            {isPl ? "Czym to się różni od agencji automatyzacji?" : "How is this different from an automation agency?"}
          </Link>
        </div>
      </div>
    </section>
  );
}
