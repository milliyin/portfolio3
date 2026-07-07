import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { jsonLd } from "@/lib/jsonld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";

const POSTS_TITLE = "Posts";
const POSTS_DESCRIPTION =
  "Writing on AI/ML engineering, Python, developer tools, and building real-world machine learning systems.";

export const metadata: Metadata = buildPageMetadata({
  title: POSTS_TITLE,
  description: POSTS_DESCRIPTION,
  path: "/posts",
  image: absoluteUrl("/posts/opengraph-image"),
});

export default function PostsPage() {
  const posts = getAllPosts();
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: POSTS_TITLE,
    description: POSTS_DESCRIPTION,
    path: "/posts",
  });
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: POSTS_TITLE,
    url: "https://www.milliyin.dev/posts",
    description: POSTS_DESCRIPTION,
  };
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI engineering posts by Muhammad Illiyin Ashraf",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.milliyin.dev/posts/${post.slug}`,
      name: post.title,
      description: post.description,
    })),
  };

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />
      <div className="max-w-3xl space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="text-sm text-muted leading-relaxed">
          Notes from building AI systems in practice: agent marketplaces, model
          serving, training workflows, computer vision experiments, and the
          engineering tradeoffs behind them.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          For project-level case studies and shipped demos, browse the{" "}
          <Link
            href="/projects"
            className="text-accent hover:text-accent-hover transition-colors"
          >
            AI projects collection
          </Link>
          .
        </p>
      </div>
      {years.map((year) => (
        <section key={year} className="mb-10">
          <h2 className="text-xs font-semibold text-muted uppercase tracking-widest mb-1">
            {year}
          </h2>
          {byYear[year].map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
            />
          ))}
        </section>
      ))}
    </div>
  );
}
