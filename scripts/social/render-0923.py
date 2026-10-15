#!/usr/bin/env python3
"""Render the 10 geography TikTok drafts (0923) with measured, collision-checked layout.

Local only: never uploads or schedules. Defaults to a NEW layout-v2 folder and refuses to overwrite.
"""
import argparse, hashlib, json, subprocess, sys
from pathlib import Path
from PIL import Image, ImageDraw
sys.path.insert(0, str(Path(__file__).resolve().parent))
import layout as L

ROOT = Path(__file__).resolve().parents[2]
OUT = L.V2 / 'geography-0923'
MARK = L.WORK / 'brand-mark.png'
SCENES = [('question', 5), ('question', 3), ('reveal', 5), ('cta', 3)]
POSTS=[
('0923-01','Slovenia’s capital: Ljubljana or Zagreb?','Ljubljana / Zagreb','LJUBLJANA','Ljubljana is Slovenia’s capital.','Find Slovenia on the Europe map.','https://typologyquiz.com/trivia/find-the-countries-of-europe/'),
('0923-02','Croatia’s capital: Zagreb or Sarajevo?','Zagreb / Sarajevo','ZAGREB','Zagreb is Croatia’s capital.','Name the countries of Europe.','https://typologyquiz.com/trivia/countries-of-europe/'),
('0923-03','Slovakia’s capital: Bratislava or Ljubljana?','Bratislava / Ljubljana','BRATISLAVA','Bratislava is Slovakia’s capital.','Find countries on the Europe map.','https://typologyquiz.com/trivia/find-the-countries-of-europe/'),
('0923-04','Portugal’s capital: Lisbon or Porto?','Lisbon / Porto','LISBON','Lisbon is Portugal’s capital.','Name the countries of Europe.','https://typologyquiz.com/trivia/countries-of-europe/'),
('0923-05','Hungary’s capital: Budapest or Bucharest?','Budapest / Bucharest','BUDAPEST','Budapest is Hungary’s capital.','Find countries on the Europe map.','https://typologyquiz.com/trivia/find-the-countries-of-europe/'),
('0923-06','Which country has the capital Bern?','Switzerland / Austria','SWITZERLAND','Bern is Switzerland’s capital.','Name the countries of Europe.','https://typologyquiz.com/trivia/countries-of-europe/'),
('0923-07','Japan’s capital: Tokyo or Kyoto?','Tokyo / Kyoto','TOKYO','Tokyo is Japan’s capital.','Name countries around the world.','https://typologyquiz.com/trivia/countries-of-the-world/'),
('0923-08','Brazil’s capital: Brasília or Rio?','Brasília / Rio','BRASÍLIA','Brasília is Brazil’s capital.','Name countries around the world.','https://typologyquiz.com/trivia/countries-of-the-world/'),
('0923-09','Kenya’s capital: Nairobi or Mombasa?','Nairobi / Mombasa','NAIROBI','Nairobi is Kenya’s capital.','Name countries around the world.','https://typologyquiz.com/trivia/countries-of-the-world/'),
('0923-10','Canada’s capital: Ottawa or Toronto?','Ottawa / Toronto','OTTAWA','Ottawa is Canada’s capital.','Name countries around the world.','https://typologyquiz.com/trivia/countries-of-the-world/')]

