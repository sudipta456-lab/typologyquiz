# Driving bank playbook: how a jurisdiction gets built

This is the brief a builder follows to add one province, territory or state to
`/driving/`. The first 22 banks were built to this shape; every later one must
be indistinguishable from them. Read it end to end before writing a question.

The audience is a nervous 16-year-old on a phone the night before their test.
Everything below serves that person.

## 0. The contract in one paragraph

Six original sets, 195 questions, every fact checked against the CURRENT
official handbook and (where the handbook is silent) the statute. Every
question carries an explanation, the surrounding rule in plain words, the trap
people fall into, and a key into a library of short VERBATIM handbook excerpts
that each carry a section reference and, wherever the source is a PDF, a page
number and a cropped picture of the passage. The bank is dated. The research
behind it is written up. Nothing is copied from another practice site, ever.

## 1. Files you create, and the only files you touch

```
src/lib/driving/<slug>/
  index.ts          exports { jurisdiction, excerpts, snippets, officialHosts }
  sets-1-3.ts       export const <camel>Sets1to3: DrivingTestSet[]
  sets-4-6.ts       export const <camel>Sets4to6: DrivingTestSet[]
  excerpts.ts       export const <camel>Excerpts: HandbookExcerpt[]
  snippets.json     written by the snippet pipeline (section 6)
public/handbook/<slug>/*.png      written by the snippet pipeline
docs/driving/research/<slug>.md   your research note (section 7)
tmp/<slug>-*                      scratch, gitignored
```

`<slug>` is the lowercase name with spaces removed (`southcarolina`,
`novascotia`, `newfoundlandlabrador`, `princeedwardisland`,
`northwestterritories`). `<camel>` is the same in camelCase.

You do NOT edit `jurisdictions.ts`, `excerpts.ts`, `validate-driving.mjs`, or
any file outside the paths above. Several builders run at once and those files
are wired by the integrator after your bank validates. Any official host your
excerpts cite that is not already in `validate-driving.mjs` goes in your
`officialHosts` export instead.

### index.ts template

```ts
import type { Jurisdiction, HandbookExcerpt } from "../types";
import { <camel>Sets1to3 } from "./sets-1-3";
import { <camel>Sets4to6 } from "./sets-4-6";
import { <camel>Excerpts } from "./excerpts";
import snippetsJson from "./snippets.json";

export const excerpts: HandbookExcerpt[] = <camel>Excerpts;
export const snippets = snippetsJson as Record<
  string,
  { src: string; page: number; width: number; height: number }
>;
/** Hosts the excerpts cite that validate-driving.mjs does not already list. */
export const officialHosts: string[] = ["dmv.example.gov", "legis.example.gov"];

export const jurisdiction: Jurisdiction = {
  slug: "<slug>",
  name: "...",
  code: "..",
  country: "US" | "CA",
  countryLabel: "United States" | "Canada",
  contentDate: "YYYY-MM-DD",          // today, the day you finished checking
  handbookEdition: "...",             // publisher's own edition label, if any
  researchNote: "docs/driving/research/<slug>.md",
  licenceName: "...",
  intro: "...",
  officialTest: { questionCount, passCount, passLabel, timeLimitMinutes?, notes: [...] },
  handbookName: "...",
  handbookUrl: "...",
  officialInfoUrl: "...",
  localGotchas: ["...", "...", "..."],
  sets: [...<camel>Sets1to3, ...<camel>Sets4to6].sort((a, b) => a.setNumber - b.setNumber),
};
```

Until `snippets.json` exists, `index.ts` will not compile. Create it as `{}`
first and let the pipeline overwrite it.

## 2. Sources, in order of authority

1. **The official driver handbook / manual / guide** for that jurisdiction,
   the edition currently published on the government's own site. Download the
   PDF to `tmp/<slug>-handbook.pdf`. If it is HTML only, save each section's
   visible text to `tmp/<slug>-handbook.txt` (and note it: the snippet pipeline
   is different, section 6).
2. **The statute** (Vehicle Code, Highway Traffic Act, Motor Vehicle Act,
   Highway Safety Code) on the legislature's official site, for anything the
   handbook states incompletely or not at all. Handbooks routinely omit the
   numbers the test still asks: statutory speed defaults, parking distances
   from hydrants and crosswalks, signalling distance, following distance
   behind emergency vehicles.
3. **The licensing authority's web pages** for the test format (question
   count, pass mark, time limit, retest wait), the graduated licensing stages
   and their restrictions, and fees. These change more often than the manual.

Rules for sources:

