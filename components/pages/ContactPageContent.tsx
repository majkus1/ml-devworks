import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import AiAssistantSection from "@/components/ai-assistant/AiAssistantSection";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/ui/icons";

const MAPS_URL =
  "https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu";

/** Strona kontaktu: dane od razu pod nagłówkiem (także na telefonie), potem asystent AI, wskazówki i formularz. */
export default function ContactPageContent({ lang, briefTips }: { lang: "pl" | "en"; briefTips: string[][] }) {
  const isPl = lang === "pl";

  const cards = [
    { icon: MailIcon, label: "E-mail", value: "office@ml-devworks.com", href: "mailto:office@ml-devworks.com", external: false },
    { icon: PhoneIcon, label: isPl ? "Telefon" : "Phone", value: "+48 516 598 792", href: "tel:+48516598792", external: false },
    { icon: PinIcon, label: isPl ? "Adres (Kraków)" : "Address (Krakow)", value: "Rynek Główny 34/15, 31-010 Kraków", href: MAPS_URL, external: true },
  ];

  return (
    <>
      <header className="relative overflow-hidden pt-24 md:pt-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="bg-grid absolute inset-0" />
          <div className="absolute -top-40 left-1/2 h-[30rem] w-[56rem] -translate-x-1/2 rounded-full bg-primary/[0.09] blur-[120px]" />
        </div>
        <div className="container-site relative pb-10 md:pb-16">
          <Breadcrumbs className="mb-5 md:mb-8" items={[{ label: isPl ? "Strona główna" : "Home", href: isPl ? "/" : "/en" }, { label: isPl ? "Kontakt" : "Contact" }]} />
          <h1 className="font-display text-[2.2rem] font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {isPl ? "Kontakt z ML DevWorks" : "Contact ML DevWorks"}
          </h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-gray-300 md:mt-6 md:text-xl">
            {/* Na telefonie skrócony tekst, żeby dane kontaktowe były od razu widoczne. */}
            {isPl ? "Napisz, zadzwoń albo zapytaj asystenta AI, co da się zautomatyzować w Twojej firmie." : "Write, call, or ask the AI advisor what can be automated in your company."}
            <span className="hidden md:inline">
              {isPl
                ? " Pracujesz bezpośrednio ze mną, Michałem Lipką — programistą z Krakowa."
                : " You work directly with me, Michał Lipka, a developer from Krakow."}
            </span>
          </p>

          <div className="mt-6 grid gap-3 md:mt-10 md:grid-cols-3 md:gap-4">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <a
                  key={card.label}
                  href={card.href}
                  {...(card.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card-interactive group flex items-center gap-4 !p-4 md:!p-5"
                >
                  <span className="icon-tile">
                    <Icon size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-[0.12em] text-gray-500">{card.label}</span>
                    <span className="mt-0.5 block break-words text-base font-semibold text-white transition-colors group-hover:text-primary">{card.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </header>

      <AiAssistantSection lang={lang} />

      <Section id="brief" tone="muted" labelledBy="brief-heading">
        <SectionHeader
          id="brief-heading"
          eyebrow={isPl ? "Dobry opis" : "A good brief"}
          title={isPl ? "Co napisać, żeby dostać prototyp" : "What to write to get a prototype"}
          lead={
            isPl
              ? "Im lepszy opis, tym szybciej wracam z konkretem. Nie potrzebuję specyfikacji — wystarczą odpowiedzi na cztery pytania:"
              : "The better the description, the faster I come back with something concrete. No specification needed — answers to four questions are enough:"
          }
        />
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {briefTips.map(([title, text], index) => (
            <li key={title} className="card">
              <span className="font-display text-sm font-semibold text-primary" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-sans text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 leading-relaxed text-gray-400">{text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-gray-400">
          {isPl ? "Nie wiesz, którą usługę wybrać? Zobacz " : "Not sure which service to choose? See "}
          <Link href={isPl ? "/uslugi" : "/en/services"} className="text-primary underline-offset-4 hover:underline">
            {isPl ? "wszystkie usługi i ceny" : "all services and prices"}
          </Link>
          {isPl ? " albo przeczytaj, jak " : " or read how to "}
          <Link
            href={
              isPl
                ? "/blog/kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy"
                : "/en/blog/comprehensive-software-services-for-businesses-how-to-match-solutions-to-industry"
            }
            className="text-primary underline-offset-4 hover:underline"
          >
            {isPl ? "dobrać rozwiązanie do branży" : "match the solution to your industry"}
          </Link>
          .
        </p>
      </Section>

      <Contact lang={lang} />
    </>
  );
}
