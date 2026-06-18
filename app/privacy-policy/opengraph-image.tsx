import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Privacy policy";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Legal",
    title: "Privacy Policy",
    description:
      "How milliyin.dev handles analytics, external links, and visitor privacy.",
  });
}
