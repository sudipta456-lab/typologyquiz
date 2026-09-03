/**
 * Canvas share card for a finished trivia run - the scoreboard half of the
 * share layer, next to result-card.ts (personality) and group-poster.ts (rooms).
 *
 * Same house frame as those two: dark artboard, four-colour brand strip, the
 * corner mark, the typologyquiz.com footer. The card is its own dark artboard,
 * so nothing here reads the page theme.
 *
 * The differentiator is the mini map. A map quiz gets a small render of the run
 * itself - found regions in brand teal, missed regions in the muted tone - drawn
 * from the same SVG path strings the play screen uses. The paths and viewBox
 * arrive as parameters rather than imports, so this module never pulls a map
 * dataset into the bundle and works for any region set. Quizzes with no map
 * (countries, sprints) fall back to a found/missed grid and then, for very large
 * answer sets, to a typographic block. All three are composed layouts; none of
 * them is an empty rectangle.
 *
 * Everything is drawn in logical units and scaled by CARD_SCALE, so the exported
 * PNG lands at the same 1080-wide dimensions as every other card on the site
 * while the layout maths stays readable.
 */

import { SITE } from "./site";
import { CARD_BRAND, cardRoundRect, drawCardMark, wrapCardText } from "./result-card";

const TEAL = "#07AD9C";
const CORAL = "#F9684D";

/** Logical-to-device scale. Logical 540 x 960 renders as 1080 x 1920. */
export const CARD_SCALE = 2;

const MONO = "IBM Plex Mono, ui-monospace, monospace";
const UI = "Inter, system-ui, sans-serif";
const DISPLAY = "Georgia, 'Source Serif 4', serif";

/** The paths the play screen renders, handed over rather than imported. */
export type TriviaCardMap = {
  /** SVG viewBox of the region set, e.g. "0 0 959 593". */
  viewBox: string;
  /** region id -> SVG path "d" string. */
  paths: Readonly<Record<string, string>>;
  /** Ids the player found. */
  found: ReadonlySet<string> | readonly string[];
  /**
   * Ids that were in play this run (random-subset and letter quizzes). Regions
   * outside it render as inactive rather than as misses, matching the map on
   * the results screen.
   */
  activeIds?: ReadonlySet<string> | readonly string[] | null;
};

export type TriviaCardPayload = {
  /** Quiz title, e.g. "Name All 50 US States". */
  quizTitle: string;
  score: number;
  total: number;
  /** Time used, ms. Pass the already-formatted string as timeText instead if you have one. */
  timeMs?: number;
  /** Preformatted clock, e.g. "3:42.1". Wins over timeMs when both are set. */
  timeText?: string;
  /** "You got them all", "Time's up", "Out of lives". */
  outcomeLine: string;
  /** Whether the run finished the whole set - drives the accent colour. */
  complete?: boolean;
  /**
   * The percentile sentence exactly as the results screen says it, so the card
   * cannot disagree with the page. Small samples must keep their "(estimated)"
   * wording; buildTriviaPercentileLine below applies that rule for callers who
   * would rather pass the numbers.
   */
  percentileLine?: string;
  /** Personal-best flags from recordRun. */
  newBestScore?: boolean;
  newBestTime?: boolean;
  /** Standing best, shown when this run did not beat it. */
  bestScore?: number;
  /** Map data for map quizzes; omit for type-in quizzes with no map. */
  map?: TriviaCardMap | null;
};

/**
 * The one place the estimated-versus-measured wording rule lives for the card.
 *
 * A percentile from a real sample may be stated plainly and must say how many
 * runs it rests on. Anything else - a baked anchor, or a live sample too small
 * to mean much - is hedged and labelled estimated. Callers that already have
 * the sentence should pass percentileLine straight through instead.
 */
export function buildTriviaPercentileLine(opts: {
  /** Percentile from the baked anchors (estimateBeatsPercent). */
  estimatedPercent: number;
  /** Measured percentile, when the edge worker answered. */
  livePercent?: number;
  /** Runs behind livePercent. */
  liveSampleSize?: number;
  /** Whether the sample is big enough to state plainly. */
  liveIsReal?: boolean;
}): string {
  const { livePercent, liveSampleSize, liveIsReal } = opts;
  if (liveIsReal && typeof livePercent === "number" && typeof liveSampleSize === "number") {
    return `Beats ${livePercent}% of players (${liveSampleSize} runs recorded)`;
  }
  return `Beats about ${opts.estimatedPercent}% of players (estimated)`;
}

