import type { Metadata } from "next";
import {
  SITE_AUTHOR,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_URL,
} from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
};

type BreadcrumbItem = {
  name: string;
  path?: string;
};

type WebPageInput = {
  title: string;
  description: string;
  path?: string;
};

export function absoluteUrl(path = "/") {
  return path.startsWith("http")
    ? path
    : `${SITE_URL}${path === "/" ? "" : path}`;
}

export function buildPageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image = SITE_OG_IMAGE,
}: MetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      type,
      siteName: SITE_NAME,
      locale: "en_US",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
      creator: "@milliyin",
    },
    authors: [{ name: SITE_AUTHOR, url: SITE_URL }],
  };
}

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path ?? "/"),
    })),
  };
}

export function buildWebPageJsonLd({
  title,
  description,
  path = "/",
}: WebPageInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: absoluteUrl(path),
    description,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    author: {
      "@type": "Person",
      name: SITE_AUTHOR,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}
