"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { BADGES, communityPulse, loadGame } from "@/lib/progress-game";

// Hydration-safe mounted flag (same pattern as DailyMinis): false on the
// server and during hydration, true after mount. Reading localStorage during
// render without it made the server say "Locked" while the client said
// "Unlocked", which threw a hydration error on every home load. Everything
// below derives from this flag, so the first client render matches the
// server exactly and the real numbers appear right after mount.
const noopSubscribe = () => () => {};

export function CommunityPulse() {
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  const game = mounted ? loadGame() : null;
  const pulse = mounted ? communityPulse() : [];
  const stats = game
    ? { completions: game.totalCompletions, streak: game.streak, badges: game.badges.length }
    : { completions: 0, streak: 0, badges: 0 };
  const earned = new Set<string>(game ? game.badges : []);

  return (
    <section className="band band-light">
      <div className="section">
        <div className="section-header">
          <div>
            <h2 className="section-title">On this device</h2>
            <p className="section-sub">
              Honest local pulse. No fake millions. Your activity only, unless you share rooms.
            </p>
          </div>
          <Link href="/daily" className="text-link">
            Daily question →
          </Link>
        </div>

        <div className="pulse-stats">
          <div className="pulse-stat">
            <strong>{stats.completions}</strong>
            <span>tests finished</span>
          </div>
          <div className="pulse-stat">
            <strong>{stats.streak}</strong>
            <span>day streak</span>
          </div>
          <div className="pulse-stat">
            <strong>{stats.badges}</strong>
            <span>badges</span>
          </div>
        </div>

        {pulse.length > 0 && (
          <div className="pulse-types">
            <h3 className="test-block-title">Types you have landed</h3>
            <ul>
              {pulse.map((p) => (
                <li key={p.label}>
                  <span>{p.label}</span>
                  <span className="pulse-count">{p.count}×</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="badge-wall">
          <h3 className="test-block-title">Badges</h3>
          <div className="badge-grid">
            {BADGES.map((b) => {
              const on = earned.has(b.id);
              return (
                <div key={b.id} className={on ? "badge-card is-on" : "badge-card"}>
                  <strong>{b.name}</strong>
                  <p>{b.blurb}</p>
                  <span>{on ? "Unlocked" : "Locked"}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
