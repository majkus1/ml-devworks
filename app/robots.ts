import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: ["GPTBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-User"],
        allow: "/",
      },
    ],
    sitemap: "https://ml-devworks.com/sitemap.xml",
    host: "https://ml-devworks.com",
  };
}

