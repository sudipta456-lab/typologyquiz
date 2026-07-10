"use client";

import { useMemo, useState } from "react";
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

export function ShareBlock({ testSlug, testTitle, encoded, resultLabel }: Props) {
  const [status, setStatus] = useState<string | null>(null);
  const origin = useSiteOrigin();

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

  function handleCopyLink() {
    navigator.clipboard.writeText(shareUrl).then(() => flash("Link copied"));
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
        /* cancelled */
      }
    }
    navigator.clipboard.writeText(shareText).then(() => flash("Message copied"));
  }

  function handleNetwork(n: (typeof networks)[number]) {
    if (n.copyText) {
      navigator.clipboard.writeText(n.copyText).then(() => flash(n.hint || "Copied"));
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
          Share…
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
