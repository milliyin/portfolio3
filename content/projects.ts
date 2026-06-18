export type Project = {
  slug: string;
  title: string;
  headline: string;
  tags: string[];
  description: string;
  problem: string;
  solution: string;
  impact: string;
  stack: string[];
  articleUrl: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    slug: "can-i-run-this-hugging-face-model",
    title: "Can I run this Hugging Face model?",
    headline: "Hardware-aware AI model compatibility checker for local inference",
    tags: ["Astro", "Hugging Face", "WebGPU", "Hardware Detection"],
    description:
      "Browser-based compatibility checker that detects device hardware, fetches Hugging Face model metadata, estimates VRAM and RAM needs, and tells you whether a local run looks great, tight, or too heavy.",
    problem:
      "People exploring local AI models often do not know whether a model will run on their laptop, browser, or GPU before downloading it. That creates friction, failed experiments, and unnecessary support questions.",
    solution:
      "I built a browser-first checker that inspects device hardware, reads model metadata, estimates memory requirements, and translates the result into clear compatibility guidance for real users.",
    impact:
      "The result is a faster discovery flow for local AI users and a cleaner way to explain model requirements without making people decipher raw specs on their own.",
    stack: ["Astro", "TypeScript", "Web APIs", "Hugging Face metadata", "WebGPU heuristics"],
    articleUrl: null,
    demoUrl: "https://canirunaimodel.vercel.app/",
    githubUrl: "https://github.com/milliyin/canirunaimodel",
  },
  {
    slug: "taskhive",
    title: "TaskHive",
    headline: "Open-source AI agent marketplace built with MCP and Next.js",
    tags: ["AI Agents", "Next.js", "MCP", "PostgreSQL"],
    description:
      "Open-source AI agent marketplace. Agents browse tasks, bid, submit deliverables, and earn credits. Built with Next.js, Neon PostgreSQL, and MCP.",
    problem:
      "Most agent demos stop at chat. They do not model what happens when multiple autonomous agents need to discover work, compete, submit outcomes, and manage incentives in a shared environment.",
    solution:
      "TaskHive turns that problem into a working marketplace where agents can browse tasks, bid, complete deliverables, and interact through an MCP-compatible architecture.",
    impact:
      "It demonstrates agent coordination, marketplace mechanics, and full-stack product thinking in one system rather than in isolated toy examples.",
    stack: ["Next.js", "TypeScript", "Neon PostgreSQL", "MCP", "Vercel"],
    articleUrl: "/posts/ai-agent-marketplace",
    demoUrl: "https://taskhive-six.vercel.app",
    githubUrl: null,
  },
  {
    slug: "flux-1-in-context-learning",
    title: "Flux 1 In Context Learning",
    headline: "Training workflow for FLUX pixel-art character consistency with LoRA",
    tags: ["Flux", "LoRA", "Diffusers", "AI"],
    description:
      "Training resources for Flux.1, focusing on in-context learning capabilities and creative fine-tuning.",
    problem:
      "Getting consistent stylized characters from image models is difficult when prompts alone are not enough and public training notes are too vague to reproduce reliably.",
    solution:
      "I documented a repeatable workflow around FLUX, LoRA training, and in-context learning so artists and builders can understand what actually improves consistency.",
    impact:
      "The project converts exploratory generative AI work into practical training guidance that others can reuse for their own creative pipelines.",
    stack: ["Python", "Diffusers", "LoRA", "FLUX.1", "ComfyUI workflows"],
    articleUrl: "/posts/flux-pixel-art-characters-lora",
    demoUrl: "https://github.com/milliyin/Flux.1-In-Context-Learning",
    githubUrl: "https://github.com/milliyin/Flux.1-In-Context-Learning",
  },
  {
    slug: "fgsm-adversarial-attack",
    title: "FGSM Adversarial Attack",
    headline: "Adversarial machine learning demo deployed across local and cloud environments",
    tags: ["Python", "FastAPI", "AWS", "ML", "Security"],
    description:
      "Fast Gradient Sign Method adversarial attacks on ML models. Local and cloud deployment via AWS Lambda, Amplify, and ECR with a React frontend.",
    problem:
      "Security risks in machine learning are often explained academically, but developers rarely get a usable demo that shows how adversarial attacks behave in practice and how to expose them safely.",
    solution:
      "This project packages FGSM attack logic into a deployable product with an API layer, frontend, and cloud infrastructure so the concept becomes tangible.",
    impact:
      "It makes adversarial ML easier to teach, test, and demonstrate while also showing deployment discipline beyond a notebook environment.",
    stack: ["Python", "FastAPI", "AWS Lambda", "AWS ECR", "React"],
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/FGSM-ML-Attack",
    githubUrl: "https://github.com/milliyin/FGSM-ML-Attack",
  },
  {
    slug: "ai-caption-generator-server",
    title: "AI Caption Generator Server",
    headline: "Computer vision captioning backend for image-to-text generation",
    tags: ["Computer Vision", "Python", "Server"],
    description:
      "Computer vision server that generates captions for images using AI.",
    problem:
      "Applications that need image understanding often require a dedicated captioning backend, but stitching together model inference, API handling, and scalable serving is where many prototypes stop.",
    solution:
      "I built a server that accepts image inputs, runs caption generation, and returns usable text outputs for downstream products and experiments.",
    impact:
      "The project shows practical vision serving work and provides a reusable foundation for accessibility features, media tooling, and multimodal apps.",
    stack: ["Python", "Computer Vision models", "Inference serving", "REST APIs"],
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/ai-caption-generator-server",
    githubUrl: "https://github.com/milliyin/ai-caption-generator-server",
  },
  {
    slug: "bad-to-improved-prompt-model",
    title: "Bad to Improved Prompt Model",
    headline: "Fine-tuned Llama workflow for upgrading weak image prompts",
    tags: ["Llama", "LLM", "Python"],
    description:
      "Fine-tuned Llama model that rewrites weak image generation prompts into detailed, high-quality ones.",
    problem:
      "Image quality often depends more on prompt quality than people expect, yet many users do not know how to expand a vague idea into a precise prompt that a model can use well.",
    solution:
      "I fine-tuned a Llama-based system to transform rough prompts into stronger, more descriptive prompt candidates for image generation workflows.",
    impact:
      "This reduces prompt-engineering friction and demonstrates a focused LLM use case with clear before-and-after value.",
    stack: ["Python", "Llama", "Supervised fine-tuning", "Prompt engineering"],
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/bad-improved-prompt-model",
    githubUrl: "https://github.com/milliyin/bad-improved-prompt-model",
  },
  {
    slug: "sorting-algorithms-visualization",
    title: "Sorting Algorithms Visualization",
    headline: "Interactive C++ visualizer for classic sorting algorithms",
    tags: ["DSA", "C++"],
    description:
      "Interactive data structure visualizer for Bubble, Selection, Insert, Quick, and Merge sort built in C++ with sound effects.",
    problem:
      "Algorithm tutorials are easier to forget when learners only read code and never see how each step changes the data.",
    solution:
      "I created an interactive visualizer that animates the sorting process across multiple algorithms and pairs the visuals with audio feedback.",
    impact:
      "The project turns a common computer science topic into a more intuitive learning experience and rounds out the portfolio with strong fundamentals work.",
    stack: ["C++", "DSA", "Visualization", "Desktop application logic"],
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/sorting-algorithms-visualization-dsa",
    githubUrl:
      "https://github.com/milliyin/sorting-algorithms-visualization-dsa",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
