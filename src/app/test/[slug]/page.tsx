import type { Metadata } from "next";
import { getTest, TESTS } from "@/lib/tests/registry";
import { getSeoTitle } from "@/lib/seo-titles";
import { SITE } from "@/lib/site";
import { TestIntroClient } from "./TestIntroClient";

export function generateStaticParams() {
  return TESTS.map((t) => ({ slug: t.slug }));
}

// Headline titles live in seo-titles.ts and feed the <title> and og:title
// ONLY. The on-page H1, the slug, and share cards keep test.title.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const test = getTest(slug);
  if (!test) return { title: "Quiz" };

  const seoTitle = getSeoTitle(slug, test.title);
  return {
    title: seoTitle,
    description: test.description,
    alternates: { canonical: `/test/${slug}/` },
    openGraph: {
      title: `${seoTitle} · ${SITE.legalName}`,
      description: test.description,
      url: `${SITE.url}/test/${slug}/`,
    },
  };
}

export default function TestIntroPage() {
  return <TestIntroClient />;
}
