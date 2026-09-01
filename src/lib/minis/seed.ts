/**
 * Deterministic daily seeding for the minis.
 *
 * Everything a mini shows is a pure function of the UTC date, so two people
 * anywhere on Earth see the same puzzles on the same UTC day (the social hook).
 * Streaks, by contrast, stay on the device's local date via progress-game.ts.
 */

/** "2026-08-31" for the current UTC date. */
export function utcDateKey(d: Date = new Date()): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Whole days since the Unix epoch, in UTC. Stable across timezones. */
export function utcDayNumber(d: Date = new Date()): number {
  return Math.floor(d.getTime() / 86400000);
}

/** Day number for a "YYYY-MM-DD" key (interpreted as UTC midnight). */
export function dayNumberForKey(dateKey: string): number {
  return Math.floor(Date.parse(dateKey + "T00:00:00Z") / 86400000);
}

/** mulberry32: tiny, fast, good-enough PRNG. Same seed = same sequence. */
export function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Deterministic Fisher-Yates shuffle (returns a new array). */
export function seededShuffle<T>(arr: readonly T[], rand: () => number): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Deterministic index pick. */
export function pickIndex(length: number, rand: () => number): number {
  return Math.floor(rand() * length) % Math.max(1, length);
}

/** Deterministic pick of n distinct items. */
export function pickN<T>(arr: readonly T[], n: number, rand: () => number): T[] {
  return seededShuffle(arr, rand).slice(0, Math.min(n, arr.length));
}
