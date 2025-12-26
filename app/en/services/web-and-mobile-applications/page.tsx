import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Web and Mobile Applications - Modern Web & Mobile Apps | ML Devworks",
  description: "We create modern web and mobile applications using the latest technologies. Fast, secure, and scalable solutions. iOS and Android apps. Native and cross-platform solutions for your business.",
  keywords: [
    "web applications",
    "mobile applications",
    "mobile apps",
    "iOS applications",
    "Android applications",
    "cross-platform apps",
    "native apps",
    "mobile app development",
    "web app development",
    "React Native",
    "Next.js",
    "business applications",
    "enterprise apps",
    "mobile app development Krakow",
    "web apps",
    "mobile apps",
  ],
  alternates: {
    canonical: "https://www.ml-devworks.com/en/services/web-and-mobile-applications",
    languages: {
      "pl": "https://www.ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
      "en": "https://www.ml-devworks.com/en/services/web-and-mobile-applications",
    },
  },
  openGraph: {
    title: "Web and Mobile Applications - Modern Web & Mobile Apps | ML Devworks",
    description: "We create modern web and mobile applications using the latest technologies. Fast, secure, and scalable solutions.",
    url: "https://www.ml-devworks.com/en/services/web-and-mobile-applications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web and Mobile Applications - Modern Web & Mobile Apps | ML Devworks",
    description: "We create modern web and mobile applications using the latest technologies. Fast, secure, and scalable solutions.",
  },
};

export default function WebAndMobileApplicationsPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web and Mobile Applications",
    "description": "We create modern web and mobile applications using the latest technologies. Fast, secure, and scalable solutions. iOS and Android apps. Native and cross-platform solutions for your business.",
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
        "availableLanguage": ["English"]
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
        "name": "Home",
        "item": "https://www.ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web and Mobile Applications",
        "item": "https://www.ml-devworks.com/en/services/web-and-mobile-applications"
      }
    ]
  };

  return (
    <>
      <StructuredData lang="en" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Web and <span className="text-primary">Mobile Applications</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Modern web and mobile applications that accelerate your business growth and provide an excellent user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/en#services"
                className="px-8 py-4 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                View All Services
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
                What We Offer?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Web Applications</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Advanced web applications (SPA, PWA) using the latest frameworks. Fast, responsive, and performance-optimized.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Single Page Applications (SPA)</li>
                    <li>Progressive Web Apps (PWA)</li>
                    <li>Real-time applications</li>
                    <li>API and external system integrations</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">iOS Mobile Applications</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Native iOS applications built with Swift and SwiftUI. Full integration with the Apple ecosystem, utilizing the latest system features.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Native Swift/SwiftUI apps</li>
                    <li>Apple Services integration</li>
                    <li>App Store optimization</li>
                    <li>iPhone and iPad support</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Android Mobile Applications</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Native Android applications in Kotlin and Jetpack Compose. Optimized for different screen sizes and system versions.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Native Kotlin/Java apps</li>
                    <li>Material Design</li>
                    <li>Google Play optimization</li>
                    <li>Support for all Android devices</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Cross-Platform Applications</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    One codebase for iOS and Android. React Native, Flutter, and other cross-platform technologies that save time and costs.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>One codebase for multiple platforms</li>
                    <li>Faster development and lower costs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Technologies We Use
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

            {/* Why Choose Us */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Latest Technologies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use the latest frameworks and tools that ensure the best performance, security, and scalability. We always choose the best solution for your project.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔒 Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Security is a priority. We implement best security practices, data encryption, authorization, and authentication in line with the highest standards.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Scalability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We design applications with the future in mind. Architecture that grows with your business. Cloud-native solutions that automatically scale based on load.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🎨 Excellent UX/UI</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intuitive user interfaces that are not only beautiful but also functional. We design with the user in mind, ensuring the best experience.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Fast Delivery</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Thanks to the use of AI tools and proven processes, we deliver projects faster without compromising quality. Agile methodology and continuous communication.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Comprehensive Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From concept, through design, development, testing, deployment, to maintenance - we provide full service at every stage. Technical support and updates.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                How Does the Process Work?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Analysis & Planning</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We analyze your needs, business goals, and technical requirements. We create a detailed project plan, choose the best technologies and architecture.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">UX/UI Design</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We create wireframes, mockups, and interface prototypes. We design user experience that is intuitive and user-friendly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Development</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We program the application according to best practices. We write clean, readable code that is easy to maintain. Agile development with regular updates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testing</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Comprehensive testing of functionality, performance, security, and usability. Automated and manual testing. Beta testing with users.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Deployment & Publication</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We deploy the application to production. We publish to App Store and Google Play (for mobile apps). We configure monitoring, backup, and infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Support & Maintenance</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We provide continuous technical support, updates, bug fixes, and feature development. We monitor performance and respond to user needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for a Modern Application?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us and get a free quote for your application project.
              </p>
              <Link
                href="/en#contact"
                className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-colors transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}

