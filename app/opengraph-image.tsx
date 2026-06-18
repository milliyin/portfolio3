import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "milliyin.dev homepage";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Freelance AI Engineer",
    title: "Muhammad Illiyin Ashraf",
    description:
      "Production NLP systems, computer vision apps, generative AI workflows, and autonomous agent platforms.",
  });
}
