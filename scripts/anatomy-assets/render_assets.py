"""Render numbered atlas source plates from pinned HRA surface geometry.

Run with the official Blender background binary:
  Blender -b --python scripts/anatomy-assets/render_assets.py -- SOURCE_DIR OUTPUT_DIR TARGETS_JSON

The script keeps source meshes intact. Only display materials, camera, lights,
and the documented kidney-capsule visibility are changed for these renders.
"""

import json
import os
import re
import sys

import bpy
from bpy_extras.object_utils import world_to_camera_view
from mathutils import Vector


CONFIG = [
    {
        "id": "body",
        "sources": ["body4Mesh_1338.glb"],
        "direction": (0.25, -1.0, 0.25),
        "lookOffset": 0.0,
        "targets": [
            {"id": "a", "screenXBand": (45, 56), "screenYBand": (21, 27)},
            {"id": "b", "screenXBand": (45, 56), "screenYBand": (30, 37)},
            {"id": "c", "screenXBand": (45, 56), "screenYBand": (40, 46)},
            {"id": "d", "screenXBand": (45, 56), "screenYBand": (48, 54)},
        ],
    },
    {
        "id": "heart",
        "sources": ["VH_M_Heart.glb"],
        "direction": (1.25, -2.1, 1.2),
        "targets": [
            {"id": "a", "names": ["VH_M_left_cardiac_atrium"]},
            {"id": "b", "names": ["VH_M_right_cardiac_atrium"]},
            {"id": "c", "names": ["VH_M_heart_left_ventricle"]},
            {"id": "d", "names": ["VH_M_heart_right_ventricle"]},
        ],
    },
    {
        "id": "brain",
        "sources": ["Allen_M_Brain.glb"],
        "direction": (2.1, -1.0, 0.85),
        "targets": [
            {"id": "a", "namePattern": r"^Allen_superior_frontal_gyrus_[LR]$"},
            {"id": "b", "namePattern": r"^Allen_superior_temporal_gyrus_[LR]$"},
            {"id": "c", "namePattern": r"^Allen_occipital_pole_[LR]$"},
            {"id": "d", "namePattern": r"^Allen_lateral_hemisphere_of_cerebellum_[LR]$"},
        ],
    },
    {
        "id": "respiratory",
        "sources": ["VH_M_Lung.glb"],
        "direction": (1.2, -2.2, 1.05),
        "targets": [
            {"id": "a", "names": ["VH_M_trachea"], "screenYBand": (37, 45), "requireOwnRaycast": True},
            {"id": "b", "names": ["VH_M_carina"]},
            {"id": "c", "names": ["VH_M_left_apical_bronchopulmonary_segment"]},
            {"id": "d", "names": ["VH_M_left_lateral_basal_bronchopulmonary_segment"]},
        ],
    },
    {
        "id": "digestive",
        "sources": ["VH_M_Liver.glb", "VH_M_Small_Intestine.glb", "SBU_M_Intestine_Large.glb"],
        "direction": (1.4, -2.4, 1.05),
        "targets": [
            {"id": "a", "names": ["VH_M_liver_capsule"]},
            {"id": "b", "names": ["VH_M_jejunum"]},
            {"id": "c", "names": ["VH_M_transverse_colon"]},
            {"id": "d", "names": ["VH_M_rectum"], "screenYBand": (72, 80), "requireOwnRaycast": True},
        ],
    },
    {
        "id": "urinary",
        "sources": ["VH_M_Kidney_L.glb", "VH_M_Kidney_R.glb"],
        "direction": (0.2, -2.0, 0.4),
        "targets": [
            {"id": "a", "names": ["VH_M_kidney_capsule_L"], "zBand": (0.25, 0.45)},
            {"id": "b", "names": ["VH_M_kidney_capsule_R"], "zBand": (0.75, 0.95)},
            {"id": "c", "names": ["VH_M_hilum_of_kidney_L"]},
            {"id": "d", "names": ["VH_M_hilum_of_kidney_R"]},
        ],
    },
    {
        "id": "reproductive-female",
        "sources": [
            "VH_F_Uterus.glb",
            "VH_F_Ovary_L.glb",
            "VH_F_Ovary_R.glb",
            "VH_F_Fallopian_Tube_L.glb",
            "VH_F_Fallopian_Tube_R.glb",
            "VH_F_Vagina.glb",
        ],
        "direction": (1.25, -2.25, 1.0),
        "targets": [
            {"id": "a", "names": ["VH_F_fundus_of_uterus"]},
            {"id": "b", "names": ["VH_F_cervix"]},
            {"id": "c", "names": ["VH_F_ampulla_of_uterine_tube_L", "VH_F_ampulla_of_uterine_tube_R"]},
            {"id": "d", "names": ["VH_F_vagina"]},
        ],
    },
    {
        "id": "reproductive-male",
        "sources": ["VH_M_Prostate.glb", "VH_M_Urethra.glb"],
        "direction": (1.35, -2.25, 1.0),
        "lookOffset": 0.18,
        "lookVerticalOffset": 0.12,
        "targets": [
            {"id": "a", "names": ["VH_M_vas_deferens_L"]},
            {"id": "b", "names": ["VH_M_base_of_prostate"]},
            {"id": "c", "names": ["VH_M_peripheral_zone_of_prostate_L", "VH_M_peripheral_zone_of_prostate_R"]},
            {"id": "d", "names": ["VH_M_other_urethra"]},
        ],
    },
]


