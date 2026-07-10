import { SITE } from "./site";

export type ScoreLine = {
  key: string;
  label: string;
  score: number;
  /** Short plain-language level, e.g. "kinda high" */
  level: string;
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

/** Draw a story (9:16) or square share card. */
export function drawResultCard(
  canvas: HTMLCanvasElement,
  payload: CardPayload,
  format: "story" | "square" = "story"
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
  ctx.fillText(SITE.tagline, textX, markY + markSize * 0.72);

  // Test title
  let y = markY + markSize + (format === "story" ? 64 : 40);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "600 22px IBM Plex Mono, monospace";
  ctx.fillText(payload.testTitle.toUpperCase().slice(0, 48), pad, y);

  // Type label
  const label = payload.typeLabel || "Your results";
  const titleSize = format === "story" ? 72 : 56;
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${titleSize}px Georgia, 'Source Serif 4', serif`;
  const labelLines = wrapText(ctx, label, contentW, format === "story" ? 2 : 2);
  y += format === "story" ? 70 : 52;
  for (const line of labelLines) {
    ctx.fillText(line, pad, y);
    y += titleSize + 8;
  }

  // Description (tight on square)
  if (payload.typeDescription) {
    const descSize = format === "story" ? 30 : 24;
    const maxDescLines = format === "story" ? 4 : 2;
    ctx.fillStyle = "rgba(255,255,255,0.68)";
    ctx.font = `400 ${descSize}px Inter, system-ui, sans-serif`;
    const descLines = wrapText(ctx, payload.typeDescription, contentW, maxDescLines);
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
    const startY = Math.max(markY + markSize + 40, Math.min(minStart, maxStart));

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
