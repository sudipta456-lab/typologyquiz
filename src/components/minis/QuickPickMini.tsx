"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { QuickPickDaily } from "@/lib/minis/daily";
import type { MiniResult } from "@/lib/minis/store";

const TIME_LIMIT = 60;

/**
 * 60-second tile hunt: tap every tile that fits the prompt. Correct taps lock
 * green, wrong taps lock red. Ends when all correct tiles are found or the
 * clock runs out.
 */
export default function QuickPickMini({
  daily,
  onComplete,
}: {
  daily: QuickPickDaily;
  onComplete: (result: MiniResult) => void;
}) {
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [picks, setPicks] = useState<Record<string, "hit" | "miss">>({});
  const [ended, setEnded] = useState(false);
  const completedRef = useRef(false);

  const totalCorrect = daily.tiles.filter((t) => t.correct).length;
  const hits = Object.values(picks).filter((v) => v === "hit").length;
  const misses = Object.values(picks).filter((v) => v === "miss").length;

  useEffect(() => {
    if (!started || ended) return;
    const t = setInterval(() => {
      setTimeLeft((s) => {
        if (s <= 1) {
          setEnded(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(t);
  }, [started, ended]);

  useEffect(() => {
    if (!ended || completedRef.current) return;
    completedRef.current = true;
    const track = "#".repeat(hits) + ".".repeat(totalCorrect - hits);
    onComplete({ done: true, score: hits, total: totalCorrect, track, misses });
  }, [ended, hits, misses, totalCorrect, onComplete]);

  function tap(label: string, correct: boolean) {
    if (!started || ended || picks[label]) return;
    const next: Record<string, "hit" | "miss"> = { ...picks, [label]: correct ? "hit" : "miss" };
    setPicks(next);
    const nextHits = Object.values(next).filter((v) => v === "hit").length;
    if (nextHits >= totalCorrect) setEnded(true);
  }

  const tileBase: CSSProperties = {
    padding: "0.65rem 0.4rem",
    borderRadius: "var(--radius)",
    border: "1px solid var(--line-strong)",
    background: "var(--paper)",
    color: "var(--ink)",
    fontWeight: 600,
    fontSize: "0.8rem",
    cursor: "pointer",
    minHeight: 48,
    lineHeight: 1.2,
  };

  if (!started) {
    return (
      <div>
        <p style={{ margin: "0 0 10px", fontWeight: 600 }}>{daily.round.prompt}.</p>
        <p style={{ margin: "0 0 10px", fontSize: "0.85rem", color: "var(--ink-mute)" }}>
          {totalCorrect} to find, {TIME_LIMIT} seconds, wrong taps stick. Ready?
        </p>
        <button
          type="button"
          onClick={() => setStarted(true)}
          style={{
            padding: "0.6rem 1.2rem",
            borderRadius: "var(--radius)",
            border: "1px solid var(--line-strong)",
            background: "var(--ink)",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Start the clock
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <p style={{ margin: 0, fontWeight: 600, fontSize: "0.9rem" }}>{daily.round.prompt}</p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            color: timeLeft <= 10 ? "var(--mark-coral)" : "var(--ink)",
          }}
          aria-live="polite"
        >
          {timeLeft}s
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {daily.tiles.map((t) => {
          const state = picks[t.label];
          const style: CSSProperties = { ...tileBase };
          if (state === "hit") {
            style.background = "var(--mark-teal)";
            style.color = "#fff";
            style.borderColor = "var(--mark-teal)";
          } else if (state === "miss") {
            style.background = "var(--mark-coral)";
            style.color = "#fff";
            style.borderColor = "var(--mark-coral)";
          } else if (ended) {
            style.opacity = 0.55;
            style.cursor = "default";
          }
          return (
            <button key={t.label} type="button" style={style} onClick={() => tap(t.label, t.correct)} disabled={ended}>
              {t.label}
            </button>
          );
        })}
      </div>
      <p style={{ marginTop: 10, fontSize: "0.85rem", color: "var(--ink-mute)" }}>
        Found {hits} of {totalCorrect}
        {misses > 0 ? `, ${misses} wrong ${misses === 1 ? "tap" : "taps"}` : ""}
      </p>
    </div>
  );
}
