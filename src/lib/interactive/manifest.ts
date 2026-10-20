// Build-only: used by scripts/interactive-assemble.mts, scripts/interactive-validate.mts and tests.
// It must never be imported from a page or client component. It reads nothing from disk.

export interface ManifestCategory { code: string; name: string; count: number }
export interface ManifestBrief { id: string; slug: string; category_code: string }
export interface Manifest<B extends ManifestBrief = ManifestBrief> { categories: ManifestCategory[]; quizzes: B[] }

type Rec = Record<string, unknown>;
const isRec = (value: unknown): value is Rec => typeof value === "object" && value !== null && !Array.isArray(value);
const isText = (value: unknown): value is string => typeof value === "string" && value.trim().length > 0;

/**
 * Validates the parsed briefs manifest against the category roster before any cast is trusted.
 * The collection size is whatever the manifest declares: counts must be non-negative safe integers
 * and must equal the number of briefs listed for that category. Returns every problem found.
 */
export function manifestErrors(raw: unknown, roster: readonly { code: string; name: string }[]): string[] {
  const errors: string[] = [];
  if (!isRec(raw)) return ["manifest: must be an object"];
  const declared = new Map<string, number>();
  if (!Array.isArray(raw.categories)) errors.push("manifest: categories must be an array");
  else {
    raw.categories.forEach((entry: unknown, index: number) => {
      if (!isRec(entry) || !isText(entry.code) || !isText(entry.name)) return void errors.push(`manifest categories[${index}]: needs string code and name`);
      const known = roster.find((item) => item.code === entry.code);
      if (!known) errors.push(`manifest categories[${index}]: unknown category code "${entry.code}"`);
      else if (known.name !== entry.name) errors.push(`manifest category ${entry.code}: name "${entry.name}" differs from categories.ts "${known.name}"`);
      if (declared.has(entry.code)) errors.push(`manifest category ${entry.code}: listed more than once`);
      if (typeof entry.count !== "number" || !Number.isSafeInteger(entry.count) || entry.count < 0) errors.push(`manifest category ${entry.code}: count must be a non-negative safe integer`);
      else if (!declared.has(entry.code)) declared.set(entry.code, entry.count);
    });
    for (const item of roster) if (!raw.categories.some((entry: unknown) => isRec(entry) && entry.code === item.code)) errors.push(`manifest: category ${item.code} is missing`);
  }
  const listed = new Map<string, number>();
  if (!Array.isArray(raw.quizzes)) errors.push("manifest: quizzes must be an array");
  else {
    const ids = new Set<string>();
    const slugs = new Set<string>();
    raw.quizzes.forEach((brief: unknown, index: number) => {
      if (!isRec(brief) || !isText(brief.id) || !isText(brief.slug) || !isText(brief.category_code)) return void errors.push(`manifest quizzes[${index}]: needs string id, slug and category_code`);
      if (!roster.some((item) => item.code === brief.category_code)) errors.push(`manifest ${brief.id}: unknown category_code "${brief.category_code}"`);
      if (ids.has(brief.id)) errors.push(`manifest ${brief.id}: duplicate id`);
      if (slugs.has(brief.slug)) errors.push(`manifest ${brief.id}: duplicate slug "${brief.slug}"`);
      ids.add(brief.id);
      slugs.add(brief.slug);
      listed.set(brief.category_code, (listed.get(brief.category_code) ?? 0) + 1);
    });
  }
  for (const [code, count] of declared) if ((listed.get(code) ?? 0) !== count) errors.push(`manifest category ${code}: count ${count} but ${listed.get(code) ?? 0} briefs listed`);
  return errors;
}

/** Throws one error listing every problem, otherwise returns the manifest typed. */
export function parseManifest<B extends ManifestBrief = ManifestBrief>(raw: unknown, roster: readonly { code: string; name: string }[]): Manifest<B> {
  const errors = manifestErrors(raw, roster);
  if (errors.length) throw new Error(`Interactive manifest is inconsistent:\n${errors.map((line) => `- ${line}`).join("\n")}`);
  return raw as Manifest<B>;
}

export const briefsFor = <B extends ManifestBrief>(manifest: Manifest<B>, code: string): B[] => manifest.quizzes.filter((brief) => brief.category_code === code);
