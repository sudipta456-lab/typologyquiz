"""Run: ./scripts/mac-run.sh <python3> -m unittest scripts/social/test_layout.py -v"""
import importlib.util, json, sys, tempfile, unittest
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import layout as L


def load(name, file):
    spec = importlib.util.spec_from_file_location(name, HERE / file)
    mod = importlib.util.module_from_spec(spec); spec.loader.exec_module(mod)
    return mod

geo = load('render_0923', 'render-0923.py')
drv = load('render_1011', 'render-1011-driving.py')
pilot = load('render_pilot', 'render-visual-pilot.py')
LONG_CTA = 'Find every country on the Europe map and keep your score going all week long.'


def ink_bounds(im, bg):
    """Real pixel bounds of everything that differs from a flat background."""
    return ImageChops.difference(im.convert('RGB'), Image.new('RGB', im.size, bg)).getbbox()


class FitText(unittest.TestCase):
    def test_long_cta_wraps_inside_region(self):
        region = (84, 470, 916, 900)
        block = L.fit_text(LONG_CTA, region, 75, min_size=44)
        self.assertGreater(len(block.lines), 1)
        x0, y0, x1, y1 = block.bbox
        self.assertTrue(84 <= x0 and x1 <= 916 and 470 <= y0 and y1 <= 900)

    def test_measured_box_matches_rendered_pixels(self):
        block = L.fit_text('Bratislava', (100, 100, 900, 300), 90, align='center', valign='center')
        im = Image.new('RGB', (1000, 400), 'white'); block.draw(ImageDraw.Draw(im), 'black')
        got = Image.eval(im.convert('L'), lambda v: 255 if v < 128 else 0).getbbox()
        # Pillow's horizontal box includes side bearings, so it is conservative; vertical is exact ink.
        self.assertTrue(block.bbox[0] <= got[0] and got[2] <= block.bbox[2])
        self.assertLessEqual(abs(got[1] - block.bbox[1]), 2); self.assertLessEqual(abs(got[3] - block.bbox[3]), 2)

    def test_shrinks_within_bounds(self):
        block = L.fit_text('Which country has the capital Bern please answer', (0, 0, 400, 150), 80, min_size=30)
        self.assertLess(block.size, 80); self.assertGreaterEqual(block.size, 30)

    def test_impossible_unbreakable_word_fails(self):
        with self.assertRaises(L.LayoutError) as ctx:
            L.fit_text('Pneumonoultramicroscopicsilicovolcanoconiosis', (0, 0, 300, 400), 60, min_size=40)
        self.assertIn('unbreakable', str(ctx.exception))

    def test_impossible_content_fails_instead_of_overflowing(self):
        with self.assertRaises(L.LayoutError):
            L.fit_text(' '.join(['word'] * 80), (0, 0, 300, 100), 60, min_size=40)

    def test_empty_text_fails(self):
        with self.assertRaises(L.LayoutError): L.fit_text('  ', (0, 0, 100, 100), 30)


class Collisions(unittest.TestCase):
    def test_overlapping_siblings_rejected(self):
        lay = L.Layout(); lay.add('a', (100, 200, 400, 400)); lay.add('b', (300, 300, 600, 500))
        with self.assertRaisesRegex(L.LayoutError, 'collides'): lay.check()

    def test_disjoint_regions_pass(self):
        lay = L.Layout(); lay.add('a', (100, 200, 400, 400)); lay.add('b', (100, 410, 400, 500)); lay.check()

    def test_text_inside_declared_parent_card_allowed(self):
        lay = L.Layout(); lay.add('card', (100, 200, 800, 400))
        lay.text('label', 'Inside', (130, 230, 770, 370), 50, parent='card'); lay.check()

    def test_child_escaping_parent_rejected(self):
        lay = L.Layout(); lay.add('card', (100, 200, 800, 400)); lay.add('art', (700, 350, 900, 500), parent='card')
        with self.assertRaisesRegex(L.LayoutError, 'leaves parent'): lay.check()

    def test_undeclared_containment_is_a_collision(self):
        lay = L.Layout(); lay.add('card', (100, 200, 800, 400)); lay.add('label', (150, 250, 300, 300))
        with self.assertRaises(L.LayoutError): lay.check()

    def test_outside_safe_region_rejected(self):
        lay = L.Layout(); lay.add('a', (10, 200, 400, 400))
        with self.assertRaisesRegex(L.LayoutError, 'safe region'): lay.check()

    def test_polygon_parent_rejects_text_in_the_point(self):
        tri = [(300, 740), (700, 740), (500, 1140)]  # point down
        lay = L.Layout(); lay.add('sign', (300, 740, 700, 1140), polygon=tri)
        lay.add('t', (330, 1000, 670, 1060), parent='sign')
        with self.assertRaisesRegex(L.LayoutError, 'parent shape'): lay.check()


