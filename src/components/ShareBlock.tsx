"use client";

import { useEffect, useMemo, useState } from "react";
import { SITE } from "@/lib/site";
import { resultNetworks, resultShareText } from "@/lib/share";
import { useSiteOrigin } from "@/lib/use-site-origin";
import { useShortLink } from "@/lib/short-link";

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

  const short = useShortLink(shareUrl, origin);
  // Once a short link exists it replaces the long one everywhere - the copy
  // button, the share sheet and every network - so the reader never sees the
  // long form again.
  const linkUrl = short.shortUrl ?? shareUrl;

  const shareText = useMemo(
    () => resultShareText(testTitle, resultLabel, linkUrl),
    [testTitle, resultLabel, linkUrl]
  );

  const networks = useMemo(
    () => resultNetworks(linkUrl, testTitle, resultLabel),
    [linkUrl, testTitle, resultLabel]
  );

  function flash(msg: string) {
    setStatus(msg);
    setTimeout(() => setStatus(null), 2500);
  }

  async function handleCopyLink() {
    flash((await copyText(linkUrl)) ? "Link copied" : "Couldn't copy - select the link above");
  }

  async function handleShorten() {
    const url = await short.shorten();
    if (url) flash("Short link ready");
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `My ${testTitle} results · ${SITE.name}`,
          text: shareText,
          url: linkUrl,
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
      <p className="share-url" title={linkUrl}>
        {linkUrl}
      </p>

      {!short.shortUrl && (
        <button
          type="button"
          onClick={handleShorten}
          disabled={short.pending}
          className="share-btn share-btn-outline"
          style={{ width: "100%", marginBottom: 10 }}
        >
          {short.pending ? "Shortening…" : "Make it a short link"}
        </button>
      )}
      {/* Said before the button is pressed, not after. Everywhere else on this
          page the result never leaves the device; a short link is the one
          thing that changes that, so it is opt-in and labelled. */}
      {!short.shortUrl && (
        <p className="share-note" style={{ marginTop: -4, marginBottom: 12 }}>
          A short link stores this result on our server so the code can point
          back to it. The long link below never does.
        </p>
      )}
      {short.error && <p className="share-status">{short.error}</p>}

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
