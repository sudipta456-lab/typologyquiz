/**
 * Builds the answer tiles for one fool-your-friends question:
 * the truth + the 2 stock decoys + every contributor's fake, merged
 * case-insensitively so the board never shows duplicate text.
 *
 * Merge rules:
 * - A fake that matches the TRUTH is dropped (a contributor who
 *   accidentally writes the real answer fools nobody with it, and the
 *   friend who picks that tile still earns the point).
 * - A fake that matches a decoy or another fake merges into that tile;
 *   all matching contributors share the fool credit if it gets picked.
 *
 * Tile counts: 4 with one contributor, up to 6 with three.
 */

import type { FoolQuestion } from "./questions";
import type { FoolContributor } from "./codec";

export type FoolTile = {
  text: string;
  isTruth: boolean;
  /** Indices into payload.c of contributors whose fake this tile carries. */
  by: number[];
};

function norm(s: string): string {
  return s.replace(/\s+/g, " ").trim().toLowerCase();
}

export function buildTiles(
  question: FoolQuestion,
  contributors: FoolContributor[],
  questionIndex: number
): FoolTile[] {
  const tiles: FoolTile[] = [
    { text: question.truth, isTruth: true, by: [] },
    { text: question.decoys[0], isTruth: false, by: [] },
    { text: question.decoys[1], isTruth: false, by: [] },
  ];
  contributors.forEach((contributor, ci) => {
    const fake = contributor.f[questionIndex];
    if (!fake) return;
    const key = norm(fake);
    const existing = tiles.find((t) => norm(t.text) === key);
    if (existing) {
      if (!existing.isTruth) existing.by.push(ci);
      return;
    }
    tiles.push({ text: fake, isTruth: false, by: [ci] });
  });
  return tiles;
}

/** Fisher-Yates, returns a new array; call once per question and keep it. */
export function shuffleTiles(tiles: FoolTile[]): FoolTile[] {
  const out = [...tiles];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
