# Image Generation Prompts

Generation-ready prompts for every planned art asset. Written 2026-08-31.

## How to use

1. Generate at **2560x1440** for background (bg) sets, **2048x2048** for icon sets. One image per prompt.
2. Paste the set's **Style block** first, then one **Subject** line per image. Generate a whole set in one sitting with the same settings so the five images match.
3. **The golden rules (every prompt, every tool):**
   - **NO text, letters, numbers, logos, watermarks, badges, or UI chrome anywhere in the image.** This is the rule the last batch broke (the "Ai" badge cost a 7 percent crop on every asset, and the Personal Color set died to baked typos). If the tool insists on a watermark corner, leave 8 percent margin on all edges so the crop is safe.
   - Single scene, one clear subject, center-weighted composition (icons get square center-cropped; keep the subject inside the middle 70 percent).
   - No real people, no celebrity likenesses, no brand logos or trademarked characters.
4. Ship pipeline: drop finished PNGs into `images/`, add rows to `public/results/_STAGING-NOTES.md`, run `node scripts/process-result-art.mjs`, add the mapping in `src/lib/result-art.ts`.

Append a negative prompt where the tool supports it:
`text, letters, numbers, typography, watermark, logo, signature, badge, border, frame, split panel, collage, diptych`

---

## A. Regenerations (fixing the unshippable set + weak banners)

### A1. Personal Color seasons — icon set, 5 images (replaces the typo-ridden set)

**Style block:** Soft editorial illustration, painterly color-field composition built around a draped fabric swatch and one seasonal object on a clean backdrop. Calm, fashion-lookbook mood, gentle grain, no figures, no text of any kind.

| Target | Subject |
|---|---|
| `icons/personal-color-spring.png` | Warm bright spring palette: peach, coral, fresh leaf green, ivory. Silk fabric drape with a sprig of apple blossom and morning light. |
| `icons/personal-color-summer.png` | Cool soft summer palette: powder blue, lavender, rose grey, mist. Chiffon drape with a single hydrangea and hazy seaside light. |
| `icons/personal-color-autumn.png` | Warm deep autumn palette: rust, olive, amber, chocolate. Wool drape with dried maple leaves and low golden light. |
| `icons/personal-color-winter.png` | Cool crisp winter palette: true white, black, sapphire, fuchsia. Satin drape with a frost crystal and sharp studio light. |
| `icons/personal-color-balanced.png` | All four palettes meeting softly in one gradient drape, evenly lit, harmonious. |

### A2. Shahnameh single-scene regens — bg set, 2 images (replaces the diptych compositions)

**Style block:** Persian miniature painting style modernized, deep rose and indigo bands palette, ornate but uncluttered, single heroic scene, cinematic 16:9, no text, no borders, no split panels.

| Target | Subject |
|---|---|
| `bg/shahnameh-rostam.png` | One mighty bearded warrior in tiger-skin armor calmly holding a mace, mountain pass behind him, protective stance, warm dawn light. |
| `bg/shahnameh-sohrab.png` | One young radiant warrior mid-charge on horseback, cloak streaming like a storm cloud, lightning-toned indigo sky, blazing energy. |

---

## B. Hero quiz sets (the viral on-ramps, currently art-less)

### B1. Friend Role — icon set, 6 images

**Style block:** Warm flat illustration with soft gradients, one expressive teen character in a simple scene, inclusive and gender-neutral styling, cozy brand-bright colors (indigo, teal, coral, amber), sticker-like clarity, no text.

| Target | Subject |
|---|---|
| `icons/friend-role-planner.png` | Character happily orchestrating: floating calendar cards, pinned map, colored strings connecting plans around them. |
| `icons/friend-role-comic.png` | Character mid-laugh telling a story, sparkles and comic-energy shapes around them, friends' silhouettes cracking up at the edge. |
| `icons/friend-role-listener.png` | Character leaning in warmly with a mug, soft lamp glow, speech-bubble shapes drifting toward them like paper boats. |
| `icons/friend-role-spark.png` | Character bursting through a door with a new idea, confetti of tickets and glowsticks, motion lines, electric energy. |
| `icons/friend-role-anchor.png` | Character calm at the center of light chaos, steady stance, others' motion blurring around their stillness, grounded warm light. |
| `icons/friend-role-balanced.png` | Character shifting between four faint colored auras at once, playful morphing pose. |

### B2. Group Chat Archetype — icon set, 6 images

**Style block:** Playful flat illustration in a phone-chat world: floating message bubbles, reaction hearts, typing dots as scenery. One character per image, neon-on-dark palette that still reads in light mode, no text inside bubbles (empty or abstract squiggles only), no letters anywhere.

