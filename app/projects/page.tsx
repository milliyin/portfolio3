import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { jsonLd } from "@/lib/jsonld";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { SITE_AUTHOR } from "@/lib/site";
import type { Metadata } from "next";

const PROJECTS_TITLE = "Projects";
const PROJECTS_DESCRIPTION = `Open-source and freelance projects by ${SITE_AUTHOR} - ML systems, AI agents, and full-stack apps.`;

export const metadata: Metadata = buildPageMetadata({
  title: PROJECTS_TITLE,
  description: PROJECTS_DESCRIPTION,
  path: "/projects",
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
      <div className="max-w-3xl space-y-3">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-sm text-muted leading-relaxed">
          Selected AI engineering and full-stack builds across NLP, computer
          vision, generative AI, autonomous agents, and developer tooling. Each
          project page includes context, implementation notes, and links to demos,
          source code, or deeper writeups when available.
        </p>
      </div>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
