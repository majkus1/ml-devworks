import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DevOps & Wdrożenia - Wdrożenia w Chmurze i CI/CD | ML Devworks",
  description: "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji. Profesjonalne usługi DevOps dla Twojego projektu.",
  keywords: [
    "devops",
    "wdrożenia",
    "wdrożenia w chmurze",
    "cloud deployment",
    "CI/CD",
    "continuous integration",
    "continuous deployment",
    "monitoring",
    "backup",
    "infrastruktura",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "infrastructure as code",
    "devops Kraków",
    "cloud services",
    "server management",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/uslugi/devops-wdrozenia",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/devops-wdrozenia",
      "en": "https://ml-devworks.com/en/services/devops-deployment",
    },
  },
  openGraph: {
    title: "DevOps & Wdrożenia - Wdrożenia w Chmurze i CI/CD | ML Devworks",
    description: "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji.",
    url: "https://ml-devworks.com/uslugi/devops-wdrozenia",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps & Wdrożenia - Wdrożenia w Chmurze i CI/CD | ML Devworks",
    description: "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji.",
  },
};

export default function DevOpsWdrozeniaPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DevOps & Wdrożenia",
    "description": "Wdrożenie aplikacji w chmurze, konfiguracja CI/CD, monitoring, backup i pełne utrzymanie infrastruktury. Od developmentu do produkcji.",
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
    "serviceType": "DevOps, Cloud Deployment, Infrastructure Management",
    "category": "IT Infrastructure, Cloud Services"
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
        "name": "DevOps & Wdrożenia",
        "item": "https://ml-devworks.com/uslugi/devops-wdrozenia"
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
              <span className="text-primary">DevOps</span> & Wdrożenia
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Profesjonalne wdrożenia w chmurze, automatyzacja procesów i pełne utrzymanie infrastruktury. Od developmentu do produkcji - kompleksowa obsługa DevOps.
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Wdrożenia w Chmurze</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Wdrażanie aplikacji na platformach cloud: AWS, Azure, Google Cloud, Vercel, Netlify. Konfiguracja infrastruktury, skalowanie i optymalizacja kosztów.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>AWS, Azure, Google Cloud</li>
                    <li>Vercel, Netlify, Railway</li>
                    <li>Konteneryzacja (Docker, Kubernetes)</li>
                    <li>Serverless architecture</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">CI/CD Pipeline</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Konfiguracja ciągłej integracji i wdrażania (CI/CD) z automatycznym testowaniem, budowaniem i wdrażaniem aplikacji.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>GitHub Actions, GitLab CI</li>
                    <li>Jenkins, CircleCI</li>
                    <li>Automatyczne testy</li>
                    <li>Automatyczne wdrożenia</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Monitoring i Logging</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Konfiguracja systemów monitoringu wydajności, logowania i alertowania. Śledzenie metryk, błędów i wydajności aplikacji w czasie rzeczywistym.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Application Performance Monitoring</li>
                    <li>Error tracking i logging</li>
                    <li>Alerty i powiadomienia</li>
                    <li>Dashboards i raporty</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Backup i Disaster Recovery</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Automatyczne kopie zapasowe danych, planowanie disaster recovery i strategie przywracania systemu po awariach.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Automatyczne backupy</li>
                    <li>Strategie disaster recovery</li>
                    <li>Testowanie przywracania</li>
                    <li>Replikacja danych</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Technologie i Narzędzia
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">Cloud Platforms</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Google Cloud</li>
                    <li>Vercel / Netlify</li>
                  </ul>
                </div>
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">Containers & Orchestration</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>Docker Compose</li>
                    <li>Helm</li>
                  </ul>
                </div>
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20 text-center">
                  <h3 className="text-xl font-bold mb-3 text-primary">CI/CD & IaC</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li>GitHub Actions</li>
                    <li>Terraform</li>
                    <li>Ansible</li>
                    <li>Jenkins</li>
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
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Szybkie Wdrożenia</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Dzięki automatyzacji i sprawdzonym procesom, wdrażamy aplikacje szybko i bezpiecznie. Od developmentu do produkcji w ciągu godzin, nie tygodni.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔒 Bezpieczeństwo</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Najwyższe standardy bezpieczeństwa: szyfrowanie, kontrola dostępu, security scanning, compliance z najlepszymi praktykami. Twoja infrastruktura jest bezpieczna.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Skalowalność</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Architektura, która automatycznie skaluje się w zależności od obciążenia. Cloud-native rozwiązania, które rosną wraz z Twoim biznesem.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💰 Optymalizacja Kosztów</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Optymalizujemy infrastrukturę pod kątem kosztów. Wybieramy najlepsze rozwiązania, które zapewniają wydajność przy rozsądnych kosztach.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Monitoring 24/7</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ciągłe monitorowanie infrastruktury i aplikacji. Alerty o problemach, proaktywne reagowanie i zapewnienie wysokiej dostępności.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Kompleksowa Obsługa</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Od planowania infrastruktury, przez konfigurację, wdrożenie, monitoring, aż po utrzymanie i rozwój - zapewniamy pełną obsługę DevOps.
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
                      Analizujemy wymagania aplikacji, skalę, budżet i cele. Planujemy architekturę infrastruktury, wybieramy najlepsze platformy i narzędzia.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Konfiguracja Infrastruktury</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Tworzymy infrastrukturę w chmurze, konfigurujemy serwery, bazy danych, sieci i bezpieczeństwo. Używamy Infrastructure as Code dla powtarzalności.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Konfiguracja CI/CD</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Konfigurujemy pipeline CI/CD: automatyczne testy, build, deployment. Ustawiamy środowiska dev, staging i production z automatycznym wdrażaniem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Monitoring i Backup</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Konfigurujemy monitoring wydajności, logowanie, alerty i automatyczne backupy. Testujemy disaster recovery i strategie przywracania.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Wdrożenie i Testy</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Wdrażamy aplikację na produkcję, testujemy wszystkie funkcjonalności, wydajność i bezpieczeństwo. Optymalizujemy i dostosowujemy konfigurację.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Utrzymanie i Wsparcie</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Zapewniamy ciągłe monitorowanie, aktualizacje, optymalizację, backup i wsparcie techniczne. Reagujemy na problemy i rozwijamy infrastrukturę.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Gotowy na Profesjonalne Wdrożenie DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Skontaktuj się z nami i otrzymaj bezpłatną wycenę dla Twojego projektu DevOps.
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

