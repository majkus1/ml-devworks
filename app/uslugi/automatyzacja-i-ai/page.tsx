import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";

export const metadata: Metadata = {
  title: "Automatyzacja procesów i AI dla firm | ML DevWorks",
  description:
    "Wdrażam agentów AI i automatyzację procesów biznesowych: obsługę klienta, workflow i integracje narzędzi. Mniej pracy ręcznej.",
  keywords: [
    "automatyzacja procesow biznesowych",
    "ai dla firm",
    "agenci ai dla biznesu",
    "automatyzacja obslugi klienta",
    "automatyzacja workflow firmy",
    "integracje systemow i narzedzi",
    "chatbot ai dla strony",
    "automatyzacja leadow i sprzedazy",
    "rpa dla firm",
    "wdrozenie sztucznej inteligencji",
    "automatyzacja krakow",
    "inteligentna automatyzacja procesow",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
      "en": "https://ml-devworks.com/en/services/automation-and-ai",
      "x-default": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    },
  },
  openGraph: {
    title: "Automatyzacja procesów i AI dla firm | ML DevWorks",
    description:
      "Wdrażam agentów AI i automatyzację procesów biznesowych: obsługę klienta, workflow i integracje narzędzi. Mniej pracy ręcznej.",
    url: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatyzacja procesów i AI dla firm | ML DevWorks",
    description:
      "Wdrażam agentów AI i automatyzację procesów biznesowych: obsługę klienta, workflow i integracje narzędzi. Mniej pracy ręcznej.",
  },
};

export default function AutomatyzacjaIAIPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatyzacja i AI",
    "description": "Wdrażam agentów AI i automatyzacje procesów biznesowych: obsługę klienta, workflow, kwalifikację leadów i integracje narzędzi.",
    "provider": {
      "@type": "Organization",
      "name": "ML DevWorks",
      "url": "https://ml-devworks.com",
      "logo": "https://ml-devworks.com/primary-on-transparent-logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+48-516-598-792",
        "contactType": "customer service",
        "email": "office@ml-devworks.com",
        "availableLanguage": ["Polish"]
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Poland"
    },
    "serviceType": "AI Automation, Business Process Automation",
    "category": "Artificial Intelligence, Automation"
  };

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Strona główna",
        "item": "https://ml-devworks.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Automatyzacja i AI",
        "item": "https://ml-devworks.com/uslugi/automatyzacja-i-ai"
      }
    ]
  };

  return (
    <>
      <StructuredData lang="pl" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <ServiceFaqSchema serviceId="automation-ai" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="automation-ai" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Automatyzacja procesów i <span className="text-amber-400">AI dla firm</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Inteligentne systemy automatyzacji i agent AI, które przekształcają Twój biznes, eliminując powtarzalne zadania i zwiększając efektywność.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors transform hover:scale-105"
              >
                Bezpłatna Wycena
              </Link>
              <Link
                href="/uslugi"
                className="px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors"
              >
                Zobacz Wszystkie Usługi
              </Link>
            </div>
          </div>
        </section>
        <ServiceSeoSections serviceId="automation-ai" lang="pl" />

        {/* Main Content */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* What I Offer */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Co oferuję?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background-lighter rounded-xl p-6 border-2 border-amber-400/60 shadow-lg shadow-amber-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">Inteligentne Agenty AI</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zaawansowane agent AI, które mogą wykonywać złożone zadania, podejmować decyzje i uczyć się na podstawie danych. Zintegrowane z Twoimi systemami i procesami biznesowymi.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Chatboty AI z naturalnym językiem</li>
                    <li>Asystenci wirtualni dla klientów</li>
                    <li>Systemy rekomendacji</li>
                    <li>Analiza i przetwarzanie danych</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Automatyzacja Procesów Biznesowych</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Automatyzacja powtarzalnych procesów, które zajmują czas Twoich pracowników. Od prostych zadań po złożone workflow obejmujące wiele systemów.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Automatyzacja workflow</li>
                    <li>Integracje między systemami</li>
                    <li>Automatyczne raportowanie</li>
                    <li>Przetwarzanie dokumentów</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">RPA (Robotic Process Automation)</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Wirtualne roboty, które symulują działania użytkownika w aplikacjach. Automatyzacja zadań, które wymagają interakcji z interfejsem użytkownika.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Automatyzacja zadań w aplikacjach</li>
                    <li>Ekstrakcja danych</li>
                    <li>Automatyczne wypełnianie formularzy</li>
                    <li>Przetwarzanie transakcji</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Machine Learning i Analiza Danych</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Modele uczenia maszynowego, które analizują dane, przewidują trendy i pomagają w podejmowaniu decyzji biznesowych opartych na danych.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Predykcyjna analityka</li>
                    <li>Klasyfikacja i segmentacja</li>
                    <li>Wykrywanie anomalii</li>
                    <li>Personalizacja doświadczeń</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Przykłady Zastosowań
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Obsługa klienta</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Chatboty AI, które odpowiadają na pytania klientów 24/7, rozwiązują problemy i przekazują złożone sprawy do ludzi. Zmniejszają obciążenie działu obsługi klienta i poprawiają satysfakcję.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Przetwarzanie dokumentów</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatyczne ekstrakcja danych z faktur, umów, formularzy i innych dokumentów. AI rozpoznaje tekst, klasyfikuje dokumenty i wprowadza dane do systemów.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Analiza i raportowanie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatyczne generowanie raportów, analiza danych biznesowych, wykrywanie trendów i anomalii. Systemy, które same monitorują KPI i alertują o ważnych zmianach.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Integracje i synchronizacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatyczna synchronizacja danych między różnymi systemami, integracje API, automatyczne aktualizacje. Eliminacja ręcznego wprowadzania danych.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Personalizacja i rekomendacje</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Systemy rekomendacji produktów, personalizowane oferty, dynamiczne ceny. AI analizuje zachowania użytkowników i dostosowuje doświadczenie do ich potrzeb.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Work With Me */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Dlaczego warto pracować ze mną?
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">Najnowsze technologie AI</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Wykorzystuję najnowsze modele AI, w tym GPT, Claude i inne zaawansowane systemy. Zawsze wybieram najlepsze narzędzie dla konkretnego przypadku użycia.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Szybka implementacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dzięki wykorzystaniu gotowych rozwiązań AI i sprawdzonych frameworków wdrażam automatyzację szybko. Pierwsze efekty widoczne już po kilku tygodniach.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Mierzalne rezultaty</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Każda automatyzacja jest projektowana z myślą o mierzalnych korzyściach. Oszczędność czasu, redukcję błędów i wzrost wydajności monitoruję oraz raportuję.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Bezpieczeństwo i prywatność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bezpieczeństwo danych to priorytet. Implementuję najlepsze praktyki, szyfrowanie, kontrolę dostępu i zgodność z RODO. Twoje dane są bezpieczne.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Ciągłe uczenie i rozwój</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Systemy AI uczą się i poprawiają z czasem. Monitoruję wydajność, zbieram feedback i ciągle optymalizuję rozwiązania, aby były coraz lepsze.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Kompleksowa obsługa</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Od analizy procesów, przez projektowanie, implementację, testowanie, wdrożenie, aż po utrzymanie i rozwój - zapewniam pełną obsługę na każdym etapie.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Jak Wygląda Proces?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Analiza Procesów</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Analizuję Twoje procesy biznesowe, identyfikuję obszary do automatyzacji i oceniam potencjalne korzyści. Tworzę mapę procesów i priorytetyzuję zadania.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Projektowanie Rozwiązania</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Projektuję architekturę automatyzacji, wybieram odpowiednie technologie AI i narzędzia. Tworzę szczegółowy plan implementacji z harmonogramem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Rozwój i Implementacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Programuję system automatyzacji, integruję go z istniejącymi systemami i konfiguruję workflow. Tworzę interfejsy oraz testuję działanie AI na realnych danych.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testowanie i Optymalizacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Testuję system na rzeczywistych danych, sprawdzam dokładność AI, optymalizuję wydajność. Beta testing z użytkownikami i zbieranie feedbacku.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i Szkolenie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wdrażam system na produkcję, szkolę użytkowników, dokumentuję procesy. Zapewniam płynne przejście i wsparcie podczas startu.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Monitorowanie i Rozwój</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Monitoruję wydajność systemu, zbieram metryki i optymalizuję rozwiązanie na podstawie danych. Rozwijam system oraz dodaję nowe funkcjonalności.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-amber-400/20 to-amber-400/10 rounded-xl p-8 md:p-12 text-center border-2 border-amber-400/60 shadow-lg shadow-amber-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">
                Gotowy na Automatyzację z AI?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się ze mną i sprawdź, jak automatyzacja i AI mogą usprawnić Twój biznes.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors transform hover:scale-105"
              >
                Skontaktuj się ze mną
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}

