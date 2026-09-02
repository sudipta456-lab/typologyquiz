/**
 * Shared JSON-LD builders for the non-driving sections.
 *
 * The driving pages got their own helper first (src/lib/driving/structured-data.ts)
 * because their markup is question-shaped. Everything else - the typology
 * quizzes, the trivia ladders, the two hub pages, the social pages - was
 * emitting its own hand-rolled object, which is exactly how two sections end
 * up with two different breadcrumb shapes and one of them silently wrong.
 * One builder per shape, used everywhere.
 *
 * HONESTY RULE, load-bearing: nothing here emits aggregateRating, review,
 * ratingValue, or interaction/vote counts. The site collects no ratings, so
 * any such markup would be fabricated - and fabricated review markup is a
 * manual action from Google, not a clever growth hack. If you are tempted to
 * add a star rating because a competitor's snippet has one, go and collect
 * real ratings first.
 */

import { SITE } from "@/lib/site";

const base = SITE.url.replace(/\/$/, "");

/** The Organization and WebSite nodes live in the root layout; refer, do not repeat. */
export const ORGANIZATION_REF = { "@id": `${base}/#organization` } as const;
export const WEBSITE_REF = { "@id": `${base}/#website` } as const;

/** One step in a breadcrumb trail. `path` is site-relative and keeps its trailing slash. */
export interface Crumb {
  name: string;
  path: string;
}

/** Wrap nodes in a single @graph document. Nullish entries are dropped. */
export function jsonLdGraph(nodes: readonly (object | null | undefined)[]): object {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter((n): n is object => Boolean(n)),
  };
}

/**
 * BreadcrumbList. Always start the trail at Home so the SERP entry shows a
 * path rather than a bare URL, and so an assistant can see where a page sits.
 */
export function breadcrumbList(crumbs: readonly Crumb[]): object {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${base}${c.path}`,
    })),
  };
}

export interface QuizNodeInput {
  /** Page path, site-relative, with trailing slash. */
  path: string;
  name: string;
  description: string;
  /** Items in a standard run. Omit when the count genuinely varies. */
  numberOfQuestions?: number;
  /** Rough completion time in minutes, if the page states one. */
  timeRequiredMinutes?: number;
  /** schema.org educationalUse, free text ("practice", "self-reflection"). */
  educationalUse?: string;
  /** Subject for educationalAlignment. Only set it where a real subject exists. */
  educationalSubject?: string;
  /** Who the page is written for. Only set it where the page really targets them. */
  audienceType?: string;
  /** Plain-language topic of the quiz. */
  about?: string;
  /** Short caveat (our disclaimer), so a summarizer carries the limit with the claim. */
  note?: string;
}

/**
 * A Quiz node. Deliberately carries no question text and no answer key: the
 * markup exists to describe the page, not to hand a snippet the answers.
 */
export function quizNode(input: QuizNodeInput): object {
  const url = `${base}${input.path}`;
  const node: Record<string, unknown> = {
    "@type": "Quiz",
    "@id": `${url}#quiz`,
    name: input.name,
    description: input.description,
    url,
    isAccessibleForFree: true,
    inLanguage: "en",
    provider: ORGANIZATION_REF,
    isPartOf: WEBSITE_REF,
  };
  if (input.numberOfQuestions !== undefined) node.numberOfQuestions = input.numberOfQuestions;
  if (input.timeRequiredMinutes !== undefined) {
    node.timeRequired = `PT${input.timeRequiredMinutes}M`;
  }
  if (input.educationalUse) node.educationalUse = input.educationalUse;
  if (input.educationalSubject) {
    node.educationalAlignment = {
      "@type": "AlignmentObject",
      alignmentType: "educationalSubject",
      targetName: input.educationalSubject,
    };
  }
  if (input.audienceType) {
    node.audience = { "@type": "Audience", audienceType: input.audienceType };
  }
  if (input.about) node.about = { "@type": "Thing", name: input.about };
  if (input.note) node.disambiguatingDescription = input.note;
  return node;
}

export interface CollectionItem {
  name: string;
  path: string;
}

export interface CollectionPageInput {
  path: string;
  name: string;
  description: string;
  items: readonly CollectionItem[];
  /** Name of the ItemList, if it should differ from the page name. */
  listName?: string;
}

/** CollectionPage + ItemList for a hub page. Returned as nodes for a @graph. */
export function collectionPageNodes(input: CollectionPageInput): object[] {
  const url = `${base}${input.path}`;
  return [
    {
      "@type": "CollectionPage",
      "@id": `${url}#collection`,
      name: input.name,
      description: input.description,
      url,
      isPartOf: WEBSITE_REF,
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${url}#list`,
      name: input.listName ?? input.name,
      numberOfItems: input.items.length,
      itemListElement: input.items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: `${base}${it.path}`,
      })),
    },
  ];
}

/** Serialize for a <script type="application/ld+json"> tag. */
export function jsonLdString(doc: object): string {
  return JSON.stringify(doc);
}
