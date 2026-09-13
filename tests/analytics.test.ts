import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { test } from "node:test";
import { analyticsPaths, analyticsEditions } from "../src/lib/analytics-manifest.generated.ts";
import { ANALYTICS_REFERRAL_KEY, ANALYTICS_REFERRAL_TTL_MS, resolveReferral, GA_TAG_ID, GA_MEASUREMENT_ID, analyticsEnabled, analyticsPath, safeAcquisition, safeEventParameters, createAnalyticsController, visitAnalyticsPage, trackAnalyticsEvent } from "../src/lib/analytics.ts";

test("activation requires explicit true, both verified IDs, and a production host", () => {
  for (const flag of [undefined, "", "false", "TRUE", "1"]) assert.equal(analyticsEnabled(flag, GA_MEASUREMENT_ID, "typologyquiz.com", GA_TAG_ID), false);
  for (const host of ["localhost", "typologyquiz.com.evil.test", "preview.workers.dev"]) assert.equal(analyticsEnabled("true", GA_MEASUREMENT_ID, host, GA_TAG_ID), false);
  assert.equal(analyticsEnabled("true", "G-TZ9B8MB7SP", "typologyquiz.com", GA_TAG_ID), false);
  for (const tagId of [undefined, "", GA_MEASUREMENT_ID, "GT-UNKNOWN"]) assert.equal(analyticsEnabled("true", GA_MEASUREMENT_ID, "typologyquiz.com", tagId), false);
  for (const host of ["typologyquiz.com", "www.typologyquiz.com"]) assert.equal(analyticsEnabled("true", GA_MEASUREMENT_ID, host, GA_TAG_ID), true);
});

test("every manifest path has bounded context, sensitive/malformed unknown paths fail closed", () => {
  assert.ok(analyticsPaths.length > 1200);
  for (const path of analyticsPaths) {
    assert.ok(analyticsPaths.includes(analyticsPath(path)), path);
    assert.equal(analyticsPath(path.slice(0, -1)), analyticsPath(path), path);
  }
  for (const path of ["/test/mini-ipip/results/?r=SECRET", "/reflections/#SECRET", "/test/SECRET/results/", "/test/%6dini-ipip/", "https://evil.test/", "//evil.test/", "/tests/../SECRET/", undefined, {}, "constructor", "/SECRET/"]) assert.equal(analyticsPath(path), "/404/");
  for (const path of ["/reflections/", "/compare/", "/room/session/", "/test/mini-ipip/results/", "/account/"]) assert.equal(analyticsPath(path), path);
});

test("referral attribution emits fixed origins and bounded campaign overrides only", () => {
  const sentinel = "PRIVATE_REFERRER_TEXT";
  const safe = safeAcquisition(`https://chatgpt.com/c/${sentinel}?q=${sentinel}#${sentinel}`);
  assert.equal(safe.page_referrer, "https://chatgpt.com/");
  assert.equal(safe.campaign_source, "chatgpt.com");
  assert.equal(safe.campaign_medium, "ai-assistant");
  for (const raw of [`https://evil.test/${sentinel}`, `https://chatgpt.com.evil.test/${sentinel}`, `https://user:pass@chatgpt.com/${sentinel}`, `http://chatgpt.com/${sentinel}`, "https://chatgpt.com:444/", "https://constructor/", "not a URL", undefined]) {
    const value = safeAcquisition(raw);
    assert.equal(value.page_referrer, "");
    assert.equal(value.campaign_source, "unattributed");
    assert.ok(!JSON.stringify(value).includes(sentinel));
  }
  assert.ok(Object.values(safe).every(value => !value.includes(sentinel)));
  for (const field of ["campaign_name", "campaign_id", "campaign_term", "campaign_content", "campaign_source_platform", "campaign_creative_format", "campaign_marketing_tactic"]) assert.equal(safe[field as keyof typeof safe], "not-collected");
});

test("event parameters select only registered edition identity and supported fields", () => {
  const e = analyticsEditions[0];
  const input = { edition_id: e.id, edition_version: e.version, series_id: e.seriesId, page_location: "SECRET", answer: "SECRET", note: "SECRET" };
  assert.deepEqual(safeEventParameters("quiz_complete", input), { edition_id: e.id, series_id: e.seriesId, edition_version: e.version });
  assert.equal(safeEventParameters("form_submit", input), null);
  assert.equal(safeEventParameters("quiz_complete", { ...input, edition_version: e.version + 100 }), null);
  assert.equal(safeEventParameters("quiz_complete", null), null);
  assert.deepEqual(safeEventParameters("quiz_series_follow", { series_id: e.seriesId, followed: false, note: "SECRET" }), { series_id: e.seriesId, followed: false });
  assert.equal(safeEventParameters("quiz_series_follow", { series_id: "SECRET", followed: true }), null);
});

