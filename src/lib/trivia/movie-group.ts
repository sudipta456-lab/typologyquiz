import { movieGroupSlug } from "./movies";

export type MovieGroupPayload = {
  token: string;
  attempt: string;
  slug: string;
  score: number;
  total: number;
  timeMs: number;
  outcome: "complete";
};

export function movieGroupPayload(input: { token: string; attempt: string; quizSlug: string; score: number; total: number; timeMs: number }): MovieGroupPayload {
  return { token: input.token, attempt: input.attempt, slug: movieGroupSlug(input.quizSlug), score: input.score, total: input.total, timeMs: input.timeMs, outcome: "complete" };
}

export type CompletionStatus = "idle" | "sending" | "retrying" | "sent" | "failed";

/** Server rejections that will not change on retry. Everything else may be transient. */
const PERMANENT = new Set(["room_not_found", "room_ended", "room_not_started", "unknown_player", "unknown_attempt", "already_completed", "invalid_result", "bad_payload", "bad_json", "too_large"]);
export function isTransientGroupError(error: unknown): boolean {
  const code = (error as { code?: unknown } | null)?.code;
  const status = (error as { status?: unknown } | null)?.status;
  if (typeof code === "string" && PERMANENT.has(code)) return false;
  if (typeof status === "number" && status >= 400 && status < 500 && status !== 408 && status !== 429) return false;
  return true;
}

export type CompletionFailure = { code: string; transient: boolean };
export function describeCompletionFailure(error: unknown): CompletionFailure {
  const code = (error as { code?: unknown } | null)?.code;
  return { code: typeof code === "string" && code ? code : "network", transient: isTransientGroupError(error) };
}

export type CompletionReporter = {
  /** Idempotent: the first payload wins; later calls return the same attempt. */
  report(payload: MovieGroupPayload): Promise<CompletionStatus>;
  /** Manual retry after a failure. Does nothing once sent or while sending. */
  retry(): Promise<CompletionStatus>;
  status(): CompletionStatus;
  /** Why the last attempt failed; null unless status is "failed". */
  failure(): CompletionFailure | null;
};

const DEFAULT_DELAYS = [1500, 4000, 10000];

export function createCompletionReporter(options: {
  submit: (payload: MovieGroupPayload) => Promise<unknown>;
  onChange?: (status: CompletionStatus) => void;
  delays?: readonly number[];
  wait?: (ms: number) => Promise<void>;
}): CompletionReporter {
  const delays = options.delays ?? DEFAULT_DELAYS;
  const wait = options.wait ?? ((ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms)));
  let status: CompletionStatus = "idle";
  let payload: MovieGroupPayload | null = null;
  let inFlight: Promise<CompletionStatus> | null = null;
  let failure: CompletionFailure | null = null;
  const set = (next: CompletionStatus) => { status = next; options.onChange?.(next); };

  async function run(): Promise<CompletionStatus> {
    const body = payload;
    if (!body) return status;
    failure = null;
    set("sending");
    for (let attempt = 0; ; attempt++) {
      try {
        await options.submit(body);
        set("sent");
        return status;
      } catch (error) {
        if (!isTransientGroupError(error) || attempt >= delays.length) { failure = describeCompletionFailure(error); set("failed"); return status; }
        set("retrying");
        await wait(delays[attempt]);
      }
    }
  }
  function start(): Promise<CompletionStatus> {
    if (status === "sent") return Promise.resolve(status);
    if (inFlight) return inFlight;
    inFlight = run().finally(() => { inFlight = null; });
    return inFlight;
  }
  return {
    report(next) { if (!payload) payload = next; return start(); },
    // Only transient failures can be retried; the original payload is re-sent.
    retry() { return payload && status === "failed" && failure?.transient ? start() : Promise.resolve(status); },
    failure: () => failure,
    status: () => status,
  };
}
