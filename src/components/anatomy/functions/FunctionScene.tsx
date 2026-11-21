"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import type { AnatomyFunctionId } from "@/lib/anatomy-functions";
import {
  getAnatomyFunctionFrame,
  NEPHRON_MODEL_PATHS,
  NEPHRON_TRANSPORT_ROUTES,
  NEURON_AXON_PATH,
  NEURON_RECEIVING_MEMBRANE,
  NEURON_RECEPTOR_POSITIONS,
  NEURON_TRANSMITTER_PATH,
  type AnatomyFunctionFrame,
  type BrainFunctionFrame,
  type HeartFunctionFrame,
  type RespiratoryFunctionFrame,
  type UrinaryFunctionFrame,
} from "@/lib/anatomy-function-model";
import { fitOrthographicCamera, setZoom } from "../camera";
import styles from "./Functions.module.css";

type FunctionSceneProps = {
  systemId: AnatomyFunctionId;
  stageIndex: number;
  progress: number;
  onError: () => void;
};

type ModelController = { update: (frame: AnatomyFunctionFrame) => void };
type ParticleSet = { update: (progress: number, visible: boolean) => void };

const MAX_DEVICE_PIXEL_RATIO = 1.5;

function standardMaterial(color: string, options: { roughness?: number; metalness?: number; opacity?: number } = {}): THREE.MeshStandardMaterial {
  const opacity = options.opacity ?? 1;
  return new THREE.MeshStandardMaterial({
    color,
    roughness: options.roughness ?? 0.58,
    metalness: options.metalness ?? 0,
    transparent: opacity < 1,
    opacity,
    side: opacity < 1 ? THREE.DoubleSide : THREE.FrontSide,
    depthWrite: opacity === 1,
  });
}

function addMesh(
  parent: THREE.Object3D,
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
  position: THREE.Vector3 | [number, number, number],
  scale?: [number, number, number],
): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.copy(Array.isArray(position) ? new THREE.Vector3(...position) : position);
  if (scale) mesh.scale.set(...scale);
  parent.add(mesh);
  return mesh;
}

function sphere(
  parent: THREE.Object3D,
  color: string,
  position: [number, number, number],
  scale: [number, number, number],
  opacity = 1,
  geometry = new THREE.SphereGeometry(1, 24, 16),
): THREE.Mesh {
  return addMesh(parent, geometry, standardMaterial(color, { opacity }), position, scale);
}

function tube(
  parent: THREE.Object3D,
  points: readonly (readonly [number, number, number])[],
  color: string,
  radius: number,
  opacity = 1,
  radialSegments = 10,
): { mesh: THREE.Mesh; curve: THREE.CatmullRomCurve3 } {
  const curve = new THREE.CatmullRomCurve3(points.map((point) => new THREE.Vector3(...point)));
  const geometry = new THREE.TubeGeometry(curve, Math.max(24, points.length * 10), radius, radialSegments, false);
  return { mesh: addMesh(parent, geometry, standardMaterial(color, { opacity }), [0, 0, 0]), curve };
}

function createParticles(parent: THREE.Object3D, curve: THREE.Curve<THREE.Vector3>, color: string, count = 4, radius = 0.075, loop = true): ParticleSet {
  const particles = Array.from({ length: count }, (_, index) => {
    const mesh = sphere(parent, color, [0, 0, 0], [radius, radius, radius], 1, new THREE.SphereGeometry(1, 12, 10));
    const halo = new THREE.Mesh(mesh.geometry, new THREE.MeshBasicMaterial({ color: "#fff7dc", side: THREE.BackSide }));
    halo.scale.setScalar(1.4);
    mesh.add(halo);
    mesh.visible = false;
    return { mesh, offset: index / count };
  });
  return {
    update(progress, visible) {
      for (const particle of particles) {
        particle.mesh.visible = visible;
        if (visible) {
          const along = loop ? (particle.offset + progress * 0.72) % 1 : progress;
          const position = curve.getPointAt(along);
          particle.mesh.position.copy(position);
        }
      }
    },
  };
}