test("one pageview per canonical transition, config before events, and safe lifecycle context", () => {
  const calls: unknown[][] = [];
  const controller = createAnalyticsController((...args) => { calls.push(args); }, "https://chatgpt.com/c/SECRET");
  controller.event("quiz_series_follow", { series_id: "news-world", followed: true });
  assert.equal(calls.length, 0);
  for (const path of ["/tests/", "/tests/", "/tests", "/reflections/", "/reflections/", "/tests/"]) controller.page(path);
  const views = calls.filter(c => c[0] === "event" && c[1] === "page_view");
  assert.equal(views.length, 3, "repeated renders deduplicate; A → B → A counts");
  assert.equal(calls.filter(c => c[0] === "config").length, 3);
  assert.equal(calls.filter(c => c[0] === "js").length, 1);
  assert.ok(calls.findIndex(c => c[0] === "config") < calls.findIndex(c => c[0] === "event"));
  const config = calls.find(c => c[0] === "config")![2] as Record<string, unknown>;
  assert.equal(config.update, undefined, "first config initializes normally");
  for (const call of calls.filter(c => c[0] === "config")) assert.equal(call[1], GA_TAG_ID, "configure the installed shared tag, not the destination-only ID");
  const configs = calls.filter(c => c[0] === "config").map(c => c[2] as Record<string, unknown>);
  for (const [i, path] of ["/tests/", "/reflections/", "/tests/"].entries()) {
    assert.equal(configs[i].update, i === 0 ? undefined : true);
    assert.equal(configs[i].page_location, `https://typologyquiz.com${path}`);
    assert.equal(configs[i].page_title, `TypologyQuiz · ${path}`);
    assert.equal(configs[i].send_page_view, false);
  }
  assert.equal(config.send_page_view, false);
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.allow_ad_personalization_signals, false);
  for (const call of views) {
    const params = call[2] as Record<string, unknown>;
    assert.equal(params.send_to, GA_MEASUREMENT_ID);
    assert.equal(params.page_referrer, "https://chatgpt.com/");
  }
  assert.ok(!JSON.stringify(calls).includes("SECRET"));
  controller.event("quiz_series_follow", { series_id: "news-world", followed: true, page_location: "SECRET" });
  assert.equal((calls.at(-1)![2] as Record<string, unknown>).page_location, "https://typologyquiz.com/tests/");
});

test("disabled browser integration loads no script, reads no private state, and creates no queue", () => {
  const prior = Object.getOwnPropertyDescriptor(globalThis, "window");
  const flag = process.env.NEXT_PUBLIC_GA_ENABLED;
  process.env.NEXT_PUBLIC_GA_ENABLED = "false";
  const fake = { location: { hostname: "typologyquiz.com" } };
  Object.defineProperty(globalThis, "window", { configurable: true, value: fake });
  try {
    visitAnalyticsPage("/reflections/");
    trackAnalyticsEvent("quiz_series_follow", { series_id: "news-world", followed: true });
    assert.deepEqual(Object.keys(fake), ["location"]);
  } finally {
    if (prior) Object.defineProperty(globalThis, "window", prior); else Reflect.deleteProperty(globalThis, "window");
    if (flag === undefined) delete process.env.NEXT_PUBLIC_GA_ENABLED; else process.env.NEXT_PUBLIC_GA_ENABLED = flag;
  }
});

test("component does not observe query/hash or mutable page text", () => {
  const component = readFileSync("src/components/Analytics.tsx", "utf8");
  assert.ok(!/useSearchParams|document\.title|location\.(href|search|hash)|onReady/.test(component));
});

test("manifest covers all existing export HTML routes when an export is present", () => {
  // Read-only coverage of an available export; the source manifest freshness
  // check is the build-independent gate. Ignore the generated Next fallback.
  function walk(path: string): void {
    for (const item of readdirSync(path, { withFileTypes: true })) {
      const file = join(path, item.name);
      if (item.isDirectory()) walk(file);
      else if (item.name === "index.html") {
        const route = `/${path.slice(4)}${path === "out" ? "" : "/"}`;
        if (route === "/_not-found/") continue;
        assert.ok(analyticsPaths.includes(route), `Unmeasured exported route: ${route}`);
      }
    }
  }
  try { readdirSync("out"); } catch { return; }
  walk("out");
});


