import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ServiceSeoSections, { ServiceFaqSchema, ServiceOfferCatalogSchema } from "@/components/ServiceSeoSections";

export const metadata: Metadata = {
  title: "Aplikacje webowe i mobilne dla firm | ML DevWorks",
  description:
    "Tworzę aplikacje webowe i mobilne dla firm: panele klienta, systemy zamówień, aplikacje iOS/Android oraz MVP. Skalowalne i bezpieczne.",
  keywords: [
    "aplikacje webowe dla firm",
    "aplikacje mobilne dla biznesu",
    "tworzenie aplikacji internetowych",
    "tworzenie aplikacji ios android",
    "aplikacja do obslugi klientow",
    "system zamowien online",
    "panel administracyjny aplikacji",
    "mvp dla startupu",
    "aplikacje react native",
    "aplikacje next js",
    "skalowalne aplikacje biznesowe",
    "aplikacje mobilne krakow",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
      "en": "https://ml-devworks.com/en/services/web-and-mobile-applications",
      "x-default": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    },
  },
  openGraph: {
    title: "Aplikacje webowe i mobilne dla firm | ML DevWorks",
    description:
      "Tworzę aplikacje webowe i mobilne dla firm: panele klienta, systemy zamówień, aplikacje iOS/Android oraz MVP. Skalowalne i bezpieczne.",
    url: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aplikacje webowe i mobilne dla firm | ML DevWorks",
    description:
      "Tworzę aplikacje webowe i mobilne dla firm: panele klienta, systemy zamówień, aplikacje iOS/Android oraz MVP. Skalowalne i bezpieczne.",
  },
};

export default function AplikacjeInternetoweIMobilnePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aplikacje Internetowe i Mobilne",
    "description": "Tworzę nowoczesne aplikacje webowe i mobilne dla firm: panele klienta, systemy zamówień, MVP oraz aplikacje iOS/Android.",
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
    "serviceType": "Web Application Development, Mobile Application Development",
    "category": "Software Development"
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
        "name": "Aplikacje Internetowe i Mobilne",
        "item": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne"
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
      <ServiceFaqSchema serviceId="apps" lang="pl" />
      <ServiceOfferCatalogSchema serviceId="apps" lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Aplikacje webowe i mobilne <span className="text-primary">dla firm</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Dedykowane aplikacje webowe i mobilne na zamówienie: panele klienta, systemy wewnętrzne, aplikacje iOS/Android i MVP, które porządkują procesy i przyspieszają rozwój firmy.
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
        <ServiceSeoSections serviceId="apps" lang="pl" />

        <section className="px-4 py-12" aria-labelledby="mobile-only-heading">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h2 id="mobile-only-heading" className="text-2xl font-bold text-white mb-2">Szukasz tylko aplikacji mobilnej na zamówienie?</h2>
              <p className="text-gray-300 leading-relaxed">
                Aplikacje mobilne dla firm (iOS i Android) dla pracowników w terenie, serwisu, sprzedaży i klientów opisuję na osobnej stronie: technologie, koszty, czas i publikacja w sklepach.
              </p>
            </div>
            <Link href="/uslugi/aplikacje-mobilne-dla-firm" className="shrink-0 px-6 py-3 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center">
              Aplikacje mobilne dla firm
            </Link>
          </div>
        </section>

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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Aplikacje Webowe</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zaawansowane aplikacje internetowe (SPA, PWA) z wykorzystaniem najnowszych frameworków. Szybkie, responsywne i zoptymalizowane pod wydajność.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Single Page Applications (SPA)</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>Real-time aplikacje</li>
                    <li>Integracje z API i systemami zewnętrznymi</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Aplikacje Mobilne iOS</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Natywne aplikacje iOS tworzone w Swift i SwiftUI. Pełna integracja z ekosystemem Apple, wykorzystanie najnowszych funkcji systemu.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Natywne aplikacje Swift/SwiftUI</li>
                    <li>Integracja z Apple Services</li>
                    <li>App Store optimization</li>
                    <li>Wsparcie dla iPhone i iPad</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Aplikacje Mobilne Android</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Natywne aplikacje Android w Kotlin i Jetpack Compose. Zoptymalizowane pod różne rozmiary ekranów i wersje systemu.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Natywne aplikacje Kotlin/Java</li>
                    <li>Material Design</li>
                    <li>Google Play optimization</li>
                    <li>Wsparcie dla wszystkich urządzeń Android</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Aplikacje Cross-Platform</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Jeden kod dla iOS i Android. React Native, Flutter i inne technologie cross-platform, które oszczędzają czas i koszty.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>Jedna baza kodu dla wielu platform</li>
                    <li>Szybszy rozwój i niższe koszty</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Technologie, Których Używam
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">Web</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>React / Next.js</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>Express / NestJS</li>
                  </ul>
                </div>
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">Mobile Native</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Swift / SwiftUI</li>
                    <li>Kotlin / Jetpack Compose</li>
                    <li>Objective-C</li>
                    <li>Java</li>
                  </ul>
                </div>
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">Cross-Platform</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>Ionic</li>
                    <li>Xamarin</li>
                  </ul>
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
                  <h3 className="text-xl font-bold mb-3 text-primary">Najnowsze technologie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Wykorzystuję najnowsze frameworki i narzędzia, które zapewniają najlepszą wydajność, bezpieczeństwo i skalowalność. Zawsze wybieram najlepsze rozwiązanie dla Twojego projektu.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Bezpieczeństwo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Bezpieczeństwo to priorytet. Implementuję najlepsze praktyki bezpieczeństwa, szyfrowanie danych, autoryzację i uwierzytelnianie zgodne z najwyższymi standardami.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Skalowalność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Projektuję aplikacje z myślą o przyszłości. Architektura, która rośnie wraz z Twoim biznesem. Cloud-native rozwiązania, które automatycznie skalują się w zależności od obciążenia.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🎨 Doskonałe UX/UI</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intuicyjne interfejsy użytkownika, które są nie tylko piękne, ale także funkcjonalne. Projektuję z myślą o użytkowniku, zapewniając najlepsze doświadczenie.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Szybki Czas Realizacji</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dzięki wykorzystaniu narzędzi AI i sprawdzonych procesów realizuję projekty szybciej bez kompromisów w jakości. Agile methodology i ciągła komunikacja.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">Kompleksowa obsługa</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Od koncepcji, przez projektowanie, rozwój, testowanie, wdrożenie, aż po utrzymanie - zapewniam pełną obsługę na każdym etapie. Wsparcie techniczne i aktualizacje.
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
                      Analizuję Twoje potrzeby, cele biznesowe i wymagania techniczne. Tworzę szczegółowy plan projektu, wybieram najlepsze technologie i architekturę.
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
                      Buduję interfejs, który jest intuicyjny i przyjazny dla użytkownika. Dbam o wysoką jakość doświadczenia użytkownika.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Rozwój (Development)</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Programuję aplikację zgodnie z najlepszymi praktykami. Piszę czysty, czytelny kod, który jest łatwy w utrzymaniu. Pracuję iteracyjnie i pokazuję regularne aktualizacje.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testowanie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Kompleksowe testowanie funkcjonalności, wydajności, bezpieczeństwa i użyteczności. Testy automatyczne i manualne. Beta testing z użytkownikami.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i Publikacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wdrażam aplikację na produkcję. Publikuję w App Store i Google Play (dla aplikacji mobilnych). Konfiguruję monitoring, backup i infrastrukturę.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wsparcie i Utrzymanie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Zapewniam ciągłe wsparcie techniczne, aktualizacje, naprawy błędów i rozwój funkcjonalności. Monitoruję wydajność i reaguję na potrzeby użytkowników.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gotowy na Nowoczesną Aplikację?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się ze mną i otrzymaj bezpłatną wycenę dla Twojego projektu aplikacji.
              </p>
              <Link
                href="/#contact"
                className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
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
