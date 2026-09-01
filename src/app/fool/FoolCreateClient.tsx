"use client";

import { useState } from "react";
import { sampleFoolQuestions, type FoolQuestion } from "@/lib/fool/questions";
import {
  FOOL_QUESTION_COUNT,
  FOOL_VERSION,
  buildPlayUrl,
  type FoolPayload,
} from "@/lib/fool/codec";
import { FakeWriter } from "@/components/fool/FakeWriter";
import { FriendShareBlock } from "@/components/friendquiz/FriendShareBlock";
import { useSiteOrigin } from "@/lib/use-site-origin";

type Step = "intro" | "write" | "share";

export function FoolCreateClient() {
  const origin = useSiteOrigin();
  const [step, setStep] = useState<Step>("intro");
  const [questions, setQuestions] = useState<FoolQuestion[]>([]);
  const [payload, setPayload] = useState<FoolPayload | null>(null);

  function deal() {
    setQuestions(sampleFoolQuestions(FOOL_QUESTION_COUNT));
    setPayload(null);
    setStep("write");
  }

  function handleComplete(name: string, fakes: string[]) {
    if (questions.length === 0) return;
    setPayload({
      v: FOOL_VERSION,
      q: questions.map((q) => q.id),
      c: [{ n: name, f: fakes }],
    });
    setStep("share");
  }

  if (step === "write" && questions.length > 0) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          Write one convincing lie per question
        </h1>
        <p className="section-lead">
          You never see the real answers, and neither do we show them to you.
          That keeps it fair: your fake has to sound true on its own merits.
        </p>
        <FakeWriter
          questions={questions}
          ctaLabel="Get my link"
          onComplete={handleComplete}
          onCancel={() => setStep("intro")}
          cancelLabel="Start over"
        />
      </div>
    );
  }

  if (step === "share" && payload) {
    const shareUrl = buildPlayUrl(origin, payload);
    const shareText = `Trivia, but one answer in every question is a lie I wrote. Spot the truth if you can: ${shareUrl}`;
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Fool your friends · ready</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          Your lies are live in this link
        </h1>
        <p className="section-lead">
          Six questions, and in each one your fake answer sits next to the truth
          and two decoys. Every time a friend picks your lie, you score.
        </p>
        <FriendShareBlock
          heading="Send it to the group chat"
          subheading="One link, six questions, one liar (you)"
          url={shareUrl}
          shareText={shareText}
          shareTitle={`Can you spot ${payload.c[0].n}'s lies?`}
        />
        <p style={{ fontSize: "0.85rem", color: "var(--ink-mute)", marginTop: 16 }}>
          Privacy: your fakes live in the link you share, nowhere else. Nothing
          is uploaded and nothing is stored on our side. Delete the message, and
          the game is gone with it.
        </p>
        <p style={{ marginTop: 20 }}>
          <button type="button" className="text-link" onClick={deal}>
            Make another one
          </button>
        </p>
      </div>
    );
  }

  // step === "intro"
  return (
    <div className="section" style={{ maxWidth: "46rem" }}>
      <p className="eyebrow">Fool your friends</p>
      <h1 className="section-title">Can your friends spot the truth?</h1>
      <p className="section-lead">
        We deal you 6 real trivia questions. You write a fake answer for each
        one, believable enough to pass for the truth. Your friends see the real
        answer, two decoys, and your lie all shuffled together. They score for
        every truth they find; you score every time they fall for your fake.
      </p>
      <ul style={{ color: "var(--ink-soft)", lineHeight: 1.7, margin: "0 0 20px", paddingLeft: "1.2rem" }}>
        <li>You never see the answers while writing, so it stays fair.</li>
        <li>Friends who finish can add their own lies and pass it on, up to 3 tricksters per chain.</li>
        <li>Everything travels inside the link. No accounts, nothing stored.</li>
      </ul>
      <div className="test-actions">
        <button type="button" className="btn-primary btn-lg" onClick={deal}>
          Deal my 6 questions
        </button>
      </div>
      <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)", marginTop: 20 }}>
        Got a link from a friend? Just open it; their whole game travels inside
        the link itself.
      </p>
    </div>
  );
}
