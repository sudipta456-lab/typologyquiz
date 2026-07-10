"use client";

import { useState } from "react";
import Link from "next/link";
import { TESTS } from "@/lib/tests/registry";
import { CATEGORY_META, TestCategory } from "@/lib/types";

export default function TestsPage() {
  const [filter, setFilter] = useState<TestCategory | "all">("all");
  const filtered = filter === "all" ? TESTS : TESTS.filter((t) => t.category === filter);

  return (
    <div className="section">
      <h1 className="section-title" style={{ marginBottom: 12 }}>
        All Tests
      </h1>
      <p className="section-lead" style={{ marginBottom: 32 }}>
        Browse all {TESTS.length} tests. Built for figuring yourself out, not for a boss or a brand.
      </p>
      <div style={{ display: "flex", gap: 8, marginBottom: 28, flexWrap: "wrap" }}>
        <button
          type="button"
          onClick={() => setFilter("all")}
          style={{
            padding: "8px 14px",
            borderRadius: 8,
            border: "1px solid #e2e0db",
            background: filter === "all" ? "#14141f" : "#fff",
            color: filter === "all" ? "#fff" : "#14141f",
            fontWeight: 600,
            fontSize: "0.85rem",
            cursor: "pointer",
            fontFamily: "inherit",
          }}
        >
          All
        </button>
        {(Object.keys(CATEGORY_META) as TestCategory[]).map((cat) => {
          const m = CATEGORY_META[cat];
          const active = filter === cat;
          const count = TESTS.filter((t) => t.category === cat).length;
          if (count === 0) return null;
          return (
            <button
              type="button"
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "8px 14px",
                borderRadius: 8,
                border: "1px solid #e2e0db",
                background: active ? "#14141f" : "#fff",
                color: active ? "#fff" : "#14141f",
                fontWeight: 600,
                fontSize: "0.85rem",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>
      <div className="card-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))" }}>
        {filtered.map((test) => {
          const meta = CATEGORY_META[test.category as keyof typeof CATEGORY_META];
          return (
            <Link key={test.slug} href={`/test/${test.slug}`} className="quiz-card">
              <div className="quiz-card-top">
                <div className="quiz-emoji" aria-hidden="true">
                  {meta.emoji}
                </div>
                <div>
                  <h3 className="quiz-card-title">{test.title}</h3>
                  <span className="quiz-meta">
                    {test.itemCount} items · ~{test.timeMinutes} min
                  </span>
                </div>
              </div>
              <p className="quiz-card-desc">{test.description}</p>
            </Link>
          );
        })}
      </div>

      <div style={{ marginTop: 48 }}>
        <h2 className="section-title" style={{ marginBottom: 8 }}>
          Still cooking
        </h2>
        <p className="section-lead" style={{ marginBottom: 0 }}>
          High interest, careful build. Not ready yet.
        </p>
        <div className="pipeline-grid">
          <div className="pipeline-card">
            <span className="pipeline-tag">Mind</span>
            <h3 className="pipeline-title">Focus profile (not a diagnosis)</h3>
            <p className="pipeline-desc">
              Attention patterns and strategies, framed as habits, not labels.
            </p>
            <p className="pipeline-why">Needs extra careful framing for under-18.</p>
          </div>
          <div className="pipeline-card">
            <span className="pipeline-tag">Live</span>
            <h3 className="pipeline-title">Synced multiplayer rooms</h3>
            <p className="pipeline-desc">
              Real-time rooms across phones without re-copying the link each time.
            </p>
            <p className="pipeline-why">Needs a backend. Current rooms work via shareable snapshots.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
