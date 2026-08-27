# TypologyQuiz — Image Prompt Sheets (v2)

Asset formats per quiz (updated):

| File | Quiz | Format | Size |
|---|---|---|---|
| `01-kkotmal.md` | Kkotmal Flower | Flat flower **icons**, transparent bg | 1024×1024 |
| `02-doubutsu.md` | Doubutsu Uranai | Animal **portraits** | 1200×1600 (3:4) |
| `03-hafez.md` | Fal-e Hafez | Persian-miniature **backgrounds** | 2560×1440 (16:9) |
| `05-shahnameh.md` | Shahnameh Hero | Miniature backgrounds **with hero silhouette** | 2560×1440 (16:9) |
| `04-fal-qahveh.md` | Fal-e Qahveh | Persian-miniature **backgrounds** (symbol scenes) | 2560×1440 (16:9) |

## Shared rules

- Flat vector, clean solid fills, **no outlines**, no gradients, no shadows,
  no photo texture. Consistent style across every asset in a set.
- Backgrounds: keep the **left ~40% visually calm** — result-page text will
  overlay there. No people except where specified. Never any baked-in text.
- Icons: transparent PNG, single centered motif, ≥10% padding on all sides.
- Negative prompt for every generation:
  `outline, black borders, gradient, 3D render, photorealism, paper texture, drop shadow, watermark, signature, letters, words, gibberish text, cropped subject`
