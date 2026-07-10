import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Credits & Attributions",
  description:
    "Research instruments and attributions behind TypologyQuiz tests - Mini-IPIP, 8values, CRT, and VVIQ.",
  alternates: { canonical: "/credits/" },
  openGraph: {
    title: `Credits · ${SITE.legalName}`,
    url: `${SITE.url}/credits/`,
  },
};

export default function CreditsPage() {
  return (
    <div className="section">
      <h1 className="section-title" style={{ marginBottom: 12 }}>
        Credits & Attributions
      </h1>
      <p className="section-lead" style={{ maxWidth: 720, marginBottom: 40 }}>
        All tests on TypologyQuiz are based on published, peer-reviewed instruments. We are grateful
        to the researchers who made these tools freely available.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 32, maxWidth: 780 }}>
        <section style={{ padding: 32, borderRadius: 24, border: "1px solid #e8ecf1", background: "#fff" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>8values - Political Values Test</h2>
          <p style={{ color: "#5a6170", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Forked from{" "}
            <a href="https://github.com/8values/8values.github.io" style={{ color: "#2d5cf6", fontWeight: 600 }}>github.com/8values/8values.github.io</a>{" "}
            under the MIT license. Questions adapted to 5-point Likert format for one-per-screen delivery.
          </p>
        </section>
        <section style={{ padding: 32, borderRadius: 24, border: "1px solid #e8ecf1", background: "#fff" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>Mini-IPIP - Big Five Personality</h2>
          <p style={{ color: "#5a6170", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Items from the International Personality Item Pool (IPIP). Public domain.{" "}
            <a href="https://ipip.ori.org" style={{ color: "#2d5cf6", fontWeight: 600 }}>ipip.ori.org</a>
          </p>
        </section>
        <section style={{ padding: 32, borderRadius: 24, border: "1px solid #e8ecf1", background: "#fff" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>Cognitive Reflection Test (CRT + CRT-2)</h2>
          <p style={{ color: "#5a6170", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Frederick, S. (2005). Cognitive Reflection and Decision Making. <em>Journal of Economic Perspectives</em>, 19(4), 25-42. CRT-2 items from Thomson & Oppenheimer (2016).
          </p>
        </section>
        <section style={{ padding: 32, borderRadius: 24, border: "1px solid #e8ecf1", background: "#fff" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>VVIQ - Vividness of Visual Imagery Questionnaire</h2>
          <p style={{ color: "#5a6170", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            Marks, D. F. (1973). Visual imagery differences in the recall of pictures. <em>British Journal of Psychology</em>, 64(1), 17-24.
          </p>
        </section>
        <section style={{ padding: 32, borderRadius: 24, border: "1px solid #e8ecf1", background: "#fff" }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#1a1a2e", marginBottom: 8 }}>License</h2>
          <p style={{ color: "#5a6170", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>
            All test content is used under their respective open licenses (MIT, public domain, or academic fair use with attribution). TypologyQuiz itself is free and open. No test data is stored on our servers.
          </p>
        </section>
      </div>
    </div>
  );
}