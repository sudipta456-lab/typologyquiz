/** Shared, browser-independent message rules. Callers own the URL and its privacy contract. */
export const MAX_QUIZ_SHARE_MESSAGE = 500;

/** Keep spaces and newlines while typing; normalize only when composing a share. */
export function editShareMessage(message: string): string {
  return message.slice(0, MAX_QUIZ_SHARE_MESSAGE);
}

export function previewMessage(message: string, url: string): string {
  const limited = message.replaceAll(url, "").replace(/\s+/g, " ").trim().slice(0, MAX_QUIZ_SHARE_MESSAGE);
  return /[\uD800-\uDBFF]$/.test(limited) ? limited.slice(0, -1) : limited;
}

export function messageWithUrl(message: string, url: string): string {
  const preview = previewMessage(message, url);
  return preview ? `${preview}\n${url}` : url;
}

export function addOptionalShareText(message: string, addition: string, url: string): string {
  const draft = editShareMessage(message);
  const extra = previewMessage(addition, url);
  if (!extra || draft.includes(extra)) return draft;
  const separator = draft && !/\s$/.test(draft) ? " " : "";
  const next = `${draft}${separator}${extra}`;
  return next.length <= MAX_QUIZ_SHARE_MESSAGE ? next : draft;
}

export type ShareClipboard = {
  writeText?: (text: string) => Promise<void>;
  fallbackCopy: (text: string) => boolean;
};

export async function copyShareText(text: string, clipboard: ShareClipboard): Promise<boolean> {
  try {
    if (clipboard.writeText) {
      await clipboard.writeText(text);
      return true;
    }
  } catch {
    // A denied Clipboard API request can still succeed through selection copy.
  }
  try {
    return clipboard.fallbackCopy(text);
  } catch {
    return false;
  }
}

export async function tryNativeShare(
  share: ((data: { title: string; text: string; url: string }) => Promise<void>) | undefined,
  data: { title: string; text: string; url: string }
): Promise<"shared" | "cancelled" | "unavailable" | "failed"> {
  if (!share) return "unavailable";
  try {
    await share(data);
    return "shared";
  } catch (error) {
    return error instanceof Error && error.name === "AbortError" ? "cancelled" : "failed";
  }
}
