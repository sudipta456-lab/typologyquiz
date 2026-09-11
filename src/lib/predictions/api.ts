import type { PredictionEvent, PredictionReceipt, PredictionSettlement } from "./types";

const API_PATHS = new Set(["/api/predictions/events", "/api/predictions/receipts", "/api/predictions/verify"]);

async function api<T>(path: string, init?: RequestInit): Promise<T> {
  if (!API_PATHS.has(path)) throw new Error("Prediction API path is not allowed.");
  const response = await fetch(path, init);
  const body = await response.json().catch(() => ({})) as { error?: string };
  if (!response.ok) throw new Error(body.error ?? "Prediction service unavailable.");
  return body as T;
}

export async function listPredictionEvents(): Promise<PredictionEvent[]> {
  const data = await api<{ events: PredictionEvent[] }>("/api/predictions/events");
  return Array.isArray(data.events) ? data.events : [];
}

export async function submitPicks(eventId: string, picks: Array<{ questionId: string; optionId: string }>) {
  return api<{ receipt: string; issuedAt: string; event: PredictionEvent }>("/api/predictions/receipts", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ eventId, picks }),
  });
}

export async function verifyPrediction(receipt: string, reveal = false) {
  return api<{ valid: true; receipt: object; settlement: PredictionSettlement }>("/api/predictions/verify", {
    method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ receipt, reveal }),
  });
}

const LEGACY_STORAGE_KEY = "typologyquiz:prediction-receipt:v1";
const STORAGE_KEY = "typologyquiz:prediction-receipts:v2";

export function receiptMatchesEvent(receipt: PredictionReceipt, event: Pick<PredictionEvent, "id" | "revision">): boolean {
  return receipt.eventId === event.id && receipt.eventRevision === event.revision;
}

function isReceipt(value: unknown): value is PredictionReceipt {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<PredictionReceipt>;
  return typeof item.receipt === "string" && item.receipt.length > 0 && item.receipt.length <= 12000 &&
    typeof item.eventId === "string" && /^[a-z0-9][a-z0-9-]{0,79}$/.test(item.eventId) &&
    Number.isInteger(item.eventRevision) && Number(item.eventRevision) > 0 &&
    typeof item.savedAt === "string" && Number.isFinite(Date.parse(item.savedAt));
}

export function loadReceipts(): PredictionReceipt[] {
  const receipts: PredictionReceipt[] = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && raw.length > 5_000_000) throw new Error("Receipt history is too large.");
    const values: unknown = JSON.parse(raw ?? "null");
    if (Array.isArray(values)) for (const value of values.slice(-1000)) {
      if (isReceipt(value) && !receipts.some((item) => receiptMatchesEvent(item, { id: value.eventId, revision: value.eventRevision }))) receipts.push(value);
    }
  } catch { /* Still recover a valid legacy receipt if newer storage is damaged. */ }
  try {
    const raw = localStorage.getItem(LEGACY_STORAGE_KEY);
    if (raw && raw.length > 16000) throw new Error("Legacy receipt is too large.");
    const legacy: unknown = JSON.parse(raw ?? "null");
    if (isReceipt(legacy) && !receipts.some((item) => receiptMatchesEvent(item, { id: legacy.eventId, revision: legacy.eventRevision }))) receipts.push(legacy);
  } catch { /* Storage can be unavailable. */ }
  return receipts;
}

export function saveReceipt(value: PredictionReceipt): boolean {
  if (!isReceipt(value)) return false;
  try {
    const receipts = loadReceipts().filter((item) => !receiptMatchesEvent(item, { id: value.eventId, revision: value.eventRevision }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...receipts, value]));
    return true;
  } catch { return false; }
}
