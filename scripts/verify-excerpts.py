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
import hashlib
import json
import re
import sys
from datetime import datetime
from pathlib import Path


# Files whose name marks them as NOT an official source. A quote that can only
# be found in one of these is unproven: a forum comment quoting a handbook is
# not the handbook, and a prep site paraphrasing one is worse. Verification is
# still reported, but flagged, and the validator refuses it.
NON_OFFICIAL_HINTS = ("reddit", "quizlet", "blog", "forum", "practice", "prep", "quora", "citydata")


def is_non_official(name: str) -> bool:
    lowered = name.lower()
    return any(h in lowered for h in NON_OFFICIAL_HINTS)


# Text that looks like a broken PDF font map rather than English.
#
# THE HOLE THIS CLOSES. Everything else here proves a quote is a substring of
# the EXTRACTED text. It cannot tell you the extraction was correct. Nebraska's
# manual has a broken ToUnicode map: the "fi" ligature comes out as the digit 4
# and "fl"/"ffi" come out as nothing, so the PDF reads "traf4c", "of4ce",
# "inuence", "ashing" - 210 mangled tokens over 62 of its 92 pages. A quote
# copied from that verifies perfectly, because both sides are the same corrupt
# text, and ships gibberish to a learner.
#
# A digit wedged inside a word is the strong signal and almost never legitimate
# prose. Reported as a warning rather than a failure: the fix is to quote the
# rule from somewhere else, which is a judgement call, and a real document may
# contain something like "4x4".
#
# ONE letter is enough after the digit. The first version of this demanded two
# and therefore missed "traf4c", which is the single most common corruption in
# the document that prompted the check - 97 occurrences. Requiring two letters
# BEFORE the digit is what keeps "4x4", "H2O" and "mp3" out.
MANGLED_TOKEN = re.compile(r"\b[a-z]{2,}\d[a-z]+\b", re.IGNORECASE)

# The same corruption at the START of a word: "fine" -> "4ne", "five" -> "4ve",
# "first" -> "4rst". A blanket "digit then letters" rule cannot be used here,
# because it would flag every ordinal in the corpus - 2nd, 3rd, 4th - so the
# ordinal suffixes are excluded explicitly.
MANGLED_WORD_START = re.compile(r"\b\d(?!st\b|nd\b|rd\b|th\b)[a-z]{2,}\b", re.IGNORECASE)