function gateSymbol(parent: THREE.Object3D, position: [number, number, number], color: string): THREE.Group {
  const pivot = new THREE.Group();
  pivot.position.set(...position);
  parent.add(pivot);
  const geometry = new THREE.CapsuleGeometry(0.045, 0.2, 3, 8);
  const material = standardMaterial(color, { roughness: 0.4 });
  const first = addMesh(pivot, geometry, material, [-0.065, 0, 0]);
  const second = addMesh(pivot, geometry, material, [0.065, 0, 0]);
  first.rotation.z = Math.PI / 2;
  second.rotation.z = -Math.PI / 2;
  return pivot;
}

function heartModel(root: THREE.Group): ModelController {
  const lowerOxygen = "#557fa9";
  const higherOxygen = "#d65b55";
  const gateColor = "#f4d6a1";
  const pressureColor = "#6256a5";
  const chamberMaterials = [
    standardMaterial(lowerOxygen, { opacity: 0.48 }),
    standardMaterial(lowerOxygen, { opacity: 0.48 }),
    standardMaterial(higherOxygen, { opacity: 0.48 }),
    standardMaterial(higherOxygen, { opacity: 0.48 }),
  ];
  const chambers = [
    addMesh(root, new THREE.SphereGeometry(1, 32, 24), chamberMaterials[0], [-0.76, 0.62, 0], [0.58, 0.54, 0.5]),
    addMesh(root, new THREE.SphereGeometry(1, 32, 24), chamberMaterials[1], [-0.66, -0.42, 0.02], [0.66, 0.92, 0.58]),
    addMesh(root, new THREE.SphereGeometry(1, 32, 24), chamberMaterials[2], [0.76, 0.62, 0], [0.58, 0.54, 0.5]),
    addMesh(root, new THREE.SphereGeometry(1, 32, 24), chamberMaterials[3], [0.66, -0.42, 0.02], [0.66, 0.92, 0.58]),
  ];
  chambers.forEach((chamber, index) => {
    chamber.rotation.z = index % 2 ? -0.08 : 0.08;
  });

  tube(root, [[-0.76, 1.05, 0], [-0.76, 1.4, 0], [-1.08, 1.58, 0]], lowerOxygen, 0.17);
  tube(root, [[0.76, 1.05, 0], [0.76, 1.43, 0], [1.1, 1.6, 0]], higherOxygen, 0.17);
  const pulmonaryCurve = tube(root, [[-0.68, -0.95, 0], [-0.72, -1.3, 0], [-1.18, -1.4, 0], [-1.45, -1.08, 0]], lowerOxygen, 0.13).curve;
  const systemicCurve = tube(root, [[0.68, -0.95, 0], [0.72, -1.3, 0], [1.18, -1.4, 0], [1.45, -1.08, 0]], higherOxygen, 0.13).curve;
  const avCurves = [
    tube(root, [[-0.76, 0.12, 0.04], [-0.72, -0.03, 0.04], [-0.67, -0.17, 0.04]], lowerOxygen, 0.1).curve,
    tube(root, [[0.76, 0.12, 0.04], [0.72, -0.03, 0.04], [0.67, -0.17, 0.04]], higherOxygen, 0.1).curve,
  ];
  const avGates = [gateSymbol(root, [-0.7, -0.05, 0.68], gateColor), gateSymbol(root, [0.7, -0.05, 0.68], gateColor)];
  const outflowGates = [gateSymbol(root, [-0.68, -0.98, 0.68], gateColor), gateSymbol(root, [0.68, -0.98, 0.68], gateColor)];
  const pressureCue = sphere(root, pressureColor, [1.72, 0.15, 0], [0.16, 0.5, 0.12]);
  const flowParticles = [
    createParticles(root, avCurves[0], lowerOxygen, 3, 0.09),
    createParticles(root, avCurves[1], higherOxygen, 3, 0.09),
    createParticles(root, pulmonaryCurve, lowerOxygen, 4, 0.09),
    createParticles(root, systemicCurve, higherOxygen, 4, 0.09),
  ];

  return {
    update(rawFrame) {
      if (rawFrame.systemId !== "heart") return;
      const frame: HeartFunctionFrame = rawFrame;
      const volumeScale = 0.72 + frame.ventricularVolume * 0.28;
      chambers[1].scale.set(0.66 * volumeScale, 0.92 * volumeScale, 0.58 * volumeScale);
      chambers[3].scale.set(0.66 * volumeScale, 0.92 * volumeScale, 0.58 * volumeScale);
      const pressureLevel = frame.ventricularPressure === "higher" ? 1 : frame.ventricularPressure === "rising" ? 0.7 + frame.progress * 0.3 : frame.ventricularPressure === "falling" ? 1 - frame.progress * 0.3 : 0.4;
      pressureCue.scale.y = 0.2 + pressureLevel * 0.55;
      const gateOpen = (gate: THREE.Group, open: boolean) => {
        const [first, second] = gate.children;
        if (!first || !second) return;
        first.position.x = open ? -0.14 : -0.065;
        second.position.x = open ? 0.14 : 0.065;
        first.rotation.z = open ? 0 : Math.PI / 2;
        second.rotation.z = open ? 0 : -Math.PI / 2;
      };
      avGates.forEach((gate) => gateOpen(gate, frame.avGate === "open"));
      outflowGates.forEach((gate) => gateOpen(gate, frame.outflowGate === "open"));
      const filling = frame.flowDirection === "into-ventricles";
      const ejection = frame.flowDirection === "out-of-ventricles";
      flowParticles[0].update(frame.flowProgress, filling);
      flowParticles[1].update(frame.flowProgress, filling);
      flowParticles[2].update(frame.flowProgress, ejection);
      flowParticles[3].update(frame.flowProgress, ejection);
    },
  };
}

