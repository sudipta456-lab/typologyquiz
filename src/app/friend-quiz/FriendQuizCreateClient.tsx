"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { FRIEND_PACKS, MIX_PACK_ID, getQuestion, packTitle, sampleMix } from "@/lib/friendquiz/packs";
import {
  FRIEND_QUIZ_VERSION,
  buildPlayUrl,
  cleanName,
  clearDraft,
  loadDraft,
  saveDraft,
  type FriendQuizPayload,
} from "@/lib/friendquiz/codec";
import { FriendQuestionCard } from "@/components/friendquiz/FriendQuestionCard";
import { FriendShareBlock } from "@/components/friendquiz/FriendShareBlock";
import { useSiteOrigin } from "@/lib/use-site-origin";

type Step = "pick" | "answer" | "name" | "share";

function subscribeToStorage(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

export function FriendQuizCreateClient() {
  const origin = useSiteOrigin();
  const [step, setStep] = useState<Step>("pick");
  const [packId, setPackId] = useState<string>("");
  const [questionIds, setQuestionIds] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("");

  // A draft from a previous visit is offered, never forced. False during
  // prerender so the static HTML and the first client paint agree.
  const resumable = useSyncExternalStore(
    subscribeToStorage,
    () => !!loadDraft(),
    () => false
  );

  useEffect(() => {
    if (!packId || questionIds.length === 0) return;
    saveDraft({ packId, questionIds, answers, name });
  }, [packId, questionIds, answers, name]);

  const questions = useMemo(
    () =>
      questionIds
        .map(getQuestion)
        .filter((q): q is NonNullable<typeof q> => q !== undefined),
    [questionIds]
  );

  function startPack(id: string) {
    const ids =
      id === MIX_PACK_ID
        ? sampleMix().map((q) => q.id)
        : FRIEND_PACKS.find((p) => p.id === id)?.questions.map((q) => q.id) || [];
    if (ids.length === 0) return;
    setPackId(id);
    setQuestionIds(ids);
    setAnswers({});
    setIndex(0);
    setStep("answer");
  }

  function resumeDraft() {
    const draft = loadDraft();
    if (!draft) return;
    setPackId(draft.packId);
    setQuestionIds(draft.questionIds);
    setAnswers(draft.answers);
    setName(draft.name);
    const firstOpen = draft.questionIds.findIndex((id) => draft.answers[id] === undefined);
    if (firstOpen === -1) {
      setIndex(draft.questionIds.length - 1);
      setStep("name");
    } else {
      setIndex(firstOpen);
      setStep("answer");
    }
  }

  function startOver() {
    clearDraft();
    setPackId("");
    setQuestionIds([]);
    setAnswers({});
    setIndex(0);
    setName("");
    setStep("pick");
  }

  function handlePick(optionIndex: number) {
    const q = questions[index];
    if (!q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: optionIndex }));
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setStep("name");
    }
  }

  const payload: FriendQuizPayload | null = useMemo(() => {
    if (questions.length === 0) return null;
    if (questions.some((q) => answers[q.id] === undefined)) return null;
    const n = cleanName(name);
    if (!n) return null;
    return {
      v: FRIEND_QUIZ_VERSION,
      n,
      p: packId,
      q: questions.map((q) => q.id),
      a: questions.map((q) => answers[q.id]),
    };
  }, [questions, answers, name, packId]);

  const shareUrl = payload ? buildPlayUrl(origin, payload) : "";
  const shareText = payload
    ? `How well do you know me? I made a 10-question quiz about myself. Prove yourself: ${shareUrl}`
    : "";

  /* ---------- render ---------- */

  if (step === "answer" && questions[index]) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Friend quiz · {packTitle(packId)}</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          First, answer as yourself
        </h1>
        <p className="section-lead">
          These are the real answers your friends will be guessing against. No pressure, but also, all the pressure.
        </p>
        <FriendQuestionCard
          question={questions[index]}
          index={index}
          total={questions.length}
          picked={answers[questions[index].id]}
          onPick={handlePick}
          eyebrow="About you"
        />
        <p style={{ marginTop: 16, display: "flex", gap: 16 }}>
          {index > 0 && (
            <button type="button" className="text-link" onClick={() => setIndex(index - 1)}>
              Back a question
            </button>
          )}
          <button type="button" className="text-link" onClick={startOver}>
            Start over
          </button>
        </p>
      </div>
    );
  }

  if (step === "name") {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Friend quiz · almost done</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          Who should they say they know?
        </h1>
        <p className="section-lead">
          This name goes in the quiz title: &quot;How well do you know ___?&quot;
        </p>
        <label className="compare-field" style={{ maxWidth: "20rem" }}>
          <span>Your first name</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={20}
            placeholder="Maya"
            autoFocus
          />
        </label>
        <p style={{ fontSize: "0.85rem", color: "var(--ink-mute)", marginTop: 8 }}>
          First name or nickname only. The link travels, so skip full names.
        </p>
        <div className="test-actions" style={{ marginTop: 20 }}>
          <button
            type="button"
            className="btn-primary"
            disabled={!cleanName(name)}
            onClick={() => setStep("share")}
          >
            Get my link
          </button>
          <button type="button" className="text-link" onClick={() => setStep("answer")}>
            Back to questions
          </button>
        </div>
      </div>
    );
  }

  if (step === "share" && payload) {
    return (
      <div className="section" style={{ maxWidth: "42rem" }}>
        <p className="eyebrow">Friend quiz · ready</p>
        <h1 className="section-title" style={{ fontSize: "1.6rem" }}>
          Your quiz is live in this link
        </h1>
        <p className="section-lead">
          Send it to the group chat and watch the scores roll back in. Everyone who plays gets a
          link to send their score back to you.
        </p>
        <FriendShareBlock
          heading="Send it to the group chat"
          subheading="One link, ten questions, zero mercy"
          url={shareUrl}
          shareText={shareText}
          shareTitle={`How well do you know ${payload.n}?`}
        />
        <p style={{ fontSize: "0.85rem", color: "var(--ink-mute)", marginTop: 16 }}>
          Privacy: your answers live in the link you share, nowhere else. Nothing is uploaded and
          nothing is stored on our side. Delete the message, and the quiz is gone with it.
        </p>
        <p style={{ marginTop: 20 }}>
          <button type="button" className="text-link" onClick={startOver}>
            Make another quiz
          </button>
        </p>
      </div>
    );
  }

  // step === "pick"
  return (
    <div className="section" style={{ maxWidth: "46rem" }}>
      <p className="eyebrow">Friend quiz</p>
      <h1 className="section-title">How well do your friends know you?</h1>
      <p className="section-lead">
        Answer 10 questions about yourself, get one link, and let your friends guess. They get a
        score out of 10; you get proof of who actually pays attention. Free, no signup. Your
        answers live in the link you share, nowhere else.
      </p>

      {resumable && (
        <div className="room-banner" style={{ marginBottom: 20 }}>
          <p>
            You have an unfinished quiz.{" "}
            <button type="button" className="text-link" onClick={resumeDraft}>
              Pick up where you left off
            </button>
          </p>
        </div>
      )}

      <h2 className="test-block-title" style={{ marginBottom: 10 }}>
        Pick your question pack
      </h2>
      <div className="card-grid" style={{ marginBottom: 20 }}>
        {FRIEND_PACKS.map((pack) => (
          <button
            key={pack.id}
            type="button"
            className="quiz-card"
            style={{ textAlign: "left", width: "100%" }}
            onClick={() => startPack(pack.id)}
          >
            <h3 className="quiz-card-title">{pack.title}</h3>
            <p className="quiz-card-desc">{pack.blurb}</p>
            <span className="quiz-meta">10 questions</span>
          </button>
        ))}
        <button
          type="button"
          className="quiz-card"
          style={{ textAlign: "left", width: "100%" }}
          onClick={() => startPack(MIX_PACK_ID)}
        >
          <h3 className="quiz-card-title">Mix</h3>
          <p className="quiz-card-desc">
            A little of everything: some basics, some deep cuts, a spoonful of chaos.
          </p>
          <span className="quiz-meta">10 questions, sampled fresh</span>
        </button>
      </div>

      <p style={{ fontSize: "0.9rem", color: "var(--ink-soft)" }}>
        Got a quiz link from a friend? Just open it; their quiz travels inside the link itself.
      </p>
    </div>
  );
}
