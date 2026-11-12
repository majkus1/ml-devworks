import type { ReactNode } from "react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

interface ProcessStepsProps {
  lang?: "pl" | "en";
  title?: string;
  lead?: string;
  steps?: [string, string][];
  tone?: "default" | "muted";
  id?: string;
  children?: ReactNode;
}

export const defaultSteps: Record<"pl" | "en", [string, string][]> = {
  pl: [
    ["Opisujesz proces", "Kilka zdań w formularzu albo rozmowa z asystentem AI: co robicie ręcznie, w jakich narzędziach i ile tego jest. Bez specyfikacji."],
    ["Dostajesz prototyp", "W 2–5 dni pokazuję działający szkic albo klikalny prototyp, zakres i wycenę. Bezpłatnie i bez zobowiązań."],
    ["Wdrażam etapami", "Pierwszy proces zwykle w 3–14 dni roboczych, aplikacja w 3–8 tygodni. Kod, konta i dane są Twoje od pierwszego dnia."],
    ["Mierzymy efekt", "Porównujemy czas, błędy i liczbę zapytań przed i po. Kolejne usprawnienia dokładamy w Twoim tempie, bez abonamentu."],
  ],
  en: [
    ["You describe the process", "A few sentences in the form or a chat with the AI advisor: what you do manually, in which tools, and how much of it there is. No specification."],
    ["You get a prototype", "Within 2–5 days I show a working draft or a clickable prototype, the scope, and a price. Free and with no commitment."],
    ["I deliver in stages", "The first process usually takes 3–14 business days, an app 3–8 weeks. Code, accounts, and data are yours from day one."],
    ["We measure the effect", "We compare time, errors, and enquiries before and after. Further improvements are added at your pace, with no subscription."],
  ],
};

/** Cztery kroki współpracy: ten sam proces na stronie głównej i na wszystkich stronach usług. */
export default function ProcessSteps({ lang = "pl", title, lead, steps, tone = "muted", id = "process", children }: ProcessStepsProps) {
  const isPl = lang === "pl";
  const list = steps ?? defaultSteps[lang];

  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeader
        id={`${id}-heading`}
        eyebrow={isPl ? "Jak pracujemy" : "How we work"}
        title={title ?? (isPl ? "Od opisu problemu do działającego rozwiązania" : "From a problem description to a working solution")}
        lead={
          lead ??
          (isPl
            ? "Nie kupujesz „projektu IT” w ciemno. Zaczynamy od jednego procesu, sprawdzasz efekt i dopiero wtedy idziemy dalej."
            : "You don't buy an 'IT project' blindly. We start with one process, you see the effect, and only then we move on.")
        }
      />
      {/* Kroki jako oś: duża cyfra w kroju nagłówków i linia nad każdym krokiem, bez kart. */}
      <ol className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4">
        {list.map(([stepTitle, text], index) => (
          <li key={stepTitle} className="border-t-2 border-ink pt-5">
            <span className="block font-display text-5xl font-bold leading-none tracking-tight text-primary" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="mt-5 text-xl font-semibold text-ink">{stepTitle}</h3>
            <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">{text}</p>
          </li>
        ))}
      </ol>
      {children}
    </Section>
  );
}
