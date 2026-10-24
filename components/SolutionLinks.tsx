import Link from "next/link";
import type { SiteLang } from "@/lib/services";
import { solutions } from "@/lib/solutions";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRightIcon } from "@/components/ui/icons";

/** Blok „gotowe rozwiązania dla branż” — linkuje strony niszowe z usług i huba. */
export default function SolutionLinks({ lang }: { lang: SiteLang }) {
  const isEnglish = lang === "en";

  return (
    <Section id="solutions" labelledBy="solutions-heading">
      <SectionHeader
        id="solutions-heading"
        eyebrow={isEnglish ? "Ready-made solutions" : "Gotowe rozwiązania"}
        title={isEnglish ? "Ready-made solutions for specific industries" : "Gotowe rozwiązania dla branż"}
        lead={
          isEnglish
            ? "Proven workflows I adapt to your company. You see a working prototype first, then decide."
            : "Sprawdzone schematy, które dopasowuję do Twojej firmy. Najpierw widzisz działający prototyp, potem decydujesz."
        }
      />
      <div className="grid gap-5 md:grid-cols-2">
        {solutions.map((solution) => {
          const content = solution.content[lang];
          return (
            <Link key={solution.id} href={solution.href[lang]} className="card-interactive group flex flex-col">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">{content.eyebrow}</p>
              <h3 className="mt-3 font-sans text-2xl font-semibold text-white">{content.breadcrumb}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-gray-400">{content.lead}</p>
              <span className="btn-link mt-6">
                {isEnglish ? "See how it works" : "Zobacz, jak to działa"}
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