/** "1:23.4", matching formatTimeMs on the results screen. */
function formatClockMs(ms: number): string {
  const totalSeconds = Math.max(0, ms) / 1000;
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds - m * 60;
  const sText = s < 10 ? `0${s.toFixed(1)}` : s.toFixed(1);
  return `${m}:${sText}`;
}

function parseViewBox(
  viewBox: string
): { x: number; y: number; w: number; h: number } | null {
  const parts = viewBox.trim().split(/[\s,]+/).map(Number);
  if (parts.length !== 4 || parts.some((n) => !Number.isFinite(n))) return null;
  const [x, y, w, h] = parts;
  if (w <= 0 || h <= 0) return null;
  return { x, y, w, h };
}

function toSet(v: ReadonlySet<string> | readonly string[] | null | undefined): ReadonlySet<string> | null {
  if (v == null) return null;
  return v instanceof Set ? v : new Set(v as readonly string[]);
}

/** Single line, clipped with an ellipsis. */
function fitText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string {
  if (ctx.measureText(text).width <= maxWidth) return text;
  let t = text;
  while (t.length > 1 && ctx.measureText(`${t}…`).width > maxWidth) t = t.slice(0, -1);
  return `${t.trimEnd()}…`;
}

type Box = { x: number; y: number; w: number; h: number };

/**
 * The run, drawn as the map it was played on. Returns false when the data is
 * unusable (bad viewBox, no Path2D, nothing parseable) so the caller can fall
 * through to the grid instead of leaving a hole in the card.
 */
function drawMiniMap(ctx: CanvasRenderingContext2D, box: Box, map: TriviaCardMap): boolean {
  if (typeof Path2D === "undefined") return false;
  const vb = parseViewBox(map.viewBox);
  if (!vb) return false;
  const entries = Object.entries(map.paths);
  if (entries.length === 0) return false;

  const found = toSet(map.found) ?? new Set<string>();
  const active = toSet(map.activeIds);

  const inset = 12;
  const bw = box.w - inset * 2;
  const bh = box.h - inset * 2;
  if (bw <= 0 || bh <= 0) return false;
  const s = Math.min(bw / vb.w, bh / vb.h);
  const ox = box.x + inset + (bw - vb.w * s) / 2;
  const oy = box.y + inset + (bh - vb.h * s) / 2;

  let drew = 0;
  ctx.save();
  ctx.translate(ox, oy);
  ctx.scale(s, s);
  ctx.translate(-vb.x, -vb.y);
  ctx.lineJoin = "round";
  ctx.lineWidth = 0.7 / s;
  ctx.strokeStyle = "rgba(12,14,20,0.9)";
  for (const [id, d] of entries) {
    if (typeof d !== "string" || d.length === 0) continue;
    let path: Path2D;
    try {
      path = new Path2D(d);
    } catch {
      continue;
    }
    const inPlay = active === null || active.has(id);
    if (found.has(id)) ctx.fillStyle = TEAL;
    else if (inPlay) ctx.fillStyle = "rgba(255,255,255,0.14)";
    else ctx.fillStyle = "rgba(255,255,255,0.05)";
    ctx.fill(path);
    ctx.stroke(path);
    drew++;
  }
  ctx.restore();
  return drew > 0;
}

/** Largest cell the found-grid uses, so a 13-answer quiz gets a tidy block. */
const GRID_CELL_MAX = 38;
const GRID_INSET = 14;

/**
 * Grid shape for a given answer count in a given box. Columns target a wide-ish
 * block rather than the box's own aspect, which keeps a 13-cell grid and a
 * 195-cell grid looking like the same object.
 */
function gridGeometry(total: number, bw: number, bh: number) {
  const cols = Math.max(1, Math.min(total, Math.ceil(Math.sqrt(total * 2))));
  const rows = Math.ceil(total / cols);
  const cell = Math.min(bw / cols, bh / rows, GRID_CELL_MAX);
  return { cols, rows, cell, w: cols * cell, h: rows * cell };
}

