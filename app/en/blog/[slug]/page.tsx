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
  if (!post) return { title: "Not found" };

  const baseUrl = "https://ml-devworks.com";
  const postUrl = `${baseUrl}/blog/${slug}`;
  const postUrlEn = `${baseUrl}/en/blog/${slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${post.title.en} | ML Devworks Blog`,
    description: post.excerpt.en,
    keywords: [
      ...(post.keywords?.en ?? []),
      "business growth blog",
      "website strategy for companies",
      "technical seo and web conversion",
    ],
    alternates: {
      canonical: postUrlEn,
      languages: {
        pl: postUrl,
        en: postUrlEn,
        "x-default": postUrl,
      },
    },
    openGraph: {
      title: post.title.en,
      description: post.excerpt.en,
      url: postUrlEn,
      type: "article",
      publishedTime: post.publishedAt,
      locale: "en_US",
      siteName: "ML Devworks",
      ...(post.image && {
        images: [
          {
            url: post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`,
            alt: post.title.en,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title.en,
      description: post.excerpt.en,
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://ml-devworks.com/en/blog" },
      { "@type": "ListItem", position: 3, name: title, item: `https://ml-devworks.com/en/blog/${slug}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ArticleSchema({ post, slug }: { post: BlogPost; slug: string }) {
  const baseUrl = "https://ml-devworks.com";
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    description: post.excerpt.en,
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
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/en/blog/${slug}` },
    url: `${baseUrl}/en/blog/${slug}`,
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
        name: "Does a small business need a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Even a one-person business benefits from a professional website – it builds trust, facilitates contact and allows customers to find you on Google. Customers search for services online – without a website you lose the chance for orders.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to create a website?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A simple business card site – usually 2–4 weeks. A more extensive site or store – 4–12 weeks. The timeline depends on scope and availability of content (texts, images) on your side.",
        },
      },
      {
        "@type": "Question",
        name: "What makes a good website different from a bad one?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A good site: loads quickly, is SEO optimized, works on all devices and is easy to update. A bad site: slow, unreadable on mobile, invisible on Google and built on outdated technologies.",
        },
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

export default async function BlogPostPageEn({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = getPostContent(slug, "en");

  return (
    <>
      <StructuredData lang="en" />
      <BreadcrumbSchema slug={slug} title={post.title.en} />
      <ArticleSchema post={post} slug={slug} />
      <FAQSchema />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <article className="px-4 py-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          <Link
            href="/en/blog"
            className="text-primary hover:text-primary-light text-sm font-medium mb-6 inline-block"
          >
            ← Back to blog
          </Link>
          <header className="mb-10">
            <time
              dateTime={post.publishedAt}
              className="text-primary/80 text-sm block mb-2"
              itemProp="datePublished"
            >
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.readingTime && (
              <span className="text-gray-500 text-sm ml-4">{post.readingTime.en}</span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white" itemProp="headline">
              {post.title.en}
            </h1>
          </header>
          <div className="max-w-none text-gray-300 [&_a]:text-primary [&_a]:hover:text-primary-light [&_a]:underline">
            {content ?? <p>{post.excerpt.en}</p>}
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
