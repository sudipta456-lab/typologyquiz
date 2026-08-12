import type { Metadata } from "next";
import { JURISDICTIONS, getJurisdiction } from "@/lib/driving/jurisdictions";
import { SITE } from "@/lib/site";
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

export default function JurisdictionPage() {
  return <JurisdictionClient />;
}
