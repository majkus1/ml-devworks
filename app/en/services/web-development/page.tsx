import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Web Development - Professional Websites | ML Devworks",
  description: "We create professional websites tailored to your needs. Responsive, fast, and SEO-optimized. From simple business cards to advanced portals. Check out our offer!",
  keywords: [
    "web development",
    "website development",
    "website design",
    "business websites",
    "corporate websites",
    "responsive design",
    "SEO websites",
    "SEO optimization",
    "web development Krakow",
    "website development company",
    "professional websites",
    "custom websites",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/web-development",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/strony-internetowe",
      "en": "https://ml-devworks.com/en/services/web-development",
    },
  },
  openGraph: {
    title: "Web Development - Professional Websites | ML Devworks",
    description: "We create professional websites tailored to your needs. Responsive, fast, and SEO-optimized.",
    url: "https://ml-devworks.com/en/services/web-development",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development - Professional Websites | ML Devworks",
    description: "We create professional websites tailored to your needs. Responsive, fast, and SEO-optimized.",
  },
};

export default function WebDevelopmentPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web Development",
    "description": "We create professional websites tailored to your needs. Responsive, fast, and SEO-optimized. From simple business cards to advanced portals.",
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
        "availableLanguage": ["English"]
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
        "name": "Home",
        "item": "https://ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Web Development",
        "item": "https://ml-devworks.com/en/services/web-development"
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
              Professional <span className="text-primary">Web Development</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              We create websites that not only look great but also deliver real results for your business.
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Business Card Websites</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Simple, elegant corporate websites that present your business in the best light. Perfect for small businesses, freelancers, and professionals.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Responsive design</li>
                    <li>SEO optimization</li>
                    <li>Social media integration</li>
                    <li>Contact form</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Corporate Websites</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Advanced websites for medium and large companies with multiple sections, galleries, blogs, and content management systems.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>CMS (Content Management System)</li>
                    <li>Multilingual support</li>
                    <li>Advanced forms</li>
                    <li>External system integration</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Landing Pages</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Pages designed specifically for conversion - perfect for marketing campaigns, promotions, and products.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Conversion optimization</li>
                    <li>Fast loading</li>
                    <li>A/B testing ready</li>
                    <li>Marketing tools integration</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Portals & Web Applications</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Advanced portals with user panels, booking systems, API integrations, and many other features.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Admin panels</li>
                    <li>Booking systems</li>
                    <li>API integrations</li>
                    <li>Advanced functionality</li>
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
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Speed & Performance</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Our websites load instantly thanks to code optimization, images, and the latest technologies. A fast website means better user experience and higher Google rankings.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📱 Full Responsiveness</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every website is fully responsive and looks perfect on all devices - from smartphones, through tablets, to large monitors. Mobile-first approach is our standard.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔍 SEO Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every website is optimized for search engines. Semantic structure, meta tags, loading speed, mobile-friendly - all of this affects your visibility in Google.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🎨 Modern Design</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We create websites that are not only functional but also beautiful. Modern, minimalist design that attracts attention and builds trust.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🛠️ Latest Technologies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use the latest web technologies (Next.js, React, TypeScript) and AI tools that speed up the creation process without compromising quality.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Comprehensive Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From concept, through design, implementation, to maintenance - we provide full service at every stage. We focus on long-term partnerships.
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
                    <h3 className="text-xl font-bold mb-2">Consultation & Analysis</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We discuss your needs, business goals, and expectations. We analyze the competition and create a strategy.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Design</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We create a graphic design and website structure. We present the concept and refine details according to your feedback.
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
                      We implement the project using the latest technologies. We create high-quality, optimized, and maintainable code.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testing & Optimization</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We test the website on various devices and browsers. We optimize performance and SEO. Everything must work perfectly.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Deployment & Support</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We deploy the website to production and provide full technical support. We help with maintenance, updates, and development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for a Professional Website?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us and get a free quote for your project.
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

