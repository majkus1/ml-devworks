import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";
import HeroWorkflow from "@/components/HeroWorkflow";
import { ArrowRightIcon, CheckIcon, SparkIcon, StarIcon } from "@/components/ui/icons";

interface HeroProps {
  lang?: "pl" | "en";
}

export default function Hero({ lang = "pl" }: HeroProps) {
  const isPl = lang === "pl";
  const t = isPl
    ? {
        titleStart: "Automatyzacje AI dla firm, które ",
        titleHighlight: "oddają zespołowi godziny pracy",
        lead: "Zdejmuję z zespołu powtarzalną pracę: odpowiadanie na zapytania, przepisywanie danych, raporty. Opisujesz proces, a w 2–5 dni pokazuję działający prototyp — za darmo, zanim cokolwiek zapłacisz.",
        ctaPrimary: "Odbierz bezpłatny prototyp",
        ctaSecondary: "Zapytaj AI, co zautomatyzować",
        points: ["Prototyp w 2–5 dni", "Od 2 500 zł netto", "Bezpośrednio z programistą"],
        rating: "5,0 w opiniach Google",
        person: "Michał Lipka · programista i analityk biznesowy",
      }
    : {
        titleStart: "AI automation for companies that ",
        titleHighlight: "gives your team hours back",
        lead: "I take repetitive work off your team: answering enquiries, retyping data, building reports. Describe the process and within 2–5 days I'll show a working prototype — free, before you pay anything.",
        ctaPrimary: "Get a free prototype",
        ctaSecondary: "Ask AI what to automate",
        points: ["Prototype in 2–5 days", "From PLN 2,500 net", "Directly with the developer"],
        rating: "5.0 on Google reviews",
        person: "Michał Lipka · developer and business analyst",
      };

  return (
    <header className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36" role="banner">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -top-48 left-[10%] h-[36rem] w-[50rem] rounded-full bg-primary/[0.10] blur-[130px]" />
        <div className="absolute right-[-10rem] top-32 h-[28rem] w-[28rem] rounded-full bg-accent/[0.08] blur-[120px]" />
      </div>

      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div>
          <h1 className="font-display text-[2.5rem] font-semibold leading-[1.04] tracking-tight text-white text-balance sm:text-6xl lg:text-[3.7rem] xl:text-[4rem]">
            {t.titleStart}
            <span className="text-gradient">{t.titleHighlight}</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-gray-300 text-pretty md:text-xl">{t.lead}</p>

          <nav aria-label={isPl ? "Główne wezwania do działania" : "Primary calls to action"} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary !px-7 !py-4">
              {t.ctaPrimary}
              <ArrowRightIcon size={18} />
            </a>
            <OpenAssistantButton fallbackHref="#ai-advisor" className="btn-secondary !px-7 !py-4">
              <SparkIcon size={18} className="text-primary" />
              {t.ctaSecondary}
            </OpenAssistantButton>
          </nav>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
            {t.points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-gray-300">
                <CheckIcon size={16} className="text-primary" />
                {point}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/[0.07] pt-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="flex text-amber-400">
                {[0, 1, 2, 3, 4].map((index) => (
                  <StarIcon key={index} size={14} />
                ))}
              </span>
              {t.rating}
            </span>
            <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
            <span>{t.person}</span>
          </div>
        </div>

        <HeroWorkflow lang={lang} />
      </div>

    </header>
  );
}
