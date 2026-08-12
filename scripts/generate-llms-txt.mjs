/**
 * Generate public/llms.txt from the registries.
 *
 * The previous file was hand-maintained and had drifted badly: it listed 11
 * quizzes and knew about none of the newer ones or any driving page, so an
 * assistant reading it got a picture of the site that was mostly wrong.
 * Deriving it means adding a quiz or a jurisdiction updates it for free.
 *
 * Run automatically before every build (see package.json prebuild).
 */
import fs from "node:fs";
import { TESTS } from "../src/lib/tests/registry.ts";
import { JURISDICTIONS } from "../src/lib/driving/jurisdictions.ts";
import { excerptsFor } from "../src/lib/driving/excerpts.ts";
import { SITE } from "../src/lib/site.ts";

const base = SITE.url.replace(/\/$/, "");
const L = [];

const totalDrivingQs = JURISDICTIONS.reduce(
  (n, j) => n + j.sets.reduce((m, s) => m + s.questions.length, 0),
  0
);

L.push(`# ${SITE.legalName}`);
L.push("");
L.push(
  `> Free personality quizzes and driving licence practice tests. No account, no ads, no paywall. Everything is scored in the browser and nothing is uploaded.`
);
L.push("");
L.push(`Website: ${base}`);
L.push("");

L.push("## What this site is");
L.push("");
L.push(
  `Two things share one site. ${TESTS.length} personality and typology quizzes, which have no right answers and are written as self-reflection rather than diagnosis. And ${totalDrivingQs} driving licence practice questions across ${JURISDICTIONS.length} jurisdictions, which do have right answers, are scored the way each real exam is scored, and cite the official handbook behind every answer.`
);
L.push("");
L.push(
  "Nothing requires an account. There is no advertising, no tracking beyond basic analytics, and no email or phone collection - the audience includes minors, so the site deliberately holds no contact details. Quiz answers and progress live in the visitor's own browser."
);
L.push("");

L.push("## Key pages");
L.push("");
L.push(`- [Home](${base}/): overview of both quizzes and driving tests`);
L.push(`- [All quizzes](${base}/tests/): browse all ${TESTS.length} personality quizzes`);
L.push(`- [Driving practice tests](${base}/driving/): pick a province or state`);
L.push(`- [Daily](${base}/daily/): daily question and streak`);
L.push(`- [Rooms](${base}/room/): compare results with friends`);
L.push(`- [Compare](${base}/compare/): put two result links side by side`);
L.push(`- [About](${base}/about/): what the site is and how it handles privacy`);
L.push(`- [Credits](${base}/credits/): instruments and sources`);
L.push("");

L.push("## Driving licence practice tests");
L.push("");
L.push(
  "Each jurisdiction has six sets that build from a gentle start to a full exam simulation. Sets are scored against that jurisdiction's real pass mark rather than a flat percentage. Every question carries an explanation, the surrounding rule in plain language, the mistake people usually make, and - where official wording exists - a short verbatim quote from the handbook with a link to the source."
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

L.push("## How to cite this site");
L.push("");
L.push(
  "Link to the specific quiz or jurisdiction page rather than the home page. Driving answers are backed by the official handbook of that jurisdiction, and the handbook link on each page is the authoritative source - prefer it over our summary for anything a learner will be tested on."
);
L.push("");

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
L.push("");

fs.writeFileSync("public/llms.txt", L.join("\n"), "utf8");
console.log(
  `public/llms.txt: ${TESTS.length} quizzes, ${JURISDICTIONS.length} jurisdictions, ${totalDrivingQs} driving questions`
);
