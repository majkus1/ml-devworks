import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { ArrowRightIcon, CheckIcon, PinIcon } from "@/components/ui/icons";
import { BeforeAfter, FeatureGrid } from "@/components/ServiceSections";

type Lang = "pl" | "en";

/** Agencja automatyzacji AI czy programista — porównanie (odpowiada na zapytania „agencja automatyzacji ai”). */
export function AgencyComparison({ lang }: { lang: Lang }) {
  const isPl = lang === "pl";
  const rows: [string, string, string][] = isPl
    ? [
        ["Na czym działa", "Gotowe scenariusze w narzędziach no-code", "Kod i integracje dopasowane do procesu"],
        ["Rozliczenie", "Abonament, często za każdy krok lub zadanie", "Jednorazowo za wdrożenie, bez abonamentu"],
        ["Własność", "Konto i scenariusze u dostawcy", "Kod, konta i dane należą do Ciebie"],
        ["Złożona logika i Twój system", "Często ściana: brak API albo limitów", "Integracja z Twoim CRM, ERP lub bazą"],
        ["Z kim rozmawiasz", "Handlowiec, potem zespół wdrożeniowy", "Bezpośrednio z programistą"],
      ]
    : [
        ["What it runs on", "Ready-made scenarios in no-code tools", "Code and integrations tailored to the process"],
        ["Billing", "Subscription, often per step or task", "One-off for delivery, no subscription"],
        ["Ownership", "Account and scenarios held by the vendor", "Code, accounts, and data belong to you"],
        ["Complex logic and your system", "Often a wall: no API or usage limits", "Integration with your CRM, ERP, or database"],
        ["Who you talk to", "A salesperson, then a delivery team", "Directly with the developer"],
      ];

  return (
    <Section id="agency" labelledBy="agency-heading">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div>
          <SectionHeader
            id="agency-heading"
            eyebrow={isPl ? "Agencja czy programista" : "Agency or developer"}
            title={isPl ? "Agencja automatyzacji AI czy programista?" : "AI automation agency or a developer?"}
            lead={
              isPl
                ? "Agencja automatyzacji zwykle sprzedaje gotowe scenariusze w narzędziach no-code i abonament. To działa przy prostych przepływach. Gdy proces wymaga logiki, Twojego systemu albo kontroli nad danymi, lepiej sprawdza się automatyzacja zbudowana jako kod, który należy do Ciebie."
                : "An automation agency usually sells ready-made scenarios in no-code tools plus a subscription. That works for simple flows. When the process needs logic, your system, or control over data, automation built as code you own works better."
            }
            className="!mb-6"
          />
          <Link
            href={isPl ? "/blog/agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce" : "/en/blog/ai-automation-agency-or-developer-how-to-choose-a-vendor"}
            className="btn-link"
          >
            {isPl ? "Jak wybrać wykonawcę automatyzacji" : "How to choose an automation vendor"}
            <ArrowRightIcon size={16} />
          </Link>
          <div className="card mt-8 !p-5">
            <p className="flex items-center gap-2 font-semibold text-white">
              <PinIcon size={17} className="text-primary" />
              {isPl ? "Automatyzacja AI w Krakowie i zdalnie" : "AI automation in Krakow and remotely"}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-400">
              {isPl
                ? "Biuro przy Rynku Głównym 34/15 w Krakowie. Pracuję zdalnie z firmami z całej Polski — spotkanie, wideo albo e-mail, proces jest ten sam."
                : "Office at Rynek Główny 34/15 in Krakow. I work remotely with companies across Poland and the EU — meeting, video, or email, the process is the same."}
            </p>
            <Link href={isPl ? "/programista-krakow" : "/en/software-developer-krakow"} className="btn-link mt-3 text-sm">
              {isPl ? "Programista z Krakowa" : "Software developer in Krakow"}
              <ArrowRightIcon size={15} />
            </Link>
          </div>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-white/[0.08]">
          <div className="min-w-[560px]">
          <div className="grid grid-cols-[1fr_1fr_1fr] bg-white/[0.04] text-xs font-semibold uppercase tracking-[0.1em] text-gray-400">
            <span className="px-4 py-3" />
            <span className="px-4 py-3">{isPl ? "Typowa agencja" : "Typical agency"}</span>
            <span className="px-4 py-3 text-primary">ML DevWorks</span>
          </div>
          {rows.map(([label, agency, me]) => (
            <div key={label} className="grid grid-cols-[1fr_1fr_1fr] border-t border-white/[0.06] text-sm">
              <span className="px-4 py-4 font-medium text-white">{label}</span>
              <span className="px-4 py-4 text-gray-500">{agency}</span>
              <span className="flex items-start gap-2 bg-primary/[0.05] px-4 py-4 text-gray-200">
                <CheckIcon size={15} className="mt-0.5 shrink-0 text-primary" />
                {me}
              </span>
            </div>
          ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/** Natywna, cross-platform czy PWA — dla strony aplikacji mobilnych. */
export function MobileTechComparison({ lang }: { lang: Lang }) {
  const isPl = lang === "pl";
  return (
    <FeatureGrid
      id="mobile-tech"
      eyebrow={isPl ? "Technologia" : "Technology"}
      title={isPl ? "Natywna, cross-platform czy PWA?" : "Native, cross-platform, or PWA?"}
      lead={
        isPl
          ? "Dobieram technologię do budżetu i funkcji, a nie odwrotnie. Dla większości aplikacji firmowych wystarcza jedna baza kodu na iOS i Android."
          : "I choose the technology to fit the budget and features, not the other way round. For most business apps one codebase for iOS and Android is enough."
      }
      columns={3}
      items={
        isPl
          ? [
              {
                title: "Cross-platform (React Native)",
                tag: "Najczęstszy wybór",
                highlight: true,
                text: "Jedna aplikacja na iOS i Android przy niższym koszcie i szybszym wdrożeniu.",
                points: ["Jedna baza kodu", "Niższy koszt utrzymania", "Wystarcza dla większości aplikacji firmowych"],
              },
              {
                title: "Natywna (Swift / Kotlin)",
                tag: "Gdy potrzebna",
                text: "Maksymalna wydajność i pełny dostęp do sprzętu — dla nietypowych funkcji.",
                points: ["AR, Bluetooth, sensory", "Dwie bazy kodu", "Uzasadniona przy produktach konsumenckich"],
              },
              {
                title: "PWA / aplikacja webowa",
                tag: "Tańszy start",
                text: "Bez publikacji w sklepach, z ikoną na telefonie i powiadomieniami.",
                points: ["Najtańszy start", "Ograniczona praca offline", "Dobry etap przed pełną aplikacją"],
              },
            ]
          : [
              {
                title: "Cross-platform (React Native)",
                tag: "Most common choice",
                highlight: true,
                text: "One app for iOS and Android at a lower cost and with faster delivery.",
                points: ["One codebase", "Lower maintenance cost", "Enough for most business apps"],
              },
              {
                title: "Native (Swift / Kotlin)",
                tag: "When required",
                text: "Maximum performance and full hardware access — for unusual features.",
                points: ["AR, Bluetooth, sensors", "Two codebases", "Justified for consumer products"],
              },
              {
                title: "PWA / web app",
                tag: "Cheaper start",
                text: "No app store publishing, with a home-screen icon and notifications.",
                points: ["Lowest entry cost", "Limited offline mode", "A good stage before a full app"],
              },
            ]
      }
    />
  );
}

/** DevOps: co zmienia się po wdrożeniu. */
export function DevopsBeforeAfter({ lang }: { lang: Lang }) {
  const isPl = lang === "pl";
  return (
    <BeforeAfter
      id="devops-before-after"
      lang={lang}
      title={isPl ? "DevOps w chmurze: co zmienia się po wdrożeniu" : "DevOps in the cloud: what changes after implementation"}
      lead={
        isPl
          ? "Nie chodzi o zmianę narzędzi dla samej zmiany. Chodzi o to, żeby publikacja nowej wersji była nudna i przewidywalna."
          : "It's not about changing tools for the sake of it. It's about making a new release boring and predictable."
      }
      rows={
        isPl
          ? [
              ["Publikacja nowej wersji", "Ręczne kroki, jedna osoba wie jak, wdrożenie po godzinach", "Automatycznie po zatwierdzeniu zmian, w kilka minut"],
              ["Błąd na produkcji", "Klient zgłasza problem pierwszy", "Alert przychodzi, zanim zauważy go klient"],
              ["Kopie zapasowe", "Są, ale nikt nie sprawdzał, czy da się z nich odtworzyć system", "Automatyczne, z przetestowanym przywracaniem"],
              ["Koszty chmury", "Rosną z miesiąca na miesiąc bez kontroli", "Widoczne, z limitami i alertami budżetowymi"],
            ]
          : [
              ["Releasing a new version", "Manual steps, one person knows how, deployments after hours", "Automatic after changes are approved, in minutes"],
              ["Production bug", "The customer reports it first", "An alert arrives before the customer notices"],
              ["Backups", "They exist, but nobody checked if the system can be restored", "Automatic, with tested restores"],
              ["Cloud costs", "Growing month after month without control", "Visible, with limits and budget alerts"],
            ]
      }
    />
  );
}