function respiratoryModel(root: THREE.Group): ModelController {
  const lungMaterial = standardMaterial("#d88478", { roughness: 0.78 });
  const leftLung = addMesh(root, new THREE.SphereGeometry(1, 36, 28), lungMaterial, [-0.85, 0.05, 0], [0.78, 1.15, 0.56]);
  const rightLung = addMesh(root, new THREE.SphereGeometry(1, 36, 28), lungMaterial, [0.85, 0.05, 0], [0.78, 1.15, 0.56]);
  leftLung.rotation.z = -0.08;
  rightLung.rotation.z = 0.08;

  tube(root, [[0, 1.65, 0.05], [0, 1.15, 0.05], [0, 0.8, 0.05]], "#d4a66e", 0.14);
  const leftMain = tube(root, [[0, 0.82, 0.05], [-0.35, 0.62, 0.06], [-0.62, 0.38, 0.08], [-0.7, 0.1, 0.1]], "#66a99e", 0.105).curve;
  const rightMain = tube(root, [[0, 0.82, 0.05], [0.35, 0.62, 0.06], [0.62, 0.38, 0.08], [0.7, 0.1, 0.1]], "#66a99e", 0.105).curve;
  tube(root, [[-0.46, 0.55, 0.08], [-0.95, 0.72, 0.08], [-1.25, 0.48, 0.08], [-1.35, 0.18, 0.08]], "#66a99e", 0.065);
  tube(root, [[0.46, 0.55, 0.08], [0.95, 0.72, 0.08], [1.25, 0.48, 0.08], [1.35, 0.18, 0.08]], "#66a99e", 0.065);
  const diaphragm = tube(root, [[-1.8, -0.78, 0.05], [-1.1, -0.54, 0.05], [0, -0.3, 0.05], [1.1, -0.54, 0.05], [1.8, -0.78, 0.05]], "#d9a875", 0.12).mesh;
  diaphragm.name = "Illustrative diaphragm dome";

  const inset = new THREE.Group();
  inset.position.set(1.85, 1.3, 0.15);
  root.add(inset);
  sphere(inset, "#f3cda5", [0, 0, 0], [0.72, 0.66, 0.12], 0.42);
  const alveoli = [[-0.28, 0.2], [0.02, 0.28], [0.3, 0.14], [-0.2, -0.12], [0.12, -0.2], [0.36, -0.22]] as const;
  alveoli.forEach(([x, y], index) => sphere(inset, index % 2 ? "#f0bca7" : "#f6d6bc", [x, y, 0.12], [0.14, 0.14, 0.11]));
  tube(inset, [[-0.52, -0.38, 0.2], [-0.38, -0.06, 0.21], [-0.18, 0.34, 0.2], [0.06, 0.4, 0.2], [0.34, 0.22, 0.2], [0.52, -0.18, 0.2]], "#ad5b66", 0.035, 1, 8);
  const o2Transfer = tube(inset, [[-0.22, 0.06, 0.24], [-0.08, 0.15, 0.24], [0.06, 0.4, 0.2]], "#2e8b57", 0.022, 1, 8).curve;
  const co2Transfer = tube(inset, [[0.06, 0.4, 0.2], [0.12, 0.08, 0.24], [-0.06, -0.15, 0.24]], "#7556a3", 0.022, 1, 8).curve;
  const airInParticles = [createParticles(root, leftMain, "#2876a8", 3, 0.06), createParticles(root, rightMain, "#2876a8", 3, 0.06)];
  const airOutParticles = [createParticles(root, leftMain, "#ba6543", 3, 0.06), createParticles(root, rightMain, "#ba6543", 3, 0.06)];
  const exchangeParticles = [createParticles(inset, o2Transfer, "#2e8b57", 2, 0.045), createParticles(inset, co2Transfer, "#7556a3", 2, 0.045)];

  return {
    update(rawFrame) {
      if (rawFrame.systemId !== "respiratory") return;
      const frame: RespiratoryFunctionFrame = rawFrame;
      const expansion = 0.94 + frame.lungExpansion * 0.11;
      leftLung.scale.set(0.78 * expansion, 1.15 * expansion, 0.56 * expansion);
      rightLung.scale.set(0.78 * expansion, 1.15 * expansion, 0.56 * expansion);
      const edgeHeight = -0.78;
      diaphragm.scale.y = frame.diaphragmDomeFactor;
      diaphragm.position.y = edgeHeight * (1 - frame.diaphragmDomeFactor) + frame.diaphragmDownwardOffset;
      const airflowProgress = frame.airflowPathProgress ?? 0;
      airInParticles.forEach((set) => set.update(airflowProgress, frame.airflow === "in"));
      airOutParticles.forEach((set) => set.update(airflowProgress, frame.airflow === "out"));
      // These exchange paths remain present at every stage, including both bulk-flow pauses.
      exchangeParticles[0].update(frame.progress, true);
      exchangeParticles[1].update(frame.progress, true);
    },
  };
}

