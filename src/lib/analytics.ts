import { analyticsAliases, analyticsEditions, analyticsPaths, analyticsSeries } from "./analytics-manifest.generated.ts";

// Google tag installation ID and Analytics destination are distinct after tag merging.
export const GA_TAG_ID = "G-TZ9B8MB7SP";
export const GA_MEASUREMENT_ID = "G-RVHFFPF0W1";
const SITE_ORIGIN = "https://typologyquiz.com";
const knownPaths = new Set(analyticsPaths);
export type AnalyticsCommand = (...args: unknown[]) => void;
export type EditorialAnalyticsEvent = "quiz_start" | "quiz_complete" | "quiz_share" | "quiz_challenge_open";
export type AnalyticsEvent = EditorialAnalyticsEvent | "quiz_series_follow";
const editionEvents = new Set<string>(["quiz_start", "quiz_complete", "quiz_share", "quiz_challenge_open"]);

export function analyticsEnabled(flag: string | undefined, id: string | undefined, hostname: string, tagId: string | undefined): boolean {
  return flag === "true" && id === GA_MEASUREMENT_ID && tagId === GA_TAG_ID && ["typologyquiz.com", "www.typologyquiz.com"].includes(hostname);
}

/** No decoding/URL normalization: unrecognized text can never become report data. */
export function analyticsPath(pathname: unknown): string {
  if (typeof pathname !== "string") return "/404/";
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return knownPaths.has(path) ? analyticsAliases[path] ?? path : "/404/";
}

// Only constants from this table leave the browser. Referrer paths, query strings,
// ports, credentials and arbitrary hostnames are never emitted.
const referralSources: Readonly<Record<string, { source: string; medium: string; origin: string }>> = {
  "becomingsigma.com": { source: "becomingsigma.com", medium: "referral", origin: "https://becomingsigma.com/" },
  "www.becomingsigma.com": { source: "becomingsigma.com", medium: "referral", origin: "https://becomingsigma.com/" },
  "socialpsychology.org": { source: "socialpsychology.org", medium: "referral", origin: "https://socialpsychology.org/" },
  "www.socialpsychology.org": { source: "socialpsychology.org", medium: "referral", origin: "https://socialpsychology.org/" },
  "personalitypedagogy.net": { source: "personalitypedagogy.net", medium: "referral", origin: "https://personalitypedagogy.net/" },
  "www.personalitypedagogy.net": { source: "personalitypedagogy.net", medium: "referral", origin: "https://personalitypedagogy.net/" },
  "reflectinginward.org": { source: "reflectinginward.org", medium: "referral", origin: "https://reflectinginward.org/" },
  "www.reflectinginward.org": { source: "reflectinginward.org", medium: "referral", origin: "https://reflectinginward.org/" },
  "simplythebestresults.com": { source: "simplythebestresults.com", medium: "referral", origin: "https://simplythebestresults.com/" },
  "www.simplythebestresults.com": { source: "simplythebestresults.com", medium: "referral", origin: "https://simplythebestresults.com/" },
  "chatgpt.com": { source: "chatgpt.com", medium: "ai-assistant", origin: "https://chatgpt.com/" },
  "chat.openai.com": { source: "chatgpt.com", medium: "ai-assistant", origin: "https://chatgpt.com/" },
  "perplexity.ai": { source: "perplexity.ai", medium: "ai-assistant", origin: "https://www.perplexity.ai/" },
  "www.perplexity.ai": { source: "perplexity.ai", medium: "ai-assistant", origin: "https://www.perplexity.ai/" },
  "claude.ai": { source: "claude.ai", medium: "ai-assistant", origin: "https://claude.ai/" },
  "gemini.google.com": { source: "gemini.google.com", medium: "ai-assistant", origin: "https://gemini.google.com/" },
  "copilot.microsoft.com": { source: "copilot.microsoft.com", medium: "ai-assistant", origin: "https://copilot.microsoft.com/" },
  "www.google.com": { source: "google", medium: "organic", origin: "https://www.google.com/" },
  "www.google.ca": { source: "google", medium: "organic", origin: "https://www.google.ca/" },
  "www.bing.com": { source: "bing", medium: "organic", origin: "https://www.bing.com/" },
  "duckduckgo.com": { source: "duckduckgo", medium: "organic", origin: "https://duckduckgo.com/" },
};
export function safeAcquisition(referrer: unknown) {
  let referral: typeof referralSources[string] | undefined;
  try {
    if (typeof referrer === "string" && referrer.length <= 8192) {
      const url = new URL(referrer);
      if (url.protocol === "https:" && !url.username && !url.password && !url.port)
        referral = Object.hasOwn(referralSources, url.hostname) ? referralSources[url.hostname] : undefined;
    }
  } catch { /* Missing or malformed referrer has no attribution. */ }
  return {
    page_referrer: referral?.origin ?? "",
    // Nonempty explicit overrides prevent arbitrary UTM values being used as a
    // fallback. Detailed campaigns are intentionally not collected.
    campaign_source: referral?.source ?? "unattributed",
    campaign_medium: referral?.medium ?? "unattributed",
    campaign_id: "not-collected",
    campaign_name: "not-collected",
    campaign_term: "not-collected",
    campaign_content: "not-collected",
    campaign_source_platform: "not-collected",
    campaign_creative_format: "not-collected",
    campaign_marketing_tactic: "not-collected",
  };
}

