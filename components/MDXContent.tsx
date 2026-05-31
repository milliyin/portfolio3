import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import type { Options as PrettyCodeOptions } from "rehype-pretty-code";

type Props = {
  source: string;
};

const prettyCodeOptions: PrettyCodeOptions = {
  theme: "github-dark",
  keepBackground: false,
  defaultLang: "plaintext",
};

export default function MDXContent({ source }: Props) {
  return (
    <div className="prose">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
          },
        }}
      />
    </div>
  );
}
