import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content", "posts");

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(postsDir, filename), "utf-8");
    const { data, content } = matter(raw);

    const rawDate = data.date;
    const date =
      rawDate instanceof Date
        ? rawDate.toISOString().split("T")[0]
        : String(rawDate);

    return {
      slug,
      title: String(data.title ?? ""),
      date,
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      description: String(data.description ?? ""),
      content,
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  const rawDate = data.date;
  const date =
    rawDate instanceof Date
      ? rawDate.toISOString().split("T")[0]
      : String(rawDate);

  return {
    slug,
    title: String(data.title ?? ""),
    date,
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    description: String(data.description ?? ""),
    content,
  };
}

export function getAllTags(posts: Post[]): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet).sort();
}
