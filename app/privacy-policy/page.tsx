import { jsonLd } from "@/lib/jsonld";
import {
  absoluteUrl,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
  buildWebPageJsonLd,
} from "@/lib/seo";
import type { Metadata } from "next";

const PRIVACY_TITLE = "Privacy Policy";
const PRIVACY_DESCRIPTION =
  "How milliyin.dev handles your data - no tracking, no cookies, no personal info collected.";

export const metadata: Metadata = buildPageMetadata({
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  path: "/privacy-policy",
  image: absoluteUrl("/privacy-policy/opengraph-image"),
});

export default function PrivacyPolicyPage() {
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy-policy" },
  ]);
  const webPageLd = buildWebPageJsonLd({
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
    path: "/privacy-policy",
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
      <h1>Privacy Policy</h1>
      <p>
        <em>Last updated: May 2026</em>
      </p>

      <h2>What This Site Collects</h2>
      <p>
        milliyin.dev uses Vercel Analytics and Vercel Speed Insights to collect
        anonymous, aggregated traffic data. No personally identifiable
        information is collected. No cookies are set by this site. No user
        accounts exist.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        This site is hosted on Vercel. Vercel may collect server-side logs
        including IP addresses as part of standard hosting infrastructure.
        These logs are governed by{" "}
        <a
          href="https://vercel.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel&apos;s Privacy Policy
        </a>
        .
      </p>

      <h2>External Links</h2>
      <p>
        This site links to external services (GitHub, LinkedIn, Hugging Face,
        etc.). Once you leave milliyin.dev, this Privacy Policy no longer
        applies. Review each external site&apos;s own privacy policy.
      </p>

      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href="mailto:illiyindesigns@gmail.com">illiyindesigns@gmail.com</a>.
      </p>
    </div>
  );
}
