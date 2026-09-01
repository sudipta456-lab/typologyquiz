"use client";

import { useEffect, useRef } from "react";
import { downloadCanvas } from "@/lib/result-card";
import { drawAwardsCard, type AwardsCardPayload } from "@/lib/mostlikely/awards-card";

/** Downloadable PNG collage of the awards (story + post formats). */
export function AwardsCardBlock(props: AwardsCardPayload) {
  const storyRef = useRef<HTMLCanvasElement>(null);
  const squareRef = useRef<HTMLCanvasElement>(null);

  // Drawing to canvas is exactly the external-system sync effects are for;
  // no ready flag needed, the draw happens before any click can land.
  useEffect(() => {
    if (storyRef.current) drawAwardsCard(storyRef.current, props, "story");
    if (squareRef.current) drawAwardsCard(squareRef.current, props, "square");
  }, [props]);

  function saveStory() {
    if (!storyRef.current) return;
    downloadCanvas(storyRef.current, "most-likely-to-story.png");
  }

  function saveSquare() {
    if (!squareRef.current) return;
    downloadCanvas(squareRef.current, "most-likely-to-post.png");
  }

  return (
    <div className="result-card-block">
      <div className="result-card-header">
        <h3 className="share-title">Awards collage</h3>
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
        <button type="button" className="share-btn share-btn-outline" onClick={saveStory}>
          Download story
        </button>
        <button type="button" className="btn-primary share-btn" onClick={saveSquare}>
          Download post
        </button>
      </div>
      <p className="share-note">
        Names live only on this screen and in the image you download. Nothing is uploaded or saved.
      </p>
    </div>
  );
}
