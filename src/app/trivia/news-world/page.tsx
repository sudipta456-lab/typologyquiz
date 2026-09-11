import type { Metadata } from "next";
import { NewsEdition } from "@/components/newsquiz/NewsEdition";
import { getLatestSeriesEdition } from "@/lib/newsquiz/editions";
import { editionPath } from "@/lib/editorial/identity";
import { SITE } from "@/lib/site";

const edition = getLatestSeriesEdition("news-world");
if (!edition) throw new Error("Missing published news edition: news-world");

export const metadata: Metadata = {
  title: edition.title,
  description: edition.description,
  alternates: { canonical: editionPath(edition) },
  openGraph: { title: edition.title, description: edition.description, url: `${SITE.url}${editionPath(edition)}` },
};

export default function NewsWorldPage() {
  return <NewsEdition edition={edition!} />;
}