| Target | Subject |
|---|---|
| `icons/groupchat-planner.png` | Character pinning empty event cards to a floating chat thread, organizing bubbles into neat rows. |
| `icons/groupchat-ghost.png` | Translucent character peeking from behind a large read-receipt eye icon, cozy blanket, amused expression. |
| `icons/groupchat-therapist.png` | Character under a desk lamp at night cradling a warm drink, one glowing chat bubble held gently like a bird. |
| `icons/groupchat-meme.png` | Character juggling absurd image cards (cat, frog, sparkles), laughing, bubbles exploding with reaction hearts. |
| `icons/groupchat-archivist.png` | Character in front of a neat filing wall of screenshots and pinned bubbles, magnifying glass, knowing smile. |
| `icons/groupchat-balanced.png` | Character with four small orbiting chat-bubble moons in different colors, relaxed shrug. |

### B3. Delulu Level — bg set, 5 images (spectrum: reality to full fantasy)

**Style block:** Dreamy cinematic illustration, 16:9, one consistent teen character across all five images, the world around them growing progressively more fantastical from image to image. Sunset-pastel palette drifting toward cosmic purple. No text.

| Target | Subject |
|---|---|
| `bg/delulu-1-realist.png` | Character at a tidy desk with a checklist and calculator, ordinary daylight room, everything literal and grounded. |
| `bg/delulu-2-daydreams.png` | Same room, but a soft daydream cloud above the desk holds a tiny stage with a spotlight, character glancing up smiling. |
| `bg/delulu-3-overthinker.png` | Room half-real half-imagined: award podium sketched in glowing lines, character holding both a trophy outline and a to-do list. |
| `bg/delulu-4-cute.png` | Character mid acceptance speech to a mirror, room dissolving into stage lights, confetti beginning, sparkle overload. |
| `bg/delulu-5-anime.png` | Full protagonist mode: character on a floating stage in a cosmic sky, cape, dramatic wind, planets and spotlights, joyous absurdity. |

### B4. Mental Age — icon set, 6 images (no numbers in the art)

**Style block:** Cozy isometric room illustration, one desk-and-shelf vignette per image whose objects tell the age, warm consistent palette, soft light, no people, no numbers or text anywhere.

| Target | Subject |
|---|---|
| `icons/mental-age-15.png` | Chaotic fun desk: game controller, energy drink, sticker-covered laptop, glow lights, homework buried under a hoodie. |
| `icons/mental-age-19.png` | Dorm-ish desk: secondhand espresso mug, concert tickets pinned up, plant in a repurposed jar, laptop with band stickers. |
| `icons/mental-age-25.png` | First-apartment desk: monstera plant, meal-prep container, budgeting notebook, nice headphones, one framed print. |
| `icons/mental-age-34.png` | Settled desk: quality wooden organizer, drip coffee, running shoes underneath, family photo frame turned slightly. |
| `icons/mental-age-47.png` | Comfortable study: reading glasses on a hardback, garden trowel resting on newspaper, classical radio, sensible thermos. |
| `icons/mental-age-62.png` | Serene den: rocking chair by a window, birdwatching binoculars, crossword left mid-solve (blank grid, no letters), tea service, cat asleep. |

---

## C. Cultural sets (same treatment the doubutsu and kkotmal sets got)

### C1. Saju Pillar (Korean five elements) — icon set, 6 images

**Style block:** Minimal Korean traditional art style (dancheong-inspired palette, hanji paper texture), one elemental scene per image, elegant negative space, no text or hanja characters.

| Target | Subject |
|---|---|
| `icons/saju-wood.png` | Young pine growing through spring mist at dawn, fresh green and cream. |
| `icons/saju-fire.png` | A lantern festival flame rising warm against dusk, vermilion and gold. |
| `icons/saju-earth.png` | Terraced hill with a stone hanok wall, ochre and moss, grounded and calm. |
| `icons/saju-metal.png` | A polished bronze bell with one clear strike ripple, silver-grey and white. |
| `icons/saju-water.png` | Deep quiet stream under a crescent moon, indigo and black, single ripple. |
| `icons/saju-balanced.png` | All five elements arranged in a gentle circle (sapling, flame, stone, bell, stream) around calm center space. |

### C2. Ketsueki-gata blood-type personalities — icon set, 5 images (represent by mood and objects, never letters)

**Style block:** Charming Japanese chibi illustration, one small character with a colored aura and telling props, pastel backgrounds, kawaii but not saccharine, no letters or text (blood types must be conveyed by scene only).

