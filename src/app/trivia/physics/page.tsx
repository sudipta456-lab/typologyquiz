import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";
import { PhysicsPreferenceQuiz } from "@/components/trivia/PhysicsPreferenceQuiz";

const title = "Which Kind of Physics Makes You Curious?";
const description =
  "A quick, playful physics preference quiz: discover whether classical mechanics, relativity, or quantum physics best matches the questions you love. Not a knowledge test.";
const path = "/trivia/physics/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: {
    title: `${title} · ${SITE.legalName}`,
    description,
    url: `${SITE.url}${path}`,
    images: [{ url: `${SITE.url}/og/trivia-hub.png`, width: 1200, height: 630, alt: title }],
  },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE.url}/og/trivia-hub.png`] },
};

const jsonLd = jsonLdGraph([
  quizNode({
    path,
    name: title,
    description,
    numberOfQuestions: 7,
    educationalUse: "self-reflection",
    educationalSubject: "Physics",
    about: "Interests in classical mechanics, relativity, and quantum physics",
    note: "A playful interest profile, not a knowledge test or measure of ability.",
  }),
  breadcrumbList([
    { name: "Home", path: "/" },
    { name: "Trivia", path: "/trivia/" },
    { name: "Physics", path },
  ]),
]);

export default function PhysicsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PhysicsPreferenceQuiz />
    </>
  );
}
