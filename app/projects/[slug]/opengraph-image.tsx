import { getProjectBySlug } from "@/content/projects";
import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Project case study preview image";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  return renderOgCard({
    eyebrow: "Project Case Study",
    title: project?.title ?? "milliyin.dev project",
    description:
      project?.description ??
      "AI engineering project detail page covering the problem, implementation approach, and impact.",
  });
}
