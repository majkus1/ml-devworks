import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";

export const metadata: Metadata = {
  title: "Sklepy internetowe i e-commerce dla firm | ML DevWorks",
  description:
    "Budujemy sklepy internetowe B2C i B2B: katalog, koszyk, płatności online, dostawy, integracje ERP/CRM i automatyzacje sprzedaży. Umów bezpłatną wycenę.",
  keywords: [
    "sklep internetowy dla firmy",
    "tworzenie sklepu internetowego",
    "wdrozenie woocommerce",
    "wdrozenie shopify",
    "platforma e commerce b2b b2c",
    "integracja platnosci online",
    "integracja kurier paczkomat",
    "woocommerce sklep internetowy",
    "shopify sklep internetowy",
    "integracja sklepu z erp crm",
    "sklepy internetowe krakow",
    "automatyzacja sprzedazy online",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
      "en": "https://ml-devworks.com/en/services/online-stores-booking-systems",
      "x-default": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    },
  },
  openGraph: {
    title: "Sklepy internetowe dla firm | ML DevWorks",
    description:
      "E-commerce z integracjami płatności, dostaw, ERP/CRM, katalogu produktów i analityki sprzedaży.",
    url: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sklepy internetowe dla firm | ML DevWorks",
    description:
      "E-commerce z integracjami płatności, dostaw, ERP/CRM, katalogu produktów i analityki sprzedaży.",
  },
};

