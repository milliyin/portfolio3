import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How milliyin.dev handles your data - no tracking, no cookies, no personal info collected.",
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="prose">
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
