import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Muhammad Illiyin Ashraf — AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, and autonomous agent systems.",
  alternates: { canonical: "https://milliyin.dev/about" },
  openGraph: {
    title: "About | milliyin",
    description:
      "Muhammad Illiyin Ashraf — AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, and autonomous agent systems.",
    url: "https://milliyin.dev/about",
    images: [{ url: "/syakir.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | milliyin",
    description:
      "Muhammad Illiyin Ashraf — AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, and autonomous agent systems.",
    images: ["/syakir.webp"],
  },
};

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
  "DeFi & on-chain agent governance (ERC-8004)",
  "Full-stack web apps (Next.js, TypeScript, PostgreSQL)",
];

export default function AboutPage() {
  return (
    <div>
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
            Muhammad Illiyin Ashraf
          </h1>
          <p className="text-muted mt-1">Developer & AI Engineer · Pakistan</p>
        </div>
      </div>

      <div className="prose">
        <p>
          I&apos;m an AI/ML engineer based in Pakistan, focused on building
          real-world machine learning systems that solve concrete problems. My
          work spans the full stack — from training models and fine-tuning
          foundation models to deploying production APIs and building the
          interfaces that make them usable.
        </p>
        <p>
          I got into machine learning because I wanted to understand how things
          actually work — not just call an API, but build and train the thing
          myself. That curiosity led me through NLP classifiers, computer vision
          pipelines, generative AI with LoRA adapters, and eventually to
          autonomous AI agent systems built on the Model Context Protocol.
        </p>
        <p>
          Most of my recent work has been at the intersection of AI and systems
          design: building agents that can govern themselves on-chain, marketplaces
          where AI agents compete for tasks, and secure architectures for serving
          models without leaking weights. I care about the whole pipeline — not
          just model accuracy, but reliability, security, and the experience of
          using the thing.
        </p>

        <h2>What I Work On</h2>
        <ul>
          {AREAS.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>

        <h2>Why I Build</h2>
        <p>
          I build because working systems teach you things that reading never
          can. Every project on this site started with a question I couldn&apos;t
          answer by studying — so I built the answer instead. The N+1 database
          bug that slowed TaskHive to 2.2 seconds. The stop-out timing issue that
          made Sentinel exit correct trades. The MCP transport layer that took
          four commits to get right. These are the things I actually learned.
        </p>
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
