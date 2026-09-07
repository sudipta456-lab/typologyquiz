# Handbook images: served from R2 (done, 2026-09-07)

## Status

**Complete and live.** All 10,376 snippet images are in the
`typologyquiz-handbook` R2 bucket, `worker/index.js` serves `/handbook/*` from
it, and `out/handbook` is stripped from every deploy build.

Files in the deployed build: **11,416**, against Cloudflare's 20,000 ceiling -
room for roughly 8,500 more, or the remaining 18 jurisdictions at ~180 images
each with headroom to spare.

## What broke on the way here, and why it matters for the next change

**Cloudflare's static-asset binding serves a matching file directly and never
invokes the Worker at all, by default.** With `public/handbook` still bundled
in an early attempt, the R2 code in `worker/index.js` was dead code - every
"R2 is working" check was silently reading the local static copy, which
returns the same bytes at 200 and looks identical unless you check the
`cache-control` header specifically (the static export's default vs this
worker's own `max-age=31536000, immutable`).

**Scoping `run_worker_first` to just `/handbook/*` silently broke every POST
endpoint on the site.** The moment that scoped array was deployed, `POST
/api/stats` (the play counter) and `POST /api/short` both started returning a
platform-level 405 with an empty body - rejected before the Worker ever ran.
Cloudflare's asset router treats an explicit `run_worker_first` list as a
switch to strict GET/HEAD-only asset semantics for every path NOT on the
list, not just a routing hint for the listed one. This was live for a matter
of minutes before an unrelated-endpoint smoke test caught it.

**The fix: `run_worker_first = true`, unscoped.** The Worker runs for every
request, and its own `fetch` handler decides per-path whether to serve R2,
KV, or fall through to `env.ASSETS.fetch(request)` - which it already does at
the bottom for anything not otherwise claimed. This is what the site always
depended on for `/api/stats`, `/api/short` and the Search Console
verification path, and setting it explicitly (rather than the previous
"unset, which happened to default the same way") restores that regardless of
what else the config later adds.

**The lesson for the next person touching `wrangler.toml`'s `[assets]`
block:** never assume a scoped `run_worker_first` list is additive. Test a
POST endpoint immediately after any change to it, not just the paths you
meant to affect.

## Ongoing: adding a new jurisdiction

```bash
python scripts/build-excerpt-snippets.py <slug> tmp/<slug>-handbook.pdf   # writes public/handbook/<slug>/*.png
node scripts/upload-handbook-r2.mjs                                       # uploads new images, skips existing... 
# ...actually re-uploads everything each run (see script header) - fine at
# current volume (~10k objects, few minutes), revisit if that changes.
npm run deploy   # builds, strips out/handbook, deploys
```

Verify after every deploy touching this path: at least one image from a new
jurisdiction, one POST endpoint, and one ordinary page.
