import Link from "next/link";

type Props = {
  tag: string;
  linked?: boolean;
};

function slugifyTag(tag: string) {
  return encodeURIComponent(tag.toLowerCase().replace(/\s+/g, "-"));
}

export default function TagPill({ tag, linked = true }: Props) {
  const pill = (
    <span className="inline-block px-2 py-0.5 text-xs rounded bg-tag-bg text-tag-text border border-border hover:border-accent/40 transition-colors cursor-pointer">
      {tag}
    </span>
  );

  if (!linked) {
    return (
      <span className="inline-block px-2 py-0.5 text-xs rounded bg-tag-bg text-tag-text border border-border">
        {tag}
      </span>
    );
  }

  return <Link href={`/tags/${slugifyTag(tag)}`}>{pill}</Link>;
}
