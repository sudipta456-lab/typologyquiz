#!/usr/bin/env python3
"""Three original image-led quiz clips. Local production only; no account actions.

Uses the site's exact Utah geometry, original GPT artwork, separately measured
type, and the native H.264 encoder. Never overwrites an existing batch.
"""
import argparse, hashlib, json, math, subprocess
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter
import layout as L

ROOT = Path(__file__).resolve().parents[2]
ART = L.WORK / '2026-10-15-image-led-art'
OUT = L.WORK / '2026-10-15-image-led'
W, H, FPS, LENGTH = 1080, 1920, 30, 20
WHITE, TEAL, GOLD = '#fff9ed', '#6be1cf', '#ffd777'
POSTS = [
    {'id': '1015-image-alien-crew', 'topic': 'YOUR FICTIONAL CREW ROLE', 'route': '/trivia/alien-type/', 'art': str(L.WORK / '2026-10-14-gpt-visual/alien-explorer.png'), 'tag': 'FICTIONAL · JUST FOR FUN',
     'heads': ['Your crew needs you.', 'The investigator?', 'The diplomat?', 'The planner, thinker…', 'Find your crew role.'],
     'subs': ['Which role would you pick?', 'You ask the question everyone missed.', 'You help a new crew work together.', '…or the observer who spots the quiet clue?', 'Five fictional archetypes. Six questions.'],
     'caption': 'Every sci-fi crew needs a different kind of mind. Investigator, diplomat, practical planner, systems thinker, or quiet observer? Adapted from the expedition-role question in our illustrated alien quiz. Fictional, just for fun—not a personality diagnosis or a claim about real aliens. https://typologyquiz.com/trivia/alien-type/ #AlienQuiz #SciFi #TypologyQuiz',
     'source': 'src/components/trivia/InterestQuiz.tsx · ALIEN_QUESTIONS[5]', 'relationship': 'Original promotional adaptation of the existing expedition-role item; not a scored result.'},
    {'id': '1015-image-state-shape', 'topic': 'ONE SHAPE. FOUR SUSPECTS.', 'route': '/trivia/us-states/', 'art': None, 'tag': 'MAP SHAPE CHALLENGE',
     'heads': ['Recognize this state?', 'That missing corner…', 'Lock in your guess.', 'It’s Utah.', 'Fill the whole map.'],
     'subs': ['No labels. Just the outline.', 'A  ·  Utah      B  ·  Wyoming', 'C  ·  Nevada      D  ·  Colorado', 'The full map puts that outline in context.', 'Name all 50 US states. Free to play.'],
     'caption': 'One state outline, four suspects: Utah, Wyoming, Nevada, or Colorado? Reveal: Utah. We used the same accurate state geometry as our fill-the-map quiz. Try the full map: https://typologyquiz.com/trivia/us-states/ #GeographyQuiz #MapQuiz #TypologyQuiz',
     'source': 'https://www2.census.gov/geo/pdfs/maps-data/maps/reference/us_regdiv.pdf', 'relationship': 'Original silhouette challenge using the native quiz answer Utah and its exact map path.'},
    {'id': '1015-image-element-fe', 'topic': 'A TWO-LETTER MYSTERY', 'route': '/trivia/periodic-table/', 'art': str(ART / 'iron-cube.png'), 'tag': 'ORIGINAL AI ILLUSTRATION',
     'heads': ['Two letters. One element.', 'What does Fe stand for?', 'Choose before the reveal.', 'Iron. Atomic number 26.', 'Can you name the rest?'],
     'subs': ['The symbol is Fe. Got a guess?', 'A  ·  Fluorine      B  ·  Iron', 'C  ·  Fermium      D  ·  Francium', 'Fe comes from the Latin name ferrum.', 'Try our visual periodic-table quiz.'],
     'caption': 'Fe is iron, atomic number 26; the symbol comes from ferrum. The cube is an original AI illustration, not a photograph. Try the visual periodic-table quiz: https://typologyquiz.com/trivia/periodic-table/ Source: Royal Society of Chemistry, Iron. #ChemistryQuiz #PeriodicTable #TypologyQuiz',
     'source': 'https://periodic-table.rsc.org/element/26/iron', 'additional_source': 'https://pubchem.ncbi.nlm.nih.gov/element/Fe', 'relationship': 'Existing quiz answer el26 (Iron), with an original multiple-choice promotional framing. PubChem search excerpt supports Latin ferrum; RSC page supports iron, Fe, atomic number 26.'},
]

