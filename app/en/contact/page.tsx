import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import AiAssistantSection from "@/components/ai-assistant/AiAssistantSection";

const TITLE = "Contact ML DevWorks: email, phone, Krakow | ML DevWorks";
const DESCRIPTION =
  "Contact ML DevWorks (Michał Lipka): office@ml-devworks.com, +48 516 598 792, Rynek Główny 34/15, Krakow. Describe your project or ask the AI advisor - reply within 2-5 days with a free prototype.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["ml devworks contact", "ml devworks email", "ml devworks phone number", "software developer krakow contact", "app estimate", "ai automation estimate"],
  alternates: {
    canonical: "https://ml-devworks.com/en/contact",
    languages: {
      pl: "https://ml-devworks.com/kontakt",
      en: "https://ml-devworks.com/en/contact",
      "x-default": "https://ml-devworks.com/kontakt",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/en/contact",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

function ContactPageSchema() {
  const contactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact ML DevWorks",
    url: "https://ml-devworks.com/en/contact",
    description: DESCRIPTION,
    mainEntity: { "@id": "https://ml-devworks.com/#organization" },
    inLanguage: "en-US",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Contact", item: "https://ml-devworks.com/en/contact" },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}

const briefTips = [
  ["Goal", "What should improve: sales, customer service, team time, fewer errors."],
  ["Current process", "Who handles it today and how, which tools you use (CRM, Excel, email, store)."],
  ["Scale", "How many enquiries, orders, bookings, or documents per month."],
  ["Expected result", "How you will know the solution works. Deadline and rough budget, if known."],
];

export default function ContactPage() {
  return (
    <>
      <StructuredData lang="en" />
      <ContactPageSchema />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <section className="px-4 pt-16 md:pt-24 pb-8 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs className="mb-8" items={[{ label: "Home", href: "/en" }, { label: "Contact" }]} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact ML DevWorks</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
              Write, call, or ask the AI advisor what can be automated in your company. You work directly with me, Michał Lipka, a developer from Krakow. I usually reply within 2-5 days, often with a free prototype right away.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <a href="mailto:office@ml-devworks.com" className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors group">
                <p className="text-sm text-gray-400 mb-2">Email</p>
                <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors break-all">office@ml-devworks.com</p>
              </a>
              <a href="tel:+48516598792" className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors group">
                <p className="text-sm text-gray-400 mb-2">Phone</p>
                <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">+48 516 598 792</p>
              </a>
              <a
                href="https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors group"
              >
                <p className="text-sm text-gray-400 mb-2">Address (Krakow)</p>
                <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">Rynek Główny 34/15, 31-010 Kraków</p>
              </a>
            </div>
          </div>
        </section>

        <AiAssistantSection lang="en" />

        <section className="px-4 py-12 bg-background-lighter/40" aria-labelledby="brief-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="brief-heading" className="text-3xl md:text-4xl font-bold mb-4">What to write to get a prototype</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl">
              The better the description, the faster I come back with specifics. No specification needed - answers to four questions are enough:
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {briefTips.map(([title, text], index) => (
                <article key={title} className="bg-background border border-primary/20 rounded-xl p-6">
                  <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-primary text-background font-bold mb-4" aria-hidden="true">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                </article>
              ))}
            </div>
            <p className="text-gray-400 mt-8">
              Not sure which service fits? See{" "}
              <Link href="/en/services" className="text-primary hover:text-primary-light underline">
                all services
              </Link>{" "}
              or read how to{" "}
              <Link href="/en/blog/comprehensive-software-services-for-businesses-how-to-match-solutions-to-industry" className="text-primary hover:text-primary-light underline">
                match a solution to your industry
              </Link>
              .
            </p>
          </div>
        </section>

        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