def srgb_to_linear(value):
    return value / 12.92 if value <= 0.04045 else ((value + 0.055) / 1.055) ** 2.4


def rgba(hex_color):
    value = hex_color.lstrip("#")
    srgb = tuple(int(value[i:i + 2], 16) / 255 for i in (0, 2, 4))
    return tuple(srgb_to_linear(channel) for channel in srgb) + (1.0,)


def make_material(name, color):
    material = bpy.data.materials.new(name)
    material.use_nodes = True
    shader = material.node_tree.nodes.get("Principled BSDF")
    shader.inputs["Base Color"].default_value = rgba(color)
    shader.inputs["Roughness"].default_value = 0.48
    shader.inputs["Metallic"].default_value = 0.0
    if "Subsurface Weight" in shader.inputs:
        shader.inputs["Subsurface Weight"].default_value = 0.045
    if "Coat Weight" in shader.inputs:
        shader.inputs["Coat Weight"].default_value = 0.12
    return material


PALETTES = {
    "body": {"default": "#C7A996"},
    "heart": {
        "atrium": "#C97169", "ventricle": "#B95759", "septum": "#D88C74",
        "valve": "#E0B36B", "papillary": "#A75C62", "default": "#C66C66",
    },
    "brain": {
        "frontal": "#D27E69", "parietal": "#788BAF", "temporal": "#559B91",
        "occipital": "#D4A65D", "cerebell": "#6596A4", "brainstem": "#B17664",
        "default": "#8E899F",
    },
    "respiratory": {
        "trachea": "#528D91", "bronch": "#61999A", "cartilage": "#D9B46D",
        "hilum": "#967C68", "default": "#D4897C",
    },
    "digestive": {
        "liver": "#C57952", "intestine_large": "#A77B86", "colon": "#A77B86",
        "rectum": "#8C6A79", "duodenum": "#D4A85E", "jejunum": "#D4A85E",
        "ileum": "#C9955C", "default": "#BF865F",
    },
    "urinary": {
        "capsule": "#D29A82", "cortex": "#CF9B72", "pyramid": "#9C6576",
        "papilla": "#D5B06D", "hilum": "#5E9292", "column": "#A77B88",
        "default": "#C68A7C",
    },
    "reproductive-female": {
        "uterus": "#C97179", "cervix": "#A65E70", "ovary": "#A66F91",
        "tube": "#D8A45F", "vagina": "#B56D68", "default": "#C27A7B",
    },
    "reproductive-male": {
        "vas_deferens": "#65968D", "seminal_vesicle": "#D1A260",
        "prostate": "#C8746E", "urethra": "#588F94", "default": "#C58476",
    },
}


