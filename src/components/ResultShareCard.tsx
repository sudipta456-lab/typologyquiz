"use client";

import { useEffect, useRef, useState } from "react";
import { drawResultCard, downloadCanvas, type CardPayload } from "@/lib/result-card";
import { loadProfile } from "@/lib/profile";

export function ResultShareCard(props: CardPayload) {
  const storyRef = useRef<HTMLCanvasElement>(null);
  const squareRef = useRef<HTMLCanvasElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const profile = loadProfile();
    const payload: CardPayload = {
      ...props,
      displayName: props.displayName || profile?.displayName,
    };
    if (storyRef.current) drawResultCard(storyRef.current, payload, "story");
    if (squareRef.current) drawResultCard(squareRef.current, payload, "square");
    setReady(true);
  }, [props]);

  function saveStory() {
    if (!storyRef.current) return;
    downloadCanvas(storyRef.current, `typologyquiz-story.png`);
  }

  function saveSquare() {
    if (!squareRef.current) return;
    downloadCanvas(squareRef.current, `typologyquiz-post.png`);
  }

  return (
    <div className="result-card-block">
      <div className="result-card-header">
        <h3 className="share-title">Share card</h3>
        <p className="share-subtitle">Story (9:16) or feed (1:1) PNG</p>
      </div>
      <div className="result-card-previews">
        <div className="result-card-preview story">
          <canvas ref={storyRef} className="result-card-canvas" />
          <span className="result-card-format">Story</span>
        </div>
        <div className="result-card-preview square">
          <canvas ref={squareRef} className="result-card-canvas" />
          <span className="result-card-format">Post</span>
        </div>
      </div>
      <div className="share-actions" style={{ padding: "0.85rem 1.15rem 1rem" }}>
        <button type="button" className="share-btn share-btn-outline" onClick={saveStory} disabled={!ready}>
          Download story
        </button>
        <button type="button" className="btn-primary share-btn" onClick={saveSquare} disabled={!ready}>
          Download post
        </button>
      </div>
      <p className="share-note">
        Drop it in TikTok, IG Stories, Discord, or Snap. No watermark spam, just your type + link vibe.
      </p>
    </div>
  );
}
