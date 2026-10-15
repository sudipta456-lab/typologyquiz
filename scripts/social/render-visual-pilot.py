#!/usr/bin/env python3
"""Local 16-second silent visual pilot: a FICTIONAL alien clip from generated artwork.

Hypothetical playful prompt only; it does not present exact items or results from the site.
Per-frame JPEGs (slow push-in, crossfading separately composited text), then the native
encode-video.swift. Nothing is uploaded or scheduled. Existing outputs are never overwritten
without --overwrite, and the source artwork is never written.
"""
import argparse, json, subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
sys.path.insert(0, str(Path(__file__).resolve().parent))
import layout as L

ROOT = Path(__file__).resolve().parents[2]
OUT = L.WORK / '2026-10-14-gpt-visual'
ART = OUT / 'alien-explorer.png'
W, H, FPS, BEAT, FADE = 1080, 1920, 30, 4.0, 0.4
OVERLAY = (84, 180, 914, 1550)          # all overlay text lives here
HERO = (84, 490, 914, 1330)             # reserved so artwork stays visible
YELLOW = (255, 214, 90, 255); WHITE = (255, 255, 255, 255)
PILL = (10, 12, 26, 225)
FOCAL = (0.595, 0.53)                   # the glowing artifact in the artwork
TAG = 'FICTIONAL / JUST FOR FUN'
BEATS = ['question', 'choices', 'reflection', 'cta']
TAG_REGION = (84, 1505, 914, 1550)
PERSISTENT_NAMES = ('brand-mark', 'handle', 'tag')


def _putter(lay, dt, boxes):
    def put(name, string, region, size, fill=WHITE, **kw):
        block = lay.text(name, string, region, size, **kw)
        for t, x, y in block.lines:  # offset shadow keeps text crisp over bright art
            dt.text((x + 2, y + 3), t, font=L.font(block.size, block.bold), fill=(0, 0, 0, 170), anchor='la')
        block.draw(dt, fill); boxes.append({'name': name, 'fill': list(fill[:3]), 'bbox': list(block.bbox), 'size': block.size, 'lines': [l[0] for l in block.lines], 'parent': kw.get('parent')})
        return block
    return put


def _persistent(lay, mark, shapes, text):
    """Brand mark, handle and fiction label: identical on every beat, so drawn once (see persistent_layer)."""
    boxes = []; put = _putter(lay, ImageDraw.Draw(text), boxes)
    shapes.alpha_composite(mark, (84, 184)); lay.add('brand-mark', (84, 184, 84 + mark.width, 184 + mark.height))
    put('handle', '@typologyquiz', (156, 190, 600, 240), 36, bold=False, min_size=26, valign='center')
    put('tag', TAG, TAG_REGION, 28, YELLOW, min_size=20, align='center', valign='bottom')
    return boxes


def persistent_layer(mark):
    """Return (shapes RGBA, text RGBA, text boxes) composited at full opacity for the whole clip."""
    lay = L.Layout(safe=OVERLAY, name='persistent')
    shapes = Image.new('RGBA', (W, H), (0, 0, 0, 0)); text = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    boxes = _persistent(lay, mark, shapes, text); lay.add('hero', HERO); lay.check()
    return shapes, text, boxes


def beat_layers(i, mark):
    """Return (shapes RGBA, text RGBA, text boxes, regions) for the unique content of beat i, collision-checked
    against the persistent layer. Brand mark, handle and fiction label are NOT in these layers."""
    lay = L.Layout(safe=OVERLAY, name=f'beat{i + 1}-{BEATS[i]}')
    shapes = Image.new('RGBA', (W, H), (0, 0, 0, 0)); text = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ds = ImageDraw.Draw(shapes); boxes = []; put = _putter(lay, ImageDraw.Draw(text), boxes)
    _persistent(lay, mark, Image.new('RGBA', (W, H)), Image.new('RGBA', (W, H)))  # register regions only; discard pixels
    lay.add('hero', HERO)
    top = (84, 262, 914, 480)
    if i == 0:
        put('headline', 'An unknown artifact\nlights up.', top, 66, min_size=40, valign='center')
        put('prompt', 'What do you do?', (84, 1400, 914, 1490), 56, min_size=34, valign='center')
    elif i == 1:
        put('headline', 'Examine it, or map the surroundings?', top, 62, min_size=38, valign='center')
        for k, (letter, label) in enumerate((('A', 'Examine it'), ('B', 'Map the surroundings'))):
            x0 = 84 + k * 425; box = (x0, 1340, x0 + 405, 1480); name = f'choice{k}'
            ds.rounded_rectangle(box, radius=26, fill=PILL, outline=YELLOW, width=3); lay.add(name, box)
            put(f'{name}-letter', letter, (x0 + 22, 1360, x0 + 74, 1460), 46, YELLOW, parent=name, valign='center', align='center')
            put(f'{name}-text', label, (x0 + 86, 1355, x0 + 385, 1465), 40, parent=name, min_size=26, valign='center')
    elif i == 2:
        put('headline', 'Which way did you lean?', top, 66, min_size=40, valign='center')
        put('reflection', 'Hands-on curiosity or big-picture mapping? A playful reflection, nothing more.', (84, 1370, 914, 1490), 44, min_size=28, valign='center', line_gap=1.25)
    else:
        put('headline', 'Want more playful\nalien questions?', top, 66, min_size=40, valign='center')
        box = (84, 1340, 914, 1485); ds.rounded_rectangle(box, radius=30, fill=PILL, outline=YELLOW, width=3); lay.add('cta-pill', box)
        put('cta-url', 'typologyquiz.com/trivia/alien-type/', (110, 1352, 888, 1416), 44, parent='cta-pill', min_size=24, align='center', valign='center')
        put('not-validated', 'Not validated psychology.', (110, 1426, 888, 1472), 28, YELLOW, parent='cta-pill', min_size=20, align='center', valign='center')
    lay.check()
    return shapes, text, boxes, [r for r in lay.report() if r['name'] not in PERSISTENT_NAMES]


