import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";
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
    images: [{ url: "/syakir.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${SITE_NAME}`,
    description:
      `Open-source and freelance projects by ${SITE_AUTHOR} - ML systems, AI agents, and full-stack apps.`,
    images: ["/syakir.webp"],
  },
};

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-8">Projects</h1>
      <div className="flex flex-col gap-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
