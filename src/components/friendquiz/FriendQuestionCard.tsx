"use client";

import type { FriendQuestion } from "@/lib/friendquiz/packs";

const TILE_COLORS = ["#0795EA", "#F9684D", "#07AD9C", "#F47A9E", "#6B7280", "#8B5CF6"];

interface Props {
  question: FriendQuestion;
  index: number;
  total: number;
  picked?: number;
  onPick: (optionIndex: number) => void;
  /** Copy nudge above the prompt, e.g. "About you" vs "Your guess" */
  eyebrow: string;
  disabled?: boolean;
}

/** One friend-quiz question with fixed-choice answer tiles. */
export function FriendQuestionCard({
  question,
  index,
  total,
  picked,
  onPick,
  eyebrow,
  disabled,
}: Props) {
  return (
    <div className="daily-card">
      <p className="daily-from">
        {eyebrow} · {index + 1} of {total}
      </p>
      <h2 className="daily-q">{question.text}</h2>
      <div className="daily-options" role="group" aria-label="Pick one answer">
        {question.options.map((opt, i) => (
          <button
            key={i}
            type="button"
            className={`daily-opt${picked === i ? " is-on" : ""}`}
            style={{ backgroundColor: TILE_COLORS[i % TILE_COLORS.length] }}
            onClick={() => onPick(i)}
            disabled={disabled}
            aria-pressed={picked === i}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
