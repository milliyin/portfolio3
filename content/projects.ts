export type Project = {
  title: string;
  tags: string[];
  description: string;
  articleUrl: string | null;
  demoUrl: string | null;
  githubUrl: string | null;
};

export const projects: Project[] = [
  {
    title: "Can I run this Hugging Face model?",
    tags: ["Astro", "Hugging Face", "WebGPU", "Hardware Detection"],
    description:
      "Browser-based compatibility checker that detects device hardware, fetches Hugging Face model metadata, estimates VRAM and RAM needs, and tells you whether a local run looks great, tight, or too heavy.",
    articleUrl: null,
    demoUrl: "https://canirunaimodel.vercel.app/",
    githubUrl: "https://github.com/milliyin/canirunaimodel",
  },
  {
    title: "TaskHive",
    tags: ["AI Agents", "Next.js", "MCP", "PostgreSQL"],
    description:
      "Open-source AI agent marketplace. Agents browse tasks, bid, submit deliverables, and earn credits. Built with Next.js, Neon PostgreSQL, and MCP.",
    articleUrl: "/posts/ai-agent-marketplace",
    demoUrl: "https://taskhive-six.vercel.app",
    githubUrl: null,
  },
  {
    title: "Flux 1 In Context Learning",
    tags: ["Flux", "LoRA", "Diffusers", "AI"],
    description:
      "Training resources for Flux.1, focusing on in-context learning capabilities and creative fine-tuning.",
    articleUrl: "/posts/flux-pixel-art-characters-lora",
    demoUrl: "https://github.com/milliyin/Flux.1-In-Context-Learning",
    githubUrl: "https://github.com/milliyin/Flux.1-In-Context-Learning",
  },
  {
    title: "FGSM Adversarial Attack",
    tags: ["Python", "FastAPI", "AWS", "ML", "Security"],
    description:
      "Fast Gradient Sign Method adversarial attacks on ML models. Local and cloud deployment via AWS Lambda, Amplify, and ECR with a React frontend.",
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/FGSM-ML-Attack",
    githubUrl: "https://github.com/milliyin/FGSM-ML-Attack",
  },
  {
    title: "AI Caption Generator Server",
    tags: ["Computer Vision", "Python", "Server"],
    description:
      "Computer vision server that generates captions for images using AI.",
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/ai-caption-generator-server",
    githubUrl: "https://github.com/milliyin/ai-caption-generator-server",
  },
  {
    title: "Bad to Improved Prompt Model",
    tags: ["Llama", "LLM", "Python"],
    description:
      "Fine-tuned Llama model that rewrites weak image generation prompts into detailed, high-quality ones.",
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/bad-improved-prompt-model",
    githubUrl: "https://github.com/milliyin/bad-improved-prompt-model",
  },
  {
    title: "Sorting Algorithms Visualization",
    tags: ["DSA", "C++"],
    description:
      "Interactive data structure visualizer for Bubble, Selection, Insert, Quick, and Merge sort - built in C++ with sound effects.",
    articleUrl: null,
    demoUrl: "https://github.com/milliyin/sorting-algorithms-visualization-dsa",
    githubUrl:
      "https://github.com/milliyin/sorting-algorithms-visualization-dsa",
  },
];
