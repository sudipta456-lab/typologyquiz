"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import type { Category, QuizKind, QuizSummary } from "@/lib/interactive/types";
import styles from "./InteractiveQuiz.module.css";

interface Props {
  quizzes: QuizSummary[];
  categories: Category[];
  initialCategory?: string;
}

const PAGE_SIZE = 36;
const BRAND_VARS = ["var(--mark-blue)", "var(--mark-coral)", "var(--mark-teal)", "var(--mark-pink)"];
const HEX_COLOR = /^#[0-9a-f]{3,8}$/i;

const KIND_LABELS: Record<QuizKind, string> = {
  knowledge: "Knowledge",
  preference: "Preference",
  hybrid: "Knowledge + preference",
  cooperative: "Cooperative",
  logic: "Logic",
};

const FORMAT_LABELS: Record<string, string> = {
  choice: "Multiple choice",
  rank: "Ranking",
  order: "Ordering",
  match: "Matching",
  graph: "Link map",
  grid: "Grid",
  slider: "Slider",
  reflection: "Reflection",
  audio: "Listening",
  hotspot: "Diagram",
};

const formatLabel = (format: string) => FORMAT_LABELS[format] ?? format;

function accentFor(category: Category | undefined, index: number): string {
  if (category && HEX_COLOR.test(category.accent)) return category.accent;
  return BRAND_VARS[Math.max(0, index) % BRAND_VARS.length];
}

export function QuizDirectory({ quizzes, categories, initialCategory }: Props) {
  const uid = useId();
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState(
    initialCategory && categories.some((c) => c.id === initialCategory) ? initialCategory : "all"
  );
  const [kind, setKind] = useState<QuizKind | "all">("all");
  const [limit, setLimit] = useState(PAGE_SIZE);

  const categoryIndex = useMemo(() => new Map(categories.map((c, i) => [c.id, i])), [categories]);
  const counts = useMemo(() => {
    const map = new Map<string, number>();
    for (const quiz of quizzes) map.set(quiz.categoryId, (map.get(quiz.categoryId) ?? 0) + 1);
    return map;
  }, [quizzes]);
  const kinds = useMemo(() => Array.from(new Set(quizzes.map((q) => q.kind))), [quizzes]);

  const filtered = useMemo(() => {
    const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
    return quizzes
      .filter((quiz) => {
        if (categoryId !== "all" && quiz.categoryId !== categoryId) return false;
        if (kind !== "all" && quiz.kind !== kind) return false;
        if (!terms.length) return true;
        const haystack = `${quiz.title} ${quiz.description} ${quiz.formats.map(formatLabel).join(" ")}`.toLowerCase();
        return terms.every((term) => haystack.includes(term));
      })
      .sort(
        (a, b) =>
          (categoryIndex.get(a.categoryId) ?? 0) - (categoryIndex.get(b.categoryId) ?? 0) ||
          a.title.localeCompare(b.title)
      );
  }, [quizzes, query, categoryId, kind, categoryIndex]);

  const shown = filtered.slice(0, limit);
  const activeCategory = categories.find((c) => c.id === categoryId);
  const filtersActive = query !== "" || categoryId !== "all" || kind !== "all";
  const resetPaging = () => setLimit(PAGE_SIZE);

  return (
    <section className={styles.directory} aria-label="Quiz directory">
      <div className={styles.filters}>
        <div className={styles.field}>
          <label htmlFor={`${uid}-search`}>Search quizzes</label>
          <input
            id={`${uid}-search`}
            type="search"
            value={query}
            placeholder="Title, topic or format"
            autoComplete="off"
            onChange={(e) => {
              setQuery(e.target.value);
              resetPaging();
            }}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor={`${uid}-kind`}>Type</label>
          <select
            id={`${uid}-kind`}
            value={kind}
            onChange={(e) => {
              setKind(e.target.value as QuizKind | "all");
              resetPaging();
            }}
          >
            <option value="all">All types</option>
            {kinds.map((k) => (
              <option key={k} value={k}>
                {KIND_LABELS[k]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.chips} role="group" aria-label="Category">
        <button
          type="button"
          className={styles.chip}
          aria-pressed={categoryId === "all"}
          onClick={() => {
            setCategoryId("all");
            resetPaging();
          }}
        >
          All <span className={styles.chipCount}>{quizzes.length}</span>
        </button>
        {categories.map((category, i) => (
          <button
            key={category.id}
            type="button"
            className={styles.chip}
            style={{ "--accent-mark": accentFor(category, i) } as React.CSSProperties}
            aria-pressed={categoryId === category.id}
            onClick={() => {
              setCategoryId(category.id);
              resetPaging();
            }}
          >
            {category.name} <span className={styles.chipCount}>{counts.get(category.id) ?? 0}</span>
          </button>
        ))}
      </div>

      {activeCategory && <p className={styles.categoryNote}>{activeCategory.description}</p>}

      <div className={styles.resultsBar}>
        <p role="status" aria-live="polite">
          {filtered.length === quizzes.length
            ? `${filtered.length} quizzes`
            : `${filtered.length} of ${quizzes.length} quizzes`}
        </p>
        {filtersActive && (
          <button
            type="button"
            className={styles.linkBtn}
            onClick={() => {
              setQuery("");
              setCategoryId("all");
              setKind("all");
              resetPaging();
            }}
          >
            Clear filters
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No quizzes match. Try fewer words or clear the filters.</p>
      ) : (
        <ul className={styles.list}>
          {shown.map((quiz) => {
            const index = categoryIndex.get(quiz.categoryId) ?? 0;
            const category = categories[index];
            return (
              <li
                key={quiz.id}
                className={styles.card}
                style={{ "--accent-mark": accentFor(category, index) } as React.CSSProperties}
              >
                <p className={styles.cardCategory}>{category?.name ?? "Quiz"}</p>
                <h3 className={styles.cardTitle}>
                  <Link href={`/quizzes/${quiz.slug}/`}>{quiz.title}</Link>
                </h3>
                <p className={styles.cardText}>{quiz.description}</p>
                <p className={styles.meta}>
                  <span>{KIND_LABELS[quiz.kind]}</span>
                  <span>{quiz.questionCount} tasks</span>
                  <span>{quiz.minutes} min</span>
                </p>
                {quiz.formats.length > 0 && (
                  <ul className={styles.tags} aria-label="Formats">
                    {quiz.formats.map((format) => (
                      <li key={format}>{formatLabel(format)}</li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}

      {filtered.length > shown.length && (
        <button type="button" className={styles.secondaryBtn} onClick={() => setLimit((n) => n + PAGE_SIZE)}>
          Show more ({filtered.length - shown.length} left)
        </button>
      )}
    </section>
  );
}
