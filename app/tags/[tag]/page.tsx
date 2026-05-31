import { notFound } from "next/navigation";
import { getAllPosts, getAllTags } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import type { Metadata } from "next";

type Props = { params: Promise<{ tag: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  const tags = getAllTags(posts);
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-")),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag } = await params;
  const label = decodeURIComponent(tag);

  return {
    title: `Posts tagged "${label}"`,
    description: `All posts tagged with ${label} on milliyin.dev`,
    alternates: { canonical: `https://milliyin.dev/tags/${tag}` },
    openGraph: {
      title: `Posts tagged "${label}" | milliyin`,
      url: `https://milliyin.dev/tags/${tag}`,
    },
  };
}

function slugToTag(slug: string) {
  return decodeURIComponent(slug).replace(/-/g, " ");
}

export default async function TagPage({ params }: Props) {
  const { tag } = await params;
  const allPosts = getAllPosts();

  const label = slugToTag(tag);
  const filtered = allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === label.toLowerCase())
  );

  if (filtered.length === 0) notFound();

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-1">
        {label}
      </h1>
      <p className="text-sm text-muted mb-8">
        {filtered.length} post{filtered.length !== 1 ? "s" : ""}
      </p>
      <div>
        {filtered.map((post) => (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            date={post.date}
            tags={post.tags}
            description={post.description}
          />
        ))}
      </div>
    </div>
  );
}
