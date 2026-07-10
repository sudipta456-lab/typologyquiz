"use client";

import type { ToneMode } from "@/lib/tone";

export function ToneToggle({
  value,
  onChange,
}: {
  value: ToneMode;
  onChange: (v: ToneMode) => void;
}) {
  return (
    <div className="tone-toggle" role="group" aria-label="Result tone">
      <button
        type="button"
        className={value === "chill" ? "tone-btn is-on" : "tone-btn"}
        onClick={() => onChange("chill")}
      >
        Chill
      </button>
      <button
        type="button"
        className={value === "roast" ? "tone-btn is-on" : "tone-btn"}
        onClick={() => onChange("roast")}
      >
        Roast
      </button>
    </div>
  );
}
