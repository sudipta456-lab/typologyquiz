"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BADGES, communityPulse, loadGame } from "@/lib/progress-game";

export function CommunityPulse() {
  const [pulse, setPulse] = useState<{ label: string; count: number }[]>([]);
  const [stats, setStats] = useState({ completions: 0, streak: 0, badges: 0 });

  useEffect(() => {
    const g = loadGame();
    setPulse(communityPulse());
    setStats({
      completions: g.totalCompletions,
      streak: g.streak,
      badges: g.badges.length,
    });
  }, []);

  const earned = new Set(loadGame().badges);

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
