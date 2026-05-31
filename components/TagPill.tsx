type Props = {
  tag: string;
};

export default function TagPill({ tag }: Props) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs rounded bg-tag-bg text-tag-text border border-border">
      {tag}
    </span>
  );
}
