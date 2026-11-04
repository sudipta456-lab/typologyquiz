import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { describe, test } from "node:test";

import type { Edition } from "../src/lib/editorial/types.ts";
import { APPROVAL_ATTESTATION, AUTOMATED_APPROVAL_ATTESTATION, createAutomatedApproval, createReviewPackage, hashJson, loadAndValidatePublished, validateApproval, validateAutomatedApproval, validateForPublication, type EvidenceFile, type Policy } from "../src/lib/newsquiz/publication.ts";
import { formatReviewMarkdown } from "../src/lib/newsquiz/review-format.ts";

const edition: Edition = {
  id: "news-world-2026-09-17", seriesId: "news-world", version: 1,
  title: "World", description: "Weekly news", publishedAt: "2026-09-17", audience: "general",
  questions: Array.from({ length: 8 }, (_, index) => ({
    id: `q${index}`, kind: "choice" as const, prompt: `Question ${index}?`, explanation: "Supported fact.",
    sources: [{ label: "Wire", url: `https://example.com/${index}` }],
    options: [{ id: "a", label: "A" }, { id: "b", label: "B" }], correctId: "a",
  })),
};

const evidence: EvidenceFile = {
  editionId: edition.id, version: 1, drafter: "Draft Agent", reviewer: "Review Agent", reviewedAt: "2026-09-16T18:00:00Z",
  questions: edition.questions.map((question, index) => ({ questionId: question.id, sourceUrl: question.sources[0].url, sourcePublishedAt: "2026-09-15", eventDate: "2026-09-14", retrievedAt: "2026-09-16T17:00:00Z", supportingFact: `Fact ${index}`, verdict: "pass" as const })),
};
const policy = { minimumNewsQuestions: 8, series: ["news-world", "news-us", "news-canada"] };

