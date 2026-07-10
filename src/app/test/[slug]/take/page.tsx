import { TESTS } from "@/lib/tests/registry";
import { TakeTestClient } from "./TakeTestClient";

export function generateStaticParams() {
  return TESTS.map((t) => ({ slug: t.slug }));
}

export default function TakeTestPage() {
  return <TakeTestClient />;
}