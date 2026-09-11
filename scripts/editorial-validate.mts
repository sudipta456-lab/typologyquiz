import { resolve } from "node:path";

import { loadAndValidatePublished, parseJsonFile, validateForPublication } from "../src/lib/newsquiz/publication.ts";

const [editionArg, evidenceArg] = process.argv.slice(2);
if ((editionArg && !evidenceArg) || (!editionArg && evidenceArg)) throw new Error("usage: editorial-validate [draft.json evidence.json]");
if (editionArg && evidenceArg) {
  const policy = parseJsonFile(resolve("content/publication-policy.json")) as { minimumNewsQuestions: number; series: string[] };
  const errors = validateForPublication(parseJsonFile(resolve(editionArg)), parseJsonFile(resolve(evidenceArg)), policy);
  if (errors.length) throw new Error(`validation failed:\n- ${errors.join("\n- ")}`);
  console.log("Draft and evidence are valid for review.");
}
const editions = loadAndValidatePublished(process.cwd());
console.log(`Published registry valid: ${editions.length} immutable edition(s).`);
