#!/usr/bin/env python3
"""Three cinematic Alberta driving quiz clips. Local production only; no account actions.

Reads the brief JSON, pans/zooms the original GPT artwork gently, and draws
separately measured type (layout.py) in five timed phases. Renders 15 unique
stills per second; the native encoder holds each for 1/15 s (2 frames at 30 fps).
Never overwrites an existing output folder. No upload, schedule or publish.
"""
import argparse, hashlib, json, math, subprocess
from pathlib import Path
from PIL import Image, ImageDraw
import layout as L

ROOT = Path(__file__).resolve().parents[2]
BRIEF = ROOT / 'docs/growth/tiktok/2026-10-15-driving-cinematic-brief.json'
OUT = L.WORK / '2026-10-15-driving-cinematic'
W, H, FPS, UNIQUE_FPS, LENGTH = 1080, 1920, 30, 15, 22
PHASES = [3, 5, 2, 8, 4]
STARTS = [sum(PHASES[:i]) for i in range(5)]
SAFE = (72, 170, 930, 1580)
HERO = (72, 600, 930, 1110)
CREAM, TEAL, NAVY, CARD = '#fff9ed', '#6be1cf', (7, 17, 31), '#0f2742'
FOOTER = 'Original AI illustration · Unofficial practice'
SOURCE = 'Source: Alberta Driver’s Guide'
AWARENESS_SOURCE = 'Unofficial driving practice'
ART_NOTE = 'Showroom illustration'
REQUIRED = ['id', 'art', 'topic', 'hook', 'question', 'choices', 'answer', 'detail', 'caption', 'route', 'publication']
AWARENESS_REQUIRED = ['id', 'kind', 'art', 'topic', 'hook', 'question', 'features', 'answer', 'detail', 'caption', 'route', 'publication']


def is_awareness(post): return post.get('kind') == 'awareness'


def needs_art_note(post): return Path(post['art']).stem == 'hill-parking'


def sha(path): return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def phase_of(t): return max(i for i, s in enumerate(STARTS) if t >= s)


def countdown_digit(t): return 2 if t - STARTS[2] < 1 else 1


def scrim():
    """Solid navy gradient panels above/below the hero window; hero rows stay clear."""
    im = Image.new('RGBA', (W, H)); d = ImageDraw.Draw(im)
    for y in range(H):
        if y < 550: a, k = 255, y / 550
        elif y < 600: a, k = round(255 * (600 - y) / 50), 1
        elif y <= 1110: a, k = 0, 1
        elif y < 1160: a, k = round(255 * (y - 1110) / 50), 0
        else: a, k = 255, (y - 1160) / (H - 1160)
        base = (round(10 + 14 * (1 - k)), round(28 + 18 * (1 - k)), round(48 + 20 * (1 - k))) if y < 1110 else (round(8 + 10 * (1 - k)), round(20 + 14 * (1 - k)), round(38 + 12 * (1 - k)))
        d.line((0, y, W, y), fill=base + (a,))
    return im


def background(art, t):
    zoom = 1.04 + .06 * (t / LENGTH)
    aw, ah = art.size
    bw, bh = aw / zoom, ah / zoom
    cx = aw / 2 + (t / LENGTH - .5) * 0.03 * aw
    cy = ah / 2 + (.5 - t / LENGTH) * 0.015 * ah
    cx = min(max(cx, bw / 2), aw - bw / 2); cy = min(max(cy, bh / 2), ah - bh / 2)
    box = (cx - bw / 2, cy - bh / 2, cx + bw / 2, cy + bh / 2)
    return art.resize((W, H), Image.Resampling.BICUBIC, box=box).convert('RGBA')


