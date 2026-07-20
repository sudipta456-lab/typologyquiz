"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE } from "@/lib/site";
import { resultNetworks, resultShareText } from "@/lib/share";
import { useSiteOrigin } from "@/lib/use-site-origin";

interface Props {
  testSlug: string;
  testTitle: string;
  encoded: string;
  resultType: string;
  resultLabel?: string;
}

/**
 * Copy that actually reports failure. navigator.clipboard is unavailable on
 * insecure origins and can reject when permission is denied; without a fallback
 * the tap silently did nothing and the user got no feedback at all.
 */
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

export function ShareBlock({ testSlug, testTitle, encoded, resultLabel }: Props) {
  const [status, setStatus] = useState<string | null>(null);
  const [canNativeShare, setCanNativeShare] = useState(false);
  const origin = useSiteOrigin();

  // Checked after mount so the button label can't cause a hydration mismatch.
  useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);

  const shareUrl = useMemo(
    () => `${origin}/test/${testSlug}/results/?r=${encodeURIComponent(encoded)}`,
    [origin, testSlug, encoded]
  );

  const shareText = useMemo(
    () => resultShareText(testTitle, resultLabel, shareUrl),
    [testTitle, resultLabel, shareUrl]
  );

  const networks = useMemo(
    () => resultNetworks(shareUrl, testTitle, resultLabel),
    [shareUrl, testTitle, resultLabel]
  );

  function flash(msg: string) {
    setStatus(msg);
    setTimeout(() => setStatus(null), 2500);
  }

  async function handleCopyLink() {
    flash((await copyText(shareUrl)) ? "Link copied" : "Couldn't copy - select the link above");
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My ${testTitle} results · ${SITE.name}`,
          text: shareText,
          url: shareUrl,
        });
        return;
      } catch {
        /* cancelled, or the share sheet failed - fall back to copying */
      }
    }
    flash((await copyText(shareText)) ? "Message copied" : "Couldn't copy - select the text above");
  }

  async function handleNetwork(n: (typeof networks)[number]) {
    if (n.copyText) {
      const ok = await copyText(n.copyText);
      flash(ok ? n.hint || "Copied" : "Couldn't copy - select the text above");
      return;
    }
    if (n.href) {
      window.open(n.href, "_blank", "noopener,noreferrer");
    }
  }

  return (
    <div className="share-block">
      <div className="share-block-header">
        <img src="/assets/typologyquiz-mark.svg" alt="" width={28} height={28} className="share-mark" />
        <div>
          <h3 className="share-title">Send this report</h3>
          <p className="share-subtitle">Optional · answers stay on your device</p>
        </div>
      </div>

      <p className="share-preview">{shareText}</p>
      <p className="share-url" title={shareUrl}>
        {shareUrl}
      </p>

      <div className="share-actions">
        <button type="button" onClick={handleCopyLink} className="share-btn share-btn-outline">
          {status === "Link copied" ? "Copied" : "Copy link"}
        </button>
        <button type="button" onClick={handleNativeShare} className="btn-primary share-btn">
          {canNativeShare ? "Share…" : "Copy message"}
        </button>
      </div>

      <div className="share-networks" role="list">
        {networks.map((n) => (
          <button
            key={n.name}
            type="button"
            className="share-network"
            role="listitem"
            onClick={() => handleNetwork(n)}
          >
            {n.name}
          </button>
        ))}
      </div>

      {status && <p className="share-status">{status}</p>}

      <p className="share-note">
        The link opens this results page only, not your individual answers.{" "}
        <a href={SITE.url} target="_blank" rel="noopener noreferrer">
          {SITE.legalName}
        </a>
      </p>
    </div>
  );
}
