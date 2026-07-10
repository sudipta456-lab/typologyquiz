/** Daily question, streaks, badges, local community pulse */

export type BadgeId =
  | "first_peel"
  | "triple"
  | "friend_specialist"
  | "brain_day"
  | "week_streak"
  | "room_starter"
  | "share_card"
  | "comparer";

export type BadgeDef = {
  id: BadgeId;
  name: string;
  blurb: string;
};

export const BADGES: BadgeDef[] = [
  { id: "first_peel", name: "Onion peeler", blurb: "Finished your first full test" },
  { id: "triple", name: "Triple threat", blurb: "Completed 3 different tests" },
  { id: "friend_specialist", name: "Group chat scholar", blurb: "Finished Friend Role + Social Battery" },
  { id: "brain_day", name: "Brain day", blurb: "Finished a thinking or perception test" },
  { id: "week_streak", name: "Seven-day curious", blurb: "Hit a 7-day daily streak" },
  { id: "room_starter", name: "Room host", blurb: "Created or joined a room" },
  { id: "share_card", name: "Poster child", blurb: "Downloaded a share card" },
  { id: "comparer", name: "VS mode", blurb: "Used friend compare" },
];

type GameState = {
  completedSlugs: string[];
  typeCounts: Record<string, number>;
  testCounts: Record<string, number>;
  streak: number;
  bestStreak: number;
  lastDailyDate: string | null;
  lastActiveDate: string | null;
  dailyAnswers: number;
  badges: BadgeId[];
  totalCompletions: number;
};

const KEY = "typologyquiz_game_v1";

function todayKey(): string {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function empty(): GameState {
  return {
    completedSlugs: [],
    typeCounts: {},
    testCounts: {},
    streak: 0,
    bestStreak: 0,
    lastDailyDate: null,
    lastActiveDate: null,
    dailyAnswers: 0,
    badges: [],
    totalCompletions: 0,
  };
}

export function loadGame(): GameState {
  if (typeof window === "undefined") return empty();
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return empty();
    return { ...empty(), ...JSON.parse(raw) };
  } catch {
    return empty();
  }
}

function saveGame(state: GameState) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
}

function dayDiff(a: string, b: string): number {
  const da = new Date(a + "T12:00:00");
  const db = new Date(b + "T12:00:00");
  return Math.round((db.getTime() - da.getTime()) / 86400000);
}

function unlock(state: GameState, id: BadgeId): GameState {
  if (state.badges.includes(id)) return state;
  return { ...state, badges: [...state.badges, id] };
}

export function recordTestComplete(opts: {
  slug: string;
  typeLabel?: string;
  category?: string;
}): { state: GameState; newBadges: BadgeId[] } {
  const before = loadGame();
  const today = todayKey();
  let state = { ...before };
  const newBadges: BadgeId[] = [];

  if (!state.completedSlugs.includes(opts.slug)) {
    state.completedSlugs = [...state.completedSlugs, opts.slug];
  }
  state.totalCompletions += 1;
  state.testCounts[opts.slug] = (state.testCounts[opts.slug] || 0) + 1;
  if (opts.typeLabel) {
    state.typeCounts[opts.typeLabel] = (state.typeCounts[opts.typeLabel] || 0) + 1;
  }

  // Streak on any completion day
  if (state.lastActiveDate !== today) {
    if (state.lastActiveDate && dayDiff(state.lastActiveDate, today) === 1) {
      state.streak += 1;
    } else if (state.lastActiveDate && dayDiff(state.lastActiveDate, today) === 0) {
      /* same day */
    } else {
      state.streak = 1;
    }
    state.lastActiveDate = today;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  }

  const mark = (id: BadgeId) => {
    if (!state.badges.includes(id) && !newBadges.includes(id)) {
      state = unlock(state, id);
      newBadges.push(id);
    }
  };

  if (state.totalCompletions >= 1) mark("first_peel");
  if (state.completedSlugs.length >= 3) mark("triple");
  if (
    state.completedSlugs.includes("friend-role") &&
    state.completedSlugs.includes("social-battery")
  ) {
    mark("friend_specialist");
  }
  if (
    ["crt-7", "vviq", "8values", "mini-ipip"].some((s) => state.completedSlugs.includes(s))
  ) {
    mark("brain_day");
  }
  if (state.streak >= 7 || state.bestStreak >= 7) mark("week_streak");

  saveGame(state);
  return { state, newBadges };
}

export function recordDailyAnswer(): GameState {
  const today = todayKey();
  let state = loadGame();
  if (state.lastDailyDate === today) {
    state.dailyAnswers += 1;
  } else {
    if (state.lastDailyDate && dayDiff(state.lastDailyDate, today) === 1) {
      state.streak += 1;
    } else if (!state.lastDailyDate || dayDiff(state.lastDailyDate, today) !== 0) {
      if (state.lastActiveDate === today) {
        /* keep streak */
      } else if (state.lastActiveDate && dayDiff(state.lastActiveDate, today) === 1) {
        state.streak += 1;
      } else {
        state.streak = Math.max(1, state.streak || 1);
      }
    }
    state.lastDailyDate = today;
    state.dailyAnswers = 1;
    state.lastActiveDate = today;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  }
  if (state.streak >= 7) {
    state = unlock(state, "week_streak");
  }
  saveGame(state);
  return state;
}

export function recordBadgeEvent(id: BadgeId): BadgeId | null {
  let state = loadGame();
  if (state.badges.includes(id)) return null;
  state = unlock(state, id);
  saveGame(state);
  return id;
}

export function communityPulse(): { label: string; count: number }[] {
  const state = loadGame();
  return Object.entries(state.typeCounts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);
}

export function getDailySeed(): number {
  const t = todayKey();
  let h = 0;
  for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) >>> 0;
  return h;
}