| Target | Subject |
|---|---|
| `icons/ketsueki-a.png` | Meticulous character in a pressed cardigan aligning stationery on a spotless desk, red-soft aura, tiny bonsai clipped perfectly. |
| `icons/ketsueki-b.png` | Free-spirit character on a skateboard mid-glide eating dango, headphones on, blue aura, sketchbook fluttering open behind. |
| `icons/ketsueki-o.png` | Easygoing leader character grilling for friends at a park table, big relaxed grin, golden aura, arms wide. |
| `icons/ketsueki-ab.png` | Enigmatic character reading two books at once under moonlight, half-smile, violet aura split cool and warm down the middle. |
| `icons/ketsueki-balanced.png` | All four tiny characters sharing one bench under cherry blossoms, four soft auras blending. |

### C3. K-drama Archetype — bg set, 5 images

**Style block:** Cinematic K-drama still illustration, 16:9, moody romantic lighting, Seoul backdrops, one figure per scene shown from behind or in silhouette (no identifiable faces), rich teal and rose grade, no text or hangul.

| Target | Subject |
|---|---|
| `bg/kdrama-secondlead.png` | Figure holding an umbrella over an empty space beside them in soft rain, warm streetlight, aching gentleness. |
| `bg/kdrama-sunshine.png` | Figure mid-run through a golden market street with coat flying, warm bokeh, unstoppable joyful momentum. |
| `bg/kdrama-genius.png` | Figure at a floor-to-ceiling office window at night, city lights below, one small warm coffee cup breaking the cool palette. |
| `bg/kdrama-bestfriend.png` | Figure dramatically sprawled across a convenience-store table with snacks everywhere, neon glow, chaotic warmth. |
| `bg/kdrama-balanced.png` | Four figures walking together under one row of cherry trees at dusk, ensemble framing. |

### C4. Anime Protagonist — bg set, 5 images

**Style block:** Vibrant anime key-visual style, 16:9, dynamic composition, original characters only (no resemblance to existing anime), saturated but tasteful palette, no text.

| Target | Subject |
|---|---|
| `bg/anime-shonen.png` | Determined original hero character mid-training on a cliff at sunrise, bandaged hands, visible effort and wind, orange energy. |
| `bg/anime-sliceoflife.png` | Character watering balcony plants at golden hour, laundry drifting, steaming tea, train passing softly in the distance. |
| `bg/anime-antihero.png` | Cloaked character walking away from neon city rain, sharp side glance, cool violet-noir grade, quiet menace. |
| `bg/anime-magical.png` | Character mid-transformation in a swirl of ribbons of light and stars, hopeful upward gaze, pink-gold radiance. |
| `bg/anime-balanced.png` | Four distinct silhouettes back-to-back on a rooftop against a giant moon, crossover-episode energy. |

### C5. Filmi Hero (Bollywood) — bg set, 5 images

**Style block:** Hand-painted vintage Bollywood poster style, 16:9, saturated jewel tones, dramatic lighting, original characters only, celebratory not parodic, no text or Devanagari lettering.

| Target | Subject |
|---|---|
| `bg/filmi-hero.png` | Heroic figure with arms spread wide on a mountaintop, wind in scarf, golden sky, maximum heart. |
| `bg/filmi-antihero.png` | Brooding figure in shadow adjusting a collar, half-lit face turned away, smoke and amber rim light. |
| `bg/filmi-comic.png` | Gleeful figure mid-pratfall with flying marigolds and a startled pigeon, bright festival colors. |
| `bg/filmi-loyal.png` | Steadfast figure shoulder-to-shoulder catching a falling friend, monsoon backdrop, warm steady gaze. |
| `bg/filmi-balanced.png` | Full masala ensemble in classic poster pyramid composition, fireworks sky. |

### C6. Anansi Archetype (Ghana) — icon set, 5 images

**Style block:** West African textile-art style with kente-inspired geometric patterning and warm earth palette, bold shapes, folkloric spirit, respectful and celebratory, no text or symbols resembling writing.

| Target | Subject |
|---|---|
| `icons/anansi-spider.png` | Clever stylized spider weaving a web that holds small stars, mischievous elegance, gold on deep brown. |
| `icons/anansi-tortoise.png` | Patient tortoise crossing a patterned landscape, sun arcs marking passing days above its steady path. |
| `icons/anansi-hero.png` | Bold figure with a staff striding toward a rising sun, cape of woven pattern, unmistakable confidence. |
| `icons/anansi-weaver.png` | Hands at a loom weaving threads that become a village scene, quiet connective magic. |
| `icons/anansi-balanced.png` | Storyteller by a fire with spider, tortoise, and hero shapes dancing in the smoke above listeners. |

### C7. Akan Day Names — icon set, 5 images

**Style block:** Modern Ghanaian illustration with adinkra-adjacent geometry (abstract, not actual adinkra symbols), sunrise-to-sunset color story across the set, one expressive scene per image, no text.

