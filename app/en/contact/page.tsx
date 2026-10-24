import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Contact from "@/components/Contact";
import ContactPageContent from "@/components/pages/ContactPageContent";

const TITLE = "Contact ML DevWorks: email, phone, Krakow | ML DevWorks";
const DESCRIPTION =
  "Contact ML DevWorks (Michał Lipka): office@ml-devworks.com, +48 516 598 792, Krakow. Describe your project or ask the AI advisor. Reply in 2-5 days.";

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
      <main className="min-h-screen">
        <ContactPageContent lang="en" briefTips={briefTips} />
      </main>
      <Footer lang="en" />
    </>
  );
}
