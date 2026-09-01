/**
 * Collectible companions, unlocked by gems (see progress-game.ts).
 *
 * Deliberately small and kind: no purchases, no loot boxes, no timers.
 * You earn gems by playing, companions show up when you cross a threshold,
 * and the one you pick keeps you company on your account page.
 *
 * SVGs are original hand-drawn-simple shapes in brand colors, no text.
 */

export type CompanionDef = {
  id: string;
  name: string;
  blurb: string;
  /** Gems needed to unlock. First companion is free at 0. */
  threshold: number;
  /** Inline SVG markup (no text, no scripts). Rendered at ~64px. */
  svg: string;
};

// Brand palette (matches CATEGORY_META hexes in types.ts).
const BLUE = "#3d6fad";
const TEAL = "#2a8f7a";
const GOLD = "#8a6d3b";
const ROSE = "#b85a72";
const GREEN = "#3d7a5a";
const INK = "#14141f";
const CREAM = "#f6f1e7";

export const COMPANIONS: CompanionDef[] = [
  {
    id: "pip",
    name: "Pip",
    blurb: "A small onion with one leaf and endless questions. Your first friend here.",
    threshold: 0,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M32 10 C33 15 36 17 36 20 L28 20 C28 17 31 15 32 10 Z" fill="${GREEN}"/><ellipse cx="32" cy="38" rx="17" ry="18" fill="${CREAM}" stroke="${INK}" stroke-width="2"/><path d="M32 21 C24 26 22 34 24 44" fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linecap="round"/><path d="M32 21 C40 26 42 34 40 44" fill="none" stroke="${GOLD}" stroke-width="1.6" stroke-linecap="round"/><circle cx="27" cy="38" r="2" fill="${INK}"/><circle cx="37" cy="38" r="2" fill="${INK}"/><path d="M28 45 Q32 48 36 45" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  {
    id: "wisp",
    name: "Wisp",
    blurb: "A cloud that drifts into the room whenever someone starts overthinking.",
    threshold: 10,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M14 40 a9 9 0 0 1 4 -17 a11 11 0 0 1 21 -4 a10 10 0 0 1 11 15 a8 8 0 0 1 -6 6 Z" fill="${BLUE}" opacity="0.9" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="28" cy="30" r="2" fill="${CREAM}"/><circle cx="38" cy="30" r="2" fill="${CREAM}"/><path d="M29 36 Q33 39 37 36" fill="none" stroke="${CREAM}" stroke-width="2" stroke-linecap="round"/><path d="M20 48 h6 M30 50 h8 M44 48 h4" stroke="${BLUE}" stroke-width="2.4" stroke-linecap="round" opacity="0.6"/></svg>`,
  },
  {
    id: "bolt",
    name: "Bolt",
    blurb: "Answers first, thinks later, apologizes never. The gut-instinct mascot.",
    threshold: 25,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M36 6 L20 34 L30 34 L26 58 L46 26 L34 26 Z" fill="${GOLD}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="31" cy="24" r="1.8" fill="${INK}"/><circle cx="38" cy="24" r="1.8" fill="${INK}"/><path d="M32 30 Q35 32 38 30" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  },
  {
    id: "clover",
    name: "Clover",
    blurb: "A four-leaf optimist. Statistically rare, emotionally inevitable.",
    threshold: 50,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><circle cx="32" cy="20" r="9" fill="${GREEN}" stroke="${INK}" stroke-width="2"/><circle cx="20" cy="32" r="9" fill="${GREEN}" stroke="${INK}" stroke-width="2"/><circle cx="44" cy="32" r="9" fill="${GREEN}" stroke="${INK}" stroke-width="2"/><circle cx="32" cy="44" r="9" fill="${GREEN}" stroke="${INK}" stroke-width="2"/><path d="M34 50 Q40 56 46 58" fill="none" stroke="${GREEN}" stroke-width="2.4" stroke-linecap="round"/><circle cx="28" cy="30" r="1.8" fill="${CREAM}"/><circle cx="36" cy="30" r="1.8" fill="${CREAM}"/><path d="M28 36 Q32 39 36 36" fill="none" stroke="${CREAM}" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  {
    id: "echo",
    name: "Echo",
    blurb: "A moth who reads over your shoulder and never spoils the result.",
    threshold: 80,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M30 30 C18 16 8 22 12 34 C15 43 24 44 30 38 Z" fill="${ROSE}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M34 30 C46 16 56 22 52 34 C49 43 40 44 34 38 Z" fill="${ROSE}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="22" cy="30" r="2.4" fill="${CREAM}"/><circle cx="42" cy="30" r="2.4" fill="${CREAM}"/><ellipse cx="32" cy="38" rx="4" ry="10" fill="${GOLD}" stroke="${INK}" stroke-width="2"/><path d="M29 26 Q27 20 24 18 M35 26 Q37 20 40 18" fill="none" stroke="${INK}" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  },
  {
    id: "nova",
    name: "Nova",
    blurb: "A star that shows up for every streak day like it bought tickets.",
    threshold: 120,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M32 6 L38 24 L57 24 L42 35 L48 53 L32 42 L16 53 L22 35 L7 24 L26 24 Z" fill="${GOLD}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><circle cx="28" cy="30" r="2" fill="${INK}"/><circle cx="36" cy="30" r="2" fill="${INK}"/><path d="M28 36 Q32 40 36 36" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round"/></svg>`,
  },
  {
    id: "root",
    name: "Root",
    blurb: "A carrot philosopher. Grows slowly, underground, on purpose.",
    threshold: 170,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M26 12 Q24 4 20 4 M32 12 Q32 3 32 2 M38 12 Q40 4 44 4" fill="none" stroke="${GREEN}" stroke-width="3" stroke-linecap="round"/><path d="M24 14 L40 14 L34 56 Q32 60 30 56 Z" fill="${ROSE}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M26 24 h10 M27 32 h8 M29 40 h5" stroke="${INK}" stroke-width="1.4" stroke-linecap="round" opacity="0.45"/><circle cx="29" cy="20" r="1.8" fill="${INK}"/><circle cx="35" cy="20" r="1.8" fill="${INK}"/></svg>`,
  },
  {
    id: "aurora",
    name: "Aurora",
    blurb: "A quiet moon fox. Only appears for the truly committed quiz scholar.",
    threshold: 230,
    svg: `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true"><path d="M44 8 A24 24 0 1 0 56 34 A18 18 0 0 1 44 8 Z" fill="${BLUE}" stroke="${INK}" stroke-width="2" stroke-linejoin="round"/><path d="M20 30 L24 20 L28 29 Z" fill="${TEAL}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><path d="M30 30 L34 21 L37 30 Z" fill="${TEAL}" stroke="${INK}" stroke-width="1.6" stroke-linejoin="round"/><circle cx="24" cy="36" r="2" fill="${CREAM}"/><circle cx="33" cy="36" r="2" fill="${CREAM}"/><path d="M26 42 Q29 45 32 42" fill="none" stroke="${CREAM}" stroke-width="1.8" stroke-linecap="round"/><circle cx="47" cy="14" r="1.6" fill="${GOLD}"/><circle cx="52" cy="22" r="1.2" fill="${GOLD}"/></svg>`,
  },
];

export function unlockedCompanions(gems: number): CompanionDef[] {
  return COMPANIONS.filter((c) => gems >= c.threshold);
}

export function getCompanion(id: string): CompanionDef | undefined {
  return COMPANIONS.find((c) => c.id === id);
}

/** Next locked companion, so the UI can say how far away it is. */
export function nextCompanion(gems: number): CompanionDef | undefined {
  return COMPANIONS.find((c) => gems < c.threshold);
}

const PICK_KEY = "typologyquiz_companion_v1";

export function loadCompanionPick(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(PICK_KEY);
  } catch {
    return null;
  }
}

export function saveCompanionPick(id: string) {
  try {
    localStorage.setItem(PICK_KEY, id);
  } catch {
    /* ignore */
  }
}