describe("publication review gate", () => {
  test("binds content and per-question evidence to the approval", () => {
    assert.deepEqual(validateForPublication(edition, evidence, policy), []);
    const review = createReviewPackage(edition, evidence, "draft.json", "evidence.json");
    const approval = { ...review, approvedBy: "Operator", approvedAt: "2026-09-17T12:00:00Z", attestation: APPROVAL_ATTESTATION };
    assert.deepEqual(validateApproval(approval, review), []);
    const changed = structuredClone(edition); changed.questions[0].explanation = "Changed.";
    assert.ok(validateApproval(approval, createReviewPackage(changed, evidence, "draft.json", "evidence.json")).some((error) => error.includes("stale")));
  });

  test("rejects legacy, thin/unknown news, unknown kinds, and deficient evidence", () => {
    const legacy = structuredClone(edition) as Edition & { legacy: boolean }; legacy.legacy = true;
    assert.ok(validateForPublication(legacy, evidence, policy).some((error) => error.includes("cannot be legacy")));
    const unknown = structuredClone(edition); unknown.seriesId = "news-unknown";
    assert.ok(validateForPublication(unknown, evidence, policy).some((error) => error.includes("unknown series")));
    const thin = structuredClone(edition); thin.questions = thin.questions.slice(0, 7);
    assert.ok(validateForPublication(thin, { ...evidence, questions: evidence.questions.slice(0, 7) }, policy).some((error) => error.includes("at least 8")));
    const unsupported = structuredClone(edition) as unknown as { questions: Array<Record<string, unknown>> }; unsupported.questions[0].kind = "future";
    assert.ok(validateForPublication(unsupported, evidence, policy).some((error) => error.includes("kind")));
    const badEvidence = structuredClone(evidence); badEvidence.reviewer = badEvidence.drafter; badEvidence.questions[0].verdict = "fail"; badEvidence.questions.splice(-2);
    const errors = validateForPublication(edition, badEvidence, policy);
    for (const fragment of ["independent", "verdict", "missing evidence"]) assert.ok(errors.some((error) => error.includes(fragment)), fragment);
  });

  test("evergreen four-format evidence validates and readable review contains every answer contract and media right", () => {
    const source = { label: "Reference", url: "https://example.com/reference" };
    const image = (id: string) => ({ id, label: id.toUpperCase(), image: { src: `/editorial/${id}.svg`, alt: `${id} shape`, creator: "TypologyQuiz", sourceUrl: `https://typologyquiz.com/credits/editorial-art#${id}`, license: "Original site artwork", licenseUrl: "https://typologyquiz.com/credits/editorial-art" } });
    const mixed: Edition = { id: "format-sampler-2026", seriesId: "format-sampler", version: 1, title: "Sampler", description: "Four formats", publishedAt: "2026-09-10", audience: "general", questions: [
      { id: "c", kind: "choice", prompt: "Choice prompt", explanation: "Choice explanation", sources: [source], options: [{ id: "a", label: "Alpha" }, { id: "b", label: "Beta" }], correctId: "b" },
      { id: "i", kind: "image-choice", prompt: "Image prompt", explanation: "Image explanation", sources: [source], options: [image("triangle"), image("square")], correctId: "triangle" },
      { id: "o", kind: "order", prompt: "Order prompt", explanation: "Order explanation", sources: [source], items: [{ id: "first", label: "First" }, { id: "second", label: "Second" }], correctOrder: ["first", "second"] },
      { id: "m", kind: "match", prompt: "Match prompt", explanation: "Match explanation", sources: [source], left: [{ id: "l1", label: "Left one" }, { id: "l2", label: "Left two" }], right: [{ id: "r1", label: "Right one" }, { id: "r2", label: "Right two" }], correctPairs: { l1: "r2", l2: "r1" } },
    ] };
    const evergreen: EvidenceFile = { editionId: mixed.id, version: 1, drafter: "Drafter", reviewer: "Reviewer", reviewedAt: "2026-09-10T12:00:00Z", questions: mixed.questions.map(q => ({ questionId: q.id, sourceUrl: source.url, sourcePublishedAt: null, eventDate: null, dateContext: "evergreen", retrievedAt: "2026-09-10T11:00:00Z", supportingFact: `Supports ${q.id}`, verdict: "pass", notes: "This stable reference is intentionally undated and was reviewed directly." })), media: ["triangle", "square"].map(optionId => ({ questionId: "i", optionId, sourceUrl: `https://typologyquiz.com/credits/editorial-art#${optionId}`, licenseUrl: "https://typologyquiz.com/credits/editorial-art", permittedUse: "Original TypologyQuiz artwork; used on this site", modificationNote: "none", verdict: "pass" })) };
    const mixedPolicy = { ...policy, series: [...policy.series, "format-sampler"] };
    assert.deepEqual(validateForPublication(mixed, evergreen, mixedPolicy), []);
    const review = createReviewPackage(mixed, evergreen, "edition.json", "evidence.json"); const markdown = formatReviewMarkdown(mixed, evergreen, review);
    for (const fragment of ["b: Beta", "Image `triangle`", "creator: TypologyQuiz", "Correct sequence", "first: First", "Left column", "Right column", "l1: Left one", "r2: Right two", "Rights review `triangle`", "Original TypologyQuiz artwork; used on this site"]) assert.ok(markdown.includes(fragment), fragment);
    const missingMedia = structuredClone(evergreen); missingMedia.media?.pop();
    assert.ok(validateForPublication(mixed, missingMedia, mixedPolicy).some(error => error.includes("missing rights review")));
    const newsEvergreen = structuredClone(evidence); newsEvergreen.questions[0] = { ...newsEvergreen.questions[0], sourcePublishedAt: null, eventDate: null, dateContext: "evergreen", notes: "Undated evergreen reference with sufficient explanatory context." };
    assert.ok(validateForPublication(edition, newsEvergreen, policy).some(error => error.includes("news requires")));
  });

  test("malformed values and dates reject without throwing internally", () => {
    const malformed = structuredClone(edition) as unknown as { id: string; publishedAt: string; questions: unknown[] };
    malformed.id = "../escape"; malformed.publishedAt = "2026-99-99"; malformed.questions = [null];
    const errors = validateForPublication(malformed, { drafter: 5, reviewer: 5 }, policy);
    assert.ok(errors.some((error) => error.includes("route-safe")));
    assert.ok(errors.some((error) => error.includes("publishedAt")));
  });

  test("rejects a fabricated legacy manifest entry even when its self-declared hash matches", () => {
    const root = mkdtempSync(join(tmpdir(), "editorial-registry-"));
    mkdirSync(join(root, "content/published"), { recursive: true });
    mkdirSync(join(root, "content/legacy"), { recursive: true });
    writeFileSync(join(root, "content/publication-policy.json"), JSON.stringify(policy));
    const legacy = { ...edition, legacy: true };
    writeFileSync(join(root, "content/legacy/edition.json"), JSON.stringify(legacy));
    writeFileSync(join(root, "content/published/index.json"), JSON.stringify([{ id: legacy.id, seriesId: legacy.seriesId, version: 1, publishedAt: legacy.publishedAt, editionPath: "../legacy/edition.json", contentHash: hashJson(legacy), status: "legacy" }]));
    assert.throws(() => loadAndValidatePublished(root), /unpinned legacy/);
  });

  test("CLI promotes successfully, validates afterward, and a stale approval leaves no mutation", () => {
    const root = mkdtempSync(join(tmpdir(), "editorial-cli-"));
    mkdirSync(join(root, "content/published"), { recursive: true });
    mkdirSync(join(root, "content/drafts"), { recursive: true });
    writeFileSync(join(root, "content/publication-policy.json"), JSON.stringify(policy));
    writeFileSync(join(root, "content/published/index.json"), "[]\n");
    const editionFile = join(root, "content/drafts/edition.json");
    const evidenceFile = join(root, "content/drafts/evidence.json");
    const reviewFile = join(root, "review.json");
    const approvalFile = join(root, "approval.json");
    writeFileSync(editionFile, JSON.stringify(edition)); writeFileSync(evidenceFile, JSON.stringify(evidence));
    const reviewScript = join(process.cwd(), "scripts/editorial-review.mts");
    const promoteScript = join(process.cwd(), "scripts/editorial-promote.mts");
    execFileSync(process.execPath, ["--experimental-strip-types", reviewScript, editionFile, evidenceFile, reviewFile], { cwd: root });
    const review = JSON.parse(readFileSync(reviewFile, "utf8"));
    const readable = readFileSync(reviewFile.replace(/\.json$/, ".md"), "utf8");
    for (const fragment of [edition.questions[0].prompt, "a: A; b: B", "Correct answer: `a: A`", edition.questions[0].explanation, evidence.questions[0].supportingFact]) assert.ok(readable.includes(fragment), fragment);
    writeFileSync(approvalFile, JSON.stringify({ ...review, approvedBy: "Operator", approvedAt: "2026-09-17T12:00:00Z", attestation: APPROVAL_ATTESTATION }));
    execFileSync(process.execPath, ["--experimental-strip-types", promoteScript, reviewFile, approvalFile], { cwd: root });
    assert.equal(loadAndValidatePublished(root).length, 1);

    const changed = structuredClone(edition); changed.version = 2;
    const changedEvidence = structuredClone(evidence); changedEvidence.version = 2;
    const changedEditionFile = join(root, "content/drafts/edition-v2.json");
    const changedEvidenceFile = join(root, "content/drafts/evidence-v2.json");
    const changedReviewFile = join(root, "review-v2.json");
    writeFileSync(changedEditionFile, JSON.stringify(changed)); writeFileSync(changedEvidenceFile, JSON.stringify(changedEvidence));
    execFileSync(process.execPath, ["--experimental-strip-types", reviewScript, changedEditionFile, changedEvidenceFile, changedReviewFile], { cwd: root });
    const manifestBefore = readFileSync(join(root, "content/published/index.json"), "utf8");
    assert.throws(() => execFileSync(process.execPath, ["--experimental-strip-types", promoteScript, changedReviewFile, approvalFile], { cwd: root, stdio: "pipe" }));
    assert.equal(readFileSync(join(root, "content/published/index.json"), "utf8"), manifestBefore);
    assert.equal(existsSync(join(root, `content/published/${changed.seriesId}/${changed.id}/v2`)), false);
  });
});

