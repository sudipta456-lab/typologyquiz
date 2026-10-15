#!/usr/bin/env python3
"""Thirteen repaired quiz clips for the old TikTok queue. Local production only; no account actions.

Reads the repair brief (never modifies it), draws original code-native vector cards with
separately measured type (layout.py) in five static timed scenes, and encodes with the
native H.264 encoder. Never overwrites an existing output folder or any original video.
No upload, schedule or publish. Reflection items never mark a right answer.
"""
import argparse, hashlib, json, re, subprocess
from pathlib import Path
from urllib.parse import urlparse
from PIL import Image, ImageDraw
import layout as L

ROOT = Path(__file__).resolve().parents[2]
BRIEF = ROOT / 'docs/growth/tiktok/2026-10-15-old-queue-repair-brief.json'
OUT = L.WORK / '2026-10-15-queue-repairs-v2'
V1 = L.WORK / '2026-10-15-queue-repairs'
W, H, FPS, LENGTH = 1080, 1920, 30, 22
PHASES = [3, 5, 2, 8, 4]
STARTS = [sum(PHASES[:i]) for i in range(5)]
SCENES = [(0, None, 3), (1, None, 5), (2, 2, 1), (2, 1, 1), (3, None, 8), (4, None, 4)]  # (phase, countdown digit, seconds)
SAFE = (72, 170, 930, 1580)
HERO = (84, 620, 914, 1090)
CREAM, NAVY_CARD = '#fff9ed', '#0f2742'
ACCENTS = {'chem': '#6be1cf', 'space': '#b9a7ff', 'geo': '#ffd777', 'reflect': '#ff9d8a'}
BRAND_MARK = L.WORK / 'brand-mark.png'
REQUIRED = ['id', 'route', 'caption', 'question', 'choices', 'answer', 'explanation', 'source', 'original_video', 'original_sha256', 'original_caption',
            'sources_checked_local_date', 'existing_url', 'existing_publish_at', 'publication', 'state']
DOMAIN = 'typologyquiz.com'
TOPICS = {'periodic-table-first-20': 'Periodic table', 'mini-ipip': 'Reflection prompt', 'us-state-capitals': 'US state capitals',
          'planets': 'Planets', 'find-the-countries-of-europe': 'Europe countries', 'countries-of-europe': 'Europe countries'}


def sha(path): return hashlib.sha256(Path(path).read_bytes()).hexdigest()


def is_reflect(post): return post.get('kind') == 'reflection'


def route_path(post): return urlparse(post['route']).path


def slug(post): return route_path(post).strip('/').split('/')[-1]


def topic(post): return TOPICS[slug(post)].upper()


def accent(post):
    if is_reflect(post): return ACCENTS['reflect']
    return ACCENTS['chem'] if slug(post).startswith('periodic') else ACCENTS['space'] if slug(post) == 'planets' else ACCENTS['geo']


def source_label(post):
    u = urlparse(post['source']); host = u.netloc.replace('www.', '')
    return 'Source: ' + host + (u.path.rstrip('/') if host == DOMAIN else '')


def footer(post): return 'Original vector card · Reflection, not a diagnosis' if is_reflect(post) else 'Original vector card · Unofficial practice'


def caption(post): return post['caption']  # brief caption used verbatim


def background(color):
    im = Image.new('RGB', (W, H)); d = ImageDraw.Draw(im)
    for y in range(H):
        k = y / H
        d.line((0, y, W, y), fill=(round(10 + 4 * k), round(26 - 6 * k), round(46 - 8 * k)))
    lay = Image.new('RGBA', (W, H)); ld = ImageDraw.Draw(lay)
    for cx, cy, r in ((980, 120, 330), (60, 1780, 380)):
        for i in range(4):
            ld.ellipse((cx - r + i * 70, cy - r + i * 70, cx + r - i * 70, cy + r - i * 70), outline=color + '30', width=4)
    return Image.alpha_composite(im.convert('RGBA'), lay)


