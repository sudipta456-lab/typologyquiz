"use client";

import { useId, useState, useSyncExternalStore } from "react";
import { downloadQuizShareCard } from "@/lib/quiz-share-card";
import { addOptionalShareText, copyShareText, editShareMessage, MAX_QUIZ_SHARE_MESSAGE, messageWithUrl, previewMessage, tryNativeShare } from "@/lib/quiz-sharing";
import { shareNetworks } from "@/lib/share";
import styles from "./QuizSharePanel.module.css";

const noSubscribe = () => () => {};

async function copyInBrowser(value: string): Promise<boolean> {
  return copyShareText(value, {
    writeText: typeof navigator !== "undefined" ? navigator.clipboard?.writeText.bind(navigator.clipboard) : undefined,
    fallbackCopy: (text) => {
      const field = document.createElement("textarea");
      field.value = text;
      field.readOnly = true;
      field.style.position = "fixed";
      field.style.opacity = "0";
      document.body.appendChild(field);
      try {
        field.select();
        return document.execCommand("copy");
      } finally {
        field.remove();
      }
    },
  });
}

/** Network links and clearly identified copy-only destinations for existing result UIs. */
export function ShareNetworkActions({ url, message }: { url: string; message: string }) {
  const [status, setStatus] = useState("");
  const uid = useId();
  const full = messageWithUrl(message, url);
  return (
    <section className={styles.networks} aria-labelledby={`${uid}-networks`}>
      <h3 id={`${uid}-networks`}>Share on a network</h3>
      <p>Opening a network link sends your message and link to that service, even if you cancel before posting. Encoded answers or challenge details in a link go with it. Copy-only actions copy text for you to paste; nothing posts automatically.</p>
      <div className={styles.actions}>
        {shareNetworks(url, message).map((network) =>
          network.href ? (
            <a key={network.name} className={styles.action} href={network.href} target={network.href.startsWith("https:") ? "_blank" : undefined} rel={network.href.startsWith("https:") ? "noopener noreferrer" : undefined}>
              {network.name}
            </a>
          ) : (
            <button key={network.name} type="button" className={styles.action} onClick={async () => setStatus((await copyInBrowser(network.copyText ?? full)) ? network.hint ?? "Message copied." : "Copy failed. Select the message below to copy it yourself.")}>
              {network.name} · Copy only
            </button>
          )
        )}
      </div>
      <p role="status" aria-live="polite" className={styles.status}>{status}</p>
      <details>
        <summary>Message and link for manual sharing</summary>
        <textarea readOnly aria-label="Message and link for manual sharing" value={full} rows={4} onFocus={(event) => event.currentTarget.select()} />
      </details>
    </section>
  );
}

type QuizSharePanelProps = {
  title: string;
  url: string;
  defaultMessage: string;
  heading?: string;
  subheading?: string;
  privacyNote?: string;
  optionalText?: string;
  optionalTextLabel?: string;
  cards?: boolean;
};

export function QuizSharePanel({ title, url, defaultMessage, heading = "Share the quiz", subheading, privacyNote = "The quiz link contains no answers or results. Your edited message or card may reveal anything you choose to add.", optionalText, optionalTextLabel = "Add my score", cards = true }: QuizSharePanelProps) {
  const uid = useId();
  const [message, setMessage] = useState(() => previewMessage(defaultMessage, url));
  const [status, setStatus] = useState("");
  const canNativeShare = useSyncExternalStore(noSubscribe, () => typeof navigator !== "undefined" && typeof navigator.share === "function", () => false);
  const full = messageWithUrl(message, url);

  async function copy(value: string, label: string) {
    setStatus((await copyInBrowser(value)) ? `${label} copied.` : "Copy failed. Select the message or link below to copy it yourself.");
  }

  async function nativeShare() {
    const outcome = await tryNativeShare(navigator.share?.bind(navigator), { title, text: previewMessage(message, url), url });
    setStatus(outcome === "shared" ? "Share sheet completed." : outcome === "cancelled" ? "Share cancelled." : "Share sheet unavailable. Use a network or copy the message below.");
  }

  function download(portrait: boolean) {
    try {
      const shortened = downloadQuizShareCard(title, previewMessage(message, url), url, portrait);
      setStatus(shortened ? "Card download requested with some text shortened to fit. Check it before sharing." : "Card download requested on this device. Check your downloads before sharing.");
    } catch {
      setStatus("Card download failed in this browser. Use the message and link below.");
    }
  }

  return (
    <section className={styles.panel} aria-labelledby={`${uid}-title`}>
      <h3 id={`${uid}-title`}>{heading}</h3>
      {subheading && <p>{subheading}</p>}
      <p className={styles.note}>{privacyNote}</p>
      <label htmlFor={`${uid}-message`}>Your share message</label>
      <textarea id={`${uid}-message`} rows={3} maxLength={MAX_QUIZ_SHARE_MESSAGE} value={message} onChange={(event) => setMessage(editShareMessage(event.target.value))} />
      <p className={styles.count}>{message.length}/{MAX_QUIZ_SHARE_MESSAGE} characters</p>
      <div className={styles.actions}>
        {optionalText && <button type="button" className={styles.action} onClick={() => {
          const next = addOptionalShareText(message, optionalText, url);
          setMessage(next);
          setStatus(next !== message ? "Optional detail added to your preview." : message.includes(optionalText) ? "That detail is already in your preview." : "There is no room for that detail. Shorten your message first.");
        }}>{optionalTextLabel}</button>}
        <button type="button" className={styles.action} onClick={() => void copy(url, "Link")}>Copy link</button>
        <button type="button" className={styles.action} onClick={() => void copy(full, "Message and link")}>Copy message</button>
        {canNativeShare && <button type="button" className={styles.action} onClick={() => void nativeShare()}>Share…</button>}
      </div>
      <ShareNetworkActions url={url} message={message} />
      {cards && <div className={styles.cards}>
        <h4>Download a share card</h4>
        <p>Made on this device from the title, your preview message, and the quiz link. Nothing is uploaded. Review the image before posting it.</p>
        <div className={styles.actions}>
          <button type="button" className={styles.action} onClick={() => download(true)}>Download story · 1080 × 1920</button>
          <button type="button" className={styles.action} onClick={() => download(false)}>Download post · 1080 × 1080</button>
        </div>
        <p className={styles.note}>Image description: TypologyQuiz invitation with the quiz title, your message, and the link on a cream background.</p>
      </div>}
      <p role="status" aria-live="polite" className={styles.status}>{status}</p>
    </section>
  );
}
