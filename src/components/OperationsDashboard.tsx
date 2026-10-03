"use client";

import { useCallback, useEffect, useState } from "react";
import styles from "./OperationsDashboard.module.css";

type Role = {
  id: string;
  name: string;
  cadence: string;
  status: string;
  updatedAt: string | null;
  summary: string;
  nextRun: string | null;
};

type Dashboard = {
  generatedAt: string | null;
  target: string;
  totals: Record<string, number>;
  roles: Role[];
};

const EMPTY: Dashboard = { generatedAt: null, target: "One qualified opportunity per 24 hours", totals: {}, roles: [] };

function formatTime(value: string | null) {
  if (!value) return "Not reported yet";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
}

export function OperationsDashboard() {
  const [dashboard, setDashboard] = useState<Dashboard>(EMPTY);
  const [state, setState] = useState<"loading" | "ready" | "error">("loading");

  const load = useCallback(async () => {
    setState("loading");
    try {
      const response = await fetch("/api/ops/status", { cache: "no-store" });
      if (!response.ok) throw new Error("status unavailable");
      const next = (await response.json()) as Dashboard;
      setDashboard(next);
      setState("ready");
    } catch {
      setState("error");
    }
  }, []);

  useEffect(() => {
    // Defer the initial fetch so this effect subscribes to an external source
    // rather than synchronously cascading a render during mount.
    const timer = window.setTimeout(() => void load(), 0);
    return () => window.clearTimeout(timer);
  }, [load]);

  return (
    <section className={styles.shell} aria-busy={state === "loading"}>
      <div className={styles.heading}>
        <div>
          <p className="eyebrow">Private workspace</p>
          <h1>Growth operations</h1>
          <p>{dashboard.target}</p>
        </div>
        <button type="button" className="btn-outline" onClick={() => void load()}>
          Refresh
        </button>
      </div>

      <p className={styles.timestamp}>
        {state === "error" ? "The live status feed is temporarily unavailable." : `Last refreshed: ${formatTime(dashboard.generatedAt)}`}
      </p>

      <div className={styles.metrics}>
        {[
          ["Qualified opportunities", dashboard.totals.qualifiedOpportunities ?? 0],
          ["Verified referral visits", dashboard.totals.referralVisits ?? 0],
          ["Quiz starts from referrals", dashboard.totals.referralQuizStarts ?? 0],
          ["Opt-in inquiries", dashboard.totals.optInInquiries ?? 0],
        ].map(([label, value]) => (
          <div className={styles.metric} key={String(label)}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>

      <div className={styles.roleGrid}>
        {dashboard.roles.map((role) => (
          <article className={styles.role} key={role.id}>
            <div className={styles.roleTopline}>
              <p>{role.cadence}</p>
              <span data-status={role.status.toLowerCase()}>{role.status}</span>
            </div>
            <h2>{role.name}</h2>
            <p className={styles.summary}>{role.summary || "Waiting for its first report."}</p>
            <dl>
              <div><dt>Last update</dt><dd>{formatTime(role.updatedAt)}</dd></div>
              <div><dt>Next run</dt><dd>{formatTime(role.nextRun)}</dd></div>
            </dl>
          </article>
        ))}
      </div>

      <p className={styles.note}>Counts are verified observations. A scheduled task, drafted message, or prepared post never appears as a completed action.</p>
    </section>
  );
}
