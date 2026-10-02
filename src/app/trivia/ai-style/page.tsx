import type { Metadata } from "next";
import { InterestQuiz } from "@/components/trivia/InterestQuiz";
import { SITE } from "@/lib/site";
import { breadcrumbList, jsonLdGraph, quizNode } from "@/lib/structured-data";

const title = "How Do You Like to Work with AI?";
const description = "A short, playful preference quiz about exploring, building workflows, collaborating, or evaluating AI tools. It is not a measure of intelligence, skill, employability, or future success.";
const path = "/trivia/ai-style/";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: path },
  openGraph: { title: `${title} · ${SITE.legalName}`, description, url: `${SITE.url}${path}`, images: [{ url: `${SITE.url}/og/trivia-hub.png`, width: 1200, height: 630, alt: title }] },
  twitter: { card: "summary_large_image", title, description, images: [`${SITE.url}/og/trivia-hub.png`] },
};

const jsonLd = jsonLdGraph([
  quizNode({ path, name: title, description, numberOfQuestions: 6, timeRequiredMinutes: 3, educationalUse: "self-reflection", about: "Personal preferences for exploring and working with AI tools", note: "Not a test of intelligence, technical skill, employability, or future success." }),
  breadcrumbList([{ name: "Home", path: "/" }, { name: "Trivia", path: "/trivia/" }, { name: "AI work-style quiz", path }]),
]);

export default function AIStylePage() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><InterestQuiz kind="ai" /></>;
}
