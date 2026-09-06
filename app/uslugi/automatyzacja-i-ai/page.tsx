import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";
import OpenAssistantButton from "@/components/ai-assistant/OpenAssistantButton";

const TITLE = "Automatyzacje AI dla firm: agenci i integracje | ML DevWorks";
const DESCRIPTION =
  "Automatyzacje AI dla firm: agenci AI do zgłoszeń i klientów, integracje systemów, automatyzacja pracy biurowej. Od 2 500 zł netto, efekty w 3-14 dni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "automatyzacje ai dla firm",
    "automatyzacja ai dla firm",
    "automatyzacja procesów biznesowych ai",
    "agencja automatyzacji ai",
    "usługi automatyzacji procesów",
    "automatyzacja z użyciem agentów ai",
    "agenci ai dla biznesu",
    "automatyzacja obsługi zgłoszeń",
    "automatyzacja procesów obsługi klienta",
    "automatyzacja procesów w contact center",
    "automatyzacja pracy biurowej z ai",
    "automatyzacja crm ai",
    "chatbot ai dla strony",
    "automatyzacja ai kraków",
    "automatyzacja biznesu",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    languages: {
      pl: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
      en: "https://ml-devworks.com/en/services/automation-and-ai",
      "x-default": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const offer = [
  {
    title: "Inteligentni agenci AI",
    highlight: true,
    text: "Agenci AI, którzy rozumieją język naturalny, zbierają dane, dopytują, klasyfikują sprawę i uruchamiają akcje w Twoich systemach.",
    points: ["Chatboty i asystenci AI na stronie oraz w komunikatorach", "Kwalifikacja leadów i zgłoszeń 24/7", "Agenci wewnętrzni dla zespołu (baza wiedzy, dokumenty)", "Analiza i przetwarzanie danych"],
  },
  {
    title: "Automatyzacja procesów biznesowych",
    text: "Automatyzacja powtarzalnych procesów, które zajmują czas pracowników. Od prostych zadań po workflow obejmujące wiele systemów.",
    points: ["Workflow i powiadomienia", "Integracje CRM, ERP, formularzy i API", "Automatyczne raportowanie", "Przetwarzanie dokumentów i faktur"],
  },
  {
    title: "Automatyzacja obsługi klienta i zgłoszeń",
    text: "Helpdesk, contact center, zamówienia i reklamacje: AI klasyfikuje, odpowiada na powtarzalne sprawy i eskaluje trudniejsze z pełnym kontekstem.",
    points: ["Klasyfikacja i priorytetyzacja zgłoszeń", "Odpowiedzi z bazy wiedzy firmy", "Statusy zamówień i przesyłek", "Eskalacja do człowieka z podsumowaniem"],
  },
  {
    title: "RPA i analiza danych",
    text: "Roboty wykonujące powtarzalne kliknięcia w aplikacjach bez API oraz modele, które analizują dane i wspierają decyzje.",
    points: ["Automatyczne wypełnianie formularzy i systemów", "Ekstrakcja danych ze skanów i PDF", "Wykrywanie anomalii i predykcja", "Segmentacja i rekomendacje"],
  },
];

const whyMe = [
  ["Najnowsze modele AI", "Wykorzystuję modele GPT, Claude i inne, dobierając narzędzie do konkretnego procesu, a nie odwrotnie."],
  ["Szybkie wdrożenie", "Pierwsze automatyzacje działają zwykle po 3-14 dniach roboczych. Po dobrym opisie procesu przygotowuję bezpłatny prototyp."],
  ["Mierzalne rezultaty", "Każdą automatyzację projektuję pod liczby: czas zaoszczędzony, czas reakcji, liczba błędów, obsłużone zgłoszenia."],
  ["Bezpieczeństwo i RODO", "Kontrola dostępu, ograniczenie danych przekazywanych do modeli, logowanie działań agentów i zgodność z RODO."],
  ["Własność i brak uzależnienia", "Kod i konfiguracja należą do Ciebie. Nie zamykam firmy w jednym narzędziu no-code z rosnącym abonamentem."],
  ["Jeden odpowiedzialny programista", "Analiza, projekt, wdrożenie i utrzymanie prowadzę osobiście. Nie ma pośredników i handlowców."],
];

const process = [
  ["Analiza procesów", "Mapuję procesy, liczę koszt czasu i błędów, priorytetyzuję to, co zwróci się najszybciej."],
  ["Projekt rozwiązania", "Dobieram architekturę: agent AI, integracja, workflow albo aplikacja. Ustalam zakres, budżet i mierniki."],
  ["Prototyp i wdrożenie", "Buduję działający prototyp, integruję z Twoimi systemami i testuję na realnych danych."],
  ["Testy i uruchomienie", "Sprawdzam dokładność AI, obsługę wyjątków i eskalacji. Szkolę zespół i dokumentuję."],
  ["Monitoring i rozwój", "Śledzę wyniki, poprawiam odpowiedzi agentów i dokładam kolejne procesy etapami."],
];

export default function AutomatyzacjaIAIPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Automatyzacje AI dla firm",
    description: DESCRIPTION,
    provider: {
      "@type": "Organization",
      name: "ML DevWorks",
      url: "https://ml-devworks.com",
      logo: "https://ml-devworks.com/primary-on-transparent-logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+48-516-598-792",
        contactType: "customer service",
        email: "office@ml-devworks.com",
        availableLanguage: ["Polish", "English"],
      },
    },
    areaServed: [
      { "@type": "Country", name: "Polska" },
      { "@type": "City", name: "Kraków" },
    ],
    serviceType: "AI Automation for Companies, Business Process Automation, Customer Support Automation, AI Agents",
    category: "Artificial Intelligence, Automation",
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Usługi", item: "https://ml-devworks.com/uslugi" },
      { "@type": "ListItem", position: 3, name: "Automatyzacje AI dla firm", item: "https://ml-devworks.com/uslugi/automatyzacja-i-ai" },
    ],
  };

  return (
    <>
      <StructuredData lang="pl" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />
      <ServiceFaqSchema serviceId="automation-ai" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="automation-ai" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        {/* Hero */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automatyzacje AI dla firm: <span className="text-amber-400">agenci AI, integracje i workflow</span>, które zdejmują pracę ręczną
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-4">
              Automatyzacja procesów biznesowych z użyciem agentów AI: obsługa zgłoszeń i klientów, kwalifikacja leadów, przepisywanie danych między systemami, raporty i praca biurowa.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-8">
              Proste automatyzacje od 2 500 zł netto, pierwsze efekty w 3-14 dni roboczych. Pracujesz bezpośrednio z programistą z Krakowa - zdalnie w całej Polsce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <OpenAssistantButton
                fallbackHref="/kontakt#ai-advisor"
                className="px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors text-center"
              >
                Sprawdź z AI, co zautomatyzować
              </OpenAssistantButton>
              <Link
                href="/kontakt"
                className="px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors text-center"
              >
                Bezpłatna wycena i prototyp
              </Link>
            </div>
          </div>
        </section>

        <ServiceSeoSections serviceId="automation-ai" lang="pl" />

        <AutomationExamplesSection lang="pl" />

        {/* Oferta */}
        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="automation-offer-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="automation-offer-heading" className="text-3xl md:text-4xl font-bold mb-10">
              Co obejmują usługi automatyzacji procesów
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {offer.map((item) => (
                <article
                  key={item.title}
                  className={`bg-background rounded-xl p-6 ${item.highlight ? "border-2 border-amber-400/60 shadow-lg shadow-amber-500/10" : "border border-primary/20"}`}
                >
                  <h3 className={`text-2xl font-bold mb-3 ${item.highlight ? "text-amber-400" : "text-primary"}`}>{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">{item.text}</p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Agencja czy programista */}
        <section className="px-4 py-16" aria-labelledby="agency-heading">
          <div className="max-w-5xl mx-auto grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
            <div>
              <h2 id="agency-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Agencja automatyzacji AI czy programista?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Agencja automatyzacji zwykle sprzedaje gotowe scenariusze w narzędziach no-code i rozlicza abonament za każdy krok. To działa przy prostych przepływach, ale kończy się, gdy proces wymaga logiki, integracji z Twoim systemem albo kontroli nad danymi.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Ja buduję automatyzacje jako kod, który należy do Ciebie: agentów AI, integracje API i aplikacje. Tam, gdzie gotowe narzędzie wystarczy, używam go - ale bez uzależniania firmy od abonamentu.
              </p>
              <Link href="/blog/agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce" className="inline-flex text-primary hover:text-primary-light font-semibold underline">
                Jak wybrać wykonawcę automatyzacji: porównanie modeli współpracy
              </Link>
            </div>
            <div className="bg-background-lighter border border-primary/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Automatyzacja AI w Krakowie i zdalnie</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Działam w Krakowie (Rynek Główny 34/15) i pracuję zdalnie z firmami z całej Polski. Spotkanie na miejscu, wideo albo mail - proces analizy jest ten sam.
              </p>
              <Link href="/programista-krakow" className="text-primary hover:text-primary-light font-semibold">
                Programista z Krakowa: podejście biznesowe
              </Link>
            </div>
          </div>
        </section>

        {/* Dlaczego ja */}
        <section className="px-4 py-16 bg-background-lighter/40" aria-labelledby="why-me-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-me-heading" className="text-3xl md:text-4xl font-bold mb-10">
              Dlaczego warto automatyzować ze mną
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {whyMe.map(([title, text], index) => (
                <article key={title} className="bg-background rounded-xl p-6 border border-primary/20">
                  <h3 className={`text-xl font-bold mb-3 ${index === 0 ? "text-amber-400" : "text-primary"}`}>{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Proces */}
        <section className="px-4 py-16" aria-labelledby="process-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="process-heading" className="text-3xl md:text-4xl font-bold mb-10">
              Jak wygląda wdrożenie automatyzacji
            </h2>
            <ol className="space-y-6">
              {process.map(([title, text], index) => (
                <li key={title} className="flex gap-4">
                  <span className="shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl" aria-hidden="true">
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

        {/* CTA */}
        <section className="px-4 pb-20">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-amber-400/20 to-amber-400/10 rounded-xl p-8 md:p-12 text-center border-2 border-amber-400/60 shadow-lg shadow-amber-500/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">Gotowy na automatyzację z AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Opisz proces, który zabiera Wam najwięcej czasu. Wrócę w 2-5 dni z bezpłatnym prototypem automatyzacji i orientacyjną wyceną.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt" className="inline-block px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors">
                Skontaktuj się ze mną
              </Link>
              <Link href="/blog/co-mozna-zautomatyzowac-w-firmie-z-ai-przyklady-procesow" className="inline-block px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors">
                Przeczytaj: 12 procesów do automatyzacji
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
