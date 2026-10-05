// Shapes sent by worker/live-core.js buildView(). The client never receives
// an answer key before the host reveals a question.

export type LivePhase = "lobby" | "preview" | "open" | "locked" | "reveal" | "standings" | "ended";
export type LiveMode = "individual" | "team";
export type LiveScoring = "accuracy" | "timed";
export type LiveRole = "host" | "player" | "screen";

export interface LiveCatalogSession {
  id: string;
  title: string;
  blurb: string;
  audience: string;
  format: string;
  rounds: string[];
  questionCount: number;
  durationMin: number;
  defaults: { scoring: LiveScoring; timeLimitSec: number; extendedTimeSec: number };
}

export interface LiveCatalog {
  sessions: LiveCatalogSession[];
  rules: { accuracy: string; timed: string; team: string };
  limits: { maxPlayers: number; maxTeams: number };
}

export interface LiveRoomInfo {
  code: string;
  phase: LivePhase;
  joinable: boolean;
  mode: LiveMode;
  scoring: LiveScoring;
  sessionTitle: string;
  playerCount: number;
  full: boolean;
  teamCount: number;
}

/** Ranked by `correct`, then `timing` (always 0 in untimed rooms). */
export interface LiveStanding { teamId: string; name: string; correct: number; timing: number; rank: number }

/** `options` is null while a timed question is in preview: choices appear only once answers open. */
export interface LiveQuestion { index: number; round: number; roundTitle: string; prompt: string; options: string[] | null }

export interface LiveReveal { answer: number; explanation: string; source: string; counts: number[]; void: boolean }

export interface LiveView {
  code: string;
  role: LiveRole;
  seq: number;
  serverNow: number;
  phase: LivePhase;
  session: { id: string; title: string; rounds: string[]; questionCount: number };
  mode: LiveMode;
  scoring: LiveScoring;
  extendedTime: boolean;
  timeLimitMs: number | null;
  rules: { scoring: string; team: string | null };
  q: number;
  question: LiveQuestion | null;
  closesAt: number | null;
  reveal: LiveReveal | null;
  voided: number[];
  responses: { answered: number; eligible: number } | null;
  teamCount: number;
  playerCount: number;
  expiresAt: number;
  recap: { index: number; prompt: string; answer: string; source: string; void: boolean }[] | null;
  standings: LiveStanding[];
  // host
  players?: { id: string; name: string; team: string; connected: boolean; answered: boolean }[];
  asked?: number[];
  // screen
  lobby?: string[] | null;
  // player
  me?: {
    playerId: string;
    name: string;
    teamId: string;
    teamName: string;
    answer: { q: number; choice: number } | null;
    eligible: boolean;
    standing: LiveStanding | null;
    result?: { correct: boolean; timing: number };
  } | null;
}

export type LiveHello =
  | { t: "hello"; role: "host"; secret: string }
  | { t: "hello"; role: "screen" }
  | { t: "hello"; role: "player"; token: string }
  | { t: "hello"; role: "player"; name: string }
  | { t: "hello"; role: "player"; teamName: string };

export type LiveCommand = "start" | "open" | "lock" | "reveal" | "standings" | "next" | "end" | "void" | "remove";

export type LiveServerEvent =
  | { t: "welcome"; role: LiveRole; playerId?: string; token?: string }
  | { t: "answer_saved"; q: number; choice: number }
  | { t: "error"; code: string; q?: number; retryMs?: number };
