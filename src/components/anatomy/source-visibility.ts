export type SourceVisibilityPreset = "full" | "internal";
export type SourceMeshClass = "outer" | "internal";
export type SourceMeshAllowlistEntry = { meshName: string; meshClass: SourceMeshClass };

type AnatomySystemId = "heart" | "respiratory" | "urinary" | "brain";

const HEART_URL = "/anatomy/models/VH_M_Heart.glb";
const LUNG_URL = "/anatomy/models/VH_M_Lung.glb";
const KIDNEY_LEFT_URL = "/anatomy/models/VH_M_Kidney_L.glb";
const KIDNEY_RIGHT_URL = "/anatomy/models/VH_M_Kidney_R.glb";
const BRAIN_URL = "/anatomy/models/Allen_M_Brain.glb";

function names(...values: string[]): ReadonlySet<string> {
  return new Set(values);
}

function bilateral(roots: readonly string[]): ReadonlySet<string> {
  return names(...roots.flatMap((root) => [`Allen_${root}_L`, `Allen_${root}_R`]));
}

const HEART_OUTER = names(
  "VH_M_left_cardiac_atrium",
  "VH_M_right_cardiac_atrium",
  "VH_M_heart_right_ventricle",
  "VH_M_interventricular_septum",
  "VH_M_heart_left_ventricle",
);
const HEART_INTERNAL = names(
  "VH_M_mitral_valve",
  "VH_M_tricuspid_valve",
  "VH_M_aortic_valve",
  "VH_M_pulmonary_valve",
  "VH_M_papillary_muscle_of_heart_anterior",
  "VH_M_papillary_muscle_of_heart_anterolateral",
  "VH_M_papillary_muscle_of_heart_medial",
  "VH_M_papillary_muscle_of_heart_posterior",
  "VH_M_papillary_muscle_of_heart_posteromedial",
);

const LUNG_OUTER = names(
  "VH_M_left_lingula_superior_bronchopulmonary_segment",
  "VH_M_left_posterior_bronchopulmonary_segment",
  "VH_M_left_anterior_bronchopulmonary_segment",
  "VH_M_left_apical_bronchopulmonary_segment",
  "VH_M_left_lingula_inferior_bronchopulmonary_segment",
  "VH_M_left_anterior_basal_bronchopulmonary_segment",
  "VH_M_left_lateral_basal_bronchopulmonary_segment",
  "VH_M_left_medial_basal_bronchopulmonary_segment",
  "VH_M_left_posetrior_basal_bronchopulmonary_segment",
  "VH_M_left_superior_bronchopulmonary_segment",
  "VH_M_right_lateral_bronchopulmonary_segment",
  "VH_M_right_medial_bronchopulmonary_segment",
  "VH_M_right_anterior_basal_bronchopulmonary_segment",
  "VH_M_right_lateral_basal_bronchopulmonary_segment",
  "VH_M_right_medial_basal_bronchopulmonary_segment",
  "VH_M_right_posterior_basal_bronchopulmonary_segment",
  "VH_M_right_superior_bronchopulmonary_segment",
  "VH_M_right_apical_bronchopulmonary_segment",
  "VH_M_right_posterior_bronchopulmonary_segment",
  "VH_M_right_anterior_bronchopulmonary_segment",
);
const LUNG_INTERNAL = names(
  "VH_M_trachea",
  "VH_M_carina",
  "VH_M_left_main_bronchus",
  "VH_M_left_superior_lobar_bronchus",
  "VH_M_left_inferior_lobar_bronchus",
  "VH_M_left_superior_bronchus",
  "VH_M_left_posterior_basal_bronchus",
  "VH_M_left_medial_basal_bronchus",
  "VH_M_left_apical_bronchus",
  "VH_M_left_anterior_bronchus",
  "VH_M_left_lingular_bronchus",
  "VH_M_left_lingula_superior_bronchus",
  "VH_M_left_lingula_inferior_bronchus",
  "VH_M_left_lateral_basal_bronchus",
  "VH_M_left_anterior_basal_bronchus",
  "VH_M_right_main_bronchus",
  "VH_M_right_intermediate_bronchus",
  "VH_M_right_middle_lobar_bronchus",
  "VH_M_right_superior_lobar_bronchus",
  "VH_M_right_anterior_bronchus",
  "VH_M_right_lateral_basal_bronchus",
  "VH_M_right_lateral_bronchus",
  "VH_M_right_lower_lobar_bronchus",
  "VH_M_right_medial_basal_bronchus",
  "VH_M_right_medial_bronchus",
  "VH_M_right_posterior_basal",
  "VH_M_right_superior_bronchus",
  "VH_M_right_apical_bronchus",
  "VH_M_right_anterior_basal_bronchus",
  "VH_M_bronchus",
);