class Cli(unittest.TestCase):
    def test_guard_fails_before_overwrite_without_flag(self):
        with tempfile.TemporaryDirectory() as t:
            target = Path(t) / 'x'; target.mkdir()
            with self.assertRaises(SystemExit): L.guard([target], False)
            L.guard([target], True); L.guard([Path(t) / 'new'], False)

    def test_defaults_are_new_layout_v2_family_folders(self):
        self.assertEqual(geo.OUT, L.WORK / '2026-10-14-layout-v2' / 'geography-0923')
        self.assertEqual(drv.OUT, L.WORK / '2026-10-14-layout-v2' / 'driving-1011')

    def test_only_selects_and_rejects_unknown(self):
        self.assertEqual([p['id'] for p in L.select(drv.POSTS, ['1011-ab-stop,1012-ab-yield'])], ['1011-ab-stop', '1012-ab-yield'])
        with self.assertRaises(SystemExit): L.select(drv.POSTS, ['nope'])

    def test_frames_only_cli_writes_and_then_refuses_overwrite(self):
        import subprocess
        with tempfile.TemporaryDirectory() as t:
            cmd = [sys.executable, str(HERE / 'render-1011-driving.py'), '--frames-only', '--output', t, '--only', '1011-ab-stop']
            self.assertEqual(subprocess.run(cmd, capture_output=True).returncode, 0)
            self.assertTrue((Path(t) / '1011-ab-stop' / '03.png').exists())
            again = subprocess.run(cmd, capture_output=True, text=True)
            self.assertNotEqual(again.returncode, 0); self.assertIn('--overwrite', again.stderr)
            self.assertEqual(subprocess.run(cmd + ['--overwrite'], capture_output=True).returncode, 0)


class GeographyScenes(unittest.TestCase):
    def test_all_ten_posts_all_scenes_fit(self):
        mark = Image.open(geo.MARK).convert('RGBA'); self.assertEqual(len(geo.POSTS), 10)
        for post in geo.POSTS:
            for kind, _ in geo.SCENES:
                with self.subTest(post=post[0], kind=kind):
                    im, lay = geo.render(post, mark, kind)
                    self.assertEqual(im.size, (1080, 1920))
                    lay.check()

    def test_every_cta_is_fully_visible_and_wrapped(self):
        mark = Image.open(geo.MARK).convert('RGBA')
        for post in geo.POSTS:
            _, lay = geo.render(post, mark, 'cta')
            cta = lay.items['cta']['bbox']; self.assertLessEqual(cta[2], 916)
            btn, txt = lay.items['button']['bbox'], lay.items['button-text']['bbox']
            self.assertTrue(btn[0] <= txt[0] and txt[2] <= btn[2])

    def test_long_cta_fixture_renders(self):
        mark = Image.open(geo.MARK).convert('RGBA'); post = list(geo.POSTS[0]); post[5] = LONG_CTA
        _, lay = geo.render(tuple(post), mark, 'cta'); lay.check()

    def test_pixels_stay_in_safe_region(self):
        mark = Image.open(geo.MARK).convert('RGBA')
        im, _ = geo.render(geo.POSTS[5], mark, 'question')
        body = im.crop((0, 40, 1080, 1920))
        x0, y0, x1, y1 = ink_bounds(body, body.getpixel((2, 2)))
        self.assertGreaterEqual(x0, 72); self.assertLessEqual(x1, 930); self.assertLessEqual(y1 + 40, 1580)


