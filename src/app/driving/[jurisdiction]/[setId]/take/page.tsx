import type { Metadata } from "next";
import { JURISDICTIONS, getSet } from "@/lib/driving/jurisdictions";
import { TakeDrivingClient } from "./TakeDrivingClient";

/**
 * "weak-spots" and "retry-missed" are synthetic sets built in the browser - one
 * from everything the learner has ever missed, one from the misses on a single
 * attempt - so neither has an entry in the question banks. The static export
 * still needs the route file to exist for every jurisdiction.
 */
export function generateStaticParams() {
  return JURISDICTIONS.flatMap((j) => [
    ...j.sets.map((set) => ({ jurisdiction: j.slug, setId: set.id })),
    { jurisdiction: j.slug, setId: "weak-spots" },
    { jurisdiction: j.slug, setId: "retry-missed" },
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
    if (j && setId === "retry-missed") {
      return {
        title: `The ones you missed · ${j.name} driving practice`,
        description: `Retake just the ${j.name} questions you got wrong on your last attempt.`,
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
