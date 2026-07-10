/** Canonical site config for SEO, sharing, and metadata. */
export const SITE = {
  name: "TypologyQuiz",
  legalName: "TypologyQuiz.com",
  url: "https://typologyquiz.com",
  tagline: "Discover your type",
  description:
    "Free, scientifically-backed personality and typology quizzes. No accounts, no paywalls, no data brokers - just thoughtful questions and honest results.",
  email: "hello@typologyquiz.com",
  locale: "en_US",
  twitterHandle: "@typologyquiz",
  ogImage: "/assets/og-default.jpg",
  logo: "/assets/typologyquiz-logo.svg",
  mark: "/assets/typologyquiz-mark.svg",
  favicon: "/assets/typologyquiz-favicon.svg",
} as const;

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const base = SITE.url.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}
