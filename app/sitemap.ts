import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { serviceItems } from "@/lib/services";
import { solutions } from "@/lib/solutions";

const BASE_URL = "https://ml-devworks.com";
const SITE_LAST_MODIFIED = new Date("2026-09-06");
/** Usługi zmienione później niż reszta serwisu. */
const SERVICE_LAST_MODIFIED: Record<string, string> = { devops: "2026-09-27", "automation-ai": "2026-09-27" };

function localizedEntry({
  plPath,
  enPath,
  lastModified,
  priority,
  changeFrequency,
}: {
  plPath: string;
  enPath: string;
  lastModified: Date;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}${plPath}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          pl: `${BASE_URL}${plPath}`,
          en: `${BASE_URL}${enPath}`,
          "x-default": `${BASE_URL}${plPath}`,
        },
      },
    },
    {
      url: `${BASE_URL}${enPath}`,
      lastModified,
      changeFrequency,
      priority: Math.min(priority, 0.9),
      alternates: {
        languages: {
          pl: `${BASE_URL}${plPath}`,
          en: `${BASE_URL}${enPath}`,
          "x-default": `${BASE_URL}${plPath}`,
        },
      },
    },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceEntries = serviceItems.flatMap((service) =>
    localizedEntry({
      plPath: service.href.pl,
      enPath: service.href.en,
      lastModified: SERVICE_LAST_MODIFIED[service.id] ? new Date(SERVICE_LAST_MODIFIED[service.id]) : SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.9,
    }),
  );

  const solutionEntries = solutions.flatMap((solution) =>
    localizedEntry({
      plPath: solution.href.pl,
      enPath: solution.href.en,
      lastModified: new Date(solution.lastModified),
      changeFrequency: "monthly",
      priority: 0.85,
    }),
  );

  const blogPostEntries = blogPosts.flatMap((post) =>
    localizedEntry({
      plPath: `/blog/${post.slug}`,
      enPath: `/en/blog/${post.slugEn}`,
      lastModified: new Date(post.dateModified ?? post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    }),
  );

  const latestBlogModification = new Date(
    Math.max(...blogPosts.map((post) => new Date(post.dateModified ?? post.publishedAt).getTime())),
  );

  return [
    ...localizedEntry({
      plPath: "",
      enPath: "/en",
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    }),
    ...localizedEntry({
      plPath: "/uslugi",
      enPath: "/en/services",
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.95,
    }),
    ...localizedEntry({
      plPath: "/programista-krakow",
      enPath: "/en/software-developer-krakow",
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.85,
    }),
    ...serviceEntries,
    ...solutionEntries,
    ...localizedEntry({
      plPath: "/kontakt",
      enPath: "/en/contact",
      lastModified: SITE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    }),
    ...localizedEntry({
      plPath: "/blog",
      enPath: "/en/blog",
      lastModified: latestBlogModification,
      changeFrequency: "weekly",
      priority: 0.8,
    }),
    ...blogPostEntries,
  ];
}
