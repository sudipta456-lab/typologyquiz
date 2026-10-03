import type { Metadata } from "next";
import { OperationsDashboard } from "@/components/OperationsDashboard";

export const metadata: Metadata = {
  title: "Growth operations",
  description: "Private TypologyQuiz growth operations dashboard.",
  robots: { index: false, follow: false },
};

export default function OperationsPage() {
  return <OperationsDashboard />;
}
