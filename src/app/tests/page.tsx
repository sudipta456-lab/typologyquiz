"use client";

import { useState } from "react";
import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { CATEGORY_META, TestCategory } from "@/lib/types";
import { breadcrumbList, collectionPageNodes, jsonLdGraph } from "@/lib/structured-data";

// CollectionPage + ItemList + BreadcrumbList for the quiz hub. Built outside
// the component because it depends on nothing but the registry, and it is the
// same on every render. No ratings or vote counts: none exist to report.
const HUB_JSON_LD = jsonLdGraph([
  ...collectionPageNodes({
    path: "/tests/",
    name: "All personality quizzes",
    description:
      "Every personality and typology quiz on the site. Free, no signup, scored in your browser, and written as self-reflection rather than diagnosis.",
    listName: "Personality and typology quizzes",
    items: TESTS.map((t) => ({ name: t.title, path: `/test/${t.slug}/` })),
  }),
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Quizzes", path: "/tests/" },
  ]),
]);

export default function TestsPage() {
  const [filter, setFilter] = useState<TestCategory | "all">("all");
  const [query, setQuery] = useState("");
  const filtered = TESTS.filter(test => (filter === "all" || test.category === filter) && `${test.title} ${test.description}`.toLowerCase().includes(query.trim().toLowerCase()));
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HUB_JSON_LD) }} />
    <div className="section directory-page">
      <p className="eyebrow">Explore yourself</p><h1 className="section-title">Personality quizzes</h1>
      <p className="section-lead">Find a quiz about your habits, relationships, values, or the way you think. For curiosity and self-reflection.</p>
      <div className="directory-tools"><label className="search-field" htmlFor="quiz-search"><span>Find a quiz</span><input id="quiz-search" type="search" placeholder="Try friendship, thinking, or values" value={query} onChange={event => setQuery(event.target.value)} /></label>
        <div className="filter-chips" role="group" aria-label="Filter by topic"><button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All topics</button>{(Object.keys(CATEGORY_META) as TestCategory[]).filter(category => TESTS.some(t => t.category === category)).map(category => <button type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{CATEGORY_META[category].label}</button>)}</div>
      </div>
      <p className="directory-count" role="status">{filtered.length} {filtered.length === 1 ? "quiz" : "quizzes"}{query.trim() ? ` matching “${query.trim()}”` : " to explore"}</p>
      <div className="personality-directory">{filtered.map(test => <Link key={test.slug} href={`/test/${test.slug}/`} className="directory-quiz">
        <div className="directory-quiz-meta"><span>{CATEGORY_META[test.category].label}</span><span>{test.timeMinutes} min</span></div>
        <h2>{test.title}</h2><p>{test.description}</p><span className="directory-quiz-action">{test.itemCount}{test.hasBranching ? "+" : ""} questions <span aria-hidden="true">↗</span></span>
      </Link>)}</div>
      {filtered.length === 0 && <div className="directory-empty"><h2>No quizzes found</h2><p>Try a shorter search or choose another topic.</p><button type="button" className="btn-outline" onClick={() => { setQuery(""); setFilter("all"); }}>Show all quizzes</button></div>}
    </div>
  </>;
}
