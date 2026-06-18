import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
    },
    {
      url: `${SITE_URL}/about`,
    },
    {
      url: `${SITE_URL}/services`,
    },
    {
      url: `${SITE_URL}/posts`,
    },
    {
      url: `${SITE_URL}/projects`,
    },
    {
      url: `${SITE_URL}/privacy-policy`,
    },
    {
      url: `${SITE_URL}/terms-of-service`,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
  }));

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
  }));

  return [...staticRoutes, ...postRoutes, ...projectRoutes];
}
