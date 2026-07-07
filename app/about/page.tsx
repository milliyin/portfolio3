import Image from "next/image";
import Link from "next/link";
import { jsonLd } from "@/lib/jsonld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import { SITE_AUTHOR, SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

const ABOUT_TITLE = "About";
const ABOUT_DESCRIPTION = `${SITE_AUTHOR} - AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, and autonomous agent systems.`;

export const metadata: Metadata = buildPageMetadata({
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  path: "/about",
  image: absoluteUrl("/about/opengraph-image"),
});

const TECHNOLOGIES = [
  "PyTorch",
  "TensorFlow",
  "HuggingFace Transformers",
  "Diffusers",
  "LangGraph",
  "Next.js",
  "FastAPI",
  "Gradio",
  "AWS (Lambda, ECR, Amplify)",
  "Neon PostgreSQL",
  "Model Context Protocol (MCP)",
  "ethers.js",
  "TypeScript",
  "Python",
];

const AREAS = [
  "NLP & text classification (spam detection, sentiment, intent)",
  "Computer vision (segmentation, style classification, captioning)",
  "Generative AI (LoRA fine-tuning, FLUX, Stable Diffusion)",
  "Autonomous AI agents with MCP tool surfaces",
  "Full-stack web apps (Next.js, TypeScript, PostgreSQL)",
];

export default function AboutPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: ABOUT_TITLE,
    description: ABOUT_DESCRIPTION,
    path: "/about",
  });
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: SITE_AUTHOR,
    url: `${SITE_URL}/about`,
    jobTitle: "AI/ML Engineer",
    worksFor: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    alumniOf: "Independent builder",
    knowsAbout: [
      "NLP",
      "computer vision",
      "generative AI",
      "autonomous AI agents",
      "Next.js",
      "Python",
    ],
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(personLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />
      <div className="flex items-start gap-5 mb-8">
        <Image
          src="/ava.jpg"
          alt="Muhammad Illiyin Ashraf"
          width={80}
          height={80}
          className="rounded-full shrink-0 border border-border"
        />
        <div className="pt-1">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            AI/ML Engineer - NLP, Computer Vision, Generative AI
          </h1>
          <p className="text-muted mt-1">Muhammad Illiyin Ashraf - Pakistan</p>
        </div>
      </div>

      <div className="prose">
        <p>
          I&apos;m an AI/ML engineer based in Pakistan, focused on building
          machine learning systems that solve real problems. My work usually
          spans the full stack, from training and fine-tuning models to shipping
          APIs and building the interfaces around them.
        </p>
        <p>
          I got into machine learning because I wanted to understand how these
          systems actually work. I did not want to stop at calling an API. I
          wanted to build the model, train it, test it, and understand where it
          breaks. That curiosity led me through NLP classifiers, computer vision
          pipelines, generative AI workflows with LoRA adapters, and eventually
          into autonomous agent systems built with the Model Context Protocol.
        </p>
        <p>
          Most of my recent work sits at the intersection of AI and systems
          design. I like building things that have to work end to end, whether
          that means agent marketplaces, secure model-serving flows, or tools
          that make complex ML systems easier to use. I care about the whole
          pipeline, including reliability, security, and the experience of using
          the final product.
        </p>

        <h2>What I Work On</h2>
        <ul>
          {AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <p>
          I&apos;m open to freelance work, especially projects involving ML
          systems, AI agent architecture, or full-stack development with a
          strong technical backend.
        </p>

        <h2>Technologies</h2>
        <div className="not-prose flex flex-wrap gap-2 mt-3">
          {TECHNOLOGIES.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-tag-bg text-tag-text border border-border font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="mt-8">Contact</h2>
        <p>
          Reach me at{" "}
          <a href="mailto:illiyindesigns@gmail.com">
            illiyindesigns@gmail.com
          </a>{" "}
          or connect on{" "}
          <a
            href="https://www.linkedin.com/in/illiyin"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          . You can also{" "}
          <Link href="/cv">download my CV</Link>.
        </p>
      </div>
    </div>
  );
}
