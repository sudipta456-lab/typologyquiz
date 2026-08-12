import type { HandbookExcerpt } from "./types";
import { albertaExcerpts } from "./alberta/excerpts";
import { ontarioExcerpts } from "./ontario/excerpts";
import { texasExcerpts } from "./texas/excerpts";
import { californiaExcerpts } from "./california/excerpts";

// Handbook excerpt library, keyed by jurisdiction then rule.
//
// Questions reference an excerpt by key rather than carrying their own copy,
// because many questions test the same rule - the school-zone speed rule backs
// half a dozen items across different sets. Sharing them keeps the quoted
// amount small, which is the whole point.

const BY_JURISDICTION: Record<string, HandbookExcerpt[]> = {
  alberta: albertaExcerpts,
  ontario: ontarioExcerpts,
  texas: texasExcerpts,
  california: californiaExcerpts,
};

const INDEX: Record<string, Record<string, HandbookExcerpt>> = Object.fromEntries(
  Object.entries(BY_JURISDICTION).map(([slug, list]) => [
    slug,
    Object.fromEntries(list.map((e) => [e.key, e])),
  ])
);

/** Look up the official wording behind a question. Undefined when unmapped. */
export function getExcerpt(
  jurisdictionSlug: string,
  key: string | undefined
): HandbookExcerpt | undefined {
  if (!key) return undefined;
  return INDEX[jurisdictionSlug]?.[key];
}

export function excerptsFor(jurisdictionSlug: string): HandbookExcerpt[] {
  return BY_JURISDICTION[jurisdictionSlug] ?? [];
}

export function excerptCount(): number {
  return Object.values(BY_JURISDICTION).reduce((n, l) => n + l.length, 0);
}
