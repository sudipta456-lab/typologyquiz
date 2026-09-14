#!/usr/bin/env python3
"""Render original portrait quizzes with Pillow; native AVFoundation encodes H.264.
No network, model calls, package installation, accounts or publication.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import argparse, json, math, subprocess, hashlib

ROOT = Path(__file__).resolve().parents[2]
DEFAULT_OUTPUT = Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch')
FONTS = Path('/System/Library/Fonts/Supplemental')
FONT = {'sans':'Arial.ttf','bold':'Arial Bold.ttf','black':'Arial Black.ttf','serif':'Georgia.ttf','serifbold':'Georgia Bold.ttf','mono':'Andale Mono.ttf'}
PAPER='#faf9f7'; INK='#14141f'; BLUE='#1e4fd6'; TEAL='#07ad9c'; CORAL='#f9684d'; PINK='#f47a9e'
PALETTES = {
 'capital':(PAPER,INK,BLUE), 'duel':(INK,PAPER,CORAL), 'tile':(BLUE,PAPER,'#ffc4b8'),
 'orbit':('#f3efe8',INK,TEAL), 'ticket':('#16264c',PAPER,CORAL), 'count':(CORAL,INK,PAPER),
 'atom':('#e8f6f3',INK,BLUE), 'flag':(PAPER,INK,CORAL), 'math':('#edf2ff',INK,BLUE), 'word':('#123c35',PAPER,PINK),
}
CHECKS=[]
def font(size,kind='bold'): return ImageFont.truetype(str(FONTS/FONT[kind]),size)
def text(draw, xy, value, size=60, fill=INK, kind='bold', anchor=None):
    f=font(size,kind)
    box=draw.textbbox(xy,value,font=f,anchor=anchor)
    # Critical text must fit the deliberately conservative TikTok-safe box.
    if box[0] < 72 or box[2] > 932 or box[1] < 170 or box[3] > 1580:
        raise ValueError(f'Text outside safe bounds: {value!r} {box}')
    draw.text(xy,value,font=f,fill=fill,anchor=anchor)
    CHECKS.append({'text':value,'bbox':box,'font_size':size})
    return box

def paragraph(draw, value, y, size=84, fill=INK, kind='bold', width=830, gap=16):
    f=font(size,kind); lines=[]
    for row in value.split('\n'):
        line=''
        for word in row.split():
            proposed=(line+' '+word).strip()
            if draw.textlength(proposed,font=f)>width and line:
                lines.append(line); line=word
            else: line=proposed
        if line: lines.append(line)
    for line in lines:
        text(draw,(84,y),line,size,fill,kind); y += size+gap
    return y

def centered(draw,value,cx,y,size,fill,kind='bold'):
    return text(draw,(cx,y),value,size,fill,kind,'mt')

def base(post, mark):
    bg,fg,accent=PALETTES[post['design']]
    img=Image.new('RGB',(1080,1920),bg); d=ImageDraw.Draw(img)
    # Decorative shapes may run full bleed; all information stays in safe bounds.
    if post['design'] in ('capital','flag','atom'):
        d.rectangle((0,0,1080,24),fill=accent)
        d.ellipse((830,1580,1370,2120),outline=accent,width=35)
    elif post['design']=='math':
        for x in range(0,1080,60): d.line((x,320,x,1690),fill='#dce4f7',width=2)
        for y in range(320,1690,60): d.line((0,y,1080,y),fill='#dce4f7',width=2)
    elif post['design']=='duel':
        for n in range(25):
            x=(n*271+31)%1080; y=(n*379+301)%1690
            d.ellipse((x,y,x+3,y+3),fill='#565767')
    elif post['design']=='word':
        d.rectangle((0,1700,1080,1920),fill='#1b5047')
    img.paste(mark,(84,190),mark)
    text(d,(196,211),'@typologyquiz',38,fg)
    label_color = {'orbit':'#08766d','flag':'#bd432b'}.get(post['design'], accent if bg!=CORAL else fg)
    text(d,(84,345),post['series'].upper(),32,label_color,'mono')
    return img,d,bg,fg,accent

def choice(d, label, i, y, fg, accent, bg):
    d.rounded_rectangle((84,y,916,y+125),radius=20,outline=accent,width=3)
    d.rounded_rectangle((108,y+26,178,y+96),radius=13,fill=accent)
    centered(d,chr(65+i),143,y+37,43,bg)
    size=58
    while d.textlength(label,font=font(size))>670: size-=2
    text(d,(206,y+31),label,size,fg)

def illustration(post,d,bg,fg,accent,show_options=True):
    design=post['design']; opts=post['options']
    if design in ('capital','ticket'):
        for i,label in enumerate(opts): choice(d,label,i,830+i*150,fg,accent,bg)
    elif design=='duel':
        for i,(name,color) in enumerate(zip(opts,['#a6a6a4',CORAL])):
            x=288+i*410; y=960
            d.ellipse((x-155,y-155,x+155,y+155),fill=color)
            for j in range(4):
                yy=y-90+j*55
                d.arc((x-145,yy-25,x+130,yy+75),0,160,fill='#666976' if i==0 else '#f5b28a',width=13)
            centered(d,name,x,1160,55,fg)
        centered(d,'OR',493,945,32,fg,'mono')
        text(d,(84,1265),'ILLUSTRATION · NOT TO SCALE',25,'#c5c6d2','mono')
    elif design=='tile':
        d.rounded_rectangle((230,805,770,1250),radius=24,outline=PAPER,width=4)
        text(d,(278,840),'11',58,PAPER,'mono')
        centered(d,'Na',500,935,190,PAPER)
        centered(d,'CHEMICAL SYMBOL',500,1180,30,PAPER,'mono')
    elif design=='orbit':
        d.line((132,783,132,1260),fill=TEAL,width=5)
        for i,name in enumerate(opts):
            y=774+i*100
            d.ellipse((111,y,153,y+42),fill=accent if name!='?' else CORAL)
            text(d,(195,y-6),name,61 if name!='?' else 72,fg)
    elif design=='count':
        for i,label in enumerate(opts):
            x=240+i*260
            d.ellipse((x-108,880,x+108,1096),fill=PAPER)
            centered(d,label,x,922,105,INK)
        text(d,(84,1210),'2, 3 OR 4?',38,fg,'mono')
    elif design=='atom':
        d.ellipse((260,780,740,1260),outline=accent,width=4)
        for i in range(8):
            a=math.tau*i/8; x=500+125*math.cos(a); y=1015+125*math.sin(a)
            d.ellipse((x-28,y-28,x+28,y+28),fill=CORAL)
            d.line((x-11,y,x+11,y),fill=INK,width=3)
            d.line((x,y-11,x,y+11),fill=INK,width=3)
        centered(d,'?',500,970,80,INK)
        centered(d,'8 PROTONS',500,1295,35,INK,'mono')
    elif design=='flag':
        d.rectangle((90,815,910,1362),fill='#ffffff',outline='#d8d6d0',width=4)
        d.ellipse((336,925,664,1253),fill='#bc002d')
    elif design=='math':
        for i in range(3):
            x=110+i*154
            d.rounded_rectangle((x,840,x+112,1005),radius=10,fill=BLUE)
            d.line((x+17,840,x+17,1005),fill=PAPER,width=4)
            for yy in [880,910,940]: d.line((x+37,yy,x+88,yy),fill=PAPER,width=3)
        text(d,(610,885),'$12',105,INK)
        text(d,(84,1140),'5 notebooks = ?',68,INK)
        text(d,(84,1280),'SAME PRICE EACH',33,INK,'mono')
    elif design=='word':
        for i,char in enumerate(opts):
            x=84+i*104
            d.rounded_rectangle((x,935,x+92,1075),radius=10,fill=PAPER)
            centered(d,char,x+46,970,58,INK)
        text(d,(84,1180),'THREE VOWELS MISSING',34,PINK,'mono')

def stage(post,mark,kind,count=None):
    img,d,bg,fg,accent=base(post,mark)
    if kind in ('question','think'):
        paragraph(d,post['question'],440,82 if post['design'] in ('count','math') else 88,fg)
        illustration(post,d,bg,fg,accent)
        if count is None:
            text(d,(84,1480),'Answer before the reveal.',40,fg,'sans')
        else:
            text(d,(84,1480),'LOCK IT IN',32,fg,'mono')
            for i in range(6):
                x=480+i*52
                d.ellipse((x,1482,x+32,1514),fill=accent if i<count else ('#ddd9d2' if bg==PAPER else '#737380'))
            centered(d,str(count),874,1460,65,fg)
    elif kind=='reveal':
        text(d,(84,440),'THE ANSWER',35,accent if bg!=CORAL else fg,'mono')
        size=132
        while d.textlength(post['answer'],font=font(size,'serifbold'))>830: size-=2
        paragraph(d,post['answer'],660,size,fg,'serifbold')
        d.rectangle((84,910,230,921),fill=accent)
        paragraph(d,post['explanation'],990,49,fg,'sans',gap=17)
        text(d,(84,1460),'Got it? Keep your score.',38,fg,'sans')
    else:
        paragraph(d,post['cta']+'.',525,100,fg,'serifbold',gap=14)
        d.rounded_rectangle((84,1090,916,1250),radius=24,fill=accent)
        cta_color = INK if post['design'] in ('orbit','flag','tile') or bg==CORAL else bg
        centered(d,'typologyquiz.com',500,1134,57,cta_color)
        text(d,(84,1360),'Free quizzes. No signup.',43,fg,'sans')
        text(d,(84,1480),'@typologyquiz',36,fg,'mono')
    return img

def main():
    ap=argparse.ArgumentParser(); ap.add_argument('--output',type=Path,default=DEFAULT_OUTPUT); ap.add_argument('--only'); ap.add_argument('--frames-only',action='store_true'); ap.add_argument('--skip-existing',action='store_true'); args=ap.parse_args()
    output=args.output.resolve(); output.mkdir(parents=True,exist_ok=True)
    manifest=json.loads((ROOT/'docs/growth/tiktok/launch-manifest.json').read_text())
    logo=output/'brand-mark.png'
    if not logo.exists():
        subprocess.run([str(ROOT/'scripts/mac-run.sh'),'node','--input-type=module','-e',f'import sharp from "sharp"; await sharp("public/assets/typologyquiz-mark.svg").resize(100,100).png().toFile({json.dumps(str(logo))});'],cwd=ROOT,check=True)
    mark=Image.open(logo).convert('RGBA').resize((86,86))
    encoder=output/'encode-video'
    if not args.frames_only and (not encoder.exists() or encoder.stat().st_mtime<(ROOT/'scripts/social/encode-video.swift').stat().st_mtime):
        subprocess.run(['swiftc','-O',str(ROOT/'scripts/social/encode-video.swift'),'-o',str(encoder)],check=True)
    for post in manifest['posts']:
        if args.only and args.only!=post['id']: continue
        if args.skip_existing and (output/(post['id']+'.mp4')).exists(): continue
        target=output/post['id']; target.mkdir(exist_ok=True)
        start=len(CHECKS); scenes=[]
        for name,duration,kind,count in [('00-question',3,'question',None)]+[(f'0{7-n}-think-{n}',1,'think',n) for n in range(6,0,-1)]+[('07-reveal',4,'reveal',None),('08-cta',3,'cta',None)]:
            image=stage(post,mark,kind,count); path=target/(name+'.png'); image.save(path)
            scenes.append({'image':str(path),'duration':duration})
        timeline=target/'timeline.json'; timeline.write_text(json.dumps({'width':1080,'height':1920,'fps':30,'scenes':scenes},indent=2))
        (target/'caption.txt').write_text(post['caption']+'\n')
        (target/'typography-qa.json').write_text(json.dumps(CHECKS[start:],ensure_ascii=False,indent=2))
        if not args.frames_only: subprocess.run([str(encoder),str(timeline),str(output/(post['id']+'.mp4'))],check=True)
        print('FINISHED',post['id'],flush=True)
    # Review contact sheet: question/reveal/CTA are separate columns, never upload it.
    posts=[p for p in manifest['posts'] if (output/p['id']/'07-reveal.png').exists()]
    sheet=Image.new('RGB',(324*3,576*len(posts)),PAPER)
    for row,post in enumerate(posts):
        for col,name in enumerate(['00-question','07-reveal','08-cta']):
            im=Image.open(output/post['id']/(name+'.png')); im.thumbnail((324,576)); sheet.paste(im,(col*324,row*576))
    sheet.save(output/'contact-sheet.jpg',quality=90)
    for group in range((len(posts)+1)//2):
        sheet.crop((0,group*1152,972,min((group+1)*1152,sheet.height))).save(output/f'qa-sheet-{group+1}.jpg',quality=94)
    for post in posts:
        im=Image.open(output/post['id']/'00-question.png')
        im.resize((540,960)).save(output/post['id']/'preview.jpg',quality=92)
    (output/'asset-index.json').write_text(json.dumps([{'id':p['id'],'video':str(output/(p['id']+'.mp4')),'caption':p['caption'],'sha256':hashlib.sha256((output/(p['id']+'.mp4')).read_bytes()).hexdigest() if (output/(p['id']+'.mp4')).exists() else None} for p in posts],indent=2))
if __name__=='__main__': main()
