import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
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
  const postUrlEn = `${baseUrl}/en/blog/${slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${post.title.pl} | Blog ML Devworks`,
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
      title: post.title.pl,
      description: post.excerpt.pl,
      url: postUrl,
      type: "article",
      publishedTime: post.publishedAt,
      locale: "pl_PL",
      siteName: "ML Devworks",
      ...(post.image && {
        images: [
          {
            url: post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`,
            alt: post.title.pl,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.pl,
      description: post.excerpt.pl,
      ...(post.image && {
        images: [post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`],
      }),
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
    dateModified: post.publishedAt,
    ...(post.image && {
      image: { "@type": "ImageObject", url: post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}` },
    }),
    author: {
      "@type": "Organization",
      name: "ML Devworks",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/primary-on-transparent-logo.png` },
    },
    publisher: {
      "@type": "Organization",
      name: "ML Devworks",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/primary-on-transparent-logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/blog/${slug}` },
    url: `${baseUrl}/blog/${slug}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Czy mała firma potrzebuje strony internetowej?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tak. Nawet jednoosobowa działalność zyskuje na profesjonalnej stronie – buduje zaufanie, ułatwia kontakt i umożliwia znalezienie Cię w Google. Klienci szukają usług online – bez strony tracisz szansę na zlecenia.",
        },
      },
      {
        "@type": "Question",
        name: "Jak długo trwa stworzenie strony internetowej?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Prosta strona wizytówka – zwykle 2–4 tygodnie. Bardziej rozbudowana strona lub sklep – 4–12 tygodni. Termin zależy od zakresu i dostępności treści (teksty, zdjęcia) po Twojej stronie.",
        },
      },
      {
        "@type": "Question",
        name: "Czym różni się dobra strona od słabej?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dobra strona: szybko się ładuje, jest zoptymalizowana pod SEO, działa na wszystkich urządzeniach i jest łatwa w aktualizacji. Słaba strona: wolna, nieczytelna na telefonie, niewidoczna w Google i oparta na przestarzałych technologiach.",
        },
      },
    ],
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
      <FAQSchema />
      <Navbar lang="pl" />
      <main className="min-h-screen pt-20">
        <article className="px-4 py-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          <Link
            href="/blog"
            className="text-primary hover:text-primary-light text-sm font-medium mb-6 inline-block"
          >
            ← Wróć do bloga
          </Link>
          <header className="mb-10">
            <time
              dateTime={post.publishedAt}
              className="text-primary/80 text-sm block mb-2"
              itemProp="datePublished"
            >
              {new Date(post.publishedAt).toLocaleDateString("pl-PL", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readingTime && (
              <span className="text-gray-500 text-sm ml-4">{post.readingTime.pl}</span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" itemProp="headline">
              {post.title.pl}
            </h1>
          </header>
          <div className="max-w-none text-gray-300 [&_a]:text-primary [&_a]:hover:text-primary-light [&_a]:underline">
            {content ?? <p>{post.excerpt.pl}</p>}
          </div>
        </article>
      </main>
      <Footer lang="pl" />
    </>
  );
}
