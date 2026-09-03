/**
 * Canvas group poster for rooms, following result-card.ts patterns
 * (dark gradient, brand strip, corner mark, reserved footer).
 *
 * One PNG for the whole room: every member's display name, their type
 * label, and their test's category color chip, in a grid that autosizes
 * for 2-8 members. A member with no type label yet renders as a
 * "mystery guest" instead of crashing the draw.
 */

import { SITE } from "./site";
import { cachedCardArt, drawCardArtInset, loadCardArt } from "./result-card";

export type PosterMember = {
  displayName: string;
  /** Result label; empty or missing means the member has not dropped a result */
  typeLabel?: string;
  /** Test title shown under the type label when there is room */
  testTitle?: string;
  /** Hex color of the test's category (CATEGORY_META[...].hex) */
  categoryHex?: string;
  /** Member's avatar color from their profile */
  color?: string;
  /**
   * Public path to this member's result art (getResultArt / getShowcaseArtSrc).
   * When it loads, it replaces the initial-and-colour avatar in the cell; a
   * member with no art, no type, or art that fails to load keeps the chip.
   */
  artSrc?: string;
};

export type GroupPosterPayload = {
  roomCode: string;
  roomName?: string;
  members: PosterMember[];
};

const BRAND = ["#0795EA", "#F9684D", "#07AD9C", "#F47A9E"];
const MYSTERY_HEX = "#6B7280";
const MAX_MEMBERS = 8;

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

/** Clip text to maxWidth with a trailing ellipsis (single line). */
function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > maxWidth) {
    t = t.slice(0, -1);
  }
  return `${t.trimEnd()}…`;
}

/**
 * Draw tokens per canvas, so a late art repaint cannot overwrite a poster the
 * caller has already redrawn for a different room state.
 */
const posterTokens = new WeakMap<HTMLCanvasElement, number>();

/**
 * Draw a story (9:16) or square group poster.
 *
 * Synchronous and complete on return. When members carry result art the poster
 * paints its chip layout immediately and repaints once the bitmaps decode, so
 * a slow or missing image costs the reader nothing but the art.
 */
export function drawGroupPoster(
  canvas: HTMLCanvasElement,
  payload: GroupPosterPayload,
  format: "story" | "square" = "square"
) {
  void drawGroupPosterAsync(canvas, payload, format);
}

/** drawGroupPoster, resolved after any member art has landed (or failed). */
export async function drawGroupPosterAsync(
  canvas: HTMLCanvasElement,
  payload: GroupPosterPayload,
  format: "story" | "square" = "square"
): Promise<void> {
  const token = (posterTokens.get(canvas) ?? 0) + 1;
  posterTokens.set(canvas, token);

  const sources = Array.from(
    new Set(
      payload.members
        .slice(0, MAX_MEMBERS)
        .map((m) => m.artSrc)
        .filter((s): s is string => typeof s === "string" && s.length > 0)
    )
  );

  const cache = new Map<string, HTMLImageElement>();
  for (const src of sources) {
    const ready = cachedCardArt(src);
    if (ready) cache.set(src, ready);
  }

  paintGroupPoster(canvas, payload, format, cache);
  const missing = sources.filter((s) => !cache.has(s));
  if (missing.length === 0) return;

  const loaded = await Promise.all(missing.map((src) => loadCardArt(src)));
  if (posterTokens.get(canvas) !== token) return;
  let gained = false;
  missing.forEach((src, i) => {
    const img = loaded[i];
    if (img) {
      cache.set(src, img);
      gained = true;
    }
  });
  if (!gained) return;
  paintGroupPoster(canvas, payload, format, cache);
}

