import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why TypologyQuiz exists: free, privacy-first personality and typology quizzes backed by real psychology - no accounts, no data brokers.",
  alternates: { canonical: "/about/" },
  openGraph: {
    title: `About · ${SITE.legalName}`,
    description:
      "Free, privacy-first personality quizzes backed by real psychology. No accounts required.",
    url: `${SITE.url}/about/`,
  },
};

export default function AboutPage() {
  return (
    <div className="section">
      <h1 className="section-title" style={{ marginBottom: 12 }}>
        About TypologyQuiz
      </h1>
      <p className="section-lead" style={{ maxWidth: 720, marginBottom: 40 }}>
        We make personality tests that don&rsquo;t feel like corporate HR forms. Backed by real
        psychology, built with care, and free forever.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 780 }}>
        <section className="content-card">
          <h2 className="content-card-title">Why we exist</h2>
          <p className="content-card-body">
            Most personality tests are either scientifically dubious or locked behind paywalls. We
            wanted something better - tests based on validated psychological instruments, with
            beautiful results you actually want to share.
          </p>
        </section>
        <section className="content-card">
          <h2 className="content-card-title">Privacy first</h2>
          <ul className="content-list">
            <li>
              <strong>No accounts required.</strong> Take any test without signing up.
            </li>
            <li>
              <strong>No server-side storage.</strong> Your answers stay in your browser.
            </li>
            <li>
              <strong>Results are local.</strong> All scoring happens on your device.
            </li>
            <li>
              <strong>We never sell or share your data.</strong> Because we don&rsquo;t have it  - 
              unless you choose to share a results link.
            </li>
          </ul>
        </section>
        <section className="content-card">
          <h2 className="content-card-title">Contact</h2>
          <p className="content-card-body">
            Reach out at{" "}
            <a href={`mailto:${SITE.email}`} style={{ color: "#2d5cf6", fontWeight: 600 }}>
              {SITE.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
