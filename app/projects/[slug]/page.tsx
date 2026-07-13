import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import MDXContent from "@/components/MDXContent";
import { jsonLd } from "@/lib/jsonld";
import { getPostBySlug } from "@/lib/posts";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { SITE_AUTHOR, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

type ProjectLink = {
  label: string;
  href: string;
  external: boolean;
  primary: boolean;
};

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  return buildPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    type: "article",
    image: absoluteUrl(`/projects/${project.slug}/opengraph-image`),
  });
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: project.title, path: `/projects/${project.slug}` },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
  });

  const projectLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    headline: project.headline,
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
    image: absoluteUrl(`/projects/${project.slug}/opengraph-image`) || SITE_OG_IMAGE,
    dateModified: project.updated,
    keywords: project.tags.join(", "),
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
    programmingLanguage: project.stack.join(", "),
    codeRepository: project.githubUrl ?? undefined,
    sameAs: [project.demoUrl, project.articleUrl]
      .filter(Boolean)
      .map((value) =>
        value?.startsWith("http") ? value : `${SITE_URL}${value}`
      ),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };

  const links: ProjectLink[] = [
    project.demoUrl
      ? {
          label: "Live demo",
          href: project.demoUrl,
          external: true,
          primary: true,
        }
      : null,
    project.githubUrl
      ? {
          label: "Source code",
          href: project.githubUrl,
          external: true,
          primary: false,
        }
      : null,
    project.articleUrl
      ? {
          label: "Related article",
          href: project.articleUrl,
          external: false,
          primary: false,
        }
      : null,
  ].filter((link): link is ProjectLink => link !== null);
  const relatedPostSlug = project.articleUrl?.startsWith("/posts/")
    ? project.articleUrl.replace("/posts/", "")
    : null;
  const relatedPost = relatedPostSlug ? getPostBySlug(relatedPostSlug) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd([breadcrumbLd, projectLd]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />

      <article className="relative left-1/2 w-[min(100vw-2rem,1120px)] -translate-x-1/2 space-y-10">
        <header className="space-y-6 border-b border-border/70 pb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-accent transition-colors hover:text-accent-hover"
          >
            <span aria-hidden="true">{"<-"}</span>
            Back to projects
          </Link>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              <span>Project</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Updated {formatDate(project.updated)}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>{project.stack.length} tools</span>
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              {project.title}
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-foreground/85">
              {project.headline}
            </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-border/70 pb-2">
                <span className="text-muted">status</span>
                <span className="text-accent">shipped</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/70 py-2">
                <span className="text-muted">primary</span>
                <span>{project.stack[0]}</span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <span className="text-muted">writeup</span>
                <span>{relatedPost ? "included" : "none"}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_20rem] xl:items-start">
          <div className="space-y-6">
            <section className="border-b border-border/70 pb-6">
              <div className="grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)]">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Overview
                </p>
                <p className="max-w-3xl text-base leading-8 text-foreground/85">
                  {project.description}
                </p>
              </div>
            </section>

            <section className="grid gap-4 lg:grid-cols-3">
              <article className="rounded-lg border border-border bg-card p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Problem
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  {project.problem}
                </p>
              </article>
              <article className="rounded-lg border border-border bg-card p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Solution
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  {project.solution}
                </p>
              </article>
              <article className="rounded-lg border border-border bg-card p-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                  Impact
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/80">
                  {project.impact}
                </p>
              </article>
            </section>

            <section className="border-t border-border/70 pt-6">
              <div className="grid gap-4 lg:grid-cols-[14rem_minmax(0,1fr)]">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                    Stack
                  </p>
                  <h2 className="mt-2 text-xl font-semibold tracking-tight">
                    Built with a practical stack
                  </h2>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-foreground/80">
                    The stack was chosen around the practical shape of the build:
                    what needed to run in production, what needed to stay readable,
                    and what made iteration faster.
                  </p>
                </div>
              </div>
            </section>

            {relatedPost && (
              <section className="border-t border-border/70 pt-10">
                <div className="mb-8">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                    Full write-up
                  </p>
                  <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight md:text-4xl">
                    {relatedPost.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-muted">
                    {relatedPost.description}
                  </p>
                </div>
                <MDXContent source={relatedPost.content} />
              </section>
            )}
          </div>

          <aside className="space-y-4 xl:sticky xl:top-24">
            <section className="rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Links
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {links.map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.primary
                          ? "inline-flex items-center justify-between rounded-md bg-accent px-4 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
                          : "inline-flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                      }
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">{"->"}</span>
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center justify-between rounded-md border border-border px-4 py-3 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      <span>{link.label}</span>
                      <span aria-hidden="true">{"->"}</span>
                    </Link>
                  )
                )}
              </div>
            </section>

            <section className="rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Snapshot
              </p>
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-3">
                  <span className="text-muted">Updated</span>
                  <span className="text-right text-foreground">
                    {formatDate(project.updated)}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-3">
                  <span className="text-muted">Primary stack</span>
                  <span className="text-right text-foreground">{project.stack[0]}</span>
                </div>
                <div className="flex items-start justify-between gap-4 border-b border-border/70 pb-3">
                  <span className="text-muted">Tags</span>
                  <span className="text-right text-foreground">{project.tags.length}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span className="text-muted">Related write-up</span>
                  <span className="text-right text-foreground">
                    {project.articleUrl ? "Available" : "None"}
                  </span>
                </div>
              </div>
            </section>

            <section className="rounded-lg border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-muted">
                Tags
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs font-mono text-tag-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </article>
    </>
  );
}
