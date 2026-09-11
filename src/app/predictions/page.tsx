import type { Metadata } from "next";
import { PredictionPilot } from "@/components/predictions/PredictionPilot";

export const metadata: Metadata = {
  title: "Prediction-to-recap pilot",
  description: "Make casual episode predictions, keep a signed receipt, and return for a reviewed recap.",
  alternates: { canonical: "/predictions/" },
};

export default function PredictionsPage() {
  return <main className="section" style={{ maxWidth: "48rem" }}>
    <p className="eyebrow">Prediction-to-recap pilot</p>
    <h1 className="section-title">Call it before it happens.</h1>
    <p className="section-lead">A casual, general-audience prediction round. Your browser keeps only the signed receipt; the server owns the cutoff and reviewed outcome.</p>
    <PredictionPilot />
  </main>;
}
