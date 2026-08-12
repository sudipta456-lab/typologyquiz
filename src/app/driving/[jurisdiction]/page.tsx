import type { Metadata } from "next";
import { JURISDICTIONS, getJurisdiction } from "@/lib/driving/jurisdictions";
import { SITE } from "@/lib/site";
import { jurisdictionJsonLd } from "@/lib/driving/structured-data";
import { JurisdictionClient } from "./JurisdictionClient";

export function generateStaticParams() {
  return JURISDICTIONS.map((j) => ({ jurisdiction: j.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}): Promise<Metadata> {
  const { jurisdiction: slug } = await params;
  const j = getJurisdiction(slug);
  if (!j) return { title: "Driving practice tests" };

  const title = `${j.name} Driving Practice Test (${j.licenceName})`;
  const description = `Free ${j.name} knowledge test practice questions, scored against the real pass mark of ${j.officialTest.passLabel}. Every answer is explained and linked to the ${j.handbookName}.`;

  return {
    title,
    description,
    alternates: { canonical: `/driving/${j.slug}/` },
    openGraph: {
      title: `${title} · ${SITE.legalName}`,
      description,
      url: `${SITE.url}/driving/${j.slug}/`,
    },
  };
}

export default async function JurisdictionPage({
  params,
}: {
  params: Promise<{ jurisdiction: string }>;
}) {
  const { jurisdiction: slug } = await params;
  const j = getJurisdiction(slug);

  return (
    <>
      {/* Course + Quiz + FAQ markup. The FAQ entries are the starred
          commonly-missed questions, answered with our explanation and the
          handbook quote - the shape an assistant needs to answer and cite. */}
      {j && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jurisdictionJsonLd(j)) }}
        />
      )}
      <JurisdictionClient />
    </>
  );
}
