import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/content/projects";
import { jsonLd } from "@/lib/jsonld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import {
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_LOGO,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_SAME_AS,
  SITE_URL,
} from "@/lib/site";
import PostCard from "@/components/PostCard";
import ProjectCard from "@/components/ProjectCard";
import type { Metadata } from "next";

const HOME_TITLE = "Freelance AI Engineer Building Real-World AI Systems";
const HOME_DESCRIPTION =
  "Freelance AI engineer Muhammad Illiyin Ashraf builds production NLP systems, computer vision apps, generative AI workflows, and autonomous agent platforms for startups and founders.";

export const metadata: Metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  image: absoluteUrl("/opengraph-image"),
});

const TRUST_POINTS = [
  {
    label: "Project depth",
    value: `${projects.length}+`,
    detail: "Each project page explains the problem, the approach, and the shipped result.",
  },
  {
    label: "Writing",
    value: `${getAllPosts().length}+`,
    detail: "Posts that break down what worked, what broke, and what changed.",
  },
  {
    label: "Work style",
    value: "Practical",
    detail: "I care about usable systems, not just model demos or benchmark wins.",
  },
];

const WORKFLOW_STEPS = [
  {
    title: "Scope the real bottleneck",
    description:
      "We figure out whether the hard part is data quality, model behavior, latency, product UX, or infrastructure before building the wrong thing.",
  },
  {
    title: "Ship the working system",
    description:
      "I build the usable version, not just a notebook demo: backend, model flow, interface, and the glue between them.",
  },
  {
    title: "Harden what matters",
    description:
      "Once it works, we tighten reliability, deployment, observability, and the rough edges that make AI features break in production.",
  },
];

const FAQS = [
  {
    question: "What kinds of projects are the best fit?",
    answer:
      "Startups, founders, and small teams that need an AI feature or product surface shipped properly. Good fits include NLP pipelines, model-serving backends, computer vision features, agent workflows, and internal AI tools.",
  },
  {
    question: "Do you only work on machine learning models?",
    answer:
      "No. Most useful AI work needs more than the model itself, so I also build APIs, dashboards, integrations, evaluation flows, and the frontend or developer tooling around the system.",
  },
  {
    question: "Can you help with an MVP instead of a long engagement?",
    answer:
      "Yes. I can work on focused MVP builds, technical spikes, or a specific AI feature that needs to move from idea to something testable quickly.",
  },
  {
    question: "Do you work remotely with international clients?",
    answer:
      "Yes. I am based in Pakistan and work remotely with clients worldwide.",
  },
  {
    question: "Where should I start if I want to evaluate fit?",
    answer:
      "The best place to start is the projects page. It shows the kinds of systems I build and how I usually explain the problem, implementation, and outcome.",
  },
];

const PERSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_AUTHOR,
  url: SITE_URL,
  jobTitle: "AI/ML Engineer",
  description: SITE_DESCRIPTION,
  image: `${SITE_URL}/ava.jpg`,
  sameAs: SITE_SAME_AS,
};

const WEBSITE_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
};

const HOMEPAGE_LD = buildWebPageJsonLd({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
});

const SERVICE_LD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: `${SITE_AUTHOR} AI Engineering`,
  url: SITE_URL,
  image: SITE_OG_IMAGE,
  description: SITE_DESCRIPTION,
  logo: SITE_LOGO,
  sameAs: SITE_SAME_AS,
  email: SITE_EMAIL,
  areaServed: "Worldwide",
};

