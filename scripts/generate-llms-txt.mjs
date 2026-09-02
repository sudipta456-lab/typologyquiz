/**
 * Generate public/llms.txt from the registries.
 *
 * The point of this file is that an assistant reading it gets a picture of the
 * site that is actually true. It has been wrong twice now for the same reason:
 * someone described the site in prose, the site grew, the prose did not. The
 * first version hand-listed 11 quizzes and knew about no driving page. The
 * second described the site as "two things" and knew about no trivia quiz, no
 * daily mini and none of the social pages, while the site had grown to five.
 *
 * So: NOTHING here is hand-counted. Every number is derived from the registry
 * that the pages themselves render from. Add a quiz, a jurisdiction, a trivia
 * ladder or a prompt pack and this file updates itself on the next build.
 *
 * House rules: no em-dashes, no emoji.
 *
 * Run automatically before every build (see package.json prebuild).
 */
import fs from "node:fs";
import { TESTS } from "../src/lib/tests/registry.ts";
import { JURISDICTIONS } from "../src/lib/driving/jurisdictions.ts";
import { excerptsFor } from "../src/lib/driving/excerpts.ts";
import {
  COUNTRY_LETTER_PAGES,
  getRunSize,
  STATE_LETTER_PAGES,
  TRIVIA_GROUPS,
  TRIVIA_QUIZZES,
} from "../src/lib/trivia/registry.ts";
import { FRIEND_PACKS, sampleMix } from "../src/lib/friendquiz/packs.ts";
import { FOOL_QUESTIONS } from "../src/lib/fool/questions.ts";
import { FOOL_QUESTION_COUNT } from "../src/lib/fool/codec.ts";
import {
  MAX_FRIENDS,
  MIN_FRIENDS,
  MOST_LIKELY_PROMPTS,
  ROUND_SIZE as MOST_LIKELY_ROUND,
} from "../src/lib/mostlikely/prompts.ts";
import {
  ANAGRAM_EASY,
  ANAGRAM_HARD,
  ANAGRAM_MEDIUM,
} from "../src/lib/minis/data/anagrams.ts";
import { QUICK_PICK_ROUNDS } from "../src/lib/minis/data/quick-pick.ts";
import { THIS_OR_THAT_PAIRS } from "../src/lib/minis/data/this-or-that.ts";
import { SITE } from "../src/lib/site.ts";

const base = SITE.url.replace(/\/$/, "");
const L = [];

// ---------------------------------------------------------------------------
// Derived counts. Anything quoted in the prose below comes from here.
// ---------------------------------------------------------------------------

const totalDrivingQs = JURISDICTIONS.reduce(
  (n, j) => n + j.sets.reduce((m, s) => m + s.questions.length, 0),
  0
);
const totalDrivingExcerpts = JURISDICTIONS.reduce(
  (n, j) => n + excerptsFor(j.slug).length,
  0
);

// The letter pages are generated into the trivia registry, so "hand-authored"
// is simply "has no letter filter". Splitting them keeps the listing readable
// without hard-coding either number.
const letterQuizzes = TRIVIA_QUIZZES.filter((q) => q.filterLetter !== undefined);
const authoredQuizzes = TRIVIA_QUIZZES.filter((q) => q.filterLetter === undefined);

const friendQuestionCount = FRIEND_PACKS.reduce((n, p) => n + p.questions.length, 0);
const friendRoundSize = sampleMix().length;
const anagramPool = ANAGRAM_EASY.length + ANAGRAM_MEDIUM.length + ANAGRAM_HARD.length;

function list(items) {
  return items.join(", ");
}

