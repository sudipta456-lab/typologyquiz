#!/usr/bin/env python3
"""Render original, source-checked Alberta Class 7 TikTok drafts.

These are local assets only. They never upload, draft, schedule, or post.
Layout is measured and collision-checked (scripts/social/layout.py); output defaults to a new layout-v2 folder.
Facts are constrained to the Government of Alberta driver's guide and school-zone page.
"""
import argparse, hashlib, json, math, subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw
sys.path.insert(0, str(Path(__file__).resolve().parent))
import layout as L

ROOT = Path(__file__).resolve().parents[2]
OUT = L.V2 / 'driving-1011'
MARK = L.WORK / 'brand-mark.png'
W,H,FPS=1080,1920,30
INK='#171827'; CREAM='#f7f3ea'; TEAL='#157a74'; CORAL='#e85b48'; BLUE='#315bd6'; YELLOW='#ffd65a'
DRIVING='https://typologyquiz.com/driving/alberta/'
GUIDE='https://www.alberta.ca/driver-guides-overview-and-pdf-versions'
ZONES='https://www.alberta.ca/school-and-playground-zones'

POSTS = [
 {"id":"1011-ab-stop","topic":"STOP SIGN","question":"A red octagon means…","choices":["Slow and roll through","Come to a full stop"],"answer":"Come to a full stop","detail":"Then check pedestrians and traffic before moving.","caption":"Alberta Class 7 quick check: what does a red octagon require? A complete stop, then check for pedestrians and traffic. Practice with answer explanations linked to the official guide: https://typologyquiz.com/driving/alberta/ #AlbertaDriving #Class7 #DrivingTest","source":GUIDE},
 {"id":"1012-ab-yield","topic":"YIELD SIGN","question":"Clear road at a yield sign. Must you stop?","choices":["Always stop","Proceed if clear"],"answer":"Proceed if clear","detail":"Slow down, give way, and be ready to stop.","caption":"Alberta Class 7 quick check: a yield sign means give way and be ready to stop. With no traffic or pedestrians to yield to, you may proceed without a complete stop. Review the official-guide-linked practice sets: https://typologyquiz.com/driving/alberta/ #AlbertaDriving #Class7 #RoadRules","source":GUIDE},
 {"id":"1013-ab-stop-line","topic":"RED LIGHT","question":"Red light + painted stop line. Where do you stop?","choices":["Before the line","Past the line"],"answer":"Before the line","detail":"If there is no line, stop before the crosswalk.","caption":"Alberta Class 7 quick check: at a solid red with a painted stop line, stop before the line. If there is no line, the next reference is the crosswalk. Practice with official-guide links: https://typologyquiz.com/driving/alberta/ #AlbertaDriving #Class7 #DrivingTest","source":GUIDE},
 {"id":"1014-ab-school-zone","topic":"SCHOOL ZONE","question":"What speed applies in an active Alberta school zone unless posted otherwise?","choices":["30 km/h","40 km/h"],"answer":"30 km/h","detail":"Posted local signs and times always control.","caption":"Alberta Class 7 quick check: the school-zone limit is 30 km/h unless otherwise posted. Check the local sign and its times, which can vary by municipality. Practice: https://typologyquiz.com/driving/alberta/ #AlbertaDriving #Class7 #RoadSafety","source":ZONES},
 {"id":"1015-ab-right-red","topic":"RIGHT ON RED","question":"Can you turn right on red in Alberta?","choices":["Yes, after a full stop","No, never"],"answer":"Yes, after a full stop","detail":"Only if no sign prohibits it; yield to people and traffic.","caption":"Alberta Class 7 quick check: a right turn on red can be permitted after a complete stop, unless a sign prohibits it, and only after yielding to pedestrians and traffic. Practice: https://typologyquiz.com/driving/alberta/ #AlbertaDriving #Class7 #RoadRules","source":GUIDE},
 {"id":"1016-ab-clear-intersection","topic":"GREEN LIGHT","question":"The light is green, but traffic blocks the far side. Enter?","choices":["Wait until clear","Enter and wait"],"answer":"Wait until clear","detail":"Do not enter until you can clear the intersection.","caption":"Alberta Class 7 quick check: a green light does not mean enter a blocked intersection. Wait until you can clear it completely. Practice with official-guide-linked explanations: https://typologyquiz.com/driving/alberta/ #AlbertaDriving #Class7 #DrivingTest","source":GUIDE},
]

CARD = (96, 690, 904, 1210)
CX, CY = 500, 950


def traffic_light(d, lay, active, cx=CX):
    d.rounded_rectangle((cx - 115, 710, cx + 115, 1190), radius=100, fill='#26303b'); lay.add('icon', (cx - 115, 710, cx + 115, 1190), 'card')
    colors = {'red': CORAL, 'yellow': YELLOW, 'green': '#38a169'}
    for name, y in (('red', 800), ('yellow', 950), ('green', 1100)):
        d.ellipse((cx - 62, y - 62, cx + 62, y + 62), fill=colors[name] if name == active else '#4b5563')  # exactly one lamp lit


