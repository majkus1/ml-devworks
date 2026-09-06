import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/Contact";
import AiAssistantSection from "@/components/ai-assistant/AiAssistantSection";

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
      <main className="min-h-screen pt-20">
        <section className="px-4 pt-16 md:pt-24 pb-8 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-7xl mx-auto">
            <Breadcrumbs className="mb-8" items={[{ label: "Strona główna", href: "/" }, { label: "Kontakt" }]} />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Kontakt z ML DevWorks</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-10">
              Napisz, zadzwoń albo zapytaj asystenta AI, co da się zautomatyzować w Twojej firmie. Pracujesz bezpośrednio ze mną, Michałem Lipką - programistą z Krakowa. Odpowiadam zwykle w ciągu 2-5 dni, często od razu z bezpłatnym prototypem.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <a href="mailto:office@ml-devworks.com" className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors group">
                <p className="text-sm text-gray-400 mb-2">E-mail</p>
                <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors break-all">office@ml-devworks.com</p>
              </a>
              <a href="tel:+48516598792" className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors group">
                <p className="text-sm text-gray-400 mb-2">Telefon</p>
                <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">+48 516 598 792</p>
              </a>
              <a
                href="https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary transition-colors group"
              >
                <p className="text-sm text-gray-400 mb-2">Adres (Kraków)</p>
                <p className="text-lg font-semibold text-white group-hover:text-primary transition-colors">Rynek Główny 34/15, 31-010 Kraków</p>
              </a>
            </div>
          </div>
        </section>

        <AiAssistantSection lang="pl" />

        <section className="px-4 py-12 bg-background-lighter/40" aria-labelledby="brief-heading">
          <div className="max-w-7xl mx-auto">
            <h2 id="brief-heading" className="text-3xl md:text-4xl font-bold mb-4">Co napisać, żeby dostać prototyp</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-3xl">
              Im lepszy opis, tym szybciej wracam z konkretem. Nie potrzebuję specyfikacji - wystarczą odpowiedzi na cztery pytania:
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
              Nie wiesz, którą usługę wybrać? Zobacz{" "}
              <Link href="/uslugi" className="text-primary hover:text-primary-light underline">
                wszystkie usługi
              </Link>{" "}
              albo przeczytaj, jak{" "}
              <Link href="/blog/kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy" className="text-primary hover:text-primary-light underline">
                dobrać rozwiązanie do branży
              </Link>
              .
            </p>
          </div>
        </section>

        <Contact lang="pl" />
      </main>
      <Footer lang="pl" />
    </>
  );
}
