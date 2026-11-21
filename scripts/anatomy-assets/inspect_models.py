"""Inspect pinned HRA GLBs with Blender's bundled glTF importer.

Run with the official Blender background binary:
  Blender -b --python scripts/anatomy-assets/inspect_models.py -- SOURCE_DIR OUTPUT_JSON
"""

import json
import os
import struct
import sys

import bpy
from mathutils import Vector


def glb_document(path):
    with open(path, "rb") as source:
        magic, version, length = struct.unpack("<4sII", source.read(12))
        if magic != b"glTF" or version != 2 or length != os.path.getsize(path):
            raise ValueError(f"Invalid GLB header: {path}")
        while source.tell() < length:
            chunk_length, chunk_type = struct.unpack("<II", source.read(8))
            chunk = source.read(chunk_length)
            if chunk_type == 0x4E4F534A:
                return json.loads(chunk.decode("utf-8"))
    raise ValueError(f"GLB has no JSON chunk: {path}")


def node_records(document):
    nodes = document.get("nodes", [])
    scenes = document.get("scenes", [])
    roots = scenes[document.get("scene", 0)].get("nodes", []) if scenes else list(range(len(nodes)))
    records = []

    def visit(index, parent_names):
        node = nodes[index]
        name = node.get("name", f"node-{index}")
        records.append({
            "index": index,
            "name": name,
            "path": "/".join(parent_names + [name]),
            "mesh": node.get("mesh"),
            "translation": node.get("translation"),
            "rotation": node.get("rotation"),
            "scale": node.get("scale"),
            "matrix": node.get("matrix"),
            "extras": node.get("extras"),
        })
        for child in node.get("children", []):
            visit(child, parent_names + [name])

    for root in roots:
        visit(root, [])
    return records


def mesh_bounds(obj):
    points = [obj.matrix_world @ Vector(corner) for corner in obj.bound_box]
    return {
        "min": [round(min(p[i] for p in points), 6) for i in range(3)],
        "max": [round(max(p[i] for p in points), 6) for i in range(3)],
        "dimensions": [round(obj.dimensions[i], 6) for i in range(3)],
    }


def main():
    args = sys.argv[sys.argv.index("--") + 1:]
    source_dir, output_path = args
    results = []
    for filename in sorted(os.listdir(source_dir)):
        if not filename.lower().endswith(".glb"):
            continue
        path = os.path.join(source_dir, filename)
        document = glb_document(path)
        bpy.ops.wm.read_factory_settings(use_empty=True)
        bpy.ops.import_scene.gltf(filepath=path)
        objects = []
        for obj in bpy.context.scene.objects:
            if obj.type != "MESH":
                continue
            objects.append({
                "name": obj.name,
                "dataName": obj.data.name,
                "bounds": mesh_bounds(obj),
                "vertices": len(obj.data.vertices),
                "polygons": len(obj.data.polygons),
                "materials": [material.name if material else None for material in obj.data.materials],
                "matrixWorld": [[round(value, 8) for value in row] for row in obj.matrix_world],
            })
        results.append({
            "file": filename,
            "bytes": os.path.getsize(path),
            "asset": document.get("asset", {}),
            "scene": document.get("scene"),
            "rootNodes": document.get("scenes", [{}])[document.get("scene", 0)].get("nodes", []) if document.get("scenes") else [],
            "nodes": node_records(document),
            "objects": objects,
        })
    os.makedirs(os.path.dirname(os.path.abspath(output_path)), exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as target:
        json.dump(results, target, indent=2, ensure_ascii=False)
        target.write("\n")
    print(f"Inspected {len(results)} GLBs -> {output_path}")


if __name__ == "__main__":
    main()