class DrivingScenes(unittest.TestCase):
    def setUp(self):
        self.logo = Image.open(drv.MARK).convert('RGBA'); self.logo.thumbnail((74, 74))

    def test_all_six_posts_all_scenes_fit(self):
        self.assertEqual(len(drv.POSTS), 6)
        for post in drv.POSTS:
            for scene in range(4):
                with self.subTest(post=post['id'], scene=scene):
                    im, lay = drv.render(post, scene, self.logo)
                    self.assertEqual(im.size, (1080, 1920)); lay.check()

    def test_yield_triangle_points_down(self):
        post = next(p for p in drv.POSTS if p['topic'] == 'YIELD SIGN')
        _, lay = drv.render(post, 0, self.logo)
        poly = lay.items['icon']['polygon']
        apex = min(poly, key=lambda p: abs(p[0] - 500))
        self.assertEqual(max(p[1] for p in poly), apex[1]); self.assertEqual(sum(1 for p in poly if p[1] == apex[1]), 1)

    def test_school_icon_is_generic_and_question_has_no_number(self):
        post = next(p for p in drv.POSTS if p['topic'] == 'SCHOOL ZONE')
        _, lay = drv.render(post, 0, self.logo)
        self.assertNotIn('icon-text', lay.items)  # no sign lettering or speed digits
        self.assertFalse(any(c.isdigit() for c in post['question']))

    def test_right_on_red_is_a_plain_red_lamp_with_no_arrow(self):
        post = next(p for p in drv.POSTS if p['topic'] == 'RIGHT ON RED')
        for scene in range(3):
            im, lay = drv.render(post, scene, self.logo)
            self.assertNotIn('arrow', lay.items)
        im, lay = drv.render(post, 0, self.logo)
        x0, y0, x1, y1 = lay.items['icon']['bbox']; card = lay.items['card']['bbox']
        # the old arrow region (right of the housing, inside the card) must be pure card white
        region = im.crop((x1 + 6, y0 + 40, card[2] - 12, y1 - 40)).convert('RGB')
        self.assertEqual(region.getcolors(10), [(region.width * region.height, (255, 255, 255))])
        # nothing teal anywhere on the artwork; no green lamp
        art = im.crop((x0, y0, x1, y1)).convert('RGB')
        self.assertFalse(any(c == (21, 122, 116) or c == (56, 161, 105) for _, c in art.getcolors(100000)))

    def test_traffic_light_has_exactly_one_lit_lamp(self):
        for topic, lit in (('RED LIGHT', (232, 91, 72)), ('RIGHT ON RED', (232, 91, 72)), ('GREEN LIGHT', (56, 161, 105))):
            post = next(p for p in drv.POSTS if p['topic'] == topic)
            im, lay = drv.render(post, 0, self.logo)
            x0, _, x1, _ = lay.items['icon']['bbox']; cx = (x0 + x1) // 2
            lamps = [im.getpixel((cx, y)) for y in (800, 950, 1100)]
            self.assertEqual(sum(1 for p in lamps if p == lit), 1, topic)
            self.assertEqual(sum(1 for p in lamps if p == (75, 85, 99)), 2, topic)

    def test_reveal_artwork_stays_inside_card(self):
        for post in drv.POSTS:
            _, lay = drv.render(post, 2, self.logo)
            card, icon = lay.items['card']['bbox'], lay.items['icon']['bbox']
            self.assertTrue(card[0] < icon[0] and icon[2] < card[2] and card[1] < icon[1] and icon[3] < card[3])

    def test_durations_and_dimensions_preserved(self):
        self.assertEqual((drv.W, drv.H, drv.FPS), (1080, 1920, 30))
        self.assertEqual([s[1] for s in geo.SCENES], [5, 3, 5, 3])


def fake_encoded(folder, stem):
    made = {}
    for path in L.encoded_artifacts(folder, stem):
        path.write_bytes(b'stale'); made[path] = (path.read_bytes(), path.stat().st_mtime_ns)
    return made


