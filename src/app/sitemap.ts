import type { MetadataRoute } from "next";
import { TESTS } from "@/lib/tests/registry";
import { JURISDICTIONS } from "@/lib/driving/jurisdictions";
import { TRIVIA_QUIZZES } from "@/lib/trivia/registry";
import { EDITIONS } from "@/lib/newsquiz/editions";
import { editionPath } from "@/lib/editorial/identity";
import { SITE } from "@/lib/site";

// Generated from the registries rather than hand-maintained.
//
// The previous sitemap was a static file in public/ and had drifted badly - it
// listed 21 URLs and knew about none of the newer quizzes or any driving page.
// Deriving it means adding a quiz or a jurisdiction updates the sitemap for
// free, and it can never silently fall behind again.

export const dynamic = "force-static";

const base = SITE.url.replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified where no maintained content date exists.
  // Rebuilding the site is not a significant content update.

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/friends/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/tests/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/driving/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/trivia/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/weekly/`, lastModified: new Date([...EDITIONS].map(e => e.publishedAt).sort().at(-1)!), changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/daily/`, changeFrequency: "daily", priority: 0.8 },
    { url: `${base}/friend-quiz/`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/fool/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/about/`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/methodology/`, lastModified: new Date("2026-09-11"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/credits/`, changeFrequency: "monthly", priority: 0.5 },
  ];

  // Quiz landing pages. take/ and results/ are intentionally omitted - they are
  // interaction surfaces, not content anyone should land on from search.
  const quizPages: MetadataRoute.Sitemap = TESTS.map((t) => ({
    url: `${base}/test/${t.slug}/`,
    changeFrequency: "monthly" as const,
    priority: t.isNew ? 0.85 : 0.8,
  }));

  // Jurisdiction hubs carry the search intent ("alberta class 7 practice test"),
  // so they rank above the individual sets.
  const drivingPages: MetadataRoute.Sitemap = JURISDICTIONS.flatMap((j) => [
    {
      url: `${base}/driving/${j.slug}/`,
      lastModified: new Date(j.contentDate),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...j.sets.map((s) => ({
      url: `${base}/driving/${j.slug}/${s.id}/take/`,
      lastModified: new Date(j.contentDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ]);

  // Trivia quizzes: the play page IS the landing page (title, rules and the
  // start button all live on one URL), so every quiz is listed - including
  // the generated letter pages, which sit a notch lower as long-tail.
  const triviaPages: MetadataRoute.Sitemap = TRIVIA_QUIZZES.map((q) => ({
    url: `${base}/trivia/${q.slug}/`,
    changeFrequency: "monthly" as const,
    priority: q.filterLetter !== undefined ? 0.65 : 0.8,
  }));

  // Index immutable editions; existing news aliases canonicalize to these URLs.
  const editionPages: MetadataRoute.Sitemap = EDITIONS.map(edition => ({
    url: `${base}${editionPath(edition)}`,
    lastModified: new Date(edition.publishedAt),
    changeFrequency: "never",
    priority: 0.7,
  }));

  return [...staticPages, ...quizPages, ...drivingPages, ...triviaPages, ...editionPages];
}
