import { projects } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Open-source and freelance projects by Muhammad Illiyin Ashraf — ML systems, AI agents, and full-stack apps.",
  alternates: { canonical: "https://milliyin.dev/projects" },
  openGraph: {
    title: "Projects | milliyin",
    description:
      "Open-source and freelance projects by Muhammad Illiyin Ashraf — ML systems, AI agents, and full-stack apps.",
    url: "https://milliyin.dev/projects",
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
