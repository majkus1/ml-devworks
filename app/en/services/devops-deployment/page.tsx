import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "DevOps & Deployment - Cloud Deployment & CI/CD | ML Devworks",
  description: "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production. Professional DevOps services for your project.",
  keywords: [
    "devops",
    "deployment",
    "cloud deployment",
    "CI/CD",
    "continuous integration",
    "continuous deployment",
    "monitoring",
    "backup",
    "infrastructure",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "infrastructure as code",
    "devops Krakow",
    "cloud services",
    "server management",
  ],
  alternates: {
    canonical: "https://www.ml-devworks.com/en/services/devops-deployment",
    languages: {
      "pl": "https://www.ml-devworks.com/uslugi/devops-wdrozenia",
      "en": "https://www.ml-devworks.com/en/services/devops-deployment",
    },
  },
  openGraph: {
    title: "DevOps & Deployment - Cloud Deployment & CI/CD | ML Devworks",
    description: "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production.",
    url: "https://www.ml-devworks.com/en/services/devops-deployment",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevOps & Deployment - Cloud Deployment & CI/CD | ML Devworks",
    description: "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production.",
  },
};

export default function DevOpsDeploymentPage() {
  const serviceStructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DevOps & Deployment",
    "description": "Cloud application deployment, CI/CD configuration, monitoring, backup, and full infrastructure maintenance. From development to production.",
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
        "name": "Home",
        "item": "https://www.ml-devworks.com/en"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "DevOps & Deployment",
        "item": "https://www.ml-devworks.com/en/services/devops-deployment"
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
              <span className="text-primary">DevOps</span> & Deployment
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Professional cloud deployments, process automation, and full infrastructure maintenance. From development to production - comprehensive DevOps services.
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
                  <h3 className="text-2xl font-bold mb-4 text-primary">Cloud Deployments</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Deploying applications on cloud platforms: AWS, Azure, Google Cloud, Vercel, Netlify. Infrastructure configuration, scaling, and cost optimization.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>AWS, Azure, Google Cloud</li>
                    <li>Vercel, Netlify, Railway</li>
                    <li>Containerization (Docker, Kubernetes)</li>
                    <li>Serverless architecture</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">CI/CD Pipeline</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Configuration of continuous integration and deployment (CI/CD) with automated testing, building, and application deployment.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>GitHub Actions, GitLab CI</li>
                    <li>Jenkins, CircleCI</li>
                    <li>Automated testing</li>
                    <li>Automated deployments</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Monitoring & Logging</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Configuration of performance monitoring, logging, and alerting systems. Tracking metrics, errors, and application performance in real-time.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Application Performance Monitoring</li>
                    <li>Error tracking and logging</li>
                    <li>Alerts and notifications</li>
                    <li>Dashboards and reports</li>
                  </ul>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Backup & Disaster Recovery</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Automatic data backups, disaster recovery planning, and system restoration strategies after failures.
                  </p>
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Automatic backups</li>
                    <li>Disaster recovery strategies</li>
                    <li>Restoration testing</li>
                    <li>Data replication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Technologies & Tools
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
                Why Choose Us?
              </h2>
              <div className="space-y-6">
                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🚀 Fast Deployments</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Thanks to automation and proven processes, we deploy applications quickly and safely. From development to production in hours, not weeks.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">🔒 Security</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Highest security standards: encryption, access control, security scanning, compliance with best practices. Your infrastructure is secure.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📈 Scalability</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Architecture that automatically scales based on load. Cloud-native solutions that grow with your business.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💰 Cost Optimization</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We optimize infrastructure for costs. We choose the best solutions that provide performance at reasonable costs.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">📊 24/7 Monitoring</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Continuous monitoring of infrastructure and applications. Alerts about problems, proactive response, and ensuring high availability.
                  </p>
                </div>

                <div className="bg-background-lighter rounded-xl p-6 border border-primary/20">
                  <h3 className="text-xl font-bold mb-3 text-primary">💼 Comprehensive Service</h3>
                  <p className="text-gray-300 leading-relaxed">
                    From infrastructure planning, through configuration, deployment, monitoring, to maintenance and development - we provide full DevOps service.
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
                      We analyze application requirements, scale, budget, and goals. We plan infrastructure architecture, choose the best platforms and tools.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Infrastructure Configuration</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We create cloud infrastructure, configure servers, databases, networks, and security. We use Infrastructure as Code for repeatability.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">CI/CD Configuration</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We configure CI/CD pipeline: automated tests, build, deployment. We set up dev, staging, and production environments with automated deployment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Monitoring & Backup</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We configure performance monitoring, logging, alerts, and automatic backups. We test disaster recovery and restoration strategies.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Deployment & Testing</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We deploy the application to production, test all functionalities, performance, and security. We optimize and adjust configuration.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-background font-bold text-xl">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Maintenance & Support</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We provide continuous monitoring, updates, optimization, backup, and technical support. We respond to problems and develop infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 md:p-12 text-center border border-primary/30">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready for Professional DevOps Deployment?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact us and get a free quote for your DevOps project.
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

