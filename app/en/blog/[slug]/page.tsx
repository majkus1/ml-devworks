import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
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
  return blogPosts.map((post) => ({ slug: post.slugEn }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slugEn === slug || p.slug === slug);
  if (!post) return { title: "Not found" };

  const baseUrl = "https://ml-devworks.com";
  const postUrl = `${baseUrl}/blog/${post.slug}`;
  const postUrlEn = `${baseUrl}/en/blog/${post.slugEn}`;

  return {
    metadataBase: new URL(baseUrl),
    title: post.metaTitle?.en ?? post.title.en,
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
      title: post.metaTitle?.en ?? post.title.en,
      description: post.excerpt.en,
      url: postUrlEn,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.dateModified ?? post.publishedAt,
      locale: "en_US",
      siteName: "ML DevWorks",
      images: [
        {
          url: post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/ogimg.png`,
          width: 1200,
          height: 630,
          alt: post.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle?.en ?? post.title.en,
      description: post.excerpt.en,
      images: [post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/ogimg.png`],
    },
    robots: { index: true, follow: true },
  };
}

function BreadcrumbSchema({ slugEn, title }: { slugEn: string; title: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://ml-devworks.com/en" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://ml-devworks.com/en/blog" },
      { "@type": "ListItem", position: 3, name: title, item: `https://ml-devworks.com/en/blog/${slugEn}` },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

function ArticleSchema({ post }: { post: BlogPost }) {
  const baseUrl = "https://ml-devworks.com";
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title.en,
    description: post.excerpt.en,
    datePublished: post.publishedAt,
    dateModified: post.dateModified ?? post.publishedAt,
    image: { "@type": "ImageObject", url: post.image ? (post.image.startsWith("http") ? post.image : `${baseUrl}${post.image}`) : `${baseUrl}/ogimg.png`, width: 1200, height: 630 },
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
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/en/blog/${post.slugEn}` },
    url: `${baseUrl}/en/blog/${post.slugEn}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const RELATED_SERVICE_BY_SLUG: Record<string, { title: string; href: string; label: string }> = {
  "what-can-be-automated-in-a-company-with-ai-process-examples": {
    title: "AI automation for companies",
    href: "/en/services/automation-and-ai",
    label: "View AI automation service",
  },
  "ai-automation-of-customer-support-tickets-helpdesk-contact-center": {
    title: "AI automation for companies",
    href: "/en/services/automation-and-ai",
    label: "View AI automation service",
  },
  "custom-mobile-apps-for-companies-cost-timeline-native-vs-cross-platform": {
    title: "Custom mobile apps for companies",
    href: "/en/services/mobile-apps-for-companies",
    label: "View mobile apps for companies",
  },
  "ai-automation-agency-or-developer-how-to-choose-a-vendor": {
    title: "AI automation for companies",
    href: "/en/services/automation-and-ai",
    label: "View AI automation service",
  },
  "how-much-does-business-process-automation-cost-and-how-to-calculate-roi": {
    title: "Business process automation and AI",
    href: "/en/services/automation-and-ai",
    label: "View AI automation service",
  },
  "booking-system-for-service-business-features-payment-integrations-implementation": {
    title: "Online booking systems for companies",
    href: "/en/services/online-booking-systems",
    label: "View online booking systems",
  },
  "ai-agents-in-customer-service-when-they-are-worth-it": {
    title: "Business process automation and AI",
    href: "/en/services/automation-and-ai",
    label: "View AI automation service",
  },
  "business-system-integration-api-crm-erp-how-to-start": {
    title: "Web and mobile applications",
    href: "/en/services/web-and-mobile-applications",
    label: "View apps and integrations",
  },
  "when-ai-process-automation-is-worth-it-for-business": {
    title: "Business process automation and AI",
    href: "/en/services/automation-and-ai",
    label: "View AI automation service",
  },
  "online-booking-system-for-beauty-salon-what-to-choose-and-how-long-it-takes": {
    title: "Online booking systems for companies",
    href: "/en/services/online-booking-systems",
    label: "View online booking systems",
  },
  "business-website-how-to-choose-a-developer": {
    title: "Web development for businesses",
    href: "/en/services/web-development",
    label: "View web development service",
  },
  "social-media-vs-business-website-what-brings-better-results": {
    title: "Web development for businesses",
    href: "/en/services/web-development",
    label: "View web development service",
  },
  "is-ai-enough-to-build-a-website-or-app": {
    title: "Web and mobile applications",
    href: "/en/services/web-and-mobile-applications",
    label: "View app development service",
  },
  "comprehensive-software-services-for-businesses-how-to-match-solutions-to-industry": {
    title: "ML DevWorks software development services",
    href: "/en/services",
    label: "View all services",
  },
};

function RelatedService({ slug }: { slug: string }) {
  const service = RELATED_SERVICE_BY_SLUG[slug];
  if (!service) return null;

  return (
    <aside className="mt-12 bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/25 rounded-xl p-6">
      <p className="text-gray-400 mb-2">Related service</p>
      <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
      <Link href={service.href} className="inline-flex text-primary hover:text-primary-light font-semibold">
        {service.label}
      </Link>
    </aside>
  );
}

function FAQSchema({ post }: { post: BlogPost }) {
  if (!post.faq?.en?.length) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faq.en.map((item) => ({
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
  if (!post.faq?.en?.length) return null;

  return (
    <section className="mt-12" aria-labelledby="post-faq-heading">
      <h2 id="post-faq-heading" className="text-3xl font-bold mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {post.faq.en.map((item) => (
          <article key={item.q} className="bg-background-lighter border border-primary/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-3">{item.q}</h3>
            <p className="text-gray-300 leading-relaxed">{item.a}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default async function BlogPostPageEn({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slugEn === slug || p.slug === slug);
  if (!post) notFound();
  if (slug === post.slug && slug !== post.slugEn) {
    permanentRedirect(`/en/blog/${post.slugEn}`);
  }

  const content = getPostContent(post.slug, "en");

  return (
    <>
      <StructuredData lang="en" />
      <BreadcrumbSchema slugEn={post.slugEn} title={post.title.en} />
      <ArticleSchema post={post} />
      <FAQSchema post={post} />
      <Navbar lang="en" />
      <main className="min-h-screen pt-20">
        <article className="px-4 py-16 max-w-3xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
          <Breadcrumbs
            className="mb-6"
            items={[
              { label: "Home", href: "/en" },
              { label: "Blog", href: "/en/blog" },
              { label: post.title.en },
            ]}
          />
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
          <FAQSection post={post} />
          <RelatedService slug={post.slugEn} />
        </article>
      </main>
      <Footer lang="en" />
    </>
  );
}
