import { spawnSync } from "node:child_process";

const roles = [
  { id: "market-scout", name: "Market intelligence scout", cadence: "00:00 · 06:00 · 12:00 · 18:00", status: "Scheduled" },
  { id: "publisher-relations", name: "Publisher relations", cadence: "09:00 · 15:00", status: "Scheduled" },
  { id: "community-contributor", name: "Community contributor", cadence: "11:00 · 17:00 · 23:00", status: "Scheduled" },
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

function readCurrent() {
  try {
    const output = runWrangler(["kv", "key", "get", "current", "--binding", "OPS_DASHBOARD", "--remote", "--text"]);
    return output ? { ...defaultDashboard(), ...JSON.parse(output) } : defaultDashboard();
  } catch {
    return defaultDashboard();
  }
}

function writeCurrent(value) {
  const payload = JSON.stringify(value);
  runWrangler(["kv", "key", "put", "current", payload, "--binding", "OPS_DASHBOARD", "--remote"]);
}

const [command, roleId, status = "Active", ...summaryParts] = process.argv.slice(2);
if (command !== "init" && command !== "report") {
  throw new Error("Usage: node scripts/ops-dashboard.mjs init | report <role-id> <status> <summary>");
}

const dashboard = readCurrent();
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
