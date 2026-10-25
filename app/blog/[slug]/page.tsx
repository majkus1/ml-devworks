import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import BlogPostLayout from "@/components/blog/BlogPostLayout";
import { LINKEDIN_URL } from "@/lib/profile";
import { blogPosts, type BlogPost } from "@/lib/blog";
import { getPostContent } from "@/lib/blog-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Nie znaleziono" };

  const baseUrl = "https://ml-devworks.com";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const postUrlEn = `${baseUrl}/en/blog/${post.slugEn}`;

  return {
    metadataBase: new URL(baseUrl),
    title: post.metaTitle?.pl ?? post.title.pl,
    description: post.excerpt.pl,
    keywords: [
      ...(post.keywords?.pl ?? []),
      "blog dla wlascicieli firm",
      "strona internetowa dla biznesu",
      "seo i rozwoj strony firmowej",
    ],
    alternates: {
      canonical: postUrl,
      languages: {
        pl: postUrl,
        en: postUrlEn,
        "x-default": postUrl,
      },
    },
    openGraph: {
      title: post.metaTitle?.pl ?? post.title.pl,
      description: post.excerpt.pl,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.dateModified ?? post.publishedAt,
      locale: "pl_PL",
      siteName: "ML DevWorks",
      images: [
        {
          url: post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/ogimg.png`,
          width: 1200,
          height: 630,
          alt: post.title.pl,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle?.pl ?? post.title.pl,
      description: post.excerpt.pl,
      images: [post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/ogimg.png`],
    },
    robots: { index: true, follow: true },
  };
}

function BreadcrumbSchema({ slug, title }: { slug: string; title: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://ml-devworks.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://ml-devworks.com/blog" },
      { "@type": "ListItem", position: 3, name: title, item: `https://ml-devworks.com/blog/${slug}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ArticleSchema({ post, slug }: { post: BlogPost; slug: string }) {
  const baseUrl = "https://ml-devworks.com";
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.pl,
    description: post.excerpt.pl,
    datePublished: post.publishedAt,
    dateModified: post.dateModified ?? post.publishedAt,
    image: { "@type": "ImageObject", url: post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/ogimg.png`, width: 1200, height: 630 },
    author: {
      "@type": "Person",
      "@id": `${baseUrl}/#person`,
      name: "Michał Lipka",
      url: baseUrl,
      jobTitle: "Software Developer",
      sameAs: [LINKEDIN_URL],
    },
    publisher: {
      "@type": "Organization",
      name: "ML DevWorks",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/primary-on-transparent-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/blog/${slug}` },
    url: `${baseUrl}/blog/${slug}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const RELATED_SERVICE_BY_SLUG: Record<string, { title: string; href: string; label: string }> = {
  "ile-kosztuje-automatyzacja-procesu-sprzedazowego": {
    title: "Automatyzacje AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę i ceny",
  },
  "panel-zapisow-dla-szkoly-jezykowej-studium-przypadku": {
    title: "System zapisów na zajęcia dla szkół i akademii",
    href: "/uslugi/system-zapisow-na-zajecia",
    label: "Zobacz system zapisów na zajęcia",
  },
  "co-mozna-zautomatyzowac-w-firmie-z-ai-przyklady-procesow": {
    title: "Automatyzacje AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę automatyzacji AI",
  },
  "automatyzacja-obslugi-zgloszen-i-klienta-z-ai-helpdesk-contact-center": {
    title: "Automatyzacje AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę automatyzacji AI",
  },
  "aplikacje-mobilne-dla-firm-na-zamowienie-koszt-czas-natywna-czy-cross-platform": {
    title: "Aplikacje mobilne dla firm na zamówienie",
    href: "/uslugi/aplikacje-mobilne-dla-firm",
    label: "Zobacz aplikacje mobilne dla firm",
  },
  "agencja-automatyzacji-ai-czy-programista-jak-wybrac-wykonawce": {
    title: "Automatyzacje AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę automatyzacji AI",
  },
  "ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi": {
    title: "Automatyzacja procesów i AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę automatyzacji AI",
  },
  "system-rezerwacji-dla-firmy-uslugowej-funkcje-integracje-platnosci-wdrozenie": {
    title: "Systemy rezerwacji online dla firm",
    href: "/uslugi/systemy-rezerwacji-online",
    label: "Zobacz systemy rezerwacji online",
  },
  "agenci-ai-w-obsludze-klienta-kiedy-sie-oplacaja": {
    title: "Automatyzacja procesów i AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę automatyzacji AI",
  },
  "integracja-systemow-w-firmie-api-crm-erp-jak-zaczac": {
    title: "Aplikacje webowe i mobilne dla firm",
    href: "/uslugi/aplikacje-internetowe-i-mobilne",
    label: "Zobacz aplikacje i integracje",
  },
  "kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai": {
    title: "Automatyzacja procesów i AI dla firm",
    href: "/uslugi/automatyzacja-i-ai",
    label: "Zobacz usługę automatyzacji AI",
  },
  "system-rezerwacji-online-dla-salonu-kosmetycznego-co-wybrac-i-ile-to-trwa": {
    title: "Systemy rezerwacji online dla firm",
    href: "/uslugi/systemy-rezerwacji-online",
    label: "Zobacz systemy rezerwacji online",
  },
  "strona-internetowa-dla-firmy-jak-wybrac-wykonawce": {
    title: "Tworzenie stron internetowych dla firm",
    href: "/uslugi/strony-internetowe",
    label: "Zobacz usługę tworzenia stron",
  },
  "social-media-czy-wlasna-strona-firmowa-co-bardziej-sie-oplaca": {
    title: "Tworzenie stron internetowych dla firm",
    href: "/uslugi/strony-internetowe",
    label: "Zobacz usługę tworzenia stron",
  },
  "czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji": {
    title: "Aplikacje webowe i mobilne dla firm",
    href: "/uslugi/aplikacje-internetowe-i-mobilne",
    label: "Zobacz tworzenie aplikacji",
  },
  "kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy": {
    title: "Usługi programistyczne ML DevWorks",
    href: "/uslugi",
    label: "Zobacz wszystkie usługi",
  },
};


function FAQSchema({ post }: { post: BlogPost }) {
  if (!post.faq?.pl?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.pl.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}


export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getPostContent(slug, "pl");

  return (
    <>
      <StructuredData lang="pl" />
      <BreadcrumbSchema slug={slug} title={post.title.pl} />
      <ArticleSchema post={post} slug={slug} />
      <FAQSchema post={post} />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <BlogPostLayout lang="pl" post={post} content={content} related={RELATED_SERVICE_BY_SLUG[slug]} />
      </main>
      <Footer lang="pl" />
    </>
  );
}
