import { SITE } from "./site";

export type ScoreLine = {
  key: string;
  label: string;
  score: number;
  /** Short plain-language level, e.g. "kinda high" */
  level: string;
};

/**
 * Result art for the card, in the same shape src/lib/result-art.ts returns.
 * Typed structurally (not imported) so this module stays presentational and
 * never pulls the art tables into the share-card bundle.
 *
 * - "icon": square art, drawn as a rounded inset beside the type label.
 * - "bg":   wide art, drawn as a full-bleed hero band behind the header.
 */
export type CardArt = {
  kind: "icon" | "bg";
  src: string;
};

export type CardPayload = {
  testTitle: string;
  typeLabel?: string;
  typeDescription?: string;
  scores?: Record<string, number>;
  /** Preferred: labeled scores with words for the number */
  scoreLines?: ScoreLine[];
  accent?: string;
  displayName?: string;
  /**
   * Optional result art. Omit it (or pass art that fails to load) and the card
   * draws the exact art-less layout it always has.
   */
  art?: CardArt | null;
};

/** Map 0-100 score to a few clear words */
export function scoreLevel(score: number): string {
  if (score <= 24) return "low";
  if (score <= 44) return "kinda low";
  if (score <= 55) return "mid";
  if (score <= 74) return "kinda high";
  return "high";
}

function titleCaseKey(key: string): string {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const BRAND = ["#0795EA", "#F9684D", "#07AD9C", "#F47A9E"];

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  const rr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + rr, y);
  ctx.arcTo(x + w, y, x + w, y + h, rr);
  ctx.arcTo(x + w, y + h, x, y + h, rr);
  ctx.arcTo(x, y + h, x, y, rr);
  ctx.arcTo(x, y, x + w, y, rr);
  ctx.closePath();
}

