import Image from "next/image";
import Section from "@/components/ui/Section";
import { CheckIcon, LinkedInIcon, PinIcon } from "@/components/ui/icons";
import { LINKEDIN_URL } from "@/lib/profile";

interface AboutIntroProps {
  lang?: "pl" | "en";
}

/** Kim jestem: zdjęcie, rola i trzy konkretne zobowiązania. Klient wie, z kim pracuje. */
export default function AboutIntro({ lang = "pl" }: AboutIntroProps) {
  const isPl = lang === "pl";
  const t = isPl
    ? {
        eyebrow: "Z kim pracujesz",
        title: "Nie rozmawiasz z handlowcem. Pracujesz bezpośrednio z programistą odpowiedzialnym za projekt.",
        lead: "Łączę rolę programisty i analityka biznesowego: najpierw rozumiem proces, klienta i cel, liczę, gdzie ginie czas i pieniądze, a dopiero potem dobieram technologię.",
        points: [
          "Ta sama osoba robi analizę, prototyp, wdrożenie i utrzymanie — nic nie ginie po drodze.",
          "Narzędzia AI przyspieszają moją pracę, więc płacisz za efekt, a nie za godziny.",
          "Kod, konta i dane są Twoje od pierwszego dnia. Bez uzależnienia od wykonawcy.",
        ],
        name: "Michał Lipka",
        role: "Programista i analityk biznesowy, ML DevWorks",
        place: "Kraków · pracuję z firmami z całej Polski",
        linkedin: "Mój profil na LinkedIn",
      }
    : {
        eyebrow: "Who you work with",
        title: "You don't talk to a salesperson. You work directly with the developer responsible for the project.",
        lead: "I combine the roles of developer and business analyst: first I understand the process, the customer, and the goal, calculate where time and money are lost, and only then choose the technology.",
        points: [
          "The same person runs analysis, prototype, delivery, and maintenance — nothing gets lost on the way.",
          "AI tools speed up my work, so you pay for the result, not for hours.",
          "Code, accounts, and data are yours from day one. No vendor lock-in.",
        ],
        name: "Michał Lipka",
        role: "Developer and business analyst, ML DevWorks",
        place: "Krakow, Poland · working with companies remotely",
        linkedin: "My LinkedIn profile",
      };

  return (
    <Section labelledBy="about-intro-heading" tone="muted">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <figure className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-accent/20 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/ja.webp"
              alt={isPl ? "Michał Lipka, programista i analityk biznesowy z Krakowa" : "Michał Lipka, developer and business analyst from Krakow"}
              width={900}
              height={1125}
              sizes="(min-width: 1024px) 380px, 90vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-background/80 px-4 py-3 backdrop-blur-md">
              <p className="font-display text-base font-semibold text-white">{t.name}</p>
              <p className="text-xs text-gray-400">{t.role}</p>
            </figcaption>
          </div>
        </figure>

        <div>
          <p className="eyebrow mb-5">
            <span className="eyebrow-dot" aria-hidden="true" />
            {t.eyebrow}
          </p>
          <h2 id="about-intro-heading" className="section-heading">
            {t.title}
          </h2>
          <p className="section-lead mt-5">{t.lead}</p>
          <ul className="mt-8 space-y-4">
            {t.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[1rem] leading-relaxed text-gray-200">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <CheckIcon size={14} strokeWidth={2.6} />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer me" className="btn-secondary !px-5 !py-3 !text-sm">
              <LinkedInIcon size={18} className="text-[#0a66c2]" />
              {t.linkedin}
            </a>
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <PinIcon size={16} className="text-primary" />
              {t.place}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
