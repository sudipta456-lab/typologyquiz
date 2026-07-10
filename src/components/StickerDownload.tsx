"use client";

import { useEffect, useRef, useState } from "react";
import { drawSticker, downloadSticker } from "@/lib/sticker";
import { recordBadgeEvent } from "@/lib/progress-game";

export function StickerDownload({
  typeLabel,
  testTitle,
  tagline,
  accent,
}: {
  typeLabel: string;
  testTitle: string;
  tagline?: string;
  accent?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ref.current || !typeLabel) return;
    drawSticker(ref.current, {
      typeLabel,
      testTitle,
      tagline: tagline?.slice(0, 90),
      accent,
    });
    setReady(true);
  }, [typeLabel, testTitle, tagline, accent]);

  function handleDownload() {
    if (!ref.current) return;
    downloadSticker(ref.current, "typologyquiz-sticker.png");
    recordBadgeEvent("share_card");
  }

  if (!typeLabel) return null;

  return (
    <div className="sticker-block">
      <div className="result-card-header">
        <h3 className="share-title">Sticker</h3>
        <p className="share-subtitle">Small square for Discord, IG, or chat</p>
      </div>
      <div className="sticker-preview-wrap">
        <canvas ref={ref} className="sticker-canvas" width={512} height={512} />
      </div>
      <div className="share-actions" style={{ padding: "0.75rem 1.15rem 1rem" }}>
        <button type="button" className="btn-primary share-btn" onClick={handleDownload} disabled={!ready}>
          Download sticker
        </button>
      </div>
    </div>
  );
}
