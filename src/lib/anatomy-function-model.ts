import type { AnatomyFunctionId } from "./anatomy-functions";

export const FUNCTION_STAGE_IDS: Readonly<Record<AnatomyFunctionId, readonly string[]>> = {
  heart: ["filling", "pressure-rise", "ejection", "relaxation"],
  respiratory: ["inhale", "pause-in", "exhale", "pause-out"],
  urinary: ["filter", "recover", "secrete", "collect"],
  brain: ["receive", "propagate", "release", "respond"],
};

export type HeartFlowDirection = "into-ventricles" | "none" | "out-of-ventricles";
export type AirflowDirection = "in" | "none" | "out";
export type NephronRouteDirection = "blood-to-capsule" | "tubule-to-blood" | "blood-to-tubule" | "tubule-to-collecting-duct";
export type ModelPoint = readonly [number, number, number];

export const NEPHRON_MODEL_PATHS = {
  bloodIn: [[-2.05, 0.72, 0], [-1.62, 0.78, 0.02], [-1.22, 0.7, 0.03], [-0.92, 0.52, 0.03]],
  bloodReturn: [[-0.95, 0.34, -0.02], [-1.28, 0.08, -0.02], [-1.45, -0.54, -0.02], [-0.76, -0.94, -0.02], [0.05, -0.82, -0.02], [0.45, -0.4, -0.02]],
  tubule: [
    [-0.37, 0.53, 0.2], [-0.05, 0.62, 0.2], [0.24, 0.42, 0.2], [0.36, 0.12, 0.2],
    [0.22, -0.12, 0.2], [-0.08, -0.3, 0.2], [-0.3, -0.66, 0.2], [-0.04, -0.91, 0.2],
    [0.36, -0.82, 0.2], [0.54, -0.46, 0.2], [0.64, -0.14, 0.2], [0.82, 0.06, 0.2],
  ],
  collectingDuct: [[0.82, 0.06, 0.2], [1.03, -0.25, 0.2], [1.03, -0.68, 0.2], [1.03, -1.35, 0.2]],
} as const satisfies Record<string, readonly ModelPoint[]>;

export const NEPHRON_CAPSULE_FLUID_POINT: ModelPoint = [-0.3, 0.53, 0.17];
export const NEPHRON_GLOMERULAR_BLOOD_POINT: ModelPoint = [-0.79, 0.57, 0.34];

export const NEPHRON_TRANSPORT_ROUTES = {
  filtration: [NEPHRON_MODEL_PATHS.bloodIn[2], NEPHRON_GLOMERULAR_BLOOD_POINT, NEPHRON_CAPSULE_FLUID_POINT],
  filtrate: [NEPHRON_CAPSULE_FLUID_POINT, NEPHRON_MODEL_PATHS.tubule[0]],
  reabsorption: [NEPHRON_MODEL_PATHS.tubule[4], [-0.2, -0.04, 0.13], NEPHRON_MODEL_PATHS.bloodReturn[0]],
  secretion: [NEPHRON_MODEL_PATHS.bloodIn[2], [-0.55, 0.35, 0.11], NEPHRON_MODEL_PATHS.tubule[4]],
  collection: NEPHRON_MODEL_PATHS.collectingDuct,
} as const satisfies Record<string, readonly ModelPoint[]>;

export const NEURON_AXON_PATH: readonly ModelPoint[] = [
  [-0.48, -0.02, 0.02], [-0.1, -0.02, 0.02], [0.45, 0.02, 0.02], [1.05, 0.05, 0.02], [1.55, 0.05, 0.02], [1.95, 0.08, 0.02],
];
export const NEURON_RECEIVING_MEMBRANE: readonly ModelPoint[] = [
  [2.8, -0.6, 0], [2.72, -0.24, 0], [2.72, 0.12, 0], [2.82, 0.5, 0],
];
export const NEURON_RECEPTOR_POSITIONS: readonly ModelPoint[] = [
  [2.58, -0.42, 0.16], [2.58, -0.18, 0.16], [2.58, 0.06, 0.16], [2.58, 0.3, 0.16],
];
export const NEURON_TRANSMITTER_PATH: readonly ModelPoint[] = [
  [2.18, 0.04, 0.34], [2.32, 0.02, 0.34], [2.48, 0.04, 0.25], NEURON_RECEPTOR_POSITIONS[2],
];

export type HeartFunctionFrame = {
  systemId: "heart";
  stageIndex: number;
  stageId: string;
  progress: number;
  avGate: "open" | "closed";
  outflowGate: "open" | "closed";
  flowDirection: HeartFlowDirection;
  flowProgress: number;
  ventricularVolume: number;
  ventricularPressure: "lower" | "rising" | "higher" | "falling";
  coordinatedPumping: true;
};

export type RespiratoryFunctionFrame = {
  systemId: "respiratory";
  stageIndex: number;
  stageId: string;
  progress: number;
  airflow: AirflowDirection;
  lungExpansion: number;
  diaphragmDownwardOffset: number;
  diaphragmDomeFactor: number;
  airflowPathProgress: number | null;
  oxygenMovesIntoBlood: true;
  carbonDioxideMovesIntoAlveolus: true;
  gasExchangeContinues: true;
};

export type UrinaryFunctionFrame = {
  systemId: "urinary";
  stageIndex: number;
  stageId: string;
  progress: number;
  activeProcess: "filtration" | "reabsorption" | "secretion" | "collection";
  route: NephronRouteDirection;
  cellsRetainedInBlood: true;
  largeProteinsRetainedInBlood: true;
  allFiltrateBecomesUrine: false;
};

