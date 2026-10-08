import type { Metadata } from "next";
import { RapidRound } from "@/components/trivia/RapidRound";
import { getRapidRound } from "@/lib/trivia/rapid-rounds";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";

const round = getRapidRound("quickfire-10-in-90")!;
const path = "/trivia/quickfire-10-in-90/";

export const metadata: Metadata = {
  title: "10 in 90: General Knowledge Quiz",
  description: "Ten general-knowledge questions in 90 seconds. Choose an answer, get a short explanation, and see how quickly you can finish. No signup.",
  alternates: { canonical: path },
  openGraph: { title: `10 in 90 · ${SITE.legalName}`, description: "A clear, fast 10-question general-knowledge sprint.", url: `${SITE.url}${path}`, images: [{ url: `${SITE.url}/og/trivia-hub.png`, width: 1200, height: 630, alt: "10 in 90 general knowledge quiz" }] },
  twitter: { card: "summary_large_image", title: "10 in 90: General Knowledge Quiz", description: "Ten questions, ninety seconds.", images: [`${SITE.url}/og/trivia-hub.png`] },
};

const jsonLd = jsonLdGraph([
  quizNode({ path, name: "10 in 90: General Knowledge Quiz", description: metadata.description!, numberOfQuestions: round.questions.length, educationalUse: "practice", educationalSubject: "General knowledge", about: "General knowledge recall under a short time limit" }),
  breadcrumbList([{ name: "Home", path: "/" }, { name: "Trivia", path: "/trivia/" }, { name: "10 in 90", path }]),
]);

export default function QuickfirePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><RapidRound round={round} /></>;
}
