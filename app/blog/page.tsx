import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BlogCardList from "@/components/BlogCardList";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-devworks.com"),
  title: "Blog o Stronach WWW, SEO i Automatyzacji dla Firm | ML Devworks",
  description:
    "Praktyczne poradniki dla firm: strony internetowe, SEO, aplikacje webowe, automatyzacja procesow i rozwoj sprzedazy online. Konkretne wskazowki wdrozeniowe od ML Devworks.",
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
    title: "Blog o Stronach WWW, SEO i Automatyzacji | ML Devworks",
    description:
      "Praktyczna wiedza o stronach, SEO i automatyzacji dla wlascicieli firm i managerow.",
    url: "https://ml-devworks.com/blog",
    type: "website",
    locale: "pl_PL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog o Stronach WWW i SEO | ML Devworks",
    description:
      "Praktyczne poradniki o stronach internetowych, SEO i automatyzacji dla biznesu.",
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
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Wpisy o tworzeniu stron internetowych, aplikacjach webowych,
              technologiach i najlepszych praktykach – dla biznesu i IT.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <BlogCardList posts={blogPosts} lang="pl" />
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
            >
              ← Powrót do strony głównej
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="pl" />
    </>
  );
}
