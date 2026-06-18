import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/content/projects";
import { jsonLd } from "@/lib/jsonld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

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
    description: project.description,
    url: `${SITE_URL}/projects/${project.slug}`,
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

      <article className="space-y-10">
        <header className="space-y-4">
          <Link
            href="/projects"
            className="text-sm text-accent hover:text-accent-hover transition-colors"
          >
            Back to projects
          </Link>
          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted uppercase tracking-[0.24em]">
              Project case study
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h1>
            <p className="text-base text-foreground/90 leading-relaxed max-w-3xl">
              {project.headline}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs rounded-md bg-tag-bg text-tag-text border border-border font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
              >
                Live demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                View source
              </a>
            )}
            {project.articleUrl && (
              <Link
                href={project.articleUrl}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors"
              >
                Read related article
              </Link>
            )}
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-5 md:col-span-3">
            <p className="text-sm text-muted leading-relaxed">{project.description}</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">Problem</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">Solution</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">{project.solution}</p>
          </div>
          <div className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">Impact</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">{project.impact}</p>
          </div>
        </section>

        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Stack and implementation notes
          </h2>
          <div className="prose">
            <p>
              This project combines product thinking with technical implementation.
              The goal was not only to prove the underlying model or workflow, but
              to shape it into something understandable and usable for real people.
            </p>
            <p>
              Technologies used here include {project.stack.join(", ")}. The stack
              was chosen to keep the delivery practical while still leaving room for
              experimentation, iteration, and deployment.
            </p>
          </div>
        </section>
      </article>
    </>
  );
}
