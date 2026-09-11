export type PredictionOption = { id: string; label: string };
export type PredictionQuestion = { id: string; prompt: string; options: PredictionOption[] };

export type PredictionEvent = {
  id: string;
  revision: number;
  rulesVersion: string;
  title: string;
  description?: string;
  rating: string;
  opensAt: string;
  locksAt: string;
  expectedSettlementAt?: string;
  phase: "upcoming" | "open" | "locked";
  questions: PredictionQuestion[];
};

export type PredictionReceipt = {
  receipt: string;
  eventId: string;
  eventRevision: number;
  savedAt: string;
};

export type PredictionSettlement = {
  status: "pending" | "settled" | "void" | "cancelled" | "corrected";
  settlementVersion?: number;
  spoiler?: boolean;
  correct?: number;
  total?: number;
  results?: Array<{ questionId: string; optionId: string; outcomeId: string; correct: boolean; explanation: string }>;
  recapHref?: string;
};
