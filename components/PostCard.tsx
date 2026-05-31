import Link from "next/link";
import TagPill from "./TagPill";

type Props = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description?: string;
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ slug, title, date, tags, description }: Props) {
  return (
    <article className="group py-5 border-b border-border last:border-0">
      <time className="text-xs text-muted font-mono tracking-wide">
        {formatDate(date)}
      </time>
      <h2 className="mt-1 text-base font-semibold leading-snug tracking-tight">
        <Link
          href={`/posts/${slug}`}
          className="text-foreground hover:text-accent transition-colors underline-offset-2 hover:underline"
        >
          {title}
        </Link>
      </h2>
      {description && (
        <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      )}
      {tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TagPill key={tag} tag={tag} />
          ))}
        </div>
      )}
    </article>
  );
}
