import Link from "next/link";
import type { SiteLang } from "@/lib/services";
import { solutions } from "@/lib/solutions";

/** Blok „gotowe rozwiązania dla branż” — linkuje strony niszowe z usług i huba. */
export default function SolutionLinks({ lang }: { lang: SiteLang }) {
  const isEnglish = lang === "en";

  return (
    <section className="px-4 py-16" aria-labelledby="solutions-heading">
      <div className="max-w-6xl mx-auto">
        <h2 id="solutions-heading" className="section-heading mb-4">
          {isEnglish ? "Ready-made solutions for specific industries" : "Gotowe rozwiązania dla branż"}
        </h2>
        <p className="section-lead mb-10">
          {isEnglish
            ? "Proven workflows I adapt to your company. You see a working prototype first, then decide."
            : "Sprawdzone schematy, które dopasowuję do Twojej firmy. Najpierw widzisz działający prototyp, potem decydujesz."}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((solution) => {
            const content = solution.content[lang];
            return (
              <article
                key={solution.id}
                className="bg-background-lighter border border-primary/20 rounded-xl p-6 md:p-8 hover:border-primary/50 transition-colors flex flex-col"
              >
                <p className="text-sm font-semibold text-primary mb-3">{content.eyebrow}</p>
                <h3 className="text-2xl font-bold text-white mb-3">{content.breadcrumb}</h3>
                <p className="text-gray-300 leading-relaxed mb-6 flex-1">{content.lead}</p>
                <Link href={solution.href[lang]} className="inline-flex text-primary hover:text-primary-light font-semibold">
                  {isEnglish ? "See how it works" : "Zobacz, jak to działa"}
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
