import { jsonLd } from "@/lib/jsonld";
import {
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";

const TERMS_TITLE = "Terms of Service";
const TERMS_DESCRIPTION =
  "How you can use milliyin.dev - content license, code samples, and liability.";

export const metadata: Metadata = buildPageMetadata({
  title: TERMS_TITLE,
  description: TERMS_DESCRIPTION,
  path: "/terms-of-service",
});

export default function TermsPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Terms of Service", path: "/terms-of-service" },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
    path: "/terms-of-service",
  });

  return (
    <div className="prose">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(webPageLd) }}
      />
      <h1>Terms of Service</h1>
      <p>
        <em>Last updated: May 2026</em>
      </p>

      <h2>Use of This Site</h2>
      <p>
        milliyin.dev is a personal portfolio and blog. All content is provided
        for informational and educational purposes. You may read, share, and
        link to posts freely with attribution.
      </p>

      <h2>Content License</h2>
      <p>
        Blog posts and written content are copyright Muhammad Illiyin Ashraf
        unless otherwise noted. Code samples in posts are available under the{" "}
        <a
          href="https://opensource.org/licenses/MIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          MIT License
        </a>{" "}
        unless a post specifies differently.
      </p>

      <h2>No Warranties</h2>
      <p>
        Content on this site is provided &quot;as is&quot; without warranty of
        any kind. Code examples are for educational purposes - test thoroughly
        before using in production.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        Muhammad Illiyin Ashraf is not liable for any damages arising from use
        of content or code on this site.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:illiyindesigns@gmail.com">illiyindesigns@gmail.com</a>.
      </p>
    </div>
  );
}
