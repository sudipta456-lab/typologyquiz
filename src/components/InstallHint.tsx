"use client";

import { useEffect, useState } from "react";

/**
 * "Add to home screen" hint.
 *
 * The retention lever for a two-week study run, without an account or a push
 * subscription. Chrome-family browsers fire `beforeinstallprompt`, which we
 * stash and replay on tap. iOS Safari never fires it, so there we fall back to
 * a one-line instruction. Anywhere else - or once installed, or once dismissed
 * - this renders nothing at all rather than a button that does nothing.
 */

const DISMISS_KEY = "tq_install_hint_v1";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isStandalone(): boolean {
  if (typeof window === "undefined") return false;
  if (window.matchMedia?.("(display-mode: standalone)").matches) return true;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return nav.standalone === true;
}

function isIOS(): boolean {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  // iPadOS 13+ reports as Macintosh, so check for touch as well.
  return /iPad|iPhone|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
}

export function InstallHint() {
  const [mode, setMode] = useState<"none" | "prompt" | "ios">("none");
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      /* storage blocked - treat as not dismissed */
    }
    if (dismissed || isStandalone()) return;

    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setMode("prompt");
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    // iOS never fires the event, so offer the manual route instead.
    if (isIOS()) setMode("ios");

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  function dismiss() {
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
    setMode("none");
  }

  async function install() {
    if (!deferred) return;
    try {
      await deferred.prompt();
      await deferred.userChoice;
    } catch {
      /* the browser refused to replay the prompt - nothing to recover */
    }
    dismiss();
  }

  if (mode === "none") return null;

  return (
    <div
      className="report-panel"
      style={{
        padding: "0.8rem 1rem",
        marginBottom: 20,
        background: "var(--paper)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          margin: 0,
          flex: "1 1 12rem",
          fontSize: "0.85rem",
          lineHeight: 1.5,
          color: "var(--ink-soft)",
        }}
      >
        {mode === "prompt" ? (
          <>
            <strong style={{ color: "var(--ink)" }}>Add this to your home screen</strong> so
            practice is one tap away. No account, no notifications.
          </>
        ) : (
          <>
            <strong style={{ color: "var(--ink)" }}>Add to your home screen:</strong> tap
            Share, then &ldquo;Add to Home Screen&rdquo;.
          </>
        )}
      </p>
      <div style={{ display: "flex", gap: "0.4rem", flexShrink: 0 }}>
        {mode === "prompt" && (
          <button
            type="button"
            onClick={install}
            className="btn-primary"
            style={{ minHeight: 40, padding: "0.45rem 0.9rem", fontSize: "0.85rem" }}
          >
            Add
          </button>
        )}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss install hint"
          style={{
            minHeight: 40,
            minWidth: 40,
            padding: "0.45rem 0.7rem",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            background: "transparent",
            color: "var(--ink-mute)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.8rem",
            cursor: "pointer",
          }}
        >
          Not now
        </button>
      </div>
    </div>
  );
}
