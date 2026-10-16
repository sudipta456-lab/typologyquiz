#!/usr/bin/env python3
"""Private local renderer: full-motion 15s Story clips with timed, collision-checked overlays.

Reads docs/growth/tiktok/2026-10-15-full-motion-stories-brief.json, builds four transparent 1080x1920
overlays per item (measured with scripts/social/layout.py), and composites them over the raw AI clip
<work>/2026-10-15-full-motion-stories/raw/<id>-raw.mp4 with ffmpeg. Local only: never uploads or posts.
An existing final MP4 is never overwritten. --overlays-only needs no raw clips.
"""
import argparse, hashlib, json, os, re, shutil, subprocess, sys, uuid
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageStat

sys.path.insert(0, str(Path(__file__).resolve().parent))
import layout as L

ROOT = Path(__file__).resolve().parents[2]
BRIEF = ROOT / 'docs/growth/tiktok/2026-10-15-full-motion-stories-brief.json'
STORIES = L.WORK / '2026-10-15-full-motion-stories'
sys.path.insert(0, str(L.WORK / 'tools'))

W, H, FPS, DUR = 1080, 1920, 24, 15
SAFE = (84, 180, 924, 1570)
NAVY = (11, 27, 51); CREAM = (247, 243, 234); TEAL = (60, 200, 184)
ZONES = {  # disjoint vertical zones; content must sit inside its zone, middle stays clear
    'handle-zone': (84, 180, 924, 300), 'top-zone': (84, 320, 924, 640), 'clear-middle': (84, 660, 924, 1190),
    'bottom-zone': (84, 1210, 924, 1490), 'caveat-zone': (84, 1500, 924, 1570)}
PROGRESS = (84, 1560, 924, 1564)  # decorative bar, child of caveat-zone, below the caveat text
CAVEAT = {'alien': 'Fictional, just for fun', 'driving': 'Unofficial practice', 'physics': 'Physics interest only'}
TIMES = (1.5, 5, 9.5, 13)
PAD_X, PAD_Y = 36, 22


def sha(path):
    h = hashlib.sha256()
    with open(path, 'rb') as f:
        for chunk in iter(lambda: f.read(1 << 20), b''):
            h.update(chunk)
    return h.hexdigest()


# ---------- overlays ----------
def scrims():
    img = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    for y in range(H):
        a = 0
        if y < 640: a = 165
        elif y < 780: a = int(165 * (780 - y) / 140)
        elif y > 1210: a = 175
        elif y > 1100: a = int(175 * (y - 1100) / 110)
        if a: d.line((0, y, W, y), fill=NAVY + (a,))
    return img


