import { constants, copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, relative, resolve } from "node:path";

import type { Edition } from "../src/lib/editorial/types.ts";
import { createAutomatedApproval, createReviewPackage, hashJson, loadAndValidatePublished, parseJsonFile, validateApproval, validateForPublication, type Approval, type EvidenceFile, type Policy, type PublishedEntry, type ReviewPackage } from "../src/lib/newsquiz/publication.ts";

const args = process.argv.slice(2);
const automatic = args.includes("--automatic");
const [reviewArg, approvalArg] = args.filter((arg) => arg !== "--automatic");
const usage = "usage: editorial-promote <review.json> <approval.json> | editorial-promote <review.json> --automatic";
if (!reviewArg || (automatic ? approvalArg : !approvalArg) || args.length > 2) throw new Error(usage);
const root = process.cwd();
loadAndValidatePublished(root);
const reviewPath = resolve(root, reviewArg);
const suppliedReview = parseJsonFile(reviewPath) as ReviewPackage;
const editionPath = resolve(dirname(reviewPath), suppliedReview.editionPath);
const evidencePath = resolve(dirname(reviewPath), suppliedReview.evidencePath);
const edition = parseJsonFile(editionPath) as Edition;
const evidence = parseJsonFile(evidencePath) as EvidenceFile;
const policy = parseJsonFile(resolve(root, "content/publication-policy.json")) as Policy;
const actualReview = createReviewPackage(edition, evidence, suppliedReview.editionPath, suppliedReview.evidencePath);
const errors = validateForPublication(edition, evidence, policy);
if (hashJson(suppliedReview) !== hashJson(actualReview)) errors.push("review package is stale or was edited");
// Manual mode: the human attestation is required, so a hand-written automated one is rejected here.
const approvalSource = automatic ? undefined : resolve(root, approvalArg);
if (approvalSource) errors.push(...validateApproval(parseJsonFile(approvalSource), actualReview));
if (errors.length) throw new Error(`promotion rejected:\n- ${errors.join("\n- ")}`);
// Automatic mode runs only once the shared validation above has passed; it throws on any recency or policy failure.
const approval = (approvalSource ? parseJsonFile(approvalSource) : createAutomatedApproval(edition, evidence, actualReview, policy)) as Approval;

const manifestPath = resolve(root, "content/published/index.json");
const manifest = parseJsonFile(manifestPath) as PublishedEntry[];
if (manifest.some((entry) => entry.id === edition.id && entry.version === edition.version)) throw new Error(`immutable edition already exists: ${edition.id}@${edition.version}`);
const targetDir = resolve(root, "content/published", edition.seriesId, edition.id, `v${edition.version}`);
const publishedRoot = resolve(root, "content/published");
const targetRelative = relative(publishedRoot, targetDir);
if (!targetRelative || targetRelative.startsWith("..") || resolve(publishedRoot, targetRelative) !== targetDir) throw new Error("promotion destination escapes content/published");
if ([editionPath, evidencePath, ...(approvalSource ? [approvalSource] : [])].some((path) => path.startsWith(targetDir))) throw new Error("promotion inputs must remain outside the published destination");
mkdirSync(dirname(targetDir), { recursive: true });
mkdirSync(targetDir, { recursive: false });
const editionTarget = resolve(targetDir, "edition.json");
const evidenceTarget = resolve(targetDir, "evidence.json");
const approvalTarget = resolve(targetDir, "approval.json");
copyFileSync(editionPath, editionTarget, constants.COPYFILE_EXCL);
copyFileSync(evidencePath, evidenceTarget, constants.COPYFILE_EXCL);
if (approvalSource) copyFileSync(approvalSource, approvalTarget, constants.COPYFILE_EXCL);
else writeFileSync(approvalTarget, `${JSON.stringify(approval, null, 2)}\n`, { flag: "wx" });
const rel = (path: string) => relative(dirname(manifestPath), path).replaceAll("\\", "/");
manifest.push({ id: edition.id, seriesId: edition.seriesId, version: edition.version, publishedAt: edition.publishedAt, editionPath: rel(editionTarget), contentHash: actualReview.contentHash, status: "approved", evidencePath: rel(evidenceTarget), evidenceHash: actualReview.evidenceHash, approvalPath: rel(approvalTarget), approvalHash: hashJson(approval), reviewHash: actualReview.reviewHash });
manifest.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt) || a.id.localeCompare(b.id) || a.version - b.version);
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
loadAndValidatePublished(root);
console.log(`Promoted immutable edition ${edition.id}@${edition.version} to ${relative(root, targetDir)}.`);
