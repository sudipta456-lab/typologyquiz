"""Measured text and region collision checks for local social renderers.

Text is measured from Pillow's actual glyph bounding boxes, wrapped inside a
declared region and shrunk within bounds. Regions are checked independently:
siblings may not overlap, and a child (text on a card) must sit inside its
declared parent. Impossible content raises LayoutError instead of overflowing.
"""
import json
from dataclasses import dataclass, field
from pathlib import Path
from PIL import ImageFont

SAFE = (72, 170, 930, 1580)
FONT = Path('/System/Library/Fonts/Supplemental/Arial.ttf')
BOLD = Path('/System/Library/Fonts/Supplemental/Arial Bold.ttf')


class LayoutError(ValueError):
    pass


_fonts = {}
def font(size, bold=False, path=None):
    key = (str(path or (BOLD if bold else FONT)), size)
    if key not in _fonts:
        _fonts[key] = ImageFont.truetype(key[0], size)
    return _fonts[key]


def _inside(inner, outer):
    return inner[0] >= outer[0] and inner[1] >= outer[1] and inner[2] <= outer[2] and inner[3] <= outer[3]


def _overlap(a, b, gap=0):
    return a[0] < b[2] + gap and b[0] < a[2] + gap and a[1] < b[3] + gap and b[1] < a[3] + gap


def _in_polygon(pt, poly):
    x, y = pt; hit = False
    for (x1, y1), (x2, y2) in zip(poly, poly[1:] + poly[:1]):
        if (y1 > y) != (y2 > y) and x < (x2 - x1) * (y - y1) / (y2 - y1) + x1:
            hit = not hit
    return hit


@dataclass
class TextBlock:
    lines: list      # [(text, origin_x, origin_y)]
    size: int
    bold: bool
    bbox: tuple      # union of actual glyph boxes in absolute pixels
    line_boxes: list = field(default_factory=list)

    def draw(self, draw, fill):
        for text, x, y in self.lines:
            draw.text((x, y), text, font=font(self.size, self.bold), fill=fill, anchor='la')


def _wrap(text, fnt, width):
    lines = []
    for para in text.split('\n'):
        cur = ''
        for word in para.split():
            l, _, r, _ = fnt.getbbox(word)
            if r - l > width:
                raise LayoutError(f'unbreakable word {word!r} is {r - l}px wide, region is {width}px')
            trial = f'{cur} {word}'.strip()
            if cur and _span(fnt, trial) > width:
                lines.append(cur); cur = word
            else:
                cur = trial
        lines.append(cur)
    return lines


def _span(fnt, text):
    l, _, r, _ = fnt.getbbox(text)
    return r - min(l, 0)


