import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { jsonLd } from "@/lib/jsonld";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description:
    "Writing on AI/ML engineering, Python, developer tools, and building real-world machine learning systems.",
  alternates: { canonical: `${SITE_URL}/posts` },
  openGraph: {
    title: `Posts | ${SITE_NAME}`,
    description:
      "Writing on AI/ML engineering, Python, developer tools, and building real-world machine learning systems.",
    url: `${SITE_URL}/posts`,
    images: [{ url: "/syakir.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Posts | ${SITE_NAME}`,
    description:
      "Writing on AI/ML engineering, Python, developer tools, and building real-world machine learning systems.",
    images: ["/syakir.webp"],
  },
};

export default function PostsPage() {
  const posts = getAllPosts();
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Posts",
    url: `${SITE_URL}/posts`,
    description:
      "Writing on AI/ML engineering, Python, developer tools, and building real-world machine learning systems.",
  };

  const byYear = posts.reduce<Record<string, typeof posts>>((acc, post) => {
    const year = post.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(collectionLd) }}
      />
      <h1 className="text-2xl font-semibold tracking-tight mb-8">Posts</h1>
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
