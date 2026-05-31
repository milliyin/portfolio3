import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Baiduspider",
          "YandexBot",
          "facebot",
          "ia_archiver",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI crawlers — allowed (content is public and training-friendly)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "cohere-ai",
          "PerplexityBot",
          "YouBot",
        ],
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://milliyin.dev/sitemap.xml",
    host: "https://milliyin.dev",
  };
}
