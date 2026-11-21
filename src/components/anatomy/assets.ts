export type AnatomyAsset = {
  id: string;
  title: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  view: string;
  credit: string;
  sourceUrl: string;
  license: string;
  modelUrls: readonly string[];
  parts: readonly {
    id: string;
    label: string;
    description: string;
    /** Center position and target dimensions as percentages of the 1200 × 900 image. */
    x: number;
    y: number;
    width: number;
    height: number;
  }[];
  notes: string;
};

const HRA_CREDIT =
  "HuBMAP Consortium, HRA CCF 3D Reference Object Library, selected v1.2 models; CC BY 4.0. Render materials and camera adaptation by TypologyQuiz; no endorsement implied.";
const HRA_LICENSE = "https://creativecommons.org/licenses/by/4.0/";

export const ANATOMY_ASSETS = [
  {
    id: "body",
    title: "Body regions",
    image: "/anatomy/body.webp",
    alt: "Oblique studio render of a neutral, low-detail whole-body outline mesh with four lettered location callouts on the head and neck, chest, abdomen, and pelvis.",
    width: 1200,
    height: 900,
    view: "Oblique body-outline surface view. The source mesh has no verified anatomical camera-axis metadata; no anterior/posterior or left/right key is shown.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://raw.githubusercontent.com/hubmapconsortium/ccf-3d-reference-object-library/f1a3a63f110e27ff0736047d52d04dba5d3087f9/Assets/body4Mesh_1338.glb",
    license: HRA_LICENSE,
    modelUrls: ["/anatomy/models/body4Mesh_1338.glb"],
    parts: [
      { id: "a", label: "A", description: "Head and neck region at the upper outline; the head is above the chest.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "b", label: "B", description: "Chest region just below the neck; the thoracic cavity contains the heart and lungs.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Abdominal region below the chest; it contains most digestive organs and kidneys.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "d", label: "D", description: "Pelvic region at the lower torso; it contains many urogenital organs.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "Start with the body’s outer regions, then choose an organ topic to look closer. Internal organs and anatomical side markers are not shown in this outline.",
  },
  {
    id: "heart",
    title: "Heart structures",
    image: "/anatomy/heart.webp",
    alt: "Oblique studio render of the segmented HRA heart surface model with four lettered callouts on the two atrial and two ventricular chamber surfaces.",
    width: 1200,
    height: 900,
    view: "Oblique segmented surface view of the original HRA model. No section plane or laterality key is shown.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://raw.githubusercontent.com/hubmapconsortium/ccf-3d-reference-object-library/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Male/v1.2/VH_M_Heart.glb",
    license: HRA_LICENSE,
    modelUrls: ["/anatomy/models/VH_M_Heart.glb"],
    parts: [
      { id: "a", label: "A", description: "Left atrium at an upper chamber surface; atria receive blood returning to the heart.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "b", label: "B", description: "Right atrium at the other upper chamber surface; it receives blood from the body.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Left ventricle on a broad lower wall; ventricles pump blood out of the heart.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "d", label: "D", description: "Right ventricle on the second lower wall; it pumps blood toward the lungs.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "This view shows chamber surfaces. Open the optional heart section below to study the chambers, valves and dividing walls from the inside.",
  },
  {
    id: "brain",
    title: "Brain surface landmarks",
    image: "/anatomy/brain.webp",
    alt: "Oblique exterior studio render of the segmented HRA brain model with four lettered surface callouts across folded cerebral and cerebellar regions.",
    width: 1200,
    height: 900,
    view: "Oblique exterior surface view of the segmented HRA model. No internal section or anatomical left/right key is shown.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://raw.githubusercontent.com/hubmapconsortium/ccf-3d-reference-object-library/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Male/v1.2/Allen_M_Brain.glb",
    license: HRA_LICENSE,
    modelUrls: ["/anatomy/models/Allen_M_Brain.glb"],
    parts: [
      { id: "a", label: "A", description: "Superior frontal gyrus on the upper folded cerebrum; brain regions work together.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "b", label: "B", description: "Superior temporal gyrus along the lower cerebral side; brain regions work together.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Occipital pole at the rounded cerebral end; brain regions work together.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "d", label: "D", description: "Lateral cerebellar hemisphere at the compact lower fold; the cerebellum helps coordinate movement.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "Explore the outer landmarks here, then open the optional brain reference for a view of deeper structures. Brain regions contribute together rather than doing isolated jobs.",
  },
  {
    id: "respiratory",
    title: "Airways and lungs",
    image: "/anatomy/respiratory.webp",
    alt: "Oblique studio render of the HRA respiratory model showing the laryngeal region, trachea, branching airways, and segmented lung surfaces with four lettered callouts.",
    width: 1200,
    height: 900,
    view: "Oblique segmented surface view. The source does not establish a camera-side key; no anatomical left/right labels are shown.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://raw.githubusercontent.com/hubmapconsortium/ccf-3d-reference-object-library/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Male/v1.2/VH_M_Lung.glb",
    license: HRA_LICENSE,
    modelUrls: ["/anatomy/models/VH_M_Lung.glb"],
    parts: [
      { id: "a", label: "A", description: "Trachea on the visible ringed airway; air passes through it toward the bronchi.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "b", label: "B", description: "Carina at the airway fork; the trachea divides toward the paired lungs here.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Apical lung segment beside the central airway; air continues into smaller bronchioles.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "d", label: "D", description: "Lateral basal lung segment on the lower outer surface; gas exchange occurs in alveoli beyond the airways.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "The lungs and main airways are visible here. Microscopic air sacs are not shown; the optional reference below traces the airway route and shows the diaphragm.",
  },
  {
    id: "digestive",
    title: "Digestive structures",
    image: "/anatomy/digestive.webp",
    alt: "Oblique studio render combining the HRA liver, small-intestine, and large-intestine meshes in their shared source coordinates, with four lettered callouts.",
    width: 1200,
    height: 900,
    view: "Oblique surface view of selected meshes sharing the HRA male-organ coordinate frame; no laterality key is shown.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Male/v1.2",
    license: HRA_LICENSE,
    modelUrls: [
      "/anatomy/models/VH_M_Liver.glb",
      "/anatomy/models/VH_M_Small_Intestine.glb",
      "/anatomy/models/SBU_M_Intestine_Large.glb",
    ],
    parts: [
      { id: "a", label: "A", description: "Liver capsule on the broad smooth upper organ; the liver makes bile for digestion.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "b", label: "B", description: "Jejunum in the coiled small intestine; the small intestine absorbs most nutrients.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Transverse colon on the broad outer intestinal frame; the colon is part of the large intestine.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "d", label: "D", description: "Rectum at the lower continuation of the intestinal frame; it is the terminal part of the large intestine.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "This selected view shows the liver and intestines. It omits other digestive structures, including the mouth, esophagus and stomach, so it is not the complete route food travels.",
  },
  {
    id: "urinary",
    title: "Kidney landmarks",
    image: "/anatomy/urinary.webp",
    alt: "Oblique studio render of two HRA kidney surface models in their shared source coordinates, with callouts to the outer contours and hilar indentations.",
    width: 1200,
    height: 900,
    view: "Oblique paired-kidney surface view. Anatomical side labels are omitted because source camera orientation is not established.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Male/v1.2",
    license: HRA_LICENSE,
    modelUrls: ["/anatomy/models/VH_M_Kidney_L.glb", "/anatomy/models/VH_M_Kidney_R.glb"],
    parts: [
      { id: "a", label: "A", description: "Kidney capsule on one outer contour; the kidney filters blood to make urine.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "b", label: "B", description: "Kidney capsule on the other outer contour; kidneys remove extra water and wastes.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Kidney hilum at the inward notch; renal vessels carry blood into and out of the kidney.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "d", label: "D", description: "Kidney hilum at the second inward notch; urine leaves each kidney through a ureter.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "Explore the paired kidney surfaces and inward notches (hila). Internal filtering structures and the bladder are not shown. Open the optional kidney section below to see inside.",
  },
  {
    id: "reproductive-female",
    title: "Female reproductive structures",
    image: "/anatomy/reproductive-female.webp",
    alt: "Oblique studio render of the HRA uterus, uterine-tube, ovary, and vagina meshes positioned in their shared female-organ coordinate frame, with four lettered callouts.",
    width: 1200,
    height: 900,
    view: "Oblique surface view of selected meshes in the HRA female-organ coordinate frame; no anatomical side key is shown.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Female/v1.2",
    license: HRA_LICENSE,
    modelUrls: [
      "/anatomy/models/VH_F_Uterus.glb",
      "/anatomy/models/VH_F_Ovary_L.glb",
      "/anatomy/models/VH_F_Ovary_R.glb",
      "/anatomy/models/VH_F_Fallopian_Tube_L.glb",
      "/anatomy/models/VH_F_Fallopian_Tube_R.glb",
      "/anatomy/models/VH_F_Vagina.glb",
    ],
    parts: [
      { id: "a", label: "A", description: "Uterine fundus at the rounded upper uterus; the uterus has an endometrial lining.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "b", label: "B", description: "Uterine cervix at the narrow lower uterus; the vagina extends from here toward the exterior.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Uterine tube ampulla on the upper curved tube; the tube lies near, but is not attached to, the ovary.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "d", label: "D", description: "Vagina below the cervix; it extends from the cervix toward the exterior.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "A representative exterior view of selected uterine, tube, ovarian and vaginal structures. It is not a full pelvic section, and body structures vary between people.",
  },
  {
    id: "reproductive-male",
    title: "Male reproductive structures",
    image: "/anatomy/reproductive-male.webp",
    alt: "Oblique studio render of HRA male deferent duct, prostate-base and peripheral-zone, and urethra surfaces, with four lettered callouts and a note that testes and penis are absent from this selection.",
    width: 1200,
    height: 900,
    view: "Oblique view of the selected HRA male-organ surfaces; partial model coverage is identified on the image.",
    credit: HRA_CREDIT,
    sourceUrl:
      "https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/f1a3a63f110e27ff0736047d52d04dba5d3087f9/VH_Male/v1.2",
    license: HRA_LICENSE,
    modelUrls: ["/anatomy/models/VH_M_Prostate.glb", "/anatomy/models/VH_M_Urethra.glb"],
    parts: [
      { id: "a", label: "A", description: "Deferent duct on the long arcing tube; it carries sperm toward the ejaculatory duct.", x: 12, y: 35.333, width: 6, height: 6 },
      { id: "b", label: "B", description: "Base of prostate on the upper gland surface; the prostate lies below the bladder around part of the urethra.", x: 88, y: 35.333, width: 6, height: 6 },
      { id: "c", label: "C", description: "Peripheral zone of prostate on the outer gland surface; the prostate contributes fluid to semen.", x: 12, y: 71.111, width: 6, height: 6 },
      { id: "d", label: "D", description: "Urethra on the long lower channel; it carries urine and, in this anatomy, semen to the exterior.", x: 88, y: 71.111, width: 6, height: 6 },
    ],
    notes:
      "This partial view shows selected ducts, prostate surfaces and urethra. Testes and penis are not included; the model does not represent the complete reproductive system.",
  },
] as const satisfies readonly AnatomyAsset[];