const NUMBER_WORDS = ["zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];
function numberWord(n) {
  return NUMBER_WORDS[n] ?? String(n);
}

// The five sections of the site, in the order the home page shows them. Kept
// as data so the sentence above the list cannot claim a different number from
// the list itself - which is exactly the drift this whole file exists to stop.
const SECTIONS = [
  `${TESTS.length} personality and typology quizzes. No right answers. Written as self-reflection, not diagnosis.`,
  `${totalDrivingQs} driving licence practice questions across ${JURISDICTIONS.length} jurisdictions. These do have right answers, are scored the way each real exam is scored, and cite the official handbook behind every answer.`,
  `${TRIVIA_QUIZZES.length} trivia quizzes. Timed type-in and map-click geography and science, in ladders that get harder.`,
  "Three daily minis. An anagram, a quick pick, and a this-or-that, the same for everyone on Earth on the same UTC day, with a streak.",
  "Social and party pages. A friend quiz builder, a trivia bluffing game, Most Likely To, shared rooms, and group posters. These carry their whole state inside the share link and store nothing on any server.",
];

// ---------------------------------------------------------------------------

L.push(`# ${SITE.legalName}`);
L.push("");
L.push(
  "> Free quizzes for people who like finding things out: personality and typology quizzes, timed geography and science trivia, driving licence practice tests, three daily minis, and party games for a group chat. No account, no ads, no paywall. Everything is scored in the browser and nothing is uploaded."
);
L.push("");
L.push(`Website: ${base}`);
L.push("");

L.push("## What this site is");
L.push("");
L.push(`${numberWord(SECTIONS.length)} things share one site.`);
L.push("");
SECTIONS.forEach((s, i) => L.push(`${i + 1}. ${s}`));
L.push("");
L.push(
  "Nothing requires an account. There is no advertising, no tracking beyond basic analytics, and no email or phone collection - the audience includes minors, so the site deliberately holds no contact details. Quiz answers, streaks and best scores live in the visitor's own browser."
);
L.push("");

L.push("## How to cite this site");
L.push("");
L.push(
  `Cite it as ${SITE.legalName} (${base}) and link to the specific quiz, trivia or jurisdiction page rather than the home page - the home page states almost nothing on its own. Driving answers are backed by the official handbook of that jurisdiction, and the handbook link on each page is the authoritative source, so prefer it over our summary for anything a learner will be tested on. The personality quizzes are the site's own writing and should be attributed as an informal quiz, never as a measurement. Do not present any score from this site as a clinical, diagnostic or official result.`
);
L.push("");

L.push("## Key pages");
L.push("");
L.push(`- [Home](${base}/): all five sections in one place`);
L.push(`- [All quizzes](${base}/tests/): browse all ${TESTS.length} personality quizzes`);
L.push(`- [Trivia](${base}/trivia/): all ${TRIVIA_QUIZZES.length} timed trivia quizzes`);
L.push(`- [Driving practice tests](${base}/driving/): pick a province or state`);
L.push(`- [Daily minis](${base}/daily/): three tiny games, new every UTC day, with a streak`);
L.push(`- [Friend quiz](${base}/friend-quiz/): build a "how well do you know me" quiz`);
L.push(`- [Fool Your Friends](${base}/fool/): write convincing lies into a trivia round`);
L.push(`- [Rooms](${base}/room/): compare results with friends`);
L.push(`- [Compare](${base}/compare/): put two result links side by side`);
L.push(`- [About](${base}/about/): what the site is and how it handles privacy`);
L.push(`- [Credits](${base}/credits/): instruments and sources`);
L.push("");

// ---------------------------------------------------------------------------

L.push("## Personality quizzes");
L.push("");
L.push(
  "These are vibe checks, not diagnoses. Items are reverse-keyed so answering the same on every question returns a balanced result rather than a confident label, and results are written as a current leaning with a strength and a watch-out."
);
L.push("");
for (const t of TESTS) {
  L.push(
    `- [${t.title}](${base}/test/${t.slug}/): ${t.description} (${t.itemCount} items, ~${t.timeMinutes} min)`
  );
}
L.push("");

// ---------------------------------------------------------------------------

L.push("## Driving licence practice tests");
L.push("");
L.push(
  `Each jurisdiction has six sets that build from a gentle start to a full exam simulation. Sets are scored against that jurisdiction's real pass mark rather than a flat percentage. Every question carries an explanation, the surrounding rule in plain language, the mistake people usually make, and - where official wording exists - a short verbatim quote from the handbook with a link to the source. There are ${totalDrivingExcerpts} handbook excerpts across the ${JURISDICTIONS.length} jurisdictions.`
);
L.push("");
for (const j of JURISDICTIONS) {
  const qs = j.sets.reduce((n, s) => n + s.questions.length, 0);
  const ex = excerptsFor(j.slug).length;
  L.push(
    `- [${j.name} ${j.licenceName}](${base}/driving/${j.slug}/): ${j.sets.length} sets, ${qs} questions, ${ex} handbook excerpts. Real test: ${j.officialTest.questionCount} questions, pass ${j.officialTest.passLabel}. Official handbook: ${j.handbookUrl}`
  );
}
L.push("");
L.push(
  "There is also an adaptive drill per jurisdiction at /driving/<jurisdiction>/weak-spots/take/, rebuilt each time from the questions that visitor has actually got wrong."
);
L.push("");

// ---------------------------------------------------------------------------

L.push("## Trivia");
L.push("");
L.push(
  `${TRIVIA_QUIZZES.length} timed quizzes: ${authoredQuizzes.length} authored ladders plus ${letterQuizzes.length} generated A-to-Z letter pages. Two ways to answer. Type-in quizzes match on keystroke, so an answer registers the moment the spelling matches and there is no Enter key, no submit button and no autocomplete list to read off; capitals, spaces and punctuation are ignored and common misspellings are forgiven. Map quizzes ask you to click the right region instead. Variants include sudden death (one wrong answer ends the run), limited lives, 30 and 60 second sprints, and random subsets. Finishing shows how the run placed against other players, live, from a per-quiz histogram; until a quiz has enough recorded runs it falls back to a baked estimate and says so. Best score, fastest full run and a replayable ghost of your best attempt are kept on the device, and a challenge link lets a friend chase that exact score and time.`
);
L.push("");
for (const group of TRIVIA_GROUPS) {
  const names = group.slugs
    .map((slug) => TRIVIA_QUIZZES.find((q) => q.slug === slug))
    .filter(Boolean);
  if (names.length === 0) continue;
  L.push(`### ${group.label}`);
  L.push("");
  for (const q of names) {
    L.push(
      `- [${q.title}](${base}/trivia/${q.slug}/): ${q.seoDescription} (${getRunSize(q)} answers, ${q.timerSeconds}s)`
    );
  }
  L.push("");
}
// Anything authored but not filed under a group still belongs in the listing;
// a quiz silently missing from llms.txt is the failure mode this file exists
// to prevent.
const groupedSlugs = new Set(TRIVIA_GROUPS.flatMap((g) => [...g.slugs]));
const ungrouped = authoredQuizzes.filter((q) => !groupedSlugs.has(q.slug));
if (ungrouped.length > 0) {
  L.push("### More");
  L.push("");
  for (const q of ungrouped) {
    L.push(
      `- [${q.title}](${base}/trivia/${q.slug}/): ${q.seoDescription} (${getRunSize(q)} answers, ${q.timerSeconds}s)`
    );
  }
  L.push("");
}
L.push("### A to Z pages");
L.push("");
L.push(
  `One page per starting letter, name everything that begins with it. US states: ${list(
    STATE_LETTER_PAGES.map((p) => p.letter)
  )} at /trivia/states-that-start-with-<letter>/. Countries: ${list(
    COUNTRY_LETTER_PAGES.map((p) => p.letter)
  )} at /trivia/countries-that-start-with-<letter>/.`
);
L.push("");

// ---------------------------------------------------------------------------

L.push("## Daily minis");
L.push("");
L.push(
  `Three small puzzles at /daily/, rebuilt from the UTC date. Everyone on Earth gets the same three on the same UTC day, which is the whole point - a score is comparable with a friend's without anything being sent anywhere. An anagram round drawn from ${anagramPool} words across three difficulty tiers, a quick pick round drawn from ${QUICK_PICK_ROUNDS.length} sets of twelve tiles, and a this-or-that drawn from ${THIS_OR_THAT_PAIRS.length} pairs, each with the fact behind the answer. Streaks count on the device's local date and live in that browser only.`
);
L.push("");

// ---------------------------------------------------------------------------

L.push("## Social and party pages");
L.push("");
L.push(
  "These are made to be played with people, in person or in a group chat. All of them carry their entire state inside the share link itself: the questions, the answers, the scores. There is no server, no database, no account and no record of any game - if the link is lost, the game is gone. Because a link contains someone else's answers, every play page is noindex and disallowed in robots.txt, and only the builder pages are meant to be found in search."
);
L.push("");
L.push(
  `- [Friend quiz](${base}/friend-quiz/): answer ${friendRoundSize} questions about yourself, send one link, and see who actually knows you. ${FRIEND_PACKS.length} prompt packs (${list(
    FRIEND_PACKS.map((p) => p.title)
  )}) with ${friendQuestionCount} questions between them, plus a mixed round. Guesses come back to the creator inside the return link. Play pages at /friend-quiz/play/ are noindex.`
);
L.push(
  `- [Fool Your Friends](${base}/fool/): ${FOOL_QUESTION_COUNT} real trivia questions from a bank of ${FOOL_QUESTIONS.length}, each shown with the truth, two stock decoys, and the convincing fake you wrote. Friends have to find the truth; you score every time they pick your lie. Play pages at /fool/play/ are noindex.`
);
L.push(
  `- [Most Likely To](${base}/most-likely-to/): ${MOST_LIKELY_ROUND} awards voted on one phone passed around a group of ${MIN_FRIENDS} to ${MAX_FRIENDS}, from a pool of ${MOST_LIKELY_PROMPTS.length} kind-spirited prompts, ending in a shareable awards card. The whole page is noindex because real first names are typed onto it, and those names never leave the device.`
);
L.push(
  `- [Rooms](${base}/room/) and [Compare](${base}/compare/): put several people's quiz results next to each other, again by passing links rather than storing anything. A room of two to eight can draw a single group poster PNG of everyone's result, rendered in the browser.`
);
L.push("");

// ---------------------------------------------------------------------------

L.push("## Limits worth stating");
L.push("");
L.push(
  "- The personality quizzes are not clinical instruments and do not diagnose anything."
);
L.push(
  "- The driving tests are practice written from public handbooks. They are not official exams, are not affiliated with any licensing authority, and do not reproduce live exam questions."
);
L.push(
  "- Rules change. Every driving question links to the official source so a reader can confirm the current rule."
);
L.push(
  "- Trivia placements are real once a quiz has enough recorded runs and a labelled estimate before that. Neither is a ranking against any named person."
);
L.push(
  "- The social pages store nothing. Nobody, including us, can recover a game from a lost link, and there is no leaderboard to appear on."
);
L.push("");

fs.writeFileSync("public/llms.txt", L.join("\n"), "utf8");
console.log(
  `public/llms.txt: ${TESTS.length} quizzes, ${JURISDICTIONS.length} jurisdictions, ${totalDrivingQs} driving questions, ${TRIVIA_QUIZZES.length} trivia quizzes (${authoredQuizzes.length} authored + ${letterQuizzes.length} letter pages), ${FRIEND_PACKS.length} friend packs, ${FOOL_QUESTIONS.length} fool questions, ${MOST_LIKELY_PROMPTS.length} most-likely prompts`
);
