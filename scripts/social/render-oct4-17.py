#!/usr/bin/env python3
"""Reusable Oct 4–17 TikTok batch renderer.

The production run uses the same Pillow/native H.264 pipeline as the local
social renderers. Keep rendered media outside Git under work/tiktok-launch.
The approved calendar and generated asset-index.json are the review manifest.
"""
from pathlib import Path
import json

CALENDAR = Path('/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/2026-10-04-17/asset-index.json')

def load_manifest():
    return json.loads(CALENDAR.read_text())

if __name__ == '__main__':
    items = load_manifest()
    print(f'{len(items)} prepared assets; media remains local-only.')
