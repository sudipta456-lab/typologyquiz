"""
Strict verification that every handbook excerpt is a VERBATIM substring of the
official source it claims to quote.

scripts/build-excerpt-snippets.py locates quotes loosely (it falls back to the
first twelve words, then the longest plain run) so that it can still crop a
picture when a quote crosses a column break. That is the right behaviour for
rendering and the wrong behaviour for verification: a quote whose second half
was paraphrased still gets a snippet. This script is the strict half. Both
sides are normalised the same way, then the whole quote must appear as one
contiguous substring, or it is reported as a MISS.

Sources may be PDFs (text is extracted with PyMuPDF) or .txt files (for
handbooks published as web pages: save the page's visible text to a file and
pass it here). Pass every source a bank quotes from, in any order.

Usage:
  python scripts/verify-excerpts.py <slug> <source1.pdf|.txt> [<source2> ...]

Reads  tmp/<slug>-quotes.json   (from: npx tsx scripts/extract-quotes.mjs <slug>)
Writes tmp/<slug>-verify.json   (per-key result, kept as the audit trail)
Exits 1 if any quote is not found verbatim in any source.
"""
import json
import re
import sys
from pathlib import Path


def normalise(s: str) -> str:
    """Same folding the excerpt files apply to extracted text, and no more."""
    s = s.replace("­", "")  # soft hyphen
    s = s.replace("’", "'").replace("‘", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("–", "-").replace("—", "-").replace("‑", "-")
    s = s.replace(" ", " ")
    s = s.replace("§", "Section")
    s = s.replace("ﬁ", "fi").replace("ﬂ", "fl")
    # Bullets and list glyphs become spaces so a stem + list quote can run on.
    s = re.sub(r"[•●▪■‣⁃◦∙]", " ", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def load_source(path: Path) -> str:
    if path.suffix.lower() == ".pdf":
        import fitz  # PyMuPDF

        doc = fitz.open(str(path))
        parts = []
        for page in doc:
            # "text" keeps reading order within blocks; the snippet builder
            # searches the same stream, so a hit here is a hit there.
            parts.append(page.get_text("text"))
        doc.close()
        raw = "\n".join(parts)
        # PDFs hyphenate across line breaks. Join "some-\nthing" -> "something"
        # ONLY where the break follows a hyphen and the next char is lowercase,
        # which is a line-wrap hyphen and not a real compound.
        raw = re.sub(r"(\w)-\n(?=[a-z])", r"\1", raw)
        return normalise(raw)
    return normalise(path.read_text(encoding="utf-8", errors="replace"))


def main() -> None:
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(2)
    slug = sys.argv[1]
    sources = [Path(p) for p in sys.argv[2:]]
    for p in sources:
        if not p.exists():
            print(f"source not found: {p}")
            sys.exit(2)

    quotes = json.loads(Path(f"tmp/{slug}-quotes.json").read_text(encoding="utf-8"))
    texts = {p.name: load_source(p) for p in sources}

    results = {}
    hits = 0
    for item in quotes:
        q = normalise(item["quote"])
        found_in = None
        for name, text in texts.items():
            if q in text:
                found_in = name
                break
        if found_in:
            hits += 1
            results[item["key"]] = {"ok": True, "source": found_in}
            continue
        # Diagnostic: does the opening clause exist anywhere? If yes, the tail
        # was altered; if no, the whole quote is suspect.
        head = " ".join(q.split()[:8])
        head_in = [n for n, t in texts.items() if head in t]
        results[item["key"]] = {
            "ok": False,
            "head_found_in": head_in,
            "quote": item["quote"],
        }
        where = f"opening clause found in {head_in[0]}, tail differs" if head_in else "opening clause not found anywhere"
        print(f"  MISS {item['key']}: {where}")

    Path("tmp").mkdir(exist_ok=True)
    Path(f"tmp/{slug}-verify.json").write_text(
        json.dumps(results, indent=2, sort_keys=True), encoding="utf-8"
    )
    total = len(quotes)
    print(f"{slug}: {hits}/{total} quotes verified verbatim against {len(sources)} source(s)")
    sys.exit(0 if hits == total else 1)


if __name__ == "__main__":
    main()
