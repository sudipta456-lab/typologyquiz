"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/site";
import { inviteNetworks, inviteText } from "@/lib/share";
import { useSiteOrigin } from "@/lib/use-site-origin";

type Variant = "section" | "compact";

export function InviteFriends({ variant = "section" }: { variant?: Variant }) {
  const [status, setStatus] = useState<string | null>(null);
  const origin = useSiteOrigin();
  const url = `${origin}/`;

  const networks = useMemo(() => inviteNetworks(url), [url]);
  const message = useMemo(() => inviteText(url), [url]);

  function flash(msg: string) {
    setStatus(msg);
    setTimeout(() => setStatus(null), 2500);
  }

  function handleCopy() {
    navigator.clipboard.writeText(message).then(() => flash("Invite copied"));
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${SITE.name}: free typology quizzes`,
          text: message,
          url,
        });
        return;
      } catch {
        /* cancelled */
      }
    }
    handleCopy();
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

  if (variant === "compact") {
    return (
      <div className="invite-compact">
        <p className="invite-compact-title">Invite friends</p>
        <div className="share-networks invite-networks">
          {networks.slice(0, 6).map((n) => (
            <button
              key={n.name}
              type="button"
              className="share-network"
              onClick={() => handleNetwork(n)}
            >
              {n.name}
            </button>
          ))}
        </div>
        {status && <p className="share-status">{status}</p>}
      </div>
    );
  }

  return (
    <section className="band band-cream">
      <div className="section invite-section">
        <div className="invite-copy">
          <span className="eyebrow">Bring the group</span>
          <h2 className="section-title tight">Challenge your friends</h2>
          <p className="section-lead">
            Send TypologyQuiz to your group chat. Compare friend roles, social batteries, and more.
            Free, no account, scored on their phone.
          </p>
          <div className="share-actions invite-actions">
            <button type="button" onClick={handleCopy} className="share-btn share-btn-outline">
              {status === "Invite copied" ? "Copied" : "Copy invite"}
            </button>
            <button type="button" onClick={handleNativeShare} className="btn-primary share-btn">
              Invite via…
            </button>
          </div>
          {status && status !== "Invite copied" && <p className="share-status">{status}</p>}
        </div>
        <div className="invite-panel">
          <p className="invite-panel-label">Share on</p>
          <div className="share-networks invite-networks">
            {networks.map((n) => (
              <button
                key={n.name}
                type="button"
                className="share-network"
                onClick={() => handleNetwork(n)}
              >
                {n.name}
              </button>
            ))}
          </div>
          <p className="invite-preview">{message}</p>
        </div>
      </div>
    </section>
  );
}
