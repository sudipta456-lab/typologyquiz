"use client";

import { useState, useSyncExternalStore } from "react";
import { SITE } from "@/lib/site";

interface Props {
  heading: string;
  subheading: string;
  /** The full link to share */
  url: string;
  /** Message wrapped around the link for share sheets and pastes */
  shareText: string;
  /** Native share sheet title */
  shareTitle: string;
}

/** Copy with a real failure signal (same approach as ShareBlock). */
async function copyText(text: string): Promise<boolean> {
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

const noopSubscribe = () => () => {};

/** Copy link + native share for friend-quiz links (quiz links and score-back links). */
export function FriendShareBlock({ heading, subheading, url, shareText, shareTitle }: Props) {
  const [status, setStatus] = useState<string | null>(null);
  // False during prerender, real capability after hydration; no effect needed
  // and no hydration mismatch (the server snapshot is what the HTML shows).
  const canNativeShare = useSyncExternalStore(
    noopSubscribe,
    () => !!navigator.share,
    () => false
  );

  function flash(msg: string) {
    setStatus(msg);
    setTimeout(() => setStatus(null), 2500);
  }

  async function handleCopyLink() {
    flash((await copyText(url)) ? "Link copied" : "Couldn't copy - select the link above");
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url });
        return;
      } catch {
        /* cancelled or failed - fall back to copying the message */
      }
    }
    flash((await copyText(shareText)) ? "Message copied" : "Couldn't copy - select the text above");
  }

  return (
    <div className="share-block">
      <div className="share-block-header">
        <img src="/assets/typologyquiz-mark.svg" alt="" width={28} height={28} className="share-mark" />
        <div>
          <h3 className="share-title">{heading}</h3>
          <p className="share-subtitle">{subheading}</p>
        </div>
      </div>

      <p className="share-preview">{shareText}</p>
      <p className="share-url" title={url}>
        {url}
      </p>

      <div className="share-actions">
        <button type="button" onClick={handleCopyLink} className="share-btn share-btn-outline">
          {status === "Link copied" ? "Copied" : "Copy link"}
        </button>
        <button type="button" onClick={handleNativeShare} className="btn-primary share-btn">
          {canNativeShare ? "Share…" : "Copy message"}
        </button>
      </div>

      {status && <p className="share-status">{status}</p>}

      <p className="share-note">
        Everything lives inside the link itself, on {SITE.legalName}. No accounts, no server copy.
      </p>
    </div>
  );
}
