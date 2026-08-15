"""
Render handbook snippet images for driving-test excerpts.

For each excerpt we already hold a verbatim quote. This locates that exact
text inside the official PDF, highlights it, and crops a tight band around it.

Deliberately a TIGHT CROP, not a full page: the point is to show the learner
the passage their answer came from, and a few highlighted lines is both more
useful and a far smaller reproduction than a whole page of the handbook. The
page-anchored link stays on the page so the live source is always one tap away.

Usage:
  python scripts/build-excerpt-snippets.py alberta path/to/guide.pdf
"""
import json
import re
import sys
from pathlib import Path

import fitz  # PyMuPDF

PAD_X = 14          # px of horizontal breathing room around the matched band
PAD_ABOVE = 26      # keep a little context above, often a heading
PAD_BELOW = 18
ZOOM = 2.0          # 2x for retina legibility
HIGHLIGHT = (1, 0.92, 0.23)   # warm yellow, like a marker
MIN_MATCH_WORDS = 6


def normalise(s: str) -> str:
    """PDF text has soft hyphens, odd spacing and curly punctuation."""
    s = s.replace("­", "").replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("–", "-").replace("—", "-")
    return re.sub(r"\s+", " ", s).strip()


def find_quote(doc, quote: str):
    """
    Locate a quote in the PDF.

    Tries the whole thing first, then falls back to the opening clause - long
    quotes often span a column break, which defeats a single search_for call
    but still anchors reliably on their first line.
    """
    target = normalise(quote)
    bases = [target]
    words = target.split()
    if len(words) > 12:
        bases.append(" ".join(words[:12]))
    if len(words) > MIN_MATCH_WORDS:
        bases.append(" ".join(words[:MIN_MATCH_WORDS]))

    # Search for BOTH the ASCII-folded form and a curly-punctuation form.
    #
    # normalise() flattens the quote, but search_for() matches the PDF's own
    # text, which still holds typographic apostrophes and en-dashes. Searching
    # only the folded form silently misses every quote containing "can't" or
    # "driver's". Alberta's guide uses straight quotes throughout, so this
    # stayed hidden until a handbook that doesn't.
    # Both single AND double quotes need reconstructing. Fixing only the
    # apostrophe left every quote containing a quoted phrase unfindable -
    # Massachusetts alone lost five ("zero-tolerance" law, a STOP sign means
    # "come to a complete halt", the "move-over law"), which is exactly the
    # kind of passage a handbook puts in quotation marks in the first place.
    attempts = []
    for b in bases:
        attempts.append(b)
        curly = b.replace("'", "’").replace(" - ", " – ")
        if '"' in curly:
            # Opening quote where the mark starts a word, closing otherwise.
            curly = re.sub(r'"(?=\w)', "“", curly)
            curly = curly.replace('"', "”")
        if curly != b:
            attempts.append(curly)

    # Last resort: anchor on the longest run of plain words in the quote.
    #
    # search_for() matches the page's own text stream, so a phrase that crosses
    # a table cell or a styled dash never matches contiguously even though the
    # extracted text contains it. BC's signal chart is the clear case - "Flashing
    # green - pedestrian-controlled light - go only if the intersection is clear"
    # is three cells, and no amount of punctuation guessing finds it whole, but
    # "go only if the intersection is clear" lands immediately. Splitting on the
    # punctuation most likely to be styled and keeping the longest fragments
    # recovered 22 of BC's 48 misses.
    for frag in sorted(
        re.split(r"[-–—\"“”/•]+", target), key=lambda f: -len(f.split())
    ):
        frag = frag.strip()
        if len(frag.split()) >= MIN_MATCH_WORDS:
            attempts.append(frag)

    for attempt in attempts:
        for pno in range(len(doc)):
            page = doc[pno]
            rects = page.search_for(attempt, quads=False)
            if rects:
                return pno, rects
    return None, None


def render(doc, pno, rects, out_path: Path) -> dict:
    page = doc[pno]
    for r in rects:
        annot = page.add_highlight_annot(r)
        annot.set_colors(stroke=HIGHLIGHT)
        annot.update()

    # Keep only the first run of matches. A phrase can appear several times on
    # one page (Texas repeats penalty rows across three tables), and unioning
    # every hit produces a crop spanning half the page with big dead gaps.
    # Anything more than a couple of lines below the first hit is a separate
    # occurrence, not a continuation of this one.
    rects = sorted(rects, key=lambda r: (r.y0, r.x0))
    kept = [rects[0]]
    for r in rects[1:]:
        if r.y0 - kept[-1].y1 <= kept[-1].height * 2.5:
            kept.append(r)
        else:
            break
    rects = kept

    band = rects[0]
    for r in rects[1:]:
        band = band | r

    # Snap the horizontal crop to the text COLUMN the match sits in, rather than
    # to the matched glyphs. Cropping to the glyphs shaves the first character
    # off every wrapped line - the match rect starts at the glyph edge, and any
    # padding smaller than the marker's own bleed still cuts into the letters.
    # The guide is two-column, so page-relative guesses are wrong too.
    col_x0, col_x1 = band.x0, band.x1
    for bx0, by0, bx1, by1, *_ in page.get_text("blocks"):
        block = fitz.Rect(bx0, by0, bx1, by1)
        if block.intersects(band):
            col_x0 = min(col_x0, block.x0)
            col_x1 = max(col_x1, block.x1)

    clip = fitz.Rect(
        max(0, col_x0 - PAD_X),
        max(0, band.y0 - PAD_ABOVE),
        min(page.rect.x1, col_x1 + PAD_X),
        min(page.rect.y1, band.y1 + PAD_BELOW),
    )

    pix = page.get_pixmap(matrix=fitz.Matrix(ZOOM, ZOOM), clip=clip)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    pix.save(out_path)
    return {"page": pno + 1, "width": pix.width, "height": pix.height}


def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)
    slug, pdf_path = sys.argv[1], sys.argv[2]

    quotes = json.loads(Path(f"tmp/{slug}-quotes.json").read_text(encoding="utf-8"))
    out_dir = Path(f"public/handbook/{slug}")
    manifest = {}
    hit = miss = 0

    for item in quotes:
        # Reopen per excerpt so highlights from one don't bleed into the next.
        doc = fitz.open(pdf_path)
        pno, rects = find_quote(doc, item["quote"])
        if pno is None:
            print(f"  MISS {item['key']}")
            miss += 1
            doc.close()
            continue
        info = render(doc, pno, rects, out_dir / f"{item['key']}.png")
        manifest[item["key"]] = {
            "src": f"/handbook/{slug}/{item['key']}.png",
            **info,
        }
        hit += 1
        doc.close()

    Path(f"src/lib/driving/{slug}/snippets.json").write_text(
        json.dumps(manifest, indent=2, sort_keys=True), encoding="utf-8"
    )
    print(f"{slug}: {hit} snippets rendered, {miss} not located")


if __name__ == "__main__":
    main()
