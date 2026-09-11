import { decodeResult } from "./results";

const KEY = "typologyquiz_reflections_v1";
const YEAR = 365 * 24 * 60 * 60 * 1000;
export const REFLECTION_LIMIT = 25;
export const FIT_OPTIONS = ["Mostly fits", "Mixed", "Mostly misses", "Not sure"] as const;
export const CLARITY_OPTIONS = ["Clear", "Some parts unclear", "Hard to understand"] as const;
export const OUTCOMES = ["Not reviewed yet", "Helped", "No noticeable change", "Did not help", "Did not try it"] as const;

export interface ReflectionEntry {
  id: string;
  encoded: string;
  createdAt: number;
  reviewAt: number;
  fit: string;
  clarity: string;
  fits: string;
  misses: string;
  action: string;
  outcome: string;
  review: string;
}

export function reflectionId(encoded: string): string {
  // A local lookup key, never a participant identifier or security token.
  let hash = 2166136261;
  for (const c of encoded) hash = Math.imul(hash ^ c.charCodeAt(0), 16777619);
  const result = decodeResult(encoded)?.result;
  return `${result?.testSlug ?? "invalid"}-${result?.completedAt ?? 0}-${(hash >>> 0).toString(36)}`;
}

export function newReflection(encoded: string, now = Date.now()): ReflectionEntry {
  const reviewDate = new Date(now);
  reviewDate.setDate(reviewDate.getDate() + 14);
  return { id: reflectionId(encoded), encoded, createdAt: now, reviewAt: reviewDate.getTime(),
    fit: "", clarity: "", fits: "", misses: "", action: "", outcome: OUTCOMES[0], review: "" };
}

function validEntry(value: unknown): value is ReflectionEntry {
  if (!value || typeof value !== "object") return false;
  const e = value as ReflectionEntry;
  return typeof e.encoded === "string" && !!decodeResult(e.encoded) && e.id === reflectionId(e.encoded) &&
    Number.isSafeInteger(e.createdAt) && e.createdAt > 0 && Number.isSafeInteger(e.reviewAt) &&
    e.reviewAt >= e.createdAt && (e.fit === "" || (FIT_OPTIONS as readonly string[]).includes(e.fit)) &&
    (e.clarity === "" || (CLARITY_OPTIONS as readonly string[]).includes(e.clarity)) &&
    (OUTCOMES as readonly string[]).includes(e.outcome) &&
    [e.fits, e.misses, e.action, e.review].every(t => typeof t === "string" && t.length <= 600);
}

export function loadReflections(now = Date.now()): ReflectionEntry[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
    if (!Array.isArray(raw)) return [];
    const kept = raw.filter(validEntry).filter(e => now - e.createdAt < YEAR && e.createdAt <= now).slice(0, REFLECTION_LIMIT);
    // Expire notes on the next visit; browsers do not run our code while closed.
    if (kept.length !== raw.length) localStorage.setItem(KEY, JSON.stringify(kept));
    return kept;
  } catch { return []; }
}

export function saveReflection(entry: ReflectionEntry): boolean {
  if (!validEntry(entry)) return false;
  try {
    const entries = loadReflections();
    const index = entries.findIndex(e => e.id === entry.id);
    if (index < 0 && entries.length >= REFLECTION_LIMIT) return false;
    if (index < 0) entries.unshift(entry); else entries[index] = entry;
    localStorage.setItem(KEY, JSON.stringify(entries));
    return true;
  } catch { return false; }
}

export function deleteReflection(id: string): boolean {
  try {
    localStorage.setItem(KEY, JSON.stringify(loadReflections().filter(e => e.id !== id)));
    return true;
  } catch { return false; }
}

export function reflectionCalendar(entry: ReflectionEntry): string {
  const day = new Date(entry.reviewAt);
  const ymd = `${day.getFullYear()}${String(day.getMonth() + 1).padStart(2, "0")}${String(day.getDate()).padStart(2, "0")}`;
  const stamp = new Date(entry.createdAt).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  // No result, trait label, personal note, or score leaves the browser in a reminder.
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//TypologyQuiz//Personal reflection//EN",
    "BEGIN:VEVENT", `UID:${entry.id}@typologyquiz.com`, `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${ymd}`, "SUMMARY:Review my reflection", "URL:https://typologyquiz.com/reflections/",
    "DESCRIPTION:Open TypologyQuiz in the browser where you saved your notes.",
    "END:VEVENT", "END:VCALENDAR", ""].join("\r\n");
}

export function downloadReflectionFile(content: string, name: string, type: string): void {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
