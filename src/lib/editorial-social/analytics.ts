import type { Edition } from "../editorial/types";

type Event = "quiz_start" | "quiz_complete" | "quiz_share" | "quiz_challenge_open";

export function trackEditorialEvent(event: Event, edition: Edition): void {
  if (typeof window === "undefined") return;
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  // Keep analytics optional. No answers, share URLs, or player identity are sent.
  try {
    gtag?.("event", event, { edition_id: edition.id, series_id: edition.seriesId, edition_version: edition.version });
  } catch { /* Analytics must never interrupt play. */ }
}
