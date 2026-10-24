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
  title: "Business blog: websites, SEO & automation | ML DevWorks",
  description:
    "Actionable articles for owners and managers: strategy, website development, technical SEO, web apps, automation and conversion-focused digital growth.",
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
    title: "Blog: websites, SEO and automation | ML DevWorks",
    description:
      "Practical articles about websites, SEO, apps, automation, and digital growth for business owners and managers.",
    url: "https://ml-devworks.com/en/blog",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Strategy, Website & SEO Blog | ML DevWorks",
    description:
      "Practical articles about websites, SEO, apps, automation, and digital growth, focused on implementation and leads.",
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
      <main className="min-h-screen">
        <PageHero
          lang="en"
          breadcrumbs={[{ label: "Home", href: "/en" }, { label: "Blog" }]}
          eyebrow="Blog"
          title={
            <>
              Blog about AI automation, <span className="text-gradient">apps, and websites for companies</span>
            </>
          }
          lead="Practical guides for business owners: what automation costs, what can be automated, how to choose a vendor, and how to calculate the return."
          primaryCta={null}
          showAssistant={false}
        />
        <section className="pb-6" aria-label="Posts">
          <div className="container-site">
            <BlogCardList posts={blogPosts} lang="en" featureFirst />
          </div>
        </section>
        <CtaBand lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}
