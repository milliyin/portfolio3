import Link from "next/link";
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
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/site";
import type { Metadata } from "next";

const SERVICES = [
  {
    name: "Generative AI workflows",
    description:
      "Prompt systems, LoRA fine-tuning, model integration, secure inference APIs, and production-ready flows around modern image and language models.",
  },
  {
    name: "Computer vision applications",
    description:
      "Segmentation, captioning, image understanding, and model serving for products that need practical vision features, not just demos.",
  },
  {
    name: "NLP and text classification systems",
    description:
      "Spam detection, moderation, labeling pipelines, document understanding, retrieval workflows, and evaluation loops for language-heavy products.",
  },
  {
    name: "AI MVPs and internal tools",
    description:
      "From idea to working product: agent workflows, copilots, chat interfaces, dashboards, and automation tools for startups and solo founders.",
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

const SERVICES_TITLE = "AI Engineering Services";
const SERVICES_DESCRIPTION =
  "Freelance AI engineering services by Muhammad Illiyin Ashraf: AI MVPs, NLP systems, computer vision apps, generative AI workflows, and autonomous agent architecture.";

export const metadata: Metadata = buildPageMetadata({
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  path: "/services",
  image: absoluteUrl("/services/opengraph-image"),
});

export default function ServicesPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: SERVICES_TITLE,
    description: SERVICES_DESCRIPTION,
    path: "/services",
  });

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_AUTHOR} AI Engineering Services`,
    url: `${SITE_URL}/services`,
    description: SITE_DESCRIPTION,
    provider: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
    areaServed: "Worldwide",
    serviceType: [
      "AI engineering",
      "machine learning engineering",
      "NLP systems",
      "computer vision systems",
      "generative AI development",
      "autonomous agent architecture",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(serviceLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />

      <div className="space-y-12">
        <section className="space-y-5">
          <p className="text-xs font-semibold text-muted uppercase tracking-[0.24em]">
            Services
          </p>
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Freelance AI engineer for products that need working systems, not demos
            </h1>
            <p className="text-base text-foreground/90 leading-relaxed">
              I help founders and teams build AI features that ship: production NLP
              pipelines, computer vision systems, generative AI workflows, and
              agent-based products with strong backend foundations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-accent text-background font-medium hover:bg-accent-hover transition-colors"
            >
              Start a project
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-md border border-border text-foreground hover:border-accent/50 hover:text-accent transition-colors"
            >
              View case studies
            </Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold tracking-tight mb-5">
            What I can build
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.name}
                className="rounded-xl border border-border bg-card p-5"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          <article className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">How I work</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              I scope fast, validate assumptions early, and build around the real
              bottleneck: data quality, inference reliability, developer tooling,
              or delivery speed.
            </p>
          </article>
          <article className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">Best fit</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Teams that need a technical builder who can move from model logic to
              APIs, interfaces, infrastructure, and product decisions without losing the plot.
            </p>
          </article>
          <article className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">Engagements</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Ideal for freelance builds, prototypes that need hardening, and AI
              features where speed matters but quality still has to hold up.
            </p>
          </article>
        </section>

        <section>
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

        <section className="max-w-3xl">
          <h2 className="text-xl font-semibold tracking-tight mb-4">
            Recent work areas
          </h2>
          <div className="prose">
            <p>
              Recent portfolio work includes autonomous agent marketplaces, secure
              model-serving flows, prompt-improvement systems, adversarial ML demos,
              FLUX training experiments, and browser-first tooling for local AI
              model compatibility. That mix is useful when a project sits between
              machine learning, product requirements, and engineering constraints.
            </p>
            <p>
              If you need someone who can reason about ML systems end to end and
              still ship the product surface around them, this is the kind of work
              I like most.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="rounded-2xl border border-border bg-card px-6 py-8 scroll-mt-24"
        >
          <p className="text-xs font-semibold text-muted uppercase tracking-[0.24em]">
            Start a project
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Tell me what you are building
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted leading-relaxed">
            If you already have a product idea, feature brief, or rough problem
            statement, send it over. A short email with the goal, timeline, and
            current stack is enough to start the conversation.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${SITE_EMAIL}?subject=AI%20Project%20Inquiry`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-accent-hover"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/illiyin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              Message on LinkedIn
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            Direct email:{" "}
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="text-accent hover:text-accent-hover"
            >
              {SITE_EMAIL}
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
