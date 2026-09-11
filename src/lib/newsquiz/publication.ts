import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

import type { Edition } from "../editorial/types.ts";
import { validateEdition } from "../editorial/validate.ts";

export const APPROVAL_ATTESTATION = "I approve this exact reviewed edition for publication.";

export type EvidenceItem = {
  questionId: string;
  sourceUrl: string;
  sourcePublishedAt: string | null;
  eventDate: string | null;
  dateContext?: "evergreen";
  retrievedAt: string;
  supportingFact: string;
  verdict: "pass" | "fail";
  notes?: string;
};

export type MediaEvidenceItem = {
  questionId: string;
  optionId: string;
  sourceUrl: string;
  licenseUrl: string;
  permittedUse: string;
  modificationNote: string;
  verdict: "pass" | "fail";
};

export type EvidenceFile = {
  editionId: string;
  version: number;
  drafter: string;
  reviewer: string;
  reviewedAt: string;
  questions: EvidenceItem[];
  media?: MediaEvidenceItem[];
};

export type ReviewPackage = {
  schemaVersion: 1;
  editionPath: string;
  evidencePath: string;
  contentHash: string;
  evidenceHash: string;
  questionHashes: Record<string, { contentHash: string; evidenceHash: string }>;
  reviewHash: string;
};

export type Approval = ReviewPackage & {
  approvedBy: string;
  approvedAt: string;
  attestation: typeof APPROVAL_ATTESTATION;
};

export type PublishedEntry = {
  id: string;
  seriesId: string;
  version: number;
  publishedAt: string;
  editionPath: string;
  contentHash: string;
  status: "legacy" | "approved";
  evidencePath?: string;
  evidenceHash?: string;
  approvalPath?: string;
  approvalHash?: string;
  reviewHash?: string;
};

type Policy = { minimumNewsQuestions: number; series: string[] };
const ROUTE_ID = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const PINNED_LEGACY: Readonly<Record<string, { contentHash: string; byteHash: string }>> = Object.freeze({
  "news-world-2026-09-10@1": { contentHash: "sha256:870f10ff8293e288d16ef6f33b0c8ab5aa2bd90b9289635eb45b52ee92885137", byteHash: "sha256:7b54368925514f2b29fca8d868744eab2abafe5cd804024b573f2b45acec67ff" },
  "news-north-america-2026-09-10@1": { contentHash: "sha256:b01565aa1a421350ba9593597a5f0dff31a3b9b979998c23024e4bf83fd18fdc", byteHash: "sha256:79d36c034b8afa0fe415f4d8e50e4160ae53435e1e33ae787d15699a2ea57cc8" },
});

