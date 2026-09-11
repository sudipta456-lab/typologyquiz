/**
 * Serializable contracts for sourced editorial quizzes.
 *
 * These types intentionally contain data only. Rendering, answer state, and
 * review workflow state live elsewhere so an Edition can be stored as JSON,
 * versioned, and replayed after a newer edition is published.
 */

export type Source = {
  /** Publisher or primary-source label shown to the reader. */
  label: string;
  /** Direct HTTPS link to the material supporting this question. */
  url: string;
  /** Publication date when the source provides one. */
  publishedAt?: string;
};

export type MediaProvenance = {
  /** Same-site path or HTTPS URL for the image asset. */
  src: string;
  /** Meaningful alternative text for the option image. */
  alt: string;
  /** Photographer, illustrator, studio, publisher, or other credited creator. */
  creator: string;
  /** HTTPS page that identifies the image and its creator. */
  sourceUrl: string;
  /** Human-readable licence or permission basis. */
  license: string;
  /** HTTPS page containing the applicable licence or permission statement. */
  licenseUrl: string;
};

export type TextOption = {
  id: string;
  label: string;
};

export type ImageOption = TextOption & {
  image: MediaProvenance;
};

export type QuestionKind = "choice" | "image-choice" | "order" | "match";

export interface QuestionBase<K extends QuestionKind = QuestionKind> {
  id: string;
  kind: K;
  prompt: string;
  explanation: string;
  /** At least one source is required for every editorial question. */
  sources: readonly Source[];
}

export interface ChoiceQuestion extends QuestionBase<"choice"> {
  options: readonly TextOption[];
  correctId: string;
}

export interface ImageChoiceQuestion extends QuestionBase<"image-choice"> {
  options: readonly ImageOption[];
  correctId: string;
}

export interface OrderQuestion extends QuestionBase<"order"> {
  items: readonly TextOption[];
  /** Exact item-id sequence required for full credit. */
  correctOrder: readonly string[];
}

export interface MatchQuestion extends QuestionBase<"match"> {
  left: readonly TextOption[];
  right: readonly TextOption[];
  /** Complete left-id to right-id answer key. */
  correctPairs: Readonly<Record<string, string>>;
}

export type Question =
  | ChoiceQuestion
  | ImageChoiceQuestion
  | OrderQuestion
  | MatchQuestion;

/** Serialized answer shape. Its valid branch is determined by Question.kind. */
export type Answer = string | string[] | Record<string, string>;

export interface Edition {
  /** Immutable edition identifier, normally an ISO publication date. */
  id: string;
  /** Stable series identifier shared by all editions in a feed. */
  seriesId: string;
  /** Positive schema/content revision for this edition id. */
  version: number;
  title: string;
  description: string;
  /** Calendar date in YYYY-MM-DD form. */
  publishedAt: string;
  /** Editorial quizzes in this product are suitable for a general audience. */
  audience: "general";
  questions: readonly Question[];
  /** Marks imported content that predates the editorial engine contract. */
  legacy?: boolean;
}
