import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import AboutIntro from "@/components/AboutIntro";
import PricingSection from "@/components/PricingSection";
import CtaBand from "@/components/ui/CtaBand";
import { FeatureGrid } from "@/components/ServiceSections";
import { ArrowRightIcon, CheckIcon, SparkIcon } from "@/components/ui/icons";

/** Strona lokalna „Programista Kraków” (PL) i „Software developer Krakow” (EN). */
export default function LocalDeveloperContent({ lang }: { lang: "pl" | "en" }) {
  const isPl = lang === "pl";

  const approach = isPl
    ? [
        { title: "Analiza celu", text: "Ustalam, co rozwiązanie ma realnie poprawić: sprzedaż, obsługę klienta, czas pracy albo jakość procesu." },
        { title: "Priorytety wdrożenia", text: "Wybieramy funkcje, które mają największy sens na start, zamiast budować wszystko naraz." },
        { title: "Technologia pod wynik", text: "Dobieram stronę, aplikację, integrację albo automatyzację AI do problemu, a nie odwrotnie." },
      ]
    : [
        { title: "Goal analysis", text: "I clarify what the solution should really improve: sales, customer service, team time, or process quality." },
        { title: "Implementation priorities", text: "We pick the features that make the most sense first instead of building everything at once." },
        { title: "Technology for the outcome", text: "I choose a website, app, integration, or AI automation for the problem, not the other way round." },
      ];

  const services = isPl
    ? [
        { title: "Automatyzacja AI", text: "Agenci AI, workflow, integracje API, automatyczne raporty i mniej pracy ręcznej.", href: "/uslugi/automatyzacja-i-ai", highlight: true },
        { title: "Aplikacje dla firm", text: "Panele klienta, systemy wewnętrzne, MVP oraz aplikacje webowe i mobilne.", href: "/uslugi/aplikacje-internetowe-i-mobilne" },
        { title: "Strony internetowe", text: "Szybkie strony firmowe i landing page pod lokalne SEO i zapytania.", href: "/uslugi/strony-internetowe" },
        { title: "Systemy rezerwacji", text: "Kalendarz dostępności, płatności online, przypomnienia i integracje z CRM.", href: "/uslugi/systemy-rezerwacji-online" },
        { title: "DevOps", text: "CI/CD, Docker, wdrożenia w chmurze, monitoring i kopie zapasowe.", href: "/uslugi/devops-wdrozenia" },
        { title: "Utrzymanie i naprawy", text: "Przejęcie projektu po innym wykonawcy, poprawki, Core Web Vitals i SEO techniczne.", href: "/uslugi/naprawa-optymalizacja-utrzymanie" },
      ]
    : [
        { title: "AI automation", text: "AI agents, workflows, API integrations, automated reports, and less manual work.", href: "/en/services/automation-and-ai", highlight: true },
        { title: "Business applications", text: "Customer portals, internal systems, MVPs, and web and mobile apps.", href: "/en/services/web-and-mobile-applications" },
        { title: "Websites", text: "Fast business websites and landing pages built for local SEO and enquiries.", href: "/en/services/web-development" },
        { title: "Booking systems", text: "Availability calendar, online payments, reminders, and CRM integrations.", href: "/en/services/online-booking-systems" },
        { title: "DevOps", text: "CI/CD, Docker, cloud deployment, monitoring, and backups.", href: "/en/services/devops-deployment" },
        { title: "Maintenance and fixes", text: "Taking over projects from other vendors, fixes, Core Web Vitals, and technical SEO.", href: "/en/services/fixes-optimization-maintenance" },
      ];

  const localList = isPl
    ? ["Aplikacje mobilne dla pracowników terenowych i serwisu", "Systemy rezerwacji dla gabinetów, salonów i usług lokalnych", "Integracje CRM/ERP i panele klienta", "Strony firmowe pod lokalne SEO"]
    : ["Mobile apps for field staff and service teams", "Booking systems for clinics, salons, and local services", "CRM/ERP integrations and customer portals", "Business websites for local SEO"];

  return (
    <>
      <PageHero
        lang={lang}
        breadcrumbs={[{ label: isPl ? "Strona główna" : "Home", href: isPl ? "/" : "/en" }, { label: isPl ? "Programista Kraków" : "Software developer Krakow" }]}
        eyebrow={isPl ? "Programista Kraków" : "Software developer · Krakow"}
        title={
          isPl ? (
            <>
              Programista z Krakowa, który <span className="text-gradient">rozumie technologię i biznes</span>
            </>
          ) : (
            <>
              A Krakow software developer who <span className="text-gradient">understands technology and business</span>
            </>
          )
        }
        lead={
          isPl
            ? "Automatyzacje AI, aplikacje, systemy rezerwacji, integracje i strony dla firm z Krakowa i całej Polski. Najpierw rozumiem cel, proces i klienta, potem dobieram rozwiązanie."
            : "AI automation, apps, booking systems, integrations, and websites for companies in Krakow and across Poland. I understand the goal, process, and customer first, then choose the solution."
        }
        facts={
          isPl
            ? [
                { label: "Biuro", value: "Rynek Główny 34/15, Kraków" },
                { label: "Współpraca", value: "na miejscu lub zdalnie" },
                { label: "Start", value: "prototyp w 2–5 dni, gratis" },
              ]
            : [
                { label: "Office", value: "Rynek Główny 34/15, Krakow" },
                { label: "Cooperation", value: "on site or remotely" },
                { label: "Start", value: "prototype in 2–5 days, free" },
              ]
        }
      />

      <AboutIntro lang={lang} />

      <FeatureGrid
        id="local-services"
        eyebrow={isPl ? "Usługi" : "Services"}
        title={isPl ? "Co tworzę dla firm z Krakowa i okolic" : "What I build for companies in and around Krakow"}
        items={services}
        columns={3}
        moreLabel={isPl ? "Zobacz usługę" : "View service"}
      />

      <Section id="krakow-automation" tone="muted" labelledBy="krakow-automation-heading">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-14">
          <div>
            <SectionHeader
              id="krakow-automation-heading"
              eyebrow={isPl ? "Automatyzacja AI Kraków" : "AI automation Krakow"}
              title={isPl ? "Automatyzacja AI w Krakowie: wdrożenia dla lokalnych firm" : "AI automation in Krakow: implementations for local companies"}
              lead={
                isPl
                  ? "Firmy z Krakowa i Małopolski najczęściej pytają o automatyzację obsługi zapytań i zgłoszeń, integrację CRM z formularzami i sklepem, automatyczne raporty oraz agentów AI, którzy odciążają biuro. Wdrażam takie rozwiązania od 2 500 zł netto, a pierwsze efekty widać po 3–14 dniach roboczych."
                  : "Companies in Krakow and Lesser Poland most often ask about automating enquiries and tickets, connecting the CRM with forms and the store, automated reports, and AI agents that relieve the office. I deliver these from PLN 2,500 net, with first results after 3–14 business days."
              }
              className="!mb-8"
            />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href={isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai"} className="btn-primary">
                {isPl ? "Automatyzacje AI dla firm" : "AI automation for companies"}
                <ArrowRightIcon size={18} />
              </Link>
              <Link href={isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor"} className="btn-secondary">
                <SparkIcon size={18} className="text-primary" />
                {isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor"}
              </Link>
            </div>
          </div>
          <div className="card">
            <h3 className="font-sans text-lg font-semibold text-white">{isPl ? "Najczęściej dla firm z Krakowa" : "Most often for Krakow companies"}</h3>
            <ul className="mt-5 space-y-3">
              {localList.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-gray-300">
                  <CheckIcon size={16} className="mt-1 shrink-0 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-white/[0.08] pt-5 text-sm leading-relaxed text-gray-400">
              {isPl
                ? "Mogę spotkać się na miejscu w Krakowie, żeby przejść przez proces z zespołem, a wdrożenie i utrzymanie prowadzić zdalnie."
                : "I can meet on site in Krakow to walk through the process with your team, and run delivery and maintenance remotely."}
            </p>
          </div>
        </div>
      </Section>

      <FeatureGrid
        id="business-approach"
        eyebrow={isPl ? "Podejście" : "Approach"}
        title={isPl ? "Biznesowe podejście do programowania" : "A business-first approach to software"}
        items={approach}
        columns={3}
      />

      <PricingSection lang={lang} />
      <CtaBand lang={lang} />
    </>
  );
}
