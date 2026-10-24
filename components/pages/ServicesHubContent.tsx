import PageHero from "@/components/ui/PageHero";
import Services from "@/components/Services";
import PricingSection from "@/components/PricingSection";
import SolutionLinks from "@/components/SolutionLinks";
import ProcessSteps from "@/components/ui/ProcessSteps";
import CtaBand from "@/components/ui/CtaBand";

/** Przegląd usług (/uslugi i /en/services): ten sam układ co reszta strony. */
export default function ServicesHubContent({ lang }: { lang: "pl" | "en" }) {
  const isPl = lang === "pl";

  return (
    <>
      <PageHero
        lang={lang}
        breadcrumbs={[{ label: isPl ? "Strona główna" : "Home", href: isPl ? "/" : "/en" }, { label: isPl ? "Usługi" : "Services" }]}
        eyebrow={isPl ? "Usługi" : "Services"}
        title={
          isPl ? (
            <>
              Usługi programistyczne dla firm: <span className="text-gradient">automatyzacje AI, aplikacje i strony</span>
            </>
          ) : (
            <>
              Software development for companies: <span className="text-gradient">AI automation, apps, and websites</span>
            </>
          )
        }
        lead={
          isPl
            ? "Bezpośrednia współpraca z programistą, który najpierw rozumie Twój proces. Przy każdej usłudze znasz cenę „od”, czas realizacji i dostajesz prototyp przed decyzją."
            : "Direct cooperation with a developer who understands your process first. Every service shows a 'from' price and a timeline, and you get a prototype before you decide."
        }
        facts={
          isPl
            ? [
                { label: "Najmniejszy projekt", value: "od 1 500 zł netto" },
                { label: "Pierwszy efekt", value: "zwykle 3–14 dni" },
                { label: "Prototyp", value: "2–5 dni, gratis" },
              ]
            : [
                { label: "Smallest project", value: "from PLN 1,500 net" },
                { label: "First result", value: "usually 3–14 days" },
                { label: "Prototype", value: "2–5 days, free" },
              ]
        }
      />
      <Services lang={lang} showAllLink={false} title={isPl ? "Wybierz usługę" : "Choose a service"} />
      <PricingSection lang={lang} />
      <SolutionLinks lang={lang} />
      <ProcessSteps lang={lang} />
      <CtaBand
        lang={lang}
        title={isPl ? "Nie wiesz, od czego zacząć?" : "Not sure where to start?"}
        text={
          isPl
            ? "Opisz problem biznesowy, a dobiorę zakres: automatyzację, aplikację, integrację, stronę albo plan naprawczy dla istniejącego projektu."
            : "Describe the business problem and I'll recommend the scope: automation, an app, an integration, a website, or a recovery plan for an existing project."
        }
      />
    </>
  );
}
