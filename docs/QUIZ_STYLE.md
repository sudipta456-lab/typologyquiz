# Quiz Authoring Contract

Rules for anyone (human or LLM) writing quiz content in `src/lib/tests/*.ts`.
Enforced where possible by `node scripts/lint-quiz-style.mjs` (run it before committing).

## Schema (see `src/lib/types.ts`)

- One `TestDefinition` per file, registered in `registry.ts`. Never reorder or rename registry entries.
- Required: `slug`, `title`, `category`, `description`, `whatYoullLearn`, `timeMinutes`, `itemCount`, `license`, `questions`, `axes`, `resultType`, `funFacts`, `disclaimer`.
- `itemCount` must equal the number of questions (branching probes included).
- Every question `axis` must match a key in `axes[]`, and every axis must have questions. No orphans in either direction.
- `scoreMode`:
  - `"type"`: ipsative pick-top. Requires `typeMeta` (one entry per axis key) and a `balanced` fallback for flat profiles.
  - `"spectrum"`: single axis. Requires `spectrumBands` ascending by `max`.
  - `"scale"`: per-axis 0-100 profile; add `norms` only with a real source.
- Question ids: short stable prefix + number (`att_s01`). Never change an id after ship; results are stored against them.
- Branching (`showIf`) is optional. If you use it on a type quiz, keep probes symmetric across axes (one per axis, same trigger polarity), or straight-liners escape the balanced result.

## Reverse-keying (required)

Every axis on a likert quiz needs at least one reverse-keyed item (`direction: -1`) so straight-lining lands on the balanced/mixed result instead of a fake type. Aim for 2 forward + 1-2 reverse per axis minimum. Exceptions: right/wrong instruments (`correctAnswer`, e.g. CRT) and faithful ports of real single-direction instruments (e.g. VVIQ) — note the exception in a comment.

## Tone

- Human, warm, playful-but-kind. Written for a 10-21 audience without talking down.
- Result copy pattern that works: what you're like, a genuine strength, one gentle watch-out. Tease the reader the way a friend would; never shame.
- Second person ("you"), concrete images over abstractions, short sentences over subclause towers.
- No clinical or diagnostic claims. "Which type's energy you match", never "you have X".

## Banned patterns

- **Em-dashes (`—`) in any user-facing string.** Use commas, periods, colons, semicolons, or parentheses. En-dash for numeric ranges is fine. (This is the #1 LLM drift pattern here.)
- **Emoji in labels, titles, descriptions, or any copy.** Category chips are text codes ("PERS"); result labels are plain text. Non-Latin script that carries meaning (목, वात, ٢) is fine — it's text, not decoration.
- Generic AI chrome: "Let's dive in", "unleash", "embark on a journey", "In a world where...", rule-of-three padding, "It's not X, it's Y" as a tic.
- Empty descriptions, TODO/FIXME placeholders, lorem text.

Bad label: `"⛪ The Church Aunty/Uncle"` · Good label: `"The Church Aunty/Uncle"`

Bad copy: `"You're genuinely attentive — people feel wanted around you."`
Good copy: `"You're genuinely attentive; people feel wanted around you."`

## Disclaimers

- Every quiz has a `disclaimer`. It names what the quiz is NOT: not a diagnosis, not fortune-telling, not a verdict. Keep it one or two sentences, in-voice ("for fun, not fortune-telling"), not legal boilerplate.
- Quizzes touching mental-health-adjacent themes (burnout, overthinking, attachment) add a pointer that real support beats a quiz when it's serious.

## Cultural quizzes

- Frame as affectionate celebration, never stereotype enforcement; say so in the disclaimer.
- Add a `terms` glossary for every foreign or culture-specific word used (term + plain-English note). If the quiz borrows a real tradition (saju, fal-e Hafez, Ayurveda), the glossary or funFacts must say what the real tradition actually is, and the disclaimer must separate this quiz from it.
- Folk/religious material: folklore characters and public-domain traditions only; no religious figures or claims about anyone's actual faith, heritage, or destiny.

## Licensing line

- `license` states provenance honestly:
  - Original items: `"Original TypologyQuiz items (for self-reflection only)"` or `"Original TypologyQuiz items inspired by X research (for self-reflection only)"`.
  - Ports of public-domain/open instruments: name the instrument and source, set `sourceUrl`.
- Never claim an official instrument if the items are paraphrased ("-lite", "inspired by").

## Before you commit

1. `node scripts/lint-quiz-style.mjs` — must exit 0.
2. `npx tsc --noEmit` — must pass.
3. Read your result copy out loud once. If a sentence sounds like a press release, rewrite it.
