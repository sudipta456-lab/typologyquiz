import type { Jurisdiction } from "./types";
import { getExcerpt } from "./excerpts";
import { SITE } from "@/lib/site";

// Structured data for the driving pages.
//
// Worth doing properly here for two reasons. Search: these pages carry real
// intent ("alberta class 7 practice test") and FAQ markup is one of the few
// rich results still granted to small sites. Assistants: an LLM answering
// "what's the speed limit in an Alberta school zone" wants a question, a
// direct answer, and a citation - which is exactly the shape of our
// commonly-missed questions, so we hand it over already formatted.
//
// Only starred (commonlyMissed) questions become FAQs. They are the ones with
// genuine search demand, and shipping 200 per page would be spam.

const base = SITE.url.replace(/\/$/, "");

function stripToPlainAnswer(
  question: Jurisdiction["sets"][number]["questions"][number],
  jurisdictionSlug: string
): string {
  const correct = question.choices[question.correctIndex];
  const parts = [`${correct}.`, question.explanation];
  const excerpt = getExcerpt(jurisdictionSlug, question.excerptKey);
  if (excerpt) {
    // Quoting the handbook inside the answer gives an assistant something it
    // can attribute, rather than only our paraphrase.
    parts.push(`Official wording: "${excerpt.quote}" (${excerpt.source}).`);
  }
  return parts.join(" ");
}

export function jurisdictionJsonLd(j: Jurisdiction): object {
  const url = `${base}/driving/${j.slug}/`;
  const totalQuestions = j.sets.reduce((n, s) => n + s.questions.length, 0);

  const starred = j.sets
    .flatMap((s) => s.questions)
    .filter((q) => q.commonlyMissed)
    // Cap it. Beyond a couple of dozen this stops being a useful summary and
    // starts looking like keyword stuffing to both readers and crawlers.
    .slice(0, 24);

  const graph: object[] = [
    {
      "@type": "Course",
      "@id": `${url}#course`,
      name: `${j.name} ${j.licenceName} knowledge test practice`,
      description: j.intro,
      url,
      provider: { "@id": `${base}/#organization` },
      isAccessibleForFree: true,
      inLanguage: "en",
      educationalLevel: "Beginner",
      teaches: `${j.name} road rules, signs and licensing rules for the ${j.licenceName} knowledge test`,
      hasCourseInstance: j.sets.map((s) => ({
        "@type": "CourseInstance",
        name: s.title,
        description: s.description,
        courseMode: "online",
        url: `${url}${s.id}/take/`,
      })),
    },
    {
      "@type": "Quiz",
      "@id": `${url}#quiz`,
      name: `${j.name} ${j.licenceName} practice questions`,
      url,
      isAccessibleForFree: true,
      educationalUse: "practice",
      numberOfQuestions: totalQuestions,
      about: {
        "@type": "Thing",
        name: `${j.name} driving knowledge test`,
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
        { "@type": "ListItem", position: 2, name: "Driving practice tests", item: `${base}/driving/` },
        { "@type": "ListItem", position: 3, name: j.name, item: url },
      ],
    },
  ];

  if (starred.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: starred.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: stripToPlainAnswer(q, j.slug),
        },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

export function drivingHubJsonLd(jurisdictions: Jurisdiction[]): object {
  const url = `${base}/driving/`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#collection`,
        name: "Driving licence practice tests",
        description:
          "Free practice tests for driving licence knowledge exams, scored the way each real test is scored, with every answer linked to the official handbook.",
        url,
        isPartOf: { "@id": `${base}/#website` },
        inLanguage: "en",
      },
      {
        "@type": "ItemList",
        itemListElement: jurisdictions.map((j, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: `${j.name} ${j.licenceName} practice test`,
          url: `${base}/driving/${j.slug}/`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${base}/` },
          { "@type": "ListItem", position: 2, name: "Driving practice tests", item: url },
        ],
      },
    ],
  };
}