- Official only. `.gov`, `.gc.ca`, provincial and state domains, the
  legislature's own statute site, or the crown corporation that runs licensing
  (ICBC, SAAQ, SGI, MPI). No third-party practice sites, no aggregator PDFs,
  no Wikipedia for a fact that will be tested.
- Record the **edition** as the publisher labels it (cover date, revision
  code, "Version 3.2"). That string is `handbookEdition`.
- If a site blocks automated clients, use the Internet Archive capture of the
  SAME official URL and say so in the research note with the snapshot date.
  The `url` you cite stays the live official URL.
- If the handbook and the statute disagree, say so in the research note and
  build the question on a scenario where both readings give the same answer.
  Never pick a side silently.
- **Do not link a learner to the handbook's front page as the citation for a
  rule.** Cite the section by name, and the page number where the source has
  pages. The deep link plus section plus page is what lets a learner open the
  book and find the passage in ten seconds.

## 3. What learners say the test actually asks (Reddit and reliable blogs)

The handbook tells you what is testable. Forums tell you what is TESTED and
what people fail on. Do this research before writing set 5.

Search (WebSearch, then WebFetch the thread; `old.reddit.com` renders without
scripts if `www` refuses):

- `site:reddit.com "<jurisdiction>" permit test failed`
- `site:reddit.com "<jurisdiction>" knowledge test what to study`
- `site:reddit.com r/<jurisdiction-sub> "written test"` and the same in
  `r/driving`, `r/DMV`, `r/drivingtest`, `r/newdrivers`, `r/Teenagers`; for
  Canada `r/<province>`, `r/CanadaDriving`, `r/PersonalFinanceCanada` (GDL
  insurance threads), and the city subs (`r/Winnipeg`, `r/Halifax`,
  `r/Saskatoon`, `r/montreal`, `r/Quebec`)
- `"<jurisdiction>" "written test" OR "knowledge test" tips` on driving-school
  blogs and local news. Reliable means: a licensed driving school in that
  jurisdiction, a newspaper, the licensing authority's own FAQ or "most missed
  questions" page (several publish one).

What to extract, and how to use it:

- **Recurring traps**: any rule two or more independent people say they got
  wrong. These become `commonlyMissed: true` questions, set 5 material, and
  candidates for `localGotchas`.
- **Format surprises**: "it ended after 6 wrong", "the signs section is
  separate", "no time limit but they kicked me out at 45 minutes". Confirm
  against the official page, then put it in `officialTest.notes`.
