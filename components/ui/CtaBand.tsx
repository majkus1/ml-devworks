import Link from "next/link";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";
import { ArrowRightIcon, CheckIcon, MailIcon, PhoneIcon, SparkIcon } from "@/components/ui/icons";

interface CtaBandProps {
  lang?: "pl" | "en";
  title?: string;
  text?: string;
}

/**
 * Końcowe wezwanie do działania: ta sama obietnica na każdej podstronie.
 * Klient ma od razu dwie drogi: formularz albo asystent AI, plus telefon i e-mail.
 */
export default function CtaBand({ lang = "pl", title, text }: CtaBandProps) {
  const isPl = lang === "pl";
  const points = isPl
    ? ["Działający prototyp w 2–5 dni", "Za darmo, bez zobowiązań", "Cena znana przed startem"]
    : ["A working prototype in 2–5 days", "Free, no commitment", "Price agreed before we start"];

  return (
    <section className="section-y relative" aria-labelledby="cta-band-heading">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-br from-[#0d1a14] via-background-light to-[#0a1418] px-6 py-12 md:px-14 md:py-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-[90px]" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-accent/10 blur-[90px]" aria-hidden="true" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <h2 id="cta-band-heading" className="section-heading">
                {title ?? (isPl ? "Opisz proces. Pokażę, jak może działać — zanim zapłacisz." : "Describe the process. I'll show how it can work — before you pay.")}
              </h2>
              <p className="section-lead mt-4">
                {text ??
                  (isPl
                    ? "Wystarczy kilka zdań: co dziś robicie ręcznie i ile to zajmuje. Wrócę z działającym prototypem, zakresem i ceną."
                    : "A few sentences are enough: what you do manually today and how long it takes. I'll come back with a working prototype, scope, and price.")}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-200">
                    <CheckIcon size={16} className="text-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3">
              <Link href={isPl ? "/kontakt" : "/en/contact"} className="btn-primary w-full">
                {isPl ? "Opisz projekt" : "Describe your project"}
                <ArrowRightIcon size={18} />
              </Link>
              <OpenAssistantButton fallbackHref={isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor"} className="btn-secondary w-full">
                <SparkIcon size={18} className="text-primary" />
                {isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor"}
              </OpenAssistantButton>
              <div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-gray-400">
                <a href="tel:+48516598792" className="inline-flex items-center gap-1.5 hover:text-white">
                  <PhoneIcon size={15} />
                  +48 516 598 792
                </a>
                <a href="mailto:office@ml-devworks.com" className="inline-flex items-center gap-1.5 hover:text-white">
                  <MailIcon size={15} />
                  office@ml-devworks.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