| Target | Subject |
|---|---|
| `icons/akan-monday.png` | Calm figure smoothing rippled water at dawn, doves settling, cool gentle blues and silver. |
| `icons/akan-wednesday.png` | Spirited figure speaking with lightning motifs leaving their hands as bright ribbons, midday boldness, red and gold. |
| `icons/akan-friday.png` | Wandering builder figure with a bundle and tools on a winding path connecting two villages, restless afternoon energy. |
| `icons/akan-saturday.png` | Composed leader figure seated under a great tree as others gather, deep evening golds, quiet authority. |
| `icons/akan-balanced.png` | Seven small suns arcing over one figure walking through all of them, full-week wholeness. |

### C8. Four Humors — icon set, 5 images

**Style block:** Illuminated medieval manuscript style modernized with clean flat color, one temperament figure per image inside a decorative circular medallion, parchment backdrop, no text or lettering.

| Target | Subject |
|---|---|
| `icons/humors-sanguine.png` | Airy figure laughing among drifting feathers and songbirds, rose and sky blue, spring lightness. |
| `icons/humors-choleric.png` | Fiery figure mid-stride with a banner of flame shapes, crimson and gold, summer intensity. |
| `icons/humors-melancholic.png` | Thoughtful figure with a violet evening sky and falling leaves, book closed on a finger, autumn depth. |
| `icons/humors-phlegmatic.png` | Serene figure by still water with a sleeping fox, sea green and pearl, winter calm. |
| `icons/humors-balanced.png` | Four medallions interlocked around a compass rose of the four elements. |

### C9. Prakriti Dosha — icon set, 4 images

**Style block:** Ayurvedic botanical illustration style, elegant natural elements, muted jewel palette on cream, serene and respectful, no text or Devanagari.

| Target | Subject |
|---|---|
| `icons/dosha-vata.png` | Wind through tall grasses carrying petals and a kite, quick light movement, lavender and sage. |
| `icons/dosha-pitta.png` | Sun over a steady oil-lamp flame with marigolds, focused warmth, amber and deep red. |
| `icons/dosha-kapha.png` | Rounded river stones with lotus and slow morning mist, grounded softness, jade and cream. |
| `icons/dosha-balanced.png` | Wind, flame, and stone in one tranquil garden scene, evenly composed. |

### C10. Naija Aunty / Uncle — icon set, 5 images

**Style block:** Warm celebratory Nigerian illustration, expressive characters in vibrant ankara-patterned clothing, affectionate humor (laughing WITH, never at), rich color, no text. Cultural note: review with the community lens before shipping; these are beloved archetypes, keep the dignity high.

| Target | Subject |
|---|---|
| `icons/naija-church.png` | Elegant aunty in a magnificent gele headwrap mid-blessing, one knowing raised eyebrow, soft cathedral light, warmth and gentle menace in perfect balance. |
| `icons/naija-matriarch.png` | Sharp-dressed figure at a market stall stacked high, phone in one hand, calculator in the other, three deals happening at once. |
| `icons/naija-preparer.png` | Beaming figure beside a mountain of packed coolers and takeaway containers, ladle raised, table overflowing with jollof and sides. |
| `icons/naija-truthteller.png` | Animated figure mid-declaration at a family gathering, hands wide, sound-wave ripples, everyone else frozen mid-bite. |
| `icons/naija-balanced.png` | Joyful family-gathering scene with all four energies around one table, gold hour light. |

---

## D. Programmatic assets (pipeline, NOT AI generation)

These should be generated by `sharp`/canvas from templates so text stays crisp and correct. Do not AI-generate anything with words.

1. **Per-quiz OG cards (1200x630)** for all 65+ tests and every trivia page: brand mark, quiz title, category color band, subtle art crop where a result set exists. Build as `scripts/generate-og-cards.mjs` at build time.
2. **Trivia hub thumbnails**: state and province map silhouettes rendered from the SVG path data already in `src/lib/trivia/data/`, one brand color per quiz.
3. **Daily minis icons**: letter tiles, tap-grid, versus-cards motifs drawn as SVG components, not images.

## E. New-feature hero images (small AI set, optional)

**Style block:** Same warm flat illustration language as set B, no text.

| Target | Subject |
|---|---|
| `bg/friend-quiz-hero.png` | Two teens back-to-back grinning at their phones, connection sparks arcing between screens, confetti of empty answer bubbles. |
| `bg/daily-hero.png` | A sunrise desk with a streak of glowing calendar dots trailing out the window like a comet. |
| `icons/trivia-us-hero.png` | Stylized US map puzzle with three pieces clicking in, satisfying glow on the fitting piece. |
| `icons/trivia-canada-hero.png` | Stylized Canada map with a maple leaf clicking in as the final piece, northern-lights backdrop. |
