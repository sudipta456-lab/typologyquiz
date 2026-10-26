# Homepage theme calendar

Owner-requested October 25, 2026. The recurring homepage calendar contains 18 original visual treatments: one or two per month, never layered campaigns. All dates use **America/Edmonton**, including visitors elsewhere. Themes repeat annually; the month-end is inclusive. These are visual/discovery treatments of existing quizzes, not new quiz releases or claims about a visitor’s personality.

## Scheduled treatments

| Month | Dates | Treatment | Original visual / conversation invitation |
| --- | --- | --- | --- |
| January | 1–31 | Fresh page | Soft orbital paths; small choices instead of reinvention pressure |
| February | 1–last day | Better together | Floating message cards; something worth sending a friend |
| March | 1–19 | New growth | A gently moving botanical sketch; notice outside evidence |
| March | 20–31 | Human in the loop | Signal cards; follow a claim before sharing it |
| April | 1–15 | Margin notes | Layered annotated pages; bookshop and language rabbit holes |
| April | 16–30 | Tiny planet | Botanical orbit; explore repair, materials and food webs |
| May | 1–31 | Next chapter | Notebook pages; choices to carry into the next chapter |
| June | 1–30 | Open world | An illustrated route map; different places and perspectives |
| July | 1–31 | Your own way | A map with a branching path; independence through everyday choices |
| August | 1–31 | New season | Floating conversation cards; a low-pressure fresh start |
| September | 1–21 | Page turner | Paper layers; reading and language discoveries |
| September | 22–30 | Slow fall | Warm botanical sketch; slow observation |
| October | 1–15 | Curiosity cabinet | Archive papers; overlooked stories in familiar objects |
| October | 16–31 | After Hours | An arched doorway, crescent moon, drifting bats and mist; choose story, nature or film |
| November | 1–15 | Kindred signals | Two connected message cards; belonging and shared questions |
| November | 16–30 | Story mode | Floating pages; reading, writing and unreliable storytelling |
| December | 1–20 | Small wonders | Light orbital illustrations; everyday science discoveries |
| December | 21–31 | Long night | Slow celestial paths; a quiet sound or story mystery |

Next changes after this release: **November 1**, **November 16**, **December 1**, **December 21**, **January 1** at local midnight. An active visible tab refreshes within 30 seconds; focus/visibility checks cover a returning or sleeping device. No scheduled build or recurring AI call is required. Static HTML has a neutral illustrated panel and working quiz links, using the same responsive layout and minimum height as the active panel. The date-sensitive layer resolves in the browser after hydration, so a cached build cannot freeze Halloween into November. Invalid dates fall back safely. Enlarged text is allowed to grow rather than clipped.

The [Alberta government’s time-system notice](https://www.alberta.ca/albertas-new-time-system-abt) confirms permanent UTC−6 from November 1, 2026. The selector explicitly follows that rule after the transition, including on browsers with older timezone data; historical dates use the Edmonton timezone database. Do not reintroduce an assumed November fallback to UTC−7. Revisit this rule if the official policy changes.

## Research and limits

The [HMH monthly school calendar](https://www.hmhco.com/blog/monthly-calendar-themes-for-school) supplies timing inspiration: new-year reflection, friendship, spring and AI literacy, poetry and Earth Day, the school-year transition, summer exploration, back-to-school, literacy and fall, Halloween, kindness and writing, and winter. July’s independent-choice treatment is an original adaptation rather than a national holiday skin. The site is for curious visitors, not a claim of classroom/age validation. Movable holidays and astronomical dates are not hardcoded as annual factual claims. Cultural heritage months and commemorations are not reduced to decorative costumes. No HMH artwork, lesson text or affiliation is used.

[TikTok’s 2026 forecast](https://ads.tiktok.com/business/en-US/next) describes discovery through adjacent interests and active curiosity. [Pinterest’s 2026 forecast](https://newsroom.pinterest.com/news/pinterest-predicts-nonconformity-self-preservation-and-escapism-drive-21-trends-for-2026/) describes individual expression and literary/analog aesthetics; its underlying English-language search analysis is global and historical, not current North American site engagement. The design translates these directional signals into original notebook, map, message and portal illustrations. These are design hypotheses, not proof that a theme will appeal to every Gen-Z visitor or improve conversions. No borrowed memes, licensed characters or invented popularity numbers.

## Interaction and accessibility contract

- Homepage only; preserve the existing light/dark appearance preference, quiz banks, routes, scoring and saved progress.
- Three tap/keyboard choices expose an immediate, accurately labelled quiz invitation. Original fiction is labelled; preference wording is descriptive.
- SVG and CSS only. No video download, audio, tracking addition, animation dependency or pointer-following effect.
- Slow movement; visible pause control; OS reduced-motion preference disables animation. Still artwork and every link remain usable.
- Hide restores focus to the homepage heading and removes decorative accents. Show restores the seasonal panel for that visit and focuses its heading.
- Mobile uses a single column, wrapping controls and touch targets of at least 44px; artwork never covers navigation or text.
- Future themes reuse six illustration families with distinct palettes, copy and routes; 18 fully bespoke animation scenes are not claimed.

## Verification / release

See `work/homepage-themes/` for the scoped source review, browser captures, production build/discovery/analytics receipts and deployment record. Schedule tests cover every date in several years including leap year, UTC/local boundaries, daylight saving and listener cleanup. Release evidence is appended below only after verified deployment.

Verified release: [October 25, 2026 release and receipts](homepage-themes/2026-10-25/RELEASE.md). Source12242737; Worker cb117c71,100%;300tests pass. Next automatic change November1.
