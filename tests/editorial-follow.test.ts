import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { FOLLOW_CHANGED, isSeriesFollowed, reminderCadence, saveSeriesFollow, seriesCalendar } from "../src/lib/editorial-social/follow.ts";

function withWindow(value: unknown, run: () => void) {
  const prior = Object.getOwnPropertyDescriptor(globalThis, "window");
  Object.defineProperty(globalThis, "window", { configurable: true, value });
  try { run(); } finally {
    if (prior) Object.defineProperty(globalThis, "window", prior);
    else Reflect.deleteProperty(globalThis, "window");
  }
}

test("follows tolerate absent, blocked, malformed, and mismatched storage", () => {
  assert.equal(isSeriesFollowed("news-world"), false);
  assert.equal(saveSeriesFollow("news-world", true), false);
  withWindow({ get localStorage() { throw new Error("Blocked"); } }, () => {
    assert.equal(isSeriesFollowed("news-world"), false);
    assert.equal(saveSeriesFollow("news-world", true), false);
  });
  for (const raw of [null, "{", "null", "[]", "true", "x".repeat(501), JSON.stringify({ schema: 2, seriesId: "news-world", followed: true }), JSON.stringify({ schema: 1, seriesId: "news-us", followed: true }), JSON.stringify({ schema: 1, seriesId: "news-world", followed: "true" })]) {
    withWindow({ localStorage: { getItem: () => raw } }, () => assert.equal(isSeriesFollowed("news-world"), false));
  }
});

test("follow and unfollow persist per series and notify controls without analytics dependency", () => {
  const values = new Map<string, string>();
  const events: string[] = [];
  const analytics: unknown[][] = [];
  withWindow({
    localStorage: { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value) },
    dispatchEvent: (event: Event) => events.push(event.type),
    gtag: (...args: unknown[]) => { analytics.push(args); throw new Error("Analytics blocked"); },
  }, () => {
    assert.equal(saveSeriesFollow("news-world", true), true);
    assert.equal(isSeriesFollowed("news-world"), true);
    assert.equal(isSeriesFollowed("news-us"), false);
    assert.equal(saveSeriesFollow("news-world", false), true);
    assert.equal(isSeriesFollowed("news-world"), false);
    assert.deepEqual(events, [FOLLOW_CHANGED, FOLLOW_CHANGED]);
    assert.deepEqual(analytics[0], ["event", "quiz_series_follow", { series_id: "news-world", followed: true }]);
    assert.equal(saveSeriesFollow("../bad", true), false);
    assert.equal(saveSeriesFollow("news-world", "yes" as unknown as boolean), false);
    assert.equal(values.size, 1);
  });
});

test("calendar cadence comes from policy; legacy North America has no reminder", () => {
  const policy = JSON.parse(readFileSync(new URL("../content/publication-policy.json", import.meta.url), "utf8"));
  assert.equal(reminderCadence("news-world", policy), "Thursday");
  assert.equal(reminderCadence("news-north-america", policy), undefined);
  assert.equal(reminderCadence("news-world", { series: ["news-world"], cadence: "bogus" }), undefined);
});

test("calendar uses current or next local Thursday and exclusive all-day end", () => {
  for (const [now, start, end] of [
    [new Date(2026, 8, 10, 23, 59), "20260910", "20260911"],
    [new Date(2026, 8, 11, 0, 1), "20260917", "20260918"],
    [new Date(2026, 11, 31, 12), "20261231", "20270101"],
    [new Date(2027, 0, 1, 12), "20270107", "20270108"],
  ] as const) {
    const calendar = seriesCalendar("news-world", "World news", "Thursday", now);
    assert.ok(calendar.includes(`DTSTART;VALUE=DATE:${start}\r\n`));
    assert.ok(calendar.includes(`DTEND;VALUE=DATE:${end}\r\n`));
    assert.ok(calendar.includes("RRULE:FREQ=WEEKLY;BYDAY=TH\r\n"));
    assert.ok(calendar.endsWith("END:VCALENDAR\r\n"));
    assert.equal(calendar.includes("BEGIN:VALARM"), false);
  }
});

test("calendar escapes text injection and folds UTF-8 without splitting characters", () => {
  const label = "世界🌎".repeat(30) + ",semi;slash\\\r\nBEGIN:VEVENT\nATTENDEE:evil";
  const calendar = seriesCalendar("news-world", label, "Thursday", new Date(2026, 8, 10));
  for (const line of calendar.split("\r\n")) assert.ok(Buffer.byteLength(line, "utf8") <= 75);
  const unfolded = calendar.replace(/\r\n /g, "");
  assert.equal(unfolded.split("\r\n").filter(line => line === "BEGIN:VEVENT").length, 1);
  assert.ok(unfolded.includes("世界🌎".repeat(30)));
  assert.ok(unfolded.includes("\\,semi\\;slash\\\\\\nBEGIN:VEVENT\\nATTENDEE:evil"));
  assert.ok(unfolded.includes("this reminder does not guarantee a new quiz"));
  assert.equal(unfolded.includes("\ufffd"), false);
});

test("calendar rejects unsafe identifiers, bad days, and invalid dates", () => {
  for (const id of ["", "news-world\r\nBEGIN:VEVENT", "../world", "a".repeat(101)]) assert.throws(() => seriesCalendar(id, "World", "Thursday"));
  assert.throws(() => seriesCalendar("news-world", "World", "Thursday\n"));
  assert.throws(() => seriesCalendar("news-world", "World", "Thursday", new Date("bad")));
});

test("repeated calendar exports retain the series UID", () => {
  const first = seriesCalendar("news-world", "World", "Thursday", new Date(2026, 8, 10));
  const later = seriesCalendar("news-world", "World", "Thursday", new Date(2026, 8, 18));
  const uid = (calendar: string) => calendar.split("\r\n").find(line => line.startsWith("UID:"));
  assert.equal(uid(first), "UID:series-news-world@typologyquiz.com");
  assert.equal(uid(later), uid(first));
});
