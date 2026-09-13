import type { Metadata } from "next";
import { TESTS } from "@/lib/tests/registry";
import { TakeTestClient } from "./TakeTestClient";

export const metadata: Metadata = { robots: { index: false, follow: true } };

export function generateStaticParams() {
  return TESTS.map((t) => ({ slug: t.slug }));
}

export default function TakeTestPage() {
  return <TakeTestClient />;
}