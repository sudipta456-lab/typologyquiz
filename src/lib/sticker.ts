import { SITE } from "./site";

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

function wrap(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxW: number,
  maxLines: number
): string[] {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const t = line ? `${line} ${w}` : w;
    if (ctx.measureText(t).width > maxW && line) {
      lines.push(line);
      line = w;
      if (lines.length >= maxLines) break;
    } else line = t;
  }
  if (line && lines.length < maxLines) lines.push(line);
  return lines;
}

/** Small square sticker for Discord/IG (~512) */
export function drawSticker(
  canvas: HTMLCanvasElement,
  opts: { typeLabel: string; testTitle: string; accent?: string; tagline?: string }
) {
  const S = 512;
  canvas.width = S;
  canvas.height = S;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const accent = opts.accent || BRAND[0];

  // Soft rounded card
  ctx.fillStyle = "#0f1118";
  roundRect(ctx, 0, 0, S, S, 48);
  ctx.fill();

  // Top brand bar
  BRAND.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect((S / 4) * i, 0, S / 4, 14);
  });

  // Accent blob
  ctx.fillStyle = accent;
  ctx.globalAlpha = 0.2;
  ctx.beginPath();
  ctx.arc(S * 0.85, S * 0.2, 90, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = "600 18px IBM Plex Mono, monospace";
  ctx.fillText(opts.testTitle.toUpperCase().slice(0, 28), 36, 64);

  ctx.fillStyle = "#fff";
  ctx.font = "600 44px Georgia, serif";
  const lines = wrap(ctx, opts.typeLabel, S - 72, 3);
  let y = 140;
  for (const line of lines) {
    ctx.fillText(line, 36, y);
    y += 52;
  }

  if (opts.tagline) {
    ctx.fillStyle = "rgba(255,255,255,0.7)";
    ctx.font = "500 22px Inter, system-ui, sans-serif";
    const tlines = wrap(ctx, opts.tagline, S - 72, 3);
    y += 16;
    for (const line of tlines) {
      ctx.fillText(line, 36, y);
      y += 30;
    }
  }

  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = "500 16px IBM Plex Mono, monospace";
  ctx.fillText(SITE.url.replace(/^https?:\/\//, ""), 36, S - 36);
}

export function downloadSticker(canvas: HTMLCanvasElement, filename: string) {
  const a = document.createElement("a");
  a.download = filename;
  a.href = canvas.toDataURL("image/png");
  a.click();
}
