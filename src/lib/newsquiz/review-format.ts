import type { Edition, Question } from "../editorial/types.ts";
import type { EvidenceFile, ReviewPackage } from "./publication.ts";

function answers(question: Question): string[] {
  switch (question.kind) {
    case "choice": return [`Options: ${question.options.map(o => `${o.id}: ${o.label}`).join("; ")}`, `Correct answer: \`${question.correctId}: ${question.options.find(o => o.id === question.correctId)?.label}\``];
    case "image-choice": return [`Options: ${question.options.map(o => `${o.id}: ${o.label}`).join("; ")}`, `Correct answer: \`${question.correctId}: ${question.options.find(o => o.id === question.correctId)?.label}\``, ...question.options.map(o => `- Image \`${o.id}\`: ${o.image.alt}; creator: ${o.image.creator}; asset: ${o.image.src}; source: ${o.image.sourceUrl}; licence: ${o.image.license}; licence URL: ${o.image.licenseUrl}`)];
    case "order": return [`Items: ${question.items.map(i => `${i.id}: ${i.label}`).join("; ")}`, `Correct sequence: ${question.correctOrder.map(id => `\`${id}: ${question.items.find(i => i.id === id)?.label}\``).join(" → ")}`];
    case "match": return [`Left column: ${question.left.map(i => `${i.id}: ${i.label}`).join("; ")}`, `Right column: ${question.right.map(i => `${i.id}: ${i.label}`).join("; ")}`, `Correct mapping: ${question.left.map(l => `\`${l.id}: ${l.label}\` → \`${question.correctPairs[l.id]}: ${question.right.find(r => r.id === question.correctPairs[l.id])?.label}\``).join("; ")}`];
  }
}

export function formatReviewMarkdown(edition: Edition, evidence: EvidenceFile, review: ReviewPackage): string {
  const lines = [`# Editorial review: ${edition.title}`, "", `Edition: \`${edition.id}\` version ${edition.version}`, `Drafter: ${evidence.drafter}`, `Independent reviewer: ${evidence.reviewer}`, `Reviewed: ${evidence.reviewedAt}`, `Content hash: \`${review.contentHash}\``, `Evidence hash: \`${review.evidenceHash}\``, `Review hash: \`${review.reviewHash}\``, "",
    ...edition.questions.flatMap(q => {
      const sources = q.sources.flatMap(s => evidence.questions.filter(e => e.questionId === q.id && e.sourceUrl === s.url).map(e => `- ${s.label}: ${s.url} — published ${e.sourcePublishedAt ?? "undated"}; event ${e.eventDate ?? "evergreen"}; retrieved ${e.retrievedAt}; verdict **${e.verdict}**; fact: ${e.supportingFact}${e.notes ? `; notes: ${e.notes}` : ""}`));
      const media = (evidence.media ?? []).filter(e => e.questionId === q.id).map(e => `- Rights review \`${e.optionId}\`: source ${e.sourceUrl}; licence ${e.licenseUrl}; permitted use: ${e.permittedUse}; modification: ${e.modificationNote}; verdict **${e.verdict}**`);
      const hashes = review.questionHashes[q.id];
      return [`## ${q.id}: ${q.prompt}`, "", ...answers(q), "", `Explanation: ${q.explanation}`, "", ...sources, ...media, "", `Content hash: \`${hashes.contentHash}\`  `, `Evidence hash: \`${hashes.evidenceHash}\``, ""];
    }), "", "A hash identifies the reviewed bytes; it does not prove factual truth. Promotion also requires a separate human approval file."];
  return `${lines.join("\n")}\n`;
}
