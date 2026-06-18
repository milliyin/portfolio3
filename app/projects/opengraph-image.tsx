import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "milliyin.dev projects";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Projects",
    title: "AI Project Case Studies",
    description:
      "Selected AI engineering and full-stack builds across NLP, computer vision, generative AI, and autonomous agent tooling.",
  });
}
