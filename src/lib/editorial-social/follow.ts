import { trackAnalyticsEvent } from "../analytics.ts";

const prefix = "tq-series-follow-v1:";
export const FOLLOW_CHANGED = "tq-series-follow-changed";
const validId = (id: string) => typeof id === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id) && id.length <= 100;

export function isSeriesFollowed(seriesId: string): boolean {
  if (!validId(seriesId)) return false;
  try {
    const raw = window.localStorage.getItem(prefix + seriesId);
    if (!raw || raw.length > 500) return false;
    const value = JSON.parse(raw);
    return value?.schema === 1 && value.seriesId === seriesId && value.followed === true;
  } catch { return false; }
}

export function saveSeriesFollow(seriesId: string, followed: boolean): boolean {
  if (!validId(seriesId) || typeof followed !== "boolean") return false;
  try {
    window.localStorage.setItem(prefix + seriesId, JSON.stringify({ schema: 1, seriesId, followed }));
  } catch { return false; }
  // Notify other controls in this tab as well as storage listeners in other tabs.
  window.dispatchEvent(new Event(FOLLOW_CHANGED));
  try {
    trackAnalyticsEvent("quiz_series_follow", { series_id: seriesId, followed });
  } catch { /* Optional analytics must not interrupt the control. */ }
  return true;
}

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayCodes = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
export function reminderCadence(seriesId: string, policy: { series: readonly string[]; cadence: string }): string | undefined {
  return policy.series.includes(seriesId) && weekdays.includes(policy.cadence) ? policy.cadence : undefined;
}
const dateOnly = (date: Date) => date.toISOString().slice(0, 10).replaceAll("-", "");
const escapeText = (text: string) => text.replaceAll("\\", "\\\\").replace(/\r\n|\r|\n/g, "\\n").replaceAll(";", "\\;").replaceAll(",", "\\,");

function foldLine(line: string): string {
  const encoder = new TextEncoder();
  let result = "", length = 0;
  for (const character of line) {
    const bytes = encoder.encode(character).length;
    if (length + bytes > 75) { result += "\r\n "; length = 1; }
    result += character; length += bytes;
  }
  return result;
}

/** All-day local-calendar reminder: cadence is a check-in day, not an air time or publication promise. */
export function seriesCalendar(seriesId: string, label: string, cadence: string, now = new Date()): string {
  const day = weekdays.indexOf(cadence);
  if (!validId(seriesId) || day < 0 || !Number.isFinite(now.getTime())) throw new Error("Invalid series reminder");
  const start = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
  start.setUTCDate(start.getUTCDate() + (day - start.getUTCDay() + 7) % 7);
  const end = new Date(start); end.setUTCDate(end.getUTCDate() + 1);
  const url = `https://typologyquiz.com/weekly/#series-${seriesId}`;
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//TypologyQuiz//Series reminders//EN", "CALSCALE:GREGORIAN", "BEGIN:VEVENT",
    `UID:series-${seriesId}@typologyquiz.com`, `DTSTAMP:${now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
    `DTSTART;VALUE=DATE:${dateOnly(start)}`, `DTEND;VALUE=DATE:${dateOnly(end)}`, `RRULE:FREQ=WEEKLY;BYDAY=${dayCodes[day]}`,
    `SUMMARY:${escapeText(`Check for ${label}`)}`,
    `DESCRIPTION:${escapeText(`Check the latest available edition. New editions appear only after editorial review; this reminder does not guarantee a new quiz. Calendar alerts are controlled by your calendar app. ${url}`)}`,
    `URL:${url}`, "TRANSP:TRANSPARENT", "END:VEVENT", "END:VCALENDAR", ""].map(foldLine).join("\r\n");
}