def snapshot(folder):
    return sorted((str(p.relative_to(folder)), p.stat().st_mtime_ns, p.stat().st_size if p.is_file() else -1) for p in Path(folder).rglob('*'))


class StaleEncodedGuard(unittest.TestCase):
    def run_cli(self, script, extra, out):
        import subprocess
        return subprocess.run([sys.executable, str(HERE / script), '--output', str(out), *extra], capture_output=True, text=True)

    def check(self, script, only, stem, full_sidecar):
        import os
        for sidecar in L.encoded_artifacts('.', stem):
            with tempfile.TemporaryDirectory() as t:
                (Path(t) / sidecar.name).write_bytes(b'stale'); before = snapshot(t)
                for flags in (['--frames-only'], ['--frames-only', '--overwrite']):
                    r = self.run_cli(script, [*flags, '--only', only], t)
                    self.assertNotEqual(r.returncode, 0, (sidecar.name, flags)); self.assertIn('encoded artifacts', r.stderr)
                    self.assertEqual(snapshot(t), before, 'refused run must write nothing')
                    self.assertEqual((Path(t) / sidecar.name).read_bytes(), b'stale')
        # a full render without --overwrite must also refuse on any lone sidecar (fails before writing or encoding)
        with tempfile.TemporaryDirectory() as t:
            (Path(t) / full_sidecar).write_bytes(b'stale'); before = snapshot(t)
            r = self.run_cli(script, ['--only', only], t)
            self.assertNotEqual(r.returncode, 0); self.assertIn('--overwrite', r.stderr); self.assertEqual(snapshot(t), before)

    def test_driving_cli(self): self.check('render-1011-driving.py', '1011-ab-stop', '1011-ab-stop', '1011-ab-stop.decoded.png')

    def test_geography_cli(self): self.check('render-0923.py', geo.POSTS[0][0], geo.POSTS[0][0], f'{geo.POSTS[0][0]}.decoded.png')

    def test_pilot_cli(self):
        import subprocess
        art = Image.new('RGB', (1080, 1920), (20, 30, 60))
        for sidecar in L.encoded_artifacts('.', 'alien-type-pilot'):
            with tempfile.TemporaryDirectory() as t:
                a = Path(t) / 'art.png'; art.save(a); (Path(t) / sidecar.name).write_bytes(b'stale'); before = snapshot(t)
                for extra in ([], ['--overwrite']):
                    r = subprocess.run([sys.executable, str(HERE / 'render-visual-pilot.py'), '--output', t, '--art', str(a), '--frames-only', *extra], capture_output=True, text=True)
                    self.assertNotEqual(r.returncode, 0); self.assertIn('encoded artifacts', r.stderr); self.assertEqual(snapshot(t), before)


