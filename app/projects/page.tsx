import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { jsonLd } from "@/lib/jsonld";
import Link from "next/link";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { SITE_AUTHOR } from "@/lib/site";
import type { Metadata } from "next";

const PROJECTS_TITLE = "AI Engineer Projects and Case Studies";
const PROJECTS_DESCRIPTION = `AI engineering portfolio by ${SITE_AUTHOR} featuring production projects in NLP, computer vision, generative AI, Hugging Face tooling, AI agents, and full-stack product builds.`;
const PROJECTS_COUNT = projects.length;
const FEATURE_AREAS = [
  "NLP systems and text classification",
  "Computer vision and multimodal tooling",
  "Generative AI workflows and model UX",
  "Autonomous agents, MCP, and product engineering",
];

export const metadata: Metadata = buildPageMetadata({
  title: PROJECTS_TITLE,
  description: PROJECTS_DESCRIPTION,
  path: "/projects",
  image: absoluteUrl("/projects/opengraph-image"),
});

export default function ProjectsPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: PROJECTS_TITLE,
    description: PROJECTS_DESCRIPTION,
    path: "/projects",
  });
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: PROJECTS_TITLE,
    url: "https://www.milliyin.dev/projects",
    description: PROJECTS_DESCRIPTION,
  };
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AI engineering projects by Muhammad Illiyin Ashraf",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://www.milliyin.dev/projects/${project.slug}`,
      name: project.title,
      description: project.headline,
    })),
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(collectionLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(itemListLd) }}
      />
      <section className="max-w-4xl space-y-4">
        <p className="text-xs font-semibold text-muted uppercase tracking-[0.24em]">
          AI engineer portfolio
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            AI projects, case studies, and product builds
          </h1>
          <p className="text-base text-foreground/90 leading-relaxed max-w-3xl">
            This page is a curated portfolio of AI engineering work by{" "}
            {SITE_AUTHOR}. It covers production-minded builds across natural
            language processing, computer vision, generative AI, Hugging Face
            tooling, autonomous agents, and full-stack developer products.
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-3xl">
            Instead of listing experiments without context, each project links to
            a dedicated detail page with the problem, the technical approach, the
            implementation stack, and any live demo, GitHub repository, or related
            write-up that helps explain how the system works in practice.
          </p>
        </div>
        <div className="flex flex-wrap gap-2 text-xs text-muted">
          <span className="rounded-md border border-border bg-card px-3 py-1.5">
            {PROJECTS_COUNT}+ project case studies
          </span>
          <span className="rounded-md border border-border bg-card px-3 py-1.5">
            AI agents, NLP, vision, and generative AI
          </span>
          <span className="rounded-md border border-border bg-card px-3 py-1.5">
            Live demos, source links, and implementation notes
          </span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold tracking-tight">
            What you will find here
          </h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            These projects focus on applied AI engineering rather than toy demos.
            The collection includes browser tools, model-serving backends,
            autonomous agent systems, and productized machine learning workflows
            built to be understandable, usable, and deployable.
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            {FEATURE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-lg font-semibold tracking-tight">
            Related writing and services
          </h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            If you want more context beyond the portfolio grid, the{" "}
            <Link href="/posts" className="text-accent hover:text-accent-hover">
              posts
            </Link>{" "}
            section covers implementation breakdowns and build notes, while{" "}
            <Link
              href="/services"
              className="text-accent hover:text-accent-hover"
            >
              AI services
            </Link>{" "}
            explains the kinds of freelance work I take on for startups and
            founders.
          </p>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            If you are evaluating fit, start with the individual project detail
            pages below. They are the strongest signal of the problems I solve and
            how I usually approach product, infrastructure, and ML implementation
            together.
          </p>
        </article>
      </section>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
