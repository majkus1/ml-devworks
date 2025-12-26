import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Fixes, Optimization & Maintenance - Technical Support for Projects | ML Devworks",
  description: "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application. Comprehensive maintenance and technical support for your projects.",
  keywords: [
    "bug fixing",
    "website fixes",
    "app fixes",
    "performance optimization",
    "SEO optimization",
    "conversion optimization",
    "maintenance",
    "technical support",
    "bug fixes",
    "performance optimization",
    "SEO optimization",
    "maintenance services",
    "app maintenance",
    "IT support",
    "project fixes",
    "optimization Krakow",
    "website maintenance",
  ],
  alternates: {
    canonical: "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance",
    languages: {
      "pl": "https://www.ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
      "en": "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance",
    },
  },
  openGraph: {
    title: "Fixes, Optimization & Maintenance - Technical Support for Projects | ML Devworks",
    description: "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application.",
    url: "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fixes, Optimization & Maintenance - Technical Support for Projects | ML Devworks",
    description: "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application.",
  },
};

export default function FixesOptimizationMaintenancePage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Fixes, Optimization & Maintenance",
    "description": "Bug fixes in existing projects, performance optimization, SEO, and conversion optimization. Restore full functionality of your website or application. Comprehensive maintenance and technical support for your projects.",
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
        "name": "Home",
        "item": "https://www.ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Fixes, Optimization & Maintenance",
        "item": "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance"
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
              Fixes, <span className="text-primary">Optimization</span> & <span className="text-primary">Maintenance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Restore full functionality of your website or application. Optimize performance, SEO, and conversion. Comprehensive technical support for your projects.
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Bug Fixes</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Diagnosing and fixing bugs in existing projects. Restoring functionality, fixing security, compatibility, and performance issues.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Problem diagnostics</li>
                    <li>Critical bug fixes</li>
                    <li>Security patches</li>
                    <li>Browser compatibility</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Performance Optimization</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Speeding up page loading, optimizing code, images, databases, and infrastructure. Increasing application performance and improving user experience.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Speed optimization</li>
                    <li>Code optimization</li>
                    <li>Image optimization</li>
                    <li>Database optimization</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">SEO Optimization</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Improving search engine visibility through meta tag optimization, page structure, content, internal links, and technical SEO aspects.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>SEO audit</li>
                    <li>On-page optimization</li>
                    <li>Core Web Vitals improvement</li>
                    <li>Structured data</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Conversion Optimization</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Increasing conversion through user experience optimization, checkout process, forms, CTAs, and analytics. A/B testing and continuous improvement.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Conversion analysis</li>
                    <li>UX optimization</li>
                    <li>A/B testing</li>
                    <li>Form optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Services Details */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Detailed Services
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔧 Fixes & Debugging</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Quick diagnosis and fixing of code errors, functionality issues, JavaScript errors, database problems, integrations, and security. Restoring full application functionality.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Performance Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Analysis and optimization of page load time, code optimization (minification, bundling), image optimization (compression, modern formats), database optimization, caching, CDN. Increasing PageSpeed Score.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔍 SEO Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive SEO audit, meta tag optimization, headers, content, internal links, structured data, Core Web Vitals improvement, mobile-first indexing, improving Google indexing.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Conversion Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Analysis of user behavior, identification of conversion drop points, checkout process optimization, forms, CTAs, landing pages. A/B testing and continuous improvement of results.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Updates & Modernization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Updating frameworks, libraries, dependencies, CMS systems. Code modernization, migration to newer technologies, refactoring. Maintaining compliance with latest standards.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🛡️ Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Security audit, fixing security vulnerabilities, security updates, SSL configuration, attack protection, backup and disaster recovery. Ensuring data security.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Maintenance & Support</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Continuous monitoring, regular updates, backup, technical support, quick response to problems, consultations and advice. Full maintenance service for your project.
                  </p>
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
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Quick Response</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Quick problem diagnosis and immediate fixes. We prioritize critical bugs and ensure quick response to issues that affect your business operations.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Measurable Results</h3>
                  <p className="text-gray-300 leading-relaxed">
                    All optimizations are measurable. Before and after analysis, results reports, metrics monitoring. You see real improvements in performance, SEO, and conversion.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔍 Comprehensive Analysis</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Thorough analysis of the entire project before making changes. We identify all problems and optimization opportunities. We don&apos;t just fix symptoms, but root causes.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💡 Experience</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We have experience working with various technologies, frameworks, and systems. We quickly understand existing code and make fixes without disrupting operations.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Continuous Improvement</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We don&apos;t just fix, but also continuously optimize. We monitor results, collect feedback, and make improvements to make your project better and better.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Flexible Approach</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We adapt to your needs - from one-time fixes to long-term maintenance contracts. We work with projects in various technologies and sizes.
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
                    <h3 className="text-xl font-bold mb-2">Analysis & Diagnostics</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We analyze your project, identify problems, bugs, and areas for optimization. We create a detailed report with recommendations and an action plan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Quote & Plan</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We present a detailed quote and schedule. We agree on priorities and scope of work. We create an action plan divided into stages.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Implementation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We implement fixes and optimizations according to the plan. We work in a test environment, test changes, and ensure everything works correctly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testing & Verification</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We test all changes, verify fixes, check performance and functionality. We ensure everything works better than before the changes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Deployment & Documentation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We deploy changes to production, document fixes and optimizations. We provide a results report and recommendations for the future.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Monitoring & Support</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We monitor results after deployment, collect feedback, respond to any problems. We provide continuous support and further optimizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need Fixes or Optimization?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us and get a free analysis of your project and a quote for the work.
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

