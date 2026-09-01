"use client";

import type { CSSProperties } from "react";

/**
 * Streak strip for /daily: current streak, best streak, perfect days, and a
 * 7-day dot calendar of local-date activity.
 */

const DOW = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function localKey(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default function StreakStrip({
  streak,
  bestStreak,
  perfectDays,
  activeDays,
  perfectToday,
}: {
  streak: number;
  bestStreak: number;
  perfectDays: number;
  activeDays: string[];
  perfectToday: boolean;
}) {
  const days: { key: string; label: string; active: boolean; isToday: boolean }[] = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const key = localKey(d);
    days.push({
      key,
      label: DOW[d.getDay()],
      active: activeDays.includes(key),
      isToday: i === 0,
    });
  }

  const stat: CSSProperties = { display: "flex", flexDirection: "column", alignItems: "flex-start" };
  const num: CSSProperties = { fontSize: "1.35rem", fontWeight: 700, lineHeight: 1.1 };
  const cap: CSSProperties = { fontSize: "0.72rem", color: "var(--ink-mute)" };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "1.25rem",
        border: "1px solid var(--line)",
        borderRadius: "var(--radius-lg)",
        background: "var(--paper)",
        padding: "0.9rem 1.1rem",
        margin: "1.25rem 0",
      }}
    >
      <div style={stat}>
        <strong style={num}>{streak}</strong>
        <span style={cap}>day streak</span>
      </div>
      <div style={stat}>
        <strong style={num}>{bestStreak}</strong>
        <span style={cap}>best</span>
      </div>
      <div style={stat}>
        <strong style={num}>{perfectDays}</strong>
        <span style={cap}>perfect days</span>
      </div>
      <div style={{ display: "flex", gap: 8, marginLeft: "auto" }} aria-label="Last 7 days of activity">
        {days.map((d) => (
          <div key={d.key} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}>
            <span
              title={d.key}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: d.active ? "var(--mark-teal)" : "transparent",
                border: d.active ? "1px solid var(--mark-teal)" : "1px solid var(--line)",
                outline: d.isToday ? "2px solid var(--accent)" : "none",
                outlineOffset: 1,
              }}
            />
            <span style={{ fontSize: "0.6rem", color: "var(--ink-mute)" }}>{d.label}</span>
          </div>
        ))}
      </div>
      {perfectToday && (
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            color: "var(--mark-teal)",
            border: "1px solid var(--mark-teal)",
            borderRadius: "var(--radius)",
            padding: "0.2rem 0.55rem",
          }}
        >
          Perfect day
        </span>
      )}
    </div>
  );
}
