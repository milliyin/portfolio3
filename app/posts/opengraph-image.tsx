import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "milliyin.dev posts";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Posts",
    title: "AI Engineering Notes",
    description:
      "Writing on AI systems, model serving, computer vision, training workflows, and real-world implementation details.",
  });
}
