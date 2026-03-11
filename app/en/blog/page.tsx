import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BlogCardList from "@/components/BlogCardList";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-devworks.com"),
  title: "Business Blog: Websites, SEO, Automation, Digital Growth | ML Devworks",
  description:
    "Actionable articles for business owners: website strategy, technical SEO, web applications, automation, and conversion-focused digital growth.",
  keywords: [
    "business website blog",
    "seo for service businesses",
    "web development insights for companies",
    "website conversion optimization tips",
    "automation for small business operations",
    "digital growth strategy blog",
    "technical seo articles",
    "ml devworks blog",
  ],
  alternates: {
    canonical: "https://ml-devworks.com/en/blog",
    languages: {
      pl: "https://ml-devworks.com/blog",
      en: "https://ml-devworks.com/en/blog",
      "x-default": "https://ml-devworks.com/blog",
    },
  },
  openGraph: {
    title: "Business Blog: Websites, SEO, Automation | ML Devworks",
    description:
      "Practical, business-focused content on websites, SEO, automation, and digital growth.",
    url: "https://ml-devworks.com/en/blog",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Blog by ML Devworks",
    description:
      "Practical website, SEO, and automation articles for business growth.",
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
        name: "Home",
        item: "https://ml-devworks.com/en",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://ml-devworks.com/en/blog",
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

export default function BlogPageEn() {
  return (
    <>
      <StructuredData lang="en" />
      <BlogBreadcrumbSchema />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <section className="px-4 py-16 md:py-24 bg-gradient-to-b from-background to-background-lighter">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Articles about web development, web applications, technologies and
              best practices – for business and IT.
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <BlogCardList posts={blogPosts} lang="en" />
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto text-center">
            <Link
              href="/en"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors font-medium"
            >
              ← Back to homepage
            </Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </>
  );
}
