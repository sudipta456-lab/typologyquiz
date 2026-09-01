"use client";

import { useSyncExternalStore } from "react";

function subscribeReducedMotion(onChange: () => void): () => void {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function useReducedMotionPref(): boolean {
  return useSyncExternalStore(
    subscribeReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

/**
 * Small chip for gem feedback ("+1 gem", "12 gems"). Matches the existing
 * mono pill styling. One soft appear on mount, suppressed under
 * prefers-reduced-motion; no sounds, no counters ticking up.
 */
export function GemPill({
  text,
  tone = "teal",
  title,
}: {
  text: string;
  /** teal = the earn moment; plain = quiet context (running total). */
  tone?: "teal" | "plain";
  title?: string;
}) {
  const reducedMotion = useReducedMotionPref();
  return (
    <>
      {!reducedMotion && (
        <style>
          {"@keyframes tqGemAppear { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }"}
        </style>
      )}
      <span
        title={title}
        style={{
          display: "inline-block",
          padding: "0.15rem 0.55rem",
          borderRadius: 999,
          border: `1px solid ${tone === "teal" ? "var(--mark-teal)" : "var(--line)"}`,
          color: tone === "teal" ? "var(--ink)" : "var(--ink-mute)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.78rem",
          fontWeight: 700,
          fontVariantNumeric: "tabular-nums",
          whiteSpace: "nowrap",
          animation: reducedMotion ? undefined : "tqGemAppear 250ms ease-out",
        }}
      >
        {text}
      </span>
    </>
  );
}
