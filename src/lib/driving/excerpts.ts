import type { HandbookExcerpt } from "./types";
import { albertaExcerpts } from "./alberta/excerpts";
import { ontarioExcerpts } from "./ontario/excerpts";
import { texasExcerpts } from "./texas/excerpts";
import { floridaExcerpts } from "./florida/excerpts";
import { newyorkExcerpts } from "./newyork/excerpts";
import { pennsylvaniaExcerpts } from "./pennsylvania/excerpts";
import { ohioExcerpts } from "./ohio/excerpts";
import { georgiaExcerpts } from "./georgia/excerpts";
import { illinoisExcerpts } from "./illinois/excerpts";
import { northcarolinaExcerpts } from "./northcarolina/excerpts";
import { michiganExcerpts } from "./michigan/excerpts";
import { newjerseyExcerpts } from "./newjersey/excerpts";
import { virginiaExcerpts } from "./virginia/excerpts";
import { californiaExcerpts } from "./california/excerpts";
import { washingtonExcerpts } from "./washington/excerpts";
import { massachusettsExcerpts } from "./massachusetts/excerpts";
import { tennesseeExcerpts } from "./tennessee/excerpts";
import { arizonaExcerpts } from "./arizona/excerpts";
import { britishcolumbiaExcerpts } from "./britishcolumbia/excerpts";
import { indianaExcerpts } from "./indiana/excerpts";
import { missouriExcerpts } from "./missouri/excerpts";
import { marylandExcerpts } from "./maryland/excerpts";

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
  pennsylvania: pennsylvaniaExcerpts,
  ohio: ohioExcerpts,
  georgia: georgiaExcerpts,
  illinois: illinoisExcerpts,
  northcarolina: northcarolinaExcerpts,
  michigan: michiganExcerpts,
  newjersey: newjerseyExcerpts,
  virginia: virginiaExcerpts,
  california: californiaExcerpts,
  washington: washingtonExcerpts,
  massachusetts: massachusettsExcerpts,
  tennessee: tennesseeExcerpts,
  arizona: arizonaExcerpts,
  britishcolumbia: britishcolumbiaExcerpts,
  indiana: indianaExcerpts,
  missouri: missouriExcerpts,
  maryland: marylandExcerpts,
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
// New York's MV-21 is HTML-only too (the mv21.pdf link is a 4-page stub), so it
// goes through the same browser pipeline and also carries page: 0.
import newyorkSnippets from "./newyork/snippets.json";
// Georgia's manual is published section by section on dds.georgia.gov, so most
// of its snippets come from the same browser pipeline and carry page: 0. The
// dozen passages DDS's web edition leaves out (Hydroplaning, Skidding, the
// passing rules) are cut from the manual PDF instead and do carry a page.
import georgiaSnippets from "./georgia/snippets.json";
import floridaSnippets from "./florida/snippets.json";
import pennsylvaniaSnippets from "./pennsylvania/snippets.json";
import ohioSnippets from "./ohio/snippets.json";
import illinoisSnippets from "./illinois/snippets.json";
import northcarolinaSnippets from "./northcarolina/snippets.json";
import michiganSnippets from "./michigan/snippets.json";
import newjerseySnippets from "./newjersey/snippets.json";
import virginiaSnippets from "./virginia/snippets.json";
import washingtonSnippets from "./washington/snippets.json";
import massachusettsSnippets from "./massachusetts/snippets.json";
import tennesseeSnippets from "./tennessee/snippets.json";
// Arizona's snippets are cut from an Internet Archive capture rather than the
// live PDF: apps.azdot.gov sits behind a Cloudflare interstitial that refuses
// automated clients. The archived copy is byte-identical to the official file
// and the excerpt urls still point at the live page. The replay server 503s
// intermittently - it took seven attempts - so retry before assuming it is
// down. The twenty unmatched excerpts are quotes from the Revised Statutes,
// which were never in the manual to begin with.
import arizonaSnippets from "./arizona/snippets.json";
import britishcolumbiaSnippets from "./britishcolumbia/snippets.json";
import missouriSnippets from "./missouri/snippets.json";
import marylandSnippets from "./maryland/snippets.json";
// Indiana publishes the manual chapter by chapter rather than as one file, so
// each snippet is cut from its own chapter PDF and carries page: 0 - a page
// number within a chapter is not the manual's page number, and citing it would
// be worse than citing nothing.
import indianaSnippets from "./indiana/snippets.json";

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
  newyork: newyorkSnippets as Record<string, HandbookSnippet>,
  georgia: georgiaSnippets as Record<string, HandbookSnippet>,
  florida: floridaSnippets as Record<string, HandbookSnippet>,
  pennsylvania: pennsylvaniaSnippets as Record<string, HandbookSnippet>,
  ohio: ohioSnippets as Record<string, HandbookSnippet>,
  illinois: illinoisSnippets as Record<string, HandbookSnippet>,
  northcarolina: northcarolinaSnippets as Record<string, HandbookSnippet>,
  michigan: michiganSnippets as Record<string, HandbookSnippet>,
  newjersey: newjerseySnippets as Record<string, HandbookSnippet>,
  virginia: virginiaSnippets as Record<string, HandbookSnippet>,
  washington: washingtonSnippets as Record<string, HandbookSnippet>,
  massachusetts: massachusettsSnippets as Record<string, HandbookSnippet>,
  tennessee: tennesseeSnippets as Record<string, HandbookSnippet>,
  arizona: arizonaSnippets as Record<string, HandbookSnippet>,
  britishcolumbia: britishcolumbiaSnippets as Record<string, HandbookSnippet>,
  indiana: indianaSnippets as Record<string, HandbookSnippet>,
  missouri: missouriSnippets as Record<string, HandbookSnippet>,
  maryland: marylandSnippets as Record<string, HandbookSnippet>,
};

export function getSnippet(
  jurisdictionSlug: string,
  key: string | undefined
): HandbookSnippet | undefined {
  if (!key) return undefined;
  return SNIPPETS[jurisdictionSlug]?.[key];
}
