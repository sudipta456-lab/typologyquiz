import type { Metadata } from "next";
import { JURISDICTIONS, getSet } from "@/lib/driving/jurisdictions";
import { TakeDrivingClient } from "./TakeDrivingClient";

/**
 * "weak-spots" is a synthetic set built in the browser from what the learner
 * has missed, so it has no entry in the question banks - but the static export
 * still needs the route file to exist for every jurisdiction.
 */
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

  if (!found) {
    const j = JURISDICTIONS.find((x) => x.slug === jurisdiction);
    if (j && setId === "weak-spots") {
      return {
        title: `Your weak spots · ${j.name} driving practice`,
        description: `A drill rebuilt from the ${j.name} questions you've actually missed, plus the topics they came from.`,
        robots: { index: false, follow: true },
      };
    }
    return { title: "Driving practice test" };
  }

  return {
    title: `${found.jurisdiction.name} practice test · ${found.set.title}`,
    description: `${found.set.questions.length} ${found.jurisdiction.name} knowledge test practice questions with an explanation after every answer. ${found.set.description}`,
    alternates: {
      canonical: `/driving/${found.jurisdiction.slug}/${found.set.id}/take/`,
    },
  };
}

export default function TakeDrivingPage() {
  return <TakeDrivingClient />;
}
