"use client";

import { useState, useSyncExternalStore } from "react";
import { FOLLOW_CHANGED, isSeriesFollowed, saveSeriesFollow, seriesCalendar } from "@/lib/editorial-social/follow";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(FOLLOW_CHANGED, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(FOLLOW_CHANGED, onChange);
  };
}

export default function SeriesFollow({ seriesId, label, cadence }: { seriesId: string; label: string; cadence?: string }) {
  const followed = useSyncExternalStore(subscribe, () => isSeriesFollowed(seriesId), () => false);
  const [message, setMessage] = useState("");
  function toggle() {
    const saved = saveSeriesFollow(seriesId, !followed);
    setMessage(saved ? (followed ? "Series unfollowed on this browser. Any imported calendar reminder must be removed in your calendar app." : "Series followed on this browser.") : "This browser could not save your follow preference. You can still download a calendar reminder if available.");
  }
  function download() {
    if (!cadence) return;
    try {
      const blob = new Blob([seriesCalendar(seriesId, label, cadence)], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url; link.download = `${seriesId}-reminder.ics`;
      document.body.appendChild(link); link.click(); link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setMessage("Calendar file downloaded. Open it in your calendar app to add the reminder; alerts depend on that app’s settings.");
    } catch { setMessage("The calendar download did not work. Please try again."); }
  }
  return <div style={{ marginTop: 16 }}>
    <button type="button" className="btn-outline" aria-pressed={followed} aria-label={`Follow ${label} on this browser`} onClick={toggle}>{followed ? "Following ✓" : "Follow series"}</button>
    <p style={{ fontSize: "0.85rem", marginTop: 8 }}>Saved in this browser only. No push or email notifications.</p>
    {cadence && <>
      <button type="button" className="text-link" onClick={download}>Download {cadence} calendar reminder</button>
      <p style={{ fontSize: "0.85rem" }}>An all-day weekly check-in, starting this or next {cadence}. New editions depend on editorial review. Manage imported reminders in your calendar app.</p>
    </>}
    <p role="status" style={{ fontSize: "0.85rem" }}>{message}</p>
  </div>;
}
