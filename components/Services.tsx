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
      description: "Szybkie strony firmowe i landing page, które jasno tłumaczą ofertę i zbierają zapytania z Google.",
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
      description: "Naprawa błędów, przyspieszenie strony, SEO techniczne i opieka nad istniejącym projektem.",
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
      description: "Fast business websites and landing pages that explain the offer clearly and collect enquiries from Google.",
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

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" role="list">
        {list.map((service) => {
          const Icon = service.icon;
          return (
            <li key={service.href} className={service.featured ? "sm:col-span-2" : ""}>
              <Link
                href={service.href}
                className={`group flex h-full flex-col rounded-2xl border p-6 transition duration-200 hover:-translate-y-0.5 md:p-7 ${
                  service.featured
                    ? "border-primary/35 bg-gradient-to-br from-primary/[0.12] via-white/[0.02] to-accent/[0.06] hover:border-primary/60"
                    : "border-white/[0.08] bg-white/[0.025] hover:border-primary/35 hover:bg-white/[0.04]"
                }`}
              >
                <span className="icon-tile">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className={`mt-5 font-sans font-semibold text-white ${service.featured ? "text-2xl" : "text-lg"}`}>{service.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-gray-400">{service.description}</p>
                <span className="mt-auto flex items-center justify-between pt-6 text-sm">
                  <span className="font-semibold text-white">
                    {service.price} <span className="font-normal text-gray-500">{isPl ? "netto" : "net"}</span>
                  </span>
                  <ArrowRightIcon size={18} className="text-gray-500 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