function urinaryModel(root: THREE.Group): ModelController {
  const blood = "#a84545";
  const fluid = "#c28b35";
  const vessel = tube(root, NEPHRON_MODEL_PATHS.bloodIn, blood, 0.105).curve;
  const returnVessel = tube(root, NEPHRON_MODEL_PATHS.bloodReturn, blood, 0.07).curve;
  const cup = addMesh(root, new THREE.SphereGeometry(1, 28, 20), standardMaterial("#e8c992", { opacity: 0.26, roughness: 0.38 }), [-0.8, 0.55, 0], [0.56, 0.56, 0.45]);
  (cup.material as THREE.Material).side = THREE.DoubleSide;
  sphere(root, "#d88172", [-0.8, 0.55, 0.02], [0.32, 0.32, 0.25], 1);
  const tuftPoints = [
    [-0.93, 0.6, 0.27], [-0.8, 0.74, 0.26], [-0.65, 0.64, 0.25], [-0.69, 0.48, 0.26],
    [-0.84, 0.41, 0.27], [-0.95, 0.52, 0.26], [-0.79, 0.57, 0.34], [-0.7, 0.57, 0.12],
  ] as const;
  tuftPoints.forEach((point, index) => sphere(root, index % 2 ? "#bb6569" : "#d99183", [...point], [0.12, 0.11, 0.11]));

  const tubuleCurve = tube(root, NEPHRON_MODEL_PATHS.tubule, fluid, 0.095).curve;
  const collectingDuct = tube(root, NEPHRON_MODEL_PATHS.collectingDuct, fluid, 0.13).curve;
  const filterCrossing = tube(root, NEPHRON_TRANSPORT_ROUTES.filtration, fluid, 0.04, 1, 8).curve;
  const filtrateRoute = tube(root, NEPHRON_TRANSPORT_ROUTES.filtrate, fluid, 0.035, 1, 8).curve;
  const reabsorbRoute = tube(root, NEPHRON_TRANSPORT_ROUTES.reabsorption, "#218a78", 0.04, 1, 8).curve;
  const secreteRoute = tube(root, NEPHRON_TRANSPORT_ROUTES.secretion, "#6657a8", 0.04, 1, 8).curve;
  const collectingRoute = tube(root, NEPHRON_TRANSPORT_ROUTES.collection, fluid, 0.04, 1, 8).curve;
  const bloodParticles = createParticles(root, vessel, blood, 4, 0.065);
  const returnParticles = createParticles(root, returnVessel, blood, 4, 0.06);
  const retainedCellParticles = [
    createParticles(root, vessel, "#733b3e", 3, 0.085),
    createParticles(root, returnVessel, "#733b3e", 3, 0.08),
  ];
  const routeParticles = [
    createParticles(root, filterCrossing, fluid, 2, 0.05),
    createParticles(root, reabsorbRoute, "#218a78", 2, 0.05),
    createParticles(root, secreteRoute, "#6657a8", 2, 0.05),
    createParticles(root, collectingRoute, fluid, 2, 0.05),
    createParticles(root, filtrateRoute, fluid, 2, 0.05),
    createParticles(root, tubuleCurve, fluid, 4, 0.05),
    createParticles(root, collectingDuct, fluid, 3, 0.055),
  ];

  return {
    update(rawFrame) {
      if (rawFrame.systemId !== "urinary") return;
      const frame: UrinaryFunctionFrame = rawFrame;
      bloodParticles.update(frame.progress, true);
      returnParticles.update(frame.progress, true);
      retainedCellParticles.forEach((set) => set.update(frame.progress, true));
      routeParticles.forEach((set, index) => set.update(frame.progress, index === frame.stageIndex || (index === 4 && frame.stageIndex === 0) || index >= 5));
    },
  };
}

