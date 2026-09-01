"use client";

import { useState } from "react";

/** Copies a share line to the clipboard with a small "Copied" confirmation. */
export default function ShareLineButton({ text, label = "Copy share text" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(text);
      ok = true;
    } catch {
      try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        ok = document.execCommand("copy");
        document.body.removeChild(ta);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "0.5rem 0.9rem",
        borderRadius: "var(--radius)",
        border: "1px solid var(--line-strong)",
        background: copied ? "var(--mark-teal)" : "transparent",
        color: copied ? "#fff" : "var(--ink)",
        fontWeight: 600,
        fontSize: "0.85rem",
        cursor: "pointer",
      }}
    >
      {copied ? "Copied" : label}
    </button>
  );
}
