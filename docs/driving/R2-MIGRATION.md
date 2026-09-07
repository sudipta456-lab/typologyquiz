# Moving handbook images to R2

## The problem, precisely

Cloudflare's free Workers plan allows **20,000 static asset files per version**.
The build hit 20,324 and the deploy was refused outright, so three finished
jurisdictions could not go live.

Pruning images no question can display bought room (17,457 files today), but it
does not remove the ceiling: 21 jurisdictions remain at roughly 180 displayable
images each, landing near 21,000.

R2 removes the images from that count entirely. At ~275 MB now and perhaps
500 MB when every jurisdiction is built, this sits inside R2's free tier with
room to spare.

## What is already done

- **worker/index.js** serves `/handbook/*` from the `HANDBOOK` binding when it
  exists, and **falls through to the static assets** when the binding is absent
  or the object is missing. Safe before, during and after the migration.
- **scripts/upload-handbook-r2.mjs** uploads `public/handbook/**`, skipping
  what is already there, so it is safe to re-run after adding a jurisdiction.
- **wrangler.toml** carries the binding, commented out.

## The one manual step

R2 must be switched on in the Cloudflare dashboard before the API will accept
anything - wrangler returns "Please enable R2 through the Cloudflare Dashboard"
(code 10042). That requires accepting R2's terms and having a payment method on
file, which is why it is not automated here.

Dashboard, R2 Object Storage, then enable.

## Then, in order

```bash
npx wrangler r2 bucket create typologyquiz-handbook
# uncomment the [[r2_buckets]] block in wrangler.toml
node scripts/upload-handbook-r2.mjs          # ~9,500 objects, slow but idempotent
npx wrangler deploy
curl -o /dev/null -w '%{http_code}\n' https://typologyquiz.com/handbook/kansas/two-second-rule.png
```

Once images serve from R2, drop `public/handbook` from the deployed assets so
the file count falls by ~6,600. Verify a snippet still loads first: the worker
falls back to static assets, so if the bucket is wrong the fallback hides it
until the assets are gone.

## Do not skip the verification

The prune step already deletes images from `out/`. If R2 is enabled but the
upload is incomplete, a snippet can 404 with no error anywhere in the build.
Check a handful of images across different jurisdictions after every change.