def build_state(post, phase, digit, mark, bg, color):
    """One static scene: background + measured text. Raises LayoutError on any collision."""
    lay = L.Layout(safe=SAFE, name=f'{post["id"]}/phase{phase}' + (f'/digit{digit}' if digit else ''))
    im = bg.copy(); d = ImageDraw.Draw(im); boxes = []
    reflect = is_reflect(post)
    A, B = post['choices']

    def text(name, value, box, size, fill=CREAM, min_size=30, parent=None, **kw):
        block = lay.text(name, value, box, size, min_size=min_size, parent=parent, **kw)
        block.draw(d, fill)
        boxes.append({'name': name, 'text': value, 'bbox': list(block.bbox), 'font_size': block.size, 'min_size': min_size})
        return block

    def card(name, box, outline=None, parent=None):
        d.rounded_rectangle(box, radius=22, fill=NAVY_CARD, outline=outline or color, width=3)
        lay.add(name, box, parent)

    im.alpha_composite(mark, (84, 182)); lay.add('brand', (84, 182, 140, 238))
    text('handle', '@typologyquiz', (160, 184, 900, 240), 34, bold=False)
    text('topic', topic(post), (84, 264, 914, 310), 28, color, min_size=24, bold=True)
    top = (84, 340, 914, 402)
    hero = lambda: card('hero-card', HERO)
    hero_region = (116, 650, 882, 1060)

    if phase == 0:
        text('label', 'Quick reflection' if reflect else 'Quick question', top, 48, color, bold=True, valign='center')
        hero(); text('question', post['question'], hero_region, 76, parent='hero-card', bold=True, valign='center', min_size=44)
    elif phase in (1, 2):
        text('label', 'Your call:' if phase == 1 else ('Lock in your pick.' if reflect else 'Lock in your guess.'), top, 48, color, bold=True, valign='center')
        hero(); text('question', post['question'], hero_region, 68, parent='hero-card', bold=True, valign='center', min_size=44)
        for key, choice, y in (('a', A, 1170), ('b', B, 1285)):
            card(f'choice-{key}-card', (84, y, 914, y + 100))
            d.ellipse((104, y + 20, 164, y + 80), fill=color); lay.add(f'choice-{key}-badge', (104, y + 20, 164, y + 80), parent=f'choice-{key}-card')
            text(f'choice-{key}-letter', key.upper(), (104, y + 20, 164, y + 80), 40, '#0a1a2e', min_size=30, parent=f'choice-{key}-badge', bold=True, align='center', valign='center')
            text(f'choice-{key}', choice, (190, y + 10, 890, y + 90), 44, parent=f'choice-{key}-card', bold=True, valign='center')
        if phase == 1:
            text('hint', 'Pick A or B before the timer starts.', (84, 1415, 914, 1485), 38, color, bold=False, valign='center')
        else:
            card('countdown-card', (84, 1405, 914, 1500))
            text('countdown-digit', str(digit), (110, 1412, 190, 1494), 72, color, parent='countdown-card', bold=True, align='center', valign='center')
            text('countdown-label', 'Reveal in…', (216, 1415, 500, 1470), 40, parent='countdown-card', bold=True, valign='center')
            lay.add('countdown-bar', (216, 1478, 888, 1490), parent='countdown-card')
            d.rounded_rectangle((216, 1478, 888, 1490), radius=6, fill='#314153')
            d.rounded_rectangle((216, 1478, 216 + (336 if digit == 2 else 672), 1490), radius=6, fill=color)
    elif phase == 3:
        text('label', 'No right answer' if reflect else 'Correct answer', top, 48, color, bold=True, valign='center')
        hero(); text('answer', post['answer'], hero_region, 84, parent='hero-card', bold=True, valign='center', min_size=48)
        text('detail', post['explanation'], (84, 1170, 914, 1335), 46, bold=False, valign='center', line_gap=1.25, min_size=34)
        if reflect:
            text('disclaimer', 'Not a diagnosis.', (84, 1340, 914, 1392), 40, color, min_size=32, bold=True, valign='center')
        text('source', source_label(post), (84, 1400, 914, 1455), 36, color, min_size=26, bold=True, valign='center')
    else:
        text('label', 'Explore more' if reflect else 'Keep practising', top, 48, color, bold=True, valign='center')
        hero(); text('headline', 'Explore the full Mini-IPIP self-report quiz' if reflect else 'Want more questions like this?', hero_region, 72, parent='hero-card', bold=True, valign='center', min_size=44)
        text('cta-lead', 'Visit in your browser:', (84, 1130, 914, 1172), 34, color, min_size=28, bold=False, valign='center')
        text('domain', DOMAIN, (84, 1178, 914, 1268), 80, color, min_size=56, bold=True, valign='center')
        path = route_path(post)
        try:
            text('path', path, (84, 1276, 914, 1396), 54, min_size=44, bold=True, valign='center')
        except L.LayoutError:
            head, _, tail = path.rstrip('/').rpartition('/')
            text('path', head + '/\n' + tail + ('/' if path.endswith('/') else ''), (84, 1276, 914, 1396), 46, min_size=36, bold=True, valign='center', line_gap=1.15)
        text('source', source_label(post), (84, 1424, 914, 1480), 32, CREAM, min_size=26, bold=True, valign='center')
    text('footer', footer(post), (84, 1528, 914, 1574), 30, color, min_size=24, bold=False, align='center', valign='center')
    lay.check()
    return im.convert('RGB'), boxes, lay


