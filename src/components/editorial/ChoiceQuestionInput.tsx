import type { ChoiceQuestion, ImageChoiceQuestion } from "@/lib/editorial/types";

export function ChoiceQuestionInput({ question, disabled, revealed, picked, onAnswer }: { question: ChoiceQuestion | ImageChoiceQuestion; disabled: boolean; revealed: boolean; picked?: string; onAnswer: (answer: string) => void }) {
  return <div role="group" aria-label="Choose an answer" style={{ display: "grid", gridTemplateColumns: question.kind === "image-choice" ? "repeat(auto-fit, minmax(180px, 1fr))" : undefined, gap: 12 }}>
    {question.options.map(option => {
      const image = "image" in option ? option.image : null;
      return <div key={option.id} style={{ border: `2px solid ${picked === option.id || (revealed && option.id === question.correctId) ? "var(--mark-teal)" : "var(--line)"}`, borderRadius: "var(--radius)", background: "var(--white)", overflow: "hidden" }}>
        <button type="button" disabled={disabled} aria-pressed={picked === option.id} onClick={() => onAnswer(option.id)} style={{ textAlign: "left", padding: "1rem", border: 0, width: "100%", color: "var(--ink)", background: "transparent", fontSize: "1rem", cursor: disabled ? "default" : "pointer" }}>
          {image && <>
            {/* Editorial images may be same-site or rights-cleared remote sources with no known intrinsic dimensions. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image.src} alt={image.alt} style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", borderRadius: 8, marginBottom: 10 }} />
          </>}
          <span>{option.label}{revealed && option.id === question.correctId ? " — Correct answer" : ""}{revealed && option.id === picked ? " — Your answer" : ""}</span>
        </button>
        {image && <small style={{ display: "block", padding: "0 1rem 1rem" }}>Image: {image.creator}. <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer nofollow">Source</a> · <a href={image.licenseUrl} target="_blank" rel="noopener noreferrer nofollow">{image.license}</a></small>}
      </div>;
    })}
  </div>;
}
