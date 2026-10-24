import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BlogCardList from "@/components/BlogCardList";
import { blogPosts } from "@/lib/blog";
import PageHero from "@/components/ui/PageHero";
import CtaBand from "@/components/ui/CtaBand";

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-devworks.com"),
  title: "Blog o biznesie, stronach WWW i automatyzacji | ML DevWorks",
  description:
    "Praktyczne poradniki dla firm: strony internetowe, SEO, aplikacje webowe, automatyzacja procesów i rozwój sprzedaży online. Konkretne wskazówki wdrożeniowe.",
  keywords: [
    "blog o stronach internetowych dla firm",
    "jak pozyskiwac klientow przez strone www",
    "seo dla firm uslugowych",
    "blog o tworzeniu stron internetowych",
    "poradniki o aplikacjach webowych",
    "automatyzacja procesow w firmie",
    "marketing i technologia dla biznesu",
    "ml devworks blog",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/blog",
    languages: {
      pl: "https://ml-devworks.com/blog",
      en: "https://ml-devworks.com/en/blog",
      "x-default": "https://ml-devworks.com/blog",
    },
  },
  openGraph: {
    title: "Blog: strony, SEO i automatyzacja | ML DevWorks",
    description:
      "Praktyczna wiedza o stronach, SEO, aplikacjach i automatyzacji dla firm, pisana z perspektywy wdrożeń.",
    url: "https://ml-devworks.com/blog",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog o Biznesie, Stronach WWW i SEO | ML DevWorks",
    description:
      "Poradniki o stronach, SEO, aplikacjach i automatyzacji procesów dla firm, z naciskiem na wdrożenia i sprzedaż.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function BlogBreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Strona główna",
        item: "https://ml-devworks.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://ml-devworks.com/blog",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function BlogPage() {
  return (
    <>
      <StructuredData lang="pl" />
      <BlogBreadcrumbSchema />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <PageHero
          lang="pl"
          breadcrumbs={[{ label: "Strona główna", href: "/" }, { label: "Blog" }]}
          eyebrow="Blog"
          title={
            <>
              Blog o automatyzacji AI, <span className="text-gradient">aplikacjach i stronach dla firm</span>
            </>
          }
          lead="Konkretne poradniki dla właścicieli firm: ile kosztuje automatyzacja, co da się zautomatyzować, jak wybrać wykonawcę i jak policzyć zwrot z inwestycji."
          primaryCta={null}
          showAssistant={false}
        />
        <section className="pb-6" aria-label="Wpisy">
          <div className="container-site">
            <BlogCardList posts={blogPosts} lang="pl" featureFirst />
          </div>
        </section>
        <CtaBand lang="pl" />
      </main>
      <Footer lang="pl" />
    </>
  );
}