function lettered(prefix: string, suffix: string, letters: string): ReadonlySet<string> {
  return names(...[...letters].map((letter) => `${prefix}${letter}${suffix}`));
}

const KIDNEY_LEFT_INTERNAL = new Set([
  ...lettered("VH_M_renal_papilla_L_", "", "abcdefghi"),
  ...lettered("VH_M_renal_pyramid_L_", "", "abcdefghi"),
  "VH_M_renal_column_L",
]);
const KIDNEY_RIGHT_INTERNAL = new Set([
  ...lettered("VH_M_renal_papilla_R_", "", "abcdefghij"),
  ...lettered("VH_M_renal_pyramid_", "", "abcdefghij"),
  "VH_M_renal_column_R",
]);
const KIDNEY_LEFT_OUTER = names(
  "VH_M_kidney_capsule_L",
  "VH_M_outer_cortex_of_kidney_L",
);
const KIDNEY_RIGHT_OUTER = names(
  "VH_M_kidney_capsule_R",
  "VH_M_outer_cortex_of_kidney_R",
);

const BRAIN_OUTER = bilateral([
  "frontal_agranular_insular_cortex_area_Fl",
  "temporal_agranular_insular_cortex_area_Tl",
  "precentral_gyrus",
  "superior_frontal_gyrus",
  "middle_frontal_gyrus",
  "inferior_frontal_gyrus_triangular_part",
  "inferior_frontal_gyrus_opercular_part",
  "gyrus_rectus_straight_gyrus",
  "medial_orbital_gyrus",
  "anterior_intermediate_orbital_gyrus",
  "posterior_intermediate_orbital_gyrus",
  "lateral_orbital_gyrus",
  "frontal_operculum",
  "postcentral_gyrus",
  "supramarginal_gyrus",
  "angular_gyrus",
  "precuneus",
  "superior_temporal_gyrus",
  "middle_temporal_gyrus",
  "inferior_temporal_gyrus",
  "occipitotemporal_fusiform_gyrus_temporal_part",
  "transverse_temporal_gyrus_Heschls_gyrus",
  "temporal_pole",
  "occipital_pole",
  "cuneus",
  "lingual_gyrus_medial_occipitotemporal_gyrus",
  "lateral_occipitotemporal_fusiform_gyrus_occipital_part",
  "inferior_occipital_gyrus",
  "superior_occipital_gyrus",
  "cingulate_gyrus_rostral_anterior_part",
  "cingulate_gyrus_caudal_posterior_part",
  "subcallosal_gyrus_parolfactory_gyrus",
  "anterior_parahippocampal_gyrus",
  "posterior_parahippocampal_gyrus",
  "gyrus_ambiens",
  "long_insular_gyri",
  "short_insular_gyri",
  "limen_insula",
  "lateral_olfactory_gyrus",
  "parietal_operculum",
  "paracingulate_gyrus",
  "rostral_gyrus",
  "frontomarginal_gyrus",
  "frontal_pole",
  "perirhinal_gyrus_rostral_part_of_FuGt",
]);
const BRAIN_INTERNAL = bilateral([
  "head_of_caudate",
  "body_of_caudate",
  "tail_of_caudate",
  "putamen",
  "external_segment_of_globus_pallidus",
  "internal_segment_of_globus_pallidus",
  "amygdaloid_complex",
  "thalamus",
  "corpus_callosum",
  "fornix",
  "head_of_hippocampus",
  "body_of_hippocampus",
  "tail_of_hippocampus",
  "cerebellar_vermis",
  "lateral_hemisphere_of_cerebellum",
  "basilar_part_of_pons",
  "pyramidal_part_of_medulla_oblongata",
  "tegmentum_of_medulla_oblongata",
  "midbrain_tegmentum",
  "substantia_nigra",
  "cerebral_peduncle_crus_cerebri",
]);

