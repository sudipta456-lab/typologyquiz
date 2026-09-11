import type { Edition } from "./types.ts";

/** Versioned links are shared by every player, including the legacy aliases. */
export function editionPath(edition: Pick<Edition, "id" | "version">): string {
  return `/weekly/${encodeURIComponent(edition.id)}/v/${edition.version}/`;
}
