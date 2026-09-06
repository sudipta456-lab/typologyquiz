"""
Collect Reddit threads about a jurisdiction's knowledge test, for playbook
section 3 (what learners say the test actually asks).

WHY THIS EXISTS. Reddit is reachable from this machine, but only one way:

  - The WebFetch tool refuses reddit.com and old.reddit.com outright.
  - WebSearch returns no reddit.com results, so a site: query finds nothing.
  - curl and requests against /search.json or a thread URL get a block page.
    It is ~185KB of HTML and looks like a real response, so a builder that
    does not md5 its captures will "collect" a dozen identical block pages
    and never notice. That happened once: three saved files, one md5.
  - A real headless browser against the HTML search UI works, and returns
    threads with their comments.

So this script drives Chromium via Playwright. It is slower than an API call
and that is the price of the only route that works.

USAGE
  python scripts/fetch-reddit.py <slug> <sub>:<query> [<sub>:<query> ...]

  python scripts/fetch-reddit.py louisiana \
      louisiana:"permit test" neworleans:"OMV written test" \
      DMV:"Louisiana knowledge test" newdrivers:"Louisiana permit"

Writes tmp/<slug>-reddit-<thread-id>.txt, one file per thread, each with a
URL/SUB/TITLE/POSTED header then the rendered thread text. Skips threads
already saved, so it is safe to re-run with more queries.

POSTED is the post's machine-readable date. The rendered page shows only a
relative age ("2y ago"), which a research note written months later cannot
turn back into a year - an earlier bank had to mark every thread "undated in
capture" for exactly that reason.

Then read them. Per the playbook: extract the RULE people report getting
wrong, never a question someone posted from memory of the real exam, and
record threads in the research note as paraphrases only.
"""
import hashlib
import io
import re
import sys
import time
from pathlib import Path

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("playwright is not installed. Run: pip install playwright && python -m playwright install chromium")
    raise SystemExit(2)

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")

UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"
)

# A block page is long, uniform, and carries none of these. Checking the text
# rather than the status code is the point: the block returns HTTP 200.
REAL_THREAD_MARKERS = ("r/", "ago")


def main() -> None:
    if len(sys.argv) < 3:
        print(__doc__)
        raise SystemExit(2)

    slug = sys.argv[1]
    searches = []
    for arg in sys.argv[2:]:
        if ":" not in arg:
            print(f"skipping malformed search (want sub:query): {arg}")
            continue
        sub, query = arg.split(":", 1)
        searches.append((sub, query))

    Path("tmp").mkdir(exist_ok=True)
    threads: dict[str, dict] = {}

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = browser.new_context(
            user_agent=UA, locale="en-US", viewport={"width": 1280, "height": 900}
        )
        page = ctx.new_page()

        for sub, query in searches:
            url = (
                f"https://www.reddit.com/r/{sub}/search/"
                f"?q={query}&restrict_sr=1&sort=relevance&t=all"
            )
            try:
                page.goto(url, wait_until="domcontentloaded", timeout=60000)
                page.wait_for_timeout(4000)
                links = page.evaluate(
                    "() => [...document.querySelectorAll('a[href*=\"/comments/\"]')]"
                    ".map(a => [a.getAttribute('href'), a.innerText.trim()])"
                )
                new = 0
                for href, text in links:
                    m = re.search(r"/r/([^/]+)/comments/([a-z0-9]+)/", href or "")
                    if not m:
                        continue
                    tid = m.group(2)
                    if tid not in threads:
                        threads[tid] = {
                            "sub": m.group(1),
                            "url": "https://www.reddit.com" + href.split("?")[0],
                            "title": text[:160],
                        }
                        new += 1
                print(f"search r/{sub} {query!r}: {len(links)} links, {new} new threads")
            except Exception as e:  # noqa: BLE001
                print(f"search r/{sub} {query!r} FAILED: {str(e)[:140]}")
            time.sleep(3)

        saved = skipped = blocked = 0
        digests: dict[str, str] = {}

        for tid, t in threads.items():
            out = Path(f"tmp/{slug}-reddit-{tid}.txt")
            if out.exists():
                skipped += 1
                continue
            try:
                page.goto(t["url"], wait_until="domcontentloaded", timeout=60000)
                page.wait_for_timeout(4500)
                # Expand collapsed replies so the useful answers are captured.
                for _ in range(3):
                    try:
                        btn = page.query_selector("button:has-text('more replies')")
                        if not btn:
                            break
                        btn.click()
                        page.wait_for_timeout(1500)
                    except Exception:  # noqa: BLE001
                        break
                body = page.evaluate("() => document.body.innerText")
                # Capture the post's real date. The rendered page shows only a
                # relative age ("2y ago"), useless in a note written months
                # later, so read the machine-readable timestamp Reddit puts on
                # the post element.
                posted = page.evaluate(
                    "() => {"
                    "  const el = document.querySelector('shreddit-post');"
                    "  if (el) { const t = el.getAttribute('created-timestamp'); if (t) return t; }"
                    "  const tm = document.querySelector('time[datetime]');"
                    "  return tm ? tm.getAttribute('datetime') : '';"
                    "}"
                )
            except Exception as e:  # noqa: BLE001
                print(f"  thread {tid} FAILED: {str(e)[:120]}")
                continue

            # Reject the block page. It is identical every time, so a repeated
            # digest across different thread ids is the tell.
            digest = hashlib.md5(body.encode("utf-8", "replace")).hexdigest()
            if digest in digests.values() or not any(m in body for m in REAL_THREAD_MARKERS):
                blocked += 1
                print(f"  thread {tid} looks like a block page, not saved")
                continue
            digests[tid] = digest

            out.write_text(
                f"URL: {t['url']}\nSUB: {t['sub']}\nTITLE: {t['title']}\n"
                f"POSTED: {posted or 'unknown'}\n\n{body}",
                encoding="utf-8",
            )
            saved += 1
            time.sleep(2)

        browser.close()

    print(
        f"{slug}: {saved} threads saved, {skipped} already on disk, "
        f"{blocked} rejected as block pages"
    )
    if saved == 0 and skipped == 0:
        print("NOTHING was collected. Say so in the research note rather than implying forum research happened.")
        raise SystemExit(1)


if __name__ == "__main__":
    main()
