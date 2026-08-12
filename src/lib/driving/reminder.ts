import type { Jurisdiction } from "./types";

// Study reminders without collecting anything.
//
// Someone with a booked test date genuinely wants a nudge - that's the whole
// re-engagement problem for this feature. The usual answer is "give us your
// email", which for a site used by minors means holding contact details for
// children, a consent regime, and a breach surface, all to send a reminder.
//
// A calendar file does the same job with none of it: the reminder lives in
// the user's own calendar, on their device, and we never learn who they are.
// Generated in the browser, downloaded directly - no server involved.

function pad(n: number): string {
  return String(n).padStart(2, "0");
}

/** iCalendar wants UTC basic format: 20260812T093000Z */
function toICSDate(d: Date): string {
  return (
    `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}` +
    `T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}00Z`
  );
}

/** Lines over 75 octets must be folded, or strict calendar clients choke. */
function fold(line: string): string {
  if (line.length <= 74) return line;
  const parts: string[] = [line.slice(0, 74)];
  let rest = line.slice(74);
  while (rest.length > 73) {
    parts.push(` ${rest.slice(0, 73)}`);
    rest = rest.slice(73);
  }
  if (rest) parts.push(` ${rest}`);
  return parts.join("\r\n");
}

function escapeText(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
}

export interface ReminderOptions {
  jurisdiction: Jurisdiction;
  /** The learner's real test date (local midnight is fine). */
  testDate: Date;
  /** Where to send them back to. */
  url: string;
  /** Study nudges before the test, in days. */
  leadDays?: number[];
}

/**
 * Build an .ics containing the test itself plus a few study nudges.
 *
 * Each nudge is a separate all-day event rather than one event with alarms,
 * because alarm support is wildly inconsistent across calendar apps while
 * plain events render everywhere.
 */
export function buildStudyReminderICS(opts: ReminderOptions): string {
  const { jurisdiction, testDate, url } = opts;
  const leadDays = opts.leadDays ?? [7, 3, 1];
  const stamp = toICSDate(new Date());

  const lines: string[] = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//TypologyQuiz//Driving Practice//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
  ];

  const addEvent = (uid: string, date: Date, summary: string, description: string) => {
    // All-day events use DATE values and a non-inclusive end.
    const start = new Date(date);
    start.setHours(9, 0, 0, 0);
    const end = new Date(start);
    end.setHours(9, 30, 0, 0);

    lines.push(
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${stamp}`,
      `DTSTART:${toICSDate(start)}`,
      `DTEND:${toICSDate(end)}`,
      fold(`SUMMARY:${escapeText(summary)}`),
      fold(`DESCRIPTION:${escapeText(description)}`),
      fold(`URL:${url}`),
      "END:VEVENT"
    );
  };

  const testName = `${jurisdiction.name} ${jurisdiction.licenceName} knowledge test`;

  for (const days of leadDays) {
    const d = new Date(testDate);
    d.setDate(d.getDate() - days);
    if (d.getTime() < Date.now() - 86_400_000) continue; // skip nudges already past

    addEvent(
      `tq-study-${days}-${testDate.getTime()}@typologyquiz.com`,
      d,
      `Study: ${jurisdiction.name} test in ${days} day${days === 1 ? "" : "s"}`,
      `Practice for your ${testName}. Drill your weak spots - the set rebuilds from the questions you have actually missed.\n\n${url}`
    );
  }

  addEvent(
    `tq-test-${testDate.getTime()}@typologyquiz.com`,
    testDate,
    `${testName}`,
    `Pass mark: ${jurisdiction.officialTest.passLabel}.\n\nLast-minute review: ${url}`
  );

  lines.push("END:VCALENDAR");
  return lines.join("\r\n");
}

/** Trigger the download. Browser-only; no network, nothing leaves the device. */
export function downloadStudyReminder(opts: ReminderOptions): void {
  const ics = buildStudyReminderICS(opts);
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = href;
  a.download = `${opts.jurisdiction.slug}-test-reminders.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(href), 1000);
}