def mangled_tokens(text: str) -> list:
    """Tokens suggesting the source PDF extracted badly, not that it says this."""
    found = set(m.group(0) for m in MANGLED_TOKEN.finditer(text))
    found |= set(m.group(0) for m in MANGLED_WORD_START.finditer(text))
    return sorted(found)


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
    #
    # The control characters matter as much as the pretty ones. Manitoba's
    # handbook sets its bullets as \x07, and because that was not folded, every
    # quote spanning a bullet was unmatchable: 22 perfectly good quotes reported
    # as failures, and a builder spent its time rewriting them to route around a
    # bug in this function. \x07 and \x0b are the ones seen in the wild; the
    # rest of the C0 range is folded too, since none of it is ever real text.
    s = re.sub(r"[•●▪■‣⁃◦∙]", " ", s)
    s = re.sub(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", " ", s)
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def load_source(path: Path) -> list[str]:
    """
    Return every reading of the source worth searching.

    More than one, because de-hyphenation is genuinely ambiguous. A PDF that
    wraps "some-\\nthing" means "something", but one that wraps
    "right-\\nof-way" means "right-of-way" - and joining it yields the nonsense
    "rightof-way", which is exactly the miss one bank hit. There is no rule that
    separates the two cases, so both readings are produced and a quote matching
    either is verified.
    """
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
        joined = re.sub(r"(\w)-\n(?=[a-z])", r"\1", raw)   # some-\nthing -> something
        kept = re.sub(r"(\w)-\n(?=[a-z])", r"\1-", raw)    # right-\nof-way -> right-of-way
        readings = [normalise(joined)]
        k = normalise(kept)
        if k != readings[0]:
            readings.append(k)
        return readings
    return [normalise(path.read_text(encoding="utf-8", errors="replace"))]


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
    texts = {p.name: load_source(p) for p in sources}  # name -> [reading, ...]

    results = {}
    hits = 0
    non_official = 0
    mangled = 0
    for item in quotes:
        q = normalise(item["quote"])
        # Search official sources FIRST, so a quote that exists in both an
        # official source and a scratch capture is credited to the official
        # one. Order of the argv list must not decide provenance.
        found_in = None
        for name, readings in sorted(texts.items(), key=lambda kv: is_non_official(kv[0])):
            if any(q in reading for reading in readings):
                found_in = name
                break
        if found_in:
            hits += 1
            entry = {"ok": True, "source": found_in}
            if is_non_official(found_in):
                # Matched ONLY in a file that is not an official source. The
                # quote may be genuine, but this run did not prove it: a
                # forum comment quoting the handbook is not the handbook.
                entry["nonOfficialSource"] = True
                non_official += 1
                print(f"  NON-OFFICIAL {item['key']}: only found in {found_in}")
            bad = mangled_tokens(item["quote"])
            if bad:
                entry["mangledTokens"] = bad
                mangled += 1
                print(f"  MANGLED {item['key']}: {', '.join(bad[:4])} - looks like a broken font map, not prose")
            results[item["key"]] = entry
            continue
        # Diagnostic: does the opening clause exist anywhere? If yes, the tail
        # was altered; if no, the whole quote is suspect.
        head = " ".join(q.split()[:8])
        head_in = [n for n, rs in texts.items() if any(head in r for r in rs)]
        results[item["key"]] = {
            "ok": False,
            "head_found_in": head_in,
            "quote": item["quote"],
        }
        where = f"opening clause found in {head_in[0]}, tail differs" if head_in else "opening clause not found anywhere"
        print(f"  MISS {item['key']}: {where}")

    # Fingerprint what was actually verified.
    #
    # A verify artifact is a receipt, and a receipt that cannot be matched to
    # the goods is worthless. One bank's tmp/<slug>-verify.json reported a
    # failing quote that had already been fixed on disk, and nothing could tell
    # the stale file from a current one. The hash below is over the exact
    # key+quote pairs that were checked, so the validator can refuse a receipt
    # that no longer describes the excerpts file.
    digest = hashlib.sha256()
    for item in sorted(quotes, key=lambda i: i["key"]):
        digest.update(item["key"].encode("utf-8"))
        digest.update(b"\x00")
        digest.update(item["quote"].encode("utf-8"))
        digest.update(b"\x00")

    Path("tmp").mkdir(exist_ok=True)
    Path(f"tmp/{slug}-verify.json").write_text(
        json.dumps(
            {
                "quotesSha256": digest.hexdigest(),
                "verifiedAt": datetime.now().astimezone().isoformat(timespec="seconds"),
                "sources": [p.name for p in sources],
                "verified": hits,
                "nonOfficial": non_official,
                "mangled": mangled,
                "total": len(quotes),
                "results": results,
            },
            indent=2,
            sort_keys=True,
        ),
        encoding="utf-8",
    )
    total = len(quotes)
    print(f"{slug}: {hits}/{total} quotes verified verbatim against {len(sources)} source(s)")
    if non_official:
        print(f"WARNING: {non_official} quote(s) were found ONLY in a non-official file. Re-verify them against the official source.")
    if mangled:
        print(
            f"WARNING: {mangled} quote(s) contain text that looks like a broken PDF font map "
            f"(a digit inside a word). Verification cannot catch this - it compares the quote "
            f"against the same corrupt extraction. Quote the rule from another source."
        )
    sys.exit(0 if hits == total else 1)


if __name__ == "__main__":
    main()
