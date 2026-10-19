import { spawnSync } from "node:child_process";

const roles = [
  { id: "market-scout", name: "Market intelligence scout", cadence: "00:00 · 06:00 · 12:00 · 18:00", status: "Scheduled" },
  { id: "publisher-relations", name: "Publisher relations", cadence: "09:00 · 15:00", status: "Scheduled" },
  { id: "community-contributor", name: "Community contributor", cadence: "11:00 · 17:00 · 23:00", status: "Scheduled" },
  { id: "tiktok-production", name: "TikTok research and production", cadence: "06:00 · 21:00", status: "Scheduled" },
  { id: "growth-operator", name: "Daily growth operator", cadence: "20:00", status: "Scheduled" },
];

function defaultDashboard() {
  return {
    generatedAt: null,
    target: "One qualified opportunity per 24 hours",
    totals: { qualifiedOpportunities: 0, referralVisits: 0, referralQuizStarts: 0, optInInquiries: 0 },
    roles: roles.map((role) => ({ ...role, updatedAt: null, nextRun: null, summary: "Waiting for its first report." })),
  };
}

function runWrangler(args) {
  const result = spawnSync("./scripts/mac-run.sh", ["npx", "wrangler", ...args], { encoding: "utf8" });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout || "Wrangler command failed");
  return result.stdout.trim();
}

const isPlainObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);

// Wrangler `get` exits non-zero for a missing key, so error text is never read as absence.
// Absence is established only by a successful, well-formed `list` with no exact `current` key.
function currentKeyExists() {
  const output = runWrangler(["kv", "key", "list", "--prefix", "current", "--binding", "OPS_DASHBOARD", "--remote"]);
  const keys = JSON.parse(output);
  if (!Array.isArray(keys)) throw new Error("KV key list is not an array.");
  for (const key of keys) {
    if (!isPlainObject(key) || typeof key.name !== "string" || !key.name) throw new Error("KV key list has an invalid record.");
  }
  return keys.some((key) => key.name === "current");
}

// Fails closed: any list/read error or invalid stored document throws. Only `init` may bootstrap,
// and only when a successful list proves `current` is absent. `report` is one strict get.
function readCurrent(command) {
  if (command === "init" && !currentKeyExists()) return defaultDashboard();
  const output = runWrangler(["kv", "key", "get", "current", "--binding", "OPS_DASHBOARD", "--remote", "--text"]);
  if (!output) throw new Error("Dashboard is empty; refusing to overwrite.");
  const stored = JSON.parse(output);
  if (!isPlainObject(stored)) throw new Error("Stored dashboard is not an object.");
  if (!Array.isArray(stored.roles)) throw new Error("Stored dashboard roles must be an array.");
  if (!isPlainObject(stored.totals)) throw new Error("Stored dashboard totals must be an object.");
  const storedRoles = new Map();
  for (const role of stored.roles) {
    if (!isPlainObject(role) || typeof role.id !== "string" || !role.id) throw new Error("Stored dashboard has an invalid role entry.");
    if (storedRoles.has(role.id)) throw new Error(`Stored dashboard has duplicate role id: ${role.id}`);
    storedRoles.set(role.id, role);
  }
  const defaults = defaultDashboard();
  const defaultIds = new Set(defaults.roles.map((role) => role.id));
  return {
    ...defaults,
    ...stored,
    roles: [
      ...defaults.roles.map((role) => ({ ...role, ...storedRoles.get(role.id) })),
      ...stored.roles.filter((role) => !defaultIds.has(role.id)),
    ],
  };
}

function writeCurrent(value) {
  const payload = JSON.stringify(value);
  runWrangler(["kv", "key", "put", "current", payload, "--binding", "OPS_DASHBOARD", "--remote"]);
}

const [command, roleId, status = "Active", ...summaryParts] = process.argv.slice(2);
if (command !== "init" && command !== "report") {
  throw new Error("Usage: node scripts/ops-dashboard.mjs init | report <role-id> <status> <summary>");
}

const dashboard = readCurrent(command);
if (command === "report") {
  const role = dashboard.roles.find((candidate) => candidate.id === roleId);
  if (!role) throw new Error(`Unknown role: ${roleId}`);
  role.status = status.slice(0, 32);
  role.summary = summaryParts.join(" ").replace(/\s+/g, " ").trim().slice(0, 500) || "No summary supplied.";
  role.updatedAt = new Date().toISOString();
}
dashboard.generatedAt = new Date().toISOString();
writeCurrent(dashboard);
process.stdout.write(`${command === "init" ? "Initialized" : "Updated"} operations dashboard.\n`);