function neuronModel(root: THREE.Group): ModelController {
  const neural = "#5b8f84";
  const dendrites = [
    [[-1.35, 0.28, 0], [-1.75, 0.62, 0], [-2.05, 0.82, 0]],
    [[-1.35, 0.22, 0], [-1.8, 0.2, 0], [-2.1, 0.1, 0]],
    [[-1.28, -0.02, 0], [-1.68, -0.38, 0], [-1.9, -0.72, 0]],
    [[-1.22, -0.18, 0], [-1.43, -0.68, 0], [-1.48, -1.02, 0]],
    [[-1.25, 0.05, 0], [-1.72, 0.78, 0], [-1.76, 1.1, 0]],
  ] as const;
  dendrites.forEach((branch, index) => {
    tube(root, branch, neural, index === 1 ? 0.09 : 0.075);
    sphere(root, "#75a99b", [...branch[2]], [0.095, 0.095, 0.095]);
  });
  const soma = sphere(root, "#d29b70", [-0.98, 0.02, 0], [0.55, 0.47, 0.42]);
  soma.rotation.z = -0.18;
  sphere(root, "#f0c69f", [-1.03, 0.03, 0.36], [0.16, 0.15, 0.11]);
  const axonCurve = tube(root, NEURON_AXON_PATH, neural, 0.09).curve;
  tube(root, [[-0.62, -0.02, 0.02], [-0.42, -0.02, 0.02]], "#d2a85e", 0.12);
  const myelin = [0.16, 0.55, 0.94, 1.33, 1.7].map((x) =>
    sphere(root, "#d8c9a0", [x, 0.04, 0.02], [0.19, 0.16, 0.15]),
  );
  myelin.forEach((segment) => { segment.rotation.z = 0.03; });
  sphere(root, "#c78c72", [2.05, 0.08, 0.04], [0.23, 0.2, 0.2]);
  const vesicles = [[1.93, 0.23, 0.27], [2.08, 0.25, 0.27], [2.22, 0.19, 0.27], [1.98, 0.07, 0.32]] as const;
  vesicles.forEach((point) => sphere(root, "#8b79aa", [...point], [0.075, 0.075, 0.075]));
  const cleft = tube(root, [[2.42, -0.34, 0.03], [2.42, 0.02, 0.03], [2.42, 0.34, 0.03]], "#b5aab5", 0.025, 0.85, 8).mesh;
  cleft.name = "Chemical synapse gap (schematic)";
  tube(root, NEURON_RECEIVING_MEMBRANE, "#6d9c88", 0.12);
  const receptors = NEURON_RECEPTOR_POSITIONS.map((point, index) =>
    sphere(root, index % 2 ? "#8eae78" : "#a9bd80", [...point], [0.08, 0.14, 0.1]),
  );
  const signalLoci = Array.from({ length: 9 }, (_, index) => {
    const point = axonCurve.getPointAt(index / 8);
    return sphere(root, "#cbd9d7", [point.x, point.y, point.z + 0.105], [0.055, 0.055, 0.055]);
  });
  const transmitterCurve = tube(root, NEURON_TRANSMITTER_PATH, "#9a5a9b", 0.025, 1, 8).curve;
  const transmitters = createParticles(root, transmitterCurve, "#9a5a9b", 1, 0.055, false);
  const inputCue = sphere(root, "#4d8c72", [-1.7, 0.52, 0.12], [0.09, 0.09, 0.09]);

  return {
    update(rawFrame) {
      if (rawFrame.systemId !== "brain") return;
      const frame: BrainFunctionFrame = rawFrame;
      inputCue.visible = frame.stageIndex === 0;
      const activeLocus = Math.min(Math.floor(frame.axonSignalPosition * signalLoci.length), signalLoci.length - 1);
      signalLoci.forEach((locus, index) => {
        const material = locus.material as THREE.MeshStandardMaterial;
        const active = frame.stageIndex === 1 && index === activeLocus;
        material.emissive.set(active ? "#2876a8" : "#000000");
        material.emissiveIntensity = active ? 0.75 : 0;
      });
       transmitters.update(frame.transmitterCrossingProgress, frame.stageIndex >= 2);
      receptors.forEach((receptor) => {
        (receptor.material as THREE.MeshStandardMaterial).emissive.set(frame.postsynapticReceptorsRespond ? "#c28b35" : "#000000");
        (receptor.material as THREE.MeshStandardMaterial).emissiveIntensity = frame.postsynapticReceptorsRespond ? 0.38 : 0;
      });
      cleft.visible = true;
    },
  };
}

