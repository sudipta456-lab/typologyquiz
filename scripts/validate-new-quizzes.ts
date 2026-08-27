import { TESTS, scoreTest } from "../src/lib/tests/registry";

// Validation harness for the 2026 quiz batch.
const NEW_SLUGS = [
  // General
  "mental-age",
  "delulu-level",
  "group-chat-archetype",
  "flag-profile",
  "actually-the-problem",
  "internet-persona",
  "emotional-os",
  "overthinker-level",
  "brain-2am",
  "cringe-check",
  "friends-see-you",
  // Korea
  "personal-color",
  "saju-pillar",
  "kkotmal-flower",
  "kdrama-archetype",
  "seoul-dating-tier",
  // Japan
  "ketsueki-gata",
  "doubutsu-uranai",
  "shinrigaku-scene",
  "anime-protagonist",
  // China
  "tangping-level",
  "neijuan-race",
  "wanghong-persona",
  "huaren-netizen",
  // Iran
  "hafez-mirror",
  "fal-qahveh",
  "shahnameh-hero",
  "shahr-soul",
  // Arab world
  "ism-vibe",
  "abjad-number",
  "badiya-desert",
  // Africa
  "akan-day-name",
  "anansi-archetype",
  "naija-aunty",
  "nairobi-vibe",
  // India
  "prakriti-dosha",
  "nakshatra-mirror",
  "filmi-hero",
  "desi-family-role",
  // Europe
  "four-humors",
];

let failures = 0;
const fail = (msg: string) => {
  failures++;
  console.error("FAIL:", msg);
};

for (const slug of NEW_SLUGS) {
  const t = TESTS.find((x) => x.slug === slug);
  if (!t) {
    fail(`${slug} not registered`);
    continue;
  }
  if (t.itemCount !== t.questions.length)
    fail(`${slug}: itemCount ${t.itemCount} != questions ${t.questions.length}`);
  const axisKeys = new Set(t.axes.map((a) => a.key));
  for (const q of t.questions) {
    if (!axisKeys.has(q.axis)) fail(`${slug}: question ${q.id} references unknown axis ${q.axis}`);
    if (q.type !== "likert") fail(`${slug}: unexpected question type on ${q.id}`);
  }
  if ((t.scoreMode === "type" || t.scoreMode === "spectrum") && !t.typeMeta && !t.spectrumBands && !(t as any).balanced) {
    // type quizzes need typeMeta or balanced; spectrum needs spectrumBands
    if (t.scoreMode === "spectrum" && !t.spectrumBands) fail(`${slug}: spectrum missing spectrumBands`);
    if (t.scoreMode === "type" && !t.typeMeta) fail(`${slug}: type missing typeMeta`);
  }
  if (t.scoreMode === "type" && !t.balanced) fail(`${slug}: type mode should define balanced fallback`);
  if (t.scoreMode === "spectrum" && (!t.spectrumBands || t.spectrumBands.length < 3))
    fail(`${slug}: spectrum needs >=3 bands`);

  // Simulate a straight-line answer set (all 3s) — must not crash.
  const answers: Record<string, number> = {};
  for (const q of t.questions) answers[q.id] = 3;
  const r1 = scoreTest(t, answers);
  if (!r1.extras?.label) fail(`${slug}: straight-line produced no label`);

  // Simulate a strong top-axis pattern for type quizzes.
  if (t.scoreMode === "type" && t.axes[0]) {
    const firstAxis = t.axes[0].key;
    const ans2: Record<string, number> = {};
    for (const q of t.questions) ans2[q.id] = q.axis === firstAxis ? (q.direction === 1 ? 5 : 1) : 2;
    const r2 = scoreTest(t, ans2);
    if (!r2.extras?.label) fail(`${slug}: strong-pattern produced no label`);
  }

  console.log(
    `OK: ${slug.padEnd(22)} items=${String(t.itemCount).padStart(2)} axes=${t.axes.length} terms=${(t.terms ?? []).length} isNew=${!!t.isNew}`
  );
}

console.log(failures === 0 ? "\nALL CHECKS PASSED" : `\n${failures} FAILURES`);
process.exit(failures === 0 ? 0 : 1);
