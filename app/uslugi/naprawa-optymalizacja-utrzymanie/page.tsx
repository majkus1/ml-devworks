import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Naprawa Stron i Aplikacji - Optymalizacja Wydajnosci i Utrzymanie | ML Devworks",
  description:
    "Naprawiamy strony i aplikacje po innych wykonawcach: bugfixing, optymalizacja Core Web Vitals, techniczne SEO, poprawa konwersji i stale utrzymanie. Szybka diagnoza problemu i plan naprawczy.",
  keywords: [
    "naprawa strony internetowej",
    "naprawa aplikacji webowej",
    "bug fixing dla stron i aplikacji",
    "optymalizacja core web vitals",
    "optymalizacja wydajnosci strony",
    "techniczne seo naprawa",
    "utrzymanie strony internetowej",
    "utrzymanie aplikacji produkcyjnej",
    "wsparcie techniczne dla firm",
    "audyt i plan naprawczy projektu",
    "naprawa strony po agencji",
    "optymalizacja krakow",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
      "en": "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
      "x-default": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    },
  },
  openGraph: {
    title: "Naprawa Stron i Aplikacji | ML Devworks",
    description:
      "Bugfixing, Core Web Vitals, techniczne SEO i utrzymanie projektow produkcyjnych.",
    url: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naprawa Stron i Aplikacji | ML Devworks",
    description:
      "Bugfixing, Core Web Vitals, techniczne SEO i utrzymanie projektow produkcyjnych.",
  },
};

