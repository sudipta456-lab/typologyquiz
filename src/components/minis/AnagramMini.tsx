"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { AnagramRound } from "@/lib/minis/daily";
import { answersMatch } from "@/lib/minis/daily";
import type { MiniResult } from "@/lib/minis/store";

const TIER_LABEL = { easy: "Warm-up", medium: "Medium", hard: "Boss level" } as const;

const btn: CSSProperties = {
  padding: "0.55rem 1rem",
  borderRadius: "var(--radius)",
  border: "1px solid var(--line-strong)",
  background: "var(--ink)",
  color: "#fff",
  fontWeight: 600,
  fontSize: "0.85rem",
  cursor: "pointer",
};

const btnGhost: CSSProperties = { ...btn, background: "transparent", color: "var(--ink)" };

/**
 * Three rounds of unscramble-the-word. Type to answer, exact match accepted,
 * reveal button forfeits the round.
 */
export default function AnagramMini({
  rounds,
  onComplete,
}: {
  rounds: AnagramRound[];
  onComplete: (result: MiniResult) => void;
}) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [outcomes, setOutcomes] = useState<("solved" | "revealed")[]>([]);
  const [status, setStatus] = useState<"playing" | "solved" | "revealed">("playing");
  const [wrongFlash, setWrongFlash] = useState(false);

  const round = rounds[idx];
  if (!round) return null;

  function finish(finalOutcomes: ("solved" | "revealed")[]) {
    const score = finalOutcomes.filter((o) => o === "solved").length;
    const track = finalOutcomes.map((o) => (o === "solved" ? "#" : ".")).join("");
    onComplete({ done: true, score, total: rounds.length, track });
  }

  function advance(outcome: "solved" | "revealed") {
    const next = [...outcomes, outcome];
    setOutcomes(next);
    if (idx + 1 >= rounds.length) {
      finish(next);
    } else {
      setIdx(idx + 1);
      setInput("");
      setStatus("playing");
    }
  }

  function check() {
    if (status !== "playing") return;
    if (answersMatch(input, round.entry.word)) {
      setStatus("solved");
    } else {
      setWrongFlash(true);
      setTimeout(() => setWrongFlash(false), 900);
    }
  }

  return (
    <div>
      <p style={{ fontSize: "0.78rem", color: "var(--ink-mute)", margin: "0 0 0.5rem" }}>
        Round {idx + 1} of {rounds.length} ({TIER_LABEL[round.tier]}) · Hint: {round.entry.hint}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "0.75rem" }} aria-label="Scrambled letters">
        {round.scrambled.split("").map((ch, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 34,
              height: 38,
              borderRadius: "var(--radius)",
              border: "1px solid var(--line-strong)",
              background: "var(--paper)",
              fontWeight: 700,
              fontSize: "1.05rem",
              fontFamily: "var(--font-mono)",
            }}
          >
            {ch}
          </span>
        ))}
      </div>

      {status === "playing" && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") check();
            }}
            placeholder="Unscramble it"
            autoCapitalize="none"
            autoCorrect="off"
            spellCheck={false}
            aria-label="Your answer"
            style={{
              flex: "1 1 160px",
              padding: "0.55rem 0.8rem",
              borderRadius: "var(--radius)",
              border: wrongFlash ? "2px solid var(--mark-coral)" : "1px solid var(--line-strong)",
              background: "var(--white)",
              color: "var(--ink)",
              fontSize: "1rem",
            }}
          />
          <button type="button" style={btn} onClick={check}>
            Check
          </button>
          <button type="button" style={btnGhost} onClick={() => setStatus("revealed")}>
            Reveal
          </button>
        </div>
      )}

      {wrongFlash && status === "playing" && (
        <p style={{ color: "var(--mark-coral)", fontSize: "0.85rem", marginTop: 8 }}>Not it yet. Shuffle it around in your head.</p>
      )}

      {status === "solved" && (
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "var(--mark-teal)", fontWeight: 700, margin: "0 0 8px" }}>
            Got it: {round.entry.word.toUpperCase()}
          </p>
          <button type="button" style={btn} onClick={() => advance("solved")}>
            {idx + 1 >= rounds.length ? "Finish" : "Next round"}
          </button>
        </div>
      )}

      {status === "revealed" && (
        <div style={{ marginTop: 10 }}>
          <p style={{ color: "var(--ink-soft)", margin: "0 0 8px" }}>
            It was <strong>{round.entry.word.toUpperCase()}</strong>. Sneaky one.
          </p>
          <button type="button" style={btn} onClick={() => advance("revealed")}>
            {idx + 1 >= rounds.length ? "Finish" : "Next round"}
          </button>
        </div>
      )}
    </div>
  );
}
