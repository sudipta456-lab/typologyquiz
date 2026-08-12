import type { Metadata } from "next";
import { JURISDICTIONS, getSet } from "@/lib/driving/jurisdictions";
import { ResultsDrivingClient } from "./ResultsDrivingClient";

/** Mirrors the take route, including the browser-built "weak-spots" drill. */
export function generateStaticParams() {
  return JURISDICTIONS.flatMap((j) => [
    ...j.sets.map((set) => ({ jurisdiction: j.slug, setId: set.id })),
    { jurisdiction: j.slug, setId: "weak-spots" },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ jurisdiction: string; setId: string }>;
}): Promise<Metadata> {
  const { jurisdiction, setId } = await params;
  const found = getSet(jurisdiction, setId);
  const j = found?.jurisdiction ?? JURISDICTIONS.find((x) => x.slug === jurisdiction);
  if (!j) return { title: "Driving practice test results" };

  const label = found ? found.set.title : setId === "weak-spots" ? "Your weak spots" : "practice";

  return {
    title: `Your result · ${j.name} ${label}`,
    description: `Your score on the ${j.name} practice set, checked against the real pass mark (${j.officialTest.passLabel}), with every missed question explained.`,
    // A personal score page has nothing to offer search - the shareable link is
    // the point, not the ranking.
    robots: { index: false, follow: true },
  };
}

export default function DrivingResultsPage() {
  return <ResultsDrivingClient />;
}
