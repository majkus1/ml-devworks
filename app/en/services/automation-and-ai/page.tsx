import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Automation & AI - Intelligent Automation Systems | ML Devworks",
  description: "Intelligent AI agents and business process automation systems. Automate repetitive tasks and increase your business efficiency. Modern AI solutions for your company.",
  keywords: [
    "automation",
    "process automation",
    "AI",
    "artificial intelligence",
    "AI agent",
    "business automation",
    "task automation",
    "automation systems",
    "AI chatbot",
    "machine learning",
    "workflow automation",
    "RPA",
    "robotic process automation",
    "automation Krakow",
    "AI for business",
    "intelligent automation",
  ],
  alternates: {
    canonical: "https://www.ml-devworks.com/en/services/automation-and-ai",
    languages: {
      "pl": "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
      "en": "https://www.ml-devworks.com/en/services/automation-and-ai",
    },
  },
  openGraph: {
    title: "Automation & AI - Intelligent Automation Systems | ML Devworks",
    description: "Intelligent AI agents and business process automation systems. Automate repetitive tasks and increase your business efficiency.",
    url: "https://www.ml-devworks.com/en/services/automation-and-ai",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Automation & AI - Intelligent Automation Systems | ML Devworks",
    description: "Intelligent AI agents and business process automation systems. Automate repetitive tasks and increase your business efficiency.",
  },
};

export default function AutomationAndAIPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Automation & AI",
    "description": "Intelligent AI agents and business process automation systems. Automate repetitive tasks and increase your business efficiency.",
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
        "name": "Home",
        "item": "https://www.ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Automation & AI",
        "item": "https://www.ml-devworks.com/en/services/automation-and-ai"
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
              <span className="text-amber-400">Automation</span> & <span className="text-amber-400">AI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Intelligent automation systems and AI agents that transform your business by eliminating repetitive tasks and increasing efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/en#contact"
                className="px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors transform hover:scale-105"
              >
                Get Free Quote
              </Link>
              <Link
                href="/en#services"
                className="px-8 py-4 bg-background-lighter border border-amber-400/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-400/10 transition-colors"
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
                <div className="bg-background-lighter rounded-xl p-6 border-2 border-amber-400/60 shadow-lg shadow-amber-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-amber-400">Intelligent AI Agents</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Advanced AI agents that can perform complex tasks, make decisions, and learn from data. Integrated with your systems and business processes.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>AI chatbots with natural language</li>
                    <li>Virtual assistants for customers</li>
                    <li>Recommendation systems</li>
                    <li>Data analysis and processing</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Business Process Automation</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Automation of repetitive processes that take up your employees&apos; time. From simple tasks to complex workflows involving multiple systems.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Workflow automation</li>
                    <li>Inter-system integrations</li>
                    <li>Automatic reporting</li>
                    <li>Document processing</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">RPA (Robotic Process Automation)</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Virtual robots that simulate user actions in applications. Automation of tasks that require interaction with user interfaces.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Application task automation</li>
                    <li>Data extraction</li>
                    <li>Automatic form filling</li>
                    <li>Transaction processing</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Machine Learning & Data Analysis</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Machine learning models that analyze data, predict trends, and help make data-driven business decisions.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Predictive analytics</li>
                    <li>Classification and segmentation</li>
                    <li>Anomaly detection</li>
                    <li>Experience personalization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Use Cases
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💬 Customer Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AI chatbots that answer customer questions 24/7, solve problems, and escalate complex issues to humans. They reduce customer service workload and improve satisfaction.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Document Processing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatic data extraction from invoices, contracts, forms, and other documents. AI recognizes text, classifies documents, and enters data into systems.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Analysis & Reporting</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatic report generation, business data analysis, trend and anomaly detection. Systems that monitor KPIs and alert about important changes.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Integrations & Synchronization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Automatic data synchronization between different systems, API integrations, automatic updates. Elimination of manual data entry.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🎯 Personalization & Recommendations</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Product recommendation systems, personalized offers, dynamic pricing. AI analyzes user behavior and adapts the experience to their needs.
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
                  <h3 className="text-xl font-bold mb-3 text-amber-400">🤖 Latest AI Technologies</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We use the latest AI models, including GPT, Claude, and other advanced systems. We always choose the best tool for a specific use case.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">⚡ Fast Implementation</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Thanks to the use of ready-made AI solutions and proven frameworks, we deploy automation quickly. First results visible within a few weeks.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 Measurable Results</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Every automation is designed with measurable benefits in mind. Time savings, error reduction, increased efficiency - we monitor and report everything.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔒 Security & Privacy</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Data security is a priority. We implement best practices, encryption, access control, and GDPR compliance. Your data is safe.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔄 Continuous Learning & Development</h3>
                  <p className="text-gray-300 leading-relaxed">
                    AI systems learn and improve over time. We monitor performance, collect feedback, and continuously optimize solutions to make them better.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Comprehensive Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From process analysis, through design, implementation, testing, deployment, to maintenance and development - we provide full service at every stage.
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
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Process Analysis</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We analyze your business processes, identify areas for automation, and assess potential benefits. We create process maps and prioritize tasks.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Solution Design</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We design the automation architecture, choose appropriate AI technologies and tools. We create a detailed implementation plan with a schedule.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Development & Implementation</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We program the automation system, integrate with existing systems, train AI models. We create interfaces and configure workflows.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Testing & Optimization</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We test the system on real data, check AI accuracy, optimize performance. Beta testing with users and collecting feedback.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Deployment & Training</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We deploy the system to production, train users, document processes. We ensure smooth transition and support during launch.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Monitoring & Development</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We monitor system performance, collect metrics, optimize based on data. Continuous development and adding new features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-amber-400/20 to-amber-400/10 rounded-xl p-8 md:p-12 text-center border-2 border-amber-400/60 shadow-lg shadow-amber-500/20">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-400">
                Ready for AI Automation?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us and discover how automation and AI can transform your business.
              </p>
              <Link
                href="/en#contact"
                className="inline-block px-8 py-4 bg-amber-400 text-background font-semibold rounded-lg hover:bg-amber-300 transition-colors transform hover:scale-105"
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