def sha(path): return hashlib.sha256(Path(path).read_bytes()).hexdigest()

def text(lay, draw, name, value, box, size, color=WHITE, **kw):
    block = lay.text(name, value, box, size, min_size=28, **kw)
    block.draw(draw, color)
    return {'name': name, 'text': value, 'bbox': list(block.bbox), 'font_size': block.size}

def layers(post, stage, mark):
    lay = L.Layout(safe=(72, 170, 930, 1580), name=f'{post["id"]}/{stage}')
    im = Image.new('RGBA', (W, H)); d = ImageDraw.Draw(im)
    im.alpha_composite(mark, (84, 182)); lay.add('brand', (84, 182, 140, 238))
    boxes = [text(lay, d, 'handle', '@typologyquiz', (160, 184, 900, 240), 34, bold=False)]
    boxes.append(text(lay, d, 'topic', post['topic'], (84, 264, 914, 310), 28, TEAL, bold=True))
    boxes.append(text(lay, d, 'headline', post['heads'][stage], (84, 340, 914, 545), 72, bold=True, valign='center'))
    lay.add('hero-reserved', (84, 585, 914, 1125))
    boxes.append(text(lay, d, 'sub', post['subs'][stage], (84, 1170, 914, 1365), 48, bold=False, valign='center', line_gap=1.25))
    if stage == 4:
        boxes.append(text(lay, d, 'cta', 'TypologyQuiz.com' + post['route'].rstrip('/'), (84, 1395, 914, 1495), 38, TEAL, bold=True, valign='center'))
    else:
        # An actual four-second beat timer, changing independently of the copy.
        for i in range(5):
            x = 84 + i * 166
            d.rounded_rectangle((x, 1420, x + 142, 1428), radius=4, fill=TEAL if i <= stage else '#314153')
            lay.add(f'beat-{i}', (x, 1420, x + 142, 1428))
    boxes.append(text(lay, d, 'label', post['tag'], (84, 1528, 914, 1574), 28, GOLD, bold=False, align='center'))
    lay.check()
    return im, boxes

def background(art, t):
    zoom = 1 + .065 * t / LENGTH
    cw, ch = W / zoom, H / zoom
    return art.resize((W, H), Image.Resampling.BICUBIC, box=((W - cw) / 2, (H - ch) / 2, (W + cw) / 2, (H + ch) / 2)).convert('RGBA')

def scrim():
    image = Image.new('RGBA', (W, H)); d = ImageDraw.Draw(image)
    for y in range(H):
        opacity = 235 if y < 580 or y > 1140 else 35
        d.line((0, y, W, y), fill=(5, 10, 21, opacity))
    return image

def map_background():
    # Cartographic visual uses a subdued blueprint grid and the actual data.
    im = Image.new('RGB', (W, H), '#0b1324'); d = ImageDraw.Draw(im)
    for x in range(0, W, 60): d.line((x, 0, x, H), fill='#122139', width=1)
    for y in range(0, H, 60): d.line((0, y, W, y), fill='#122139', width=1)
    return im

def prepare_art(path):
    im = Image.open(path).convert('RGB'); factor = max(W / im.width, H / im.height)
    im = im.resize((round(im.width * factor), round(im.height * factor)), Image.Resampling.LANCZOS)
    left, top = (im.width-W)//2, (im.height-H)//2
    return im.crop((left, top, left+W, top+H))

