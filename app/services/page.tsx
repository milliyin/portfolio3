import Link from "next/link";
import { jsonLd } from "@/lib/jsonld";
import {
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
    name: "AI MVPs and internal tools",
    description:
      "From idea to working product: agent workflows, copilots, chat interfaces, dashboards, and automation tools for startups and solo founders.",
  },
  {
    name: "NLP and text classification systems",
    description:
      "Spam detection, moderation, labeling pipelines, document understanding, retrieval workflows, and evaluation loops for language-heavy products.",
  },
  {
    name: "Computer vision applications",
    description:
      "Segmentation, captioning, image understanding, and model serving for products that need practical vision features, not just demos.",
  },
  {
    name: "Generative AI workflows",
    description:
      "Prompt systems, LoRA fine-tuning, model integration, secure inference APIs, and production-ready user flows around modern image and language models.",
  },
];

const SERVICES_TITLE = "AI Engineering Services";
const SERVICES_DESCRIPTION =
  "Freelance AI engineering services by Muhammad Illiyin Ashraf: AI MVPs, NLP systems, computer vision apps, generative AI workflows, and autonomous agent architecture.";

export const metadata: Metadata = buildPageMetadata({
  title: SERVICES_TITLE,
  description: SERVICES_DESCRIPTION,
  path: "/services",
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
              bottleneck: data quality, inference reliability, tooling ergonomics,
              or delivery speed.
            </p>
          </article>
          <article className="rounded-xl border border-border p-5">
            <h2 className="text-lg font-semibold">Best fit</h2>
            <p className="mt-2 text-sm text-muted leading-relaxed">
              Teams that need a technical builder who can move from model logic to
              APIs, UI, infrastructure, and product decisions without losing the plot.
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
              machine learning, product UX, and engineering constraints.
            </p>
            <p>
              If you need someone who can reason about ML systems end to end and
              still ship the product surface around them, this is the kind of work
              I like most.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