export default function HomePage() {
  const allPosts = getAllPosts();
  const recentPosts = allPosts.slice(0, 5);
  const featuredProjects = projects.slice(0, 3);
  const breadcrumbLd = buildBreadcrumbJsonLd([{ name: "Home", path: "/" }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(PERSON_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(WEBSITE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(SERVICE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(HOMEPAGE_LD) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />

      <section className="pt-6 pb-14">
        <div className="flex items-start gap-5 mb-6">
          <Image
            src="/ava.jpg"
            alt="Muhammad Illiyin Ashraf"
            width={72}
            height={72}
            className="rounded-full shrink-0 border border-border"
            priority
          />
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">
              Freelance AI Engineer Building Real-World AI Systems
            </h1>
            <p className="text-muted text-sm mt-0.5">
              Muhammad Illiyin Ashraf - Pakistan
            </p>
          </div>
        </div>

        <p className="text-foreground/90 leading-relaxed mb-5 max-w-150">
          I build production AI features for startups and founders: NLP
          classifiers, computer vision systems, generative AI pipelines, secure
          inference backends, and autonomous agents with MCP. Open for freelance
          projects worldwide.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://github.com/milliyin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/illiyin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors"
          >
            AI Services
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
          >
            Download CV
          </Link>
        </div>
      </section>

      <section className="mb-14 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-base font-semibold tracking-tight">
            NLP and language tooling
          </h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Text classification, moderation, retrieval workflows, and production
            pipelines for AI features that need to hold up outside a notebook.
          </p>
        </article>
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-base font-semibold tracking-tight">
            Computer vision and multimodal systems
          </h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Image segmentation, captioning, visual understanding, and inference
            services for products that need reliable vision capabilities.
          </p>
        </article>
        <article className="rounded-xl border border-border bg-card p-5">
          <h2 className="text-base font-semibold tracking-tight">
            Agents, automation, and product builds
          </h2>
          <p className="mt-2 text-sm text-muted leading-relaxed">
            Autonomous agent systems, MCP-based tooling, dashboards, APIs, and
            full-stack product surfaces around modern AI workflows.
          </p>
        </article>
      </section>

      <section className="mb-14 rounded-2xl border border-border bg-card/70 p-6 md:p-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              The best way to judge the work is to look at the work
            </h2>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              If you want to know how I build, the clearest answer is in the
              projects and posts. I try to show the technical decisions, the
              tradeoffs, and what actually shipped.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 self-start rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Browse project proof
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {TRUST_POINTS.map((point) => (
            <article
              key={point.label}
              className="rounded-xl border border-border bg-background/40 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                {point.label}
              </p>
              <p className="mt-3 text-2xl font-semibold tracking-tight">
                {point.value}
              </p>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {point.detail}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold text-muted uppercase tracking-[0.24em]">
            How I work
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            The work is usually a systems problem, not just a model problem
          </h2>
          <p className="mt-3 text-sm text-muted leading-relaxed">
            That is why my process starts with the bottleneck and ends with a usable,
            deployable product surface. The point is to ship something people can
            actually use, inspect, and iterate on.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {WORKFLOW_STEPS.map((step, index) => (
            <article
              key={step.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="flex items-center justify-between mb-1">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest">
            Recent Posts
          </h2>
          <Link
            href="/posts"
            className="text-xs text-accent hover:text-accent-hover transition-colors"
          >
            {"All posts ->"}
          </Link>
        </div>
        <div>
          {recentPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
              description={post.description}
            />
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-semibold text-muted uppercase tracking-widest">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-xs text-accent hover:text-accent-hover transition-colors"
          >
            {"All projects ->"}
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section className="mb-14">
        <div className="max-w-3xl">
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            A few useful things to know
          </h2>
        </div>
        <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group px-5 py-1"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-medium text-foreground marker:content-none">
                <span>{faq.question}</span>
                <span className="text-lg text-muted transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-4 pr-8 text-sm leading-relaxed text-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-[1.75rem] border border-border bg-card px-6 py-12 text-center md:px-10 md:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Let&apos;s work together
        </p>
        <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
          If you already know the AI feature you want, we can turn it into a
          working system.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
          Whether you need an MVP, a production-facing backend, a model workflow,
          or a product surface around it, I can help scope it, build it, and make
          it usable.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/services#contact"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
          >
            Start a project
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            See services
          </Link>
        </div>
      </section>
    </>
  );
}
