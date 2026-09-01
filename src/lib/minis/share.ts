/**
 * Share text for mini results. Wordle-style: score and a no-spoiler track,
 * never the answers. Plain ASCII only (house rule: no emoji in copy).
 */

import type { MiniResult, MinisDayState } from "./store";

export const MINI_NAMES = {
  anagram: "Anagram",
  quickpick: "Quick Pick",
  thisorthat: "This or That",
} as const;

const SITE = "typologyquiz.com/daily";

export function shareLine(name: string, r: MiniResult): string {
  const track = r.track ? ` [${r.track}]` : "";
  return `Daily ${name} ${r.score}/${r.total}${track}\n${SITE}`;
}

export function perfectDayLine(day: MinisDayState): string {
  const a = day.results.anagram;
  const q = day.results.quickpick;
  const t = day.results.thisorthat;
  const parts = [
    a ? `Anagram ${a.score}/${a.total}` : null,
    q ? `Quick Pick ${q.score}/${q.total}` : null,
    t ? `This or That ${t.score}/${t.total}` : null,
  ].filter(Boolean);
  return `Perfect day: all 3 daily minis done\n${parts.join(" / ")}\n${SITE}`;
}
