**REVISE — one unresolved P2 accessibility issue.**

[SeasonalHomepage.tsx:85](/Users/sudiptasarkar/.codex/worktrees/quiz-expansion-250/typologyquiz/src/components/seasonal/SeasonalHomepage.tsx:85): The motion button displays **“Pause motion” / “Play motion”**, but its accessible name is **“Pause animation” / “Resume animation.”** Voice-control users speaking the displayed label may fail to activate it. This violates [WCAG 2.5.3 Label in Name](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html).

Minimal fix: remove the enabled-state `aria-label` overrides so the visible text supplies the name; use **“Motion off: reduced motion”** for the disabled state.

Otherwise, no unresolved material findings:

- Earlier hydration reservation, restored-focus and mobile-label fixes are present.
- Four new tests, scoped ESLint, 72 additional calendar-boundary checks and diff whitespace checks passed.
- All 32 referenced quiz summaries have eight tasks; descriptions align.
- Seven reviewed file hashes remained unchanged. No preview route, copied component, or quiz-engine/progress/tracking changes found.

Limitations: source and bounded automated review only. I did not repeat browser, OS reduced-motion, voice-control or screen-reader testing, or the parent’s full verify/build. No files changed.