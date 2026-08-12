"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { Suspense, useMemo, type CSSProperties } from "react";
import { getJurisdiction } from "@/lib/driving/jurisdictions";
import { TOPIC_META, type DrivingQuestion, type DrivingTopic } from "@/lib/driving/types";
import { neededToPass, weakestTopics } from "@/lib/driving/score";
import { decodeDrivingResult } from "@/lib/driving/encode";
import { DrivingDisclaimer } from "@/components/DrivingDisclaimer";
import { DrivingShareBlock } from "@/components/DrivingShareBlock";

const PASS = "#07ad9c";
const FAIL = "#f9684d";
const LETTERS = ["A", "B", "C", "D", "E", "F"];
const WEAK_SPOTS_ID = "weak-spots";

const sectionHeading: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "1.15rem",
  fontWeight: 600,
  color: "var(--ink)",
  marginBottom: 12,
  paddingBottom: 8,
  borderBottom: "1px solid var(--line)",
};

function topicLabel(topic: string): string {
  const meta = TOPIC_META[topic as DrivingTopic];
  return meta ? meta.label : topic;
}

function ResultsContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const jurisdictionSlug = typeof params.jurisdiction === "string" ? params.jurisdiction : "";
  const setId = typeof params.setId === "string" ? params.setId : "";
  const encoded = searchParams.get("r");

  const jurisdiction = getJurisdiction(jurisdictionSlug);
  const isWeakSpots = setId === WEAK_SPOTS_ID;
  const set = jurisdiction?.sets.find((s) => s.id === setId);
  const result = useMemo(() => (encoded ? decodeDrivingResult(encoded) : null), [encoded]);

  if (!jurisdiction || (!set && !isWeakSpots)) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Practice set not found
        </h1>
        <Link href="/driving/" className="text-link">
          Browse driving practice tests
        </Link>
      </div>
    );
  }

  const setTitle = set ? set.title : "Your weak spots";

  if (!encoded || !result) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Results not found
        </h1>
        <p className="section-lead">Take the set first and your score will appear here.</p>
        <Link href={`/driving/${jurisdiction.slug}/${setId}/take/`} className="btn-primary">
          Start {setTitle}
        </Link>
      </div>
    );
  }

  const needed = neededToPass(jurisdiction, result.total);
  const weakest = weakestTopics(result, 3);
  const verdictColor = result.passed ? PASS : FAIL;

  // Look questions up across the whole jurisdiction, not just this set: the
  // weak-spot drill pulls from every set, and it is rebuilt after each attempt.
  const byId = new Map<string, DrivingQuestion>(
    jurisdiction.sets.flatMap((s) => s.questions.map((q): [string, DrivingQuestion] => [q.id, q]))
  );
  const missed = result.wrongIds
    .map((id) => byId.get(id))
    .filter((q): q is DrivingQuestion => q !== undefined);

  const ordered = [...jurisdiction.sets].sort((a, b) => a.setNumber - b.setNumber);
  const currentPos = set ? ordered.findIndex((s) => s.id === set.id) : -1;
  const nextSet = currentPos >= 0 ? ordered[currentPos + 1] : undefined;

  const topicRows = Object.entries(result.byTopic).sort(
    (a, b) => b[1].total - a[1].total || a[0].localeCompare(b[0])
  );

  // The thing people actually forward is a hard question, not a score. Prefer
  // one they got wrong AND that trips most people up; fall back to any miss,
  // then to a starred question from this set.
  const hardestQuestion =
    missed.find((q) => q.commonlyMissed) ??
    missed[0] ??
    (set ? set.questions.find((q) => q.commonlyMissed) : undefined);

  return (
    <div className="test-shell">
      <Link href={`/driving/${jurisdiction.slug}/`} className="test-back">
        {jurisdiction.name} practice tests
      </Link>

      {/* ---------- Verdict ---------- */}
      <div
        className="report-panel"
        style={{
          marginBottom: 24,
          padding: "1.5rem 1.25rem",
          textAlign: "center",
          borderTop: `4px solid ${verdictColor}`,
        }}
      >
        <p
          style={{
            margin: "0 0 0.35rem",
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink-mute)",
          }}
        >
          {jurisdiction.name} · {setTitle}
        </p>
        <div
          className="font-display"
          style={{
            fontSize: "2.6rem",
            fontWeight: 700,
            lineHeight: 1.1,
            color: verdictColor,
            margin: "0 0 0.35rem",
          }}
        >
          {result.passed ? "PASS" : "NOT YET"}
        </div>
        <p
          style={{
            margin: "0 0 0.6rem",
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "var(--ink)",
          }}
        >
          {result.correct} of {result.total} ({result.percent}%)
        </p>
        <div
          style={{
            height: 6,
            background: "var(--line)",
            overflow: "hidden",
            margin: "0 0 0.7rem",
          }}
          aria-hidden="true"
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, result.percent)}%`,
              background: verdictColor,
            }}
          />
        </div>
        <p
          style={{
            margin: 0,
            fontSize: "0.88rem",
            lineHeight: 1.6,
            color: "var(--ink-soft)",
          }}
        >
          Scored against the real {jurisdiction.name} standard:{" "}
          <strong>{jurisdiction.officialTest.passLabel}</strong>. On a set this length that
          works out to <strong>{needed} of {result.total}</strong>.
          {!result.passed && result.correct < needed
            ? ` You were ${needed - result.correct} short.`
            : ""}
        </p>
        {isWeakSpots && (
          <p
            style={{
              margin: "0.55rem 0 0",
              fontSize: "0.8rem",
              lineHeight: 1.55,
              color: "var(--ink-mute)",
            }}
          >
            This drill is built from your hardest questions on purpose, so scoring lower
            here than on a numbered set is normal - and it is the score worth moving.
          </p>
        )}
      </div>

      {/* ---------- Sections (Ontario-style) ---------- */}
      {result.sections?.length ? (
        <div style={{ marginBottom: 28 }}>
          <h2 className="font-display" style={sectionHeading}>
            Section by section
          </h2>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.88rem",
              lineHeight: 1.6,
              color: "var(--ink-soft)",
            }}
          >
            {jurisdiction.name} scores these halves independently, and you have to clear
            each one on its own. A strong section cannot carry a weak one - miss the mark
            on either and the whole test is a fail.
          </p>
          <div style={{ border: "1px solid var(--line)" }}>
            {result.sections.map((sec) => (
              <div
                key={sec.label}
                style={{
                  padding: "0.95rem 1.1rem",
                  borderBottom: "1px solid var(--line)",
                  background: "var(--white)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontWeight: 600, color: "var(--ink)" }}>{sec.label}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      color: "var(--ink-mute)",
                    }}
                  >
                    {sec.correct} of {sec.total}
                  </div>
                </div>
                <span
                  style={{
                    padding: "0.25rem 0.6rem",
                    borderRadius: 999,
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: sec.passed ? PASS : FAIL,
                    border: `1px solid ${sec.passed ? PASS : FAIL}`,
                  }}
                >
                  {sec.passed ? "✓ Cleared" : "✕ Short"}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {/* ---------- Topic breakdown ---------- */}
      {topicRows.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <h2 className="font-display" style={sectionHeading}>
            By topic
          </h2>
          <div style={{ border: "1px solid var(--line)" }}>
            {topicRows.map(([topic, v]) => {
              const pct = v.total ? Math.round((v.correct / v.total) * 100) : 0;
              return (
                <div
                  key={topic}
                  style={{
                    padding: "0.9rem 1.1rem",
                    borderBottom: "1px solid var(--line)",
                    background: "var(--white)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      marginBottom: 8,
                    }}
                  >
                    <span style={{ fontWeight: 600, color: "var(--ink)", fontSize: "0.95rem" }}>
                      {topicLabel(topic)}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--ink)",
                        flexShrink: 0,
                      }}
                    >
                      {v.correct}/{v.total}
                    </span>
                  </div>
                  <div style={{ height: 4, background: "var(--line)", overflow: "hidden" }}>
                    <div
                      style={{
                        height: "100%",
                        width: `${pct}%`,
                        background: pct >= 80 ? PASS : pct >= 50 ? "#f4b400" : FAIL,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ---------- What to restudy ---------- */}
      <div className="report-panel" style={{ marginBottom: 28, padding: "1.1rem 1.15rem" }}>
        <h2
          className="font-display"
          style={{ fontSize: "1.05rem", fontWeight: 600, margin: "0 0 0.5rem" }}
        >
          What to restudy
        </h2>
        {weakest.length === 0 ? (
          <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
            Nothing stands out - you got every topic on this set clean. Move on to a harder
            set and see whether it holds.
          </p>
        ) : (
          <>
            <p
              style={{
                margin: "0 0 0.7rem",
                fontSize: "0.88rem",
                color: "var(--ink-soft)",
                lineHeight: 1.6,
              }}
            >
              Open the {jurisdiction.handbookName} and reread these sections before your next
              attempt.
            </p>
            <ol
              style={{
                margin: 0,
                paddingLeft: "1.2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
                fontSize: "0.92rem",
                color: "var(--ink-soft)",
                lineHeight: 1.55,
              }}
            >
              {weakest.map((t) => (
                <li key={t.topic}>
                  <strong style={{ color: "var(--ink)" }}>{topicLabel(t.topic)}</strong> —{" "}
                  {t.correct} of {t.total} ({t.percent}%)
                </li>
              ))}
            </ol>
            <a
              href={jurisdiction.handbookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              style={{ width: "100%", marginTop: "0.85rem" }}
            >
              Open the {jurisdiction.handbookName} →
            </a>
          </>
        )}
      </div>

      {/* ---------- Review mistakes ---------- */}
      {missed.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <h2 className="font-display" style={sectionHeading}>
            Review your mistakes ({missed.length})
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {missed.map((q) => (
              <div
                key={q.id}
                className="report-panel"
                style={{ padding: "1rem 1.1rem", borderLeft: `4px solid ${FAIL}` }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 8,
                  }}
                >
                  <span
                    style={{
                      padding: "0.15rem 0.45rem",
                      border: "1px solid var(--line)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.66rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.04em",
                      color: "var(--ink-mute)",
                    }}
                  >
                    {TOPIC_META[q.topic].short}
                  </span>
                  {q.commonlyMissed && (
                    <span
                      style={{
                        padding: "0.15rem 0.45rem",
                        background: "#fff3cd",
                        color: "#5c4400",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.66rem",
                        fontWeight: 700,
                      }}
                    >
                      ⭐ Commonly missed
                    </span>
                  )}
                </div>

                <p
                  style={{
                    margin: "0 0 0.6rem",
                    fontWeight: 600,
                    fontSize: "0.98rem",
                    lineHeight: 1.5,
                    color: "var(--ink)",
                  }}
                >
                  {q.question}
                </p>

                <p
                  style={{
                    margin: "0 0 0.55rem",
                    padding: "0.55rem 0.7rem",
                    background: "rgba(7,173,156,0.10)",
                    borderLeft: `3px solid ${PASS}`,
                    fontSize: "0.92rem",
                    lineHeight: 1.5,
                    color: "var(--ink)",
                  }}
                >
                  <strong style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem" }}>
                    {LETTERS[q.correctIndex]}.
                  </strong>{" "}
                  {q.choices[q.correctIndex]}
                </p>

                <p
                  style={{
                    margin: 0,
                    fontSize: "0.9rem",
                    lineHeight: 1.6,
                    color: "var(--ink-soft)",
                  }}
                >
                  {q.explanation}
                </p>

                {q.context && (
                  <div
                    style={{
                      marginTop: "0.7rem",
                      padding: "0.7rem 0.85rem",
                      background: "var(--paper)",
                      borderLeft: "3px solid var(--accent)",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 0.3rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--accent)",
                      }}
                    >
                      The rule in context
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "var(--ink-soft)",
                      }}
                    >
                      {q.context}
                    </p>
                  </div>
                )}

                {q.trap && (
                  <div
                    style={{
                      marginTop: "0.6rem",
                      padding: "0.65rem 0.85rem",
                      background: "rgba(244,180,0,0.12)",
                      borderLeft: "3px solid #f4b400",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 0.3rem",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "#8a6d00",
                      }}
                    >
                      Common mistake
                    </p>
                    <p
                      style={{
                        margin: 0,
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "var(--ink-soft)",
                      }}
                    >
                      {q.trap}
                    </p>
                  </div>
                )}

                {q.sourceUrl ? (
                  <a
                    href={q.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "0.6rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      color: "var(--accent)",
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                    }}
                  >
                    {q.sourceLabel ?? "Read the official rule"} →
                  </a>
                ) : q.sourceLabel ? (
                  <p
                    style={{
                      margin: "0.5rem 0 0",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      color: "var(--ink-mute)",
                    }}
                  >
                    {q.sourceLabel}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---------- Next steps ---------- */}
      <div style={{ marginBottom: 28 }}>
        <h2 className="font-display" style={sectionHeading}>
          Keep going
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {isWeakSpots ? (
            <Link
              href={`/driving/${jurisdiction.slug}/${WEAK_SPOTS_ID}/take/`}
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Rebuild my weak spots
            </Link>
          ) : (
            <Link
              href={`/driving/${jurisdiction.slug}/${setId}/take/`}
              className="btn-primary"
              style={{ width: "100%" }}
            >
              Retake {setTitle}
            </Link>
          )}
          {!isWeakSpots && (
            <Link
              href={`/driving/${jurisdiction.slug}/${WEAK_SPOTS_ID}/take/`}
              className="btn-outline"
              style={{ width: "100%" }}
            >
              Drill your weak spots →
            </Link>
          )}
          {nextSet && (
            <Link
              href={`/driving/${jurisdiction.slug}/${nextSet.id}/take/`}
              className="btn-outline"
              style={{ width: "100%" }}
            >
              Next: {nextSet.title} →
            </Link>
          )}
          <Link
            href={`/driving/${jurisdiction.slug}/`}
            className="btn-outline"
            style={{ width: "100%" }}
          >
            All {jurisdiction.name} sets
          </Link>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <DrivingShareBlock
          jurisdiction={jurisdiction}
          setTitle={setTitle}
          correct={result.correct}
          total={result.total}
          passed={result.passed}
          hardestQuestion={hardestQuestion}
          setPath={`/driving/${jurisdiction.slug}/${setId}/take/`}
        />
      </div>

      <DrivingDisclaimer
        handbookName={jurisdiction.handbookName}
        handbookUrl={jurisdiction.handbookUrl}
      />
    </div>
  );
}

export function ResultsDrivingClient() {
  return (
    <Suspense
      fallback={
        <div className="test-shell">
          <p style={{ color: "var(--ink-mute)" }}>Loading results…</p>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
