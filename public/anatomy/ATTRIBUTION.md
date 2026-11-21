# Anatomy asset attribution

The anatomy source meshes in `models/` are from the Human Reference Atlas CCF 3D Reference Object Library maintained by the HuBMAP Consortium. They are pinned to repository revision [`f1a3a63f110e27ff0736047d52d04dba5d3087f9`](https://github.com/hubmapconsortium/ccf-3d-reference-object-library/tree/f1a3a63f110e27ff0736047d52d04dba5d3087f9) and are licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). The complete license text is retained in [`LICENSE-HRA-CC-BY-4.0.txt`](./LICENSE-HRA-CC-BY-4.0.txt).

Suggested attribution: “HuBMAP Consortium, HRA CCF 3D Reference Object Library, *[source model filename]*, CC BY 4.0.” The corresponding source-file URL, byte count, and SHA-256 are recorded in [`manifest.json`](./manifest.json).

The public GLBs are unmodified byte-for-byte source copies. The eight WebP atlas images are adaptations rendered from the cited source meshes with new camera, lighting, material colors, typography, and callout overlays. These adaptations do not imply source endorsement. The body-outline image is rendered separately: the source body mesh has no shared spatial-entity metadata and is not aligned with the organ models.

The selected HRA male reproductive meshes do not include testes or penis. The male atlas image marks this source-coverage gap; it does not invent replacement 3D geometry. These assets are for general anatomy learning and do not claim clinical certification or diagnostic use.
