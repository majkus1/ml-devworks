import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";

const TITLE = "Aplikacje mobilne dla firm na zamówienie | ML DevWorks";
const DESCRIPTION =
  "Aplikacje mobilne iOS i Android na zamówienie: praca offline, panel administracyjny, integracje z systemami firmy. MVP od 12 000 zł netto w 3-8 tygodni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "aplikacje mobilne dla firm",
    "aplikacje mobilne na zamówienie",
    "dedykowane aplikacje mobilne dla firm",
    "tworzenie aplikacji mobilnych ios android",
    "aplikacja mobilna dla pracowników terenowych",
    "aplikacja mobilna dla serwisu",
    "aplikacja mobilna dla klientów firmy",
    "developer aplikacji mobilnych",
    "aplikacje react native dla firm",
    "aplikacje mobilne kraków",
    "ile kosztuje aplikacja mobilna dla firmy",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    languages: {
      pl: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
      en: "https://ml-devworks.com/en/services/mobile-apps-for-companies",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const useCases = [
  {
    title: "Pracownicy w terenie",
    text: "Zlecenia, checklisty, zdjęcia, podpisy klienta, geolokalizacja i praca offline. Dane trafiają do systemu od razu, nie po powrocie do biura.",
  },
  {
    title: "Serwis i zgłoszenia",
    text: "Aplikacja dla techników i klientów: zgłoszenia serwisowe, historia urządzeń, części, harmonogram wizyt i powiadomienia o statusie.",
  },
  {
    title: "Sprzedaż B2B i handlowcy",
    text: "Katalog, cenniki, składanie zamówień u klienta, podgląd stanów magazynowych i notatki ze spotkań synchronizowane z CRM.",
  },
  {
    title: "Aplikacja dla klientów",
    text: "Rezerwacje, zamówienia, status realizacji, płatności, program lojalnościowy i powiadomienia push zamiast telefonów do biura.",
  },
  {
    title: "Logistyka i transport",
    text: "Trasy, potwierdzenia dostaw, skanowanie kodów, dokumenty przewozowe i komunikacja kierowca-dyspozytor w jednym miejscu.",
  },
  {
    title: "Produkcja i magazyn",
    text: "Rejestracja operacji, kontrola jakości ze zdjęciami, inwentaryzacja skanerem i zgłaszanie awarii z hali produkcyjnej.",
  },
];

const comparison = [
  {
    title: "Cross-platform (React Native)",
    points: ["Jedna baza kodu na iOS i Android", "Niższy koszt i szybsze wdrożenie", "Wystarczające dla większości aplikacji firmowych", "Łatwiejsze utrzymanie i rozwój"],
    tag: "Najczęstszy wybór",
  },
  {
    title: "Natywna (Swift / Kotlin)",
    points: ["Maksymalna wydajność i dostęp do sprzętu", "Najlepsza dla nietypowych funkcji (AR, BLE, sensory)", "Dwie bazy kodu = wyższy koszt", "Uzasadniona przy produktach konsumenckich"],
    tag: "Gdy potrzebna",
  },
  {
    title: "PWA / aplikacja webowa",
    points: ["Bez publikacji w sklepach", "Najtańszy start", "Ograniczone powiadomienia i praca offline", "Dobra jako etap przed pełną aplikacją"],
    tag: "Tańszy start",
  },
];

const process = [
  ["Analiza procesu", "Ustalamy, kto i w jakiej sytuacji użyje aplikacji, jakie dane zbiera i z czym musi się integrować."],
  ["Makiety i prototyp", "Klikalne ekrany do omówienia z zespołem. Po dobrym briefie pierwszy prototyp przygotowuję bezpłatnie."],
  ["Wdrożenie MVP", "Backend, aplikacja iOS/Android, panel administracyjny i integracje. Pierwsza wersja w 3-8 tygodni."],
  ["Publikacja i rozwój", "Konta deweloperskie, App Store i Google Play, monitoring, aktualizacje i kolejne funkcje etapami."],
];

export default function AplikacjeMobilneDlaFirmPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Aplikacje mobilne dla firm na zamówienie",
    description: DESCRIPTION,
    serviceType: "Mobile Application Development, iOS and Android App Development",
    url: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm",
    provider: {
      "@type": "ProfessionalService",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      telephone: "+48 516 598 792",
      email: "office@ml-devworks.com",
      address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
    },
    areaServed: [
      { "@type": "Country", name: "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://ml-devworks.com/uslugi" },
      { "@type": "ListItem", position: 3, name: "Aplikacje mobilne dla firm", item: "https://ml-devworks.com/uslugi/aplikacje-mobilne-dla-firm" },
    ],
  };

  return (
    <>
      <StructuredData lang="pl" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="mobile-apps" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="mobile-apps" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Aplikacje mobilne dla firm na zamówienie: <span className="text-primary">iOS, Android, cross-platform</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-4">
              Tworzę dedykowane aplikacje mobilne dla pracowników w terenie, serwisu, sprzedaży i klientów. Z panelem administracyjnym, pracą offline i integracjami z CRM, ERP czy magazynem.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
              MVP aplikacji mobilnej najczęściej od 12 000 zł netto, pierwsza wersja w sklepach w 3-8 tygodni. Bezpośrednia współpraca z programistą z Krakowa, zdalnie w całej Polsce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt" className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
                Bezpłatna wycena aplikacji
              </Link>
              <OpenAssistantButton fallbackHref="/kontakt#ai-advisor" className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors text-center">
                Zapytaj asystenta AI, czy aplikacja ma sens
              </OpenAssistantButton>
            </div>
          </div>
        </section>

        <ServiceSeoSections serviceId="mobile-apps" lang="pl" />

        <section className="px-4 py-16" aria-labelledby="mobile-usecases-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="mobile-usecases-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Dla kogo są aplikacje mobilne na zamówienie
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl">
              Aplikacja mobilna dla firmy ma sens wtedy, gdy ludzie pracują poza biurkiem albo klienci chcą załatwiać sprawy z telefonu. Najczęstsze zastosowania:
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <article key={item.title} className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="mobile-tech-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="mobile-tech-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Natywna, cross-platform czy PWA?
            </h2>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl">
              Dobór technologii wpływa na koszt, czas i utrzymanie. Doradzam wariant pod proces i budżet, a nie odwrotnie.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {comparison.map((item) => (
                <article key={item.title} className="bg-background border border-primary/20 rounded-xl p-6 flex flex-col">
                  <span className="self-start text-xs font-semibold uppercase tracking-wide text-primary bg-primary/10 border border-primary/30 rounded-full px-3 py-1 mb-4">
                    {item.tag}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="space-y-2 text-gray-300">
                    {item.points.map((point) => (
                      <li key={point}>- {point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16" aria-labelledby="mobile-process-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="mobile-process-heading" className="text-3xl md:text-4xl font-bold mb-10">
              Jak wygląda tworzenie aplikacji mobilnej
            </h2>
            <ol className="space-y-6">
              {process.map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl" aria-hidden="true">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{title}</h3>
                    <p className="text-gray-300 leading-relaxed">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="mobile-web-heading">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-8">
            <h2 id="mobile-web-heading" className="text-2xl md:text-3xl font-bold mb-4">
              Potrzebujesz też aplikacji webowej lub panelu?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Aplikacja mobilna rzadko działa sama. Zwykle towarzyszy jej panel administracyjny, aplikacja webowa dla biura albo integracja z istniejącym systemem. Zobacz, jak łączę aplikacje webowe i mobilne w jeden spójny system.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/uslugi/aplikacje-internetowe-i-mobilne" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                Aplikacje webowe i mobilne
              </Link>
              <Link href="/uslugi/automatyzacja-i-ai" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                Automatyzacje AI dla firm
              </Link>
              <Link href="/programista-krakow" className="px-5 py-3 bg-background-lighter border border-primary/30 rounded-lg text-primary hover:border-primary transition-colors">
                Programista Kraków
              </Link>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Opisz proces, a dostaniesz prototyp aplikacji</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Napisz, kto ma używać aplikacji, co ma robić i z czym się łączyć. Po dobrym opisie wracam w 2-5 dni z klikalnym prototypem i orientacyjną wyceną.
            </p>
            <Link href="/kontakt" className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors">
              Skontaktuj się
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
