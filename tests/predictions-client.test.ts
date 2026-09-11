import assert from "node:assert/strict";
import test from "node:test";
import { loadReceipts, receiptMatchesEvent, saveReceipt } from "../src/lib/predictions/api.ts";

const oldReceipt = { receipt: "old.signed", eventId: "round-one", eventRevision: 1, savedAt: "2030-01-01T00:00:00Z" };

test("legacy receipt survives new rounds and revisions without locking them", () => {
  const data = new Map([["typologyquiz:prediction-receipt:v1", JSON.stringify(oldReceipt)]]);
  const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "localStorage", { configurable: true, value: { getItem: (key: string) => data.get(key) ?? null, setItem: (key: string, value: string) => data.set(key, value) } });
  try {
    assert.deepEqual(loadReceipts(), [oldReceipt]);
    assert.equal(receiptMatchesEvent(oldReceipt, { id: "round-two", revision: 1 }), false);
    assert.equal(receiptMatchesEvent(oldReceipt, { id: "round-one", revision: 2 }), false);
    assert.equal(receiptMatchesEvent(oldReceipt, { id: "round-one", revision: 1 }), true);
    const next = { ...oldReceipt, receipt: "next.signed", eventId: "round-two" };
    const revised = { ...oldReceipt, receipt: "revised.signed", eventRevision: 2 };
    assert.equal(saveReceipt(next), true);
    assert.equal(saveReceipt(revised), true);
    assert.deepEqual(loadReceipts(), [oldReceipt, next, revised]);
    assert.equal(saveReceipt(revised), true);
    assert.equal(loadReceipts().length, 3);
    data.set("typologyquiz:prediction-receipts:v2", "x".repeat(5_000_001));
    assert.deepEqual(loadReceipts(), [oldReceipt]);
    data.set("typologyquiz:prediction-receipts:v2", "broken");
    assert.deepEqual(loadReceipts(), [oldReceipt]);
    data.set("typologyquiz:prediction-receipts:v2", JSON.stringify([null, {}, { ...oldReceipt, eventRevision: -1 }, next]));
    assert.deepEqual(loadReceipts(), [next, oldReceipt]);
  } finally {
    if (original) Object.defineProperty(globalThis, "localStorage", original);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});

test("unavailable storage does not crash receipt loading or claim a successful save", () => {
  const original = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
  Object.defineProperty(globalThis, "localStorage", { configurable: true, get() { throw new Error("blocked"); } });
  try {
    assert.deepEqual(loadReceipts(), []);
    assert.equal(saveReceipt(oldReceipt), false);
  } finally {
    if (original) Object.defineProperty(globalThis, "localStorage", original);
    else Reflect.deleteProperty(globalThis, "localStorage");
  }
});
