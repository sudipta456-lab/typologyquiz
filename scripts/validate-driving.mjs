/**
 * Quality gate for the driving question banks.
 *
 * These are safety-critical: a wrong fact here makes someone fail a real test,
 * and a structural flaw can make a set passable without knowing anything. One
 * bank came back with 97 of 100 correct answers at index 0 - a learner could
 * have cleared it by always picking A. That class of bug is invisible when you
 * read questions one at a time, so it gets checked mechanically instead.
 *
 * Run: node scripts/validate-driving.mjs
 */
import { JURISDICTIONS } from "../src/lib/driving/jurisdictions.ts";
import { excerptsFor, getExcerpt } from "../src/lib/driving/excerpts.ts";

// Excerpts are short verbatim quotes from official handbooks. Two things keep
// that defensible: each quote stays brief, and every one is attributed with a
// link back to the source. Both are checked mechanically here, because "just
// one more sentence" is exactly the kind of drift nobody notices by eye.
const QUOTE_WARN = 320;
const QUOTE_MAX = 600;
// Government sources we accept a quote from. Statute and transport-department
// sites count as much as the handbooks - several rules are only stated in the
// legislation, and the handbook simply assumes them.
const OFFICIAL_HOSTS = [
  // Canada
  "alberta.ca",
  "gov.ab.ca",
  "ontario.ca",
  "news.ontario.ca",
  // Texas
  "dps.texas.gov",
  "txdot.gov",
  "statutes.capitol.texas.gov",
  // California
  "dmv.ca.gov",
  "dot.ca.gov",
  "leginfo.legislature.ca.gov",
  // Florida
  "flhsmv.gov",
  "fdot.gov",
  "leg.state.fl.us",
  "flsenate.gov",
  // New York
  "dmv.ny.gov",
  "dot.ny.gov",
  "nysenate.gov",
  // Illinois
  "ilsos.gov",
  "cyberdriveillinois.com",
  "illinois.gov",
  // Pennsylvania
  "dmv.pa.gov",
  "penndot.pa.gov",
  "pacodeandbulletin.gov",
  "pa.gov",
  "legis.state.pa.us",
  // Ohio
  "ohio.gov",
  "bmv.ohio.gov",
  "publicsafety.ohio.gov",
  "codes.ohio.gov",
  // Georgia
  "dds.georgia.gov",
  "georgia.gov",
  "dot.ga.gov",
];

let errors = 0;
let warnings = 0;

const err = (msg) => {
  console.log(`  ERROR   ${msg}`);
  errors++;
};
const warn = (msg) => {
  console.log(`  WARN    ${msg}`);
  warnings++;
};

// Phrases that mean the answer isn't actually decidable.
//
// These target hedging about WHICH OPTION IS CORRECT - the defect that made the
// externally-supplied bank unusable ("Answer: B or C", "generally 5 m ... follow
// posted"). They deliberately do NOT flag ordinary approximate prose: "roughly
// 150 metres of visibility" or "wet roads generally call for 5-10 mph less" are
// accurate real-world guidance, not indecision about the key.
//
// An earlier, blunter version of this list matched " or a blind crest" (because
// "a" falls in [A-D]) and "from either side", producing 47 false positives.
// A gate that cries wolf gets ignored, so it is tuned to the real failure.
const HEDGES = [
  /\banswer is\s+[A-D]\s+or\s+[A-D]\b/i,
  /\beither\s+[A-D]\s+or\s+[A-D]\b/i,
  /\bboth\s+[A-D]\s+and\s+[A-D]\s+(are|would be)\b/i,
  /\b(two|both)\s+answers?\s+(are|could be)\s+(correct|right|acceptable)\b/i,
  /\bcheck (the )?current\b/i,
  /\bconfirm (the )?(current|exact)\b/i,
  /\bvaries by (municipality|city|jurisdiction)\b.*\bcorrect\b/i,
];

