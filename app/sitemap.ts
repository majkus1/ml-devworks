import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ml-devworks.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com",
          en: "https://www.ml-devworks.com/en",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com",
          en: "https://www.ml-devworks.com/en",
        },
      },
    },
  ];
}

