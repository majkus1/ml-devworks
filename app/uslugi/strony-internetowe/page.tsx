import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Tworzenie Stron Internetowych dla Firm - Szybkie i Skuteczne WWW | ML Devworks",
  description:
    "Projektujemy i wdrazamy strony internetowe dla firm: strony uslugowe, landing page i strony ofertowe. Szybkie ladowanie, SEO techniczne, formularze kontaktowe i realne wsparcie sprzedazy online.",
  keywords: [
    "tworzenie stron internetowych dla firm",
    "strona internetowa dla firmy uslugowej",
    "strony www dla malych firm",
    "projektowanie i wdrazanie stron www",
    "landing page dla firmy",
    "strona ofertowa dla biznesu",
    "strona internetowa z formularzem kontaktowym",
    "responsywna strona internetowa",
    "strona internetowa SEO",
    "optymalizacja techniczna strony www",
    "strony internetowe krakow",
    "wykonanie strony internetowej cena",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/strony-internetowe",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/strony-internetowe",
      "en": "https://ml-devworks.com/en/services/web-development",
      "x-default": "https://ml-devworks.com/uslugi/strony-internetowe",
    },
  },
  openGraph: {
    title: "Tworzenie Stron Internetowych dla Firm | ML Devworks",
    description:
      "Skuteczne strony WWW dla firm: szybkie, responsywne i przygotowane pod SEO oraz pozyskiwanie zapytan.",
    url: "https://ml-devworks.com/uslugi/strony-internetowe",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://ml-devworks.com/psi.png",
        width: 1200,
        height: 630,
        alt: "ML Devworks - Strony Internetowe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tworzenie Stron Internetowych dla Firm | ML Devworks",
    description:
      "Skuteczne strony WWW dla firm: szybkie, responsywne i przygotowane pod SEO oraz pozyskiwanie zapytan.",
    images: ["https://ml-devworks.com/psi.png"],
  },
};

export default function StronyInternetowePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strony Internetowe",
    "description": "Tworzymy profesjonalne strony internetowe dostosowane do Twoich potrzeb. Responsywne, szybkie i zoptymalizowane pod SEO. Od prostych stron wizytówkowych po zaawansowane portale.",
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
    "serviceType": "Web Development",
    "category": "Website Development"
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
        "name": "Strony Internetowe",
        "item": "https://ml-devworks.com/uslugi/strony-internetowe"
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
              Profesjonalne <span className="text-primary">Strony Internetowe</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Tworzymy strony internetowe, które nie tylko wyglądają świetnie, ale także przynoszą realne rezultaty dla Twojego biznesu.
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Strony Wizytówkowe</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Proste, eleganckie strony firmowe, które prezentują Twoją działalność w najlepszym świetle. Idealne dla małych firm, freelancerów i profesjonalistów.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Responsywny design</li>
                    <li>Optymalizacja SEO</li>
                    <li>Integracja z mediami społecznościowymi</li>
                    <li>Formularz kontaktowy</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Strony Firmowe</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zaawansowane strony dla średnich i dużych firm z wieloma sekcjami, galeriami, blogiem i systemem zarządzania treścią.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>System CMS (Content Management System)</li>
                    <li>Wielojęzyczność</li>
                    <li>Zaawansowane formularze</li>
                    <li>Integracja z systemami zewnętrznymi</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Landing Pages</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Strony zaprojektowane specjalnie pod konwersję - idealne do kampanii marketingowych, promocji i produktów.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Optymalizacja konwersji</li>
                    <li>Szybkie ładowanie</li>
                    <li>A/B testing ready</li>
                    <li>Integracja z narzędziami marketingowymi</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Portale i Aplikacje Webowe</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Zaawansowane portale z panelami użytkowników, systemami rezerwacji, integracjami API i wieloma innymi funkcjami.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Panele administracyjne</li>
                    <li>Systemy rezerwacji</li>
                    <li>Integracje API</li>
                    <li>Zaawansowana funkcjonalność</li>
                  </ul>
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
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Szybkość i Wydajność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Nasze strony ładują się błyskawicznie dzięki optymalizacji kodu, obrazów i wykorzystaniu najnowszych technologii. Szybka strona to lepsze doświadczenie użytkownika i wyższe pozycje w Google.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📱 Pełna Responsywność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Każda strona jest w pełni responsywna i doskonale wygląda na wszystkich urządzeniach - od smartfonów, przez tablety, po duże monitory. Mobile-first approach to nasz standard.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔍 Optymalizacja SEO</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Każda strona jest zoptymalizowana pod kątem wyszukiwarek. Struktura semantyczna, meta tagi, szybkość ładowania, mobile-friendly - wszystko to wpływa na Twoją widoczność w Google.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🎨 Nowoczesny Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Tworzymy strony, które nie tylko są funkcjonalne, ale także pięknie wyglądają. Nowoczesny, minimalistyczny design, który przyciąga uwagę i buduje zaufanie.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🛠️ Najnowsze Technologie</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Wykorzystujemy najnowsze technologie webowe (Next.js, React, TypeScript) oraz narzędzia AI, które przyspieszają proces tworzenia bez kompromisów w jakości.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Kompleksowa Obsługa</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Od koncepcji, przez projektowanie, wdrożenie, aż po utrzymanie - zapewniamy pełną obsługę na każdym etapie. Stawiamy na długotrwałą współpracę.
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
                    <h3 className="text-xl font-bold mb-2">Konsultacja i Analiza</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Rozmawiamy o Twoich potrzebach, celach biznesowych i oczekiwaniach. Analizujemy konkurencję i tworzymy strategię.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Programowanie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Implementujemy projekt używając najnowszych technologii. Tworzymy kod wysokiej jakości, zoptymalizowany i łatwy w utrzymaniu.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testowanie i Optymalizacja</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Testujemy stronę na różnych urządzeniach i przeglądarkach. Optymalizujemy wydajność i SEO. Wszystko musi działać perfekcyjnie.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i Wsparcie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wdrażamy stronę na produkcję i zapewniamy pełne wsparcie techniczne. Pomagamy w utrzymaniu, aktualizacjach i rozwoju.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gotowy na Profesjonalną Stronę Internetową?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę dla Twojego projektu.
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