/**
 * No map, but a countable answer set: one cell per answer, filled for the ones
 * that landed. Which cell is which is not claimed - the grid says how much of
 * the set fell, and reads as a scoreboard rather than as a chart.
 */
function drawFoundGrid(
  ctx: CanvasRenderingContext2D,
  box: Box,
  score: number,
  total: number
): boolean {
  if (total <= 0 || total > 400) return false;
  const bw = box.w - GRID_INSET * 2;
  const bh = box.h - GRID_INSET * 2;
  if (bw <= 0 || bh <= 0) return false;

  const { cols, cell, w, h } = gridGeometry(total, bw, bh);
  if (cell < 3) return false;
  const gap = Math.max(1, cell * 0.16);
  const size = cell - gap;
  const ox = box.x + GRID_INSET + (bw - (w - gap)) / 2;
  const oy = box.y + GRID_INSET + (bh - (h - gap)) / 2;

  const filled = Math.max(0, Math.min(total, score));
  for (let i = 0; i < total; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols);
    ctx.fillStyle = i < filled ? TEAL : "rgba(255,255,255,0.12)";
    cardRoundRect(ctx, ox + c * cell, oy + r * cell, size, size, Math.min(4, size * 0.28));
    ctx.fill();
  }
  return true;
}

/** Last resort: the fraction as type, still centred and still composed. */
function drawFractionBlock(
  ctx: CanvasRenderingContext2D,
  box: Box,
  score: number,
  total: number
) {
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const cx = box.x + box.w / 2;
  const cy = box.y + box.h / 2;
  ctx.textAlign = "center";
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = TEAL;
  const size = Math.min(96, box.h * 0.5);
  ctx.font = `600 ${size}px ${MONO}`;
  ctx.fillText(`${pct}%`, cx, cy + size * 0.2);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.font = `500 ${Math.max(11, size * 0.18)}px ${MONO}`;
  ctx.fillText("OF THE SET", cx, cy + size * 0.62);
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
}

/** Vertical space the panel's contents actually want, clamped to what is free. */
const PANEL_CHROME = 34;

function measurePanelHeight(payload: TriviaCardPayload, w: number, maxH: number): number {
  const inner = maxH - PANEL_CHROME;
  if (inner <= 0) return maxH;

  const vb = payload.map ? parseViewBox(payload.map.viewBox) : null;
  if (vb) {
    const bw = w - 24;
    return Math.min(maxH, PANEL_CHROME + 24 + (bw * vb.h) / vb.w);
  }
  if (payload.total > 0 && payload.total <= 400) {
    const g = gridGeometry(payload.total, w - GRID_INSET * 2, inner - GRID_INSET * 2);
    return Math.min(maxH, PANEL_CHROME + GRID_INSET * 2 + g.h);
  }
  return Math.min(maxH, PANEL_CHROME + 150);
}

/** Panel plate plus whichever run visual the payload can support. */
function drawRunPanel(ctx: CanvasRenderingContext2D, box: Box, payload: TriviaCardPayload) {
  ctx.fillStyle = "rgba(255,255,255,0.045)";
  cardRoundRect(ctx, box.x, box.y, box.w, box.h, 12);
  ctx.fill();
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.lineWidth = 1;
  cardRoundRect(ctx, box.x + 0.5, box.y + 0.5, box.w - 1, box.h - 1, 12);
  ctx.stroke();

  const label = payload.map ? "YOUR MAP" : "THE SET";
  ctx.fillStyle = "rgba(255,255,255,0.32)";
  ctx.font = `600 10px ${MONO}`;
  ctx.textBaseline = "top";
  ctx.fillText(label, box.x + 14, box.y + 12);

  const inner: Box = { x: box.x, y: box.y + 26, w: box.w, h: box.h - 34 };
  if (inner.h <= 20) return;

  if (payload.map && drawMiniMap(ctx, inner, payload.map)) return;
  if (drawFoundGrid(ctx, inner, payload.score, payload.total)) return;
  drawFractionBlock(ctx, inner, payload.score, payload.total);
}

