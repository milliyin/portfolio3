import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/content/projects";
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

const RELATED_PROJECTS_BY_POST: Record<string, string[]> = {
  "ai-agent-marketplace": ["taskhive"],
  "flux-pixel-art-characters-lora": ["flux-1-in-context-learning"],
};

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
  const relatedProjectSlugs = [
    ...post.relatedProjectSlugs,
    ...(RELATED_PROJECTS_BY_POST[slug] ?? []),
  ];
  const relatedProjects = Array.from(new Set(relatedProjectSlugs))
    .map((projectSlug) => getProjectBySlug(projectSlug))
    .filter((project) => project !== null);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [absoluteUrl(`/posts/${slug}/opengraph-image`) || SITE_OG_IMAGE],
    datePublished: post.date,
    dateModified: post.updated,
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

        <section className="mt-12 rounded-xl border border-border bg-card p-5">
          <p className="text-xs font-semibold text-muted uppercase tracking-[0.24em]">
            Explore more
          </p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight">
            More AI project work behind this post
          </h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            If you want to see more shipped AI systems, browse the{" "}
            <Link
              href="/projects"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              full projects collection
            </Link>
            {relatedProjects.length > 0
              ? " or jump into the related case study below."
              : "."}
          </p>

          {relatedProjects.length > 0 && (
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="rounded-lg border border-border p-4 transition-colors hover:border-accent/40"
                >
                  <p className="text-sm font-semibold text-foreground">
                    {project.title}
                  </p>
                  <p className="mt-1 text-sm text-muted leading-relaxed">
                    {project.headline}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </section>
      </article>
    </>
  );
}
