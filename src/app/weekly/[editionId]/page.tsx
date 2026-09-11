import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { latestEditions } from "@/lib/newsquiz/editions";
import { editionPath } from "@/lib/editorial/identity";
import { NewsEdition } from "@/components/newsquiz/NewsEdition";

export const dynamicParams = false;
export function generateStaticParams() { return latestEditions().map(edition => ({ editionId: edition.id })); }
type Props = { params: Promise<{ editionId: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { editionId } = await params;
  const edition = latestEditions().find(item => item.id === editionId);
  return edition ? { title: edition.title, description: edition.description, alternates: { canonical: editionPath(edition) } } : {};
}
export default async function LatestEditionPage({ params }: Props) {
  const { editionId } = await params;
  const edition = latestEditions().find(item => item.id === editionId);
  if (!edition) notFound();
  return <NewsEdition edition={edition} />;
}