export const ANALYTICS_REFERRAL_KEY = "tq-analytics-referral-v1";
export const ANALYTICS_REFERRAL_TTL_MS = 30 * 60 * 1000;
type ReferralStorage = Pick<Storage, "getItem" | "setItem" | "removeItem">;

/** Only this dedicated key is accessed. Rehydration selects constants again,
 * never trusting stored URLs or fields. The TTL is fixed, not extended by visits. */
export function resolveReferral(referrer: unknown, storage?: ReferralStorage, now = Date.now()): string {
  const incoming = safeAcquisition(referrer);
  const forget = () => { try { storage?.removeItem(ANALYTICS_REFERRAL_KEY); } catch { /* Storage may be blocked. */ } };
  if (!Number.isSafeInteger(now) || now < 0) { forget(); return incoming.page_referrer; }
  if (incoming.page_referrer) {
    try { storage?.setItem(ANALYTICS_REFERRAL_KEY, JSON.stringify({ schema: 1, source: incoming.campaign_source, acquiredAt: now })); }
    catch { /* A recognized new referral still works without storage. */ }
    return incoming.page_referrer;
  }
  let sameSite = false;
  try {
    if (typeof referrer === "string" && referrer.length <= 8192) {
      const url = new URL(referrer);
      sameSite = !url.username && !url.password && [SITE_ORIGIN, "https://www.typologyquiz.com"].includes(url.origin);
    }
  } catch { /* Unknown, missing, or malformed referrers cannot revive attribution. */ }
  if (!sameSite) { forget(); return ""; }
  try {
    const raw = storage?.getItem(ANALYTICS_REFERRAL_KEY);
    if (!raw || raw.length > 256) { forget(); return ""; }
    const saved: unknown = JSON.parse(raw);
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) { forget(); return ""; }
    const value = saved as Record<string, unknown>;
    const source = Object.values(referralSources).find(item => item.source === value.source);
    if (Object.keys(value).length !== 3 || value.schema !== 1 || !source || typeof value.acquiredAt !== "number" || !Number.isSafeInteger(value.acquiredAt) || value.acquiredAt < 0 || value.acquiredAt > now || now - value.acquiredAt >= ANALYTICS_REFERRAL_TTL_MS) {
      forget(); return "";
    }
    return source.origin;
  } catch { forget(); return ""; }
}

export function safeEventParameters(event: unknown, parameters: unknown): Record<string, string | number | boolean> | null {
  if (typeof event !== "string" || !parameters || typeof parameters !== "object" || Array.isArray(parameters)) return null;
  const input = parameters as Record<string, unknown>;
  if (event === "quiz_series_follow") {
    if (typeof input.series_id !== "string" || !analyticsSeries.includes(input.series_id) || typeof input.followed !== "boolean") return null;
    return { series_id: input.series_id, followed: input.followed };
  }
  if (!editionEvents.has(event)) return null;
  const edition = analyticsEditions.find(e => e.id === input.edition_id && e.seriesId === input.series_id && e.version === input.edition_version);
  return edition ? { edition_id: edition.id, series_id: edition.seriesId, edition_version: edition.version } : null;
}

