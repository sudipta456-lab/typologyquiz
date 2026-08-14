"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type CSSProperties } from "react";
import { getJurisdiction } from "@/lib/driving/jurisdictions";
import { DIFFICULTY_META } from "@/lib/driving/types";
import type { SetAttempt } from "@/lib/driving/progress";
import { loadProgress, summarize } from "@/lib/driving/progress";
import {
  buildWeakSpotSet,
  estimateReadiness,
  missCount,
  type Readiness,
} from "@/lib/driving/adaptive";
import { newShuffleSeed, seedToParam } from "@/lib/driving/shuffle";
import { DrivingDisclaimer } from "@/components/DrivingDisclaimer";
import { DrivingReminderCard } from "@/components/DrivingReminderCard";
import { InstallHint } from "@/components/InstallHint";

const panelStyle: CSSProperties = {
  padding: "1.1rem 1.15rem",
  marginBottom: 20,
};

const panelTitleStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.05rem",
  fontWeight: 600,
  margin: "0 0 0.6rem",
  color: "var(--ink)",
};

const listStyle: CSSProperties = {
  margin: 0,
  paddingLeft: "1.1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.45rem",
  fontSize: "0.9rem",
  lineHeight: 1.55,
  color: "var(--ink-soft)",
};

export function JurisdictionClient() {
  const params = useParams();
  const router = useRouter();
  const slug = typeof params.jurisdiction === "string" ? params.jurisdiction : "";
  const jurisdiction = getJurisdiction(slug);

  // localStorage is read only after mount. Static export prerenders this page
  // with no progress at all, so touching storage during render would guarantee
  // a hydration mismatch on every returning visitor.
  const [attempts, setAttempts] = useState<Record<string, SetAttempt> | null>(null);
  const [summary, setSummary] = useState<{ setsPassed: number; averageBest: number } | null>(
    null
  );
  const [weak, setWeak] = useState<{ count: number; ready: boolean } | null>(null);
  const [readiness, setReadiness] = useState<{ r: Readiness; basedOn: number } | null>(null);

  useEffect(() => {
    if (!jurisdiction) return;
    const stored = loadProgress(jurisdiction.slug);
    setAttempts(stored);

    const s = summarize(jurisdiction.slug, jurisdiction.sets.length);
    setSummary({ setsPassed: s.setsPassed, averageBest: s.averageBest });

    // Oldest attempt first, so estimateReadiness's "recent" window is the tail.
    const recentPercents = Object.values(stored)
      .sort((a, b) => a.lastAt - b.lastAt)
      .map((a) => a.bestPercent);
    setReadiness({
      r: estimateReadiness(jurisdiction, recentPercents),
      basedOn: Math.min(recentPercents.length, 5),
    });

    setWeak({
      count: missCount(jurisdiction.slug),
      ready: buildWeakSpotSet(jurisdiction) !== null,
    });
  }, [jurisdiction]);

  if (!jurisdiction) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Jurisdiction not found
        </h1>
        <Link href="/driving/" className="text-link">
          Browse all practice tests
        </Link>
      </div>
    );
  }

  const { officialTest: fmt } = jurisdiction;
  const sets = [...jurisdiction.sets].sort((a, b) => a.setNumber - b.setNumber);
  const totalQuestions = sets.reduce((s, set) => s + set.questions.length, 0);

  return (
    <div className="test-shell">
      <Link href="/driving/" className="test-back">
        All practice tests
      </Link>

      <header className="test-intro-header">
        <div className="test-chip">
          <span className="test-chip-code">{jurisdiction.code}</span>
          <span>{jurisdiction.countryLabel}</span>
        </div>
        <h1 className="test-intro-title font-display">
          {jurisdiction.name} driving practice tests
        </h1>
        <p
          style={{
            margin: "0.35rem 0 0.7rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            color: "var(--ink-mute)",
          }}
        >
          {jurisdiction.licenceName}
        </p>
        <p className="test-intro-desc">{jurisdiction.intro}</p>
      </header>

      <InstallHint />

      {/* ---------- Weak spots: the adaptive drill ---------- */}
      <div
        className="report-panel"
        style={{
          ...panelStyle,
          padding: 0,
          border: `2px solid ${weak?.ready ? "var(--ink)" : "var(--line)"}`,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            padding: "0.5rem 1.15rem",
            background: weak?.ready ? "var(--ink)" : "var(--paper)",
            color: weak?.ready ? "#fff" : "var(--ink-mute)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.66rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Adaptive · rebuilt every time
        </div>
        <div style={{ padding: "1.1rem 1.15rem" }}>
          <h2 style={{ ...panelTitleStyle, marginBottom: "0.4rem" }}>Your weak spots</h2>
          {weak?.ready ? (
            <>
              <p
                style={{
                  margin: "0 0 0.9rem",
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: "var(--ink-soft)",
                }}
              >
                <strong style={{ color: "var(--ink)" }}>
                  {`${weak.count} question${weak.count === 1 ? "" : "s"} you've missed`}
                </strong>
                , plus the topics they came from. This set is rebuilt from your own history
                every single time you open it - get one right twice and it drops out.
              </p>
              <Link
                href={`/driving/${jurisdiction.slug}/weak-spots/take/`}
                className="btn-primary"
                style={{ width: "100%" }}
              >
                Drill my weak spots →
              </Link>
            </>
          ) : (
            <p
              style={{
                margin: 0,
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "var(--ink-mute)",
              }}
            >
              Finish a set and we&apos;ll build this from what you actually missed - the
              questions you got wrong, weighted, plus more from the topics that tripped you
              up. Nothing to drill yet.
            </p>
          )}
        </div>
      </div>

      {/* ---------- The real test ---------- */}
      <div className="report-panel" style={panelStyle}>
        <h2 style={panelTitleStyle}>The real test</h2>
        <div
          className="test-meta-grid"
          style={{
            gridTemplateColumns: fmt.timeLimitMinutes ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
            marginBottom: fmt.notes?.length ? 14 : 0,
          }}
        >
          <div className="test-meta-cell">
            <div className="test-meta-value">{fmt.questionCount}</div>
            <div className="test-meta-label">Questions</div>
          </div>
          <div className="test-meta-cell">
            <div className="test-meta-value" style={{ fontSize: "1rem", lineHeight: 1.3 }}>
              {fmt.passLabel}
            </div>
            <div className="test-meta-label">To pass</div>
          </div>
          {fmt.timeLimitMinutes ? (
            <div className="test-meta-cell">
              <div className="test-meta-value">{fmt.timeLimitMinutes} min</div>
              <div className="test-meta-label">Time limit</div>
            </div>
          ) : null}
        </div>
        {fmt.notes?.length ? (
          <ul style={listStyle}>
            {fmt.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        ) : null}
      </div>

      {/* ---------- Official study material ---------- */}
      <div
        className="report-panel"
        style={{ ...panelStyle, borderColor: "var(--ink)", borderWidth: 1 }}
      >
        <h2 style={panelTitleStyle}>Read the official handbook</h2>
        <p
          style={{
            margin: "0 0 0.85rem",
            fontSize: "0.9rem",
            lineHeight: 1.6,
            color: "var(--ink-soft)",
          }}
        >
          This is the source everything on the real test comes from, and it is free.
          Practice questions find your gaps; the handbook fills them. Read it on the
          government&apos;s own site so you get the current version.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <a
            href={jurisdiction.handbookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ width: "100%" }}
          >
            {jurisdiction.handbookName} →
          </a>
          {jurisdiction.officialInfoUrl && (
            <a
              href={jurisdiction.officialInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "100%" }}
            >
              Official licensing info →
            </a>
          )}
        </div>
      </div>

      {/* ---------- Local gotchas ---------- */}
      {jurisdiction.localGotchas?.length ? (
        <div className="report-panel" style={{ ...panelStyle, background: "var(--paper)" }}>
          <h2 style={panelTitleStyle}>Watch out for</h2>
          <p
            style={{
              margin: "0 0 0.7rem",
              fontSize: "0.82rem",
              color: "var(--ink-mute)",
              fontFamily: "var(--font-mono)",
            }}
          >
            Rules that catch people out in {jurisdiction.name} specifically.
          </p>
          <ul style={listStyle}>
            {jurisdiction.localGotchas.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* ---------- Readiness ---------- */}
      <div className="report-panel" style={{ ...panelStyle, padding: "1.1rem 1.15rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "0.6rem",
          }}
        >
          <h2 style={{ ...panelTitleStyle, margin: 0 }}>Are you ready?</h2>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--ink-mute)",
            }}
          >
            {readiness && readiness.basedOn > 0
              ? `Based on ${readiness.basedOn} set${readiness.basedOn === 1 ? "" : "s"} · ${readiness.r.confidence} confidence`
              : "No attempts on this device yet"}
          </span>
        </div>

        {readiness && readiness.basedOn > 0 ? (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "1.25rem",
                marginBottom: "0.6rem",
              }}
            >
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    lineHeight: 1,
                    color: "var(--ink)",
                  }}
                >
                  {readiness.r.estimate}%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--ink-mute)",
                    marginTop: 2,
                  }}
                >
                  Estimate
                </div>
              </div>
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 600,
                    lineHeight: 1,
                    color: "var(--ink-mute)",
                  }}
                >
                  {readiness.r.required}%
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    color: "var(--ink-mute)",
                    marginTop: 2,
                  }}
                >
                  Needed
                </div>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                height: 6,
                background: "var(--line)",
                overflow: "hidden",
                marginBottom: "0.65rem",
              }}
              aria-hidden="true"
            >
              <div
                style={{
                  height: "100%",
                  width: `${Math.min(100, readiness.r.estimate)}%`,
                  background: readiness.r.ready ? "#07ad9c" : "#f4b400",
                }}
              />
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                lineHeight: 1.6,
                color: "var(--ink-soft)",
              }}
            >
              {readiness.r.message}
            </p>
            <p
              style={{
                margin: "0.55rem 0 0",
                fontSize: "0.78rem",
                lineHeight: 1.55,
                color: "var(--ink-mute)",
              }}
            >
              This is an estimate from your practice on this device, weighted toward your
              worst recent run. It is not a prediction, and it cannot promise a pass - only
              the real test does that.
            </p>
          </>
        ) : (
          <p
            style={{
              margin: 0,
              fontSize: "0.9rem",
              lineHeight: 1.6,
              color: "var(--ink-mute)",
            }}
          >
            {readiness?.r.message ??
              "Finish a set and we'll start tracking how ready you are."}
          </p>
        )}

        <div
          style={{
            marginTop: "0.85rem",
            paddingTop: "0.7rem",
            borderTop: "1px solid var(--line)",
            display: "flex",
            justifyContent: "space-between",
            gap: "0.75rem",
            flexWrap: "wrap",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--ink-mute)",
          }}
        >
          <span>
            {summary ? `${summary.setsPassed} of ${sets.length} sets passed` : "—"}
          </span>
          <span>
            {summary && summary.averageBest > 0
              ? `Average best ${summary.averageBest}%`
              : "Saved on this device only"}
          </span>
        </div>
      </div>

      {/* ---------- Study reminders (no signup, no email) ---------- */}
      <DrivingReminderCard jurisdiction={jurisdiction} />

      {/* ---------- Sets ---------- */}
      <h2
        className="font-display"
        style={{
          fontSize: "1.15rem",
          fontWeight: 600,
          color: "var(--ink)",
          margin: "28px 0 4px",
        }}
      >
        Practice sets
      </h2>
      <p
        style={{
          margin: "0 0 14px",
          fontSize: "0.85rem",
          color: "var(--ink-mute)",
          fontFamily: "var(--font-mono)",
        }}
      >
        {sets.length} sets · {totalQuestions} questions · feedback after every answer
      </p>

      <div className="card-grid" style={{ gridTemplateColumns: "1fr" }}>
        {sets.map((set, i) => {
          const diff = DIFFICULTY_META[set.difficulty];
          const attempt = attempts?.[set.id];
          return (
            <div
              key={set.id}
              style={{
                borderBottom:
                  i === sets.length - 1 ? "none" : "1px solid var(--line)",
                background: "var(--white)",
              }}
            >
            <Link
              href={`/driving/${jurisdiction.slug}/${set.id}/take/`}
              className="quiz-card"
              style={{ borderRight: "none" }}
            >
              <div className="quiz-card-top">
                <div className="quiz-emoji" aria-hidden="true">
                  {set.setNumber}
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <h3 className="quiz-card-title">{set.title}</h3>
                  <span className="quiz-meta">
                    {diff.label} · {set.questions.length} questions
                  </span>
                </div>
                {attempt ? (
                  <span
                    style={{
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 4,
                      padding: "0.25rem 0.55rem",
                      borderRadius: 999,
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      border: `1px solid ${attempt.passed ? "#07ad9c" : "var(--line)"}`,
                      color: attempt.passed ? "#07ad9c" : "var(--ink-mute)",
                      background: attempt.passed ? "rgba(7,173,156,0.08)" : "transparent",
                    }}
                  >
                    {attempt.passed ? "✓ " : ""}
                    {attempt.bestPercent}%
                  </span>
                ) : null}
              </div>
              <p className="quiz-card-desc">{set.description}</p>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.78rem",
                  color: "var(--ink-mute)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                {diff.blurb}
                {attempt ? ` · best ${attempt.bestCorrect}/${attempt.total}` : ""}
              </p>
            </Link>

            {/* Sits outside the card link on purpose - a button nested inside an
                anchor is invalid, and this is a second destination, not a second
                way to open the same one. The seed is minted in the click so the
                prerendered HTML has no clock-dependent href in it. */}
            <div
              style={{
                padding: "0 1.25rem 1rem",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
                onClick={() => {
                  const fresh = seedToParam(newShuffleSeed());
                  router.push(
                    `/driving/${jurisdiction.slug}/${set.id}/take/?shuffle=${fresh}`
                  );
                }}
                style={{
                  minHeight: 40,
                  padding: "0.4rem 0.75rem",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  background: "transparent",
                  color: "var(--ink-mute)",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Randomise &amp; retake →
              </button>
            </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: 28 }}>
        <DrivingDisclaimer
          handbookName={jurisdiction.handbookName}
          handbookUrl={jurisdiction.handbookUrl}
        />
      </div>
    </div>
  );
}
