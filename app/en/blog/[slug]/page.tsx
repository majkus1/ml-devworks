import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
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
    mainEntityOfPage: { "@type": "WebPage", "@id": `${baseUrl}/en/blog/${post.slugEn}` },
    url: `${baseUrl}/en/blog/${post.slugEn}`,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

const RELATED_SERVICE_BY_SLUG: Record<string, { title: string; href: string; label: string }> = {
  "how-much-does-sales-process-automation-cost": {
    title: "AI automation for companies",
    href: "/en/services/automation-and-ai",
    label: "See the service and pricing",
  },
  "enrollment-panel-for-a-language-school-case-study": {
    title: "Class enrollment system for schools and academies",
    href: "/en/services/class-enrollment-system",
    label: "See the class enrollment system",
  },
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
      <main className="min-h-screen">
        <BlogPostLayout lang="en" post={post} content={content} related={RELATED_SERVICE_BY_SLUG[post.slugEn]} />
      </main>
      <Footer lang="en" />
    </>
  );
}
