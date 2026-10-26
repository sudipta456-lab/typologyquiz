**PASS — no unresolved material issue found in the scoped final sources.**

- Motion-control names correctly match visible “Pause motion” / “Play motion”; disabled “Motion off: reduced motion” includes “Motion off.”
- Shared neutral/active layout, responsive minimum heights, restored-heading focus, and mobile label wrapping are present.
- Calendar contains 18 windows, with explicit post-transition UTC−6 handling.
- No copied preview routes/components found; git status shows no quiz-file changes.
- Four homepage-theme tests passed; scoped ESLint passed.

Source review only: browser, OS reduced-motion, screen-reader, full verify and production build were not independently repeated. No edits or deployment.

SHA256:
```text
src/components/seasonal/SeasonalHomepage.module.css
9655e2f2e22cad3a0771d129533bc628bc6c441deeb87b066c321d101f3d3d94

src/components/seasonal/SeasonalHomepage.tsx
da34c902f2c76127ac4021900ab306c53374363b405322db22fae4a2a1700b58

src/components/seasonal/halloween-season.ts
de8a29e57de3dca9431bbfdbe4719eca58027ebe572cab820c4144ab7ab8e3ee

src/components/seasonal/theme-calendar.ts
6faa2d35db02b3686afa90d72967b0a3c9214c97957b6c93c362ddb96fdd274a

src/app/page.tsx
8bf3862c7971e74328c6d0859c8dbf99511ef43729a7f678b08331b0dfd9660d

tests/homepage-themes.test.ts
161e0f63a7ed3b27981d6359094ea1fe21bf7ae0bd642d66707c707d983812c9
```