"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { ThisOrThatQuestion } from "@/lib/minis/daily";
import type { MiniResult } from "@/lib/minis/store";

/**
 * Eight rapid two-option questions. Pick a side, see the fact, keep moving.
 */
export default function ThisOrThatMini({
  questions,
  onComplete,
}: {
  questions: ThisOrThatQuestion[];
  onComplete: (result: MiniResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<"left" | "right" | null>(null);
  const [track, setTrack] = useState("");

  const q = questions[idx];
  if (!q) return null;

  const wasRight = picked !== null && picked === q.correctSide;

  function choose(side: "left" | "right") {
    if (picked !== null) return;
    setPicked(side);
    setTrack(track + (side === questions[idx].correctSide ? "#" : "."));
  }

  function next() {
    if (idx + 1 >= questions.length) {
      const score = track.split("").filter((c) => c === "#").length;
      onComplete({ done: true, score, total: questions.length, track });
    } else {
      setIdx(idx + 1);
      setPicked(null);
    }
  }

  function optionStyle(side: "left" | "right"): CSSProperties {
    const base: CSSProperties = {
      flex: "1 1 40%",
      padding: "0.85rem 0.6rem",
      borderRadius: "var(--radius)",
      border: "1px solid var(--line-strong)",
      background: "var(--paper)",
      color: "var(--ink)",
      fontWeight: 700,
      fontSize: "0.9rem",
      cursor: picked === null ? "pointer" : "default",
      lineHeight: 1.25,
    };
    if (picked !== null) {
      if (side === q.correctSide) {
        base.background = "var(--mark-teal)";
        base.color = "#fff";
        base.borderColor = "var(--mark-teal)";
      } else if (side === picked) {
        base.background = "var(--mark-coral)";
        base.color = "#fff";
        base.borderColor = "var(--mark-coral)";
      } else {
        base.opacity = 0.6;
      }
    }
    return base;
  }

  return (
    <div>
      <p style={{ fontSize: "0.78rem", color: "var(--ink-mute)", margin: "0 0 0.4rem" }}>
        Question {idx + 1} of {questions.length}
      </p>
      <p style={{ fontWeight: 600, margin: "0 0 0.75rem", fontSize: "1.02rem" }}>{q.q}</p>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <button type="button" style={optionStyle("left")} onClick={() => choose("left")} disabled={picked !== null}>
          {q.left}
        </button>
        <button type="button" style={optionStyle("right")} onClick={() => choose("right")} disabled={picked !== null}>
          {q.right}
        </button>
      </div>
      {picked !== null && (
        <div style={{ marginTop: 12 }}>
          <p style={{ margin: "0 0 8px", fontSize: "0.88rem", color: "var(--ink-soft)" }}>
            <strong style={{ color: wasRight ? "var(--mark-teal)" : "var(--mark-coral)" }}>
              {wasRight ? "Right. " : "Nope. "}
            </strong>
            {q.fact}
          </p>
          <button
            type="button"
            onClick={next}
            style={{
              padding: "0.55rem 1.1rem",
              borderRadius: "var(--radius)",
              border: "1px solid var(--line-strong)",
              background: "var(--ink)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.85rem",
              cursor: "pointer",
            }}
          >
            {idx + 1 >= questions.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
}
