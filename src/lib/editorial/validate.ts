import type { Edition } from "./types.ts";

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function addUnexpectedKeys(
  value: UnknownRecord,
  allowed: readonly string[],
  path: string,
  errors: string[]
): void {
  const allowedSet = new Set(allowed);
  for (const key of Object.keys(value)) {
    if (!allowedSet.has(key)) errors.push(`${path}.${key}: unexpected field`);
  }
}

function requireText(value: unknown, path: string, errors: string[]): value is string {
  if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
    errors.push(`${path}: must be a non-empty, trimmed string`);
    return false;
  }
  return true;
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().slice(0, 10) === value;
}

function requireDate(value: unknown, path: string, errors: string[]): value is string {
  if (!isIsoDate(value)) {
    errors.push(`${path}: must be a real calendar date in YYYY-MM-DD form`);
    return false;
  }
  return true;
}

function isHttpsUrl(value: unknown): value is string {
  if (typeof value !== "string") return false;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.username === "" && url.password === "";
  } catch {
    return false;
  }
}

function requireHttpsUrl(value: unknown, path: string, errors: string[]): value is string {
  if (!isHttpsUrl(value)) {
    errors.push(`${path}: must be an HTTPS URL without embedded credentials`);
    return false;
  }
  return true;
}

function requireMediaSrc(value: unknown, path: string, errors: string[]): value is string {
  const sameSite =
    typeof value === "string" &&
    value.startsWith("/") &&
    !value.startsWith("//") &&
    !value.includes("\\");
  if (!sameSite && !isHttpsUrl(value)) {
    errors.push(`${path}: must be a same-site absolute path or HTTPS URL`);
    return false;
  }
  return true;
}

function validateSources(value: unknown, path: string, errors: string[]): void {
  if (!Array.isArray(value) || value.length === 0) {
    errors.push(`${path}: must contain at least one source`);
    return;
  }
  for (let index = 0; index < value.length; index++) {
    const source = value[index];
    const sourcePath = `${path}[${index}]`;
    if (!isRecord(source)) {
      errors.push(`${sourcePath}: must be an object`);
      continue;
    }
    addUnexpectedKeys(source, ["label", "url", "publishedAt"], sourcePath, errors);
    requireText(source.label, `${sourcePath}.label`, errors);
    requireHttpsUrl(source.url, `${sourcePath}.url`, errors);
    if (Object.hasOwn(source, "publishedAt")) {
      requireDate(source.publishedAt, `${sourcePath}.publishedAt`, errors);
    }
  }
}

function validateMedia(value: unknown, path: string, errors: string[]): void {
  if (!isRecord(value)) {
    errors.push(`${path}: must be an object`);
    return;
  }
  addUnexpectedKeys(
    value,
    ["src", "alt", "creator", "sourceUrl", "license", "licenseUrl"],
    path,
    errors
  );
  requireMediaSrc(value.src, `${path}.src`, errors);
  requireText(value.alt, `${path}.alt`, errors);
  requireText(value.creator, `${path}.creator`, errors);
  requireHttpsUrl(value.sourceUrl, `${path}.sourceUrl`, errors);
  requireText(value.license, `${path}.license`, errors);
  requireHttpsUrl(value.licenseUrl, `${path}.licenseUrl`, errors);
}

function validateItems(
  value: unknown,
  path: string,
  errors: string[],
  withImage: boolean
): string[] {
  if (!Array.isArray(value) || value.length < 2) {
    errors.push(`${path}: must contain at least two items`);
    return [];
  }

  const ids: string[] = [];
  for (let index = 0; index < value.length; index++) {
    const item = value[index];
    const itemPath = `${path}[${index}]`;
    if (!isRecord(item)) {
      errors.push(`${itemPath}: must be an object`);
      continue;
    }
    addUnexpectedKeys(item, withImage ? ["id", "label", "image"] : ["id", "label"], itemPath, errors);
    if (requireText(item.id, `${itemPath}.id`, errors)) ids.push(item.id);
    requireText(item.label, `${itemPath}.label`, errors);
    if (withImage) validateMedia(item.image, `${itemPath}.image`, errors);
  }

  const seen = new Set<string>();
  for (const id of ids) {
    if (seen.has(id)) errors.push(`${path}: duplicate item id "${id}"`);
    seen.add(id);
  }
  return ids;
}

function validateCorrectId(
  value: unknown,
  optionIds: readonly string[],
  path: string,
  errors: string[]
): void {
  if (!requireText(value, path, errors)) return;
  if (!optionIds.includes(value)) errors.push(`${path}: must reference an option id`);
}

function validateCorrectOrder(
  value: unknown,
  itemIds: readonly string[],
  path: string,
  errors: string[]
): void {
  if (!Array.isArray(value) || !value.every((id) => typeof id === "string")) {
    errors.push(`${path}: must be an array of item ids`);
    return;
  }
  const unique = new Set(value);
  const valid =
    value.length === itemIds.length &&
    unique.size === value.length &&
    value.every((id) => itemIds.includes(id));
  if (!valid) errors.push(`${path}: must be an exact permutation of item ids`);
}

