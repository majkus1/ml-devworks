import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Automatyzacja i AI - Inteligentne Systemy Automatyzacji | ML Devworks",
  description: "Inteligentne agent AI i systemy automatyzacji procesów biznesowych. Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu. Nowoczesne rozwiązania AI dla Twojej firmy.",
  keywords: [
    "automatyzacja",
    "automatyzacja procesów",
    "AI",
    "sztuczna inteligencja",
    "agent AI",
    "automatyzacja biznesowa",
    "automatyzacja zadań",
    "systemy automatyzacji",
    "chatbot AI",
    "machine learning",
    "automatyzacja workflow",
    "RPA",
    "robotic process automation",
    "automatyzacja Kraków",
    "AI dla biznesu",
    "inteligentna automatyzacja",
  ],
  alternates: {
    canonical: "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
    languages: {
      "pl": "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
      "en": "https://www.ml-devworks.com/en/services/automation-and-ai",
    },
  },
  openGraph: {
    title: "Automatyzacja i AI - Inteligentne Systemy Automatyzacji | ML Devworks",
    description: "Inteligentne agent AI i systemy automatyzacji procesów biznesowych. Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu.",
    url: "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatyzacja i AI - Inteligentne Systemy Automatyzacji | ML Devworks",
    description: "Inteligentne agent AI i systemy automatyzacji procesów biznesowych. Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu.",
  },
};

export default function AutomatyzacjaIAIPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automatyzacja i AI",
    "description": "Inteligentne agent AI i systemy automatyzacji procesów biznesowych. Zautomatyzuj powtarzalne zadania i zwiększ efektywność swojego biznesu.",
    "provider": {
      "@type": "Organization",
      "name": "ML Devworks",
      "url": "https://www.ml-devworks.com",
      "logo": "https://www.ml-devworks.com/primary-on-transparent-logo.png",
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
        "item": "https://www.ml-devworks.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Automatyzacja i AI",
        "item": "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai"
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
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-amber-400">Automatyzacja</span> i <span className="text-amber-400">AI</span>
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
                href="/#services"
                className="px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors"
              >
                Zobacz Wszystkie Usługi
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* What We Offer */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Co Oferujemy?
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
                  <h3 className="text-xl font-bold mb-3 text-primary">💬 Obsługa Klienta</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Chatboty AI, które odpowiadają na pytania klientów 24/7, rozwiązują problemy i przekazują złożone sprawy do ludzi. Zmniejszają obciążenie działu obsługi klienta i poprawiają satysfakcję.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Przetwarzanie Dokumentów</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatyczne ekstrakcja danych z faktur, umów, formularzy i innych dokumentów. AI rozpoznaje tekst, klasyfikuje dokumenty i wprowadza dane do systemów.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Analiza i Raportowanie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatyczne generowanie raportów, analiza danych biznesowych, wykrywanie trendów i anomalii. Systemy, które same monitorują KPI i alertują o ważnych zmianach.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Integracje i Synchronizacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatyczna synchronizacja danych między różnymi systemami, integracje API, automatyczne aktualizacje. Eliminacja ręcznego wprowadzania danych.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🎯 Personalizacja i Rekomendacje</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Systemy rekomendacji produktów, personalizowane oferty, dynamiczne ceny. AI analizuje zachowania użytkowników i dostosowuje doświadczenie do ich potrzeb.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Dlaczego Warto Wybrać Nas?
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-amber-400">🤖 Najnowsze Technologie AI</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Wykorzystujemy najnowsze modele AI, w tym GPT, Claude i inne zaawansowane systemy. Zawsze wybieramy najlepsze narzędzie dla konkretnego przypadku użycia.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Szybka Implementacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dzięki wykorzystaniu gotowych rozwiązań AI i sprawdzonych frameworków, wdrażamy automatyzację szybko. Pierwsze efekty widoczne już po kilku tygodniach.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Mierzalne Rezultaty</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Każda automatyzacja jest projektowana z myślą o mierzalnych korzyściach. Oszczędność czasu, redukcja błędów, zwiększenie wydajności - wszystko to monitorujemy i raportujemy.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔒 Bezpieczeństwo i Prywatność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bezpieczeństwo danych to priorytet. Implementujemy najlepsze praktyki, szyfrowanie, kontrolę dostępu i zgodność z RODO. Twoje dane są bezpieczne.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Ciągłe Uczenie i Rozwój</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Systemy AI uczą się i poprawiają z czasem. Monitorujemy wydajność, zbieramy feedback i ciągle optymalizujemy rozwiązania, aby były coraz lepsze.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Kompleksowa Obsługa</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Od analizy procesów, przez projektowanie, implementację, testowanie, wdrożenie, aż po utrzymanie i rozwój - zapewniamy pełną obsługę na każdym etapie.
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
                      Analizujemy Twoje procesy biznesowe, identyfikujemy obszary do automatyzacji i oceniamy potencjalne korzyści. Tworzymy mapę procesów i priorytetyzujemy zadania.
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
                      Projektujemy architekturę automatyzacji, wybieramy odpowiednie technologie AI i narzędzia. Tworzymy szczegółowy plan implementacji z harmonogramem.
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
                      Programujemy system automatyzacji, integrujemy z istniejącymi systemami, trenujemy modele AI. Tworzymy interfejsy i konfigurujemy workflow.
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
                      Testujemy system na rzeczywistych danych, sprawdzamy dokładność AI, optymalizujemy wydajność. Beta testing z użytkownikami i zbieranie feedbacku.
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
                      Wdrażamy system na produkcję, szkolimy użytkowników, dokumentujemy procesy. Zapewniamy płynne przejście i wsparcie podczas startu.
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
                      Monitorujemy wydajność systemu, zbieramy metryki, optymalizujemy na podstawie danych. Ciągły rozwój i dodawanie nowych funkcjonalności.
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
                Skontaktuj się z nami i odkryj, jak automatyzacja i AI mogą przekształcić Twój biznes.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors transform hover:scale-105"
              >
                Skontaktuj Się Z Nami
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}

