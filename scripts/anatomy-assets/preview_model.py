"""Render one source GLB to a temporary neutral studio preview."""

import os
import sys

import bpy
from mathutils import Vector


def linear_color(rgb):
    return tuple(value / 12.92 if value <= 0.04045 else ((value + 0.055) / 1.055) ** 2.4 for value in rgb) + (1,)


def main():
    args = sys.argv[sys.argv.index("--") + 1:]
    source, output = args[:2]
    view = args[2] if len(args) > 2 else "oblique"
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=source)
    meshes = [obj for obj in bpy.context.scene.objects if obj.type == "MESH"]
    if not meshes:
        raise RuntimeError(f"No mesh objects in {source}")
    bpy.context.view_layer.update()
    corners = [obj.matrix_world @ Vector(corner) for obj in meshes for corner in obj.bound_box]
    low = Vector(tuple(min(point[i] for point in corners) for i in range(3)))
    high = Vector(tuple(max(point[i] for point in corners) for i in range(3)))
    center = (low + high) * 0.5
    size = max(high - low)
    if size <= 0:
        raise RuntimeError(f"Degenerate geometry in {source}")

    scene = bpy.context.scene
    scene.render.engine = "CYCLES"
    scene.cycles.samples = 16
    scene.cycles.use_denoising = True
    scene.render.resolution_x = 640
    scene.render.resolution_y = 480
    scene.render.resolution_percentage = 100
    scene.render.image_settings.file_format = "PNG"
    scene.render.film_transparent = False
    scene.view_settings.view_transform = "AgX"
    scene.view_settings.look = "AgX - Medium High Contrast"
    scene.view_settings.exposure = -0.4
    scene.world = bpy.data.worlds.new("Preview World")
    scene.world.use_nodes = True
    scene.world.node_tree.nodes["Background"].inputs[0].default_value = (0.48, 0.44, 0.37, 1)
    scene.world.node_tree.nodes["Background"].inputs[1].default_value = 0.55

    specimen = bpy.data.materials.new("Neutral warm anatomical specimen")
    specimen.use_nodes = True
    specimen.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = linear_color((0.72, 0.36, 0.35))
    specimen.node_tree.nodes["Principled BSDF"].inputs["Roughness"].default_value = 0.48
    for obj in meshes:
        obj.data.materials.clear()
        obj.data.materials.append(specimen)

    floor = bpy.data.materials.new("Warm neutral studio floor")
    floor.diffuse_color = linear_color((0.79, 0.75, 0.66))
    floor.use_nodes = True
    floor.node_tree.nodes["Principled BSDF"].inputs["Base Color"].default_value = linear_color((0.79, 0.75, 0.66))
    floor.node_tree.nodes["Principled BSDF"].inputs["Roughness"].default_value = 0.88
    bpy.ops.mesh.primitive_plane_add(size=size * 7, location=(center.x, center.y, low.z - size * 0.04))
    bpy.context.object.name = "Studio ground"
    bpy.context.object.data.materials.append(floor)

    camera_data = bpy.data.cameras.new("Atlas Preview Camera")
    camera = bpy.data.objects.new("Atlas Preview Camera", camera_data)
    scene.collection.objects.link(camera)
    direction = Vector((0, -1, 0)) if view == "front" else Vector((1.65, -2.7, 1.55)).normalized()
    camera.location = center + direction * size * 3.1
    if view == "front":
        camera.rotation_euler = (center - camera.location).to_track_quat("-Z", "Z").to_euler()
    else:
        camera.rotation_euler = (center - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera.rotation_euler = (center - camera.location).to_track_quat("-Z", "Y").to_euler()
    camera.data.type = "ORTHO"
    camera.data.ortho_scale = size * 1.72
    scene.camera = camera

    def area(name, location, energy, size_factor, color):
        light_data = bpy.data.lights.new(name, "AREA")
        light_data.energy = energy
        light_data.shape = "DISK"
        light_data.size = size * size_factor
        light_data.color = color
        light = bpy.data.objects.new(name, light_data)
        scene.collection.objects.link(light)
        light.location = center + Vector(location) * size
        light.rotation_euler = (center - light.location).to_track_quat("-Z", "Y").to_euler()

    area("Key softbox", (2, -2, 3), 26, 2.3, (1.0, 0.93, 0.81))
    area("Cool fill", (-2, -1, 1.4), 14, 2.8, (0.77, 0.87, 1.0))
    area("Rim light", (0.3, 2.1, 2.4), 30, 1.8, (1.0, 0.88, 0.70))

    scene.render.filepath = os.path.abspath(output)
    os.makedirs(os.path.dirname(scene.render.filepath), exist_ok=True)
    bpy.ops.render.render(write_still=True)
    print(f"Rendered {source} -> {scene.render.filepath}")


if __name__ == "__main__":
    main()