/** Small pill: filled dot plus a mono label. */
function drawPill(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  text: string,
  accent: string
): number {
  const fontSize = 11;
  ctx.font = `700 ${fontSize}px ${MONO}`;
  const tw = ctx.measureText(text).width;
  const padX = 10;
  const h = 22;
  const w = tw + padX * 2 + 12;
  ctx.fillStyle = "rgba(255,255,255,0.07)";
  cardRoundRect(ctx, x, y, w, h, h / 2);
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.beginPath();
  ctx.arc(x + padX + 2, y + h / 2, 3.2, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.82)";
  ctx.textBaseline = "middle";
  ctx.fillText(text, x + padX + 12, y + h / 2 + 0.5);
  ctx.textBaseline = "top";
  return w;
}

/**
 * Draw a story (9:16) or square (1:1) trivia scoreboard.
 *
 * Fully synchronous: nothing here loads over the network, so the card is
 * finished when this returns.
 */
export function drawTriviaCard(
  canvas: HTMLCanvasElement,
  payload: TriviaCardPayload,
  format: "story" | "square" = "story"
) {
  const W = 540;
  const H = format === "story" ? 960 : 540;
  canvas.width = W * CARD_SCALE;
  canvas.height = H * CARD_SCALE;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(CARD_SCALE, 0, 0, CARD_SCALE, 0, 0);
  ctx.textBaseline = "top";
  ctx.textAlign = "left";

  const story = format === "story";
  const pad = 36;
  const contentW = W - pad * 2;
  const footerH = story ? 92 : 76;
  const footerTop = H - footerH;
  const accent = payload.complete ? TEAL : CORAL;

  // Background
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#0f1118");
  g.addColorStop(0.55, "#161922");
  g.addColorStop(1, "#1a1530");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  // Brand strip
  CARD_BRAND.forEach((c, i) => {
    ctx.fillStyle = c;
    ctx.fillRect((W / 4) * i, 0, W / 4, 8);
  });

  // Header mark + wordmark
  const markSize = story ? 50 : 42;
  const markY = story ? 34 : 28;
  drawCardMark(ctx, pad, markY, markSize);

  const textX = pad + markSize + 14;
  ctx.fillStyle = "rgba(255,255,255,0.55)";
  ctx.font = `600 ${story ? 14 : 13}px ${UI}`;
  ctx.fillText("TypologyQuiz", textX, markY + markSize * 0.16);
  ctx.fillStyle = "rgba(255,255,255,0.35)";
  ctx.font = `500 ${story ? 11 : 10}px ${MONO}`;
  ctx.fillText("Trivia", textX, markY + markSize * 0.52);

  // Body column. The square format runs the run panel down the right side; the
  // story format stacks it under the numbers.
  const bodyTop = markY + markSize + (story ? 30 : 22);
  const gap = 18;
  const panelW = story ? contentW : Math.round(contentW * 0.42);
  const colW = story ? contentW : contentW - panelW - gap;

  let y = bodyTop;

  // Outcome
  ctx.fillStyle = accent;
  ctx.font = `700 ${story ? 13 : 11}px ${MONO}`;
  ctx.fillText(fitText(ctx, payload.outcomeLine.toUpperCase(), colW), pad, y);
  y += story ? 24 : 20;

  // Quiz title
  const titleSize = story ? 30 : 22;
  ctx.fillStyle = "#ffffff";
  ctx.font = `600 ${titleSize}px ${DISPLAY}`;
  const titleLines = wrapCardText(ctx, payload.quizTitle, colW, 2);
  for (const line of titleLines) {
    ctx.fillText(line, pad, y);
    y += titleSize + 6;
  }
  y += story ? 16 : 10;

  // The number. Mono digits are tabular by construction, so a 4 and a 1 take
  // the same width and the score never shimmies between runs.
  const scoreSize = story ? 96 : 62;
  const denomSize = story ? 34 : 24;
  ctx.textBaseline = "alphabetic";
  const scoreBaseline = y + scoreSize * 0.78;
  ctx.fillStyle = "#ffffff";
  ctx.font = `700 ${scoreSize}px ${MONO}`;
  const scoreText = String(payload.score);
  ctx.fillText(scoreText, pad, scoreBaseline);
  const scoreW = ctx.measureText(scoreText).width;
  ctx.fillStyle = "rgba(255,255,255,0.42)";
  ctx.font = `600 ${denomSize}px ${MONO}`;
  ctx.fillText(`/${payload.total}`, pad + scoreW + 8, scoreBaseline);

  // Time, on the same baseline, right-aligned in the column
  const timeText =
    payload.timeText ?? (typeof payload.timeMs === "number" ? formatClockMs(payload.timeMs) : null);
  if (timeText) {
    const timeSize = story ? 22 : 16;
    ctx.font = `600 ${timeSize}px ${MONO}`;
    const tw = ctx.measureText(timeText).width;
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.fillText(timeText, pad + colW - tw, scoreBaseline);
    ctx.font = `500 ${story ? 11 : 9}px ${MONO}`;
    const lw = ctx.measureText("TIME").width;
    ctx.fillStyle = "rgba(255,255,255,0.32)";
    ctx.fillText("TIME", pad + colW - lw, scoreBaseline - timeSize - 6);
  }
  ctx.textBaseline = "top";
  y = scoreBaseline + (story ? 22 : 14);

  // Progress rail
  const railH = story ? 8 : 6;
  const fraction = payload.total > 0 ? Math.max(0, Math.min(1, payload.score / payload.total)) : 0;
  ctx.fillStyle = "rgba(255,255,255,0.09)";
  cardRoundRect(ctx, pad, y, colW, railH, railH / 2);
  ctx.fill();
  if (fraction > 0) {
    ctx.fillStyle = TEAL;
    cardRoundRect(ctx, pad, y, Math.max(railH, colW * fraction), railH, railH / 2);
    ctx.fill();
  }
  y += railH + (story ? 18 : 13);

  // Percentile
  if (payload.percentileLine) {
    const pSize = story ? 15 : 12;
    ctx.fillStyle = "rgba(255,255,255,0.72)";
    ctx.font = `500 ${pSize}px ${UI}`;
    const pLines = wrapCardText(ctx, payload.percentileLine, colW, 2);
    for (const line of pLines) {
      ctx.fillText(line, pad, y);
      y += pSize + 5;
    }
    y += story ? 8 : 5;
  }

  // Personal-best flags
  const flags: string[] = [];
  if (payload.newBestScore) flags.push("NEW BEST SCORE");
  if (payload.newBestTime) flags.push("FASTEST FULL RUN");
  if (
    !payload.newBestScore &&
    typeof payload.bestScore === "number" &&
    payload.bestScore > 0
  ) {
    flags.push(`BEST ${payload.bestScore}/${payload.total}`);
  }
  if (flags.length) {
    let px = pad;
    let rowTop = y;
    for (const flag of flags) {
      ctx.font = `700 11px ${MONO}`;
      const w = ctx.measureText(flag).width + 32;
      if (px + w > pad + colW && px > pad) {
        px = pad;
        rowTop += 28;
      }
      const drawn = drawPill(ctx, px, rowTop, flag, accent);
      px += drawn + 8;
    }
    y = rowTop + 22 + (story ? 20 : 14);
  }

  // Run panel: the mini map, the grid, or the fraction block. The plate is
  // sized to what it holds rather than to whatever space is left, so a small
  // answer set does not float in an oversized rectangle.
  const panelBottom = footerTop - (story ? 18 : 16);
  const panelTopLimit = story ? y : bodyTop;
  const available = panelBottom - panelTopLimit;
  const panelX = story ? pad : pad + colW + gap;
  const minPanelH = story ? 130 : 120;
  if (available >= minPanelH) {
    // Square runs the plate down its whole right column, where it frames the
    // card against the text on the left; story sizes it to its contents and
    // centres it, so the slack sits evenly above and below.
    const panelH = story
      ? Math.max(minPanelH, measurePanelHeight(payload, panelW, available))
      : available;
    const panelTop = panelTopLimit + (available - panelH) / 2;
    drawRunPanel(ctx, { x: panelX, y: panelTop, w: panelW, h: panelH }, payload);
  }

  // Footer
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, footerTop);
  ctx.lineTo(W - pad, footerTop);
  ctx.stroke();

  ctx.fillStyle = "rgba(255,255,255,0.42)";
  ctx.font = `500 ${story ? 13 : 11}px ${MONO}`;
  ctx.fillText(SITE.url.replace(/^https?:\/\//, ""), pad, footerTop + (story ? 22 : 18));

  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.font = `500 ${story ? 11 : 10}px ${UI}`;
  ctx.fillText("Free · Private · In-browser", pad, H - (story ? 30 : 26));
}
