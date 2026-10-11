#!/usr/bin/env python3
"""Render original, source-checked Alberta Class 7 TikTok drafts.

These are local assets only. They never upload, draft, schedule, or post.
Facts are constrained to the Government of Alberta driver's guide and school-zone page.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import hashlib, json, subprocess, textwrap

ROOT = Path('/Users/sudiptasarkar/dev/typologyquiz')
OUT = Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/2026-10-11-driving')
FONT = Path('/System/Library/Fonts/Supplemental/Arial.ttf')
BOLD = Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')
MARK = Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/brand-mark.png')
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

def f(size,bold=False): return ImageFont.truetype(str(BOLD if bold else FONT),size)
def lines(draw,text,size,width=860,bold=True):
    words=text.split(); out=[]; cur=''
    for word in words:
        trial=(cur+' '+word).strip()
        if cur and draw.textlength(trial,font=f(size,bold))>width:
            out.append(cur); cur=word
        else: cur=trial
    if cur: out.append(cur)
    return out
def centered(draw,text,y,size,color=INK,bold=True,width=860,gap=1.18):
    for line in lines(draw,text,size,width,bold):
        draw.text(((W-draw.textlength(line,font=f(size,bold)))/2,y),line,font=f(size,bold),fill=color)
        y+=int(size*gap)
    return y
def base(post, logo):
    im=Image.new('RGB',(W,H),CREAM); d=ImageDraw.Draw(im)
    d.rectangle((0,0,W,22),fill=TEAL)
    im.paste(logo,(78,100),logo); d.text((178,119),'@typologyquiz',font=f(35),fill=INK)
    d.rounded_rectangle((78,246,1002,316),radius=18,fill=TEAL)
    label='ALBERTA CLASS 7 · PRACTICE ONLY'
    d.text(((W-d.textlength(label,font=f(29,True)))/2,267),label,font=f(29,True),fill='white')
    d.rounded_rectangle((340,350,740,410),radius=24,outline=TEAL,width=3)
    d.text(((W-d.textlength(post['topic'],font=f(27,True)))/2,365),post['topic'],font=f(27,True),fill=TEAL)
    return im,d
def draw_road_icon(d,kind):
    if kind=='STOP SIGN':
        cx,cy=540,1035; r=190; pts=[]
        import math
        for i in range(8):
            a=math.pi/8+i*2*math.pi/8; pts.append((cx+r*math.cos(a),cy+r*math.sin(a)))
        d.polygon(pts,fill=CORAL,outline='white',width=14); d.text((cx-97,cy-37),'STOP',font=f(66,True),fill='white')
    elif kind=='YIELD SIGN':
        pts=[(540,815),(770,1225),(310,1225)]
        d.polygon(pts,fill='white',outline=CORAL,width=20); d.text((438,1050),'YIELD',font=f(44,True),fill=CORAL)
    elif kind in ('RED LIGHT','RIGHT ON RED'):
        d.rounded_rectangle((415,770,665,1310),radius=115,fill='#26303b'); d.ellipse((475,835,605,965),fill=CORAL); d.ellipse((475,985,605,1115),fill=YELLOW); d.ellipse((475,1135,605,1265),fill='#38a169')
        if kind=='RIGHT ON RED':
            d.arc((680,970,900,1190),0,90,fill=TEAL,width=20); d.polygon([(900,1080),(845,1048),(857,1114)],fill=TEAL)
    elif kind=='SCHOOL ZONE':
        # A pentagon distinguishes a school warning sign from the diamond warning family.
        d.polygon([(540,755),(785,930),(690,1235),(390,1235),(295,930)],fill='#d5ff5c',outline='#26303b',width=15); d.text((462,900),'30',font=f(94,True),fill='#26303b'); d.text((382,1035),'SCHOOL',font=f(39,True),fill='#26303b')
    else:
        d.rectangle((275,1000,805,1080),fill='#515562'); d.rectangle((480,660,600,1000),fill='#515562'); d.ellipse((475,700,605,830),fill='#38a169')
        d.rectangle((345,1130,735,1190),fill='#c0c5cc'); d.rectangle((345,1210,735,1270),fill='#c0c5cc')
def render(post,scene,logo):
    im,d=base(post,logo); centered(d, post['question'] if scene==0 else (post['answer'] if scene==2 else ('Choose before the reveal' if scene==1 else 'Practice the rule, then read the official guide')), 470, 66 if scene!=2 else 70, TEAL if scene==2 else INK, True, 900)
    if scene in (0,1):
        draw_road_icon(d,post['topic'])
        if scene==1:
            y=1400
            for choice in post['choices']:
                d.rounded_rectangle((145,y,935,y+130),radius=24,fill='white',outline=TEAL,width=4)
                centered(d,choice,y+37,42,INK,True,730); y+=165
    elif scene==2:
        d.rounded_rectangle((125,750,955,1190),radius=32,fill='white',outline=TEAL,width=5); draw_road_icon(d,post['topic'])
        centered(d,post['detail'],1300,42,INK,False,880)
    else:
        d.rounded_rectangle((125,780,955,1060),radius=32,fill=TEAL)
        centered(d,'ALBERTA CLASS 7',855,62,'white',True,780)
        centered(d,'Free practice · explanations · official-source links',1165,39,INK,False,860)
        centered(d,'TypologyQuiz.com/driving/alberta',1285,42,TEAL,True,880)
    y=1660
    for j in range(4): d.rounded_rectangle((240+j*155,y,370+j*155,y+14),radius=7,fill=TEAL if j<=scene else '#d8d8dc')
    d.text((79,1810),'Original TypologyQuiz vector artwork · check the official Alberta guide',font=f(22),fill='#525464')
    return im

def main():
    OUT.mkdir(parents=True,exist_ok=True)
    if not MARK.exists(): raise SystemExit('missing logo')
    logo=Image.open(MARK).convert('RGBA'); logo.thumbnail((74,74),Image.Resampling.LANCZOS)
    encoder=OUT/'encode-video'; subprocess.run(['swiftc','-O',str(ROOT/'scripts/social/encode-video.swift'),'-o',str(encoder)],check=True)
    manifest=[]
    for post in POSTS:
        folder=OUT/post['id']; folder.mkdir(exist_ok=True); scenes=[]
        for i in range(4):
            image=folder/f'{i:02d}.png'; render(post,i,logo).save(image); scenes.append({'image':str(image),'duration':4})
        timeline=folder/'timeline.json'; timeline.write_text(json.dumps({'width':W,'height':H,'fps':FPS,'scenes':scenes},indent=2))
        video=OUT/f"{post['id']}.mp4"; subprocess.run([str(encoder),str(timeline),str(video)],check=True)
        (folder/'caption.txt').write_text(post['caption']+'\n')
        qa={'video':str(video),'duration_seconds':16,'width':W,'height':H,'fps':FPS,'audio':'none','sha256':hashlib.sha256(video.read_bytes()).hexdigest(),'source':post['source'],'route':DRIVING,'status':'prepared_only_not_uploaded_or_scheduled'}
        (OUT/f"{post['id']}.qa.json").write_text(json.dumps(qa,indent=2))
        manifest.append({**post,**qa})
    (OUT/'asset-index.json').write_text(json.dumps(manifest,indent=2))
    print(json.dumps(manifest,indent=2))
if __name__=='__main__': main()
