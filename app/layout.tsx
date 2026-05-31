import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://milliyin.dev"),
  title: {
    default: "milliyin — AI Engineer & Developer",
    template: "%s | milliyin",
  },
  description:
    "Muhammad Illiyin Ashraf — AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, agentic systems.",
  openGraph: {
    title: "milliyin — AI Engineer & Developer",
    description:
      "Muhammad Illiyin Ashraf — AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, agentic systems.",
    url: "https://milliyin.dev",
    siteName: "milliyin",
    images: [{ url: "/syakir.webp", width: 1200, height: 630, alt: "milliyin" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "milliyin — AI Engineer & Developer",
    description:
      "Muhammad Illiyin Ashraf — AI/ML Engineer from Pakistan. NLP, computer vision, generative AI, agentic systems.",
    images: ["/syakir.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  authors: [{ name: "Muhammad Illiyin Ashraf", url: "https://milliyin.dev" }],
  creator: "Muhammad Illiyin Ashraf",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Nav />
        <main className="flex-1 w-full max-w-[680px] mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
