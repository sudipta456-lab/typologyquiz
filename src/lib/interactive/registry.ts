// Server-side only. This module pulls every full question bank into the module graph,
// so client components must receive a single Quiz as props or the generated summaries instead.
import PC from "../../../content/interactive/PC.json";
import FS from "../../../content/interactive/FS.json";
import MT from "../../../content/interactive/MT.json";
import MU from "../../../content/interactive/MU.json";
import GT from "../../../content/interactive/GT.json";
import SN from "../../../content/interactive/SN.json";
import HC from "../../../content/interactive/HC.json";
import FE from "../../../content/interactive/FE.json";
import SG from "../../../content/interactive/SG.json";
import LW from "../../../content/interactive/LW.json";
import { CATEGORIES, CATEGORY_MAP } from "./categories";
import type { Category, Quiz } from "./types";

// Banks are validated by scripts/interactive-validate.mts and tests, not trusted at the type level.
const banks = [PC, FS, MT, MU, GT, SN, HC, FE, SG, LW] as unknown as Quiz[][];

/** Category order first (as in CATEGORIES), then the order assembled in each bank. */
export const QUIZZES: Quiz[] = CATEGORIES.map((category) => banks.flat().filter((quiz) => quiz.categoryId === category.id)).flat();

const bySlug = new Map(QUIZZES.map((quiz) => [quiz.slug, quiz]));

export function getQuiz(slug: string): Quiz | undefined {
  return bySlug.get(slug);
}

export function getCategory(id: string): Category | undefined {
  return CATEGORY_MAP.get(id);
}

export function quizPath(slug: string): string {
  return `/quizzes/${slug}/`;
}
