import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "AI engineering services";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Services",
    title: "AI Engineering Services",
    description:
      "Freelance AI engineering for NLP systems, computer vision apps, generative AI workflows, and agent-based products.",
  });
}