def lum(rgb):
    def c(v):
        v /= 255; return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    return 0.2126 * c(rgb[0]) + 0.7152 * c(rgb[1]) + 0.0722 * c(rgb[2])


def scrim():
    g = Image.new('L', (1, H))
    for y in range(H):
        top = max(0, 1 - y / 560) ** 1.3 * 235; bot = max(0, (y - 1180) / 520) ** 1.2 * 245
        g.putpixel((0, y), int(min(255, max(top, bot))))
    g = g.resize((W, H)); layer = Image.new('RGBA', (W, H), (4, 5, 12, 255)); layer.putalpha(g)
    return layer


def smooth(x):
    x = min(1, max(0, x)); return x * x * (3 - 2 * x)


def alpha_for(i, t):
    """Sequential beats: fade out over the last FADE s of a beat, fade in over the first FADE s of the next.
    Both are 0 at the exact boundary, so at most one beat's text is ever visible."""
    s, e = i * BEAT, (i + 1) * BEAT
    a_in = 1.0 if i == 0 else smooth((t - s) / FADE)
    a_out = 1.0 if i == len(BEATS) - 1 else 1 - smooth((t - (e - FADE)) / FADE)
    return a_in * a_out


def faded(layer, f):
    out = layer.copy(); out.putalpha(layer.getchannel('A').point(lambda v: int(v * f))); return out


def background(art, t):
    z = 1 + 0.09 * smooth(t / (BEAT * len(BEATS))) ** 0.9  # subtle push-in toward the artifact
    w, h = W / z, H / z
    cx = W / 2 + (FOCAL[0] * W - W / 2) * (1 - 1 / z) * 1.6; cy = H / 2 + (FOCAL[1] * H - H / 2) * (1 - 1 / z) * 1.6
    x0 = min(max(cx - w / 2, 0), W - w); y0 = min(max(cy - h / 2, 0), H - h)
    return art.resize((W, H), Image.Resampling.BICUBIC, box=(x0, y0, x0 + w, y0 + h)).convert('RGBA')


def compose_frame(art, shade, persistent, shapes, texts, t):
    """One frame: art + scrim, the persistent brand layer at full opacity, then sequentially faded beat layers."""
    frame = Image.alpha_composite(background(art, t), shade)
    frame.alpha_composite(persistent[0]); frame.alpha_composite(persistent[1])
    for i in range(len(BEATS)):
        f = alpha_for(i, t)
        if f > 0.001:
            frame.alpha_composite(faded(shapes[i], f)); frame.alpha_composite(faded(texts[i], f))
    return frame