def prepare(post, mark):
    color = accent(post); bg = background(color); states = {}
    for phase, digit, _ in SCENES:
        states[(phase, digit)] = build_state(post, phase, digit, mark, bg, color)
    for (phase, _), (_, boxes, _) in states.items():
        joined = ' '.join(b['text'] for b in boxes).lower()
        if phase < 3 and (post['explanation'].lower() in joined or 'correct' in joined or 'no right answer' in joined):
            raise RuntimeError(f'{post["id"]}: answer leak in phase {phase}')
        if is_reflect(post):
            if 'correct' in joined: raise RuntimeError(f'{post["id"]}: reflection must never say correct (phase {phase})')
            if phase == 3 and not ('no right answer' in joined and 'not a diagnosis' in joined):
                raise RuntimeError(f'{post["id"]}: reflection reveal missing no-right-answer/not-diagnosis')
            if phase == 3:
                shown = {b['name']: b['text'].lower().strip(' .') for b in boxes}
                for name in ('answer', 'detail'):
                    for c in post['choices']:
                        cl = c.lower()
                        if shown[name] == cl or cl in shown[name]:
                            raise RuntimeError(f'{post["id"]}: reflection reveal {name} text names choice {c!r}')
    return states


def reflection_guard(post):
    """Reflection answer and explanation must say there is no right answer and never equal or name a choice."""
    if not is_reflect(post): return
    ans, det = post['answer'].lower(), post['explanation'].lower()
    if 'no right answer' not in ans: raise RuntimeError(f'{post["id"]}: reflection answer must say there is no right answer')
    for c in post['choices']:
        cl = c.lower()
        if ans.strip(' .') == cl or cl in ans or cl in det:
            raise RuntimeError(f'{post["id"]}: reflection answer/explanation reveals choice {c!r}')


def validate(brief):
    if len(brief) != 13: raise SystemExit(f'expected 13 entries, found {len(brief)}')
    if len({p['id'] for p in brief}) != 13: raise SystemExit('duplicate ids')
    for p in brief:
        missing = [k for k in REQUIRED if k not in p]
        if missing: raise SystemExit(f'{p.get("id")}: brief missing {missing}')
        if len(p['choices']) != 2: raise SystemExit(f'{p["id"]}: need exactly two choices')
        if any(p['publication'].get(k) is not False for k in ('uploaded', 'scheduled', 'published')) or set(p['publication']) != {'uploaded', 'scheduled', 'published'}:
            raise SystemExit(f'{p["id"]}: publication states must all be false')
        if is_reflect(p):
            reflection_guard(p)
        elif p['answer'].lower() not in [c.lower() for c in p['choices']]:
            raise SystemExit(f'{p["id"]}: answer is not one of the choices')
        if slug(p) not in TOPICS: raise SystemExit(f'{p["id"]}: no topic label for {slug(p)}')
        if not p['caption'].strip() or p['route'] not in p['caption']: raise SystemExit(f'{p["id"]}: caption must contain its route')


