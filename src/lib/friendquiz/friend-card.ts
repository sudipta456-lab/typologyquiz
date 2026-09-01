/**
 * Canvas share card for friend quiz scores, following result-card.ts
 * patterns (dark gradient, brand strip, corner mark, reserved footer).
 * "How well do you know Maya? I got 7/10."
 */

import { SITE } from "@/lib/site";

export type FriendCardPayload = {
  /** Quiz creator's name (the person being guessed about) */
  creatorName: string;
  /** The guesser's name, optional */
  guesserName?: string;
  score: number;
  total: number;
  verdictTitle: string;
  packTitle: string;
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
  return lines;
}

/** Draw a story (9:16) or square friend-quiz score card. */
export function drawFriendCard(
  canvas: HTMLCanvasElement,
  payload: FriendCardPayload,
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
  const footerH = format === "story" ? 200 : 160;
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
  const markSize = format === "story" ? 100 : 80;
  const markY = format === "story" ? 72 : 56;
  drawMark(ctx, pad, markY, markSize);

  const textX = pad + markSize + 24;
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = `600 ${format === "story" ? 26 : 22}px Inter, system-ui, sans-serif`;
  ctx.fillText("TypologyQuiz", textX, markY + markSize * 0.42);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = `500 ${format === "story" ? 20 : 18}px IBM Plex Mono, monospace`;
  ctx.fillText("Friend Quiz", textX, markY + markSize * 0.72);

  // Eyebrow
  let y = markY + markSize + (format === "story" ? 120 : 70);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "600 24px IBM Plex Mono, monospace";
  ctx.fillText(`${payload.packTitle.toUpperCase().slice(0, 32)} PACK`, pad, y);

  // The question
  const titleSize = format === "story" ? 84 : 68;
  y += format === "story" ? 90 : 70;
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${titleSize}px Georgia, 'Source Serif 4', serif`;
  const titleLines = wrapText(ctx, `How well do you know ${payload.creatorName}?`, contentW, 3);
  for (const line of titleLines) {
    ctx.fillText(line, pad, y);
    y += titleSize + 10;
  }

  // The score, huge
  y += format === "story" ? 90 : 50;
  const scoreText = `${payload.score}/${payload.total}`;
  const scoreSize = format === "story" ? 220 : 170;
  ctx.font = `700 ${scoreSize}px Inter, system-ui, sans-serif`;
  const scoreW = ctx.measureText(scoreText).width;

  // Chip behind the score
  const chipPadX = 44;
  const chipPadY = format === "story" ? 36 : 28;
  ctx.fillStyle = "rgba(255,255,255,0.08)";
  roundRect(
    ctx,
    pad,
    y - scoreSize * 0.82,
    scoreW + chipPadX * 2,
    scoreSize * 0.82 + chipPadY * 2,
    24
  );
  ctx.fill();
  ctx.fillStyle = BRAND[payload.score >= Math.ceil(payload.total * 0.7) ? 2 : 1];
  ctx.fillText(scoreText, pad + chipPadX, y + chipPadY * 0.6);
  y += chipPadY * 2 + (format === "story" ? 90 : 66);

  // Who got it, plus the verdict
  const whoSize = format === "story" ? 34 : 28;
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.font = `600 ${whoSize}px Inter, system-ui, sans-serif`;
  const who = payload.guesserName ? `${payload.guesserName} got it right` : "I got it right";
  ctx.fillText(`${who} ${payload.score} out of ${payload.total} times.`, pad, y);

  y += whoSize + (format === "story" ? 34 : 24);
  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = `500 ${format === "story" ? 30 : 25}px Inter, system-ui, sans-serif`;
  const verdictLines = wrapText(ctx, `Verdict: ${payload.verdictTitle}.`, contentW, 2);
  for (const line of verdictLines) {
    if (y > footerTop - 30) break;
    ctx.fillText(line, pad, y);
    y += (format === "story" ? 30 : 25) + 10;
  }

  // Footer
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(pad, footerTop);
  ctx.lineTo(W - pad, footerTop);
  ctx.stroke();

  const footY = footerTop + (format === "story" ? 48 : 40);
  ctx.fillStyle = "rgba(255,255,255,0.4)";
  ctx.font = "500 22px IBM Plex Mono, monospace";
  ctx.fillText(`${SITE.url.replace(/^https?:\/\//, "")}/friend-quiz`, pad, footY);

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = "500 20px Inter, system-ui, sans-serif";
  ctx.fillText("Think you'd do better? The link is right there.", pad, H - 40);
}