- **Recent changes** people mention ("they changed the school-bus fine in
  2025"). Confirm in the statute or an official news release; if confirmed and
  the handbook has not caught up, the question follows the LAW and the
  research note records the lag.
- **What NOT to do**: never copy a question someone posted from memory of the
  real exam. That is a live exam item. Use it only to learn which RULE is
  tested, then write your own question on that rule from the handbook.

Record every thread you used in the research note: subreddit, thread title,
year, and a one-line paraphrase of the claim. No verbatim comment text.

## 4. Set shape

| Set | Title pattern | Difficulty | Questions |
|---|---|---|---|
| 1 | `<Name> Basics` | starter | 30 |
| 2 | `Core Rules of the Road` | easy | 30 |
| 3 | `Real Test Difficulty` | medium | 35 |
| 4 | `Across the Whole Manual` | medium | 35 |
| 5 | `The Ones People Fail On` | hard | 35 |
| 6 | `Exam Simulation` | exam | 30 |

Total 195. Question ids are `<code>_s<set>_<nn>` in lowercase, e.g.
`co_s1_01`, `qc_s5_17`. Every set interleaves topics (no topic above 50% of a
set) and every jurisdiction covers all eleven `DrivingTopic` values somewhere.
Set 6 mirrors the real exam's mix and has no scaffolding beyond the standard
fields. If the real test is sectioned (Ontario's signs/rules halves), set
`officialTest.sectionedBy` and make sure every set has at least five questions
per section.

## 5. Writing a question

Look at `src/lib/driving/maryland/sets-1-3.ts` for the voice. Then:

- **Original wording, always.** Not the handbook's sentence, not a practice
  site's, not a Reddit poster's memory of the exam. Test the same RULE in the
  same STYLE as the real exam.
- **Four choices** (three is acceptable when the rule is binary). Wrong
  answers are real misconceptions people hold, not filler. No "all of the
  above", no "both A and C".
- **Answer positions balanced** across the bank (validator errors above 40%
  on any one letter, warns above 33%). Vary as you write; do not fix it by
  shuffling at the end, since that breaks the "tempting wrong answer first"
  ordering you chose.
- `explanation`: why the right answer is right, in our own words, 2-3
  sentences.
- `context`: the surrounding rule, 2-4 sentences, so a differently-worded
  question on the real test is still answerable.
- `trap`: why the most tempting wrong answer is wrong. Present on at least 80%
  of questions.
- `excerptKey`: on at least 85% of questions. Many questions share one key.
- `sourceLabel`: `"<Handbook short name> - <Section name>"`; `sourceUrl`: the
  deep link (page-anchored `#page=N` for PDFs when the viewer honours it).
- `commonlyMissed: true` on 10-20% of the bank, chosen from section 3 and
  from the rules the handbook itself flags. These become the page's FAQ
  structured data, so they must be the questions with real search demand.
- Numbers are exact and from the source: speed limits, distances, BAC
  thresholds, fines, suspension lengths, GDL ages and hours. A wrong number
  fails a real learner. If the jurisdiction uses metres, the question uses
  metres.

House style (enforced elsewhere by lint, honoured here by hand): no em-dashes
anywhere in copy, use " - " with spaces; no emoji; no exclamation marks in
explanations; British/Canadian spelling for Canadian banks ("licence",
"centre", "kilometres") and American for US banks.

## 6. Excerpts and snippets

`excerpts.ts` holds 150-190 `HandbookExcerpt` entries. Each `quote` is
VERBATIM from the source, one or two sentences, under 320 characters (hard
cap 600). `section` names the chapter and heading as the publisher does;
`source` is the publication with edition; `url` is the deep link. Read the
Maryland file's header comment for the four permitted normalisations (curly
punctuation to ASCII, whitespace collapse, section symbol spelled out, a stem
plus its bulleted list run together in order). Nothing else is permitted. The
source's own typos stay.

Then prove it:

```bash
npx tsx scripts/extract-quotes.mjs <slug>
python scripts/verify-excerpts.py <slug> tmp/<slug>-handbook.pdf [tmp/<slug>-statute.txt ...]
```

`verify-excerpts.py` exits 1 on any quote that is not a contiguous substring
of a source. Fix the quote (never the source). Statute quotes: save the
statute page's visible text to a `.txt` and pass it as a second source. The
`tmp/<slug>-verify.json` it writes is your audit trail; quote its final line in
your completion report.

Then render the pictures:

```bash
# PDF handbooks
python scripts/build-excerpt-snippets.py <slug> tmp/<slug>-handbook.pdf
# HTML-only handbooks (Ontario-style): see scripts/build-html-snippets.mjs,
# add your slug to its source map, and run it; page is 0 for web sources.
```

The pipeline writes `public/handbook/<slug>/<key>.png` and
`src/lib/driving/<slug>/snippets.json`. Statute quotes will report MISS
against the handbook PDF; that is expected and fine. Aim for 80%+ of handbook
quotes rendered. Open three PNGs and look at them: a crop that cuts the first
letter off every line is a known failure mode.

## 7. The research note

`docs/driving/research/<slug>.md`, in this order:

1. **Sources read** - each with title, publisher, edition label, URL, the date
   you fetched it, and how (direct, or archive snapshot dated X).
2. **Test format** - question count, pass mark, time limit, early-stop rule,
   retest wait, fee, where taken; each with the official page it came from.
3. **Section and page map** - the handbook's table of contents with page
   numbers, so a future editor can re-verify without re-reading the book.
4. **What the handbook does not say** - every number the test expects that the
   book omits, and the statute section that supplies it.
5. **Conflicts** - handbook vs statute vs licensing page, and how each was
   resolved in the bank.
6. **What learners report** - the forum and blog research from section 3:
   source, title, year, one-line paraphrase, and which question ids it shaped.
7. **Local gotchas** - the three to five rules in `localGotchas`, each with a
   sentence on why it catches people.
8. **Verification** - the final lines from `verify-excerpts.py`,
   `build-excerpt-snippets.py` and `validate-driving.mjs --only <slug>`, with
   the date.

## 8. Validate before you report

```bash
npx tsx scripts/validate-driving.mjs --only <slug>
npx tsc --noEmit -p .
```

Zero errors. Read every warning and either fix it or explain it in the
research note. Then report, in this shape and nothing looser:

- Jurisdiction, slug, `contentDate`, `handbookEdition`
- Sources: list, with edition labels and fetch method
- Counts: questions per set, excerpts, snippets rendered, verify-excerpts
  result line (`N/N quotes verified verbatim`)
- Validator: the final `ERRORS: 0 WARNINGS: n` line and each warning
- Forum research: threads used (count) and the three strongest traps found
- Anything you could not verify, stated plainly, with what you did instead

"Done" without those lines is not a report.