def render(post, mark, kind):
    pid, q, opts, ans, exp, cta, url = post
    bg = ['#f7f3ea', '#e7f4f1', '#eef1ff'][int(pid[-1]) % 3]; ink = '#171827'; accent = ['#e85b48', '#157a74', '#315bd6'][int(pid[-1]) % 3]
    im = Image.new('RGB', (1080, 1920), bg); d = ImageDraw.Draw(im); lay = L.Layout(name=f'{pid}/{kind}')
    d.rectangle((0, 0, 1080, 24), fill=accent)
    im.paste(mark, (84, 172), mark); lay.add('logo', (84, 172, 184, 272))
    lay.text('handle', '@typologyquiz', (196, 196, 700, 260), 38, bold=False, min_size=30).draw(d, ink)
    lay.text('kicker', 'PICK ONE BEFORE THE REVEAL', (84, 320, 916, 380), 30, bold=False, min_size=22).draw(d, accent)
    if kind == 'question':
        lay.text('question', q, (84, 420, 916, 800), 78, min_size=48, line_gap=1.28).draw(d, ink)
        y = 850
        for i, o in enumerate(opts.split(' / ')):
            card = f'choice{i}'
            d.rounded_rectangle((84, y, 916, y + 125), radius=18, outline=accent, width=4); lay.add(card, (84, y, 916, y + 125))
            lay.text(card + '-letter', chr(65 + i), (112, y + 20, 180, y + 105), 48, parent=card, valign='center').draw(d, accent)
            lay.text(card + '-text', o, (205, y + 15, 892, y + 110), 58, min_size=34, parent=card, valign='center').draw(d, ink)
            y += 160
        lay.text('prompt', 'Lock in your answer.', (84, 1500, 916, 1560), 42, bold=False, min_size=30).draw(d, ink)
    elif kind == 'reveal':
        lay.text('label', 'THE ANSWER', (84, 470, 916, 530), 34, min_size=24).draw(d, accent)
        lay.text('answer', ans, (84, 590, 916, 900), 92, min_size=50, line_gap=1.25).draw(d, ink)
        d.rectangle((84, 930, 240, 942), fill=accent); lay.add('rule', (84, 930, 240, 942))
        lay.text('explain', exp, (84, 1000, 916, 1400), 48, bold=False, min_size=32, line_gap=1.45).draw(d, ink)
        lay.text('prompt', 'Keep your score.', (84, 1500, 916, 1560), 42, bold=False, min_size=30).draw(d, ink)
    else:
        lay.text('cta', cta, (84, 470, 916, 900), 75, min_size=44, line_gap=1.25).draw(d, ink)
        d.rounded_rectangle((84, 950, 916, 1120), radius=22, fill=accent); lay.add('button', (84, 950, 916, 1120))
        lay.text('button-text', 'typologyquiz.com', (112, 975, 888, 1095), 60, min_size=34, parent='button', align='center', valign='center').draw(d, '#ffffff')
        lay.text('free', 'Free quizzes. No signup.', (84, 1250, 916, 1330), 44, bold=False, min_size=30).draw(d, ink)
    lay.check()
    return im, lay


def main():
    ap = L.add_cli(argparse.ArgumentParser(description=__doc__), OUT); args = ap.parse_args()
    out = args.output; posts = L.select(POSTS, args.only, key=lambda p: p[0])
    mark = Image.open(MARK).convert('RGBA')
    renders = {p[0]: [render(p, mark, kind) for kind, _ in SCENES] for p in posts}  # fail on any layout error before writing
    targets = []
    for p in posts:
        targets.append(out / p[0])
        if args.frames_only: L.guard_frames_only(L.encoded_artifacts(out, p[0]))
        else: targets += L.encoded_artifacts(out, p[0])
    L.guard(targets, args.overwrite)
    out.mkdir(parents=True, exist_ok=True)
    binary = None if args.frames_only else L.ensure_encoder(out, ROOT)
    manifest = []
    for post in posts:
        pid, q, opts, ans, exp, cta, url = post; folder = out / pid; folder.mkdir(exist_ok=True); scenes = []
        for i, ((kind, dur), (im, lay)) in enumerate(zip(SCENES, renders[pid])):
            path = folder / f'{i:02d}-{kind}.png'; im.save(path); scenes.append({'image': str(path), 'duration': dur})
            (folder / f'{i:02d}-{kind}.layout.json').write_text(json.dumps(lay.report(), indent=1))
        tl = folder / 'timeline.json'; tl.write_text(json.dumps({'width': 1080, 'height': 1920, 'fps': 30, 'scenes': scenes}, indent=2))
        caption = f'{q} {opts + " — " if opts else ""}Answer: {ans.title()}. {exp} {cta} {url} #trivia #typologyquiz'
        (folder / 'caption.txt').write_text(caption + '\n')
        entry = {'id': pid, 'question': q, 'choices': opts.split(' / ') if opts else [], 'answer': ans, 'explanation': exp, 'quiz_url': url, 'caption': caption, 'duration_seconds': 16, 'media_method': 'Original Pillow/vector graphics with measured layout; native AVFoundation H.264 encode', 'status': 'frames_only' if args.frames_only else 'encoded_local_only'}
        if binary:
            video = out / f'{pid}.mp4'; subprocess.run([str(binary), str(tl), str(video)], check=True)
            entry.update({'filename': video.name, 'sha256': hashlib.sha256(video.read_bytes()).hexdigest()})
        manifest.append(entry)
    L.merge_index(out / 'asset-index.json', manifest); print(json.dumps(manifest, indent=2))


if __name__ == '__main__': main()
