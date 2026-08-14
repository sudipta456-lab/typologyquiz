import type { HandbookExcerpt } from "./types";
import { albertaExcerpts } from "./alberta/excerpts";
import { ontarioExcerpts } from "./ontario/excerpts";
import { texasExcerpts } from "./texas/excerpts";
import { floridaExcerpts } from "./florida/excerpts";
import { newyorkExcerpts } from "./newyork/excerpts";
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
  florida: floridaExcerpts,
  newyork: newyorkExcerpts,
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

// --- Handbook snippet images -------------------------------------------
//
// Rendered by scripts/build-excerpt-snippets.py: the excerpt's own quote is
// located in the official PDF, highlighted, and cropped tight to the passage.
// Keyed by excerpt key. Missing entries just mean we could not locate that
// quote in the PDF (usually because it came from a web page instead), and the
// UI falls back to the text quote alone.
import albertaSnippets from "./alberta/snippets.json";
import texasSnippets from "./texas/snippets.json";
import californiaSnippets from "./california/snippets.json";
// Ontario's handbook is HTML-only on ontario.ca, so its snippets come from
// scripts/build-ontario-snippets.mjs (a real browser screenshot of the
// highlighted passage) and carry page: 0 - there are no page numbers to cite.
import ontarioSnippets from "./ontario/snippets.json";

export interface HandbookSnippet {
  src: string;
  page: number;
  width: number;
  height: number;
}

const SNIPPETS: Record<string, Record<string, HandbookSnippet>> = {
  alberta: albertaSnippets as Record<string, HandbookSnippet>,
  texas: texasSnippets as Record<string, HandbookSnippet>,
  california: californiaSnippets as Record<string, HandbookSnippet>,
  ontario: ontarioSnippets as Record<string, HandbookSnippet>,
};

export function getSnippet(
  jurisdictionSlug: string,
  key: string | undefined
): HandbookSnippet | undefined {
  if (!key) return undefined;
  return SNIPPETS[jurisdictionSlug]?.[key];
}