describe("automated model-review approval", () => {
  // Fixed Thursday; 18:00Z is 12:00 in Edmonton (UTC-6), so no test depends on the real clock.
  const thursday = "2026-11-05";
  const now = new Date("2026-11-05T18:00:00Z");
  const autoPolicy: Policy = { ...policy, mode: "automated-model-review", changedAt: "2026-11-03" };

  function fixture(seriesId = "news-world", date = thursday) {
    const auto: Edition = { ...structuredClone(edition), id: `${seriesId}-${date}`, seriesId, publishedAt: date };
    const ev: EvidenceFile = {
      editionId: auto.id, version: 1, drafter: "claude-sonnet-5-5", reviewer: "claude-opus-5-5", reviewedAt: "2026-11-05T16:00:00Z",
      questions: auto.questions.map((question, index) => ({ questionId: question.id, sourceUrl: question.sources[0].url, sourcePublishedAt: "2026-11-04", eventDate: "2026-11-03", retrievedAt: "2026-11-05T15:00:00Z", supportingFact: `Fact ${index}`, verdict: "pass" as const })),
      modelReview: { producerModel: "claude-sonnet-5-5", reviewerModel: "claude-opus-5-5", contentHash: hashJson(auto) },
    };
    return { auto, ev };
  }
  const approve = (auto: Edition, ev: EvidenceFile, p: Policy = autoPolicy, at = now) =>
    createAutomatedApproval(auto, ev, createReviewPackage(auto, ev, "edition.json", "evidence.json"), p, at);

  test("passes and the receipt loads from the registry even after the live policy is paused", () => {
    const { auto, ev } = fixture();
    assert.deepEqual(validateForPublication(auto, ev, autoPolicy), []);
    const approval = approve(auto, ev);
    assert.equal(approval.attestation, AUTOMATED_APPROVAL_ATTESTATION);
    assert.equal(approval.approvedBy, ev.reviewer);
    const root = mkdtempSync(join(tmpdir(), "editorial-auto-"));
    const dir = join(root, "content/published", auto.seriesId, auto.id, "v1");
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(root, "content/publication-policy.json"), JSON.stringify({ ...autoPolicy, mode: "human-review" }));
    function storeReceipt(receipt: typeof approval) {
      writeFileSync(join(dir, "edition.json"), JSON.stringify(auto));
      writeFileSync(join(dir, "evidence.json"), JSON.stringify(ev));
      writeFileSync(join(dir, "approval.json"), JSON.stringify(receipt));
      const path = `${auto.seriesId}/${auto.id}/v1`;
      writeFileSync(join(root, "content/published/index.json"), JSON.stringify([{
        id: auto.id, seriesId: auto.seriesId, version: 1, publishedAt: auto.publishedAt,
        editionPath: `${path}/edition.json`, contentHash: receipt.contentHash, status: "approved",
        evidencePath: `${path}/evidence.json`, evidenceHash: receipt.evidenceHash,
        approvalPath: `${path}/approval.json`, approvalHash: hashJson(receipt), reviewHash: receipt.reviewHash,
      }]));
    }
    storeReceipt(approval);
    assert.equal(loadAndValidatePublished(root).length, 1);

    ev.questions[0].eventDate = "2026-10-29";
    storeReceipt({ ...approval, ...createReviewPackage(auto, ev, "edition.json", "evidence.json") });
    assert.throws(() => loadAndValidatePublished(root), /eventDate: must fall between/);
  });

  test("rejects same, swapped, or non-canonical models", () => {
    const same = fixture(); same.ev.reviewer = same.ev.drafter; same.ev.modelReview!.reviewerModel = same.ev.drafter;
    assert.throws(() => approve(same.auto, same.ev), /claude-opus|independent/);
    const swapped = fixture(); swapped.ev.drafter = "claude-opus-5-5"; swapped.ev.reviewer = "claude-sonnet-5-5";
    swapped.ev.modelReview = { ...swapped.ev.modelReview!, producerModel: "claude-opus-5-5", reviewerModel: "claude-sonnet-5-5" };
    assert.throws(() => approve(swapped.auto, swapped.ev), /claude-sonnet model id/);
    const label = fixture(); label.ev.reviewer = "Opus";
    assert.throws(() => approve(label.auto, label.ev), /must equal modelReview\.reviewerModel/);
    const missing = fixture(); delete missing.ev.modelReview;
    assert.throws(() => approve(missing.auto, missing.ev), /modelReview: required/);
  });

  test("rejects changed content or a stale review package", () => {
    const { auto, ev } = fixture();
    const staleReview = createReviewPackage(auto, ev, "edition.json", "evidence.json");
    const changed = structuredClone(auto); changed.questions[0].explanation = "Changed after review.";
    assert.throws(() => createAutomatedApproval(changed, ev, staleReview, autoPolicy, now), /stale/);
    const approval = approve(auto, ev);
    const errors = validateAutomatedApproval(approval, createReviewPackage(changed, ev, "edition.json", "evidence.json"), changed, ev);
    assert.ok(errors.some((error) => error.includes("stale")) && errors.some((error) => error.includes("contentHash")));
  });

  test("rejects wrong series, version, id, and non-Thursday or non-today dates", () => {
    const sampler = fixture("format-sampler");
    assert.throws(() => approve(sampler.auto, sampler.ev), /limited to news-world/);
    const wrongId = fixture(); wrongId.auto.id = "news-world-2026-11-12"; wrongId.ev.editionId = wrongId.auto.id; wrongId.ev.modelReview!.contentHash = hashJson(wrongId.auto);
    assert.throws(() => approve(wrongId.auto, wrongId.ev), /seriesId plus the published date/);
    const v2 = fixture(); v2.auto.version = 2; v2.ev.version = 2; v2.ev.modelReview!.contentHash = hashJson(v2.auto);
    assert.throws(() => approve(v2.auto, v2.ev), /version 1/);
    const { auto, ev } = fixture();
    assert.throws(() => approve(auto, ev, autoPolicy, new Date("2026-11-06T18:00:00Z")), /today's Edmonton date[\s\S]*Thursday|today's Edmonton date/);
    assert.throws(() => approve(auto, ev, { ...autoPolicy, changedAt: "2026-11-12" }), /before the automated policy/);
    const wednesday = fixture("news-world", "2026-11-04");
    assert.throws(() => approve(wednesday.auto, wednesday.ev, autoPolicy, new Date("2026-11-04T18:00:00Z")), /Thursday/);
  });

  test("rejects stale sources, future events, and impossible review chronology", () => {
    const stale = fixture(); stale.ev.questions[0].sourcePublishedAt = "2026-10-20";
    assert.throws(() => approve(stale.auto, stale.ev), /sourcePublishedAt: must fall between 2026-10-30 and 2026-11-05/);
    const future = fixture(); future.ev.questions[1].eventDate = "2026-11-06";
    assert.throws(() => approve(future.auto, future.ev), /eventDate: must fall between/);
    const edge = fixture(); edge.ev.questions[0].sourcePublishedAt = "2026-10-30"; edge.ev.questions[0].eventDate = "2026-11-05";
    assert.equal(approve(edge.auto, edge.ev).attestation, AUTOMATED_APPROVAL_ATTESTATION);
    const early = fixture(); early.ev.reviewedAt = "2026-11-05T14:00:00Z";
    assert.throws(() => approve(early.auto, early.ev), /retrievedAt: must not be after the review/);
    const yesterday = fixture(); yesterday.ev.reviewedAt = "2026-11-04T20:00:00Z";
    assert.throws(() => approve(yesterday.auto, yesterday.ev), /must match the publication day/);
    const futureReview = fixture(); futureReview.ev.reviewedAt = "2026-11-05T19:00:00Z";
    assert.throws(() => approve(futureReview.auto, futureReview.ev), /in the future/);
  });

  test("rejects when the policy mode is not automated", () => {
    const { auto, ev } = fixture();
    assert.throws(() => approve(auto, ev, { ...autoPolicy, mode: "human-review" }), /policy\.mode/);
    assert.throws(() => approve(auto, ev, policy), /policy\.mode/);
  });

  test("CLI requires the automatic flag and active policy, then promotes exactly once", () => {
    const { auto, ev } = fixture();
    const root = mkdtempSync(join(tmpdir(), "editorial-auto-cli-"));
    mkdirSync(join(root, "content/published"), { recursive: true }); mkdirSync(join(root, "content/drafts"), { recursive: true });
    writeFileSync(join(root, "content/publication-policy.json"), JSON.stringify({ ...autoPolicy, mode: "human-review" }));
    writeFileSync(join(root, "content/published/index.json"), "[]\n");
    writeFileSync(join(root, "content/drafts/edition.json"), JSON.stringify(auto)); writeFileSync(join(root, "content/drafts/evidence.json"), JSON.stringify(ev));
    const reviewFile = join(root, "review.json"); const approvalFile = join(root, "approval.json");
    execFileSync(process.execPath, ["--experimental-strip-types", join(process.cwd(), "scripts/editorial-review.mts"), join(root, "content/drafts/edition.json"), join(root, "content/drafts/evidence.json"), reviewFile], { cwd: root });
    const review = JSON.parse(readFileSync(reviewFile, "utf8"));
    writeFileSync(approvalFile, JSON.stringify({ ...review, approvedBy: ev.reviewer, approvedAt: now.toISOString(), attestation: AUTOMATED_APPROVAL_ATTESTATION }));
    const promote = join(process.cwd(), "scripts/editorial-promote.mts");
    const manifestBefore = readFileSync(join(root, "content/published/index.json"), "utf8");
    assert.throws(() => execFileSync(process.execPath, ["--experimental-strip-types", promote, reviewFile, approvalFile], { cwd: root, stdio: "pipe" }), /exact operator attestation required/);
    assert.throws(() => execFileSync(process.execPath, ["--experimental-strip-types", promote, reviewFile, "--automatic"], { cwd: root, stdio: "pipe" }), /policy\.mode/);
    assert.equal(readFileSync(join(root, "content/published/index.json"), "utf8"), manifestBefore);
    assert.equal(existsSync(join(root, "content/published", auto.seriesId)), false);

    writeFileSync(join(root, "content/publication-policy.json"), JSON.stringify(autoPolicy));
    const clock = "data:text/javascript," + encodeURIComponent(
      `import { mock } from "node:test"; mock.timers.enable({ apis: ["Date"], now: ${now.getTime()} });`,
    );
    const automaticArgs = ["--import", clock, promote, reviewFile, "--automatic"];
    execFileSync(process.execPath, automaticArgs, { cwd: root, stdio: "pipe" });
    assert.equal(loadAndValidatePublished(root)[0].id, auto.id);
    const promotedManifest = readFileSync(join(root, "content/published/index.json"), "utf8");
    assert.throws(() => execFileSync(process.execPath, automaticArgs, { cwd: root, stdio: "pipe" }), /immutable edition already exists/);
    assert.equal(readFileSync(join(root, "content/published/index.json"), "utf8"), promotedManifest);
  });
});
