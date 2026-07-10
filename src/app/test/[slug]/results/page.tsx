import { TESTS } from "@/lib/tests/registry";
import { ResultsClient } from "./ResultsClient";

export function generateStaticParams() {
  return TESTS.map((t) => ({ slug: t.slug }));
}

export default function ResultsPage() {
  return <ResultsClient />;
}