function validateCorrectPairs(
  value: unknown,
  leftIds: readonly string[],
  rightIds: readonly string[],
  path: string,
  errors: string[]
): void {
  if (!isRecord(value)) {
    errors.push(`${path}: must be an object mapping left ids to right ids`);
    return;
  }
  const keys = Object.keys(value);
  const values = keys.map((key) => value[key]);
  const exactKeys =
    keys.length === leftIds.length &&
    new Set(keys).size === keys.length &&
    keys.every((key) => leftIds.includes(key));
  const stringValues = values.every((item): item is string => typeof item === "string");
  const bijection =
    stringValues &&
    values.length === rightIds.length &&
    new Set(values).size === values.length &&
    values.every((rightId) => rightIds.includes(rightId));
  if (!exactKeys || !bijection) {
    errors.push(`${path}: must be a complete bijection from left ids to right ids`);
  }
}

function validateQuestion(value: unknown, path: string, errors: string[]): string | null {
  if (!isRecord(value)) {
    errors.push(`${path}: must be an object`);
    return null;
  }

  const id = requireText(value.id, `${path}.id`, errors) ? value.id : null;
  requireText(value.prompt, `${path}.prompt`, errors);
  requireText(value.explanation, `${path}.explanation`, errors);
  validateSources(value.sources, `${path}.sources`, errors);

  switch (value.kind) {
    case "choice": {
      addUnexpectedKeys(
        value,
        ["id", "kind", "prompt", "explanation", "sources", "options", "correctId"],
        path,
        errors
      );
      const optionIds = validateItems(value.options, `${path}.options`, errors, false);
      validateCorrectId(value.correctId, optionIds, `${path}.correctId`, errors);
      break;
    }
    case "image-choice": {
      addUnexpectedKeys(
        value,
        ["id", "kind", "prompt", "explanation", "sources", "options", "correctId"],
        path,
        errors
      );
      const optionIds = validateItems(value.options, `${path}.options`, errors, true);
      validateCorrectId(value.correctId, optionIds, `${path}.correctId`, errors);
      break;
    }
    case "order": {
      addUnexpectedKeys(
        value,
        ["id", "kind", "prompt", "explanation", "sources", "items", "correctOrder"],
        path,
        errors
      );
      const itemIds = validateItems(value.items, `${path}.items`, errors, false);
      validateCorrectOrder(value.correctOrder, itemIds, `${path}.correctOrder`, errors);
      break;
    }
    case "match": {
      addUnexpectedKeys(
        value,
        ["id", "kind", "prompt", "explanation", "sources", "left", "right", "correctPairs"],
        path,
        errors
      );
      const leftIds = validateItems(value.left, `${path}.left`, errors, false);
      const rightIds = validateItems(value.right, `${path}.right`, errors, false);
      if (leftIds.length !== rightIds.length) {
        errors.push(`${path}: match questions must have equally sized left and right lists`);
      }
      validateCorrectPairs(value.correctPairs, leftIds, rightIds, `${path}.correctPairs`, errors);
      break;
    }
    default:
      errors.push(`${path}.kind: must be choice, image-choice, order, or match`);
  }
  return id;
}

/**
 * Validates an untrusted JSON-like value against the complete Edition contract.
 * An empty result means the value is safe to treat as Edition.
 */
export function validateEdition(value: unknown): string[] {
  const errors: string[] = [];
  if (!isRecord(value)) return ["edition: must be an object"];

  addUnexpectedKeys(
    value,
    ["id", "seriesId", "version", "title", "description", "publishedAt", "audience", "questions", "legacy"],
    "edition",
    errors
  );
  requireText(value.id, "edition.id", errors);
  requireText(value.seriesId, "edition.seriesId", errors);
  if (!Number.isInteger(value.version) || (value.version as number) < 1) {
    errors.push("edition.version: must be a positive integer");
  }
  requireText(value.title, "edition.title", errors);
  requireText(value.description, "edition.description", errors);
  requireDate(value.publishedAt, "edition.publishedAt", errors);
  if (value.audience !== "general") errors.push('edition.audience: must be "general"');
  if (Object.hasOwn(value, "legacy") && typeof value.legacy !== "boolean") {
    errors.push("edition.legacy: must be a boolean when present");
  }

  if (!Array.isArray(value.questions) || value.questions.length === 0) {
    errors.push("edition.questions: must contain at least one question");
    return errors;
  }

  const questionIds: string[] = [];
  for (let index = 0; index < value.questions.length; index++) {
    const id = validateQuestion(value.questions[index], `edition.questions[${index}]`, errors);
    if (id !== null) questionIds.push(id);
  }
  const seen = new Set<string>();
  for (const id of questionIds) {
    if (seen.has(id)) errors.push(`edition.questions: duplicate question id "${id}"`);
    seen.add(id);
  }
  return errors;
}

/** Convenience guard for callers that need to narrow an unknown value. */
export function isEdition(value: unknown): value is Edition {
  return validateEdition(value).length === 0;
}
