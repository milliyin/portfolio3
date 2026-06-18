import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/50 mt-16">
      <div className="max-w-[680px] mx-auto px-4 py-6 flex flex-col gap-3 text-sm text-muted">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {year} Muhammad Illiyin Ashraf</span>
          <span className="text-xs">
            Freelance AI engineer building NLP, computer vision, and agent systems.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/services"
            className="hover:text-foreground transition-colors"
          >
            Services
          </Link>
          <Link
            href="/projects"
            className="hover:text-foreground transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/posts"
            className="hover:text-foreground transition-colors"
          >
            Posts
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-foreground transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="hover:text-foreground transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