export function canonicalJson(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.keys(value as Record<string, unknown>).sort().map((key) =>
      `${JSON.stringify(key)}:${canonicalJson((value as Record<string, unknown>)[key])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}

export function hashJson(value: unknown): string {
  return `sha256:${createHash("sha256").update(canonicalJson(value)).digest("hex")}`;
}

export function parseJsonFile(path: string): unknown {
  return JSON.parse(readFileSync(path, "utf8"));
}

function isDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const parsed = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value;
}

function isTimestamp(value: unknown): value is string {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?(?:Z|[+-]\d{2}:\d{2})$/.test(value) && !Number.isNaN(Date.parse(value));
}

export function validateForPublication(edition: unknown, evidence: unknown, policy: Policy): string[] {
  const errors = validateEdition(edition);
  if (!edition || typeof edition !== "object" || Array.isArray(edition)) return errors;
  const candidate = edition as Edition;
  if (typeof candidate.id === "string" && !ROUTE_ID.test(candidate.id)) errors.push("edition.id: must be a route-safe lowercase slug");
  if (typeof candidate.seriesId === "string" && !ROUTE_ID.test(candidate.seriesId)) errors.push("edition.seriesId: must be a route-safe lowercase slug");
  if (errors.length || typeof candidate.id !== "string" || typeof candidate.seriesId !== "string" || !Array.isArray(candidate.questions)) return errors;
  if (candidate.legacy) errors.push("edition.legacy: new publication candidates cannot be legacy");
  if (!policy.series.includes(candidate.seriesId)) errors.push(`edition.seriesId: unknown series "${candidate.seriesId}"`);
  if (candidate.seriesId.startsWith("news-") && candidate.questions.length < policy.minimumNewsQuestions) {
    errors.push(`edition.questions: news editions require at least ${policy.minimumNewsQuestions} questions`);
  }
  if (!evidence || typeof evidence !== "object" || Array.isArray(evidence)) return [...errors, "evidence: must be an object"];
  const ev = evidence as Partial<EvidenceFile>;
  if (ev.editionId !== candidate.id || ev.version !== candidate.version) errors.push("evidence: edition identity does not match");
  if (typeof ev.drafter !== "string" || !ev.drafter.trim()) errors.push("evidence.drafter: required");
  if (typeof ev.reviewer !== "string" || !ev.reviewer.trim()) errors.push("evidence.reviewer: required");
  if (typeof ev.drafter === "string" && typeof ev.reviewer === "string" && ev.drafter.trim().toLowerCase() === ev.reviewer.trim().toLowerCase()) {
    errors.push("evidence.reviewer: must be independent from drafter");
  }
  if (!isTimestamp(ev.reviewedAt)) errors.push("evidence.reviewedAt: must be an ISO timestamp");
  if (!Array.isArray(ev.questions)) return [...errors, "evidence.questions: must be an array"];
  const evidenceKeys = new Set<string>();
  ev.questions.forEach((item, index) => {
    const path = `evidence.questions[${index}]`;
    if (!item || typeof item !== "object") { errors.push(`${path}: must be an object`); return; }
    if (typeof item.questionId !== "string" || !item.questionId) errors.push(`${path}.questionId: required`);
    const question = candidate.questions.find((q) => q.id === item.questionId);
    if (!question) errors.push(`${path}.questionId: unknown question`);
    if (typeof item.sourceUrl !== "string" || !question?.sources.some((source) => source.url === item.sourceUrl)) errors.push(`${path}.sourceUrl: must match a question source`);
    else {
      const key = `${item.questionId}\n${item.sourceUrl}`;
      if (evidenceKeys.has(key)) errors.push(`${path}: duplicate question/source evidence`);
      evidenceKeys.add(key);
    }
    const isNews = candidate.seriesId.startsWith("news-");
    if (isNews) {
      if (!isDate(item.sourcePublishedAt)) errors.push(`${path}.sourcePublishedAt: news requires a YYYY-MM-DD date`);
      if (!isDate(item.eventDate)) errors.push(`${path}.eventDate: news requires a YYYY-MM-DD date`);
      if (item.dateContext === "evergreen") errors.push(`${path}.dateContext: news evidence cannot be evergreen`);
    } else {
      const hasDates = isDate(item.sourcePublishedAt) && isDate(item.eventDate);
      const evergreen = item.sourcePublishedAt === null && item.eventDate === null && item.dateContext === "evergreen" && typeof item.notes === "string" && item.notes.trim().length >= 20;
      if (!hasDates && !evergreen) errors.push(`${path}: use real dates, or null dates with dateContext evergreen and substantive notes`);
    }
    if (!isTimestamp(item.retrievedAt)) errors.push(`${path}.retrievedAt: required ISO timestamp`);
    if (typeof item.supportingFact !== "string" || !item.supportingFact.trim()) errors.push(`${path}.supportingFact: required`);
    if (item.verdict !== "pass") errors.push(`${path}.verdict: must be pass`);
  });
  for (const question of candidate.questions) for (const source of question.sources) {
    if (!evidenceKeys.has(`${question.id}\n${source.url}`)) errors.push(`evidence.questions: missing evidence for "${question.id}" source "${source.url}"`);
  }
  const media = Array.isArray(ev.media) ? ev.media : [];
  const mediaKeys = new Set<string>();
  media.forEach((item, index) => {
    const path = `evidence.media[${index}]`;
    if (!item || typeof item !== "object") { errors.push(`${path}: must be an object`); return; }
    const question = candidate.questions.find((q) => q.id === item.questionId);
    const option = question?.kind === "image-choice" ? question.options.find((candidateOption) => candidateOption.id === item.optionId) : undefined;
    const key = `${item.questionId}\n${item.optionId}`;
    if (!option) errors.push(`${path}: must identify an image-choice option`);
    else {
      if (mediaKeys.has(key)) errors.push(`${path}: duplicate media review`);
      mediaKeys.add(key);
      if (item.sourceUrl !== option.image.sourceUrl) errors.push(`${path}.sourceUrl: must match image provenance`);
      if (item.licenseUrl !== option.image.licenseUrl) errors.push(`${path}.licenseUrl: must match image provenance`);
    }
    if (typeof item.permittedUse !== "string" || item.permittedUse.trim().length < 10) errors.push(`${path}.permittedUse: substantive rights basis required`);
    if (typeof item.modificationNote !== "string" || !item.modificationNote.trim()) errors.push(`${path}.modificationNote: required (use "none" when unchanged)`);
    if (item.verdict !== "pass") errors.push(`${path}.verdict: must be pass`);
  });
  for (const question of candidate.questions) if (question.kind === "image-choice") for (const option of question.options) {
    if (!mediaKeys.has(`${question.id}\n${option.id}`)) errors.push(`evidence.media: missing rights review for "${question.id}" option "${option.id}"`);
  }
  return errors;
}

export function createReviewPackage(edition: Edition, evidence: EvidenceFile, editionPath: string, evidencePath: string): ReviewPackage {
  const questionHashes = Object.fromEntries(edition.questions.map((question) => {
    const items = { sources: evidence.questions.filter((item) => item.questionId === question.id), media: (evidence.media ?? []).filter((item) => item.questionId === question.id) };
    return [question.id, { contentHash: hashJson(question), evidenceHash: hashJson(items) }];
  }));
  const identity = { schemaVersion: 1 as const, contentHash: hashJson(edition), evidenceHash: hashJson(evidence), questionHashes };
  return { ...identity, editionPath, evidencePath, reviewHash: hashJson(identity) };
}

export function validateApproval(approval: unknown, review: ReviewPackage): string[] {
  if (!approval || typeof approval !== "object" || Array.isArray(approval)) return ["approval: must be an object"];
  const value = approval as Partial<Approval>;
  const errors: string[] = [];
  for (const key of ["contentHash", "evidenceHash", "reviewHash"] as const) if (value[key] !== review[key]) errors.push(`approval.${key}: stale or mismatched`);
  if (canonicalJson(value.questionHashes) !== canonicalJson(review.questionHashes)) errors.push("approval.questionHashes: stale or mismatched");
  if (value.editionPath !== review.editionPath || value.evidencePath !== review.evidencePath) errors.push("approval: reviewed paths do not match");
  if (typeof value.approvedBy !== "string" || !value.approvedBy.trim()) errors.push("approval.approvedBy: required");
  if (!isTimestamp(value.approvedAt)) errors.push("approval.approvedAt: must be an ISO timestamp");
  if (value.attestation !== APPROVAL_ATTESTATION) errors.push("approval.attestation: exact operator attestation required");
  return errors;
}

export function loadAndValidatePublished(repoRoot: string): Edition[] {
  const manifestPath = resolve(repoRoot, "content/published/index.json");
  const manifest = parseJsonFile(manifestPath);
  if (!Array.isArray(manifest)) throw new Error("published manifest must be an array");
  const policy = parseJsonFile(resolve(repoRoot, "content/publication-policy.json")) as Policy;
  const identities = new Set<string>();
  return manifest.map((raw) => {
    const entry = raw as PublishedEntry;
    const key = `${entry.id}@${entry.version}`;
    if (identities.has(key)) throw new Error(`published manifest: duplicate ${key}`);
    identities.add(key);
    const editionFile = resolve(dirname(manifestPath), entry.editionPath);
    const edition = parseJsonFile(editionFile) as Edition;
    const structural = validateEdition(edition);
    if (structural.length) throw new Error(`${key}: ${structural.join("; ")}`);
    if (entry.id !== edition.id || entry.seriesId !== edition.seriesId || entry.version !== edition.version || entry.publishedAt !== edition.publishedAt) throw new Error(`${key}: manifest identity mismatch`);
    if (entry.contentHash !== hashJson(edition)) throw new Error(`${key}: immutable content hash mismatch`);
    if (entry.status === "legacy") {
      const pin = PINNED_LEGACY[key];
      const byteHash = `sha256:${createHash("sha256").update(readFileSync(editionFile)).digest("hex")}`;
      if (!edition.legacy || !entry.editionPath.startsWith("../legacy/") || pin?.contentHash !== entry.contentHash || pin.byteHash !== byteHash) throw new Error(`${key}: invalid or unpinned legacy entry`);
      return edition;
    }
    const evidence = parseJsonFile(resolve(dirname(manifestPath), entry.evidencePath!)) as EvidenceFile;
    const approval = parseJsonFile(resolve(dirname(manifestPath), entry.approvalPath!)) as Partial<Approval>;
    const review = createReviewPackage(edition, evidence, approval.editionPath ?? "", approval.evidencePath ?? "");
    const errors = [...validateForPublication(edition, evidence, policy), ...validateApproval(approval, review)];
    if (entry.evidenceHash !== review.evidenceHash || entry.reviewHash !== review.reviewHash || entry.approvalHash !== hashJson(approval)) errors.push("manifest review/approval hash mismatch");
    if (errors.length) throw new Error(`${key}: ${errors.join("; ")}`);
    return edition;
  });
}