def write_reports(folder, post, states):
    reports = []
    for phase in range(5):
        keys = [k for k in states if k[0] == phase]
        typo = {'status': 'measured_layout_pass', 'phase': phase, 'start_s': STARTS[phase], 'end_s': STARTS[phase] + PHASES[phase], 'safe': list(SAFE),
                'states': [{'countdown_digit': k[1], 'texts': states[k][1]} for k in keys]}
        lay = {'status': 'no_collisions', 'phase': phase, 'safe': list(SAFE),
               'states': [{'countdown_digit': k[1], 'regions': states[k][2].report()} for k in keys]}
        for kind, data in (('typography', typo), ('layout', lay)):
            p = folder / f'phase{phase}-{kind}.json'; p.write_text(json.dumps(data, indent=2)); reports.append(str(p))
    return reports


def inject_bad_reflection(brief, mark):
    """In-memory proof that both guards reject a bad reflection (answer names a choice, no 'no right answer'). Writes nothing."""
    bad = dict(next(p for p in brief if is_reflect(p)), answer='A familiar plan')
    for name, fn in (('reflection_guard', lambda: reflection_guard(bad)), ('render check', lambda: prepare(bad, mark))):
        try: fn()
        except RuntimeError as e: print(f'injected bad reflection rejected by {name}: {e}')
        else: raise SystemExit(f'injected bad reflection was NOT rejected by {name}')


