import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { jsonLd } from "@/lib/jsonld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import {
  SITE_AUTHOR,
  SITE_LOGO,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/site";
import MDXContent from "@/components/MDXContent";
import TagPill from "@/components/TagPill";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/posts/${slug}`,
    type: "article",
    image: absoluteUrl(`/posts/${slug}/opengraph-image`),
  });
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [SITE_OG_IMAGE],
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${SITE_URL}/posts/${slug}`,
    url: `${SITE_URL}/posts/${slug}`,
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO,
      },
    },
  };

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Posts", path: "/posts" },
    { name: post.title, path: `/posts/${slug}` },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: post.title,
    description: post.description,
    path: `/posts/${slug}`,
  });

  const formatted = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([articleLd, breadcrumbLd]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />

      <article>
        <header className="mb-8">
          <h1 className="text-2xl font-semibold tracking-tight leading-snug text-foreground mb-3">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <time className="text-sm text-muted font-mono">{formatted}</time>
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <TagPill key={tag} tag={tag} />
              ))}
            </div>
          )}
        </header>

        <MDXContent source={post.content} />
      </article>
    </>
  );
}
