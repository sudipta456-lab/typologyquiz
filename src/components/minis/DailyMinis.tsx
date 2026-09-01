"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import type { CSSProperties } from "react";
import { getDailyMinis } from "@/lib/minis/daily";
import { utcDateKey } from "@/lib/minis/seed";
import { loadMinisDay, markActiveDay, saveMiniResult } from "@/lib/minis/store";
import type { MiniId, MiniResult, MinisDayState } from "@/lib/minis/store";
import { MINI_NAMES, perfectDayLine, shareLine } from "@/lib/minis/share";
import { recordDailyActivity } from "@/lib/progress-game";
import AnagramMini from "./AnagramMini";
import QuickPickMini from "./QuickPickMini";
import ThisOrThatMini from "./ThisOrThatMini";
import ShareLineButton from "./ShareLineButton";

function localTodayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const MINI_META: { id: MiniId; title: string; blurb: string }[] = [
  { id: "anagram", title: "Anagram", blurb: "Three scrambled words. Type the answers." },
  { id: "quickpick", title: "Quick Pick", blurb: "Tap all the right tiles in 60 seconds." },
  { id: "thisorthat", title: "This or That", blurb: "Eight quick facts. Pick the right side." },
];

/**
 * The three date-seeded daily minis. Everyone on Earth gets the same puzzles
 * on the same UTC day. Completing any mini counts as your daily action for
 * the streak.
 */
const noopSubscribe = () => () => {};

export default function DailyMinis({ onActivity }: { onActivity?: () => void }) {
  // Hydration-safe mounted flag: false on the server and first client render.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const [dayOverride, setDayOverride] = useState<MinisDayState | null>(null);
  const [open, setOpen] = useState<MiniId | null>(null);

  const dateKey = mounted ? utcDateKey() : null;
  const minis = useMemo(() => (dateKey ? getDailyMinis(dateKey) : null), [dateKey]);
  const day =
    dayOverride && dateKey && dayOverride.dateKey === dateKey
      ? dayOverride
      : dateKey
        ? loadMinisDay(dateKey)
        : null;

  if (!mounted || !minis || !day || !dateKey) {
    return (
      <div style={{ border: "1px solid var(--line)", borderRadius: "var(--radius-lg)", padding: "1.25rem", color: "var(--ink-mute)" }}>
        Loading today&apos;s minis...
      </div>
    );
  }

  function handleComplete(id: MiniId, result: MiniResult) {
    if (!dateKey) return;
    const nextDay = saveMiniResult(dateKey, id, result);
    setDayOverride(nextDay);
    setOpen(null);
    recordDailyActivity();
    markActiveDay(localTodayKey());
    onActivity?.();
  }

  const card: CSSProperties = {
    border: "1px solid var(--line)",
    borderRadius: "var(--radius-lg)",
    background: "var(--white)",
    padding: "1rem 1.1rem",
    marginBottom: "0.85rem",
  };

  return (
    <div>
      {MINI_META.map((meta) => {
        const result = day.results[meta.id];
        const isOpen = open === meta.id;
        return (
          <div key={meta.id} style={card}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              <div style={{ flex: "1 1 auto" }}>
                <h3 className="font-display" style={{ margin: 0, fontSize: "1.15rem" }}>
                  Daily {meta.title}
                </h3>
                <p style={{ margin: "2px 0 0", fontSize: "0.82rem", color: "var(--ink-mute)" }}>{meta.blurb}</p>
              </div>
              {result?.done ? (
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    color: "var(--mark-teal)",
                    border: "1px solid var(--mark-teal)",
                    borderRadius: "var(--radius)",
                    padding: "0.2rem 0.55rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  Done {result.score}/{result.total}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : meta.id)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius)",
                    border: "1px solid var(--line-strong)",
                    background: isOpen ? "transparent" : "var(--ink)",
                    color: isOpen ? "var(--ink)" : "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    cursor: "pointer",
                  }}
                >
                  {isOpen ? "Hide" : "Play"}
                </button>
              )}
            </div>

            {isOpen && !result?.done && (
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                {meta.id === "anagram" && (
                  <AnagramMini rounds={minis.anagram} onComplete={(r) => handleComplete("anagram", r)} />
                )}
                {meta.id === "quickpick" && (
                  <QuickPickMini daily={minis.quickPick} onComplete={(r) => handleComplete("quickpick", r)} />
                )}
                {meta.id === "thisorthat" && (
                  <ThisOrThatMini questions={minis.thisOrThat} onComplete={(r) => handleComplete("thisorthat", r)} />
                )}
              </div>
            )}

            {result?.done && (
              <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
                  {result.track ? `[${result.track}]` : ""}
                  {typeof result.misses === "number" && result.misses > 0
                    ? ` ${result.misses} wrong ${result.misses === 1 ? "tap" : "taps"}`
                    : ""}
                </span>
                <ShareLineButton text={shareLine(MINI_NAMES[meta.id], result)} />
              </div>
            )}
          </div>
        );
      })}

      {day.perfectDay && (
        <div
          style={{
            border: "1px solid var(--mark-teal)",
            borderRadius: "var(--radius-lg)",
            background: "var(--paper)",
            padding: "0.9rem 1.1rem",
            display: "flex",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <p style={{ margin: 0, fontWeight: 700 }}>Perfect day. All three minis, done and dusted.</p>
          <ShareLineButton text={perfectDayLine(day)} label="Copy perfect-day text" />
        </div>
      )}

      <p style={{ fontSize: "0.75rem", color: "var(--ink-mute)", margin: "0.75rem 0 0" }}>
        Same puzzles for everyone today. Fresh set at midnight UTC.
      </p>
    </div>
  );
}
