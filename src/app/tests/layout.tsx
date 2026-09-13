import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free personality tests and self-reflection quizzes",
  description: "Browse personality tests and quizzes by topic. See what each measures, its evidence and its limits before you start. Free, with no account required.",
  alternates: { canonical: "/tests/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
