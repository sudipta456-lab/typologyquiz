import type { Jurisdiction, HandbookExcerpt } from "./types";
import type { HandbookSnippet } from "./excerpts";

/**
 * Jurisdictions built as self-contained modules (src/lib/driving/<slug>/index.ts)
 * rather than spliced into jurisdictions.ts and excerpts.ts by hand.
 *
 * The first 22 banks were wired by editing three registry files per
 * jurisdiction. That does not scale to six builders working at once, so from
 * the 23rd on, a bank exports { jurisdiction, excerpts, snippets, officialHosts }
 * from its own folder and is registered by ONE line here. The registries read
 * this list and merge it in after their hand-written entries.
 *
 * Order here is not display order: the hub sorts alphabetically within each
 * country.
 */
export interface DrivingModule {
  jurisdiction: Jurisdiction;
  excerpts: HandbookExcerpt[];
  snippets: Record<string, HandbookSnippet>;
  officialHosts?: string[];
}

import * as minnesota from "./minnesota";

export const MODULES: DrivingModule[] = [minnesota];
