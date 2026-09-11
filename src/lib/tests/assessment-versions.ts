import type { AssessmentVersion, TestDefinition, TestResult } from "../types";
import archive from "./assessment-releases.json";

type Versions = Omit<AssessmentVersion, "variant">;
export interface ReleaseReport {
  version: Versions;
  definitionHash: string;
  scoringHash: string;
  definition: TestDefinition;
}
const releases = archive as unknown as {
  current: Record<string, Versions>;
  reports: Record<string, ReleaseReport>;
};

export function currentVersion(slug: string, variant: AssessmentVersion["variant"] = "standard"): AssessmentVersion {
  const version = releases.current[slug];
  if (!version) throw new Error(`No released assessment: ${slug}`);
  return { ...version, variant };
}

export function knownVersion(slug: string, version: AssessmentVersion): boolean {
  const report = releases.reports[`${slug}@${version.report}`];
  return !!report && (version.variant === "standard" || version.variant === "school") &&
    report.version.instrument === version.instrument && report.version.scoring === version.scoring;
}

export function reportDefinition(result: TestResult): TestDefinition | undefined {
  const v = result.assessment;
  // Legacy data keep their scores, using corrected, explicitly labelled current descriptions.
  if (!v) return releases.reports[`${result.testSlug}@${releases.current[result.testSlug]?.report}`]?.definition;
  if (!knownVersion(result.testSlug, v)) return undefined;
  return releases.reports[`${result.testSlug}@${v.report}`].definition;
}

export function sameAssessmentVersion(a: AssessmentVersion | undefined, b: AssessmentVersion | undefined): boolean {
  return !!a && !!b && a.instrument === b.instrument && a.scoring === b.scoring &&
    a.report === b.report && a.variant === b.variant;
}

export function comparableResults(a: TestResult, b: TestResult): boolean {
  return a.testSlug === b.testSlug && !!a.assessment && !!b.assessment &&
    knownVersion(a.testSlug, a.assessment) && knownVersion(b.testSlug, b.assessment) &&
    sameAssessmentVersion(a.assessment, b.assessment);
}
