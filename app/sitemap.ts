import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogPostEntries: MetadataRoute.Sitemap = blogPosts.flatMap((post) => [
    {
      url: `https://ml-devworks.com/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          pl: `https://ml-devworks.com/blog/${post.slug}`,
          en: `https://ml-devworks.com/en/blog/${post.slug}`,
          "x-default": `https://ml-devworks.com/blog/${post.slug}`,
        },
      },
    },
    {
      url: `https://ml-devworks.com/en/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: {
        languages: {
          pl: `https://ml-devworks.com/blog/${post.slug}`,
          en: `https://ml-devworks.com/en/blog/${post.slug}`,
          "x-default": `https://ml-devworks.com/blog/${post.slug}`,
        },
      },
    },
  ]);

  return [
    {
      url: "https://ml-devworks.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com",
          en: "https://ml-devworks.com/en",
          "x-default": "https://ml-devworks.com",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com",
          en: "https://ml-devworks.com/en",
          "x-default": "https://ml-devworks.com",
        },
      },
    },
    {
      url: "https://ml-devworks.com/uslugi/strony-internetowe",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/strony-internetowe",
          en: "https://ml-devworks.com/en/services/web-development",
          "x-default": "https://ml-devworks.com/uslugi/strony-internetowe",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/services/web-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/strony-internetowe",
          en: "https://ml-devworks.com/en/services/web-development",
          "x-default": "https://ml-devworks.com/uslugi/strony-internetowe",
        },
      },
    },
    {
      url: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
          en: "https://ml-devworks.com/en/services/web-and-mobile-applications",
          "x-default": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/services/web-and-mobile-applications",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
          en: "https://ml-devworks.com/en/services/web-and-mobile-applications",
          "x-default": "https://ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
        },
      },
    },
    {
      url: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
          en: "https://ml-devworks.com/en/services/automation-and-ai",
          "x-default": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/services/automation-and-ai",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
          en: "https://ml-devworks.com/en/services/automation-and-ai",
          "x-default": "https://ml-devworks.com/uslugi/automatyzacja-i-ai",
        },
      },
    },
    {
      url: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
          en: "https://ml-devworks.com/en/services/online-stores-booking-systems",
          "x-default": "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/services/online-stores-booking-systems",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
          en: "https://ml-devworks.com/en/services/online-stores-booking-systems",
        },
      },
    },
    {
      url: "https://ml-devworks.com/uslugi/devops-wdrozenia",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/devops-wdrozenia",
          en: "https://ml-devworks.com/en/services/devops-deployment",
          "x-default": "https://ml-devworks.com/uslugi/devops-wdrozenia",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/services/devops-deployment",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/devops-wdrozenia",
          en: "https://ml-devworks.com/en/services/devops-deployment",
          "x-default": "https://ml-devworks.com/uslugi/devops-wdrozenia",
        },
      },
    },
    {
      url: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
          en: "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
          "x-default": "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
          en: "https://ml-devworks.com/en/services/fixes-optimization-maintenance",
        },
      },
    },
    {
      url: "https://ml-devworks.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/blog",
          en: "https://ml-devworks.com/en/blog",
          "x-default": "https://ml-devworks.com/blog",
        },
      },
    },
    {
      url: "https://ml-devworks.com/en/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
      alternates: {
        languages: {
          pl: "https://ml-devworks.com/blog",
          en: "https://ml-devworks.com/en/blog",
          "x-default": "https://ml-devworks.com/blog",
        },
      },
    },
    ...blogPostEntries,
  ];
}

