import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

const STATIC_PAGE_LASTMOD: Record<string, string> = {
  "/": "2026-06-18",
  "/about": "2026-06-18",
  "/services": "2026-06-18",
  "/posts": "2026-06-18",
  "/projects": "2026-06-18",
  "/privacy-policy": "2026-06-18",
  "/terms-of-service": "2026-06-18",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: STATIC_PAGE_LASTMOD["/"],
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: STATIC_PAGE_LASTMOD["/about"],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: STATIC_PAGE_LASTMOD["/services"],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/posts`,
      lastModified: STATIC_PAGE_LASTMOD["/posts"],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/projects`,
      lastModified: STATIC_PAGE_LASTMOD["/projects"],
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
      lastModified: STATIC_PAGE_LASTMOD["/privacy-policy"],
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
      lastModified: STATIC_PAGE_LASTMOD["/terms-of-service"],
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: project.updated,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...postRoutes, ...projectRoutes];
}
