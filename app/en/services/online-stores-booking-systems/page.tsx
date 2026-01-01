import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Online Stores & Booking Systems - E-commerce & Online Booking | ML Devworks",
  description: "Complete e-commerce solutions and booking systems with payment integration, product management, and sales analytics. Professional online stores and booking systems for your business.",
  keywords: [
    "online stores",
    "e-commerce",
    "online shop",
    "booking systems",
    "online booking",
    "e-commerce platform",
    "online store",
    "payment integration",
    "product management",
    "sales analytics",
    "woocommerce",
    "shopify",
    "booking system",
    "reservation system",
    "online stores Krakow",
    "e-commerce development",
    "online store development",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/services/online-stores-booking-systems",
    languages: {
      "pl": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
      "en": "https://ml-devworks.com/en/services/online-stores-booking-systems",
    },
  },
  openGraph: {
    title: "Online Stores & Booking Systems - E-commerce & Online Booking | ML Devworks",
    description: "Complete e-commerce solutions and booking systems with payment integration, product management, and sales analytics.",
    url: "https://ml-devworks.com/en/services/online-stores-booking-systems",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Stores & Booking Systems - E-commerce & Online Booking | ML Devworks",
    description: "Complete e-commerce solutions and booking systems with payment integration, product management, and sales analytics.",
  },
};

export default function OnlineStoresBookingSystemsPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Online Stores & Booking Systems",
    "description": "Complete e-commerce solutions and booking systems with payment integration, product management, and sales analytics.",
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
    "serviceType": "E-commerce Development, Booking System Development",
    "category": "E-commerce, Online Booking"
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
        "name": "Online Stores & Booking Systems",
        "item": "https://ml-devworks.com/en/services/online-stores-booking-systems"
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
              Online Stores & <span className="text-primary">Booking Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Complete e-commerce solutions and booking systems that increase sales and simplify managing your online business.
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Online Stores (E-commerce)</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Professional online stores from scratch or based on ready-made platforms. Full e-commerce functionality with product, order, and customer management.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Product catalog with filtering</li>
                    <li>Shopping cart and checkout process</li>
                    <li>Online payment integration</li>
                    <li>Admin panel</li>
                    <li>Inventory management</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Booking Systems</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Advanced online booking systems for hotels, restaurants, services, events, and other businesses requiring appointment scheduling.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Availability calendar</li>
                    <li>Online appointment booking</li>
                    <li>Payments and confirmations</li>
                    <li>Email/SMS notifications</li>
                    <li>Resource management</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Payment Integrations</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Full integration with popular payment systems: Stripe, PayPal, Przelewy24, and others. Secure and PCI DSS compliant.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Online payments</li>
                    <li>Installment payments</li>
                    <li>Subscriptions and memberships</li>
                    <li>Returns and refunds</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Analytics & Reporting</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Advanced analytics tools for tracking sales, conversions, user behavior, and optimizing business results.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Dashboard with metrics</li>
                    <li>Sales reports</li>
                    <li>Conversion analysis</li>
                    <li>Google Analytics integration</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Key Features
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🛒 Product Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Intuitive product management system with the ability to add variants, attributes, categories, images, and descriptions. Product import/export, price and promotion management.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📦 Order Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Comprehensive order management system: statuses, history, notifications, invoices, shipping labels. Integration with courier and invoicing systems.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">👥 Customer Management</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customer database with purchase history, preferences, and contact data. Loyalty programs, discount cards, customer segmentation, and marketing automation.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📅 Booking System</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Advanced calendar with availability view, time slot blocking, resource management (rooms, tables, services), automatic reminders, and booking cancellation.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💳 Secure Payments</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Full integration with payment gateways, credit card processing, bank transfers, mobile payments. PCI DSS compliance, data encryption, and secure storage.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Analytics & Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Detailed sales reports, conversion analysis, user behavior tracking, A/B testing, checkout process optimization, and sales increase.
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
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Fast Implementation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Thanks to the use of proven solutions and AI tools, we deploy stores and booking systems quickly. From concept to launch in a few weeks.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💰 Conversion Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We design with conversion in mind. We optimize the checkout process, simplify forms, improve UX - all to increase sales.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📱 Full Responsiveness</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every store and booking system is fully responsive and works perfectly on all devices. Mobile-first approach - most users browse on phones.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔒 Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Highest security standards: SSL encryption, GDPR compliance, secure data storage, attack protection. Your data and customer data are safe.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔧 Scalability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Architecture that grows with your business. Systems designed to handle thousands of products, orders, and users simultaneously.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Comprehensive Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From needs analysis, through design, development, deployment, training, to maintenance and support - we provide full service at every stage.
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
                      We analyze your needs, inventory, business processes, and goals. We create a detailed project plan, choose the best solutions and technologies.
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
                      We design the user interface with conversion in mind. We create wireframes, mockups, and prototypes. We optimize user experience for maximum sales.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Development & Integrations</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We program the store or booking system, integrate payments, courier systems, invoicing, and other necessary tools. We create an admin panel.
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
                      We test all functionalities, payment processes, bookings, integrations. We optimize performance, security, and user experience.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Deployment & Training</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We deploy the system to production, configure domain, SSL, integrations. We train on admin panel usage and provide documentation.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Support & Development</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We provide continuous technical support, updates, monitoring, backup. We help with feature development and sales performance optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for a Professional Store or Booking System?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us and get a free quote for your e-commerce or booking system project.
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

