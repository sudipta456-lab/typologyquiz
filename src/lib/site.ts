/** Canonical site config for SEO, sharing, and metadata. */
export const SITE = {
  name: "TypologyQuiz",
  legalName: "TypologyQuiz.com",
  url: "https://typologyquiz.com",
  tagline: "Discover your type",
  description:
    "Free personality quizzes and driving licence practice tests. No account, no ads, no paywall - scored in your browser, with every driving answer linked to the official handbook.",
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
