/**
 * Local (device-only) state for the daily minis.
 *
 * - Mini results are keyed by the UTC dateKey, matching the puzzle rollover.
 * - activeDays / perfectDays are LOCAL date keys, matching the streak system
 *   in progress-game.ts, and feed the 7-day dot calendar.
 * - "Perfect day" = all three minis finished on the same UTC day. Stored as
 *   future badge fuel.
 */

export type MiniId = "anagram" | "quickpick" | "thisorthat";

export type MiniResult = {
  done: boolean;
  score: number;
  total: number;
  /** Compact no-spoiler track, e.g. "##." (hit hit miss). */
  track?: string;
  /** Extra detail for the result line (e.g. wrong tap count). */
  misses?: number;
};

export type MinisDayState = {
  dateKey: string;
  results: Partial<Record<MiniId, MiniResult>>;
  perfectDay: boolean;
};

type MinisStore = {
  v: 1;
  day: MinisDayState;
  /** Local date keys with any daily activity (minis or check-in). Trimmed. */
  activeDays: string[];
  /** UTC date keys where all three minis were finished. Trimmed. */
  perfectDays: string[];
};

const KEY = "typologyquiz_minis_v1";
const MAX_DAYS_KEPT = 60;

function emptyDay(dateKey: string): MinisDayState {
  return { dateKey, results: {}, perfectDay: false };
}

function emptyStore(dateKey: string): MinisStore {
  return { v: 1, day: emptyDay(dateKey), activeDays: [], perfectDays: [] };
}

/** Load the raw store without resetting the day (day key untouched). */
function loadRaw(): MinisStore {
  if (typeof window === "undefined") return emptyStore("");
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptyStore("");
    const parsed = JSON.parse(raw) as MinisStore;
    return { ...emptyStore(""), ...parsed };
  } catch {
    return emptyStore("");
  }
}

/** Load for a given UTC dateKey; a stale day rolls over to a fresh one. */
function load(dateKey: string): MinisStore {
  const store = loadRaw();
  if (store.day?.dateKey !== dateKey) {
    store.day = emptyDay(dateKey);
  }
  return store;
}

function save(store: MinisStore) {
  try {
    store.activeDays = store.activeDays.slice(-MAX_DAYS_KEPT);
    store.perfectDays = store.perfectDays.slice(-MAX_DAYS_KEPT);
    localStorage.setItem(KEY, JSON.stringify(store));
  } catch {
    /* private mode etc: play still works, nothing persists */
  }
}

export function loadMinisDay(dateKey: string): MinisDayState {
  return load(dateKey).day;
}

export function saveMiniResult(dateKey: string, id: MiniId, result: MiniResult): MinisDayState {
  const store = load(dateKey);
  store.day.results = { ...store.day.results, [id]: result };
  const all: MiniId[] = ["anagram", "quickpick", "thisorthat"];
  const perfect = all.every((m) => store.day.results[m]?.done);
  store.day.perfectDay = perfect;
  if (perfect && !store.perfectDays.includes(dateKey)) {
    store.perfectDays = [...store.perfectDays, dateKey];
  }
  save(store);
  return store.day;
}

/** Record local-date activity for the dot calendar. Leaves the mini day alone. */
export function markActiveDay(localDateKey: string) {
  const store = loadRaw();
  if (!store.activeDays.includes(localDateKey)) {
    store.activeDays = [...store.activeDays, localDateKey];
  }
  save(store);
}

export function getActiveDays(): string[] {
  return loadRaw().activeDays;
}

export function getPerfectDayCount(): number {
  return loadRaw().perfectDays.length;
}
