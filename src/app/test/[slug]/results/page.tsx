import type { Metadata } from "next";
import { TESTS } from "@/lib/tests/registry";
import { ResultsClient } from "./ResultsClient";

export const metadata: Metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return TESTS.map((t) => ({ slug: t.slug }));
}

export default function ResultsPage() {
  return <ResultsClient />;
}