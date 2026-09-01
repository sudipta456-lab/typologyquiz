"use client";

import { COMPANIONS, nextCompanion } from "@/lib/companions";

/**
 * Companion collection for the account page. Presentational: the account page
 * owns the gems count and the picked id (both loaded after mount, so this
 * renders hydration-safe defaults on the server).
 */
export function Companions({
  gems,
  picked,
  onPick,
}: {
  gems: number;
  picked: string | null;
  onPick: (id: string) => void;
}) {
  const next = nextCompanion(gems);

  return (
    <div className="badge-wall" style={{ marginTop: 28 }}>
      <h2 className="test-block-title">Companions</h2>
      <p style={{ margin: "4px 0 14px", color: "var(--ink-mute, #666)", fontSize: "0.92rem" }}>
        You have {gems} gem{gems === 1 ? "" : "s"}. Earn more by finishing quizzes and dailies.
        {next
          ? ` ${next.name} joins you at ${next.threshold}.`
          : " The whole crew is here. Show-off."}
      </p>
      <div className="badge-grid">
        {COMPANIONS.map((c) => {
          const unlocked = gems >= c.threshold;
          const isPicked = unlocked && picked === c.id;
          return (
            <div
              key={c.id}
              className={unlocked ? "badge-card is-on" : "badge-card"}
              style={isPicked ? { outline: "2px solid var(--ink, #14141f)", outlineOffset: 2 } : undefined}
            >
              <div
                aria-hidden="true"
                style={{
                  width: 56,
                  height: 56,
                  marginBottom: 6,
                  filter: unlocked ? "none" : "grayscale(1) opacity(0.35)",
                }}
                dangerouslySetInnerHTML={{ __html: c.svg }}
              />
              <strong>{unlocked ? c.name : "???"}</strong>
              <p>{unlocked ? c.blurb : `Unlocks at ${c.threshold} gems.`}</p>
              {unlocked ? (
                <button
                  type="button"
                  className={isPicked ? "pref-switch is-on" : "pref-switch"}
                  onClick={() => onPick(c.id)}
                  aria-pressed={isPicked}
                >
                  {isPicked ? "Your buddy" : "Choose"}
                </button>
              ) : (
                <span>Locked</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