for (const j of JURISDICTIONS) {
  console.log(`\n=== ${j.name} (${j.code}) — ${j.sets.length} sets ===`);

  const seenIds = new Set();
  const positions = [0, 0, 0, 0, 0];
  let totalQ = 0;
  let starred = 0;
  let withContext = 0;
  let withSource = 0;
  const topicTally = {};

  for (const set of j.sets) {
    if (!set.questions.length) {
      err(`${set.id}: no questions`);
      continue;
    }

    for (const q of set.questions) {
      totalQ++;

      if (seenIds.has(q.id)) err(`duplicate question id: ${q.id}`);
      seenIds.add(q.id);

      // Correctness of the answer key itself.
      if (!Number.isInteger(q.correctIndex)) {
        err(`${q.id}: correctIndex is not an integer`);
      } else if (q.correctIndex < 0 || q.correctIndex >= q.choices.length) {
        err(`${q.id}: correctIndex ${q.correctIndex} out of range (${q.choices.length} choices)`);
      } else {
        positions[q.correctIndex]++;
      }

      if (q.choices.length < 3 || q.choices.length > 5) {
        warn(`${q.id}: ${q.choices.length} choices`);
      }

      const norm = q.choices.map((c) => c.trim().toLowerCase());
      if (new Set(norm).size !== norm.length) {
        err(`${q.id}: duplicate answer options`);
      }

      // "All of the above" / "Both A and C" are absent from real exams and make
      // the item untestable once options get shuffled.
      for (const c of q.choices) {
        if (/\b(all|both|none) of the above\b/i.test(c) || /\bboth [A-D] and\b/i.test(c)) {
          err(`${q.id}: meta-option "${c.slice(0, 40)}"`);
        }
      }

      if (!q.explanation || q.explanation.trim().length < 20) {
        err(`${q.id}: missing or too-short explanation`);
      }

      for (const re of HEDGES) {
        if (re.test(q.explanation)) {
          warn(`${q.id}: hedged explanation matches ${re} — must be decidable`);
          break;
        }
      }

      if (q.context && q.context.trim().length >= 40) withContext++;
      if (q.sourceUrl) withSource++;
      if (q.commonlyMissed) starred++;

      topicTally[q.topic] = (topicTally[q.topic] ?? 0) + 1;

      if (!q.question || q.question.trim().length < 10) {
        err(`${q.id}: question text too short`);
      }
    }
  }

  // --- Handbook excerpts -------------------------------------------------
  const excerpts = excerptsFor(j.slug);
  const usedKeys = new Set();
  let wired = 0;
  for (const set of j.sets) {
    for (const q of set.questions) {
      if (!q.excerptKey) continue;
      wired++;
      usedKeys.add(q.excerptKey);
      if (!getExcerpt(j.slug, q.excerptKey)) {
        err(`${q.id}: excerptKey "${q.excerptKey}" does not resolve`);
      }
    }
  }

  const seenExcerptKeys = new Set();
  let quotedChars = 0;
  for (const e of excerpts) {
    if (seenExcerptKeys.has(e.key)) err(`duplicate excerpt key: ${e.key}`);
    seenExcerptKeys.add(e.key);

    if (!e.quote || e.quote.trim().length < 15) err(`excerpt ${e.key}: quote too short to be real`);
    quotedChars += e.quote.length;

    if (e.quote.length > QUOTE_MAX) {
      err(`excerpt ${e.key}: quote is ${e.quote.length} chars - too long to be a brief excerpt`);
    } else if (e.quote.length > QUOTE_WARN) {
      warn(`excerpt ${e.key}: quote is ${e.quote.length} chars - trim toward one or two sentences`);
    }

    // Attribution is the whole basis for quoting at all.
    if (!e.source) err(`excerpt ${e.key}: missing source`);
    if (!e.section) warn(`excerpt ${e.key}: missing section`);
    if (!e.url) {
      err(`excerpt ${e.key}: missing url - a quote without a link back is not attributed`);
    } else if (!OFFICIAL_HOSTS.some((h) => e.url.includes(h))) {
      err(`excerpt ${e.key}: url is not on a known official domain (${e.url.slice(0, 60)})`);
    }
  }

  const unused = excerpts.filter((e) => !usedKeys.has(e.key)).length;
  console.log(
    `  excerpts: ${excerpts.length} (${unused} unused), questions wired: ${wired}/${totalQ} (${Math.round(
      (wired / Math.max(1, totalQ)) * 100
    )}%), quoted total: ${(quotedChars / 1000).toFixed(1)}k chars`
  );
  if (excerpts.length > 0 && wired / Math.max(1, totalQ) < 0.6) {
    warn(`only ${Math.round((wired / totalQ) * 100)}% of questions link to official wording`);
  }

  // Answer-position balance. With 4 options, a fair bank sits near 25% each;
  // anything above ~40% means "always pick that letter" beats guessing.
  const maxShare = Math.max(...positions) / Math.max(1, totalQ);
  const posStr = positions
    .slice(0, 4)
    .map((n, i) => `${"ABCD"[i]}:${Math.round((n / Math.max(1, totalQ)) * 100)}%`)
    .join(" ");
  if (maxShare > 0.4) {
    err(`answer positions skewed — ${posStr} (a learner could pass by always picking one letter)`);
  } else if (maxShare > 0.33) {
    warn(`answer positions uneven — ${posStr}`);
  }

  const pct = (n) => Math.round((n / Math.max(1, totalQ)) * 100);
  console.log(`  questions: ${totalQ}`);
  console.log(`  answer positions: ${posStr}`);
  console.log(`  context: ${pct(withContext)}%  source links: ${pct(withSource)}%  starred: ${pct(starred)}%`);
  console.log(
    `  topics: ${Object.entries(topicTally)
      .sort((a, b) => b[1] - a[1])
      .map(([t, n]) => `${t}:${n}`)
      .join(" ")}`
  );

  if (pct(withSource) < 90) warn(`only ${pct(withSource)}% of questions link to an official source`);
  if (pct(withContext) < 80) warn(`only ${pct(withContext)}% have a context block`);
  if (pct(starred) < 8) warn(`only ${pct(starred)}% starred as commonly-missed`);

  // A set that is all one topic isn't exam-like.
  for (const set of j.sets) {
    const t = {};
    for (const q of set.questions) t[q.topic] = (t[q.topic] ?? 0) + 1;
    const dominant = Math.max(...Object.values(t)) / set.questions.length;
    if (dominant > 0.5) {
      warn(`${set.id}: ${Math.round(dominant * 100)}% of questions are one topic — real tests interleave`);
    }
  }

  // Ontario-style sectioned tests need enough of each half to score honestly.
  if (j.officialTest.sectionedBy?.length) {
    for (const set of j.sets) {
      for (const sec of j.officialTest.sectionedBy) {
        const n = set.questions.filter((q) => sec.topics.includes(q.topic)).length;
        if (n < 5) {
          err(`${set.id}: only ${n} questions in section "${sec.label}" — too few to score`);
        }
      }
    }
  }
}

console.log(`\n${"=".repeat(50)}`);
console.log(`ERRORS: ${errors}   WARNINGS: ${warnings}`);
process.exit(errors > 0 ? 1 : 0);