def build_state(post, phase, digit, mark):
    """Overlay + measured text for one visible state. Raises LayoutError on any collision."""
    lay = L.Layout(safe=SAFE, name=f'{post["id"]}/phase{phase}' + (f'/digit{digit}' if digit else ''))
    im = Image.new('RGBA', (W, H)); d = ImageDraw.Draw(im)
    boxes = []

    def text(name, value, box, size, color=CREAM, min_size=30, parent=None, **kw):
        block = lay.text(name, value, box, size, min_size=min_size, parent=parent, **kw)
        block.draw(d, color)
        boxes.append({'name': name, 'text': value, 'bbox': list(block.bbox), 'font_size': block.size, 'min_size': min_size})
        return block

    def card(name, box):
        d.rounded_rectangle(box, radius=22, fill=CARD, outline=TEAL, width=3)
        lay.add(name, box)

    im.alpha_composite(mark, (84, 182)); lay.add('brand', (84, 182, 140, 238))
    text('handle', '@typologyquiz', (160, 184, 900, 240), 34, bold=False)
    text('topic', post['topic'], (84, 264, 914, 310), 28, TEAL, min_size=24, bold=True)
    lay.add('hero-reserved', HERO)
    awareness = is_awareness(post)
    A, B = post['features'] if awareness else post['choices']
    top = (84, 340, 914, 402); main = (84, 414, 914, 550)

    def source_row(value, color=TEAL):
        text('source', value, (84, 1400, 914, 1455), 36, color, min_size=32, bold=True, valign='center')
        if needs_art_note(post):
            text('art-note', ART_NOTE, (84, 1462, 914, 1502), 28, CREAM, min_size=24, bold=False, valign='center')

    source = AWARENESS_SOURCE if awareness else SOURCE
    if phase == 0:
        text('hook', post['hook'], top, 52, TEAL, bold=True, valign='center')
        text('question', post['question'], main, 48, bold=True, valign='center')
    elif awareness and phase in (1, 2):
        text('label', 'Find your practice lane' if phase == 1 else 'Practise at your pace', top, 44, TEAL, bold=True, valign='center')
        text('prompt', 'Choose your province or state' if phase == 1 else 'Pick a set. Get started.', main, 48, bold=True, valign='center')
        if phase == 1:
            for key, feature, y in (('a', A, 1170), ('b', B, 1285)):
                card(f'feature-{key}-card', (84, y, 914, y + 100))
                text(f'feature-{key}', feature, (116, y + 10, 882, y + 90), 40, parent=f'feature-{key}-card', bold=True, valign='center')
    elif phase in (1, 2):
        text('label', 'Your call:' if phase == 1 else 'Lock in your guess.', top, 44, TEAL, bold=True, valign='center')
        text('question', post['question'], main, 48, bold=True, valign='center')
        for key, choice, y in (('a', A, 1170), ('b', B, 1285)):
            card(f'choice-{key}-card', (84, y, 914, y + 100))
            text(f'choice-{key}', choice, (116, y + 10, 882, y + 90), 44, parent=f'choice-{key}-card', bold=True, valign='center')
        if phase == 1:
            text('hint', 'Pick A or B before the timer starts.', (84, 1415, 914, 1485), 38, TEAL, bold=False, valign='center')
        else:
            card('countdown-card', (84, 1405, 914, 1500))
            text('countdown-digit', str(digit), (110, 1412, 190, 1494), 72, TEAL, parent='countdown-card', bold=True, align='center', valign='center')
            text('countdown-label', 'Reveal in…', (216, 1415, 500, 1470), 40, parent='countdown-card', bold=True, valign='center')
            lay.add('countdown-bar', (216, 1478, 888, 1490), parent='countdown-card')
            d.rounded_rectangle((216, 1478, 888, 1490), radius=6, fill='#314153')
    elif phase == 3:
        text('label', 'Practice, then understand' if awareness else 'Correct answer', top, 44, TEAL, bold=True, valign='center')
        text('answer', post['answer'], main, 56, bold=True, valign='center')
        text('detail', post['detail'], (84, 1170, 914, 1380), 46, bold=False, valign='center', line_gap=1.25)
        source_row(source)
    elif awareness:
        text('label', 'Keep practising', top, 44, TEAL, bold=True, valign='center')
        text('headline', 'Driving practice quizzes', main, 56, bold=True, valign='center')
        text('domain', 'TypologyQuiz.com', (84, 1170, 914, 1270), 76, TEAL, bold=True, valign='center')
        text('path', '/driving', (84, 1285, 914, 1355), 54, bold=True, valign='center')
        source_row(source, CREAM)
    else:
        text('label', 'Keep practising', top, 44, TEAL, bold=True, valign='center')
        text('headline', 'Alberta Class 7 practice questions', main, 56, bold=True, valign='center')
        text('domain', 'TypologyQuiz.com', (84, 1170, 914, 1270), 76, TEAL, bold=True, valign='center')
        text('path', '/driving/alberta', (84, 1285, 914, 1355), 54, bold=True, valign='center')
        source_row(source, CREAM)
    text('footer', FOOTER, (84, 1528, 914, 1574), 30, TEAL, min_size=26, bold=False, align='center', valign='center')
    lay.check()
    return im, boxes, lay