test("enabled loader queues sanitized context before insertion and tolerates delayed loading", () => {
  const priorWindow = Object.getOwnPropertyDescriptor(globalThis, "window");
  const priorDocument = Object.getOwnPropertyDescriptor(globalThis, "document");
  const priorFlag = process.env.NEXT_PUBLIC_GA_ENABLED;
  const priorId = process.env.NEXT_PUBLIC_GA_ID;
  const priorTagId = process.env.NEXT_PUBLIC_GA_TAG_ID;
  process.env.NEXT_PUBLIC_GA_ENABLED = "true";
  process.env.NEXT_PUBLIC_GA_ID = GA_MEASUREMENT_ID;
  process.env.NEXT_PUBLIC_GA_TAG_ID = GA_TAG_ID;
  const sentinel = "PRIVATE_SENTINEL_DO_NOT_SEND";
  const scripts: Record<string, unknown>[] = [];
  const fake: { location: { hostname: string; pathname: string }; dataLayer?: IArguments[] } = {
    location: { hostname: "typologyquiz.com", pathname: "/test/mini-ipip/results/" },
  };
  Object.defineProperty(fake.location, "href", { get() { throw new Error("Raw URL read"); } });
  Object.defineProperty(fake, "localStorage", { get() { throw new Error("Private storage read"); } });
  Object.defineProperty(globalThis, "window", { configurable: true, value: fake });
  Object.defineProperty(globalThis, "document", { configurable: true, value: {
    referrer: `https://chatgpt.com/c/${sentinel}?q=${sentinel}`,
    get title() { throw new Error("Mutable title read"); },
    createElement: () => ({}),
    head: { appendChild(script: Record<string, unknown>) {
      assert.ok(fake.dataLayer?.some(args => args[0] === "config"), "safe config must precede insertion");
      scripts.push(script);
    } },
  } });
  try {
    visitAnalyticsPage(fake.location.pathname);
    visitAnalyticsPage(fake.location.pathname);
    assert.equal(scripts.length, 1);
    assert.equal(scripts[0].referrerPolicy, "no-referrer");
    assert.ok(String(scripts[0].src).endsWith(`id=${GA_TAG_ID}`));
    fake.location.pathname = "/reflections/";
    trackAnalyticsEvent("quiz_series_follow", { series_id: "news-world", followed: true, note: sentinel });
    visitAnalyticsPage(fake.location.pathname);
    fake.location.pathname = "/test/mini-ipip/results/";
    visitAnalyticsPage(fake.location.pathname);
    const calls = fake.dataLayer!.map(args => Array.from(args));
    assert.equal(calls.filter(args => args[0] === "event" && args[1] === "page_view").length, 3);
    assert.ok(!JSON.stringify(calls).includes(sentinel));
    for (const call of calls.filter(args => args[0] === "event")) {
      assert.equal((call[2] as Record<string, unknown>).send_to, GA_MEASUREMENT_ID, "every explicit event targets only the selected destination");
      assert.notEqual((call[2] as Record<string, unknown>).send_to, GA_TAG_ID);
    }
    assert.equal((calls.find(args => args[0] === "event" && args[1] === "quiz_series_follow")![2] as Record<string, string>).page_location, "https://typologyquiz.com/reflections/");
  } finally {
    if (priorWindow) Object.defineProperty(globalThis, "window", priorWindow); else Reflect.deleteProperty(globalThis, "window");
    if (priorDocument) Object.defineProperty(globalThis, "document", priorDocument); else Reflect.deleteProperty(globalThis, "document");
    if (priorFlag === undefined) delete process.env.NEXT_PUBLIC_GA_ENABLED; else process.env.NEXT_PUBLIC_GA_ENABLED = priorFlag;
    if (priorId === undefined) delete process.env.NEXT_PUBLIC_GA_ID; else process.env.NEXT_PUBLIC_GA_ID = priorId;
    if (priorTagId === undefined) delete process.env.NEXT_PUBLIC_GA_TAG_ID; else process.env.NEXT_PUBLIC_GA_TAG_ID = priorTagId;
  }
});


test("outreach referral attribution accepts only the five known publisher apex/www hosts", () => {
  for (const host of ["becomingsigma.com", "socialpsychology.org", "personalitypedagogy.net", "reflectinginward.org", "simplythebestresults.com"]) {
    for (const prefix of ["", "www."]) {
      const fields = safeAcquisition(`https://${prefix}${host}/private-path?note=SECRET#SECRET`);
      assert.equal(fields.campaign_source, host);
      assert.equal(fields.campaign_medium, "referral");
      assert.equal(fields.page_referrer, `https://${host}/`);
      assert.ok(!JSON.stringify(fields).includes("SECRET"));
    }
    for (const untrusted of [`https://${host}.evil.test/`, `https://evil-${host}/`, `https://subdomain.${host}/`]) {
      assert.equal(safeAcquisition(untrusted).page_referrer, "");
      assert.equal(safeAcquisition(untrusted).campaign_source, "unattributed");
    }
  }
});


