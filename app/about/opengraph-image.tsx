import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "About Muhammad Illiyin Ashraf";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "About",
    title: "Muhammad Illiyin Ashraf",
    description:
      "AI/ML engineer focused on NLP, computer vision, generative AI, and autonomous agent systems.",
  });
}
