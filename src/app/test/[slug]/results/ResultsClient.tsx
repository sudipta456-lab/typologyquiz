"use client";

import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { getTest } from "@/lib/tests/registry";
import { CATEGORY_META } from "@/lib/types";
import { decodeResult } from "@/lib/results";
import { RadarChart } from "@/components/RadarChart";
import { CompassChart } from "@/components/CompassChart";
import { DialChart } from "@/components/DialChart";
import { SpectrumBar } from "@/components/SpectrumBar";
import { ShareBlock } from "@/components/ShareBlock";
import { InviteFriends } from "@/components/InviteFriends";
import { ResultShareCard } from "@/components/ResultShareCard";
import { StickerDownload } from "@/components/StickerDownload";
import { ToneToggle } from "@/components/ToneToggle";
import { toneBlurb, toneStorageKey, type ToneMode } from "@/lib/tone";
import { scoreLevel, type ScoreLine } from "@/lib/result-card";

function ResultsContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const slug = params.slug as string;
  const encoded = searchParams.get("r");

  const test = getTest(slug);
  const [tone, setTone] = useState<ToneMode>("chill");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(toneStorageKey(slug)) as ToneMode | null;
      if (saved === "chill" || saved === "roast") setTone(saved);
    } catch {
      /* ignore */
    }
  }, [slug]);

  const decoded = useMemo(
    () => (encoded ? decodeResult(encoded) : null),
    [encoded]
  );

  const typeLabel =
    (typeof decoded?.extras?.label === "string" && decoded.extras.label) ||
    (decoded?.extras?.ideology as { label?: string } | undefined)?.label ||
    (decoded?.extras?.category as { label?: string } | undefined)?.label;

  const rawDescription =
    (typeof decoded?.extras?.description === "string" && decoded.extras.description) ||
    (decoded?.extras?.ideology as { description?: string } | undefined)?.description ||
    (decoded?.extras?.category as { description?: string } | undefined)?.description;

  const displayDescription = useMemo(
    () => toneBlurb(typeLabel, rawDescription, tone),
    [typeLabel, rawDescription, tone]
  );

  function handleTone(next: ToneMode) {
    setTone(next);
    try {
      localStorage.setItem(toneStorageKey(slug), next);
    } catch {
      /* ignore */
    }
  }

  if (!test || !encoded) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Results not found
        </h1>
        <p className="section-lead">Take the test first to see your results.</p>
        <Link href={`/test/${slug}`} className="btn-primary">
          Take the test
        </Link>
      </div>
    );
  }

  if (!decoded) {
    return (
      <div className="test-shell">
        <h1 className="font-display" style={{ fontSize: "1.5rem", marginBottom: 12 }}>
          Invalid results
        </h1>
        <Link href={`/test/${slug}`} className="text-link">
          Take the test again
        </Link>
      </div>
    );
  }

  const { result, extras } = decoded;
  const meta = CATEGORY_META[test.category as keyof typeof CATEGORY_META];
  const accentColor = meta?.hex || "#0795EA";
  const t = test;

  function renderHero() {
    const category = typeLabel
      ? { label: typeLabel, description: displayDescription || "" }
      : undefined;

    switch (t.resultType) {
      case "compass":
        return (
          <CompassChart
            scores={result.scores}
            axes={t.axes}
            color={accentColor}
            ideology={category}
          />
        );
      case "radar":
        return (
          <>
            {category && (
              <div style={{ textAlign: "center", marginBottom: 20 }}>
                <div
                  className="font-display"
                  style={{ fontSize: "1.45rem", fontWeight: 600, color: "#14141f" }}
                >
                  {category.label}
                </div>
                {category.description && (
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: "#3d4250",
                      maxWidth: 440,
                      margin: "10px auto 0",
                      lineHeight: 1.55,
                    }}
                  >
                    {category.description}
                  </p>
                )}
              </div>
            )}
            <RadarChart scores={result.scores} axes={t.axes} color={accentColor} />
          </>
        );
      case "dial":
        return (
          <DialChart
            correctCount={result.correctCount ?? 0}
            totalQuestions={result.totalQuestions ?? 7}
            color={accentColor}
          />
        );
      case "spectrum": {
        const axis = t.axes[0];
        const scoreKey = axis?.key ?? Object.keys(result.scores)[0];
        return (
          <SpectrumBar
            score={result.scores[scoreKey] ?? 0}
            label={axis?.label ?? "Score"}
            lowLabel={axis?.lowLabel ?? "Low"}
            highLabel={axis?.highLabel ?? "High"}
            color={accentColor}
            category={category}
          />
        );
      }
      default:
        return null;
    }
  }

  const nextTests = [
    { slug: "friend-role", label: "Friend Role" },
    { slug: "social-battery", label: "Social Battery" },
    { slug: "attachment-style", label: "Attachment" },
    { slug: "conflict-style", label: "Conflict Style" },
    { slug: "career-interests", label: "Career Interests" },
    { slug: "mini-ipip", label: "Big Five" },
    { slug: "8values", label: "8values" },
    { slug: "vviq", label: "VVIQ" },
    { slug: "crt-7", label: "CRT" },
  ]
    .filter((x) => x.slug !== slug)
    .slice(0, 3);

  return (
    <div className="test-shell results-shell">
      <Link href={`/test/${slug}`} className="test-back">
        Test info
      </Link>

      <div className="results-tone-row">
        <ToneToggle value={tone} onChange={handleTone} />
        <span className="results-tone-hint">
          {tone === "roast" ? "Spicy copy. Same scores." : "Straight talk. Same scores."}
        </span>
      </div>

      <div className="report-panel" style={{ marginBottom: 28, padding: "1.5rem 1.25rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            color: "#6b7280",
            textAlign: "center",
            margin: "0 0 0.35rem",
            fontFamily: "IBM Plex Mono, ui-monospace, monospace",
            letterSpacing: "0.06em",
            textTransform: "uppercase",
          }}
        >
          {test.title}
        </p>
        <h1
          className="font-display"
          style={{
            fontSize: "1.65rem",
            fontWeight: 600,
            color: "#14141f",
            textAlign: "center",
            margin: "0 0 1.25rem",
          }}
        >
          Your results
        </h1>
        <div>{renderHero()}</div>
      </div>

      <div style={{ marginBottom: 28 }}>
        <h2
          className="font-display"
          style={{
            fontSize: "1.15rem",
            fontWeight: 600,
            color: "#14141f",
            marginBottom: 12,
            paddingBottom: 8,
            borderBottom: "1px solid #e2e0db",
          }}
        >
          Your stats
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #e2e0db" }}>
          {t.axes.map((axis) => {
            const score = result.scores[axis.key] ?? 50;
            const percentile = result.percentiles?.[axis.key];
            return (
              <div
                key={axis.key}
                style={{
                  padding: "1rem 1.1rem",
                  borderBottom: "1px solid #e2e0db",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 8,
                  }}
                >
                  <span style={{ fontWeight: 600, color: "#14141f" }}>{axis.label}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#14141f",
                        fontFamily: "IBM Plex Mono, ui-monospace, monospace",
                      }}
                    >
                      {score}
                    </span>
                    {percentile !== undefined && (
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "#6b7280",
                          fontFamily: "IBM Plex Mono, ui-monospace, monospace",
                        }}
                      >
                        {percentile}th
                      </span>
                    )}
                  </div>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "#e2e0db",
                    overflow: "hidden",
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${score}%`,
                      backgroundColor: accentColor,
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "0.72rem",
                    color: "#6b7280",
                    fontFamily: "IBM Plex Mono, ui-monospace, monospace",
                  }}
                >
                  <span>{axis.lowLabel}</span>
                  <span>{axis.highLabel}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {result.correctCount !== undefined && result.totalQuestions !== undefined && (
        <div className="report-panel" style={{ marginBottom: 28, padding: "1.25rem", textAlign: "center" }}>
          <div style={{ fontSize: "2rem", fontWeight: 700, color: accentColor, marginBottom: 4 }}>
            {result.correctCount}/{result.totalQuestions}
          </div>
          <p style={{ fontSize: "0.9rem", color: "#5a6170", margin: 0 }}>
            You got {result.correctCount} out of {result.totalQuestions} correct.
          </p>
        </div>
      )}

      {t.funFacts.length > 0 && (
        <div style={{ marginBottom: 28 }}>
          <h2
            className="font-display"
            style={{
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "#14141f",
              marginBottom: 12,
              paddingBottom: 8,
              borderBottom: "1px solid #e2e0db",
            }}
          >
            Quick context
          </h2>
          <div style={{ display: "flex", flexDirection: "column", border: "1px solid #e2e0db" }}>
            {t.funFacts.map((fact, i) => (
              <div
                key={i}
                style={{
                  padding: "0.85rem 1rem",
                  borderBottom: i < t.funFacts.length - 1 ? "1px solid #e2e0db" : "none",
                  background: "#fff",
                  fontSize: "0.88rem",
                  color: "#3d4250",
                  lineHeight: 1.55,
                }}
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="report-panel" style={{ marginBottom: 28, padding: "1rem 1.1rem" }}>
        <h3 className="font-display" style={{ fontSize: "1rem", fontWeight: 600, margin: "0 0 0.4rem" }}>
          Heads up
        </h3>
        <p style={{ fontSize: "0.85rem", color: "#3d4250", margin: 0, lineHeight: 1.55 }}>
          {t.disclaimer}
        </p>
      </div>

      <div style={{ marginBottom: 24 }} className="report-panel">
        <ResultShareCard
          testTitle={t.title}
          typeLabel={typeLabel}
          typeDescription={displayDescription}
          scores={result.scores}
          scoreLines={
            t.axes.map(
              (axis): ScoreLine => ({
                key: axis.key,
                label: axis.label,
                score: result.scores[axis.key] ?? 0,
                level: scoreLevel(result.scores[axis.key] ?? 0),
              })
            )
          }
          accent={accentColor}
        />
        {typeLabel && (
          <StickerDownload
            typeLabel={typeLabel}
            testTitle={t.title}
            tagline={displayDescription}
            accent={accentColor}
          />
        )}
      </div>

      <div style={{ marginBottom: 24 }}>
        <ShareBlock
          testSlug={slug}
          testTitle={t.title}
          encoded={encoded!}
          resultType={test.resultType}
          resultLabel={typeLabel}
        />
      </div>

      <div className="report-panel" style={{ marginBottom: 28, padding: "1rem 1.1rem" }}>
        <p className="font-display" style={{ fontSize: "1rem", fontWeight: 600, margin: "0 0 0.35rem" }}>
          Challenge friends
        </p>
        <p style={{ fontSize: "0.85rem", color: "#3d4250", margin: "0 0 0.75rem", lineHeight: 1.5 }}>
          Invite them, open a room, or paste two result links side by side.
        </p>
        <div className="share-actions" style={{ padding: "0 0 0.75rem" }}>
          <Link href="/room" className="btn-primary share-btn">
            Start a room
          </Link>
          <Link href="/compare" className="share-btn share-btn-outline">
            Compare results
          </Link>
        </div>
        <InviteFriends variant="compact" />
      </div>

      <div style={{ borderTop: "1px solid #e2e0db", paddingTop: 28 }}>
        <h2 className="font-display" style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: 14 }}>
          Try another
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {nextTests.map((x) => (
            <Link key={x.slug} href={`/test/${x.slug}`} className="btn-outline" style={{ fontSize: "0.875rem" }}>
              {x.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ResultsClient() {
  return (
    <Suspense
      fallback={
        <div className="test-shell">
          <p style={{ color: "#8b93a0" }}>Loading results…</p>
        </div>
      }
    >
      <ResultsContent />
    </Suspense>
  );
}