export default function NaprawaOptymalizacjaUtrzymaniePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Naprawa, Optymalizacja i Utrzymanie",
    "description": "Naprawa błędów w istniejących projektach, optymalizacja wydajności, SEO i konwersji. Przywróć pełną funkcjonalność swojej strony lub aplikacji. Kompleksowe utrzymanie i wsparcie techniczne dla Twoich projektów.",
    "provider": {
      "@type": "Organization",
      "name": "ML Devworks",
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
    "serviceType": "Technical Support, Bug Fixing, Performance Optimization, Maintenance",
    "category": "IT Support, Maintenance"
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
        "name": "Naprawa, Optymalizacja i Utrzymanie",
        "item": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie"
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
              Naprawa, <span className="text-primary">Optymalizacja</span> i <span className="text-primary">Utrzymanie</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Przywróć pełną funkcjonalność swojej strony lub aplikacji. Optymalizuj wydajność, SEO i konwersję. Kompleksowe wsparcie techniczne dla Twoich projektów.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
              >
                Bezpłatna Wycena
              </Link>
              <Link
                href="/#services"
                className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
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
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Naprawa Błędów</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Diagnozowanie i naprawa błędów w istniejących projektach. Przywracanie funkcjonalności, naprawa problemów z bezpieczeństwem, kompatybilnością i wydajnością.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Diagnostyka problemów</li>
                    <li>Naprawa błędów krytycznych</li>
                    <li>Poprawki bezpieczeństwa</li>
                    <li>Kompatybilność przeglądarek</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Optymalizacja Wydajności</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Przyspieszenie ładowania strony, optymalizacja kodu, obrazów, bazy danych i infrastruktury. Zwiększenie wydajności aplikacji i poprawa user experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Optymalizacja szybkości</li>
                    <li>Optymalizacja kodu</li>
                    <li>Optymalizacja obrazów</li>
                    <li>Optymalizacja bazy danych</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Optymalizacja SEO</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Poprawa widoczności w wyszukiwarkach poprzez optymalizację meta tagów, struktury strony, treści, linków wewnętrznych i technicznych aspektów SEO.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Audyt SEO</li>
                    <li>Optymalizacja on-page</li>
                    <li>Poprawa Core Web Vitals</li>
                    <li>Structured data</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Optymalizacja Konwersji</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zwiększenie konwersji poprzez optymalizację user experience, procesu zakupowego, formularzy, CTA i analityki. A/B testing i ciągłe ulepszanie.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Analiza konwersji</li>
                    <li>Optymalizacja UX</li>
                    <li>A/B testing</li>
                    <li>Optymalizacja formularzy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services Details */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Szczegółowe Usługi
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔧 Naprawa i Debugging</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Szybka diagnoza i naprawa błędów w kodzie, problemów z funkcjonalnością, błędów JavaScript, problemów z bazą danych, integracjami i bezpieczeństwem. Przywracanie pełnej funkcjonalności aplikacji.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Optymalizacja Wydajności</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Analiza i optymalizacja czasu ładowania strony, optymalizacja kodu (minifikacja, bundling), optymalizacja obrazów (kompresja, formaty nowoczesne), optymalizacja bazy danych, caching, CDN. Zwiększenie PageSpeed Score.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔍 Optymalizacja SEO</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Kompleksowy audyt SEO, optymalizacja meta tagów, nagłówków, treści, linków wewnętrznych, structured data, poprawa Core Web Vitals, mobile-first indexing, poprawa indeksowania w Google.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Optymalizacja Konwersji</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Analiza zachowań użytkowników, identyfikacja punktów spadku konwersji, optymalizacja procesu zakupowego, formularzy, CTA, landing pages. A/B testing i ciągłe ulepszanie wyników.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Aktualizacje i Modernizacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Aktualizacja frameworków, bibliotek, zależności, systemów CMS. Modernizacja kodu, migracja do nowszych technologii, refaktoryzacja. Utrzymanie zgodności z najnowszymi standardami.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🛡️ Bezpieczeństwo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Audyt bezpieczeństwa, naprawa luk bezpieczeństwa, aktualizacje zabezpieczeń, konfiguracja SSL, ochrona przed atakami, backup i disaster recovery. Zapewnienie bezpieczeństwa danych.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Utrzymanie i Wsparcie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ciągłe monitorowanie, regularne aktualizacje, backup, wsparcie techniczne, szybka reakcja na problemy, konsultacje i doradztwo. Pełna obsługa utrzymaniowa Twojego projektu.
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
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Szybka Reakcja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Szybka diagnoza problemów i natychmiastowa naprawa. Priorytetyzujemy krytyczne błędy i zapewniamy szybką reakcję na problemy, które wpływają na działanie Twojego biznesu.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Mierzalne Rezultaty</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Wszystkie optymalizacje są mierzalne. Przed i po analizie, raporty z wynikami, monitoring metryk. Widzisz realne poprawy w wydajności, SEO i konwersji.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔍 Kompleksowa Analiza</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dokładna analiza całego projektu przed wprowadzeniem zmian. Identyfikujemy wszystkie problemy i możliwości optymalizacji. Nie naprawiamy tylko objawów, ale przyczyny.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💡 Doświadczenie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Mamy doświadczenie w pracy z różnymi technologiami, frameworkami i systemami. Szybko rozumiemy istniejący kod i wprowadzamy poprawki bez zakłócania działania.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Ciągłe Ulepszanie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Nie tylko naprawiamy, ale także ciągle optymalizujemy. Monitorujemy wyniki, zbieramy feedback i wprowadzamy ulepszenia, aby Twój projekt był coraz lepszy.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Elastyczne Podejście</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dostosowujemy się do Twoich potrzeb - od jednorazowych napraw po długoterminowe umowy utrzymaniowe. Pracujemy z projektami w różnych technologiach i rozmiarach.
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
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Analiza i Diagnostyka</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Analizujemy Twój projekt, identyfikujemy problemy, błędy i obszary do optymalizacji. Tworzymy szczegółowy raport z rekomendacjami i planem działania.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wycena i Plan</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Przedstawiamy szczegółową wycenę prac i harmonogram. Uzgadniamy priorytety i zakres prac. Tworzymy plan działania z podziałem na etapy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Implementacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wprowadzamy naprawy i optymalizacje zgodnie z planem. Pracujemy w środowisku testowym, testujemy zmiany i upewniamy się, że wszystko działa poprawnie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testowanie i Weryfikacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Testujemy wszystkie zmiany, weryfikujemy poprawki, sprawdzamy wydajność i funkcjonalność. Upewniamy się, że wszystko działa lepiej niż przed zmianami.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i Dokumentacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wdrażamy zmiany na produkcję, dokumentujemy wprowadzone poprawki i optymalizacje. Przekazujemy raport z wynikami i rekomendacjami na przyszłość.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Monitorowanie i Wsparcie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Monitorujemy wyniki po wdrożeniu, zbieramy feedback, reagujemy na ewentualne problemy. Zapewniamy ciągłe wsparcie i dalsze optymalizacje.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Potrzebujesz Naprawy lub Optymalizacji?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się z nami i otrzymaj bezpłatną analizę Twojego projektu oraz wycenę prac.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
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

