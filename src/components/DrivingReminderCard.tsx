"use client";

import { useId, useState } from "react";
import type { Jurisdiction } from "@/lib/driving/types";
import { downloadStudyReminder } from "@/lib/driving/reminder";
import { useSiteOrigin } from "@/lib/use-site-origin";

/**
 * Study reminders without an email address.
 *
 * The audience includes minors, so we deliberately collect nothing - the
 * reminder is an .ics the browser generates and hands straight to the
 * learner's own calendar. Nothing is transmitted, and there is no account.
 */
export function DrivingReminderCard({ jurisdiction }: { jurisdiction: Jurisdiction }) {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const origin = useSiteOrigin();
  const inputId = useId();

  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
    today.getDate()
  ).padStart(2, "0")}`;

  function handleDownload() {
    // Parse as local midnight. `new Date("2026-08-20")` is parsed as UTC and
    // lands on the previous day for anyone west of Greenwich.
    const parts = date.split("-").map((n) => Number.parseInt(n, 10));
    if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) return;
    const testDate = new Date(parts[0], parts[1] - 1, parts[2]);

    try {
      downloadStudyReminder({
        jurisdiction,
        testDate,
        url: `${origin}/driving/${jurisdiction.slug}/`,
      });
      setStatus("Downloaded - open the file to add it to your calendar.");
    } catch {
      setStatus("Your browser blocked the download. Try again, or use a different browser.");
    }
    setTimeout(() => setStatus(null), 6000);
  }

  return (
    <div
      className="report-panel"
      style={{ padding: "1.1rem 1.15rem", marginBottom: 20 }}
    >
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.05rem",
          fontWeight: 600,
          margin: "0 0 0.4rem",
          color: "var(--ink)",
        }}
      >
        Booked your test?
      </h2>
      <p
        style={{
          margin: "0 0 0.85rem",
          fontSize: "0.9rem",
          lineHeight: 1.6,
          color: "var(--ink-soft)",
        }}
      >
        Put it in your calendar with study nudges 7, 3 and 1 day before. It downloads
        straight to your device - no email, no signup, and nothing is sent anywhere.
      </p>

      <label
        htmlFor={inputId}
        style={{
          display: "block",
          fontFamily: "var(--font-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "var(--ink-mute)",
          marginBottom: "0.35rem",
        }}
      >
        Your test date
      </label>
      <input
        id={inputId}
        type="date"
        value={date}
        min={minDate}
        onChange={(e) => setDate(e.target.value)}
        style={{
          width: "100%",
          minHeight: 48,
          padding: "0.6rem 0.75rem",
          border: "1px solid var(--line)",
          borderRadius: "var(--radius)",
          background: "var(--white)",
          color: "var(--ink)",
          fontFamily: "inherit",
          fontSize: "1rem",
          marginBottom: "0.6rem",
        }}
      />
      <button
        type="button"
        onClick={handleDownload}
        disabled={!date}
        className="btn-primary"
        style={{ width: "100%", opacity: date ? 1 : 0.5 }}
      >
        Add reminders to my calendar
      </button>

      {status && (
        <p
          style={{
            margin: "0.6rem 0 0",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            color: "var(--accent)",
            lineHeight: 1.5,
          }}
        >
          {status}
        </p>
      )}
    </div>
  );
}
