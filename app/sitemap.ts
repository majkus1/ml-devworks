import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
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
        },
      },
    },
  ];
}