function expectedSystem(assetId: string | undefined, modelUrl: string): AnatomySystemId | null {
  if (assetId === "heart" && modelUrl === HEART_URL) return "heart";
  if (assetId === "respiratory" && modelUrl === LUNG_URL) return "respiratory";
  if (assetId === "urinary" && (modelUrl === KIDNEY_LEFT_URL || modelUrl === KIDNEY_RIGHT_URL)) return "urinary";
  if (assetId === "brain" && modelUrl === BRAIN_URL) return "brain";
  return null;
}

function allowlistEntries(outer: ReadonlySet<string>, internal: ReadonlySet<string>): SourceMeshAllowlistEntry[] {
  return [
    ...[...outer].map((meshName) => ({ meshName, meshClass: "outer" as const })),
    ...[...internal].map((meshName) => ({ meshName, meshClass: "internal" as const })),
  ];
}

export function getSourceMeshAllowlist(assetId: string | undefined, modelUrl: string): readonly SourceMeshAllowlistEntry[] {
  switch (expectedSystem(assetId, modelUrl)) {
    case "heart":
      return allowlistEntries(HEART_OUTER, HEART_INTERNAL);
    case "respiratory":
      return allowlistEntries(LUNG_OUTER, LUNG_INTERNAL);
    case "urinary":
      return allowlistEntries(
        modelUrl === KIDNEY_LEFT_URL ? KIDNEY_LEFT_OUTER : KIDNEY_RIGHT_OUTER,
        modelUrl === KIDNEY_LEFT_URL ? KIDNEY_LEFT_INTERNAL : KIDNEY_RIGHT_INTERNAL,
      );
    case "brain":
      return allowlistEntries(BRAIN_OUTER, BRAIN_INTERNAL);
    default:
      return [];
  }
}

/** Exact source-label allowlists; unmatched names stay unclassified and visible. */
export function classifySourceMesh(
  assetId: string | undefined,
  modelUrl: string,
  meshName: string,
): SourceMeshClass | null {
  switch (expectedSystem(assetId, modelUrl)) {
    case "heart":
      return HEART_OUTER.has(meshName) ? "outer" : HEART_INTERNAL.has(meshName) ? "internal" : null;
    case "respiratory":
      return LUNG_OUTER.has(meshName) ? "outer" : LUNG_INTERNAL.has(meshName) ? "internal" : null;
    case "urinary":
      return (modelUrl === KIDNEY_LEFT_URL ? KIDNEY_LEFT_OUTER : KIDNEY_RIGHT_OUTER).has(meshName)
        ? "outer"
        : (modelUrl === KIDNEY_LEFT_URL ? KIDNEY_LEFT_INTERNAL : KIDNEY_RIGHT_INTERNAL).has(meshName) ? "internal" : null;
    case "brain":
      return BRAIN_OUTER.has(meshName) ? "outer" : BRAIN_INTERNAL.has(meshName) ? "internal" : null;
    default:
      return null;
  }
}

export function sourceMeshVisible(meshClass: SourceMeshClass | null, preset: SourceVisibilityPreset): boolean {
  return preset === "full" || meshClass !== "outer";
}

export type VisibilityNode = { visible: boolean; parent: VisibilityNode | null };

export function isObjectAndAncestorsVisible(object: VisibilityNode): boolean {
  let current: VisibilityNode | null = object;
  while (current) {
    if (!current.visible) return false;
    current = current.parent;
  }
  return true;
}
