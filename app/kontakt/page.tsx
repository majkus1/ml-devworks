import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import ContactPageContent from "@/components/pages/ContactPageContent";

const TITLE = "Kontakt ML DevWorks: e-mail, telefon, Kraków | ML DevWorks";
const DESCRIPTION =
  "Kontakt z ML DevWorks (Michał Lipka): office@ml-devworks.com, +48 516 598 792, Kraków. Opisz projekt lub zapytaj asystenta AI. Odpowiedź w 2-5 dni.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ["ml devworks kontakt", "ml devworks email", "ml devworks telefon", "programista kraków kontakt", "wycena aplikacji", "wycena automatyzacji ai"],
  alternates: {
    canonical: "https://ml-devworks.com/kontakt",
    languages: {
      pl: "https://ml-devworks.com/kontakt",
      en: "https://ml-devworks.com/en/contact",
      "x-default": "https://ml-devworks.com/kontakt",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://ml-devworks.com/kontakt",
    type: "website",
    locale: "pl_PL",
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
    name: "Kontakt ML DevWorks",
    url: "https://ml-devworks.com/kontakt",
    description: DESCRIPTION,
    mainEntity: { "@id": "https://ml-devworks.com/#organization" },
    inLanguage: "pl-PL",
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Kontakt", item: "https://ml-devworks.com/kontakt" },
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
  ["Cel", "Co ma się poprawić: sprzedaż, obsługa klienta, czas zespołu, mniej błędów."],
  ["Obecny proces", "Kto i jak dziś to obsługuje, jakich narzędzi używacie (CRM, Excel, mail, sklep)."],
  ["Skala", "Ile zapytań, zamówień, rezerwacji albo dokumentów miesięcznie."],
  ["Oczekiwany efekt", "Jak poznasz, że rozwiązanie działa. Termin i orientacyjny budżet, jeśli je znasz."],
];

export default function KontaktPage() {
  return (
    <>
      <StructuredData lang="pl" />
      <ContactPageSchema />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <ContactPageContent lang="pl" briefTips={briefTips} />
      </main>
      <Footer lang="pl" />
    </>
  );
}
