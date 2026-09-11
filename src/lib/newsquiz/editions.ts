import type { Edition } from "../editorial/types.ts";
import { loadAndValidatePublished } from "./publication.ts";

export const EDITIONS: readonly Edition[] = Object.freeze(loadAndValidatePublished(process.cwd()));

export function getEdition(id: string, version: number): Edition | undefined {
  return EDITIONS.find((edition) => edition.id === id && edition.version === version);
}

export function latestEditions(): Edition[] {
  const latest = new Map<string, Edition>();
  for (const edition of EDITIONS) {
    const current = latest.get(edition.id);
    if (!current || edition.version > current.version) latest.set(edition.id, edition);
  }
  return [...latest.values()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.id.localeCompare(b.id));
}

export function getLatestSeriesEdition(seriesId: string): Edition | undefined {
  return EDITIONS.filter((edition) => edition.seriesId === seriesId)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || b.version - a.version)[0];
}
