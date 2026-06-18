import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { jsonLd } from "@/lib/jsonld";
import { SITE_AUTHOR, SITE_NAME, SITE_OG_IMAGE, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    `Open-source and freelance projects by ${SITE_AUTHOR} - ML systems, AI agents, and full-stack apps.`,
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: `Projects | ${SITE_NAME}`,
    description:
      `Open-source and freelance projects by ${SITE_AUTHOR} - ML systems, AI agents, and full-stack apps.`,
    url: `${SITE_URL}/projects`,
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${SITE_NAME}`,
    description:
      `Open-source and freelance projects by ${SITE_AUTHOR} - ML systems, AI agents, and full-stack apps.`,
    images: [SITE_OG_IMAGE],
  },
};

export default function ProjectsPage() {
  const collectionLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${SITE_URL}/projects`,
    description:
      `Open-source and freelance projects by ${SITE_AUTHOR} - ML systems, AI agents, and full-stack apps.`,
  };

  return (
    <div className="space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(collectionLd) }}
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
