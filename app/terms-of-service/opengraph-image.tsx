import { ogContentType, ogSize, renderOgCard } from "@/lib/og";

export const alt = "Terms of service";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgCard({
    eyebrow: "Legal",
    title: "Terms of Service",
    description:
      "Usage terms for the milliyin.dev portfolio, blog content, and code samples.",
  });
}