def material_for(asset_id, object_name, cache):
    lower = object_name.lower()
    palette = PALETTES[asset_id]
    if asset_id == "heart":
        key = "atrium" if "atrium" in lower else "ventricle" if "ventricle" in lower else "septum" if "septum" in lower else "valve" if "valve" in lower else "papillary" if "papillary" in lower else "default"
    elif asset_id == "brain":
        key = "brainstem" if any(word in lower for word in ("pons", "medulla", "peduncle", "midbrain")) else "cerebell" if "cerebell" in lower else next((word for word in ("frontal", "parietal", "temporal", "occipital") if word in lower), "default")
    elif asset_id == "respiratory":
        key = "trachea" if "trachea" in lower else "bronch" if "bronch" in lower or "bronchus" in lower else "cartilage" if "cartilage" in lower else "hilum" if "hilum" in lower else "default"
    elif asset_id == "digestive":
        key = "liver" if "liver" in lower or "hepatic" in lower else "intestine_large" if "colon" in lower or "caecum" in lower or "rectum" in lower or "appendix" in lower else next((word for word in ("duodenum", "jejunum", "ileum") if word in lower), "default")
    elif asset_id == "urinary":
        key = "cortex" if "cortex" in lower else "pyramid" if "pyramid" in lower else "papilla" if "papilla" in lower else "hilum" if "hilum" in lower else "column" if "column" in lower else "capsule" if "capsule" in lower else "default"
    elif asset_id == "reproductive-female":
        key = "uterus" if "uterus" in lower or "fundus" in lower else "cervix" if "cervix" in lower else "ovary" if "ovary" in lower else "tube" if "tube" in lower or "ampulla" in lower or "fimbria" in lower else "vagina" if "vagina" in lower else "default"
    elif asset_id == "reproductive-male":
        key = "vas_deferens" if "vas_deferens" in lower else "seminal_vesicle" if "seminal_vesicle" in lower else "urethra" if "urethra" in lower else "prostate" if "prostate" in lower else "default"
    else:
        key = "default"
    color = palette[key]
    if color not in cache:
        cache[color] = make_material(f"Atlas {asset_id} {color}", color)
    return cache[color]


def matching_objects(target, mesh_objects):
    if "names" in target:
        wanted = set(target["names"])
        return [obj for obj in mesh_objects if obj.name in wanted]
    if "zBand" in target or "screenYBand" in target:
        return mesh_objects
    pattern = re.compile(target["namePattern"])
    return [obj for obj in mesh_objects if pattern.search(obj.name)]


def union_bounds(mesh_objects):
    bpy.context.view_layer.update()
    points = [obj.matrix_world @ Vector(corner) for obj in mesh_objects for corner in obj.bound_box]
    low = Vector(tuple(min(point[i] for point in points) for i in range(3)))
    high = Vector(tuple(max(point[i] for point in points) for i in range(3)))
    return low, high


