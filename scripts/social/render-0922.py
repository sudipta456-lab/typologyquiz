#!/usr/bin/env python3
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import subprocess, json, hashlib

OUT=Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/2026-09-22')
ROOT=Path('/Users/sudiptasarkar/dev/typologyquiz')
FONT=Path('/System/Library/Fonts/Supplemental/Arial.ttf'); BOLD=Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')
POSTS=[
('0922-01','Na is the symbol for which element?','Sodium / Nitrogen','SODIUM','NIST lists sodium as Na, atomic number 11.','Try the first 20 elements.','https://typologyquiz.com/trivia/periodic-table-first-20/'),
('0922-02','Atomic number 14: silicon or sulfur?','Silicon / Sulfur','SILICON','The periodic table puts silicon at atomic number 14.','Try the first 20 elements.','https://typologyquiz.com/trivia/periodic-table-first-20/'),
('0922-03','Which state has the capital Montpelier?','Vermont / New Hampshire','VERMONT','Montpelier is Vermont’s capital.','Name all 50 US state capitals.','https://typologyquiz.com/trivia/us-state-capitals/'),
('0922-04','Which state has the capital Cheyenne?','Wyoming / Colorado','WYOMING','Cheyenne is Wyoming’s capital.','Name all 50 US state capitals.','https://typologyquiz.com/trivia/us-state-capitals/'),
('0922-05','Dover is the capital of which state?','Delaware / Maryland','DELAWARE','Dover is Delaware’s capital.','Name all 50 US state capitals.','https://typologyquiz.com/trivia/us-state-capitals/'),
('0922-06','Madison is the capital of which state?','Wisconsin / Minnesota','WISCONSIN','Madison is Wisconsin’s capital.','Name all 50 US state capitals.','https://typologyquiz.com/trivia/us-state-capitals/'),
('0922-07','Olympia is the capital of which state?','Washington / Oregon','WASHINGTON','Olympia is Washington’s capital.','Name all 50 US state capitals.','https://typologyquiz.com/trivia/us-state-capitals/'),
('0922-08','How many planets orbit the Sun?','8 / 9','8','NASA counts eight planets in our solar system.','Name the planets in 30 seconds.','https://typologyquiz.com/trivia/planets/'),
('0922-09','Which planet has liquid water at its surface?','Earth / Venus','EARTH','NASA says Earth is the only planet found with liquid water at its surface.','Name the planets in 30 seconds.','https://typologyquiz.com/trivia/planets/'),
('0922-10','The Sun is closest to which kind of object?','A star / A planet','A STAR','The Sun is the only star in our solar system.','Name the planets in 30 seconds.','https://typologyquiz.com/trivia/planets/')]
def f(n,b=False): return ImageFont.truetype(str(BOLD if b else FONT),n)
def wrap(d,s,width=870,size=76):
    words=s.split(); lines=[]; line=''
    for w in words:
        t=(line+' '+w).strip()
        if d.textlength(t,font=f(size,True))>width and line: lines.append(line); line=w
        else: line=t
    if line: lines.append(line)
    return lines
def render(post,mark,kind):
    pid,q,opts,ans,exp,cta,url=post; bg=['#f7f3ea','#e7f4f1','#eef1ff'][int(pid[-1])%3]; ink='#171827'; accent=['#e85b48','#157a74','#315bd6'][int(pid[-1])%3]
    im=Image.new('RGB',(1080,1920),bg); d=ImageDraw.Draw(im); d.rectangle((0,0,1080,24),fill=accent); im.paste(mark,(84,172),mark); d.text((190,195),'@typologyquiz',font=f(38),fill=ink)
    d.text((84,340),'PICK ONE BEFORE THE REVEAL',font=f(30),fill=accent)
    if kind=='question':
        y=470
        for line in wrap(d,q): d.text((84,y),line,font=f(78,True),fill=ink); y+=100
        if opts:
            y=850
            for i,o in enumerate(opts.split(' / ')):
                d.rounded_rectangle((84,y,996,y+125),radius=18,outline=accent,width=4); d.text((125,y+30),chr(65+i),font=f(48,True),fill=accent); d.text((215,y+33),o,font=f(58,True),fill=ink); y+=160
        d.text((84,1510),'Lock in your answer.',font=f(42),fill=ink)
    elif kind=='reveal':
        d.text((84,470),'THE ANSWER',font=f(34,True),fill=accent); y=650
        for line in wrap(d,ans,870,92): d.text((84,y),line,font=f(92,True),fill=ink); y+=115
        d.rectangle((84,980,240,992),fill=accent); y=1060
        for line in wrap(d,exp,870,48): d.text((84,y),line,font=f(48),fill=ink); y+=70
        d.text((84,1510),'Keep your score.',font=f(42),fill=ink)
    else:
        d.text((84,500),cta,font=f(75,True),fill=ink); d.rounded_rectangle((84,950,996,1120),radius=22,fill=accent); d.text((255,1005),'typologyquiz.com',font=f(60,True),fill='#ffffff'); d.text((84,1320),'Free quizzes. No signup.',font=f(44),fill=ink)
    return im
def main():
    OUT.mkdir(parents=True,exist_ok=True); logo=OUT/'brand-mark.png'
    if not logo.exists():
        source=Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/brand-mark.png')
        logo.write_bytes(source.read_bytes())
    mark=Image.open(logo).convert('RGBA'); enc=ROOT/'scripts/social/encode-video.swift'; binary=OUT/'encode-video'; subprocess.run(['swiftc','-O',str(enc),'-o',str(binary)],check=True)
    manifest=[]
    for post in POSTS:
        pid,q,opts,ans,exp,cta,url=post; folder=OUT/pid; folder.mkdir(exist_ok=True); scenes=[]
        for i,(kind,dur) in enumerate([('question',5),('question',3),('reveal',5),('cta',3)]):
            p=folder/f'{i:02d}-{kind}.png'; render(post,mark,kind).save(p); scenes.append({'image':str(p),'duration':dur})
        tl=folder/'timeline.json'; tl.write_text(json.dumps({'width':1080,'height':1920,'fps':30,'scenes':scenes},indent=2)); video=OUT/f'{pid}.mp4'; subprocess.run([str(binary),str(tl),str(video)],check=True)
        caption=f'{q} {opts+" — " if opts else ""}Answer: {ans.title()}. {exp} {cta} {url} #trivia #typologyquiz'
        (folder/'caption.txt').write_text(caption+'\n'); manifest.append({'id':pid,'filename':video.name,'question':q,'choices':opts.split(' / ') if opts else [],'answer':ans,'explanation':exp,'quiz_url':url,'caption':caption,'duration_seconds':16,'media_method':'Original Pillow/vector graphics; native AVFoundation H.264 encode','sha256':hashlib.sha256(video.read_bytes()).hexdigest()})
    (OUT/'asset-index.json').write_text(json.dumps(manifest,indent=2)); print(json.dumps(manifest,indent=2))
if __name__=='__main__': main()
