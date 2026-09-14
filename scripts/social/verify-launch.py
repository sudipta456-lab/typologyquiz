#!/usr/bin/env python3
"""Validate production metadata, timeline, safe text bounds and encoded artifacts."""
from pathlib import Path
from PIL import Image
import argparse, hashlib, json
ROOT=Path(__file__).resolve().parents[2]
p=argparse.ArgumentParser();p.add_argument('--output',type=Path,default=Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch'));a=p.parse_args()
manifest=json.loads((ROOT/'docs/growth/tiktok/launch-manifest.json').read_text());posts=manifest['posts']
assert len(posts)==10 and len({x['id'] for x in posts})==10
assert len({x['design'] for x in posts})==10, 'Launch needs varied design families'
checks=[]
for post in posts:
    root=a.output/post['id'];video=a.output/(post['id']+'.mp4')
    qa=json.loads((a.output/(post['id']+'.qa.json')).read_text())
    assert (qa['width'],qa['height'],qa['fps'],qa['duration_seconds'],qa['frames_written'],qa['audio_tracks'])==(1080,1920,30,16,480,0),post['id']
    data=video.read_bytes();assert b'avc1' in data and b'ftyp' in data,post['id']
    assert Image.open(qa['decoded_frame']).size==(1080,1920)
    timeline=json.loads((root/'timeline.json').read_text());assert sum(s['duration'] for s in timeline['scenes'])==post['duration_seconds']
    for scene in timeline['scenes']:assert Image.open(scene['image']).size==(1080,1920)
    boxes=json.loads((root/'typography-qa.json').read_text());assert len(boxes)>20
    assert all(72<=e['bbox'][0]<=e['bbox'][2]<=932 and 170<=e['bbox'][1]<=e['bbox'][3]<=1580 for e in boxes),post['id']
    assert post['quiz_url'] in post['caption'] and post['provenance']
    assert (root/'caption.txt').read_text().strip()==post['caption']
    assert post['beats'][0]['start']==0 and post['beats'][-1]['end']==16
    assert all(b['end']==post['beats'][i+1]['start'] for i,b in enumerate(post['beats'][:-1]))
    checks.append({'id':post['id'],'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest(),'duration_seconds':16,'dimensions':'1080x1920','fps':30,'text_bounds_pass':True,'decoded_reveal_frame':qa['decoded_frame']})
report={'status':'PASS','videos':len(checks),'frames':4800,'total_seconds':160,'all_h264':True,'all_silent':True,'all_text_in_safe_bounds':True,'assets':checks}
(a.output/'qa-report.json').write_text(json.dumps(report,indent=2))
print(f"PASS: {len(checks)} H.264 portrait videos, 4,800 frames, 160 seconds, all captions/timelines/safe text bounds valid.")
