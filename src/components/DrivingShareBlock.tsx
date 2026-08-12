"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/site";
import { useSiteOrigin } from "@/lib/use-site-origin";
import type { DrivingQuestion, Jurisdiction } from "@/lib/driving/types";
import { passedRealTestText, resultShareOptions } from "@/lib/driving/share";

/**
 * Copy that actually reports failure. navigator.clipboard is unavailable on
 * insecure origins and can reject when permission is denied; without a fallback
 * the tap silently did nothing and the user got no feedback at all.
 *
 * Exported because the take flow shares a stumper straight from the answer
 * feedback, and it needs the same behaviour.
 */
export async function copyDrivingText(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch {
    /* fall through to the legacy path */
  }
  try {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(ta);
    return ok;
  } catch {
    return false;
  }
}

/** Native share sheet where the browser has one, clipboard everywhere else. */
export async function shareDrivingText(
  title: string,
  text: string
): Promise<"shared" | "copied" | "failed"> {
  if (typeof navigator !== "undefined" && navigator.share) {
    try {
      await navigator.share({ title, text });
      return "shared";
    } catch {
      /* cancelled, or the sheet failed - fall through to copying */
    }
  }
  return (await copyDrivingText(text)) ? "copied" : "failed";
}

interface Props {
  jurisdiction: Jurisdiction;
  setTitle: string;
  correct: number;
  total: number;
  passed: boolean;
  /** A hard question they got wrong - the thing people actually forward. */
  hardestQuestion?: DrivingQuestion;
  /** Path to the take page for this set, e.g. "/driving/alberta/set-2/take/". */
  setPath: string;
}

/**
 * Sharing for a practice result.
 *
 * Nobody forwards "I got 22/30", so the score brag is not the lead - a hard
 * question is. The recipient can answer it inside the chat before they ever
 * click, which is the only mechanic in this category that actually travels.
 * On a failed attempt the score challenge is dropped entirely: asking someone
 * to broadcast a bad score is how you lose them.
 */
export function DrivingShareBlock({
  jurisdiction,
  setTitle,
  correct,
  total,
  passed,
  hardestQuestion,
  setPath,
}: Props) {
  const [status, setStatus] = useState<string | null>(null);
  const origin = useSiteOrigin();

  const setUrl = useMemo(() => `${origin}${setPath}`, [origin, setPath]);
  const siteUrl = useMemo(
    () => `${origin}/driving/${jurisdiction.slug}/`,
    [origin, jurisdiction.slug]
  );

  const options = useMemo(() => {
    const all = resultShareOptions({
      jurisdiction,
      setTitle,
      correct,
      total,
      passed,
      hardestQuestion,
      setUrl,
      siteUrl,
    });
    return passed ? all : all.filter((o) => o.key !== "challenge");
  }, [jurisdiction, setTitle, correct, total, passed, hardestQuestion, setUrl, siteUrl]);

  function flash(msg: string) {
    setStatus(msg);
    setTimeout(() => setStatus(null), 2800);
  }

  async function handleShare(label: string, text: string) {
    const outcome = await shareDrivingText(`${label} · ${SITE.name}`, text);
    if (outcome === "shared") return;
    flash(outcome === "copied" ? "Copied - paste it anywhere" : "Couldn't copy - select the text and copy it");
  }

  return (
    <div className="share-block">
      <div className="share-block-header">
        <img
          src="/assets/typologyquiz-mark.svg"
          alt=""
          width={28}
          height={28}
          className="share-mark"
        />
        <div>
          <h3 className="share-title">Pass it on</h3>
          <p className="share-subtitle">No signup, no ads · your answers stay on your device</p>
        </div>
      </div>

      <div role="list">
        {options.map((opt) => (
          <button
            key={opt.key}
            type="button"
            role="listitem"
            onClick={() => handleShare(opt.label, opt.text)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              width: "100%",
              minHeight: 60,
              padding: "0.85rem 1.15rem",
              background: "transparent",
              border: "none",
              borderBottom: "1px solid var(--line)",
              textAlign: "left",
              cursor: "pointer",
              font: "inherit",
              color: "var(--ink)",
            }}
          >
            <span style={{ flex: 1, minWidth: 0 }}>
              <span
                style={{
                  display: "block",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--ink)",
                }}
              >
                {opt.label}
              </span>
              <span
                style={{
                  display: "block",
                  fontSize: "0.8rem",
                  lineHeight: 1.45,
                  color: "var(--ink-mute)",
                  marginTop: 2,
                }}
              >
                {opt.hint}
              </span>
            </span>
            <span
              aria-hidden="true"
              style={{
                flexShrink: 0,
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "var(--ink-mute)",
              }}
            >
              SEND →
            </span>
          </button>
        ))}
      </div>

      {status && <p className="share-status">{status}</p>}

      {/* The one moment people genuinely want to broadcast. Small on purpose -
          easy to miss if it doesn't apply to you yet. */}
      <div
        style={{
          padding: "0.85rem 1.15rem",
          borderBottom: "1px solid var(--line)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.6rem",
          flexWrap: "wrap",
        }}
      >
        <span style={{ fontSize: "0.82rem", color: "var(--ink-mute)", lineHeight: 1.5 }}>
          Passed the real thing? Tell someone where you practised.
        </span>
        <button
          type="button"
          onClick={() =>
            handleShare("Passed my knowledge test", passedRealTestText(jurisdiction, siteUrl))
          }
          className="share-btn-outline"
          style={{ minHeight: 40, padding: "0.45rem 0.8rem", fontSize: "0.8rem" }}
        >
          Share that
        </button>
      </div>

      <p className="share-note">
        Nothing about your answers is uploaded, and there is no account to make.{" "}
        <a href={SITE.url} target="_blank" rel="noopener noreferrer">
          {SITE.legalName}
        </a>
      </p>
    </div>
  );
}
