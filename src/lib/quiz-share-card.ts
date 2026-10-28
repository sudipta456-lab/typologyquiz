/** Local canvas export for plain quiz invitations. No result data enters this module. */
export function downloadQuizShareCard(title: string, message: string, url: string, portrait: boolean): boolean {
  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = portrait ? 1920 : 1080;
  const context = canvas.getContext("2d");
  if (!context) throw new Error("Canvas is unavailable");
  const ctx = context;

  const width = canvas.width;
  const height = canvas.height;
  const pad = 86;
  const textWidth = width - pad * 2;
  ctx.fillStyle = "#f7f3e9";
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = "#184e47";
  ctx.fillRect(0, 0, width, 22);
  ctx.fillStyle = "#184e47";
  ctx.font = "bold 29px system-ui, sans-serif";
  ctx.fillText("TYPOLOGYQUIZ", pad, 115);

  function lines(value: string, font: string, maxWidth: number): string[] {
    ctx.font = font;
    const result: string[] = [];
    let line = "";
    // Iterating code points keeps surrogate pairs together. Canvas measures the
    // actual rendered glyphs, so long words and emoji cannot run past the edge.
    for (const char of value.replace(/\s+/g, " ").trim()) {
      const next = line + char;
      if (line && ctx.measureText(next).width > maxWidth) {
        result.push(line.trimEnd());
        line = char.trimStart();
      } else line = next;
    }
    if (line) result.push(line.trimEnd());
    return result.length ? result : [""];
  }

  function draw(value: string, top: number, size: number, weight: string, color: string, maxLines: number, maxBottom = height): { bottom: number; shortened: boolean } {
    let fontSize = size;
    let wrapped = lines(value, `${weight} ${fontSize}px system-ui, sans-serif`, textWidth);
    while ((wrapped.length > maxLines || top + wrapped.length * fontSize * 1.35 > maxBottom) && fontSize > 22) {
      fontSize -= 2;
      wrapped = lines(value, `${weight} ${fontSize}px system-ui, sans-serif`, textWidth);
    }
    const fittedLines = Math.min(maxLines, Math.floor((maxBottom - top) / (fontSize * 1.35)));
    const shortened = wrapped.length > fittedLines;
    if (shortened) {
      wrapped = wrapped.slice(0, fittedLines);
      let last = wrapped[fittedLines - 1];
      ctx.font = `${weight} ${fontSize}px system-ui, sans-serif`;
      while (last && ctx.measureText(`${last}…`).width > textWidth) last = last.slice(0, -1);
      wrapped[fittedLines - 1] = `${last}…`;
    }
    ctx.font = `${weight} ${fontSize}px system-ui, sans-serif`;
    ctx.fillStyle = color;
    const step = fontSize * 1.35;
    wrapped.forEach((line, index) => ctx.fillText(line, pad, top + index * step));
    return { bottom: top + wrapped.length * step, shortened };
  }

  const titleDraw = draw(title, 196, portrait ? 60 : 52, "bold", "#184e47", portrait ? 4 : 3);
  const messageTop = titleDraw.bottom + (portrait ? 110 : 58);
  const footerTop = height - 195;
  const messageDraw = draw(message, messageTop, portrait ? 50 : 40, "normal", "#242b29", portrait ? 19 : 11, footerTop - 65);
  ctx.fillStyle = "#d7e6dc";
  ctx.fillRect(pad, footerTop - 40, textWidth, 2);
  const urlDraw = draw(url, footerTop, 29, "bold", "#184e47", 3);
  if (messageDraw.bottom > footerTop - 65 || urlDraw.bottom > height - 40) throw new Error("Card text does not fit");

  const data = canvas.toDataURL("image/png");
  if (!data.startsWith("data:image/png")) throw new Error("Image export failed");
  const anchor = document.createElement("a");
  anchor.download = `typologyquiz-${portrait ? "story" : "post"}.png`;
  anchor.href = data;
  anchor.click();
  return titleDraw.shortened || messageDraw.shortened || urlDraw.shortened;
}
