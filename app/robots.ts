import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  const privatePaths = ["/api/", "/admin/", "/account/", "/auth/", "/booking"];

  return {
    rules: [
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "facebot"],
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "CCBot",
          "anthropic-ai",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "cohere-ai",
          "PerplexityBot",
          "YouBot",
        ],
        allow: "/",
        disallow: privatePaths,
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: privatePaths,
      },
    ],
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
