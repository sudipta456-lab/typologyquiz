# Weekly news quiz: how an edition gets built

This is the spec the recurring Thursday job follows. It exists because that
job runs as a fresh session every week with no memory of the session that
built the feature (2026-09-07) - everything it needs to know has to live
here, not in a chat transcript.

The audience is someone who half-followed the news this week and wants to
find out how much they actually retained. Two independent editions, same
day, same rules: **World** and **North America**.

## 0. The contract in one paragraph

Each Thursday, replace `src/lib/newsquiz/world.ts` and
`src/lib/newsquiz/northamerica.ts` with a freshly drafted, then
independently fact-checked, set of multiple-choice questions about that
week's actual news. Every question cites the specific article it was
checked against. Nothing is copied from another outlet's own quiz. A
question that cannot be verified against a live, reputable source is
dropped, never patched with a guess. Deploy only after verification passes.

## 1. Files you touch

```
src/lib/newsquiz/world.ts          overwrite whole file
src/lib/newsquiz/northamerica.ts   overwrite whole file
tmp/newsquiz-*                     scratch, gitignored
```

Do **not** touch `src/lib/newsquiz/types.ts`, `registry.ts`,
`src/components/newsquiz/NewsQuizClient.tsx`, or either
`src/app/trivia/news-*/page.tsx` unless something about them is actually
broken (a typecheck failure, a rendering bug you can reproduce). Those are
the static scaffold; the weekly job's job is content only.

### The type shape (read `src/lib/newsquiz/types.ts` for the authoritative version)

```ts
interface NewsQuizQuestion {
  id: string;                 // "world-01".."world-NN" or "na-01".."na-NN"
  question: string;
  choices: readonly [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;        // 1-3 sentences, your own words
  sourceLabel: string;        // "Reuters", "The Hill", etc.
  sourceUrl: string;          // the SPECIFIC article, not a homepage
}

interface NewsQuiz {
  slug: "news-world" | "news-north-america";
  region: "World" | "North America";
  title: string;              // "World News Quiz - Week of <Month D, YYYY>"
  seoDescription: string;     // one sentence, question-form
  weekOf: string;             // ISO date (YYYY-MM-DD) of this Thursday
  questions: readonly NewsQuizQuestion[];
}
```

## 2. Research

Use WebSearch for news from roughly the past 7-10 days. Reputable outlets
only: AP, Reuters, AFP, BBC, NPR, major national papers, official
government/institutional sources (a central bank's own press release, a
statistics agency's own bulletin) when the story is about their own data.
No blogs, no aggregators, no opinion columns presented as fact, no outlet
that itself just repeats another outlet's reporting without adding
anything - go to the original.

**Always check the cited article's own publication date and content before
citing it.** The two defects caught in the first edition (2026-09-07) were
both this exact failure: a real, reputable article that was about a
DIFFERENT event than the one the question described - a year-old story with
the same shape, a different administration in office. A source being real
and reputable is necessary but not sufficient; it has to actually say what
the question claims it says, checked directly, not assumed from the
headline or your own recollection of researching it minutes earlier.

**Scope split:**
- **World**: genuinely international stories - foreign affairs,
  international politics, global economy, science, a war, a summit, a
  foreign election. A US/Canada-domestic-only story does not belong here
  even if notable.
- **North America**: US and Canada domestic news for the week - politics,
  economy, notable events, culture, national-level sports. A purely
  international story does not belong here even if the US or Canada is a
  minor participant.

## 3. Writing a question

- **Original wording, always.** Never copy or closely paraphrase a question
  from another outlet's own quiz product (BBC's weekly quiz, the NYT News
  Quiz, etc.). Test the same underlying fact, write your own question.
- Exactly 4 choices, one correct. Vary which position holds the correct
  answer across the edition - do not let one letter dominate.
- `explanation`: 1-3 sentences, your own words, why the right answer is
  right.