def fit_text(text, region, max_size, min_size=None, bold=True, align='left', valign='top', line_gap=1.2, step=2):
    """Wrap text into region=(x0,y0,x1,y1), shrinking max_size -> min_size until it fits."""
    if not text or not text.strip():
        raise LayoutError('empty text')
    min_size = min_size or max(12, int(max_size * 0.6))
    x0, y0, x1, y1 = region
    width, height = x1 - x0, y1 - y0
    problem = None
    for size in range(max_size, min_size - 1, -step):
        fnt = font(size, bold)
        try:
            lines = _wrap(text, fnt, width)
        except LayoutError as err:
            problem = str(err); continue  # a smaller size may still fit the word
        pitch = round(size * line_gap)
        boxes = []
        for i, line in enumerate(lines):
            l, t, r, b = fnt.getbbox(line)
            boxes.append((l, t + i * pitch, r, b + i * pitch))
        top = min(b[1] for b in boxes); bottom = max(b[3] for b in boxes)
        if bottom - top > height:
            problem = f'{len(lines)} lines need {bottom - top}px at {size}px, region is {height}px'
            continue
        dy = y0 - top if valign == 'top' else (y1 - bottom if valign == 'bottom' else y0 + (height - (bottom - top)) // 2 - top)
        out, abs_boxes = [], []
        for i, line in enumerate(lines):
            l, t, r, b = boxes[i]
            dx = x0 if align == 'left' else x0 + (width - (r - l)) // 2 - l
            out.append((line, dx, dy + i * pitch))
            abs_boxes.append((dx + l, dy + t, dx + r, dy + b))
        bbox = (min(b[0] for b in abs_boxes), min(b[1] for b in abs_boxes), max(b[2] for b in abs_boxes), max(b[3] for b in abs_boxes))
        return TextBlock(out, size, bold, bbox, abs_boxes)
    raise LayoutError(f'cannot fit {text!r} in {width}x{height} at {min_size}-{max_size}px: {problem}')


class Layout:
    """Registry of independent regions on one frame. check() raises on any violation."""
    def __init__(self, safe=SAFE, gap=0, name='frame'):
        self.safe, self.gap, self.name = safe, gap, name
        self.items = {}

    def add(self, name, bbox, parent=None, polygon=None):
        """Register a shape/text box. A declared parent makes containment intentional."""
        if name in self.items:
            raise LayoutError(f'{self.name}: duplicate region {name}')
        if parent is not None and parent not in self.items:
            raise LayoutError(f'{self.name}: {name} declares unknown parent {parent}')
        self.items[name] = {'bbox': tuple(int(v) for v in bbox), 'parent': parent, 'polygon': polygon}
        return self.items[name]['bbox']

    def text(self, name, text, region, max_size, parent=None, **kw):
        block = fit_text(text, region, max_size, **kw)
        self.add(name, block.bbox, parent)
        return block

    def _ancestors(self, name):
        out = set()
        while self.items[name]['parent']:
            name = self.items[name]['parent']; out.add(name)
        return out

    def check(self):
        errors = []
        for n, it in self.items.items():
            b = it['bbox']
            if it['parent'] is None and not _inside(b, self.safe):
                errors.append(f'{n} {b} leaves safe region {self.safe}')
            if it['parent']:
                p = self.items[it['parent']]
                if not _inside(b, p['bbox']):
                    errors.append(f'{n} {b} leaves parent {it["parent"]} {p["bbox"]}')
                elif p['polygon'] and not all(_in_polygon(c, p['polygon']) for c in ((b[0], b[1]), (b[2], b[1]), (b[0], b[3]), (b[2], b[3]))):
                    errors.append(f'{n} {b} leaves parent shape {it["parent"]}')
        names = list(self.items)
        for i, a in enumerate(names):
            for c in names[i + 1:]:
                if a in self._ancestors(c) or c in self._ancestors(a):
                    continue
                if _overlap(self.items[a]['bbox'], self.items[c]['bbox'], self.gap):
                    errors.append(f'{a} {self.items[a]["bbox"]} collides with {c} {self.items[c]["bbox"]}')
        if errors:
            raise LayoutError(f'{self.name}: ' + '; '.join(errors))
        return self

    def report(self):
        return [{'name': n, 'bbox': list(i['bbox']), 'parent': i['parent']} for n, i in self.items.items()]


# ---- shared CLI helpers for the local renderers ----
WORK = Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch')
V2 = WORK / '2026-10-14-layout-v2'


def add_cli(parser, default_output):
    parser.add_argument('--output', type=Path, default=default_output, help='output folder (default: new layout-v2 family folder)')
    parser.add_argument('--only', action='append', default=[], help='post id(s), repeat or comma-separate')
    parser.add_argument('--frames-only', action='store_true', help='write scene PNGs, timelines and captions; skip video encode')
    parser.add_argument('--overwrite', action='store_true', help='replace existing outputs (default: fail first)')
    return parser


def select(posts, only, key=lambda p: p['id']):
    ids = [i for chunk in only for i in chunk.split(',') if i]
    if not ids:
        return posts
    known = {key(p) for p in posts}
    missing = [i for i in ids if i not in known]
    if missing:
        raise SystemExit(f'unknown --only id(s): {missing}; known: {sorted(known)}')
    return [p for p in posts if key(p) in ids]


def guard(paths, overwrite):
    """Fail before writing anything if any target exists and --overwrite is absent."""
    clash = [str(p) for p in paths if Path(p).exists()]
    if clash and not overwrite:
        raise SystemExit('refusing to overwrite existing output (use --overwrite):\n  ' + '\n  '.join(clash))


def encoded_artifacts(out, stem):
    """Everything the encoder writes for one item: video, native QA report, decoded-frame check."""
    out = Path(out)
    return [out / f'{stem}.mp4', out / f'{stem}.qa.json', out / f'{stem}.decoded.png']


def guard_frames_only(paths):
    """Frames-only must never sit beside stale encoded artifacts, even with --overwrite. Never deletes."""
    stale = [str(p) for p in paths if Path(p).exists()]
    if stale:
        raise SystemExit('refusing --frames-only: encoded artifacts already exist and would go stale '
                         '(move them away or choose a new --output; nothing was written):\n  ' + '\n  '.join(stale))


def merge_index(path, entries, key='id'):
    old = json.loads(path.read_text()) if path.exists() else []
    merged = {e[key]: e for e in old}
    merged.update({e[key]: e for e in entries})
    path.write_text(json.dumps(list(merged.values()), indent=2))
    return list(merged.values())


def ensure_encoder(out_dir, repo):
    import subprocess
    src = repo / 'scripts/social/encode-video.swift'
    for cand in (WORK / 'encode-video', out_dir / 'encode-video'):
        if cand.exists() and cand.stat().st_mtime >= src.stat().st_mtime:
            return cand
    binary = out_dir / 'encode-video'
    subprocess.run(['swiftc', '-O', str(src), '-o', str(binary)], check=True)
    return binary
