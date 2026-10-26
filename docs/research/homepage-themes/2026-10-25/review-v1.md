**REVISE — two medium-severity findings.**

1. **P2: Hydration does not preserve panel height.** [SeasonalHomepage.module.css:59](/Users/sudiptasarkar/.codex/worktrees/quiz-expansion-250/typologyquiz/src/components/seasonal/SeasonalHomepage.module.css:59) reserves 570px for the placeholder, or 730px on mobile, but the replacement panel has independent content-driven sizing. Hydration can therefore move the category navigation and subsequent content. **Minimal fix:** give the placeholder and live panel a shared responsive sizing strategy, allowing enlarged text to grow; verify delayed hydration at desktop/mobile widths. Actual CLS was not measured.

2. **P2: Showing the theme loses keyboard focus.** [SeasonalHomepage.tsx:100](/Users/sudiptasarkar/.codex/worktrees/quiz-expansion-250/typologyquiz/src/components/seasonal/SeasonalHomepage.tsx:100) removes the focused “Show seasonal theme” button without focusing the restored content. **Minimal fix:** after mounting, focus the seasonal heading (`tabIndex={-1}`) or first detour control, preferably through a ref.

Checks completed:

- Four new tests passed; scoped TS/TSX lint passed. CSS was manually reviewed; ESLint ignores it.
- Confirmed exactly 18 treatments and independently checked 72 rollover boundaries, including new years and leap year.
- Revised UTC−6 handling matches the [Alberta government notice](https://www.alberta.ca/albertas-new-time-system-abt).
- All referenced summaries support the displayed eight-task counts and descriptive invitations.
- Checked palette/text contrast pairs pass; pause and reduced-motion handling look sound.
- No quiz-engine, progress, tracking, or historical Halloween-helper changes found.

SSR hydration snapshots and server/client composition look correct against installed Next 16 documentation. No files changed. Browser, touch, screen-reader, production build, and full verification remain the parent’s checks.