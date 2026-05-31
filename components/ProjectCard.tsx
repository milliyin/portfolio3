import Link from "next/link";
import TagPill from "./TagPill";

type Props = {
  title: string;
  tags: string[];
  description: string;
  articleUrl?: string | null;
  demoUrl?: string | null;
  githubUrl?: string | null;
};

export default function ProjectCard({
  title,
  tags,
  description,
  articleUrl,
  demoUrl,
  githubUrl,
}: Props) {
  return (
    <div className="p-5 rounded-lg border border-border bg-card transition-colors hover:border-accent/20">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-foreground leading-snug">{title}</h3>
        <div className="flex items-center gap-3 shrink-0 text-sm pt-0.5">
          {articleUrl && (
            <Link
              href={articleUrl}
              className="text-accent hover:text-accent-hover transition-colors"
            >
              Article
            </Link>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              Demo ↗
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-muted leading-relaxed">{description}</p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <TagPill key={tag} tag={tag} linked={false} />
          ))}
        </div>
      )}
    </div>
  );
}