def panel(img, box, accent=True, radius=26):
    layer = Image.new('RGBA', img.size, (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    d.rounded_rectangle(box, radius=radius, fill=NAVY + (140,), outline=TEAL + (150,), width=2)
    if accent:
        d.rounded_rectangle((box[0], box[1], box[0] + 10, box[3]), radius=5, fill=TEAL + (255,))
    img.alpha_composite(layer)


def build_overlay(item, phase):
    lay = L.Layout(safe=SAFE, name=f"{item['id']} phase{phase + 1}")
    for n, b in ZONES.items():
        lay.add(n, b)
    img = scrims(); d = ImageDraw.Draw(img); texts = []
    x0, x1 = SAFE[0], SAFE[2]

    def put(name, text, region, size, parent, color, min_size, bold=True, align='left', valign='top'):
        blk = lay.text(name, text, region, size, parent=parent, min_size=min_size, bold=bold, align=align, valign=valign)
        texts.append((blk, color)); return blk

    # persistent: handle, tag pill, caveat
    put('handle', '@typologyquiz', (x0, 190, x1, 232), 30, 'handle-zone', CREAM + (235,), 30)
    tag = L.fit_text(item['tag'], (x0 + 22, 246, x1 - 22, 288), 26, min_size=24)
    pill = (x0, tag.bbox[1] - 9, tag.bbox[2] + 22, tag.bbox[3] + 9)
    lay.add('tag-pill', pill, 'handle-zone'); lay.add('tag', tag.bbox, 'tag-pill'); texts.append((tag, TEAL + (255,)))
    cav = 'AI-generated video' + (f" • {CAVEAT[item['id']]}" if item['id'] in CAVEAT else '')
    put('caveat', cav, (x0, 1508, x1, 1550), 34, 'caveat-zone', CREAM + (235,), 32)

    lay.add('progress', PROGRESS, 'caveat-zone')

    bottom_pad = (x0 + 10 + PAD_X, 1240, x1 - PAD_X, 1490 - PAD_Y)
    boxes = []
    if phase == 0:
        put('hook', item['hook'], (x0, 320, x1, 500), 64, 'top-zone', CREAM + (255,), 52)
        put('question', item['question'], (x0, 520, x1, 640), 48, 'top-zone', TEAL + (255,), 32)
    elif phase == 1:
        put('question', item['question'], (x0, 320, x1, 640), 64, 'top-zone', CREAM + (255,), 52)
        for i, ch in enumerate(item['choices']):
            box = (x0, 1230 + i * 135, x1, 1345 + i * 135)
            lay.add(f'choice{i + 1}-panel', box, 'bottom-zone'); boxes.append(box)
            put(f'choice{i + 1}', ch, (x0 + 10 + PAD_X, box[1] + 12, x1 - PAD_X, box[3] - 12), 44, f'choice{i + 1}-panel', CREAM + (255,), 32, valign='center')
    elif phase == 2:
        put('answer', item['answer'], (x0, 320, x1, 640), 64, 'top-zone', TEAL + (255,), 52)
        blk = L.fit_text(item['detail'], bottom_pad, 48, min_size=32, valign='bottom')
        box = (x0, blk.bbox[1] - PAD_Y, x1, 1490); boxes.append(box)
        lay.add('detail-panel', box, 'bottom-zone'); lay.add('detail', blk.bbox, 'detail-panel'); texts.append((blk, CREAM + (255,)))
    else:
        put('cta', item['cta'], (x0, 320, x1, 640), 64, 'top-zone', CREAM + (255,), 52)
        route = item['route']
        for lines in (route, route.replace('/', '/\n').strip()):  # break only if one line cannot be read
            try:
                rb = L.fit_text(lines, (bottom_pad[0], 1350, bottom_pad[2], bottom_pad[3]), 42, min_size=32, valign='bottom'); break
            except L.LayoutError:
                rb = None
        if rb is None:
            raise L.LayoutError(f"{item['id']}: route {route} unreadable")
        brand = L.fit_text('TypologyQuiz.com', (bottom_pad[0], 1240, bottom_pad[2], rb.bbox[1] - 14), 56, min_size=32, valign='bottom')
        box = (x0, brand.bbox[1] - PAD_Y, x1, 1490); boxes.append(box)
        lay.add('route-panel', box, 'bottom-zone'); lay.add('brand', brand.bbox, 'route-panel'); lay.add('route', rb.bbox, 'route-panel')
        texts += [(brand, CREAM + (255,)), (rb, TEAL + (255,))]
    lay.check()
    for b in boxes: panel(img, b)
    panel_tag = Image.new('RGBA', img.size, (0, 0, 0, 0))
    ImageDraw.Draw(panel_tag).rounded_rectangle(pill, radius=(pill[3] - pill[1]) // 2, fill=NAVY + (150,), outline=TEAL + (170,), width=2)
    img.alpha_composite(panel_tag)
    d = ImageDraw.Draw(img)
    for blk, color in texts: blk.draw(d, color)
    return img, lay.report()


def write_overlays(item, out_dir):
    out_dir.mkdir(parents=True, exist_ok=True)
    files, reports = [], []
    for p in range(4):
        img, rep = build_overlay(item, p)
        f = out_dir / f"{item['id']}-phase{p + 1}.png"
        img.save(f); files.append(f); reports.append(rep)
    # preview only: overlays over a mid-tone gradient, 360x640 each
    sheet = Image.new('RGB', (360 * 4, 640))
    for i, f in enumerate(files):
        bg = Image.new('RGBA', (W, H)); g = ImageDraw.Draw(bg)
        for y in range(H): g.line((0, y, W, y), fill=(90 + y // 20, 120, 130, 255))
        bg.alpha_composite(Image.open(f)); sheet.paste(bg.convert('RGB').resize((360, 640)), (360 * i, 0))
    sheet.save(out_dir / f"{item['id']}-overlay-preview.png")
    (out_dir / f"{item['id']}-layout.json").write_text(json.dumps({'canvas': [W, H], 'safe': SAFE, 'phases': reports}, indent=2))
    return files, reports


# ---------- ffmpeg ----------
def ffmpeg_exe():
    import imageio_ffmpeg
    return imageio_ffmpeg.get_ffmpeg_exe()


def run(cmd, **kw):
    return subprocess.run(cmd, capture_output=True, **kw)


def probe(ff, path):
    err = run([ff, '-hide_banner', '-i', str(path)]).stderr.decode('utf8', 'replace')
    m = re.search(r'Duration: (\d+):(\d+):([\d.]+)', err)
    dur = int(m[1]) * 3600 + int(m[2]) * 60 + float(m[3]) if m else None
    vid = re.search(r'Stream #\S+: Video: ([^,\s]+).*?, (\d+)x(\d+)[^,]*, (?:[^,]*, )?([\d.]+) fps', err)
    audio = re.findall(r'Stream #\S+: Audio: ([^,]+),\s*(\d+) Hz', err)
    return {'duration': dur, 'video': {'codec': vid[1], 'width': int(vid[2]), 'height': int(vid[3]), 'fps': float(vid[4])} if vid else None,
            'audio_tracks': [{'codec': a[0], 'sample_rate': int(a[1])} for a in audio], 'pix_fmt_yuv420p': 'yuv420p' in err}


def small_gray(ff, path, t, crop_fill=False):
    vf = (f'scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},' if crop_fill else '') + 'scale=108:192,format=gray'
    r = run([ff, '-v', 'error', '-ss', str(t), '-i', str(path), '-frames:v', '1', '-vf', vf, '-f', 'rawvideo', '-'])
    if len(r.stdout) != 108 * 192:
        raise RuntimeError(f'could not decode frame at {t}s of {path}: {r.stderr.decode()[:200]}')
    return Image.frombytes('L', (108, 192), r.stdout)


def mean_diff(a, b):
    return round(ImageStat.Stat(ImageChops.difference(a, b)).mean[0], 3)


def build_filter():
    f = f'[0:v]scale={W}:{H}:force_original_aspect_ratio=increase,crop={W}:{H},fps={FPS},setsar=1,format=yuv420p[b0];'
    start = 0
    for i, secs in enumerate(PHASES):
        end = start + secs
        f += f"[b{i}][{i + 1}:v]overlay=0:0:enable='gte(t,{start})*lt(t,{end})':eof_action=repeat:format=auto[b{i + 1}];"
        start = end
    # thin progress bar: dim track plus 30 segments switched on by enable expressions (drawbox w cannot use t)
    f += f'[b4]drawbox=x=84:y={PROGRESS[1]}:w=840:h=4:color=0xf7f3ea@0.25:t=fill'
    for i in range(30):
        f += f",drawbox=x={84 + 28 * i}:y={PROGRESS[1]}:w=28:h=4:color=0x3cc8b8@0.95:t=fill:enable='gte(t,{i * DUR / 30})'"
    f += ',format=yuv420p[v]'
    return f


def render(item, ff, raw, final, qa_dir, overlay_files, reports, tmp_dir, failed_dir):
    """Render to a unique temp file, run full QA on it, and only link it to `final` if QA passes."""
    rinfo = probe(ff, raw)
    if not rinfo['video'] or (rinfo['duration'] or 0) < DUR - 0.1:
        raise SystemExit(f"{item['id']}: raw clip too short or unreadable ({rinfo['duration']}s); no loop/freeze padding is allowed")
    token = uuid.uuid4().hex[:12]
    tmp_dir.mkdir(parents=True, exist_ok=True)
    tmp = tmp_dir / f"{item['id']}-{token}.mp4"
    scratch = tmp_dir / f"{item['id']}-{token}-qa"
    try:
        cmd = [ff, '-hide_banner', '-v', 'error', '-n', '-threads', '4', '-filter_threads', '1', '-filter_complex_threads', '1', '-i', str(raw)]
        for f in overlay_files: cmd += ['-i', str(f)]
        cmd += ['-filter_complex', build_filter(), '-map', '[v]', '-map', '0:a:0?', '-t', str(DUR), '-r', str(FPS),
                '-c:v', 'libx264', '-threads', '4', '-preset', 'medium', '-crf', '18', '-pix_fmt', 'yuv420p', '-profile:v', 'high',
                '-c:a', 'aac', '-b:a', '160k', '-movflags', '+faststart', str(tmp)]
        r = run(cmd)
        if r.returncode or r.stderr.strip():
            raise SystemExit(f"{item['id']}: ffmpeg failed\n{r.stderr.decode()[-1500:]}")

        scratch.mkdir()
        info = probe(ff, tmp)
        dec = run([ff, '-v', 'error', '-i', str(tmp), '-f', 'null', '-'])
        decode_err = dec.stderr.decode().strip()
        frames, tiles = [], []
        for t in TIMES:
            fp = scratch / f"{item['id']}-frame-{str(t).replace('.', 'p')}s.png"
            e = run([ff, '-v', 'error', '-ss', str(t), '-i', str(tmp), '-frames:v', '1', '-y', str(fp)])
            if e.returncode or not fp.exists():
                raise SystemExit(f"{item['id']}: could not extract frame at {t}s")
            frames.append(fp); tiles.append(Image.open(fp).convert('RGB').resize((360, 640)))
        sheet = Image.new('RGB', (360 * len(tiles), 640))
        for i, tile in enumerate(tiles): sheet.paste(tile, (360 * i, 0))
        contact = scratch / f"{item['id']}-contact.png"; sheet.save(contact)
        raws = {t: small_gray(ff, raw, t, True) for t in (2, 6, 10)}
        motion = {'raw_mean_abs_diff_2s_vs_6s': mean_diff(raws[2], raws[6]), 'raw_mean_abs_diff_6s_vs_10s': mean_diff(raws[6], raws[10]),
                  'raw_mean_abs_diff_2s_vs_10s': mean_diff(raws[2], raws[10])}
        motion['non_identical'] = all(v > 0.3 for v in list(motion.values()))
        overlay_effect = {str(t): mean_diff(small_gray(ff, tmp, t), small_gray(ff, raw, t, True)) for t in TIMES}
        qa = {'id': item['id'], 'canvas': [W, H], 'fps_target': FPS, 'duration_target': DUR, 'phase_seconds': PHASES,
              'output': {'path': str(final), 'sha256': sha(tmp), **info}, 'input': {'path': str(raw), 'sha256': sha(raw), **rinfo},
              'overlays': [{'path': str(f), 'sha256': sha(f)} for f in overlay_files], 'brief_sha256': sha(BRIEF),
              'layout_reports': reports, 'full_decode_errors': decode_err or None, 'decode_returncode': dec.returncode,
              'motion_check': motion, 'overlay_vs_raw_mean_diff_at_frame_times': overlay_effect,
              'audio_retained': bool(info['audio_tracks']) == bool(rinfo['audio_tracks']), 'ffmpeg_command': cmd}
        ok = (dec.returncode == 0 and not decode_err and info['video'] and (info['video']['width'], info['video']['height']) == (W, H) and abs(info['video']['fps'] - FPS) < 0.01
              and abs(info['duration'] - DUR) < 0.2 and motion['non_identical'] and qa['audio_retained'] and all(v > 1 for v in overlay_effect.values()))
        qa['qa_pass'] = bool(ok)

        if not ok:  # quarantine under a fresh name; no final MP4 and no sealed QA file
            failed_dir.mkdir(parents=True, exist_ok=True)
            bad = failed_dir / f"{item['id']}-{token}.mp4"
            shutil.move(str(tmp), bad)
            qa['failed_path'] = str(bad)
            (failed_dir / f"{item['id']}-{token}.qa.json").write_text(json.dumps(qa, indent=2))
            return qa

        qa_dir.mkdir(parents=True, exist_ok=True)
        moved = []
        for f in [*frames, contact]:
            dest = qa_dir / f.name; os.replace(f, dest); moved.append(str(dest))
        qa['frames'], qa['contact_sheet'] = moved[:-1], moved[-1]
        qa_path = qa_dir / f"{item['id']}.qa.json"
        with open(qa_path, 'x') as fh:  # exclusive: never replaces an existing QA record
            fh.write(json.dumps(qa, indent=2))
        try:
            os.link(tmp, final)  # fails if a final appeared meanwhile; never replaces
        except BaseException:
            qa_path.unlink(missing_ok=True)
            raise
        return qa
    finally:
        tmp.unlink(missing_ok=True)
        shutil.rmtree(scratch, ignore_errors=True)


def sealed_status(final, qa_path):
    """Return None if the item has no sealed output, else (ok, message)."""
    if not final.exists() and not qa_path.exists():
        return None
    if not qa_path.exists():
        return False, f"final exists without QA record: {final}"
    try:
        qa = json.loads(qa_path.read_text())
    except ValueError:
        return False, f"unreadable QA record: {qa_path}"
    if not qa.get('qa_pass'):
        return False, f"existing QA record has qa_pass=false: {qa_path}"
    if not final.exists():
        return False, f"QA record exists but final MP4 is missing: {final}"
    if sha(final) != qa.get('output', {}).get('sha256'):
        return False, f"final MP4 sha256 does not match QA record: {final}"
    return True, f"verified existing, not touched: {final}"


def main():
    global PHASES
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument('--only', action='append', default=[], help='item id(s), repeat or comma-separate')
    ap.add_argument('--overlays-only', action='store_true', help='write overlays + layout reports; needs no raw clips')
    ap.add_argument('--stories-dir', type=Path, default=STORIES, help=argparse.SUPPRESS)
    ap.add_argument('--final-dir', type=Path, default=None, help='output dir for overlays/qa/final MP4s (default <stories-dir>/final)')
    a = ap.parse_args()
    brief = json.loads(BRIEF.read_text())
    PHASES = brief['phase_seconds']
    assert sum(PHASES) == DUR and (brief['width'], brief['height']) == (W, H) and tuple(brief['safe']) == SAFE and brief['fps'] == FPS
    items = L.select(brief['items'], a.only)
    final_dir = a.final_dir or a.stories_dir / 'final'
    tmp_dir, failed_dir = a.stories_dir / 'render-tmp', a.stories_dir / 'failed'
    ff = None if a.overlays_only else ffmpeg_exe()
    failed = 0
    for item in items:
        try:
            final = final_dir / item['output_filename']
            status = sealed_status(final, final_dir / 'qa' / f"{item['id']}.qa.json")
            if status:  # decided before any overlay/report write
                print(f"{item['id']}: {status[1]}")
                failed += not status[0]
                continue
            files, reports = write_overlays(item, final_dir / 'overlays')
            print(f"{item['id']}: overlays ok ({sum(len(r) for r in reports)} regions checked over 4 phases)")
            if a.overlays_only:
                continue
            raw = a.stories_dir / 'raw' / f"{item['id']}-raw.mp4"
            if not raw.exists():
                print(f"  raw missing: {raw}"); failed += 1; continue
            qa = render(item, ff, raw, final, final_dir / 'qa', files, reports, tmp_dir, failed_dir)
            print(f"  rendered {final.name} qa_pass={qa['qa_pass']} motion={qa['motion_check']}")
            if not qa['qa_pass']:
                print(f"  QA FAILED, quarantined: {qa['failed_path']}")
                failed += 1
        except (Exception, SystemExit) as e:
            print(f"{item['id']}: FAILED {type(e).__name__}: {e}"); failed += 1
    sys.exit(1 if failed else 0)


if __name__ == '__main__':
    main()
