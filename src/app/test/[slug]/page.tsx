import { TESTS } from "@/lib/tests/registry";
import { TestIntroClient } from "./TestIntroClient";

export function generateStaticParams() {
  return TESTS.map((t) => ({ slug: t.slug }));
}

export default function TestIntroPage() {
  return <TestIntroClient />;
}