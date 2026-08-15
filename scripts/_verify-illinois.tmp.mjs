import { illinoisSets1to3 } from "../src/lib/driving/illinois/sets-1-3.ts";
import { illinoisSets4to6 } from "../src/lib/driving/illinois/sets-4-6.ts";
import { illinoisExcerpts } from "../src/lib/driving/illinois/excerpts.ts";
import fs from "node:fs";

const sets = [...illinoisSets1to3, ...illinoisSets4to6].sort((a, b) => a.setNumber - b.setNumber);
let errors = 0;
const err = (m) => { console.log("  ERROR  " + m); errors++; };
const warn = (m) => console.log("  warn   " + m);

const ids = new Set();
const pos = [0, 0, 0, 0];
let total = 0, starred = 0, withCtx = 0, withSrc = 0, wired = 0;
const topicAll = {};
const excerptKeys = new Set(illinoisExcerpts.map((e) => e.key));
const usedKeys = new Set();

console.log("=== Illinois ===");
for (const s of sets) {
  const p = [0, 0, 0, 0];
  const topics = {};
  for (const q of s.questions) {
    total++;
    if (ids.has(q.id)) err(`duplicate id ${q.id}`);
    ids.add(q.id);
    if (!/^il_s\d_\d\d$/.test(q.id)) err(`${q.id}: id format`);
    if (q.choices.length !== 4) err(`${q.id}: ${q.choices.length} choices`);
    const norm = q.choices.map((c) => c.trim().toLowerCase());
    if (new Set(norm).size !== norm.length) err(`${q.id}: duplicate options`);
    for (const c of q.choices) {
      if (/\b(all|both|none) of the above\b/i.test(c) || /\bboth [A-D] and\b/i.test(c))
        err(`${q.id}: meta-option`);
    }
    if (!Number.isInteger(q.correctIndex) || q.correctIndex < 0 || q.correctIndex >= q.choices.length)
      err(`${q.id}: correctIndex out of range`);
    else { pos[q.correctIndex]++; p[q.correctIndex]++; }
    if (!q.explanation || q.explanation.trim().length < 20) err(`${q.id}: explanation too short`);
    if (!q.question || q.question.trim().length < 10) err(`${q.id}: question too short`);
    if (!q.trap) err(`${q.id}: missing trap`);
    if (q.context && q.context.trim().length >= 40) withCtx++; else err(`${q.id}: weak context`);
    if (q.sourceUrl) withSrc++; else err(`${q.id}: no sourceUrl`);
    if (!q.sourceLabel) err(`${q.id}: no sourceLabel`);
    if (q.commonlyMissed) starred++;
    if (q.excerptKey) {
      wired++; usedKeys.add(q.excerptKey);
      if (!excerptKeys.has(q.excerptKey)) err(`${q.id}: excerptKey "${q.excerptKey}" unresolved`);
    }
    topics[q.topic] = (topics[q.topic] ?? 0) + 1;
    topicAll[q.topic] = (topicAll[q.topic] ?? 0) + 1;
    // interleaving: no 3 consecutive same topic
  }
  // consecutive-topic check
  for (let i = 0; i + 2 < s.questions.length; i++) {
    if (s.questions[i].topic === s.questions[i + 1].topic && s.questions[i].topic === s.questions[i + 2].topic)
      err(`${s.id}: 3 consecutive ${s.questions[i].topic} questions`);
  }
  const n = s.questions.length;
  const share = Math.max(...p) / n;
  const dom = Math.max(...Object.values(topics)) / n;
  const line = p.map((v, i) => `${"ABCD"[i]}:${v}(${Math.round((v / n) * 100)}%)`).join(" ");
  console.log(`  ${s.id} [${s.difficulty}] n=${n}  ${line}  maxLetter=${Math.round(share * 100)}%  topTopic=${Math.round(dom * 100)}%`);
  if (share > 0.30) err(`${s.id}: answer-position share ${Math.round(share * 100)}% > 30%`);
  if (dom > 0.5) err(`${s.id}: ${Math.round(dom * 100)}% one topic`);
}

const pct = (x) => Math.round((x / total) * 100);
console.log(`\n  TOTAL questions: ${total}`);
console.log(`  overall positions: ${pos.map((v, i) => `${"ABCD"[i]}:${v}(${pct(v)}%)`).join(" ")}`);
console.log(`  commonlyMissed: ${starred} (${pct(starred)}%)`);
console.log(`  context: ${pct(withCtx)}%   sourceUrl: ${pct(withSrc)}%   excerpt-wired: ${wired}/${total} (${pct(wired)}%)`);
console.log(`  excerpts: ${illinoisExcerpts.length}, unused: ${illinoisExcerpts.filter((e) => !usedKeys.has(e.key)).length}`);
console.log(`  topics: ${Object.entries(topicAll).sort((a, b) => b[1] - a[1]).map(([t, n]) => `${t}:${n}`).join(" ")}`);

if (pct(starred) < 17 || pct(starred) > 25) err(`commonlyMissed ${pct(starred)}% outside 17-25%`);
if (pct(wired) < 90) err(`only ${pct(wired)}% wired to excerpts`);
const overallMax = Math.max(...pos) / total;
if (overallMax > 0.28) err(`overall answer-position skew ${Math.round(overallMax * 100)}%`);

// --- excerpt verification: every quote must be a literal substring of the source
const HB = fs.readFileSync("C:/tmp/il26_flat.txt", "utf8");
const ILGA = JSON.parse(fs.readFileSync("C:/tmp/ilga_flat.json", "utf8"));
const statutes = Object.values(ILGA).join("\n\n");
const seen = new Set();
let hbOK = 0, ilgaOK = 0, fail = 0;
for (const e of illinoisExcerpts) {
  if (seen.has(e.key)) err(`duplicate excerpt key ${e.key}`);
  seen.add(e.key);
  if (!e.source) err(`${e.key}: no source`);
  if (!e.section) err(`${e.key}: no section`);
  if (!e.url) err(`${e.key}: no url`);
  else if (!/(ilsos\.gov|ilga\.gov)/.test(e.url)) err(`${e.key}: non-official url ${e.url}`);
  if (e.quote.length < 15) err(`${e.key}: quote too short`);
  if (e.quote.length > 600) err(`${e.key}: quote ${e.quote.length} chars > 600`);
  if (HB.includes(e.quote)) hbOK++;
  else if (statutes.includes(e.quote)) ilgaOK++;
  else { err(`${e.key}: QUOTE NOT A SUBSTRING OF ANY SOURCE -> ${e.quote.slice(0, 70)}`); fail++; }
}
const chars = illinoisExcerpts.reduce((n, e) => n + e.quote.length, 0);
console.log(`\n  excerpt substring check: handbook ${hbOK}, statute/admin-code ${ilgaOK}, FAILED ${fail}`);
console.log(`  quoted total: ${(chars / 1000).toFixed(1)}k chars, mean ${Math.round(chars / illinoisExcerpts.length)} chars`);
console.log(`  over 320 chars (soft warn): ${illinoisExcerpts.filter((e) => e.quote.length > 320).length}`);

console.log(`\n${"=".repeat(50)}\nERRORS: ${errors}`);
process.exit(errors > 0 ? 1 : 0);