def target_surface_point(scene, camera, target, objects, bounds):
    low, high = bounds
    z_band = target.get("zBand")
    candidates = []
    for obj in objects:
        count = len(obj.data.vertices)
        stride = max(1, count // 240)
        for index in range(0, count, stride):
            point = obj.matrix_world @ obj.data.vertices[index].co
            if z_band:
                ratio = (point.z - low.z) / max(high.z - low.z, 1e-9)
                if not (z_band[0] <= ratio <= z_band[1]):
                    continue
            screen_point = world_to_camera_view(scene, camera, point)
            top_y = (1 - screen_point.y) * 100
            screen_x = screen_point.x * 100
            if "screenXBand" in target and not (target["screenXBand"][0] <= screen_x <= target["screenXBand"][1]):
                continue
            if "screenYBand" in target and not (target["screenYBand"][0] <= top_y <= target["screenYBand"][1]):
                continue
            depth = (point - camera.location).length
            candidates.append((depth, point, obj.name))
    if not candidates:
        raise RuntimeError(f"No candidate vertices for target {target['id']}")
    candidates.sort(key=lambda entry: entry[0])

    depsgraph = bpy.context.evaluated_depsgraph_get()
    rotation = camera.rotation_euler.to_matrix()
    forward = (rotation @ Vector((0, 0, -1))).normalized()
    right = (rotation @ Vector((1, 0, 0))).normalized()
    up = (rotation @ Vector((0, 1, 0))).normalized()
    frame_width = camera.data.ortho_scale
    frame_height = frame_width * 3 / 4
    allowed = {obj.name for obj in objects}
    for _, point, obj_name in candidates[:200]:
        screen = world_to_camera_view(scene, camera, point)
        if not (0.04 <= screen.x <= 0.96 and 0.08 <= screen.y <= 0.92):
            continue
        origin = camera.location + right * ((screen.x - 0.5) * frame_width) + up * ((screen.y - 0.5) * frame_height)
        hit, _, _, _, hit_obj, _ = scene.ray_cast(depsgraph, origin, forward, distance=frame_width * 4)
        if hit and hit_obj and hit_obj.name in allowed and (not target.get("requireOwnRaycast") or hit_obj.name == obj_name):
            return point, obj_name, screen.x, 1 - screen.y
    raise RuntimeError(f"No visible surface vertex for {target['id']} in objects {sorted(allowed)}")


def main():
    args = sys.argv[sys.argv.index("--") + 1:]
    source_dir, output_dir, targets_path = args[:3]
    resume_id = args[3] if len(args) > 3 else None
    only_id = args[4] if len(args) > 4 else None
    os.makedirs(output_dir, exist_ok=True)
    target_records = []
    configs = CONFIG
    if resume_id:
        if os.path.exists(targets_path):
            existing = json.loads(open(targets_path, encoding="utf-8").read())
            target_records = [record for record in existing if CONFIG.index(next(item for item in CONFIG if item["id"] == record["id"])) < next(index for index, item in enumerate(CONFIG) if item["id"] == resume_id)]
        start = next(index for index, item in enumerate(CONFIG) if item["id"] == resume_id)
        configs = [item for item in CONFIG[start:] if not only_id or item["id"] == only_id]
        if only_id:
            target_records = [record for record in existing if record["id"] != only_id]
    for config in configs:
        bpy.ops.wm.read_factory_settings(use_empty=True)
        for source in config["sources"]:
            bpy.ops.import_scene.gltf(filepath=os.path.join(source_dir, source))
        scene = bpy.context.scene
        mesh_objects = [obj for obj in scene.objects if obj.type == "MESH"]
        if not mesh_objects:
            raise RuntimeError(f"No mesh objects imported for {config['id']}")
        for name in config.get("hideNames", []):
            hidden = bpy.data.objects.get(name)
            if hidden:
                hidden.hide_render = True
                hidden.hide_set(True)
        if config.get("showNames"):
            shown = set()
            patterns = []
            for entry in config["showNames"]:
                if entry.startswith("^"):
                    patterns.append(re.compile(entry))
                else:
                    shown.add(entry)
            for obj in mesh_objects:
                if obj.name not in shown and not any(pattern.search(obj.name) for pattern in patterns):
                    obj.hide_render = True
                    obj.hide_set(True)
        material_cache = {}
        for obj in mesh_objects:
            obj.data.materials.clear()
            obj.data.materials.append(material_for(config["id"], obj.name, material_cache))
            for polygon in obj.data.polygons:
                polygon.use_smooth = True

        low, high = union_bounds(mesh_objects)
        center = (low + high) * 0.5
        size = high - low
        frame_width = max(size.x, size.y, size.z * 4 / 3) * 1.47
        direction = Vector(config["direction"]).normalized()

        camera_data = bpy.data.cameras.new(f"{config['id']} atlas camera")
        camera = bpy.data.objects.new(f"{config['id']} atlas camera", camera_data)
        scene.collection.objects.link(camera)
        initial_location = center + direction * max(size) * 3.2
        camera.location = initial_location
        camera.rotation_euler = (center - camera.location).to_track_quat("-Z", "Y").to_euler()
        if config.get("lookOffset"):
            right_axis = camera.rotation_euler.to_matrix() @ Vector((1, 0, 0))
            up_axis = camera.rotation_euler.to_matrix() @ Vector((0, 1, 0))
            look_at = center + right_axis * max(size) * config["lookOffset"] + up_axis * max(size) * config.get("lookVerticalOffset", 0)
            camera.location = look_at + direction * max(size) * 3.2
            camera.rotation_euler = (look_at - camera.location).to_track_quat("-Z", "Y").to_euler()
        camera_data.type = "ORTHO"
        camera_data.ortho_scale = frame_width
        scene.camera = camera

        scene.render.engine = "CYCLES"
        scene.cycles.samples = 40
        scene.cycles.use_denoising = True
        scene.render.resolution_x = 1200
        scene.render.resolution_y = 900
        scene.render.resolution_percentage = 100
        scene.render.image_settings.file_format = "PNG"
        scene.render.image_settings.color_mode = "RGB"
        scene.render.film_transparent = False
        scene.view_settings.view_transform = "AgX"
        scene.view_settings.look = "AgX - Medium High Contrast"
        scene.view_settings.exposure = -0.65
        world = bpy.data.worlds.new(f"{config['id']} cream atlas world")
        world.use_nodes = True
        world.node_tree.nodes["Background"].inputs[0].default_value = (0.63, 0.59, 0.52, 1)
        world.node_tree.nodes["Background"].inputs[1].default_value = 0.58
        scene.world = world

        def add_area(name, offset, power, ratio, color):
            light_data = bpy.data.lights.new(name, "AREA")
            light_data.energy = power
            light_data.shape = "DISK"
            light_data.size = max(size) * ratio
            light_data.color = color
            light = bpy.data.objects.new(name, light_data)
            scene.collection.objects.link(light)
            light.location = center + Vector(offset) * max(size)
            light.rotation_euler = (center - light.location).to_track_quat("-Z", "Y").to_euler()

        add_area("Large warm key", (2.2, -2.8, 3.1), 5.0, 2.0, (1.0, 0.92, 0.82))
        add_area("Cool fill", (-2.2, -1.1, 1.5), 2.5, 2.6, (0.78, 0.88, 1.0))
        add_area("Soft rim", (0.2, 2.4, 2.1), 6.0, 1.7, (1.0, 0.84, 0.68))

        bpy.context.view_layer.update()
        target_results = []
        for target in config["targets"]:
            objects = matching_objects(target, mesh_objects)
            if not objects:
                raise RuntimeError(f"No matching source mesh for {config['id']} target {target['id']}: {target}")
            point, source_object, sx, sy = target_surface_point(scene, camera, target, objects, (low, high))
            target_results.append({
                "id": target["id"],
                "nodeNames": [obj.name for obj in objects],
                "surfaceNode": source_object,
                "worldPoint": [round(float(v), 7) for v in point],
                "x": round(sx * 100, 3),
                "y": round(sy * 100, 3),
                "width": 6.0,
                "height": 6.0,
            })

        render_path = os.path.abspath(os.path.join(output_dir, f"{config['id']}.png"))
        scene.render.filepath = render_path
        bpy.ops.render.render(write_still=True)
        target_records.append({
            "id": config["id"],
            "sources": config["sources"],
            "hideNames": config.get("hideNames", []),
            "bounds": {"min": [round(float(v), 7) for v in low], "max": [round(float(v), 7) for v in high]},
            "camera": {
                "projection": "orthographic",
                "direction": [round(float(v), 6) for v in direction],
                "target": [round(float(v), 7) for v in center],
                "orthoScale": round(float(frame_width), 7),
            },
            "render": {"path": render_path, "width": 1200, "height": 900, "engine": "Cycles", "samples": 40},
            "targets": target_results,
        })
        with open(targets_path, "w", encoding="utf-8") as output:
            json.dump(target_records, output, indent=2, ensure_ascii=False)
            output.write("\n")
        print(f"Rendered anatomy plate {config['id']} to {render_path}")

    with open(targets_path, "w", encoding="utf-8") as output:
        json.dump(target_records, output, indent=2, ensure_ascii=False)
        output.write("\n")
    print(f"Wrote surface target projections to {targets_path}")


if __name__ == "__main__":
    main()