class PilotPersistentBrand(unittest.TestCase):
    def setUp(self):
        self.mark = Image.new('RGBA', (56, 56), (255, 255, 255, 255))
        self.art = Image.new('RGB', (pilot.W, pilot.H), (20, 30, 60)); self.shade = pilot.scrim()
        self.persist = pilot.persistent_layer(self.mark)
        parts = [pilot.beat_layers(i, self.mark) for i in range(4)]
        self.shapes, self.texts = [p[0] for p in parts], [p[1] for p in parts]; self.parts = parts

    def frame(self, t, persist=True):
        pl = self.persist if persist else (Image.new('RGBA', (pilot.W, pilot.H)),) * 2
        return pilot.compose_frame(self.art, self.shade, pl, self.shapes, self.texts, t).convert('RGB')

    def test_brand_handle_and_fiction_label_visible_at_every_boundary(self):
        names = {b['name']: b['bbox'] for b in self.persist[2]}
        self.assertEqual(set(names), {'handle', 'tag'})
        mark_box = (84, 184, 84 + 56, 184 + 56)
        for t in (0.0, 3.8, 4.0, 4.2, 8.0, 12.0, 15.9):
            with_p, without = self.frame(t), self.frame(t, persist=False)
            for box in (mark_box, *names.values()):
                diff = ImageChops.difference(with_p.crop(box), without.crop(box)).getbbox()
                self.assertIsNotNone(diff, (t, box))
            # exact colours survive: yellow label, white mark at full opacity
            tag = with_p.crop(names['tag']).getcolors(100000)
            self.assertTrue(any(c == (255, 214, 90) for _, c in tag), t)
            self.assertEqual(with_p.getpixel((100, 200)), (255, 255, 255), t)

    def test_unique_content_is_blank_at_boundaries_but_brand_is_not(self):
        for k in (1, 2, 3):
            t = k * pilot.BEAT; self.assertEqual([i for i in range(4) if pilot.alpha_for(i, t) > 0.001], [])
            names = [b['name'] for part in self.parts for b in part[2]]
            self.assertFalse({'brand-mark', 'handle', 'tag'} & set(names))

    def test_brand_layer_absent_from_beat_layers_and_cta_note_is_separate(self):
        self.assertIn('not-validated', [b['name'] for b in self.parts[3][2]])
        for part in self.parts: self.assertTrue(all(r['name'] not in pilot.PERSISTENT_NAMES for r in part[3]))

    def test_all_content_inside_overlay_and_no_overlap_with_persistent(self):
        ox0, oy0, ox1, oy1 = pilot.OVERLAY
        for b in self.persist[2] + [b for part in self.parts for b in part[2]]:
            x0, y0, x1, y1 = b['bbox']; self.assertTrue(ox0 <= x0 and x1 <= ox1 and oy0 <= y0 and y1 <= oy1, b['name'])

    def test_contact_sheet_includes_exact_boundaries(self):
        import inspect
        src = inspect.getsource(pilot.contact_sheet)
        for t in ('4.0', '8.0', '12.0'): self.assertIn(t, src)


class PilotTiming(unittest.TestCase):
    def visible(self, t):
        return [i for i in range(len(pilot.BEATS)) if pilot.alpha_for(i, t) > 0.001]

    def test_at_most_one_beat_text_layer_in_all_480_frames(self):
        total = int(pilot.BEAT * len(pilot.BEATS) * pilot.FPS); self.assertEqual(total, 480)
        for n in range(total):
            self.assertLessEqual(len(self.visible(n / pilot.FPS)), 1, n)
        self.assertEqual(pilot.BEAT * len(pilot.BEATS), 16)

    def test_exact_boundary_instants_are_blank_between_fades(self):
        for k in (1, 2, 3):
            t = k * pilot.BEAT
            self.assertEqual(self.visible(t), [])  # fade-out finished, fade-in not started
            self.assertEqual(self.visible(t - 1 / pilot.FPS * 0.5 - pilot.FADE * 0.5), [k - 1])
            self.assertEqual(self.visible(t + pilot.FADE * 0.5 + 1 / pilot.FPS * 0.5), [k])
            self.assertEqual(self.visible(t - 0.01), [k - 1] if pilot.alpha_for(k - 1, t - 0.01) > 0.001 else [])
        self.assertEqual(self.visible(0.0), [0]); self.assertEqual(self.visible(16 - 1 / pilot.FPS), [3])

    def test_contrast_uses_actual_fill_luminance(self):
        art = Image.new('RGB', (pilot.W, pilot.H), (0, 0, 0))
        mark = Image.new('RGBA', (56, 56), (255, 255, 255, 255)); persist = pilot.persistent_layer(mark)
        parts = [pilot.beat_layers(i, mark) for i in range(4)]
        rep = pilot.contrast_qa(art, Image.new('RGBA', (pilot.W, pilot.H), (0, 0, 0, 0)), [p[0] for p in parts], [p[1] for p in parts], [persist[2] + p[2] for p in parts], persist[0])
        tag = next(r for r in rep if r['name'] == 'tag'); head = next(r for r in rep if r['name'] == 'headline')
        self.assertEqual(tag['text_fill_rgb'], [255, 214, 90]); self.assertEqual(head['text_fill_rgb'], [255, 255, 255])
        self.assertLess(tag['text_fill_luminance'], head['text_fill_luminance']); self.assertIn('heuristic', tag['method'])


if __name__ == '__main__':
    unittest.main()
