"use client";

import type { FoolTile } from "@/lib/fool/tiles";

const TILE_COLORS = ["#0795EA", "#F9684D", "#07AD9C", "#F47A9E", "#6B7280", "#8B5CF6"];

interface Props {
  questionText: string;
  tiles: FoolTile[];
  index: number;
  total: number;
  picked?: number;
  onPick: (tileIndex: number) => void;
  disabled?: boolean;
}

/** One fool-your-friends question: find the truth among the tiles. */
export function FoolQuestionCard({
  questionText,
  tiles,
  index,
  total,
  picked,
  onPick,
  disabled,
}: Props) {
  return (
    <div className="daily-card">
      <p className="daily-from">
        Find the truth · {index + 1} of {total}
      </p>
      <h2 className="daily-q">{questionText}</h2>
      <div className="daily-options" role="group" aria-label="Pick the true answer">
        {tiles.map((tile, i) => (
          <button
            key={i}
            type="button"
            className={`daily-opt${picked === i ? " is-on" : ""}`}
            style={{ backgroundColor: TILE_COLORS[i % TILE_COLORS.length] }}
            onClick={() => onPick(i)}
            disabled={disabled}
            aria-pressed={picked === i}
          >
            {tile.text}
          </button>
        ))}
      </div>
    </div>
  );
}