function drawMark(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  const gap = size * 0.06;
  const t = (size - gap) / 2;
  const r = size * 0.12;
  const positions = [
    [0, 0],
    [t + gap, 0],
    [0, t + gap],
    [t + gap, t + gap],
  ];
  positions.forEach(([dx, dy], i) => {
    ctx.fillStyle = BRAND[i];
    roundRect(ctx, x + dx, y + dy, t, t, r);
    ctx.fill();
  });
  const cx = x + size / 2;
  const cy = y + size / 2;
  ctx.strokeStyle = "#fff";
  ctx.lineWidth = size * 0.08;
  ctx.beginPath();
  ctx.arc(cx, cy, size * 0.14, 0, Math.PI * 2);
  ctx.stroke();
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
  maxLines: number
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const test = line ? `${line} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = w;
      if (lines.length >= maxLines) break;
    } else {
      line = test;
    }
  }
  if (line && lines.length < maxLines) lines.push(line);
  if (lines.length === maxLines) {
    const joined = lines.join(" ");
    if (text.length > joined.length) {
      lines[maxLines - 1] = lines[maxLines - 1].replace(/.{0,2}$/, "…");
    }
  }
  return lines;
}

// ---------------------------------------------------------------------------
// Image loading for card art.
//
// Every card that composites art follows the same contract: paint the art-less
// card synchronously first, then repaint once (and only once) the bitmap is
// decoded. A missing file, a slow network, a blocked request, or a browser with
// no Image constructor all resolve to null, which leaves the first paint
// standing. There is no state in which the reader sees a blank card or a broken
// image box.
// ---------------------------------------------------------------------------

/** Decoded bitmaps by src. A null entry is a remembered failure, not a miss. */
const artCache = new Map<string, HTMLImageElement | null>();
const artPending = new Map<string, Promise<HTMLImageElement | null>>();

/** How long to wait for a bitmap before giving up on this draw. */
const ART_TIMEOUT_MS = 6000;

/** Already-decoded art, or null. Lets a repaint stay synchronous. */
export function cachedCardArt(src: string): HTMLImageElement | null {
  return artCache.get(src) ?? null;
}

/**
 * Load and decode one piece of card art. Never rejects: every failure path
 * resolves to null so callers can fall back to the art-less layout.
 *
 * Cross-origin art is requested with CORS so the canvas stays exportable -
 * a tainted canvas would make toDataURL throw and break the download button,
 * which is worse than having no art at all.
 */
export function loadCardArt(src: string): Promise<HTMLImageElement | null> {
  if (!src) return Promise.resolve(null);
  const cached = artCache.get(src);
  if (cached !== undefined) return Promise.resolve(cached);
  const inFlight = artPending.get(src);
  if (inFlight) return inFlight;

  const task = new Promise<HTMLImageElement | null>((resolve) => {
    if (typeof window === "undefined" || typeof Image === "undefined") {
      resolve(null);
      return;
    }
    let settled = false;
    const finish = (img: HTMLImageElement | null) => {
      if (settled) return;
      settled = true;
      artCache.set(src, img);
      artPending.delete(src);
      resolve(img);
    };

    const timer = window.setTimeout(() => {
      // Do not cache a timeout as a failure: the bitmap may still be on its
      // way, and the next card draw should get a fresh chance at it.
      if (settled) return;
      settled = true;
      artPending.delete(src);
      resolve(null);
    }, ART_TIMEOUT_MS);

    const img = new Image();
    img.decoding = "async";
    try {
      const resolved = new URL(src, window.location.href);
      if (resolved.origin !== window.location.origin) img.crossOrigin = "anonymous";
    } catch {
      /* relative path that URL cannot parse - treat as same-origin */
    }

    const ok = () => {
      window.clearTimeout(timer);
      finish(img.naturalWidth > 0 && img.naturalHeight > 0 ? img : null);
    };
    const fail = () => {
      window.clearTimeout(timer);
      finish(null);
    };

    img.onload = ok;
    img.onerror = fail;
    img.src = src;

    // decode() resolves after the bitmap is ready to paint, which avoids the
    // first drawImage stalling the main thread. Older browsers without it fall
    // through to the load handlers above.
    if (typeof img.decode === "function") {
      img.decode().then(ok, () => {
        // A decode rejection on an image that did load (some browsers reject
        // for a detached element) should not lose the bitmap.
        if (img.complete && img.naturalWidth > 0) ok();
        else fail();
      });
    }
  });

  artPending.set(src, task);
  return task;
}

/** Cover-fit a bitmap into a box, centred, never stretched. */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  dx: number,
  dy: number,
  dw: number,
  dh: number
) {
  const iw = img.naturalWidth || img.width;
  const ih = img.naturalHeight || img.height;
  if (!iw || !ih) return;
  const scale = Math.max(dw / iw, dh / ih);
  const w = iw * scale;
  const h = ih * scale;
  ctx.drawImage(img, dx + (dw - w) / 2, dy + (dh - h) / 2, w, h);
}

/**
 * Full-bleed hero band behind the header.
 *
 * The band is composed offscreen so it can be faded to transparent at the
 * bottom edge: erasing the band into nothing means it melts into whatever the
 * page gradient happens to be at that height, instead of ending on a seam
 * where a hand-picked "matching" colour was a shade off. The contrast scrim is
 * baked in above the erase, so the darkening fades out with the image and no
 * grey bar is left behind on the plain background below.
 */
function drawHeroBand(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  W: number,
  bandH: number
): boolean {
  if (typeof document === "undefined") return false;
  try {
    const off = document.createElement("canvas");
    off.width = W;
    off.height = bandH;
    const o = off.getContext("2d");
    if (!o) return false;

    drawCover(o, img, 0, 0, W, bandH);

    const scrim = o.createLinearGradient(0, 0, 0, bandH);
    scrim.addColorStop(0, "rgba(10,12,18,0.66)");
    scrim.addColorStop(0.34, "rgba(10,12,18,0.26)");
    scrim.addColorStop(0.72, "rgba(10,12,18,0.52)");
    scrim.addColorStop(1, "rgba(10,12,18,0.74)");
    o.fillStyle = scrim;
    o.fillRect(0, 0, W, bandH);

    const fadeTop = bandH * 0.56;
    o.globalCompositeOperation = "destination-out";
    const fade = o.createLinearGradient(0, fadeTop, 0, bandH);
    fade.addColorStop(0, "rgba(0,0,0,0)");
    fade.addColorStop(1, "rgba(0,0,0,1)");
    o.fillStyle = fade;
    o.fillRect(0, fadeTop, W, bandH - fadeTop);
    o.globalCompositeOperation = "source-over";

    ctx.drawImage(off, 0, 0);
    return true;
  } catch {
    return false;
  }
}

/** Rounded-square art inset with a plate, a hairline ring, and a soft shadow. */
function drawArtInset(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  x: number,
  y: number,
  size: number
) {
  const r = Math.round(size * 0.16);

  ctx.save();
  ctx.shadowColor = "rgba(0,0,0,0.45)";
  ctx.shadowBlur = size * 0.09;
  ctx.shadowOffsetY = size * 0.03;
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  roundRect(ctx, x, y, size, size, r);
  ctx.fill();
  ctx.restore();

  ctx.save();
  roundRect(ctx, x, y, size, size, r);
  ctx.clip();
  drawCover(ctx, img, x, y, size, size);
  ctx.restore();

  ctx.save();
  ctx.strokeStyle = "rgba(255,255,255,0.18)";
  ctx.lineWidth = 2;
  roundRect(ctx, x + 1, y + 1, size - 2, size - 2, r - 1);
  ctx.stroke();
  ctx.restore();
}

/**
 * Draw tokens per canvas. A late art repaint only lands if no newer draw has
 * started on that canvas since, so a slow bitmap can never overwrite a card
 * that has already moved on to a different result.
 */
const drawTokens = new WeakMap<HTMLCanvasElement, number>();

function nextToken(canvas: HTMLCanvasElement): number {
  const token = (drawTokens.get(canvas) ?? 0) + 1;
  drawTokens.set(canvas, token);
  return token;
}

/**
 * Draw a story (9:16) or square share card.
 *
 * Synchronous, and complete on return: if the payload carries art that has not
 * been decoded yet, the art-less card is painted now and repainted once the
 * bitmap arrives. Await drawResultCardAsync instead when you need the finished
 * pixels (an export, a test).
 */
export function drawResultCard(
  canvas: HTMLCanvasElement,
  payload: CardPayload,
  format: "story" | "square" = "story"
) {
  void drawResultCardAsync(canvas, payload, format);
}

/** drawResultCard, resolved after any art has landed (or failed). */
export async function drawResultCardAsync(
  canvas: HTMLCanvasElement,
  payload: CardPayload,
  format: "story" | "square" = "story"
): Promise<void> {
  const token = nextToken(canvas);
  const src = payload.art?.src;
  const ready = src ? cachedCardArt(src) : null;

  paintResultCard(canvas, payload, format, ready);
  if (!src || ready) return;

  const img = await loadCardArt(src);
  // A newer draw has claimed this canvas; its paint wins.
  if (drawTokens.get(canvas) !== token) return;
  if (!img) return;
  paintResultCard(canvas, payload, format, img);
}

function paintResultCard(
  canvas: HTMLCanvasElement,
  payload: CardPayload,
  format: "story" | "square",
  artImg: HTMLImageElement | null
) {
  const W = 1080;
  const H = format === "story" ? 1920 : 1080;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const pad = 72;
  const contentW = W - pad * 2;
  // Reserved footer zone so scores never collide
  const footerH = format === "story" ? 200 : 160;
  const footerTop = H - footerH;

  const artKind = artImg ? payload.art?.kind : undefined;
  const heroImg = artKind === "bg" ? artImg : null;
  const iconImg = artKind === "icon" ? artImg : null;

  // Background
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#0f1118");
  g.addColorStop(0.55, "#161922");
  g.addColorStop(1, "#1a1530");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // Hero art band, under the brand strip and behind everything in the header
  const heroH = format === "story" ? 780 : 520;
  const heroDrawn = heroImg ? drawHeroBand(ctx, heroImg, W, heroH) : false;

  // Brand strip
  BRAND.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect((W / 4) * i, 0, W / 4, 16);
  });

  // Header text sits on the art when there is art, so it gets a soft shadow
  // to hold AA contrast over whatever the image happens to be doing there.
  const shadowOn = () => {
    if (!heroDrawn) return;
    ctx.shadowColor = "rgba(0,0,0,0.6)";
    ctx.shadowBlur = 24;
    ctx.shadowOffsetY = 2;
  };
  const shadowOff = () => {
    ctx.shadowColor = "transparent";
    ctx.shadowBlur = 0;
    ctx.shadowOffsetY = 0;
  };

  // Header mark + wordmark
  const markSize = format === "story" ? 100 : 80;
  const markY = format === "story" ? 72 : 56;
  drawMark(ctx, pad, markY, markSize);

  const textX = pad + markSize + 24;
  shadowOn();
  ctx.fillStyle = heroDrawn ? "rgba(255,255,255,0.72)" : "rgba(255,255,255,0.55)";
  ctx.font = `600 ${format === "story" ? 26 : 22}px Inter, system-ui, sans-serif`;
  ctx.fillText("TypologyQuiz", textX, markY + markSize * 0.42);
  ctx.fillStyle = heroDrawn ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.35)";
  ctx.font = `500 ${format === "story" ? 20 : 18}px IBM Plex Mono, monospace`;
  ctx.fillText(SITE.tagline, textX, markY + markSize * 0.72);
  shadowOff();

  // Icon art claims the right edge, so the header text wraps narrower.
  const iconSize = format === "story" ? 300 : 236;
  const textW = iconImg ? contentW - iconSize - 36 : contentW;

  // Measure the type label first: with a hero band the whole header block is
  // pinned to the bottom of the band, where the scrim is deepest.
  const label = payload.typeLabel || "Your results";
  const titleSize = format === "story" ? 72 : 56;
  ctx.font = `600 ${titleSize}px Georgia, 'Source Serif 4', serif`;
  // The icon inset takes a third of the width, so the label gets a third line
  // rather than being cut to an ellipsis at the same two.
  const labelLines = wrapText(ctx, label, textW, iconImg ? 3 : 2);
  const labelBlockH = labelLines.length * (titleSize + 8);

  // Test title
  let y = heroDrawn
    ? Math.max(
        markY + markSize + 40,
        heroH - labelBlockH - (format === "story" ? 118 : 84)
      )
    : markY + markSize + (format === "story" ? 64 : 40);

  shadowOn();
  ctx.fillStyle = heroDrawn ? "rgba(255,255,255,0.62)" : "rgba(255,255,255,0.45)";
  ctx.font = "600 22px IBM Plex Mono, monospace";
  ctx.fillText(payload.testTitle.toUpperCase().slice(0, 48), pad, y);

  // Icon inset, aligned to the top of the eyebrow + label block
  const iconY = y - (format === "story" ? 44 : 34);
  if (iconImg) {
    shadowOff();
    drawArtInset(ctx, iconImg, W - pad - iconSize, iconY, iconSize);
    shadowOn();
  }

  // Type label
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${titleSize}px Georgia, 'Source Serif 4', serif`;
  y += format === "story" ? 70 : 52;
  for (const line of labelLines) {
    ctx.fillText(line, pad, y);
    y += titleSize + 8;
  }
  shadowOff();

  // Description (tight on square)
  if (payload.typeDescription) {
    const descSize = format === "story" ? 30 : 24;
    const maxDescLines = format === "story" ? 4 : 2;
    ctx.fillStyle = "rgba(255,255,255,0.68)";
    ctx.font = `400 ${descSize}px Inter, system-ui, sans-serif`;
    const descLines = wrapText(ctx, payload.typeDescription, textW, maxDescLines);
    y += format === "story" ? 20 : 12;
    for (const line of descLines) {
      ctx.fillText(line, pad, y);
      y += descSize + 12;
    }
  }

  // Score chips with human labels + level words
  const scoreLines: ScoreLine[] =
    payload.scoreLines && payload.scoreLines.length
      ? [...payload.scoreLines].sort((a, b) => b.score - a.score)
      : payload.scores
        ? Object.entries(payload.scores)
            .map(([key, score]) => ({
              key,
              label: titleCaseKey(key),
              score,
              level: scoreLevel(score),
            }))
            .sort((a, b) => b.score - a.score)
        : [];

  if (scoreLines.length) {
    const maxChips = format === "story" ? 4 : 3;
    const chipH = format === "story" ? 70 : 58;
    const chipGap = format === "story" ? 12 : 10;
    const lines = scoreLines.slice(0, maxChips);

    const blockH = lines.length * chipH + (lines.length - 1) * chipGap;
    const minStart = y + (format === "story" ? 36 : 24);
    const maxStart = footerTop - 28 - blockH;
    // Chips clear the icon inset; a chip that would still land in the footer
    // zone drops out below, exactly as it always has.
    const artFloor = iconImg ? iconY + iconSize + 28 : 0;
    let startY = Math.max(
      markY + markSize + 40,
      artFloor,
      Math.min(minStart, maxStart)
    );
    // Art changes where the header ends, so the leftover room lands in a
    // different place than the art-less card plans for. Centre the chips in
    // that room rather than leaving one big void above or below them. The
    // art-less card keeps its original flow position untouched.
    if (artImg && maxStart > startY) startY = Math.min(maxStart, (startY + maxStart) / 2);

    lines.forEach((line, i) => {
      const chipY = startY + i * (chipH + chipGap);
      if (chipY + chipH > footerTop - 16) return;

      ctx.fillStyle = "rgba(255,255,255,0.08)";
      roundRect(ctx, pad, chipY, contentW, chipH, 10);
      ctx.fill();

      ctx.fillStyle = BRAND[i % BRAND.length];
      roundRect(ctx, pad, chipY, 10, chipH, 3);
      ctx.fill();

      const nameSize = format === "story" ? 26 : 22;
      const metaSize = format === "story" ? 20 : 17;

      // Trait name (left)
      ctx.fillStyle = "rgba(255,255,255,0.92)";
      ctx.font = `600 ${nameSize}px Inter, system-ui, sans-serif`;
      ctx.fillText(line.label, pad + 28, chipY + chipH * 0.58);

      // Score + words (right), e.g. "58  ·  kinda high"
      const right = `${line.score}  ·  ${line.level}`;
      ctx.fillStyle = "#fff";
      ctx.font = `600 ${metaSize}px IBM Plex Mono, monospace`;
      const tw = ctx.measureText(right).width;
      ctx.fillText(right, pad + contentW - tw - 24, chipY + chipH * 0.58);
    });
  }

  // Footer separator + text (always in reserved zone)
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad, footerTop);
  ctx.lineTo(W - pad, footerTop);
  ctx.stroke();

  let footY = footerTop + (format === "story" ? 48 : 40);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "500 22px IBM Plex Mono, monospace";
  ctx.fillText(SITE.url.replace(/^https?:\/\//, ""), pad, footY);

  if (payload.displayName) {
    footY += 36;
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.font = "600 24px Inter, system-ui, sans-serif";
    ctx.fillText(`@${payload.displayName}`, pad, footY);
  }

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = "500 20px Inter, system-ui, sans-serif";
  ctx.fillText("Free · Private · In-browser", pad, H - 40);
}

export function downloadCanvas(canvas: HTMLCanvasElement, filename: string) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = canvas.toDataURL("image/png");
  a.click();
}

// Shared canvas primitives, so the poster and the trivia card draw the same
// house frame instead of three drifting copies.
export {
  BRAND as CARD_BRAND,
  roundRect as cardRoundRect,
  drawMark as drawCardMark,
  wrapText as wrapCardText,
  drawCover as drawCardCover,
  drawArtInset as drawCardArtInset,
};
