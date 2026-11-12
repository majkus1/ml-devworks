import Link from "next/link";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  GlobeIcon,
  CodeIcon,
  SmartphoneIcon,
  ShoppingCartIcon,
  CloudIcon,
  WrenchIcon,
  AutomationIcon,
} from "@/components/icons/ServiceIcons";
import { ArrowRightIcon, CalendarIcon } from "@/components/ui/icons";

interface ServicesProps {
  lang?: "pl" | "en";
  /** Na stronie /uslugi link „Wszystkie usługi” prowadziłby do samej siebie. */
  showAllLink?: boolean;
  title?: string;
}

interface ServiceCardData {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  price: string;
  href: string;
  featured?: boolean;
}

const BookingIcon = ({ className }: { className?: string }) => <CalendarIcon className={className} />;

const services: Record<"pl" | "en", ServiceCardData[]> = {
  pl: [
    {
      icon: AutomationIcon,
      title: "Automatyzacja i agenci AI",
      description: "Agent AI odpowiada na zapytania, odczytuje faktury i dokumenty, przenosi dane między systemami i pilnuje terminów.",
      price: "od 2 500 zł",
      href: "/uslugi/automatyzacja-i-ai",
      featured: true,
    },
    {
      icon: CodeIcon,
      title: "Aplikacje webowe dla firm",
      description: "Panele klienta, systemy wewnętrzne i narzędzia, które zastępują arkusze, maile i ręczne przepisywanie danych.",
      price: "od 12 000 zł",
      href: "/uslugi/aplikacje-internetowe-i-mobilne",
    },
    {
      icon: SmartphoneIcon,
      title: "Aplikacje mobilne",
      description: "Aplikacje iOS i Android dla pracowników w terenie, klientów i serwisu — z panelem i integracjami.",
      price: "od 12 000 zł",
      href: "/uslugi/aplikacje-mobilne-dla-firm",
    },
    {
      icon: GlobeIcon,
      title: "Strony internetowe",
      description: "Szybkie strony firmowe, które jasno tłumaczą ofertę i zamieniają odwiedziny z Google w zapytania.",
      price: "od 3 500 zł",
      href: "/uslugi/strony-internetowe",
    },
    {
      icon: BookingIcon,
      title: "Systemy rezerwacji i zapisów",
      description: "Kalendarz dostępności, płatności online, przypomnienia SMS i e-mail oraz panel do zarządzania.",
      price: "od 6 000 zł",
      href: "/uslugi/systemy-rezerwacji-online",
    },
    {
      icon: ShoppingCartIcon,
      title: "Sklepy internetowe",
      description: "Sklepy B2C i B2B z płatnościami, dostawami i integracją z magazynem, ERP i fakturami.",
      price: "od 7 000 zł",
      href: "/uslugi/sklepy-internetowe-systemy-rezerwacji",
    },
    {
      icon: CloudIcon,
      title: "DevOps i wdrożenia w chmurze",
      description: "Automatyczne wdrożenia, monitoring, kopie zapasowe i porządek w infrastrukturze.",
      price: "od 4 500 zł",
      href: "/uslugi/devops-wdrozenia",
    },
    {
      icon: WrenchIcon,
      title: "Naprawa, SEO i utrzymanie",
      description: "Naprawa błędów, szybsza strona, lepsza widoczność w Google i opieka nad istniejącym projektem.",
      price: "od 1 500 zł",
      href: "/uslugi/naprawa-optymalizacja-utrzymanie",
    },
  ],
  en: [
    {
      icon: AutomationIcon,
      title: "Automation and AI agents",
      description: "An AI agent answers enquiries, reads invoices and documents, moves data between systems, and watches deadlines.",
      price: "from PLN 2,500",
      href: "/en/services/automation-and-ai",
      featured: true,
    },
    {
      icon: CodeIcon,
      title: "Web apps for companies",
      description: "Customer portals, internal systems, and tools that replace spreadsheets, emails, and manual data entry.",
      price: "from PLN 12,000",
      href: "/en/services/web-and-mobile-applications",
    },
    {
      icon: SmartphoneIcon,
      title: "Mobile apps",
      description: "iOS and Android apps for field employees, customers, and service teams — with an admin panel and integrations.",
      price: "from PLN 12,000",
      href: "/en/services/mobile-apps-for-companies",
    },
    {
      icon: GlobeIcon,
      title: "Websites",
      description: "Fast business websites that explain the offer clearly and turn Google visits into enquiries.",
      price: "from PLN 3,500",
      href: "/en/services/web-development",
    },
    {
      icon: BookingIcon,
      title: "Booking and enrolment systems",
      description: "Availability calendar, online payments, SMS and email reminders, and a management panel.",
      price: "from PLN 6,000",
      href: "/en/services/online-booking-systems",
    },
    {
      icon: ShoppingCartIcon,
      title: "Online stores",
      description: "B2C and B2B stores with payments, shipping, and integration with stock, ERP, and invoicing.",
      price: "from PLN 7,000",
      href: "/en/services/online-stores-booking-systems",
    },
    {
      icon: CloudIcon,
      title: "DevOps and cloud deployment",
      description: "Automated deployments, monitoring, backups, and an orderly infrastructure.",
      price: "from PLN 4,500",
      href: "/en/services/devops-deployment",
    },
    {
      icon: WrenchIcon,
      title: "Fixes, SEO, and maintenance",
      description: "Bug fixes, faster pages, technical SEO, and care for an existing project.",
      price: "from PLN 1,500",
      href: "/en/services/fixes-optimization-maintenance",
    },
  ],
};

export default function Services({ lang = "pl", showAllLink = true, title }: ServicesProps) {
  const isPl = lang === "pl";
  const list = services[lang];

  return (
    <Section id="services" labelledBy="services-heading">
      <SectionHeader
        id="services-heading"
        eyebrow={isPl ? "Usługi" : "Services"}
        title={title ?? (isPl ? "Oprogramowanie i automatyzacje dla firm — od jednego procesu po całą aplikację" : "Software and automation for companies — from one process to a full app")}
        lead={
          isPl
            ? "Dobieram zakres do procesu, który ma zarabiać albo oszczędzać czas. Przy każdej usłudze podaję cenę „od” i czas realizacji."
            : "I match the scope to the process that should earn money or save time. Every service shows a 'from' price and a timeline."
        }
        action={
          showAllLink && <Link href={isPl ? "/uslugi" : "/en/services"} className="btn-link">
            {isPl ? "Wszystkie usługi" : "All services"}
            <ArrowRightIcon size={16} />
          </Link>
        }
      />

      {/* Lista jak cennik w tabeli: nazwa, co daje, cena — bez siatki identycznych kart. */}
      <ul className="border-b border-ink/15" role="list">
        {list.map((service) => (
          <li key={service.href} className="border-t border-ink/15">
            <Link
              href={service.href}
              className="group grid gap-x-8 gap-y-2 py-6 transition-colors hover:bg-ink/[0.02] md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_10rem_1.5rem] md:items-baseline md:py-7"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-primary md:text-[1.35rem]">
                {service.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-muted">{service.description}</p>
              <p className="font-display text-base font-semibold text-ink md:text-right">
                {service.price} <span className="font-sans text-sm font-normal text-muted">{isPl ? "netto" : "net"}</span>
              </p>
              <ArrowRightIcon size={18} className="hidden text-faint transition-transform group-hover:translate-x-1 group-hover:text-primary md:block" />
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