export default function SklepyInternetoweSystemyRezerwacjiPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Sklepy internetowe i e-commerce dla firm",
    "description": "Kompletne rozwiązania e-commerce z integracją płatności, dostaw, katalogu produktów, ERP/CRM i analityki sprzedaży.",
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
    "serviceType": "E-commerce Development",
    "category": "E-commerce"
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
        "name": "Sklepy internetowe",
        "item": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji"
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
      <ServiceFaqSchema serviceId="ecommerce-booking" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="ecommerce-booking" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Sklepy internetowe i <span className="text-primary">e-commerce dla firm</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Projektujemy sklepy B2C i B2B z koszykiem, płatnościami, dostawami, katalogiem produktów, integracjami ERP/CRM i analityką sprzedaży.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
              >
                Bezpłatna Wycena
              </Link>
              <Link
                href="/uslugi"
                className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Zobacz Wszystkie Usługi
              </Link>
            </div>
          </div>
        </section>
        <ServiceSeoSections serviceId="ecommerce-booking" lang="pl" />

        {/* Main Content */}
        <section className="px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* What I Offer */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Co oferuję?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Sklepy Internetowe (E-commerce)</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Profesjonalne sklepy internetowe od podstaw lub na bazie gotowych platform. Pełna funkcjonalność e-commerce z zarządzaniem produktami, zamówieniami i klientami.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Katalog produktów z filtrowaniem</li>
                    <li>Koszyk i proces zamówienia</li>
                    <li>Integracja płatności online</li>
                    <li>Panel administracyjny</li>
                    <li>Zarządzanie magazynem</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Integracje dostaw i zaplecza</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Łączymy sklep z kurierami, paczkomatami, fakturowaniem, magazynem, CRM i ERP, żeby zamówienia nie wymagały ręcznego przepisywania danych.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Integracje kurierskie i paczkomaty</li>
                    <li>Faktury i dokumenty sprzedaży</li>
                    <li>Synchronizacja stanów magazynowych</li>
                    <li>Eksport zamówień do ERP/CRM</li>
                    <li>Automatyzacje statusów zamówień</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Integracje Płatności</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Pełna integracja z popularnymi systemami płatności: Przelewy24, Stripe, PayPal, Dotpay, Tpay i inne. Bezpieczne i zgodne z PCI DSS.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Płatności online</li>
                    <li>Płatności ratalne</li>
                    <li>Subskrypcje i abonamenty</li>
                    <li>Zwroty i zwrot środków</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Analityka i Raportowanie</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zaawansowane narzędzia analityczne do śledzenia sprzedaży, konwersji, zachowań użytkowników i optymalizacji wyników biznesowych.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Dashboard z metrykami</li>
                    <li>Raporty sprzedaży</li>
                    <li>Analiza konwersji</li>
                    <li>Integracja z Google Analytics</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Kluczowe Funkcjonalności
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🛒 Zarządzanie Produktami</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intuicyjny system zarządzania produktami z możliwością dodawania wariantów, atrybutów, kategorii, zdjęć i opisów. Import/export produktów, zarządzanie cenami i promocjami.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📦 Zarządzanie Zamówieniami</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Kompleksowy system zarządzania zamówieniami: statusy, historia, powiadomienia, faktury, etykiety wysyłkowe. Integracja z systemami kurierskimi i fakturowymi.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">👥 Zarządzanie Klientami</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Baza klientów z historią zakupów, preferencjami i danymi kontaktowymi. Programy lojalnościowe, karty rabatowe, segmentacja klientów i marketing automation.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Inny typ projektu?</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Potrzebujesz rezerwacji online zamiast sklepu? Mamy osobną usługę dla kalendarzy, terminów, przypomnień i zaliczek: <Link href="/uslugi/systemy-rezerwacji-online" className="text-primary hover:text-primary-light underline">Systemy rezerwacji online dla firm</Link>.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💳 Bezpieczne Płatności</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Pełna integracja z bramkami płatniczymi, obsługa kart kredytowych, przelewów, płatności mobilnych. Zgodność z PCI DSS, szyfrowanie danych i bezpieczne przechowywanie.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Analityka i optymalizacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Szczegółowe raporty sprzedaży, analiza konwersji, śledzenie zachowań użytkowników, A/B testing, optymalizacja procesu zakupowego i zwiększanie sprzedaży.
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
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Szybka Implementacja</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dzięki wykorzystaniu sprawdzonych rozwiązań i narzędzi AI wdrażam sklepy internetowe szybko. Od koncepcji do uruchomienia w kilka tygodni.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💰 Optymalizacja Konwersji</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Projektujemy z myślą o konwersji. Optymalizujemy proces zakupowy, upraszczamy formularze, poprawiamy UX - wszystko po to, aby zwiększyć sprzedaż.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📱 Pełna Responsywność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Każdy sklep internetowy jest w pełni responsywny i doskonale działa na wszystkich urządzeniach. Mobile-first approach - większość użytkowników kupuje na telefonach.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Bezpieczeństwo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Najwyższe standardy bezpieczeństwa: szyfrowanie SSL, zgodność z RODO, bezpieczne przechowywanie danych, ochrona przed atakami. Twoje dane i dane klientów są bezpieczne.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔧 Skalowalność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Architektura, która rośnie wraz z Twoim biznesem. Systemy zaprojektowane do obsługi tysięcy produktów, zamówień i użytkowników jednocześnie.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Kompleksowa obsługa</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Od analizy potrzeb, przez projektowanie, rozwój, wdrożenie, szkolenie, aż po utrzymanie i wsparcie - zapewniamy pełną obsługę na każdym etapie.
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
                    <h3 className="text-xl font-bold mb-2">Analiza i Planowanie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Analizujemy Twoje potrzeby, asortyment, procesy biznesowe i cele. Tworzymy szczegółowy plan projektu, wybieramy najlepsze rozwiązania i technologie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Implementacja UX/UI</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Budujemy interfejs użytkownika z myślą o konwersji. Optymalizujemy doświadczenie użytkownika dla maksymalnej sprzedaży.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Rozwój i Integracje</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Programujemy sklep, integrujemy płatności, systemy kurierskie, fakturowanie i inne niezbędne narzędzia. Tworzymy panel administracyjny.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testowanie i Optymalizacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Testujemy wszystkie funkcjonalności, proces płatności, zamówienia, integracje i statusy. Optymalizujemy wydajność, bezpieczeństwo i user experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i Szkolenie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wdrażamy system na produkcję, konfigurujemy domenę, SSL, integracje. Szkolimy z obsługi panelu administracyjnego i przekazujemy dokumentację.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wsparcie i Rozwój</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Zapewniamy ciągłe wsparcie techniczne, aktualizacje, monitoring, backup. Pomagamy w rozwoju funkcjonalności i optymalizacji wyników sprzedaży.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gotowy na profesjonalny sklep internetowy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się ze mną i otrzymaj bezpłatną wycenę sklepu internetowego, platformy B2B lub integracji e-commerce.
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