function paintGroupPoster(
  canvas: HTMLCanvasElement,
  payload: GroupPosterPayload,
  format: "story" | "square",
  art: ReadonlyMap<string, HTMLImageElement>
) {
  const W = 1080;
  const H = format === "story" ? 1920 : 1080;
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const pad = 72;
  const contentW = W - pad * 2;
  const footerH = format === "story" ? 200 : 150;
  const footerTop = H - footerH;

  // Background
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#0f1118");
  g.addColorStop(0.55, "#161922");
  g.addColorStop(1, "#1a1530");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // Brand strip
  BRAND.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect((W / 4) * i, 0, W / 4, 16);
  });

  // Header mark + wordmark
  const markSize = format === "story" ? 100 : 76;
  const markY = format === "story" ? 72 : 52;
  drawMark(ctx, pad, markY, markSize);

  const textX = pad + markSize + 24;
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = `600 ${format === "story" ? 26 : 22}px Inter, system-ui, sans-serif`;
  ctx.fillText("TypologyQuiz", textX, markY + markSize * 0.42);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = `500 ${format === "story" ? 20 : 18}px IBM Plex Mono, monospace`;
  ctx.fillText("Group Results", textX, markY + markSize * 0.72);

  // Eyebrow: room code, then the room name as the big title
  let y = markY + markSize + (format === "story" ? 96 : 54);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "600 24px IBM Plex Mono, monospace";
  ctx.fillText(`ROOM ${payload.roomCode.toUpperCase().slice(0, 8)}`, pad, y);

  const titleSize = format === "story" ? 68 : 48;
  y += format === "story" ? 84 : 62;
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${titleSize}px Georgia, 'Source Serif 4', serif`;
  ctx.fillText(fitText(ctx, payload.roomName || "The group map", contentW), pad, y);
  y += format === "story" ? 48 : 30;

  // Member grid: 1 column up to 3 members, 2 columns for 4-8
  const members = payload.members.slice(0, MAX_MEMBERS);
  if (members.length) {
    const cols = members.length <= 3 ? 1 : 2;
    const rows = Math.ceil(members.length / cols);
    const gap = 18;
    const available = footerTop - 24 - y;
    const cellW = (contentW - gap * (cols - 1)) / cols;
    const cellH = Math.max(
      96,
      Math.min(format === "story" ? 220 : 190, (available - gap * (rows - 1)) / rows)
    );

    const nameSize = Math.round(Math.max(22, Math.min(34, cellH * 0.2)));
    const labelSize = Math.round(Math.max(18, Math.min(26, cellH * 0.16)));
    const metaSize = Math.round(Math.max(15, Math.min(20, cellH * 0.12)));
    const avatarR = Math.min(30, cellH * 0.19);

    members.forEach((m, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = pad + col * (cellW + gap);
      const cy = y + row * (cellH + gap);
      if (cy + cellH > footerTop - 8) return;

      const isMystery = !m.typeLabel || !m.typeLabel.trim();
      const label = isMystery ? "mystery guest" : (m.typeLabel as string);
      const chipHex = isMystery ? MYSTERY_HEX : m.categoryHex || BRAND[i % BRAND.length];

      // Cell background + category accent bar
      ctx.fillStyle = "rgba(255,255,255,0.07)";
      roundRect(ctx, x, cy, cellW, cellH, 14);
      ctx.fill();
      ctx.fillStyle = chipHex;
      roundRect(ctx, x, cy, 10, cellH, 4);
      ctx.fill();

      // The member's result art where there is any, otherwise the colour
      // avatar with their initial.
      const ax = x + 28 + avatarR;
      const ay = cy + cellH / 2;
      const artImg = !isMystery && m.artSrc ? art.get(m.artSrc) : undefined;
      if (artImg) {
        const side = avatarR * 2.1;
        drawCardArtInset(ctx, artImg, ax - side / 2, ay - side / 2, side);
      } else {
        ctx.fillStyle = m.color || BRAND[i % BRAND.length];
        ctx.beginPath();
        ctx.arc(ax, ay, avatarR, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.font = `600 ${Math.round(avatarR * 1.05)}px Inter, system-ui, sans-serif`;
        const initial = (m.displayName.trim().slice(0, 1) || "?").toUpperCase();
        const iw = ctx.measureText(initial).width;
        ctx.fillText(initial, ax - iw / 2, ay + avatarR * 0.38);
      }

      // Text block right of the avatar
      const tx = ax + avatarR + 22;
      const textW = x + cellW - tx - 20;
      const hasMeta = !isMystery && !!m.testTitle && cellH >= 120;
      let ty = cy + cellH / 2 - (hasMeta ? labelSize * 0.9 : labelSize * 0.5);

      ctx.fillStyle = "rgba(255,255,255,0.94)";
      ctx.font = `600 ${nameSize}px Inter, system-ui, sans-serif`;
      ctx.fillText(fitText(ctx, m.displayName || "Someone", textW), tx, ty);

      // Category chip dot + type label
      ty += labelSize + 16;
      const dot = Math.round(labelSize * 0.55);
      ctx.fillStyle = chipHex;
      roundRect(ctx, tx, ty - dot + 2, dot, dot, dot * 0.3);
      ctx.fill();
      ctx.fillStyle = isMystery ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.8)";
      ctx.font = `500 ${labelSize}px Inter, system-ui, sans-serif`;
      ctx.fillText(fitText(ctx, label, textW - dot - 12), tx + dot + 12, ty);

      if (hasMeta) {
        ty += metaSize + 14;
        ctx.fillStyle = "rgba(255,255,255,0.4)";
        ctx.font = `500 ${metaSize}px IBM Plex Mono, monospace`;
        ctx.fillText(fitText(ctx, m.testTitle as string, textW), tx, ty);
      }
    });
  }

  // Footer separator + text (always in the reserved zone)
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad, footerTop);
  ctx.lineTo(W - pad, footerTop);
  ctx.stroke();

  const footY = footerTop + (format === "story" ? 48 : 40);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "500 22px IBM Plex Mono, monospace";
  ctx.fillText(`${SITE.url.replace(/^https?:\/\//, "")}/room`, pad, footY);

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = "500 20px Inter, system-ui, sans-serif";
  ctx.fillText("Free · Private · In-browser", pad, H - 40);
}
