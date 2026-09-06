# Driving banks: coverage tracker

The growth plan (`GROWTH_PLAN.md`) never carried a driving roadmap; it treated
the driving engine as a finished asset to reuse. This file is the roadmap. A
row is "built" only when it is wired into `jurisdictions.ts`, validates with
zero errors, and its research note exists.

Build order is by search demand (population as the proxy), Canada interleaved
one per wave so the `/ca` side keeps pace. Every bank is built to
`docs/driving/PLAYBOOK.md`.

## Built (22, dated when they first landed)

| Jurisdiction | Slug | Content date |
|---|---|---|
| Alberta | alberta | 2026-08-11 |
| Ontario | ontario | 2026-08-11 |
| Texas | texas | 2026-08-11 |
| California | california | 2026-08-11 |
| Florida | florida | 2026-08-14 |
| New York | newyork | 2026-08-14 |
| Pennsylvania | pennsylvania | 2026-08-14 |
| Ohio | ohio | 2026-08-14 |
| Georgia | georgia | 2026-08-14 |
| Illinois | illinois | 2026-08-14 |
| North Carolina | northcarolina | 2026-08-14 |
| Michigan | michigan | 2026-08-14 |
| New Jersey | newjersey | 2026-08-14 |
| Virginia | virginia | 2026-08-14 |
| Washington | washington | 2026-08-15 |
| Massachusetts | massachusetts | 2026-08-15 |
| Tennessee | tennessee | 2026-08-15 |
| Arizona | arizona | 2026-08-15 |
| British Columbia | britishcolumbia | 2026-08-15 |
| Indiana | indiana | 2026-08-15 |
| Missouri | missouri | 2026-08-15 |
| Maryland | maryland | 2026-08-15 |

## Outstanding (42), in build order

| Wave | Jurisdiction | Slug | Status |
|---|---|---|---|
| 1 | Colorado | colorado | **built** (2026-09-06, 251 excerpts, 230 snippets) |
| 1 | Minnesota | minnesota | **built** (2026-09-06, 326 excerpts, 312 snippets) |
| 1 | Wisconsin | wisconsin | **built** (2026-09-06, 190 excerpts, 147 snippets) |
| 1 | South Carolina | southcarolina | **built** (2026-09-06, 300 excerpts, 220 snippets) |
| 1 | Alabama | alabama | **built** (2026-09-06, 350 excerpts, 315 snippets) |
| 1 | Quebec | quebec | **built** (2026-09-06, 192 excerpts, 135 snippets) |
| 2 | Louisiana | louisiana | building |
| 2 | Kentucky | kentucky | building |
| 2 | Oregon | oregon | building |
| 2 | Oklahoma | oklahoma | building |
| 2 | Connecticut | connecticut | building |
| 2 | Manitoba | manitoba | building |
| 3 | Utah | utah | queued |
| 3 | Iowa | iowa | queued |
| 3 | Nevada | nevada | queued |
| 3 | Arkansas | arkansas | queued |
| 3 | Mississippi | mississippi | queued |
| 3 | Saskatchewan | saskatchewan | queued |
| 4 | Kansas | kansas | queued |
| 4 | New Mexico | newmexico | queued |
| 4 | Nebraska | nebraska | queued |
| 4 | Idaho | idaho | queued |
| 4 | West Virginia | westvirginia | queued |
| 4 | Nova Scotia | novascotia | queued |
| 5 | Hawaii | hawaii | queued |
| 5 | New Hampshire | newhampshire | queued |
| 5 | Maine | maine | queued |
| 5 | Montana | montana | queued |
| 5 | Rhode Island | rhodeisland | queued |
| 5 | New Brunswick | newbrunswick | queued |
| 6 | Delaware | delaware | queued |
| 6 | South Dakota | southdakota | queued |
| 6 | North Dakota | northdakota | queued |
| 6 | Alaska | alaska | queued |
| 6 | Vermont | vermont | queued |
| 6 | Wyoming | wyoming | queued |
| 7 | Newfoundland and Labrador | newfoundlandlabrador | queued |
| 7 | Prince Edward Island | princeedwardisland | queued |
| 7 | Yukon | yukon | queued |
| 7 | Northwest Territories | northwestterritories | queued |
| 7 | Nunavut | nunavut | queued |
| 7 | District of Columbia | districtofcolumbia | queued |

Status values: queued, building, validated (zero errors, not yet wired),
built (wired, deployed), blocked (say why in the row).

## After the last wave

- Regenerate `public/llms.txt` (prebuild does it), confirm the sitemap picks
  up every new `/driving/<slug>/` and set URL, and resubmit the sitemap in
  Search Console.
- Recount the hub's jurisdiction and question totals in any hand-written copy
  (`/about`, the home page) - the driving hub itself computes them.