function referralStore(initial?: string) {
  let raw = initial ?? null;
  return {
    getItem(key: string) { assert.equal(key, ANALYTICS_REFERRAL_KEY); return raw; },
    setItem(key: string, value: string) { assert.equal(key, ANALYTICS_REFERRAL_KEY); raw = value; },
    removeItem(key: string) { assert.equal(key, ANALYTICS_REFERRAL_KEY); raw = null; },
    value: () => raw,
  };
}

test("same-site document navigation retains only a known source for a fixed 30 minutes", () => {
  const storage = referralStore();
  const now = 100000;
  assert.equal(resolveReferral("https://chatgpt.com/c/SECRET?q=SECRET", storage, now), "https://chatgpt.com/");
  assert.deepEqual(JSON.parse(storage.value()!), { schema: 1, source: "chatgpt.com", acquiredAt: now });
  for (const origin of ["https://typologyquiz.com", "https://www.typologyquiz.com"]) {
    assert.equal(resolveReferral(`${origin}/test/mini-ipip/results/?r=SECRET`, storage, now + 1), "https://chatgpt.com/");
    assert.equal(JSON.parse(storage.value()!).acquiredAt, now, "TTL must not slide on navigation");
  }
  assert.equal(resolveReferral("https://typologyquiz.com/tests/", storage, now + ANALYTICS_REFERRAL_TTL_MS - 1), "https://chatgpt.com/");
  assert.equal(resolveReferral("https://typologyquiz.com/tests/", storage, now + ANALYTICS_REFERRAL_TTL_MS), "");
  assert.equal(storage.value(), null);
});

test("new external source replaces cache; unknown or absent source clears old attribution", () => {
  const storage = referralStore();
  resolveReferral("https://chatgpt.com/", storage, 100);
  assert.equal(resolveReferral("https://www.socialpsychology.org/private?x=SECRET", storage, 200), "https://socialpsychology.org/");
  assert.deepEqual(JSON.parse(storage.value()!), { schema: 1, source: "socialpsychology.org", acquiredAt: 200 });
  for (const raw of ["https://unknown.test/", "https://typologyquiz.com.evil.test/", "http://typologyquiz.com/", "https://user@typologyquiz.com/", "https://typologyquiz.com:444/", "", undefined]) {
    resolveReferral("https://chatgpt.com/", storage, 300);
    assert.equal(resolveReferral(raw, storage, 301), "");
    assert.equal(storage.value(), null);
  }
});

test("corrupt, injected, future-dated, or expired storage cannot become analytics fields", () => {
  for (const raw of ["{", "null", "[]", "true", "x".repeat(257),
    JSON.stringify({ schema: 1, source: "https://evil.test/SECRET", acquiredAt: 100 }),
    JSON.stringify({ schema: 1, source: "chatgpt.com", acquiredAt: 100, note: "SECRET" }),
    JSON.stringify({ schema: 2, source: "chatgpt.com", acquiredAt: 100 }),
    JSON.stringify({ schema: 1, source: "chatgpt.com", acquiredAt: "100" }),
    JSON.stringify({ schema: 1, source: "chatgpt.com", acquiredAt: -1 }),
    JSON.stringify({ schema: 1, source: "chatgpt.com", acquiredAt: 201 }),
    JSON.stringify({ schema: 1, source: "constructor", acquiredAt: 100 })]) {
    const storage = referralStore(raw);
    assert.equal(resolveReferral("https://typologyquiz.com/tests/", storage, 200), "");
    assert.equal(storage.value(), null);
  }
});

test("blocked or unavailable referral storage never blocks current known attribution", () => {
  const fail = () => { throw new Error("blocked"); };
  const blocked = { getItem: fail, setItem: fail, removeItem: fail };
  for (const storage of [blocked, undefined]) {
    assert.equal(resolveReferral("https://chatgpt.com/c/SECRET", storage, 100), "https://chatgpt.com/");
    assert.equal(resolveReferral("https://typologyquiz.com/tests/", storage, 101), "");
    assert.equal(resolveReferral("https://unknown.test/", storage, 102), "");
  }
});