def contrast_qa(art, shade, shapes, texts, boxes, persistent_shapes=None):
    """HEURISTIC: background luminance is the ~97th percentile of a downsampled crop of the mid-beat frame
    (shapes included, text excluded); each block is scored with its own actual fill luminance."""
    report = []
    for i in range(len(BEATS)):
        base = Image.alpha_composite(background(art, i * BEAT + BEAT / 2), shade)
        if persistent_shapes is not None: base = Image.alpha_composite(base, persistent_shapes)
        base = Image.alpha_composite(base, shapes[i]).convert('RGB')
        for b in boxes[i]:
            x0, y0, x1, y1 = b['bbox']; raw = base.crop((x0, y0, x1, y1)).resize(((x1 - x0) // 4 or 1, (y1 - y0) // 4 or 1)).tobytes(); px = sorted(lum(raw[k:k + 3]) for k in range(0, len(raw), 3))
            worst = px[int(len(px) * 0.97) - 1]  # near-brightest background under the text
            fill_lum = lum(b['fill'])
            ratio = round((max(fill_lum, worst) + 0.05) / (min(fill_lum, worst) + 0.05), 2)
            report.append({'beat': BEATS[i], 'name': b['name'], 'bbox': b['bbox'], 'font_size': b['size'], 'lines': b['lines'], 'text_fill_rgb': b['fill'],
                           'text_fill_luminance': round(fill_lum, 4), 'background_luminance_p97': round(worst, 4), 'contrast_ratio': ratio, 'method': 'heuristic: conservative p97 background sample vs actual fill luminance'})
            if ratio < 4.5: raise L.LayoutError(f'beat {BEATS[i]} text {b["name"]} contrast {ratio} < 4.5 (heuristic)')
    return report


def contact_sheet(frames, path):
    times = [0.0, 2.0, 3.8, 4.0, 4.2, 6.0, 8.0, 10.0, 12.0, 12.2, 14.0, 15.9]  # exact 4/8/12s boundaries included
    sheet = Image.new('RGB', (4 * 270, 3 * 480))
    for n, t in enumerate(times):
        sheet.paste(Image.open(frames[min(len(frames) - 1, round(t * FPS))]).resize((270, 480), Image.Resampling.LANCZOS), ((n % 4) * 270, (n // 4) * 480))
    sheet.save(path, quality=90)


def main():
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output', type=Path, default=OUT); ap.add_argument('--art', type=Path, default=ART)
    ap.add_argument('--mark', type=Path, default=L.WORK / 'brand-mark.png')
    ap.add_argument('--frames-only', action='store_true', help='write frames, timeline, QA and contact sheet; skip encode')
    ap.add_argument('--overwrite', action='store_true')
    args = ap.parse_args(); out = args.output; frames_dir = out / 'frames'
    video = out / 'alien-type-pilot.mp4'
    if args.frames_only: L.guard_frames_only(L.encoded_artifacts(out, video.stem))
    targets = [frames_dir, out / 'timeline.json', out / 'typography-qa.json', out / 'contact-sheet.jpg'] + ([] if args.frames_only else L.encoded_artifacts(out, video.stem))
    if args.art.resolve() in [t.resolve() for t in targets]: raise SystemExit('output would overwrite the source artwork')
    L.guard(targets, args.overwrite)

    art = Image.open(args.art).convert('RGB'); s = max(W / art.width, H / art.height)
    art = art.resize((round(art.width * s), round(art.height * s)), Image.Resampling.LANCZOS)
    art = art.crop(((art.width - W) // 2, (art.height - H) // 2, (art.width - W) // 2 + W, (art.height - H) // 2 + H))
    mark = Image.open(args.mark).convert('RGBA'); mark.thumbnail((56, 56), Image.Resampling.LANCZOS)
    parts = [beat_layers(i, mark) for i in range(len(BEATS))]  # any layout failure aborts before writing
    shapes, texts, boxes = [p[0] for p in parts], [p[1] for p in parts], [p[2] for p in parts]
    persistent = persistent_layer(mark); persistent_regions = [b['bbox'] for b in persistent[2]]; shade = scrim()
    typography = contrast_qa(art, shade, shapes, texts, [persistent[2] + b for b in boxes], persistent[0])

    out.mkdir(parents=True, exist_ok=True); frames_dir.mkdir(exist_ok=True)
    for old in frames_dir.glob('f*.jpg'): old.unlink()
    total = int(BEAT * len(BEATS) * FPS); paths = []
    for n in range(total):
        frame = compose_frame(art, shade, persistent, shapes, texts, n / FPS)
        p = frames_dir / f'f{n:04d}.jpg'; frame.convert('RGB').save(p, quality=93, subsampling=0); paths.append(p)
    (out / 'timeline.json').write_text(json.dumps({'width': W, 'height': H, 'fps': FPS, 'scenes': [{'image': str(p), 'duration': 1 / FPS} for p in paths]}))
    contact_sheet(paths, out / 'contact-sheet.jpg')
    qa = {'overlay_safe_region': list(OVERLAY), 'hero_reserved_region': list(HERO), 'size': [W, H], 'fps': FPS, 'duration_seconds': total / FPS, 'beats': BEATS, 'fiction_label': TAG, 'persistent_layer': {'items': list(PERSISTENT_NAMES), 'opacity': 1.0, 'text_boxes': persistent_regions},
          'cta': 'typologyquiz.com/trivia/alien-type/', 'artwork': str(args.art), 'text': typography, 'regions': {BEATS[i]: parts[i][3] for i in range(len(BEATS))}, 'status': 'frames_only_local' if args.frames_only else 'encoded_local_only'}
    (out / 'typography-qa.json').write_text(json.dumps(qa, indent=2))
    if not args.frames_only:
        subprocess.run([str(L.ensure_encoder(out, ROOT)), str(out / 'timeline.json'), str(video)], check=True)
        native = json.loads(video.with_suffix('.qa.json').read_text())  # native encoder report stays at alien-type-pilot.qa.json, untouched
        if native.get('frames_written') != total or native.get('audio_tracks') != 0: raise SystemExit(f'native QA unexpected: {native}')
    print(json.dumps({'frames': total, 'video': None if args.frames_only else str(video), 'qa': str(out / 'typography-qa.json')}, indent=2))


if __name__ == '__main__': main()