def prepare(post, mark):
    states = {}
    for phase in range(5):
        for digit in ((2, 1) if phase == 2 and not is_awareness(post) else (None,)):
            states[(phase, digit)] = build_state(post, phase, digit, mark)
    # No answer leakage: detail and the "Correct answer" label are phase-3 only.
    for (phase, _), (_, boxes, _) in states.items():
        if phase < 3:
            for b in boxes:
                if post['detail'] in b['text'] or 'correct' in b['text'].lower():
                    raise RuntimeError(f'{post["id"]}: answer leak in phase {phase}: {b["text"]}')
    return states


def write_reports(folder, post, states):
    reports = []
    for phase in range(5):
        keys = [k for k in states if k[0] == phase]
        typo = {'status': 'measured_layout_pass', 'phase': phase, 'start_s': STARTS[phase], 'end_s': STARTS[phase] + PHASES[phase], 'safe': list(SAFE),
                'states': [{'countdown_digit': k[1], 'texts': states[k][1]} for k in keys]}
        lay = {'status': 'no_collisions', 'phase': phase, 'safe': list(SAFE), 'hero_reserved': list(HERO),
               'states': [{'countdown_digit': k[1], 'regions': states[k][2].report()} for k in keys]}
        for kind, data in (('typography', typo), ('layout', lay)):
            p = folder / f'phase{phase}-{kind}.json'; p.write_text(json.dumps(data, indent=2)); reports.append(str(p))
    return reports


