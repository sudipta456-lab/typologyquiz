/**
 * Canvas share card for Most Likely To awards, following result-card.ts
 * patterns (dark gradient, brand strip, corner mark, reserved footer).
 * A collage of "award title ... winner name" rows, square and story.
 *
 * The friend names in the payload exist only in memory and in the PNG
 * the user downloads; nothing is encoded into a URL or stored anywhere.
 */

import { SITE } from "@/lib/site";

export type AwardLine = {
  /** Short award title, e.g. "Horror Movie Survivor" */
  award: string;
  /** Winning friend's first name */
  winner: string;
};

export type AwardsCardPayload = {
  awards: AwardLine[];
  /** Optional crew label typed by the group, e.g. "Lunch table" */
  crewName?: string;
};

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

/** Clip text to maxWidth with a trailing ellipsis (single line). */
function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > maxWidth) {
    t = t.slice(0, -1);
  }
  return `${t.trimEnd()}…`;
}

/** Draw a story (9:16) or square Most Likely To awards collage. */
export function drawAwardsCard(
  canvas: HTMLCanvasElement,
  payload: AwardsCardPayload,
  format: "story" | "square" = "square"
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
  ctx.fillText("Most Likely To", textX, markY + markSize * 0.72);

  // Eyebrow + title
  let y = markY + markSize + (format === "story" ? 96 : 54);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "600 24px IBM Plex Mono, monospace";
  const eyebrow = payload.crewName
    ? `${payload.crewName.toUpperCase().slice(0, 24)} AWARDS`
    : "THE AWARDS CEREMONY";
  ctx.fillText(eyebrow, pad, y);

  if (format === "story") {
    const titleSize = 76;
    y += 88;
    ctx.fillStyle = "#ffffff";
    ctx.font = `600 ${titleSize}px Georgia, 'Source Serif 4', serif`;
    ctx.fillText("Most Likely To", pad, y);
    y += 44;
  } else {
    y += 26;
  }

  // Award rows, autosized so every award fits above the footer
  const rows = payload.awards;
  if (rows.length) {
    const gapMin = 6;
    const available = footerTop - 24 - y;
    const rowH = Math.max(
      34,
      Math.min(format === "story" ? 76 : 56, Math.floor(available / rows.length) - gapMin)
    );
    const gap = Math.min(
      12,
      Math.max(gapMin, Math.floor((available - rows.length * rowH) / Math.max(1, rows.length - 1)))
    );
    const awardSize = Math.round(Math.max(18, Math.min(28, rowH * 0.42)));
    const nameSize = Math.round(Math.max(17, Math.min(26, rowH * 0.4)));

    rows.forEach((line, i) => {
      const rowY = y + i * (rowH + gap);
      if (rowY + rowH > footerTop - 12) return;

      ctx.fillStyle = "rgba(255,255,255,0.07)";
      roundRect(ctx, pad, rowY, contentW, rowH, 10);
      ctx.fill();

      ctx.fillStyle = BRAND[i % BRAND.length];
      roundRect(ctx, pad, rowY, 9, rowH, 3);
      ctx.fill();

      // Winner name (right, measured first so the award title never collides)
      ctx.font = `600 ${nameSize}px IBM Plex Mono, monospace`;
      const name = line.winner;
      const nameW = Math.min(ctx.measureText(name).width, contentW * 0.4);
      ctx.fillStyle = "#fff";
      ctx.fillText(
        fitText(ctx, name, contentW * 0.4),
        pad + contentW - nameW - 22,
        rowY + rowH * 0.62
      );

      // Award title (left)
      ctx.fillStyle = "rgba(255,255,255,0.86)";
      ctx.font = `600 ${awardSize}px Inter, system-ui, sans-serif`;
      ctx.fillText(
        fitText(ctx, line.award, contentW - nameW - 70),
        pad + 26,
        rowY + rowH * 0.62
      );
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
  ctx.fillText(`${SITE.url.replace(/^https?:\/\//, "")}/most-likely-to`, pad, footY);

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = "500 20px Inter, system-ui, sans-serif";
  ctx.fillText("Voted by the group, in the room, no accounts.", pad, H - 40);
}