def run(output, frames_only=False):
    L.guard([output], False)
    output.mkdir(parents=True)
    mark = Image.open(L.WORK / 'brand-mark.png').convert('RGBA').resize((56, 56), Image.Resampling.LANCZOS)
    mask = scrim(); encoder = None if frames_only else L.ensure_encoder(output, ROOT)
    manifest=[]
    for post in POSTS:
        folder=output/post['id']; folder.mkdir(); frames=folder/'frames'; frames.mkdir()
        art=prepare_art(post['art']) if post['art'] else map_background()
        parts=[layers(post,i,mark) for i in range(5)]
        silhouette=Image.open(ART/'utah-silhouette.png').convert('RGBA')
        fullmap=Image.open(ART/'us-map-utah.png').convert('RGBA'); fullmap.thumbnail((830, 515), Image.Resampling.LANCZOS)
        timeline=[]; checks=[]; samples=[]
        for n in range(FPS*LENGTH):
            t=n/FPS; stage=min(4,int(t//4)); beat=t%4
            im=Image.alpha_composite(background(art,t),mask)
            if not post['art']:
                hero=fullmap if stage>=3 else silhouette
                # Tiny vertical drift; aspect ratio and outline are preserved.
                im.alpha_composite(hero, ((W-hero.width)//2, 585+(540-hero.height)//2+round(5*math.sin(t))))
            im.alpha_composite(parts[stage][0])
            d=ImageDraw.Draw(im)
            if post['id'].endswith('fe') and stage < 4:
                # Symbol card stays above the cube, with no answer-name leakage.
                d.rounded_rectangle((403,574,653,740),radius=22,fill='#07101de6',outline=TEAL,width=2)
                d.text((528,596),'Fe',font=L.font(100,True),fill=WHITE,anchor='ma')
            if stage<3 and post['id'].endswith(('shape','fe')):
                d.arc((820,1020,900,1100),start=-90,end=-90+int((beat/4)*359),fill=TEAL,width=6)
            path=frames/f'f{n:04d}.jpg'; im.convert('RGB').save(path,quality=91,subsampling=0)
            timeline.append({'image':str(path),'duration':1/FPS})
            if n in [0,60,120,240,360,480,599]: samples.append(path)
        (folder/'timeline.json').write_text(json.dumps({'width':W,'height':H,'fps':FPS,'scenes':timeline}))
        (folder/'typography-qa.json').write_text(json.dumps({'status':'measured_layout_pass','safe':[72,170,930,1580],'stages':[{'stage':i,'texts':p[1]} for i,p in enumerate(parts)]},indent=2))
        sheet=Image.new('RGB',(270*len(samples),480))
        for i,p in enumerate(samples): sheet.paste(Image.open(p).resize((270,480),Image.Resampling.LANCZOS),(270*i,0))
        sheet.save(folder/'contact-sheet.jpg',quality=90)
        video=output/(post['id']+'.mp4')
        if encoder:
            subprocess.run([str(encoder),str(folder/'timeline.json'),str(video)],check=True)
            native=json.loads(video.with_suffix('.qa.json').read_text())
            expected={'width':W,'height':H,'fps':FPS,'frames_written':FPS*LENGTH,'audio_tracks':0,'duration_seconds':LENGTH}
            for key,value in expected.items():
                if native.get(key)!=value: raise RuntimeError(f'{post["id"]}: native {key}: {native.get(key)} != {value}')
        entry={**post,'prepared_at_local_date':'2026-10-15','state':'prepared_local_only','video':None if frames_only else str(video),'sha256':None if frames_only else sha(video),'size':[W,H],'duration_seconds':LENGTH,'fps':FPS,'audio_tracks':0,'source_art_sha256':sha(post['art']) if post['art'] else sha(ART/'utah-silhouette.png'),'publication':{'uploaded':False,'scheduled':False,'published':False},'disclosure_on_upload':['Your brand / Promotional content']+(['AI-generated content'] if post['art'] else [])}
        manifest.append(entry)
        (folder/'caption.txt').write_text(post['caption']+'\n')
    (output/'manifest.json').write_text(json.dumps(manifest,indent=2))
    print(json.dumps({'prepared':len(manifest),'manifest':str(output/'manifest.json')}))

if __name__=='__main__':
    ap=argparse.ArgumentParser(description=__doc__); ap.add_argument('--output',type=Path,default=OUT); ap.add_argument('--frames-only',action='store_true'); args=ap.parse_args(); run(args.output,args.frames_only)
