import type { Edition } from "../editorial/types.ts";
import { editionPath } from "../editorial/identity.ts";

export function editionShare(edition: Edition, grid: readonly boolean[]) {
  if (grid.length !== edition.questions.length || !grid.every(value => typeof value === "boolean")) {
    throw new Error("Only a complete result can be shared");
  }
  const score = grid.filter(Boolean).length;
  const url = `https://typologyquiz.com${editionPath(edition)}?challenge=1`;
  const text = `${edition.title}\n${score}/${grid.length} · Version ${edition.version}\n${grid.map(ok => ok ? "🟩" : "⬜").join("")}\nSame questions. Your turn!\n${url}`;
  return { title: edition.title, text, url, score };
}

export function isChallenge(search: string): boolean {
  const params = new URLSearchParams(search);
  return params.getAll("challenge").length === 1 && params.get("challenge") === "1";
}

/** Original canvas artwork; contains the score and grid, never an answer key. */
export function downloadResultCard(edition: Edition, grid: readonly boolean[], portrait: boolean): void {
  const result = editionShare(edition, grid);
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = portrait ? 1350 : 1080;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Image downloads are unavailable in this browser");
  context.fillStyle = "#f7f3e9";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#184e47";
  context.font = "bold 28px sans-serif";
  context.fillText("TYPOLOGYQUIZ · THE WEEKLY ROUND", 80, 105);
  context.fillStyle = "#242b29";
  context.font = "bold 48px sans-serif";
  const words = edition.title.split(/\s+/);
  let line = "";
  let y = 210;
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (context.measureText(next).width > 900 && line) {
      context.fillText(line, 80, y); y += 62; line = word;
    } else { line = next; }
  }
  context.fillText(line, 80, y);
  context.font = "bold 152px sans-serif";
  context.fillText(`${result.score}/${grid.length}`, 80, y + 210);
  const gridY = y + 290;
  grid.forEach((ok, index) => {
    context.fillStyle = ok ? "#247568" : "#c8c9c0";
    context.fillRect(80 + (index % 12) * 74, gridY + Math.floor(index / 12) * 74, 58, 58);
  });
  context.fillStyle = "#242b29";
  context.font = "32px sans-serif";
  context.fillText("Same questions. Your turn!", 80, canvas.height - 185);
  context.font = "24px sans-serif";
  context.fillText(`${edition.publishedAt} · Version ${edition.version} · Casual challenge`, 80, canvas.height - 130);
  context.fillText("typologyquiz.com/weekly/", 80, canvas.height - 80);
  const anchor = document.createElement("a");
  anchor.download = `${edition.id}-v${edition.version}-${portrait ? "portrait" : "square"}.png`;
  anchor.href = canvas.toDataURL("image/png");
  anchor.click();
}
