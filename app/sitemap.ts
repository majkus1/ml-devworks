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
    {
      url: "https://www.ml-devworks.com/uslugi/strony-internetowe",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/strony-internetowe",
          en: "https://www.ml-devworks.com/en/services/web-development",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en/services/web-development",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/strony-internetowe",
          en: "https://www.ml-devworks.com/en/services/web-development",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
          en: "https://www.ml-devworks.com/en/services/web-and-mobile-applications",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en/services/web-and-mobile-applications",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/aplikacje-internetowe-i-mobilne",
          en: "https://www.ml-devworks.com/en/services/web-and-mobile-applications",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
          en: "https://www.ml-devworks.com/en/services/automation-and-ai",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en/services/automation-and-ai",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/automatyzacja-i-ai",
          en: "https://www.ml-devworks.com/en/services/automation-and-ai",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
          en: "https://www.ml-devworks.com/en/services/online-stores-booking-systems",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en/services/online-stores-booking-systems",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/sklepy-internetowe-systemy-rezerwacji",
          en: "https://www.ml-devworks.com/en/services/online-stores-booking-systems",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/uslugi/devops-wdrozenia",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/devops-wdrozenia",
          en: "https://www.ml-devworks.com/en/services/devops-deployment",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en/services/devops-deployment",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/devops-wdrozenia",
          en: "https://www.ml-devworks.com/en/services/devops-deployment",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
          en: "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance",
        },
      },
    },
    {
      url: "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          pl: "https://www.ml-devworks.com/uslugi/naprawa-optymalizacja-utrzymanie",
          en: "https://www.ml-devworks.com/en/services/fixes-optimization-maintenance",
        },
      },
    },
  ];
}

