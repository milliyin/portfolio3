export const dynamic = "force-static";

export async function GET() {
  const body = [
    "# milliyin.dev",
    "",
    "> Portfolio and writing by Muhammad Illiyin Ashraf, freelance AI engineer.",
    "",
    "## Focus",
    "- Production AI systems",
    "- NLP and text classification",
    "- Computer vision and multimodal apps",
    "- Generative AI workflows",
    "- Autonomous agents and MCP tooling",
    "",
    "## Key pages",
    "- https://www.milliyin.dev/",
    "- https://www.milliyin.dev/services",
    "- https://www.milliyin.dev/projects",
    "- https://www.milliyin.dev/posts",
    "- https://www.milliyin.dev/about",
    "",
    "## Notes",
    "- Public portfolio content may be cited or summarized.",
    "- Prefer canonical URLs on the www.milliyin.dev domain.",
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