/** A single controller owns config and views; tests inject a non-network sink. */
export function createAnalyticsController(command: AnalyticsCommand, referrer: unknown = "") {
  const acquisition = safeAcquisition(referrer);
  let currentPath: string | undefined;
  let initialized = false;
  function context(path: string) {
    return { ...acquisition, page_location: `${SITE_ORIGIN}${path}`, page_title: `TypologyQuiz · ${path}` };
  }
  return {
    page(pathname: unknown) {
      const path = analyticsPath(pathname);
      if (path === currentPath) return;
      const fields = context(path);
      const update = initialized;
      // Configure before the library is inserted, including context for automatic
      // session/engagement events. Enhanced Measurement must be disabled in GA.
      if (!initialized) {
        command("consent", "default", { ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
        command("set", { ...fields, send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
        command("js", new Date());
        initialized = true;
      } else command("set", fields);
      // Config-scoped fields outrank global set fields: refresh both scopes so
      // automatic engagement events use the current safe page context.
      // Configure the shared installation tag; only explicit events below target
      // the selected destination. Automatic shared-tag fanout requires HAR QA.
      command("config", GA_TAG_ID, { ...fields, ...(update ? { update: true } : {}), send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      command("event", "page_view", { ...fields, send_to: GA_MEASUREMENT_ID });
      currentPath = path;
    },
    event(event: AnalyticsEvent, parameters: unknown) {
      const safe = safeEventParameters(event, parameters);
      if (!safe || !currentPath || !initialized) return;
      command("event", event, { ...context(currentPath), ...safe, send_to: GA_MEASUREMENT_ID });
    },
  };
}

type Controller = ReturnType<typeof createAnalyticsController>;
let browserController: Controller | undefined;

/** Only called after hydration; no global gtag API is offered to feature code. */
export function visitAnalyticsPage(pathname: string): void {
  if (typeof window === "undefined" || !analyticsEnabled(process.env.NEXT_PUBLIC_GA_ENABLED, process.env.NEXT_PUBLIC_GA_ID, window.location.hostname, process.env.NEXT_PUBLIC_GA_TAG_ID)) return;
  try {
    if (!browserController) {
      const target = window as Window & { dataLayer?: unknown[] };
      // The Google tag expects an Arguments object, not an ordinary array.
      target.dataLayer = target.dataLayer ?? [];
      // eslint-disable-next-line prefer-rest-params -- gtag uses Arguments queue entries.
      const queue: AnalyticsCommand = function () { target.dataLayer!.push(arguments); };
      let referralStorage: ReferralStorage | undefined;
      try { referralStorage = window.sessionStorage; } catch { /* Storage getter can throw. */ }
      browserController = createAnalyticsController(queue, resolveReferral(document.referrer, referralStorage));
      browserController.page(pathname);
      const script = document.createElement("script");
      script.id = "typologyquiz-analytics";
      script.async = true;
      script.referrerPolicy = "no-referrer";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TAG_ID}`;
      document.head.appendChild(script);
    } else browserController.page(pathname);
  } catch { /* Analytics is optional, including blocked scripts and browser APIs. */ }
}

export function trackAnalyticsEvent(event: AnalyticsEvent, parameters: unknown): void {
  if (typeof window === "undefined" || !analyticsEnabled(process.env.NEXT_PUBLIC_GA_ENABLED, process.env.NEXT_PUBLIC_GA_ID, window.location.hostname, process.env.NEXT_PUBLIC_GA_TAG_ID)) return;
  try {
    // Refresh the context synchronously: a child effect may precede the root
    // pathname effect on navigation. Features never supply their own URLs.
    browserController?.page(window.location.pathname);
    browserController?.event(event, parameters);
  } catch { /* Analytics must never interrupt the user's action. */ }
}