function createFunctionModel(systemId: AnatomyFunctionId, root: THREE.Group): ModelController {
  switch (systemId) {
    case "heart": return heartModel(root);
    case "respiratory": return respiratoryModel(root);
    case "urinary": return urinaryModel(root);
    case "brain": return neuronModel(root);
  }
}

function disposeObjectResources(root: THREE.Object3D): void {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  root.traverse((object) => {
    const renderable = object as THREE.Object3D & { geometry?: THREE.BufferGeometry; material?: THREE.Material | THREE.Material[] };
    if (renderable.geometry) geometries.add(renderable.geometry);
    const assigned = Array.isArray(renderable.material) ? renderable.material : renderable.material ? [renderable.material] : [];
    assigned.forEach((material) => materials.add(material));
  });
  materials.forEach((material) => material.dispose());
  geometries.forEach((geometry) => geometry.dispose());
}

export function FunctionScene({ systemId, stageIndex, progress, onError }: FunctionSceneProps) {
  const host = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const drawRef = useRef<() => void>(() => undefined);
  const modelUpdateRef = useRef<((frame: AnatomyFunctionFrame) => void) | null>(null);
  const [status, setStatus] = useState("Preparing the illustrative 3D view…");

  useEffect(() => {
    const container = host.current;
    if (!container) return;
    let renderer: THREE.WebGLRenderer | null = null;
    let controls: OrbitControls | null = null;
    let camera: THREE.OrthographicCamera | null = null;
    let root: THREE.Group | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let disposed = false;
    let contextLost = false;
    let statusFrame = 0;
    let canvas: HTMLCanvasElement | null = null;
    let model: ModelController | null = null;
    let scene: THREE.Scene | null = null;

    const draw = () => {
      if (!disposed && !contextLost && renderer && scene && camera) renderer.render(scene, camera);
    };
    const onContextLost = (event: Event) => {
      event.preventDefault();
      if (disposed || contextLost) return;
      contextLost = true;
      if (process.env.NODE_ENV !== "production") {
        console.error("[anatomy-function-scene] WebGL context lost", new Error("Illustrative 3D rendering context was lost"));
      }
      setStatus("The 3D context stopped. The step diagram and labels remain available.");
      onError();
    };
    const cleanup = () => {
      if (disposed) return;
      disposed = true;
      if (statusFrame) window.cancelAnimationFrame(statusFrame);
      statusFrame = 0;
      resizeObserver?.disconnect();
      resizeObserver = null;
      canvas?.removeEventListener("webglcontextlost", onContextLost);
      controls?.removeEventListener("change", draw);
      controls?.dispose();
      controlsRef.current = null;
      cameraRef.current = null;
      drawRef.current = () => undefined;
      modelUpdateRef.current = null;
      if (root) disposeObjectResources(root);
      renderer?.dispose();
      renderer?.forceContextLoss();
      canvas?.remove();
      canvas = null;
      renderer = null;
      controls = null;
      camera = null;
      root = null;
      scene = null;
      model = null;
    };

    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setClearColor(0x000000, 0);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, MAX_DEVICE_PIXEL_RATIO));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      canvas = renderer.domElement;
      canvas.className = styles.canvas;
      canvas.setAttribute("aria-hidden", "true");
      canvas.addEventListener("webglcontextlost", onContextLost);
      container.appendChild(canvas);

      scene = new THREE.Scene();
      scene.add(new THREE.HemisphereLight(0xfff4e9, 0x59636a, 2.05));
      const keyLight = new THREE.DirectionalLight(0xfff8ec, 2.25);
      keyLight.position.set(3.8, 5, 4.5);
      scene.add(keyLight);
      const fillLight = new THREE.DirectionalLight(0x9dcfc7, 0.8);
      fillLight.position.set(-4, 1, -3);
      scene.add(fillLight);
      const rimLight = new THREE.DirectionalLight(0xf2bd89, 0.55);
      rimLight.position.set(0, -2, 4);
      scene.add(rimLight);

      const size = container.getBoundingClientRect();
      const width = Math.max(size.width, 1);
      const height = Math.max(size.height, 1);
      camera = new THREE.OrthographicCamera(-width / height, width / height, 1, -1, 0.0001, 1000);
      controls = new OrbitControls(camera, canvas);
      controls.enableDamping = false;
      controls.autoRotate = false;
      controls.enablePan = false;
      controls.enableZoom = true;
      controls.zoomToCursor = false;
      controls.addEventListener("change", draw);
      controlsRef.current = controls;
      cameraRef.current = camera;
      drawRef.current = draw;
      renderer.setSize(width, height, false);

      root = new THREE.Group();
      scene.add(root);
      model = createFunctionModel(systemId, root);
      modelUpdateRef.current = model.update;
      const initialFrame = getAnatomyFunctionFrame(systemId, 0, 0);
      model.update(initialFrame);
      fitOrthographicCamera(camera, controls, root, width, height);
      renderer.render(scene, camera);
      statusFrame = window.requestAnimationFrame(() => {
        if (!disposed) setStatus("Illustrative 3D view ready. Drag to rotate or use the view controls.");
      });

      resizeObserver = new ResizeObserver(() => {
        if (disposed || !renderer || !camera) return;
        const nextSize = container.getBoundingClientRect();
        const nextWidth = Math.max(nextSize.width, 1);
        const nextHeight = Math.max(nextSize.height, 1);
        renderer.setSize(nextWidth, nextHeight, false);
        const halfHeight = camera.top;
        const aspect = nextWidth / nextHeight;
        camera.left = -halfHeight * aspect;
        camera.right = halfHeight * aspect;
        camera.updateProjectionMatrix();
        draw();
      });
      resizeObserver.observe(container);
    } catch (error: unknown) {
      if (process.env.NODE_ENV !== "production") {
        console.error("[anatomy-function-scene] Unable to initialize illustrative 3D view", error);
      }
      cleanup();
      onError();
    }

    return cleanup;
  }, [systemId, onError]);

  useEffect(() => {
    const frame = getAnatomyFunctionFrame(systemId, stageIndex, progress);
    const sceneRoot = host.current;
    if (!sceneRoot) return;
    const canvas = sceneRoot.querySelector("canvas");
    if (!canvas) return;
    // The model is owned by the renderer effect; its update closure is held by this ref.
    modelUpdateRef.current?.(frame);
    drawRef.current();
  }, [systemId, stageIndex, progress]);

  function rotate(horizontal: number, vertical: number) {
    const controls = controlsRef.current;
    if (!controls) return;
    controls.rotateLeft(horizontal);
    controls.rotateUp(vertical);
    controls.update();
    drawRef.current();
  }

  function zoom(amount: number) {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    if (!camera || !controls) return;
    setZoom(camera, controls, amount);
    drawRef.current();
  }

  function resetView() {
    controlsRef.current?.reset();
    drawRef.current();
  }

  return (
    <div className={styles.sceneShell}>
      <div ref={host} className={styles.sceneViewport} role="group" aria-label={`Illustrative ${systemId} function model. The model has no anatomical left or right orientation.`} />
      <p className={styles.sceneStatus} role="status" aria-live="polite">{status}</p>
      <div className={styles.sceneControls} role="group" aria-label="3D model view controls">
        <button className={styles.sceneControl} type="button" aria-label="Rotate left" onClick={() => rotate(Math.PI / 12, 0)}>←</button>
        <button className={styles.sceneControl} type="button" aria-label="Rotate right" onClick={() => rotate(-Math.PI / 12, 0)}>→</button>
        <button className={styles.sceneControl} type="button" aria-label="Rotate up" onClick={() => rotate(0, Math.PI / 12)}>↑</button>
        <button className={styles.sceneControl} type="button" aria-label="Rotate down" onClick={() => rotate(0, -Math.PI / 12)}>↓</button>
        <button className={styles.sceneControl} type="button" aria-label="Zoom in" onClick={() => zoom(1.2)}>＋</button>
        <button className={styles.sceneControl} type="button" aria-label="Zoom out" onClick={() => zoom(1 / 1.2)}>−</button>
        <button className={styles.sceneControlReset} type="button" onClick={resetView}>Reset view</button>
      </div>
    </div>
  );
}