def draw_icon(d, lay, kind):
    if kind == 'STOP SIGN':
        r = 210; pts = [(CX + r * math.cos(math.pi / 8 + i * math.pi / 4), CY + r * math.sin(math.pi / 8 + i * math.pi / 4)) for i in range(8)]
        d.polygon(pts, fill=CORAL, outline='white', width=14)
        lay.add('icon', (min(p[0] for p in pts), min(p[1] for p in pts), max(p[0] for p in pts), max(p[1] for p in pts)), 'card', pts)
        lay.text('icon-text', 'STOP', (CX - 140, CY - 60, CX + 140, CY + 60), 76, parent='icon', min_size=40, align='center', valign='center').draw(d, 'white')
    elif kind == 'YIELD SIGN':
        pts = [(CX - 230, 740), (CX + 230, 740), (CX, 1140)]  # point DOWN
        d.polygon(pts, fill='white', outline=CORAL, width=20)
        lay.add('icon', (CX - 230, 740, CX + 230, 1140), 'card', pts)
        lay.text('icon-text', 'YIELD', (CX - 130, 790, CX + 130, 870), 60, parent='icon', min_size=30, align='center', valign='center').draw(d, CORAL)
    elif kind == 'RED LIGHT': traffic_light(d, lay, 'red')
    elif kind == 'RIGHT ON RED': traffic_light(d, lay, 'red')  # plain red lamp only: no arrow that could read as a protected green-arrow signal
    elif kind == 'GREEN LIGHT': traffic_light(d, lay, 'green')
    elif kind == 'SCHOOL ZONE':  # generic school building; deliberately not a regulatory sign shape
        d.polygon([(CX - 230, 900), (CX, 750), (CX + 230, 900)], fill=CORAL)
        d.rectangle((CX - 200, 900, CX + 200, 1130), fill=BLUE)
        d.rectangle((CX - 38, 1010, CX + 38, 1130), fill='white')
        for wx in (CX - 160, CX + 80):
            d.rectangle((wx, 935, wx + 80, 1000), fill=YELLOW)
        d.ellipse((CX - 28, 810, CX + 28, 866), fill='white'); d.rectangle((CX - 3, 700, CX + 3, 760), fill=INK); d.polygon([(CX + 3, 702), (CX + 55, 722), (CX + 3, 742)], fill=TEAL)
        lay.add('icon', (CX - 230, 700, CX + 230, 1130), 'card')
    else: raise L.LayoutError(f'unknown topic {kind}')


def render(post, scene, logo):
    pid = post['id']; lay = L.Layout(name=f'{pid}/scene{scene}')
    im = Image.new('RGB', (W, H), CREAM); d = ImageDraw.Draw(im)
    d.rectangle((0, 0, W, 22), fill=TEAL)
    im.paste(logo, (84, 172), logo); lay.add('logo', (84, 172, 84 + logo.width, 172 + logo.height))
    lay.text('handle', '@typologyquiz', (172, 188, 700, 238), 35, bold=False, min_size=26).draw(d, INK)
    d.rounded_rectangle((84, 256, 916, 322), radius=18, fill=TEAL); lay.add('label-pill', (84, 256, 916, 322))
    lay.text('label', 'ALBERTA CLASS 7 · PRACTICE ONLY', (104, 262, 896, 316), 29, parent='label-pill', min_size=18, align='center', valign='center').draw(d, 'white')
    d.rounded_rectangle((340, 340, 740, 398), radius=24, outline=TEAL, width=3); lay.add('topic-pill', (340, 340, 740, 398))
    lay.text('topic', post['topic'], (358, 344, 722, 394), 27, parent='topic-pill', min_size=18, align='center', valign='center').draw(d, TEAL)
    head = post['question'] if scene == 0 else (post['answer'] if scene == 2 else ('Choose before the reveal' if scene == 1 else 'Practice the rule, then read the official guide'))
    lay.text('headline', head, (84, 420, 916, 660), 70 if scene == 2 else 66, min_size=36, align='center', valign='center').draw(d, TEAL if scene == 2 else INK)
    if scene in (0, 1, 2):
        d.rounded_rectangle(CARD, radius=32, fill='white', outline=TEAL, width=5); lay.add('card', CARD)
        draw_icon(d, lay, post['topic'])
    if scene == 1:
        for i, (y0, choice) in enumerate(zip((1240, 1370), post['choices'])):
            d.rounded_rectangle((96, y0, 904, y0 + 110), radius=24, fill='white', outline=TEAL, width=4); lay.add(f'choice{i}', (96, y0, 904, y0 + 110))
            lay.text(f'choice{i}-text', choice, (124, y0 + 10, 876, y0 + 100), 42, parent=f'choice{i}', min_size=26, align='center', valign='center').draw(d, INK)
    elif scene == 2:
        lay.text('detail', post['detail'], (96, 1240, 904, 1480), 42, bold=False, min_size=26, align='center', valign='center', line_gap=1.3).draw(d, INK)
    elif scene == 3:
        d.rounded_rectangle((96, 700, 904, 960), radius=32, fill=TEAL); lay.add('cta-card', (96, 700, 904, 960))
        lay.text('cta-title', 'ALBERTA CLASS 7', (130, 730, 870, 930), 62, parent='cta-card', min_size=34, align='center', valign='center').draw(d, 'white')
        lay.text('cta-features', 'Free practice · explanations · official-source links', (84, 1020, 916, 1160), 39, bold=False, min_size=24, align='center', valign='center').draw(d, INK)
        lay.text('cta-url', 'TypologyQuiz.com/driving/alberta', (84, 1200, 916, 1290), 42, min_size=24, align='center', valign='center').draw(d, TEAL)
    for j in range(4):
        box = (240 + j * 155, 1500, 370 + j * 155, 1514)
        d.rounded_rectangle(box, radius=7, fill=TEAL if j <= scene else '#d8d8dc'); lay.add(f'dot{j}', box)
    lay.text('footer', 'Original TypologyQuiz vector artwork · check the official Alberta guide', (84, 1530, 916, 1576), 22, bold=False, min_size=16, align='center').draw(d, '#525464')
    lay.check()
    return im, lay


