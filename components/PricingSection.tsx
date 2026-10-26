import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

interface PricingSectionProps {
  lang?: "pl" | "en";
}

interface Tier {
  name: string;
  price: string;
  time: string;
  text: string;
  points: string[];
  href: string;
  featured?: boolean;
}

/**
 * Ceny „od” na stronie głównej. Odpowiada wprost na najczęstsze pytanie z Google
 * („ile kosztuje automatyzacja…”) i pokazuje, że wycena jest przewidywalna.
 */
export default function PricingSection({ lang = "pl" }: PricingSectionProps) {
  const isPl = lang === "pl";

  const tiers: Tier[] = isPl
    ? [
        {
          name: "Automatyzacja procesu",
          price: "od 2 500 zł",
          time: "3–14 dni roboczych",
          text: "Jeden powtarzalny proces: zapytania i leady, faktury z maila, raporty albo przepisywanie danych między systemami.",
          points: ["Agent AI lub integracja Twoich narzędzi", "Prototyp przed decyzją", "Pomiar efektu „przed i po”"],
          href: "/uslugi/automatyzacja-i-ai",
          featured: true,
        },
        {
          name: "Strona firmowa",
          price: "od 3 500 zł",
          time: "1–3 tygodnie",
          text: "Szybka strona, która tłumaczy ofertę, pokazuje się w Google i zamienia odwiedzających w zapytania.",
          points: ["Projekt pod Twoich klientów", "Szybka na telefonie i przygotowana pod Google", "Formularz prosto do skrzynki lub CRM"],
          href: "/uslugi/strony-internetowe",
        },
        {
          name: "Aplikacja lub panel dla firmy",
          price: "od 12 000 zł",
          time: "2–8 tygodni (pierwsza wersja)",
          text: "Panel klienta, system zapisów lub terminów, aplikacja mobilna dla pracowników albo narzędzie wewnętrzne.",
          points: ["Web i mobile (iOS, Android)", "Role, raporty, powiadomienia", "Kod i dane należą do Ciebie"],
          href: "/uslugi/aplikacje-internetowe-i-mobilne",
        },
      ]
    : [
        {
          name: "Process automation",
          price: "from PLN 2,500",
          time: "3–14 business days",
          text: "One repetitive process: enquiries and leads, invoices from email, reports, or copying data between systems.",
          points: ["AI agent or integration of your tools", "Prototype before you decide", "Before/after effect measured"],
          href: "/en/services/automation-and-ai",
          featured: true,
        },
        {
          name: "Business website",
          price: "from PLN 3,500",
          time: "1–3 weeks",
          text: "A fast website that explains the offer and collects enquiries: technical SEO, forms, analytics.",
          points: ["Designed for your customers", "Fast loading and technical SEO", "Form straight to your inbox or CRM"],
          href: "/en/services/web-development",
        },
        {
          name: "Business app or portal",
          price: "from PLN 12,000",
          time: "2–8 weeks (first version)",
          text: "A customer portal, enrolment or deadline system, a mobile app for employees, or an internal tool.",
          points: ["Web and mobile (iOS, Android)", "Roles, reports, notifications", "Code and data belong to you"],
          href: "/en/services/web-and-mobile-applications",
        },
      ];

  const extras = isPl
    ? [
        ["System rezerwacji online", "od 6 000 zł", "/uslugi/systemy-rezerwacji-online"],
        ["Sklep internetowy", "od 7 000 zł", "/uslugi/sklepy-internetowe-systemy-rezerwacji"],
        ["Naprawy, SEO i utrzymanie", "od 1 500 zł", "/uslugi/naprawa-optymalizacja-utrzymanie"],
      ]
    : [
        ["Online booking system", "from PLN 6,000", "/en/services/online-booking-systems"],
        ["Online store", "from PLN 7,000", "/en/services/online-stores-booking-systems"],
        ["Fixes, SEO, and maintenance", "from PLN 1,500", "/en/services/fixes-optimization-maintenance"],
      ];

  return (
    <Section id="pricing" labelledBy="pricing-heading">
      <SectionHeader
        id="pricing-heading"
        eyebrow={isPl ? "Ceny" : "Pricing"}
        title={isPl ? "Ile kosztuje automatyzacja, strona albo aplikacja?" : "How much do automation, a website, or an app cost?"}
        lead={
          isPl
            ? "Orientacyjne ceny netto. Dokładną kwotę i zakres znasz przed startem — po bezpłatnym prototypie, bez abonamentu i ukrytych kosztów."
            : "Indicative net prices. You know the exact amount and scope before we start — after the free prototype, with no subscription or hidden costs."
        }
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`relative flex flex-col rounded-2xl border p-7 ${
              tier.featured ? "border-primary/40 bg-gradient-to-b from-primary/[0.10] to-white/[0.02] shadow-glow" : "border-white/[0.08] bg-white/[0.025]"
            }`}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-[#03140b]">
                {isPl ? "Najczęściej wybierane" : "Most popular"}
              </span>
            )}
            <h3 className="font-sans text-lg font-semibold text-white">{tier.name}</h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold tracking-tight text-white">{tier.price}</span>
              <span className="text-sm text-gray-500">{isPl ? "netto" : "net"}</span>
            </p>
            <p className="mt-1 text-sm text-gray-400">{tier.time}</p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-gray-300">{tier.text}</p>
            <ul className="mt-5 space-y-2.5">
              {tier.points.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-gray-300">
                  <CheckIcon size={16} className="mt-0.5 shrink-0 text-primary" />
                  {point}
                </li>
              ))}
            </ul>
            <Link href={tier.href} className={`${tier.featured ? "btn-primary" : "btn-secondary"} mt-7 w-full`}>
              {isPl ? "Zobacz szczegóły" : "See details"}
              <ArrowRightIcon size={16} />
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {extras.map(([label, price, href]) => (
          <Link key={href} href={href} className="group flex items-center justify-between rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 transition-colors hover:border-primary/30">
            <span className="text-sm text-gray-300 group-hover:text-white">{label}</span>
            <span className="text-sm font-semibold text-white">{price}</span>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-400">
        {isPl ? "Chcesz policzyć, czy to się opłaca? " : "Want to check whether it pays off? "}
        <Link
          href={
            isPl
              ? "/blog/ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi"
              : "/en/blog/how-much-does-business-process-automation-cost-and-how-to-calculate-roi"
          }
          className="btn-link"
        >
          {isPl ? "Ile kosztuje automatyzacja i jak policzyć zwrot" : "Automation cost and how to calculate ROI"}
          <ArrowRightIcon size={15} />
        </Link>
      </p>
    </Section>
  );
}