- `sourceLabel` + `sourceUrl`: the specific article, preferably a primary
  wire service (AP/Reuters/AFP) or whoever broke the story.
- Prefer clearly verifiable objective facts - a date, a number, a name, an
  outcome - over anything ambiguous, evolving, or contested.
- Draft roughly 13 per edition. There is no fixed final count: after
  verification (section 4) drops anything that fails, a healthy edition
  lands somewhere in the 10-15 range. Never pad back up to a round number
  with a weaker question just to hit a target.

**What to avoid, without exception, because this publishes with no human
review before it goes live:**
- Political opinion presented as fact, or framing that takes a side on a
  contested or divisive issue. If a story is inherently partisan, either
  find the neutral factual kernel (a vote count, a bill's actual text, a
  ruling's actual holding) or skip it.
- Anything that trivializes, is glib about, or is presented in a "trivia"
  register that reads as callous toward a death toll, casualty count, or
  ongoing tragedy. You can ask what happened, who was involved, what the
  response was - factually, soberly - without editorializing.
- A question whose correct answer could plausibly change before or shortly
  after publish (a live casualty count, an unresolved legal proceeding, an
  election still being called). Prefer settled, dated facts.

## 4. Verification - mandatory, not optional

Before any question is published, independently re-check it. This is not
the same step as drafting it, and should be done with genuine skepticism -
the drafting step already "verified" every question once and still let two
defects through in the first edition. For each drafted question:

1. Fetch or search the cited `sourceUrl` yourself. Confirm it is real,
   currently live, and reputable, and that it **actually supports the
   stated correct answer** - not "looks plausible," actually read it.
   Corroborate with a second independent source where you can.
2. Check the wording isn't suspiciously close to a phrasing you recognize
   from a known outlet's own quiz product.
3. Check tone against section 3's "what to avoid" list.
4. Check the four choices are fair - no giveaway phrasing, no absurd
   padding choice, no real ambiguity about which is correct.

**Any question that fails any of these checks gets dropped, not repaired
with a guessed correction.** A dropped question is a smaller edition; a
published wrong fact is a worse outcome than a smaller edition. This is
exactly what happened in the first edition and is the reason it shipped at
11 questions per region instead of 12 - do not treat that as a bug to
avoid, it is the safety mechanism working.

If, after your best effort, an edition would have fewer than 8 verified
questions, **do not publish a thin edition.** Leave that region's file
unchanged from last week and say so plainly in your final report - that
means the research step needs more effort next time, not that the bar
should move.

## 5. Publish

1. Overwrite `src/lib/newsquiz/world.ts` and/or
   `src/lib/newsquiz/northamerica.ts` with the verified content, matching
   the existing file's header-comment style (state what got dropped and
   why, same as the first edition's files do).
2. `npx tsc --noEmit -p .` - must be clean.
3. Commit, scoped to just the two content files (plus
   `src/lib/driving/summary.generated.ts` / `public/llms.txt` only if a
   build regenerated them as a side effect of something else - do not
   force-regenerate them yourself).
4. `npm run build`, then `npx tsx scripts/strip-bundled-handbook.mjs`, then
   `node_modules/.bin/wrangler.cmd deploy` (or `npx wrangler deploy` if the
   local binary isn't present) - the standard deploy sequence this project
   already uses for every change.
5. Verify live: both `/trivia/news-world/` and `/trivia/news-north-america/`
   return 200 and show this week's `weekOf` date, and - because this
   project has a documented history of a scoped `run_worker_first` change
   silently breaking POST endpoints site-wide - confirm `POST
   /api/stats/mental-age` and `POST /api/short` still return their normal
   app-level JSON responses (not an empty-body platform 405) after the
   deploy. See `docs/driving/R2-MIGRATION.md` for why this check exists.
6. Report: sources used, question counts per edition, anything dropped and
   why, the live verification results. This report is the only thing
   anyone will see of this run - write it as if no one will think to ask
   follow-up questions, because no one will be there to ask them.
