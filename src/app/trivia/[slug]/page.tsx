import type { Metadata } from "next";
import { getRunSize, getTriviaQuiz, TRIVIA_QUIZZES } from "@/lib/trivia/registry";
import { SITE } from "@/lib/site";
import { TriviaPlayClient } from "@/components/trivia/TriviaPlayClient";

export function generateStaticParams() {
  return TRIVIA_QUIZZES.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const quiz = getTriviaQuiz(slug);
  if (!quiz) return { title: "Trivia quiz" };

  // Per-quiz OG card from scripts/generate-og-cards.mjs (prebuild). The A-to-Z
  // letter pages share one card; hand-authored quizzes each get their own.
  const ogImage =
    quiz.filterLetter !== undefined
      ? `${SITE.url}/og/trivia-letters.png`
      : `${SITE.url}/og/trivia-${quiz.slug}.png`;
  return {
    title: quiz.title,
    description: quiz.seoDescription,
    alternates: { canonical: `/trivia/${quiz.slug}/` },
    openGraph: {
      title: `${quiz.title} · ${SITE.legalName}`,
      description: quiz.seoDescription,
      url: `${SITE.url}/trivia/${quiz.slug}/`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: quiz.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${quiz.title} · ${SITE.legalName}`,
      description: quiz.seoDescription,
      images: [ogImage],
    },
  };
}

export default async function TriviaQuizPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const quiz = getTriviaQuiz(slug);

  // Quiz JSON-LD keeps the pages eligible for rich results; answer content is
  // deliberately NOT included (it would hand the answer key to the snippet).
  const jsonLd = quiz
    ? {
        "@context": "https://schema.org",
        "@type": "Quiz",
        name: quiz.title,
        description: quiz.seoDescription,
        url: `${SITE.url}/trivia/${quiz.slug}/`,
        numberOfQuestions: getRunSize(quiz),
        educationalAlignment: {
          "@type": "AlignmentObject",
          alignmentType: "educationalSubject",
          targetName:
            quiz.dataset === "planets" || quiz.dataset === "elements" ? "Science" : "Geography",
        },
        provider: { "@type": "Organization", name: SITE.legalName, url: SITE.url },
      }
    : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <TriviaPlayClient slug={slug} />
    </>
  );
}