def main():
    ap = L.add_cli(argparse.ArgumentParser(description=__doc__), OUT); args = ap.parse_args()
    out = args.output; posts = L.select(POSTS, args.only)
    if not MARK.exists(): raise SystemExit('missing logo')
    logo = Image.open(MARK).convert('RGBA'); logo.thumbnail((74, 74), Image.Resampling.LANCZOS)
    renders = {p['id']: [render(p, i, logo) for i in range(4)] for p in posts}  # fail on any layout error before writing
    targets = []
    for p in posts:
        targets.append(out / p['id'])
        if args.frames_only: L.guard_frames_only(L.encoded_artifacts(out, p['id']))
        else: targets += L.encoded_artifacts(out, p['id'])
    L.guard(targets, args.overwrite)
    out.mkdir(parents=True, exist_ok=True)
    encoder = None if args.frames_only else L.ensure_encoder(out, ROOT)
    manifest = []
    for post in posts:
        folder = out / post['id']; folder.mkdir(exist_ok=True); scenes = []
        for i, (im, lay) in enumerate(renders[post['id']]):
            image = folder / f'{i:02d}.png'; im.save(image); scenes.append({'image': str(image), 'duration': 4})
            (folder / f'{i:02d}.layout.json').write_text(json.dumps(lay.report(), indent=1))
        timeline = folder / 'timeline.json'; timeline.write_text(json.dumps({'width': W, 'height': H, 'fps': FPS, 'scenes': scenes}, indent=2))
        (folder / 'caption.txt').write_text(post['caption'] + '\n')
        qa = {'duration_seconds': 16, 'width': W, 'height': H, 'fps': FPS, 'audio': 'none', 'source': post['source'], 'route': DRIVING, 'status': 'frames_only_not_uploaded' if args.frames_only else 'prepared_only_not_uploaded_or_scheduled'}
        if encoder:
            video = out / f"{post['id']}.mp4"; subprocess.run([str(encoder), str(timeline), str(video)], check=True)
            native_path = out / f"{post['id']}.qa.json"
            native = json.loads(native_path.read_text())  # measured by encode-video.swift: never replaced by asserted values
            for key in ('decoded_frame', 'frames_written', 'audio_tracks', 'width', 'height', 'fps', 'duration_seconds'):
                if key not in native: raise SystemExit(f'native QA report {native_path} lacks {key}')
            expected = {'width': W, 'height': H, 'fps': FPS, 'duration_seconds': 16, 'frames_written': 16 * FPS, 'audio_tracks': 0}
            bad = {k: (native[k], v) for k, v in expected.items() if abs(native[k] - v) > 1e-6}
            if bad: raise SystemExit(f'native QA disagrees with expected (measured, expected): {bad}')
            qa = {**qa, **native, 'expected': expected, 'video': str(video), 'sha256': hashlib.sha256(video.read_bytes()).hexdigest()}
            native_path.write_text(json.dumps(qa, indent=2))
        manifest.append({**post, **qa})
    L.merge_index(out / 'asset-index.json', manifest); print(json.dumps(manifest, indent=2))


if __name__ == '__main__': main()