def run(output, frames_only=False, only=(), inject=False):
    brief = json.loads(BRIEF.read_text()); brief_hash = sha(BRIEF)
    validate(brief)
    mark = Image.open(BRAND_MARK).convert('RGBA').resize((56, 56), Image.Resampling.LANCZOS)
    if inject: return inject_bad_reflection(brief, mark)
    originals = {p['id']: (Path(p['original_video']), p['original_sha256']) for p in brief}
    out = output.resolve()
    if out == V1.resolve(): raise SystemExit('refusing v1 output folder')
    for pid, (path, expect) in originals.items():
        if not path.is_file(): raise SystemExit(f'{pid}: original video missing: {path}')
        if sha(path) != expect: raise SystemExit(f'{pid}: original sha256 mismatch: {path}')
        if path.resolve().is_relative_to(out):
            raise SystemExit(f'{pid}: output folder would contain an original video')
    if only: brief = L.select(brief, list(only))
    targets = [output, output / 'manifest.json']
    for p in brief:
        targets += [output / p['id'], *L.encoded_artifacts(output, p['id'])]
    if not frames_only: targets.append(output / 'encode-video')
    for t in targets:
        if t.resolve() in {o[0].resolve() for o in originals.values()}: raise SystemExit(f'output path collides with an original: {t}')
    L.guard(targets, False)
    prepared = {p['id']: prepare(p, mark) for p in brief}  # all layout/leak checks pass in memory before any write
    output.mkdir(parents=True)
    encoder = None if frames_only else L.ensure_encoder(output, ROOT)
    manifest = []
    for post in brief:
        folder = output / post['id']; scenes = folder / 'scenes'; scenes.mkdir(parents=True)
        states = prepared[post['id']]
        reports = write_reports(folder, post, states)
        timeline, files = [], {}
        for phase, digit, secs in SCENES:
            path = scenes / (f'phase{phase}' + (f'-digit{digit}' if digit else '') + '.png'); states[(phase, digit)][0].save(path)
            files[(phase, digit)] = path; timeline.append({'image': str(path), 'duration': secs})
        assert sum(s['duration'] for s in timeline) == LENGTH
        (folder / 'timeline.json').write_text(json.dumps({'width': W, 'height': H, 'fps': FPS, 'scenes': timeline}, indent=2))
        sheet = Image.new('RGB', (270 * 6, 480))
        for i, (phase, digit, _) in enumerate(SCENES): sheet.paste(Image.open(files[(phase, digit)]).resize((270, 480), Image.Resampling.LANCZOS), (270 * i, 0))
        sheet.save(folder / 'contact-sheet.jpg', quality=90)
        poster = folder / 'poster.jpg'; Image.open(files[(1, None)]).save(poster, quality=95, subsampling=0)
        (folder / 'caption.txt').write_text(caption(post) + '\n')
        video = output / (post['id'] + '.mp4'); qa = output / (post['id'] + '.qa.json'); decoded = output / (post['id'] + '.decoded.png')
        native = None
        if encoder:
            subprocess.run([str(encoder), str(folder / 'timeline.json'), str(video)], check=True)
            native = json.loads(qa.read_text())
            expected = {'width': W, 'height': H, 'fps': FPS, 'frames_written': FPS * LENGTH, 'audio_tracks': 0}
            for key, value in expected.items():
                if native.get(key) != value: raise RuntimeError(f'{post["id"]}: native {key}: {native.get(key)} != {value}')
            if abs(native.get('duration_seconds', 0) - LENGTH) > .05: raise RuntimeError(f'{post["id"]}: native duration {native.get("duration_seconds")}')
        path, expect = originals[post['id']]
        if not path.is_file() or sha(path) != expect: raise RuntimeError(f'{post["id"]}: original video changed or missing')
        if encoder and video.resolve() == path.resolve(): raise RuntimeError('output collides with original')
        manifest.append({'id': post['id'], 'kind': post.get('kind', 'factual'), 'route': post['route'], 'question': post['question'], 'choices': post['choices'],
                         'answer': post['answer'], 'explanation': post['explanation'], 'source': post['source'],
                         'sources_checked_local_date': post['sources_checked_local_date'], 'caption': caption(post), 'original_caption': post['original_caption'],
                         'existing_url': post['existing_url'], 'existing_publish_at': post['existing_publish_at'],
                         'caption_file': str(folder / 'caption.txt'), 'caption_sha256': sha(folder / 'caption.txt'),
                         'video': str(video) if encoder else None, 'sha256': sha(video) if encoder else None,
                         'qa_report': str(qa) if encoder else None, 'decoded_frame': str(decoded) if encoder else None, 'native_qa': native,
                         'contact_sheet': str(folder / 'contact-sheet.jpg'), 'poster': str(poster), 'poster_sha256': sha(poster),
                         'timeline': str(folder / 'timeline.json'), 'reports': reports,
                         'original_video': str(path), 'original_sha256': expect, 'original_sha256_verified_unchanged': True,
                         'publication': {'uploaded': False, 'scheduled': False, 'published': False}, 'state': 'prepared_local_only_not_replaced',
                         'size': [W, H], 'fps': FPS, 'duration_seconds': LENGTH, 'frames': FPS * LENGTH, 'phases_seconds': PHASES,
                         'audio_tracks': 0, 'render_state': 'frames_only' if frames_only else 'encoded'})
    (output / 'manifest.json').write_text(json.dumps({'brief': str(BRIEF), 'brief_sha256': brief_hash, 'entries': manifest}, indent=2))
    print(json.dumps({'prepared': len(manifest), 'frames_only': frames_only, 'manifest': str(output / 'manifest.json')}))


if __name__ == '__main__':
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument('--output', type=Path, default=OUT, help='new output folder (never overwritten)')
    ap.add_argument('--only', action='append', default=[], help='post id(s), repeat or comma-separate')
    ap.add_argument('--frames-only', action='store_true', help='render scenes, reports and sheets; skip encoding')
    ap.add_argument('--inject-bad-reflection', action='store_true', help='in-memory check that a bad reflection (answer "A familiar plan") is rejected; writes nothing')
    args = ap.parse_args(); run(args.output, args.frames_only, args.only, args.inject_bad_reflection)
