# TypologyQuiz — Feature Summary & Roadmap

**Live site:** [https://typologyquiz.com/](https://typologyquiz.com/)  
**Repo:** [sudipta456-lab/typologyquiz](https://github.com/sudipta456-lab/typologyquiz)  
**Audience:** roughly ages 10–21  
**Stack:** Next.js 16 (static export) · React 19 · Tailwind 4 · Cloudflare Workers static assets  
**Privacy model:** answers and scores stay on the device unless the user shares a result link  

---

## Features built

### Core product

| Area | What ships |
|------|------------|
| **13 quizzes** | Full take → score → results flow, all client-side |
| **Catalog** | Home + `/tests` browse by category |
| **Start Here** | Guided paths (friends, school, deep self) with clear next steps |
| **No account required** | Optional local display name only; no passwords or servers for quiz data |

### Quiz catalog

| Slug | Title | Focus |
|------|--------|--------|
| `friend-role` | Friend Role Type | Role in the friend group (planner, comic, listener, etc.) |
| `social-battery` | Social Battery | Energy drain / recharge in social settings |
| `attachment-style` | Attachment Style | Secure / anxious / avoidant / mixed (friends & crushes framing) |
| `texting-style` | Texting Style | How you show up over text |
| `class-archetype` | Class Project Archetype | Group-project roles |
| `conflict-style` | Conflict Style | Compete / avoid / accommodate / compromise / collaborate |
| `study-energy` | Study Energy | Focus, noise, social study habits |
| `fomo-style` | FOMO & Plans Style | Missing out vs protecting rest |
| `career-interests` | Career Interests (RIASEC-lite) | Interest map for future paths |
| `mini-ipip` | Big Five (Mini-IPIP) | Short research-based personality inventory |
| `8values` | 8values Political Test | Economic / diplomatic / civil / societal compass |
| `crt-7` | Cognitive Reflection Test (CRT-7) | Reflective vs intuitive thinking |
| `vviq` | Vividness of Visual Imagery | How vivid mental imagery feels |

### Take-test UX

- Kahoot-inspired answer tiles with brand colors
- Progress through items with youth-facing copy
- Mobile-first layout
- Local answer persistence (resume-friendly where stored)
- Anti-slop design pass (no generic AI chrome, human tone, no em-dashes in product copy)

### Results & insight

- Score displays with plain-language levels (e.g. “kinda high”) not bare numbers alone
- Charts where useful (radar, dials, spectrum bars, compass)
- Optional **kind / roast** tone toggle on results
- Research-oriented credits and instrument notes (`/credits`, `/about`)

### Share & social growth

- **Share cards** — canvas PNG download of results (readable scores + brand footer)
- **Stickers** — downloadable sticker-style result art
- **Share block** — native share + copy link
- **Invite friends** — TikTok / Discord-oriented invite copy and links
- **Friend Role path** featured as the main social on-ramp
- Share links encode results in the URL (snapshot), not a backend profile

### Social / multiplayer (local + URL)

| Feature | Route | Behavior |
|---------|--------|----------|
| **Rooms** | `/room`, `/room/session` | Create/join room code; peers sync via URL snapshot (no live server) |
| **Compare** | `/compare` | Paste two result links side by side |
| **Community pulse** | Home | Lightweight local “pulse” from progress game data |

### Progression & engagement

- **Daily** (`/daily`) — daily prompt / check-in
- **Streaks** — current and best streak on device
- **Badges** — e.g. first test, triple threat, week streak, room host, share card, compare
- **Local account** (`/account`) — display name + avatar color, device-only
- **School mode** — preference for school-safe framing
- **Theme** — light / dark / system

### Brand & content design

- Custom brand assets: logo, mark, favicon, puzzle-head, onion “how we peel” story
- Youth-facing homepage and CTAs
- Consistent site chrome (navbar, footer)

### SEO, LLMO, and sharing metadata

- Canonical URL: `https://typologyquiz.com`
- `metadataBase`, Open Graph, Twitter tags
- Structured data (Organization / WebSite JSON-LD)
- `public/sitemap.xml` — all main pages + all tests
- `public/robots.txt` — allows search + major AI crawlers
- `public/llms.txt` — machine-readable site summary for LLMs
- Hydration-safe origin helper for invite/share URLs (`useSiteOrigin`)

### Deploy & hosting

| Piece | Detail |
|--------|--------|
| Build | `output: "export"` → static `out/` |
| Host | Cloudflare Workers static assets (`wrangler.toml`) |
| CI | GitHub → Cloudflare Workers Builds on push to `master` |
| Domain | Custom domain **typologyquiz.com** attached; HTTPS live |
| Trailing slash | Forced to match Next `trailingSlash: true` |
| Scripts | `npm run build`, `npm run deploy` (build + wrangler) |

---

## Architecture notes (current constraints)

- **Fully static** — no server actions, no database, no real-time WebSockets
- **Rooms / compare** work via shared links and localStorage, not a multiplayer backend
- **Accounts** are local display names, not auth
- **Analytics** not embedded in the product yet (use Cloudflare dashboard for traffic)

These choices keep privacy high and hosting cheap; they also define the biggest upgrade paths below.

---

## Future improvement items

### P0 — polish & ops (high value, low risk)

- [ ] Enable **www.typologyquiz.com** (custom domain + redirect www → apex)
- [ ] **Google Search Console** — verify domain, submit sitemap
- [ ] **Cloudflare Web Analytics** (or privacy-friendly beacon) for page views / referrers
- [ ] Smoke checklist after each deploy (home, one test E2E, share card, room link)
- [ ] Replace default Next.js **README** with project-specific docs (or point at this file)

### P1 — product growth (teen ROI)

- [ ] More viral tests (e.g. “group chat chaos,” sports/club role, gamer party role)
- [ ] **Group result poster** — one image with everyone’s types from a room
- [ ] Stronger TikTok/Reels templates (safe captions + on-screen score stickers)
- [ ] “Challenge a friend” deep link that pre-fills room + recommended test
- [ ] Weekly / rotating featured test on homepage
- [ ] Expand **daily** into a real habit loop (calendar, mini streaks UI, shareable daily type)

### P2 — social that scales beyond links

- [ ] Optional **real room sync** (Workers + Durable Objects or KV) so rooms update live without URL paste
- [ ] Anonymous **class / school codes** with aggregate-only stats (no individual answers stored)
- [ ] Cross-device profile export/import (JSON file) so local progress survives device switches
- [ ] Optional email magic-link **only** if multi-device accounts become necessary (keep quizzes free)

### P3 — quality, trust, accessibility

- [ ] Full **a11y pass** (keyboard tiles, contrast, screen reader labels on charts)
- [ ] i18n / Spanish (or other) for broader school use
- [ ] Stronger **age-appropriate** disclaimers and parent/teacher page
- [ ] Unit tests for scoring functions + a few Playwright E2E flows
- [ ] Performance budget (Lighthouse, image sizes, font subsetting)
- [ ] Content moderation notes for roast tone (school mode always kind)

### P4 — platform & monetization (only if needed)

- [ ] Optional “support us” / merch / tip jar (never gate results)
- [ ] Teacher pack PDF or printable class set
- [ ] Embeddable quiz widget for partner sites
- [ ] CMS or structured content pipeline if catalog grows past ~25 tests

### Known gaps / tech debt

- [ ] `www` domain not resolving yet (apex works)
- [ ] Local Wrangler CLI not authenticated (deploys rely on Git → Cloudflare Builds)
- [ ] Sitemap is static; could be generated from the test registry at build time
- [ ] Some results copy still thinner than hero tests (Friend Role / Social Battery level)
- [ ] No automated test suite in CI yet
- [ ] Default create-next-app README still present

---

## How to check traffic (today)

No in-app analytics yet. Use:

1. **Cloudflare** → zone **typologyquiz.com** → **Analytics & Logs** → HTTP Traffic  
2. **Workers & Pages** → **typologyquiz** → Metrics (requests / errors)  
3. Later: Search Console + optional Web Analytics beacon  

---

## Quick local / deploy commands

```bash
npm run dev          # local
npm run build        # static out/
npm run deploy       # build + wrangler deploy (needs Cloudflare auth)
```

Production deploys also run automatically on push to `master` via Cloudflare Workers Builds.

---

*Last updated: 2026-07-11 · Reflects shipped code and live domain https://typologyquiz.com/*
