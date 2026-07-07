import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
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
    title: post.title.pl,
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
      modifiedTime: post.dateModified ?? post.publishedAt,
      locale: "pl_PL",
      siteName: "ML DevWorks",
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
    dateModified: post.dateModified ?? post.publishedAt,
    ...(post.image && {
      image: { "@type": "ImageObject", url: post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}` },
    }),
    author: {
      "@type": "Organization",
      name: "ML DevWorks",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/primary-on-transparent-logo.png` },
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

function RelatedService({ slug }: { slug: string }) {
  const service = RELATED_SERVICE_BY_SLUG[slug];
  if (!service) return null;

  return (
    <aside className="mt-12 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/25 rounded-xl p-6">
      <p className="text-gray-400 mb-2">Powiązana usługa</p>
      <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
      <Link href={service.href} className="inline-flex text-primary hover:text-primary-light font-semibold">
        {service.label}
      </Link>
    </aside>
  );
}

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

function FAQSection({ post }: { post: BlogPost }) {
  if (!post.faq?.pl?.length) return null;

  return (
    <section className="mt-12" aria-labelledby="post-faq-heading">
      <h2 id="post-faq-heading" className="text-3xl font-bold mb-6">
        Najczęstsze pytania
      </h2>
      <div className="space-y-4">
        {post.faq.pl.map((item) => (
          <article key={item.q} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3">{item.q}</h3>
            <p className="text-gray-300 leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
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
      <main className="min-h-screen pt-20">
        <article className="px-4 py-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "Strona główna", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title.pl },
            ]}
          />
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
          <FAQSection post={post} />
          <RelatedService slug={slug} />
        </article>
      </main>
      <Footer lang="pl" />
    </>
  );
}
