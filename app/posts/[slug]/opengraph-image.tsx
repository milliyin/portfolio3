import { ogContentType, ogSize, renderOgCard } from "@/lib/og";
import { getPostBySlug } from "@/lib/posts";

export const alt = "Blog post preview image";
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return renderOgCard({
    eyebrow: "AI Engineering Post",
    title: post?.title ?? "milliyin.dev post",
    description:
      post?.description ??
      "Writing on AI engineering, systems design, model serving, and real-world implementation work.",
  });
}