export type BrainFunctionFrame = {
  systemId: "brain";
  stageIndex: number;
  stageId: string;
  progress: number;
  focus: "input" | "local-axon-propagation" | "chemical-release" | "receptor-response";
  axonSignalPosition: number;
  transmitterCrossingProgress: number;
  postsynapticReceptorsRespond: boolean;
  postsynapticActionPotentialGuaranteed: false;
};

export type AnatomyFunctionFrame =
  | HeartFunctionFrame
  | RespiratoryFunctionFrame
  | UrinaryFunctionFrame
  | BrainFunctionFrame;

function normalizedIndex(value: number, length: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(length - 1, Math.trunc(value)));
}

function normalizedProgress(value: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.max(0, Math.min(1, value));
}

export function getHeartVentricularVolume(stageIndex: number, progress: number): number {
  const stage = normalizedIndex(stageIndex, 4);
  const step = normalizedProgress(progress);
  if (stage === 0) return 0.35 + step * 0.65;
  if (stage === 2) return 1 - step * 0.65;
  return stage === 1 ? 1 : 0.35;
}

export function getDiaphragmDomeFactor(downwardOffset: number): number {
  const contraction = Math.max(0, Math.min(1, -downwardOffset / 0.4));
  return 1 - contraction * 0.92;
}

export function getAirflowPathProgress(progress: number, direction: AirflowDirection): number | null {
  if (direction === "none") return null;
  const step = normalizedProgress(progress);
  return direction === "in" ? step : 1 - step;
}

export function getAnatomyFunctionStepIndex(systemId: AnatomyFunctionId, stepId?: string): number {
  const index = FUNCTION_STAGE_IDS[systemId].indexOf(stepId ?? "");
  return index >= 0 ? index : 0;
}

/**
 * Produces an illustrative, non-clinical state for one lesson stage. Inputs are
 * bounded so UI timers, deep links, and tests cannot create invalid model poses.
 */
export function getAnatomyFunctionFrame(
  systemId: AnatomyFunctionId,
  requestedStageIndex: number,
  requestedProgress: number,
): AnatomyFunctionFrame {
  const stageIds = FUNCTION_STAGE_IDS[systemId];
  const stageIndex = normalizedIndex(requestedStageIndex, stageIds.length);
  const stageId = stageIds[stageIndex];
  const progress = normalizedProgress(requestedProgress);

  switch (systemId) {
    case "heart": {
      const heartStages: readonly Pick<HeartFunctionFrame, "avGate" | "outflowGate" | "flowDirection" | "ventricularPressure">[] = [
        { avGate: "open", outflowGate: "closed", flowDirection: "into-ventricles", ventricularPressure: "lower" },
        { avGate: "closed", outflowGate: "closed", flowDirection: "none", ventricularPressure: "rising" },
        { avGate: "closed", outflowGate: "open", flowDirection: "out-of-ventricles", ventricularPressure: "higher" },
        { avGate: "closed", outflowGate: "closed", flowDirection: "none", ventricularPressure: "falling" },
      ];
      return {
        systemId,
        stageIndex,
        stageId,
        progress,
        ...heartStages[stageIndex],
        flowProgress: heartStages[stageIndex].flowDirection === "none" ? 0 : progress,
        ventricularVolume: getHeartVentricularVolume(stageIndex, progress),
        coordinatedPumping: true,
      };
    }
    case "respiratory": {
      const lungExpansion = stageIndex === 0
        ? 0.35 + progress * 0.65
        : stageIndex === 1
          ? 1
          : stageIndex === 2
            ? 1 - progress * 0.65
            : 0.35;
      const diaphragmDownwardOffset = stageIndex === 0
        ? -0.4 * progress
        : stageIndex === 1
          ? -0.4
          : stageIndex === 2
            ? -0.4 * (1 - progress)
            : 0;
      const airflow = stageIndex === 0 ? "in" : stageIndex === 2 ? "out" : "none";
      return {
        systemId,
        stageIndex,
        stageId,
        progress,
        airflow,
        lungExpansion,
        diaphragmDownwardOffset,
        diaphragmDomeFactor: getDiaphragmDomeFactor(diaphragmDownwardOffset),
        airflowPathProgress: getAirflowPathProgress(progress, airflow),
        oxygenMovesIntoBlood: true,
        carbonDioxideMovesIntoAlveolus: true,
        gasExchangeContinues: true,
      };
    }
    case "urinary": {
      const urinaryStages: readonly Pick<UrinaryFunctionFrame, "activeProcess" | "route">[] = [
        { activeProcess: "filtration", route: "blood-to-capsule" },
        { activeProcess: "reabsorption", route: "tubule-to-blood" },
        { activeProcess: "secretion", route: "blood-to-tubule" },
        { activeProcess: "collection", route: "tubule-to-collecting-duct" },
      ];
      return {
        systemId,
        stageIndex,
        stageId,
        progress,
        ...urinaryStages[stageIndex],
        cellsRetainedInBlood: true,
        largeProteinsRetainedInBlood: true,
        allFiltrateBecomesUrine: false,
      };
    }
    case "brain":
      return {
        systemId,
        stageIndex,
        stageId,
        progress,
        focus: ["input", "local-axon-propagation", "chemical-release", "receptor-response"][stageIndex] as BrainFunctionFrame["focus"],
        axonSignalPosition: stageIndex === 0 ? 0 : stageIndex === 1 ? progress : 1,
        transmitterCrossingProgress: stageIndex === 2 ? progress : stageIndex === 3 ? 1 : 0,
        postsynapticReceptorsRespond: stageIndex === 3,
        postsynapticActionPotentialGuaranteed: false,
      };
  }
}
