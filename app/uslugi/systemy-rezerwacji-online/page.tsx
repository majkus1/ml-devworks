import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";

const faq = [
  {
    q: "Ile kosztuje system rezerwacji online dla firmy?",
    a: "Prosty system rezerwacji online zwykle zaczyna się od 6 000 zł netto. Cena rośnie, gdy potrzebne są płatności online, integracje CRM/ERP, role pracowników, niestandardowe grafiki lub automatyczne przypomnienia.",
  },
  {
    q: "Czy system rezerwacji może obsługiwać płatności i zaliczki?",
    a: "Tak. Możemy wdrożyć płatności online, zaliczki, potwierdzenia email, przypomnienia oraz reguły anulowania wizyt, które ograniczają no-show.",
  },
  {
    q: "Czy system rezerwacji integruje się ze stroną internetową?",
    a: "Tak. Rezerwacje mogą działać jako sekcja na stronie, osobny panel klienta albo widget połączony z kalendarzem, CRM i systemem płatności.",
  },
  {
    q: "Dla jakich branż budujecie systemy rezerwacji?",
    a: "Najczęściej dla usług lokalnych, beauty, medycyny, edukacji, konsultingu, wynajmu, wydarzeń i firm, które chcą sprzedawać terminy online bez ręcznego umawiania klientów.",
  },
];

export const metadata: Metadata = {
  title: "System rezerwacji online dla firm - klienci, płatności, kalendarz | ML DevWorks",
  description:
    "Budujemy systemy rezerwacji klientów: kalendarz dostępności, płatności online, zaliczki, przypomnienia, panel administracyjny i integracje CRM. Wdrożenia dla firm usługowych.",
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    languages: {
      pl: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
      en: "https://ml-devworks.com/en/services/online-booking-systems",
      "x-default": "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    },
  },
  openGraph: {
    title: "System rezerwacji online dla firm | ML DevWorks",
    description:
      "Dedykowane systemy rezerwacji z płatnościami, przypomnieniami, panelem administracyjnym i integracjami.",
    url: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    type: "website",
    locale: "pl_PL",
  },
};

function BookingSystemsSchema() {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Systemy rezerwacji online dla firm",
    description:
      "Dedykowane systemy rezerwacji klientów z kalendarzem dostępności, płatnościami online, przypomnieniami i integracjami CRM.",
    serviceType: "Online booking system development",
    url: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kraków",
        addressCountry: "PL",
      },
    },
    areaServed: [
      { "@type": "Country", name: "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "System rezerwacji online - zakres",
      itemListElement: [
        {
          "@type": "Offer",
          name: "Wdrożenie systemu rezerwacji online",
          priceCurrency: "PLN",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "PLN",
            description: "Zwykle od 6 000 zł netto, zależnie od integracji, płatności i panelu administracyjnego.",
          },
          availability: "https://schema.org/InStock",
        },
      ],
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://ml-devworks.com/uslugi" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Systemy rezerwacji online",
        item: "https://ml-devworks.com/uslugi/systemy-rezerwacji-online",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}

export default function OnlineBookingSystemsPage() {
  return (
    <>
      <StructuredData lang="pl" />
      <BookingSystemsSchema />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <Breadcrumbs
              className="mb-8"
              items={[
                { label: "Strona główna", href: "/" },
                { label: "Usługi", href: "/uslugi" },
                { label: "Systemy rezerwacji online" },
              ]}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System rezerwacji online dla firm: klienci, płatności i kalendarz
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8">
              Projektujemy dedykowane systemy rezerwacji klientów dla firm usługowych: od prostego kalendarza terminów po płatności online, zaliczki, przypomnienia i integracje z CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/#contact" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
                Zapytaj o system rezerwacji
              </Link>
              <Link href="/blog/system-rezerwacji-online-dla-salonu-kosmetycznego-co-wybrac-i-ile-to-trwa" className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center">
                Przeczytaj poradnik
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="booking-problems-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="booking-problems-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Kiedy dedykowany system rezerwacji ma sens
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                "Klienci dzwonią lub piszą, żeby ustalić wolny termin, a zespół traci czas na koordynację.",
                "No-show i ręczne potwierdzanie wizyt obniżają przychód i dezorganizują grafik.",
                "Gotowy kalendarz nie obsługuje płatności, zaliczek, wielu pracowników lub Twoich reguł biznesowych.",
              ].map((item) => (
                <article key={item} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="booking-scope-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="booking-scope-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Co może zawierać system rezerwacji klientów
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                "Kalendarz dostępności, usługi, lokalizacje, pracownicy i limity miejsc.",
                "Płatności online, zaliczki, vouchery, faktury i reguły anulowania.",
                "Panel administratora do zarządzania terminami, klientami, grafikami i raportami.",
                "Powiadomienia email/SMS, przypomnienia, ankiety po wizycie i automatyczne follow-upy.",
                "Integracje z CRM, stroną internetową, Google Calendar, analityką i narzędziami sprzedaży.",
                "Widok mobilny dla klienta i ergonomiczny panel dla zespołu.",
              ].map((item) => (
                <article key={item} className="bg-background border border-primary/20 rounded-xl p-6">
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="booking-budget-heading">
          <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-3">
            <div>
              <h2 id="booking-budget-heading" className="text-2xl font-bold mb-3">Budżet</h2>
              <p className="text-gray-300">Najczęściej od 6 000 zł netto za prosty system. Rozbudowane integracje i płatności wyceniamy po analizie.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Czas</h2>
              <p className="text-gray-300">Zwykle 3-8 tygodni dla pierwszej wersji produkcyjnej.</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Dla kogo</h2>
              <p className="text-gray-300">Beauty, medycyna, edukacja, konsulting, wynajem, wydarzenia, usługi lokalne i B2B.</p>
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="booking-faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="booking-faq-heading" className="text-3xl md:text-4xl font-bold mb-8">
              Najczęstsze pytania
            </h2>
            <div className="space-y-4">
              {faq.map((item) => (
                <article key={item.q} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.q}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
