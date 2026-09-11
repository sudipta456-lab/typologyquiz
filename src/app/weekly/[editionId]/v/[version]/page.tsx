import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsEdition } from "@/components/newsquiz/NewsEdition";
import { EDITIONS, getEdition } from "@/lib/newsquiz/editions";
import { editionPath } from "@/lib/editorial/identity";
import { SITE } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return EDITIONS.map(edition => ({ editionId: edition.id, version: String(edition.version) }));
}
type Props = { params: Promise<{ editionId: string; version: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { editionId, version } = await params;
  const edition = getEdition(editionId, Number(version));
  if (!edition || String(edition.version) !== version) return {};
  return { title: edition.title, description: edition.description, alternates: { canonical: editionPath(edition) },
    openGraph: { title: edition.title, description: edition.description, url: `${SITE.url}${editionPath(edition)}` } };
}
export default async function EditionPage({ params }: Props) {
  const { editionId, version } = await params;
  const edition = getEdition(editionId, Number(version));
  if (!edition || String(edition.version) !== version) notFound();
  return <NewsEdition edition={edition} />;
}