def run(output, frames_only=False):
    L.guard([output], False)
    brief = json.loads(BRIEF.read_text())
    for post in brief:
        missing = [k for k in (AWARENESS_REQUIRED if is_awareness(post) else REQUIRED) if k not in post]
        if missing: raise SystemExit(f'{post.get("id")}: brief missing {missing}')
        if not Path(post['art']).is_file(): raise SystemExit(f'{post["id"]}: art not found {post["art"]}')
        if len(post['features' if is_awareness(post) else 'choices']) != 2: raise SystemExit(f'{post["id"]}: need exactly two {"features" if is_awareness(post) else "choices"}')
    output.mkdir(parents=True)
    mark = Image.open(L.WORK / 'brand-mark.png').convert('RGBA').resize((56, 56), Image.Resampling.LANCZOS)
    mask = scrim()
    encoder = None if frames_only else L.ensure_encoder(output, ROOT)
    manifest = []
    for post in brief:
        folder = output / post['id']; frames = folder / 'frames'; frames.mkdir(parents=True)
        art = Image.open(post['art']).convert('RGB')
        states = prepare(post, mark)
        reports = write_reports(folder, post, states)
        timeline, picks = [], {}
        sample_t = [1.5, 5.5, 8.5, 13.5, 19.5]
        sample_n = {round(t * UNIQUE_FPS): i for i, t in enumerate(sample_t)}
        poster_n = round(6.0 * UNIQUE_FPS)
        for n in range(LENGTH * UNIQUE_FPS):
            t = n / UNIQUE_FPS; phase = phase_of(t)
            overlay = states[(phase, countdown_digit(t) if phase == 2 and not is_awareness(post) else None)][0]
            im = Image.alpha_composite(Image.alpha_composite(background(art, t), mask), overlay)
            if phase == 2 and not is_awareness(post):
                u = (t - STARTS[2]) / PHASES[2]
                ImageDraw.Draw(im).rounded_rectangle((216, 1478, 216 + max(12, round(672 * u)), 1490), radius=6, fill=TEAL)
            path = frames / f'f{n:04d}.jpg'; im.convert('RGB').save(path, quality=92, subsampling=0)
            timeline.append({'image': str(path), 'duration': 1 / UNIQUE_FPS})
            if n in sample_n: picks[sample_n[n]] = path
            if n == poster_n: poster_src = path
        (folder / 'timeline.json').write_text(json.dumps({'width': W, 'height': H, 'fps': FPS, 'scenes': timeline}))
        sheet = Image.new('RGB', (270 * 5, 480))
        for i in range(5): sheet.paste(Image.open(picks[i]).resize((270, 480), Image.Resampling.LANCZOS), (270 * i, 0))
        sheet.save(folder / 'contact-sheet.jpg', quality=90)
        poster = folder / 'poster.jpg'; Image.open(poster_src).save(poster, quality=95, subsampling=0)
        (folder / 'caption.txt').write_text(post['caption'] + '\n')
        video = output / (post['id'] + '.mp4'); qa = output / (post['id'] + '.qa.json'); decoded = output / (post['id'] + '.decoded.png')
        native = None
        if encoder:
            subprocess.run([str(encoder), str(folder / 'timeline.json'), str(video)], check=True)
            native = json.loads(qa.read_text())
            expected = {'width': W, 'height': H, 'fps': FPS, 'frames_written': FPS * LENGTH, 'audio_tracks': 0}
            for key, value in expected.items():
                if native.get(key) != value: raise RuntimeError(f'{post["id"]}: native {key}: {native.get(key)} != {value}')
            if abs(native.get('duration_seconds', 0) - LENGTH) > .05: raise RuntimeError(f'{post["id"]}: native duration {native.get("duration_seconds")}')
        manifest.append({**post, 'video': str(video) if encoder else None, 'sha256': sha(video) if encoder else None,
                         'qa_report': str(qa) if encoder else None, 'decoded_frame': str(decoded) if encoder else None, 'native_qa': native,
                         'contact_sheet': str(folder / 'contact-sheet.jpg'), 'poster': str(poster), 'caption_file': str(folder / 'caption.txt'),
                         'timeline': str(folder / 'timeline.json'), 'reports': reports,
                         'source_art_sha256': sha(post['art']), 'poster_sha256': sha(poster), 'caption_sha256': sha(folder / 'caption.txt'),
                         'size': [W, H], 'fps': FPS, 'duration_seconds': LENGTH, 'frames': FPS * LENGTH, 'unique_frames': LENGTH * UNIQUE_FPS,
                         'phases_seconds': PHASES, 'audio_tracks': 0, 'render_state': 'frames_only' if frames_only else 'encoded'})
    (output / 'manifest.json').write_text(json.dumps(manifest, indent=2))
    print(json.dumps({'prepared': len(manifest), 'frames_only': frames_only, 'manifest': str(output / 'manifest.json')}))


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output', type=Path, default=OUT, help='new output folder (never overwritten)')
    ap.add_argument('--frames-only', action='store_true', help='render stills, reports and sheets; skip encoding')
    args = ap.parse_args(); run(args.output, args.frames_only)
