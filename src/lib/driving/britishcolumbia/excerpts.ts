import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from British Columbia's official driver material:
// 148 from ICBC's "Learn to drive smart: your guide to driving safely" (the
// guide the Class 7L knowledge test is written from - this edition states the
// law as of March 2026), 6 from ICBC web pages and its knowledge test tip
// sheet carrying the test's format and the Graduated Licensing Program stages,
// and 19 sections of the Motor Vehicle Act (RSBC 1996 c.318, Part 3) carrying
// rules the guide states only as a sign caption, only in part, or not at all:
// the statutory speed defaults, the school and playground zone hours, excessive
// speeding, the school bus duty, right and left turns on red, the flashing
// green approach duty, passing on the right, the minimum passing distance for a
// vulnerable road user, U-turns, right-of-way, stopping position, parking, and
// the definition of a business district.
//
// Every quote below was located mechanically in the fetched source and verified
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; runs of
// whitespace, including the line breaks the PDF inserts mid-sentence, are
// collapsed to single spaces; bullet glyphs become an asterisk; and where the
// source states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The sources' own spellings are preserved as they stand, including
// the guide's "meters" in the vulnerable-road-user passing rule alongside its
// own "metre" elsewhere, because a quote that has been tidied up is no longer a
// quote.
//
// These are quoted rather than summarised because ICBC writes its 50-question
// knowledge test from this material. Each is kept to the operative rule and
// shown with its source, section and a link back to the official page.

export const britishcolumbiaExcerpts: HandbookExcerpt[] = [
  {
    key: "abs-technique",
    quote:
      "In an emergency situation, if you have ABS you should apply " +
      "continuous, firm, hard pressure to the brake pedal until the " +
      "vehicle stops. The computerized sensors automatically release the " +
      "brakes from the wheels to prevent locking.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Anti-lock braking systems (ABS)",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "acceleration-lane-solid-white",
    quote:
      "The acceleration lane is divided from the rest of the roadway by a " +
      "solid white line. Use this lane to match your speed to the speed " +
      "of traffic on the freeway.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Highway or freeway entrances and exits",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "advance-green-ends",
    quote:
      "Once the green arrow has turned off, and only the regular green " +
      "traffic light is on, you may still turn left. But you must yield " +
      "the right-of-way to pedestrians and oncoming traffic.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Left-turn signals",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "advisory-speed-curve",
    quote: "Sharp curve ahead - slow to advisory speed shown",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Warning signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "airbag-25cm",
    quote:
      "If your vehicle is equipped with airbags, you should position your " +
      "seat so you're at least 25 cm (10 in) from the steering wheel.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 2: you and your vehicle - Airbags",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "airbag-hand-position",
    quote:
      "If there is an airbag in the steering wheel, the 9 o'clock and 3 " +
      "o'clock or even an 8 o'clock and 4 o'clock position may be better " +
      "than 10 o'clock and 2 o'clock. This is because your hands could " +
      "hit your face if the airbag goes off when they are in the 10 " +
      "o'clock and 2 o'clock position.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Controlling the wheel",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "animal-strike-angle",
    quote:
      "If the animal is large and you can't stop in time, brake firmly " +
      "and steer to strike the animal at an angle. Let up on the brake " +
      "pedal just before hitting the animal. This will cause the front of " +
      "your vehicle to rise and reduce the chance that the animal will " +
      "come through the windshield.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Animals on the road",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "bac-08-six-hours",
    quote:
      "Transport Canada states that if you have a BAC of .08 it takes " +
      "about six hours for your body to completely process that alcohol " +
      "and return to a BAC of zero.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Facts about alcohol",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "backing-360-check",
    quote:
      "Check around your car before you get into it, then do a 360-degree " +
      "vision check before moving.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Pedestrians",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "bdc-thc-threshold",
    quote:
      "You do not have to have a BAC level of over .08 or a BDC of 2 " +
      "nanograms or more THC.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Penalties for impaired driving",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "bicycle-lane-rules",
    quote:
      "don't drive, stop or park in a bicycle lane. * you may only cross " +
      "a bicycle lane if the white line is broken or to turn into or out " +
      "of a driveway.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Bicycle lanes",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "blind-spot-detectors",
    quote:
      "While these can help you to detect hazards in blind spots or " +
      "behind the vehicle, they do not replace the need to turn your head " +
      "to do a shoulder check or look behind.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Observing behind",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "blowout-response",
    quote:
      "Don't brake suddenly and risk loss of steering control. Ease off " +
      "the accelerator and decelerate slowly. You can start to brake " +
      "gently once the car has slowed down.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Tire blowout",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "brake-failure-response",
    quote:
      "Pump the brakes hard and fast. You may be able to get enough " +
      "braking action to stop the car.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Brake failure",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "bridges-ice-first",
    quote:
      "Bridges and overpasses tend to form ice on their surfaces before " +
      "other road surfaces do.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Ice and snow",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "broken-solid-yellow",
    quote:
      "Broken line and solid line - you may pass only when it is safe and " +
      "the broken line is on your side",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Yellow lines",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "car-length-behind",
    quote:
      "When you stop behind another vehicle at an intersection, leave " +
      "about one car length between your vehicle and the vehicle ahead. " +
      "This way, you will have room to move if you need it.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Controlling the wheel",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "cellphone-50-percent",
    quote:
      "Studies show that drivers who are talking on a cell phone lose " +
      "about 50 per cent of what is going on around them, visually. When " +
      "you are stopped at an intersection or slowed in traffic, you are " +
      "still driving.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Keeping focused",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "centre-of-gravity-rollover",
    quote:
      "A vehicle with a higher centre of gravity is less stable on uneven " +
      "road surfaces and is more likely to tip over on a curve taken at " +
      "higher speeds.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Physics and driving",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "class5-road-test-hour",
    quote:
      "The Class 5 road test requires a higher level of driving skill " +
      "than the Class 7 road test. It gives you the chance to show that " +
      "you are now a safe, experienced driver with excellent vehicle " +
      "control skills. The road test takes about one hour.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - The Class 5 road test",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "coasting-illegal",
    quote:
      "It is illegal to coast downhill in neutral or with the clutch in. " +
      "You need to be in gear to safely control your vehicle.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Gear use",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "construction-signs",
    quote:
      "Obey traffic-control persons, travel within the posted speed, stay " +
      "well back from all equipment and pass only when it is safe.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Construction signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "construction-zone-24-hours",
    quote: "Construction zone speed limits apply 24 hours a day when posted.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Construction zones",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "crash-exchange-info",
    quote:
      "You must exchange the following information with the other driver, " +
      "anyone who has been injured and anyone whose property has been " +
      "damaged: * your name and address * the name and address of the " +
      "registered owner of the vehicle * the licence plate number * " +
      "insurance information.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - You are involved in a crash",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "crash-no-smoking",
    quote:
      "Do not let anyone smoke or light matches near the scene. There " +
      "could be a fuel leak.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Assisting at a crash scene",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "cross-single-yellow-for-cyclist",
    quote:
      "Remember, you are allowed to cross a single solid yellow line when " +
      "passing a cyclist, provided you can do it safely.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Cyclists",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "crosswalk-check-even-on-green",
    quote:
      "Don't enter a crosswalk without checking to see that it's empty, " +
      "even when the light is green. Someone may be trying to dash " +
      "across. People who find it difficult to cross the road quickly, " +
      "such as the elderly, people with disabilities and parents walking " +
      "with young children, may still be in the crosswalk.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Pedestrians",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "crosswalk-flashing-green-warning",
    quote:
      "Crosswalks with flashing green lights are controlled by " +
      "pedestrians. When you see a pedestrian standing near this type of " +
      "crosswalk, you know that they have probably pressed the button and " +
      "the light is about to change. Slow down and be prepared to stop.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Pedestrians",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "curve-lose-traction",
    quote:
      "If you do start to lose traction in a curve, don't brake. Ease off " +
      "the accelerator and re-apply gently when you regain traction.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Handling curves",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "cyclist-dooring",
    quote:
      "One of the most common causes of crashes involving cyclists is " +
      "drivers who swing their doors open without checking.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Cyclists",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "cyclist-move-out",
    quote: "a cyclist has the right to move out toward the middle for safety.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Cyclists",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "cyclists-same-rights",
    quote:
      "Be aware that bicycle riders have the same rights and " +
      "responsibilities on the road as drivers.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Cyclists",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "deep-water-half-metre",
    quote:
      "Moving water that is deeper than half a metre can carry a car " +
      "away.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Deep water",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "default-speed-limits",
    quote:
      "Unless a sign tells you otherwise, speed limits are: * 50 km/h " +
      "within cities and towns * 80 km/h outside cities and towns * 20 " +
      "km/h is the maximum speed limit in a lane or alleyway within " +
      "municipalities unless otherwise posted.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Appropriate speeds",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "device-law-at-red-light",
    quote:
      "The law applies whenever you are in control of the vehicle - even " +
      "when you are stopped at a red light or in bumper-to-bumper " +
      "traffic.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Cellphones and other devices",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "door-shoulder-check",
    quote:
      "And don't forget to do a mirror check and shoulder check before " +
      "you open your door to get out of your vehicle. A cyclist or other " +
      "vehicle could be coming up beside you.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Observing behind",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "double-solid-yellow",
    quote: "Double solid line - no passing allowed",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Yellow lines",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "doubt-left-turn-yield",
    quote:
      "If there's any doubt about who should go first, the driver making " +
      "the left turn should yield.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Choosing a safe gap",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "engine-stops-ignition",
    quote:
      "If the engine stops, don't turn the ignition off, because the " +
      "steering will lock.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Engine problems",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "entering-roadway-driveway",
    quote:
      "When you are pulling out of a driveway, alley or parking lot onto " +
      "a road, stop before the sidewalk or area where pedestrians may be " +
      "walking. Then pull out carefully, yielding to traffic on the road " +
      "and waiting for a safe gap.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Entering a roadway",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "excessive-speeding-impound",
    quote: "excessive speeding (40 km/h or more over the posted limit)",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Vehicle impoundment",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "exit-lane-speed",
    quote:
      "Signal your intention to turn off the highway, maintaining your " +
      "speed until you enter the exit lane. Then slow down gradually as " +
      "you prepare to enter roads with lower speed limits.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Highway or freeway entrances and exits",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "fatigue-leading-cause",
    quote:
      "Being tired is one of the leading causes of crashes. Fatigue " +
      "affects all stages of the see-think-do strategy. It can cause you " +
      "to scan inaccurately, slow your thinking and lengthen your " +
      "reaction time.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Staying awake",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "fire-truck-150m",
    quote:
      "when you're following a fire truck, you must stay back at least " +
      "150 metres.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Emergency vehicles",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "first-rain-slippery",
    quote:
      "Rain makes the road surface slippery, especially during the " +
      "beginning of a rainfall. The rain mixes with the oil on the road " +
      "to create a slippery, oily film. This film washes away with " +
      "continued rain, but if the rain is light or if it has not rained " +
      "for a long time, the road will remain slippery longer.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Rain",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "flashing-green-arrow-red",
    quote:
      "Flashing green arrow with a steady red light - left turn allowed; " +
      "through traffic must stop for red light",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "flashing-green-bc",
    quote:
      "Flashing green - pedestrian-controlled light - go only if the " +
      "intersection is clear",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "flashing-red",
    quote: "Flashing red - stop, then continue only when it is safe",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "flashing-yellow",
    quote: "Flashing yellow - slow down and proceed with caution",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "four-way-facing-left-turn",
    quote:
      "If two vehicles are facing each other and have arrived at the " +
      "intersection at about the same time, the one making a left turn " +
      "should yield to the one going straight through.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by stop signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "four-way-stop-order",
    quote:
      "The first vehicle to arrive at the intersection and come to a " +
      "complete stop should go first. * If two vehicles arrive at the " +
      "same time, the one on the right should go first.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by stop signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "freeway-centre-lane",
    quote:
      "When you are on a freeway with more than two lanes in each " +
      "direction, you should drive in the centre lane or a right-hand " +
      "lane. This leaves the left lane for higher-speed traffic and " +
      "passing vehicles.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Which lane should you use?",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "fresh-green",
    quote:
      "a fresh green light is one that has just turned green. Don't move " +
      "forward until you've scanned the intersection to make sure it's " +
      "clear.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "glp-course-reduction",
    quote:
      "When you successfully complete an approved GLP course while in a " +
      "GLP learner stage, you're eligible for a six-month reduction in " +
      "the novice stage, as long as you have no violations, prohibitions " +
      "or at-fault crashes during the first 18 months of your novice " +
      "stage.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - ICBC-approved driver education courses",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "glp-handsfree-ban",
    quote:
      "GLP drivers are also restricted from operating hands-free " +
      "electronic devices while driving except calling 9-1-1 to report an " +
      "emergency.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Cellphones and other devices",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "glp-no-devices",
    quote:
      "If you have your L or N, you're not allowed to use any personal " +
      "electronic devices, even with a hands-free system.",
    source: "ICBC - Graduated licensing (Insurance Corporation of British Columbia)",
    section: "Graduated licensing - Restrictions",
    url: "https://www.icbc.com/driver-licensing/new-drivers/Graduated-licensing",
  },
  {
    key: "glp-prohibition-novice",
    quote:
      "If you receive a driving prohibition in your novice stage, you'll " +
      "lose any time you have accumulated toward graduating out of GLP. " +
      "When your licence has been reinstated following the prohibition, " +
      "you will have to accumulate an additional 24 consecutive " +
      "prohibition-free months to be eligible to graduate from GLP.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Graduated Licensing Program (GLP) penalties",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "green-arrow",
    quote: "Green arrow - turn in the direction of the arrow",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "green-arrow-turned-yellow",
    quote:
      "Once the green arrow has turned yellow, you must stop and wait for " +
      "the next green arrow before turning.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Left-turn signals",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "head-on-steer-right",
    quote:
      "Try to avoid a head-on collision at all costs by steering to the " +
      "side. Steer to the right, not the left, as the oncoming driver may " +
      "steer to the right.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Collision avoidance",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "headlight-beam-distances",
    quote:
      "Low beam headlights will light up a path up to 30 metres straight " +
      "ahead of you. High beams give you about 100 metres of light.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Using the headlights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "headlight-hours",
    quote:
      "You must use your headlights from 30 minutes after sunset until 30 " +
      "minutes before sunrise.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Using the headlights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "horses-no-horn",
    quote:
      "Slow down and give them lots of space when you pass. Don't honk " +
      "the horn because this could cause the horse to bolt into your " +
      "path.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Horses",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "hov-enter-broken-lines",
    quote:
      "Enter and exit where there are broken lines to indicate a crossing " +
      "point.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - High occupancy vehicle (HOV) lanes",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "hydroplaning-response",
    quote: "Decelerate and drive straight. Never brake.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Rain",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "ice-ten-times",
    quote:
      "It can take you 10 times the normal braking distance to stop on " +
      "ice.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Ice and snow",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "l-12-months",
    quote:
      "You'll need to be a learner for at least 12 months before you can " +
      "take a road test and graduate to the next level.",
    source: "ICBC - Get your L (Insurance Corporation of British Columbia)",
    section: "Get your L - Your L licence",
    url: "https://www.icbc.com/driver-licensing/new-drivers/Get-your-L",
  },
  {
    key: "l-driving-hours",
    quote:
      "Restricted driving hours - you may drive only between 5 a.m. and " +
      "midnight.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Learner stage driving restrictions",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "l-supervisor",
    quote:
      "Qualified supervisor - a qualified supervisor must sit beside you " +
      "when you are driving. Your supervisor must be 25 or older and hold " +
      "a valid Class 1, 2, 3, 4 or 5 licence.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Learner stage driving restrictions",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "l-valid-two-years",
    quote: "Your learner's licence stays valid for two years.",
    source: "ICBC - Get your L (Insurance Corporation of British Columbia)",
    section: "Get your L - Your L licence",
    url: "https://www.icbc.com/driver-licensing/new-drivers/Get-your-L",
  },
  {
    key: "l-zero-alcohol",
    quote:
      "Zero blood alcohol content - you must not drive after consuming " +
      "any amount of alcohol.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Learner stage driving restrictions",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "lane-control-yellow-x",
    quote:
      "Move out of this lane and into a lane with a green arrow. If the " +
      "lane control signals over all of the lanes are flashing yellow, " +
      "slow down and proceed with caution",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Lane control signals",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "lane-use-signs",
    quote:
      "If you are in a designated lane, you must follow the direction " +
      "indicated by the arrows. You may not move into or out of a " +
      "designated lane while you are in an intersection.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Lane use signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "left-lane-not-for-cruising",
    quote:
      "Just because you are driving at the speed limit does not mean you " +
      "should continually drive in the left lane. This may cause other " +
      "drivers to try to pass on the right, which may not be as safe as " +
      "passing on the left.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Which lane should you use?",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "left-turn-steady-green",
    quote:
      "when you are making a left turn, you must yield to oncoming " +
      "traffic and wait for a safe gap before you turn.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "left-turn-yellow-complete",
    quote:
      "In this situation, remember that you are legally allowed to " +
      "complete your turn. But watch carefully for other vehicles, " +
      "especially oncoming drivers trying to beat the red light.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "left-turn-yield-basic",
    quote:
      "Yield to traffic that is in or near the intersection. If you " +
      "intend to go straight through and a vehicle is already in the " +
      "intersection turning left, you must yield.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Understanding intersections",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "lights-out-four-way",
    quote:
      "Sometimes traffic lights stop working properly. The lights can go " +
      "out, or all four lights can start flashing. Treat the intersection " +
      "like a four-way stop if this happens.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Right-of-way at intersections",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "low-visibility-strategies",
    quote:
      "Use low beam headlights in rain, snow and fog. * Do not pass in " +
      "extreme weather conditions because you can't see far enough ahead.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Loss of visibility",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "medication-drowsy",
    quote:
      "Read the label carefully if you are taking any medications. Don't " +
      "drive if the label says the drug may cause drowsiness or " +
      "dizziness.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Assessing your health",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "midblock-left-over-double-yellow",
    quote:
      "You may turn left - including turning left over a solid double " +
      "yellow line - if you do this carefully and safely and don't impede " +
      "other traffic, and there are no signs prohibiting such turns.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Turns in the middle of a block",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "motorcycle-three-seconds",
    quote:
      "Allow following distance - allow at least three seconds of " +
      "following distance when you are behind a motorcycle because: * " +
      "Motorcycles can stop very quickly.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Motorcycle riders",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "mva-business-district",
    quote:
      "\"business district\" means the territory contiguous to a portion of " +
      "a highway having a length of 200 m along which there are buildings " +
      "used for business, industrial or public purposes occupying (a) at " +
      "least 100 m of frontage on one side of that portion",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.119 (1) - Definitions",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section119",
  },
  {
    key: "mva-divided-highway",
    quote:
      "If a highway has been divided into 2 roadways by a physical " +
      "barrier or clearly indicated dividing section constructed so that " +
      "it impedes vehicular traffic, a driver must not (a) drive a " +
      "vehicle over, across or within a barrier or dividing section, " +
      "except at a crossover or intersection",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.163 - Divided highways",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section163",
  },
  {
    key: "mva-duty-of-driver",
    quote:
      "a driver of a vehicle must (a) exercise due care to avoid " +
      "colliding with a pedestrian who is on the highway, (b) give " +
      "warning by sounding the horn of the vehicle when necessary, and " +
      "(c) observe proper precaution on observing a child or apparently " +
      "confused or incapacitated person on the highway.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.181 - Duty of driver",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section181",
  },
  {
    key: "mva-emergency-vehicle",
    quote:
      "a driver must yield the right of way, and immediately drive to a " +
      "position parallel to and as close as possible to the nearest edge " +
      "or curb of the roadway, clear of an intersection, and stop and " +
      "remain in that position until the emergency vehicle has passed.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.177 - Approach of emergency vehicle",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section177",
  },
  {
    key: "mva-excessive-speeding",
    quote:
      "A person who drives a motor vehicle on a highway at a speed " +
      "greater than 40 km/h over the applicable speed limit set under the " +
      "authority of an enactment commits an offence",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.148 (1) - Excessive speeding",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section148",
  },
  {
    key: "mva-flashing-green",
    quote:
      "must cause it to approach the intersection or signal in such a " +
      "manner that the driver is able to cause the vehicle to stop before " +
      "reaching the signal or any crosswalk in the vicinity of the signal " +
      "if a stop should become necessary",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.131 (5) - Flashing lights",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section131",
  },
  {
    key: "mva-left-on-red-oneway",
    quote:
      "may cause the vehicle to make a left turn into a highway on which " +
      "traffic is restricted to the direction in which the driver causes " +
      "the vehicle to turn",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.129 (4) (b) - Red light",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section129",
  },
  {
    key: "mva-no-speed-up",
    quote:
      "must not increase the speed of the vehicle until completely passed " +
      "by the overtaking vehicle.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.157 (2) - Duty when overtaking another vehicle",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section157",
  },
  {
    key: "mva-obey-traffic-devices",
    quote:
      "a traffic control device indicating that a certain vehicle " +
      "movement is prohibited, a person must not drive a vehicle in a " +
      "movement prohibited by the sign",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.161 (b) - Obedience to traffic control devices",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section161",
  },
  {
    key: "mva-parking-30cm",
    quote:
      "a driver must not stop, stand or park a vehicle on a roadway other " +
      "than on the right side of the roadway and with the right hand " +
      "wheels parallel to that side, and where there is a curb, within 30 " +
      "cm of the curb.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.190 - Manner of parking",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section190",
  },
  {
    key: "mva-playground-30",
    quote:
      "A person driving a vehicle on a highway must drive the vehicle at " +
      "a rate of speed not exceeding 30 km/h when approaching or passing, " +
      "between dawn and dusk, a public playground for children where " +
      "signs are displayed stating a speed limit of 30 km/h, or on which " +
      "the numerals \"30\" are prominently shown.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.147 (2) - Schools and playgrounds",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section147",
  },
  {
    key: "mva-right-on-red",
    quote:
      "may cause the vehicle to make a right turn, but the driver must " +
      "yield the right of way to all pedestrians and vehicles lawfully " +
      "proceeding as directed by the signal at the intersection.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.129 (3) - Red light",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section129",
  },
  {
    key: "mva-right-turn-close",
    quote:
      "If the driver of a vehicle intends to turn it to the right at an " +
      "intersection, the driver must cause it to approach the " +
      "intersection and then make the turn as close as practicable to the " +
      "right hand curb or edge of the roadway.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.165 (1) - Turning at intersections",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section165",
  },
  {
    key: "mva-school-zone-30",
    quote:
      "must drive at a rate of speed not exceeding 30 km/h while " +
      "approaching or passing the school building and school grounds to " +
      "which the signs relate, between 8 a.m. and 5 p.m.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.147 (1) - Schools and playgrounds",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section147",
  },
  {
    key: "mva-signal-continuously",
    quote:
      "If a signal of intention to turn right or left is required, a " +
      "driver must give it continuously for sufficient distance before " +
      "making the turn to warn traffic.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.170 (2) - Signals on turning",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section170",
  },
  {
    key: "mva-speed-defaults",
    quote:
      "a person must not drive or operate a motor vehicle on a highway in " +
      "a municipality, treaty lands or a Nisga'a village at a greater " +
      "rate of speed than 50 km/h",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.146 (1) - Speed",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section146",
  },
  {
    key: "mva-stop-sign-position",
    quote:
      "if there is a stop sign at an intersection, a driver of a vehicle " +
      "must stop (a) at the marked stop line, if any, (b) before entering " +
      "the marked crosswalk on the near side of the intersection, or (c) " +
      "when there is neither a marked crosswalk nor a stop line, before " +
      "entering the intersection",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.186 - Stop signs",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section186",
  },
  {
    key: "mva-through-highway",
    quote:
      "the driver of the vehicle must yield the right of way to traffic " +
      "that has entered the intersection on the through highway or is " +
      "approaching so closely on it that it constitutes an immediate " +
      "hazard, and (b) having yielded, the driver may proceed with " +
      "caution.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.175 (1) - Entering through highway",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section175",
  },
  {
    key: "mva-yield-right",
    quote:
      "if 2 vehicles approach or enter an intersection from different " +
      "highways at approximately the same time and there are no yield " +
      "signs, the driver of a vehicle must yield the right of way to the " +
      "vehicle that is on the right of the vehicle that the driver is " +
      "driving.",
    source: "Motor Vehicle Act, RSBC 1996, c.318 (King's Printer for British Columbia)",
    section: "Motor Vehicle Act, RSBC 1996 c.318, s.173 (1) - Yield signs",
    url: "https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/96318_05#section173",
  },
  {
    key: "n-24-months-full",
    quote:
      "You can apply for your full licence after having your N for at " +
      "least 24 months of safe driving with no prohibitions.",
    source: "ICBC - Graduated licensing (Insurance Corporation of British Columbia)",
    section: "Graduated licensing - Get your full licence",
    url: "https://www.icbc.com/driver-licensing/new-drivers/Graduated-licensing",
  },
  {
    key: "n-passenger-limit",
    quote:
      "Passenger limit - only one passenger may be in the vehicle with " +
      "you unless: a) t he passengers are your immediate family " +
      "(\"Immediate Family\" means your parents, children, spouse, " +
      "brothers, sisters and grandparents, including step and foster " +
      "relationships), or",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - Novice stage driving restrictions",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "new-resident-90-days",
    quote:
      "You may use your valid driver's licence from another province, " +
      "state or country for the first 90 days you live in B.C. After this " +
      "time, you must have a B.C. driver's licence to drive in B.C.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 9: your licence - New B.C. residents",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "no-lane-change-intersection",
    quote:
      "Don't change lanes at an intersection. You could confuse other " +
      "drivers and cause a crash.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Bicycle lanes",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "no-pass-stopped-at-crosswalk",
    quote:
      "Don't pass if you see a vehicle stopped at a crosswalk - it's " +
      "illegal and unsafe. The driver could have stopped to let " +
      "pedestrians cross the road.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Pedestrians",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "no-speeding-up-when-passed",
    quote:
      "Don't speed up as someone is trying to pass you - it's illegal. " +
      "Help the other driver get back into your lane by slowing down and " +
      "making room.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Pulling into a lane",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "object-markers",
    quote:
      "Pay special attention to object markers - they are mounted on " +
      "obstructions.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Object markers",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "observation-cycle-seconds",
    quote:
      "Then start all over again. You should complete the whole cycle " +
      "every five to eight seconds.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Observation",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "only-time-sobers",
    quote:
      "Only time can sober you up or lower your blood alcohol content " +
      "(BAC). Contrary to popular belief, food, coffee, cold showers or " +
      "exercise will not speed up the elimination of alcohol from your " +
      "system.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 7: personal strategies - Facts about alcohol",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "overdriving-headlights",
    quote:
      "Overdriving happens if you go too fast and you are not able to " +
      "stop within the distance covered by your headlights. It is " +
      "especially dangerous in a curve.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Overdriving the headlights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-30cm-curb",
    quote: "Park parallel to and within 30 centimetres (one foot) of the curb.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-bike-lane-bridge",
    quote: "in a bicycle lane * on a bridge or in a highway tunnel",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-disabled-permit",
    quote:
      "in a space for people with disabilities unless you display a " +
      "disabled person parking permit in your windshield and your vehicle " +
      "is carrying a person with a disability.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-gear",
    quote:
      "Set the parking brake and leave the vehicle in gear: * leave an " +
      "automatic transmission in \"park\" gear * with a standard " +
      "transmission, place the vehicle in \"reverse\" if facing downhill, " +
      "and \"first\" gear if facing uphill or if on a level surface.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-hill-wheels",
    quote:
      "to the right when uphill without a curb or downhill with or " +
      "without a curb * to the left when uphill with a curb.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-hydrant-5m",
    quote:
      "within five metres of a fire hydrant (measured from the point at " +
      "the curb beside the hydrant",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-illegal-list",
    quote:
      "It's illegal to park: * on a sidewalk or boulevard * across the " +
      "entrance to any driveway, back lane or intersection * within five " +
      "metres of a fire hydrant (measured from the point at the curb " +
      "beside the hydrant) * within six metres of a crosswalk or " +
      "intersection * within six metres of a stop sign or traffic light",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "parking-railway-15m",
    quote: "within 15 metres of the nearest rail of a railway crossing",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Parking tips and rules",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "passing-distance-sidewalk",
    quote:
      "If a person is on a sidewalk or protected cycle lane, you must " +
      "leave at least 0.5 metre.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Space beside",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "passing-distance-vulnerable",
    quote:
      "You must leave at least 1.0 metre of space when passing a cyclist, " +
      "pedestrian, or other road user, such as those using a personal " +
      "mobility device. On roads with speed limits above 50 km/h, you " +
      "must leave at least 1.5 meters when passing.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Space beside",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "passing-lane-merge",
    quote:
      "Vehicles in the right lane and the passing lane must merge before " +
      "the passing lane ends.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Passing lanes",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "passing-rules",
    quote:
      "Pass on the right only on a roadway that has two or more lanes, or " +
      "if a driver ahead is turning left. Do not use the shoulder to " +
      "pass.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Passing",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "playground-zone-30",
    quote:
      "Playground zone - 30 km/h limit is in effect every day from dawn " +
      "to dusk",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - School, playground and crosswalk signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "posted-speed-ideal",
    quote:
      "The posted speed is the maximum for ideal conditions only. Choose " +
      "a slower speed if the conditions are not ideal - for instance, if " +
      "the roads are slippery or visibility is limited.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Appropriate speeds",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "railway-stop-5-15",
    quote:
      "Stop no closer than five metres and no further than 15 metres from " +
      "the nearest rail.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Trains",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "railway-stop-then-proceed",
    quote: "Railway crossing - stop, then proceed when it is safe",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Railway signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "regulatory-signs-offence",
    quote:
      "These signs tell you about driving laws and regulations. It is an " +
      "offence under the B.C. Motor Vehicle Act to disregard them. " +
      "Drivers who do not follow the instructions on these signs may " +
      "receive penalties.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Regulatory signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "reserved-lane-diamond",
    quote:
      "A white diamond painted on the road surface marks reserved lanes. " +
      "Reserved lane signs are also placed over or beside lanes that are " +
      "reserved for certain vehicles such as buses or high occupancy " +
      "vehicles (HOVs).",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Reserved lane signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "If you want to turn left, make sure you are in the left lane. If " +
      "you want to turn right, use the right lane. If you want to go " +
      "straight, you may use either the left or right lane.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Roundabouts",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "roundabout-yield-ped",
    quote:
      "Yield to pedestrians who may be crossing or about to cross in the " +
      "crosswalk located in advance of the roundabout.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Roundabouts",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "scan-12-seconds",
    quote:
      "Make sure you know what's coming up by scanning at least 12 " +
      "seconds ahead. This means look one to two blocks ahead in city " +
      "driving and half a kilometre ahead on the highway.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Observing ahead",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "school-bus-stop-either-direction",
    quote:
      "You must stop in either direction whenever you see flashing red " +
      "lights on a school bus.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - School buses",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "school-bus-when-to-go",
    quote:
      "After stopping for a school bus, don't start moving again until " +
      "the bus moves on or the driver signals that it's safe by turning " +
      "off the lights and pulling in the stop sign.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - School buses",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "school-sign-colour",
    quote: "School zone signs are fluorescent yellow-green",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "school-zone-30-hours",
    quote:
      "When you see a school zone sign with a 30 km/h posted speed, slow " +
      "down to that speed. The speed limit is in effect between 8 a.m. " +
      "and 5 p.m. on school days, or the hours shown on the sign.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Pedestrians",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "school-zone-reduce",
    quote: "School zone - reduce speed when children are present",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - School, playground and crosswalk signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "shoulder-check-45",
    quote:
      "Look at least 45 degrees over your shoulder in the direction you " +
      "plan to move.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Observing behind",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "signal-when",
    quote:
      "Signals are important - they let other traffic know what you are " +
      "intending to do. Signal when you're preparing to: * turn left or " +
      "right * change lanes * park * move toward, or away from, the side " +
      "of the road.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Signalling",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "skid-steer-look",
    quote:
      "Ease off the accelerator, and look and steer smoothly in the " +
      "direction you want to go. (In this case, steer to the right.) " +
      "Don't brake - this will make the situation worse.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Steps to handle a skid",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "slow-down-move-over-speeds",
    quote:
      "you must drive no faster than 70 km/h if the speed limit is 80 " +
      "km/h or more, and no faster than 40 km/h if the speed limit is " +
      "less than 80 km/h.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Stopped vehicles with flashing lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "solid-white-no-change",
    quote: "Solid line - do not change lanes",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - White lines",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "space-behind-tailgater",
    quote:
      "But it's a good idea to slow down slightly to increase your space " +
      "in front. This way, if you have to stop, you can stop more " +
      "gradually and there will be less chance of the person behind " +
      "crashing into you. Other options are to move into another lane or " +
      "to pull over to the side and let the tailgater pass.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Space behind",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "speed-sign-meaning",
    quote:
      "The maximum legal speed when the road is bare and dry and " +
      "visibility is good.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Regulatory signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "stale-green",
    quote:
      "a stale green light is one that has been green for a long time, " +
      "and is about to turn yellow.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "steady-red-turns",
    quote:
      "Steady red - stop - after coming to a full stop, you may turn " +
      "right or turn left onto a one-way street unless a sign forbids it",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "stop-position-line",
    quote: "If there is a stop line, stop just before the line.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Stopping at intersections",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "stop-sign-meaning",
    quote: "Stop completely - continue only when safe",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Regulatory signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "stranded-stay-with-vehicle",
    quote:
      "If you're stranded in snow, stay with your vehicle unless you are " +
      "absolutely sure you can reach help.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Stranded or snowbound",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "Shift to neutral to disconnect the engine from the wheels. (This " +
      "may damage your engine but it's better than crashing.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Gas pedal sticking",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "stuck-on-tracks-30m",
    quote:
      "Get all passengers out of the vehicle. Move quickly at least 30 " +
      "metres away from the track to avoid flying debris.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Trains",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "test-ends-early",
    quote:
      "When you have correctly answered the required amount of questions " +
      "or exceeded the number of incorrect answers allowed, the test will " +
      "be complete.",
    source: "Before you take your knowledge test (Insurance Corporation of British Columbia, MV2654, 2026)",
    section: "Before you take your knowledge test - Test will end",
    url: "https://www.icbc.com/assets/en/4zwylo9j9OaOX2I7Q8Epat/knowledge-test-tip-sheet.pdf",
  },
  {
    key: "test-pass-40-of-50",
    quote:
      "To pass the knowledge test, you'll need to get 40 out of 50 " +
      "multiple-choice questions right.",
    source: "ICBC - Get your L (Insurance Corporation of British Columbia)",
    section: "Get your L - Take the knowledge test",
    url: "https://www.icbc.com/driver-licensing/new-drivers/Get-your-L",
  },
  {
    key: "three-second-large-vehicle",
    quote:
      "Allow at least three seconds following distance when you're behind " +
      "a large vehicle that could block your vision, or a motorcycle that " +
      "could stop very quickly.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Space in front",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "traffic-circle-no-signs",
    quote:
      "Obey any posted traffic control signs, such as \"Yield\" or \"Stop\" " +
      "signs. If there are no traffic control signs, treat it as an " +
      "uncontrolled intersection.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Traffic circles",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "traffic-control-person",
    quote:
      "If a traffic control person is directing traffic, you must follow " +
      "that person's directions.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Understanding intersections",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "transit-priority-white",
    quote:
      "Transit priority signal - steady white rectangular light - only " +
      "buses may go on this signal",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "truck-engine-retarder",
    quote:
      "This means the truck or bus ahead of you could slow down without " +
      "the brake lights going on.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Large vehicles",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "truck-see-both-mirrors",
    quote:
      "You should be able to see both mirrors of the truck or bus in " +
      "front of you.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Large vehicles",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "tunnel-sunglasses",
    quote:
      "Remove your sunglasses and turn on your headlights while driving " +
      "through tunnels.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Glare and shadows",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "two-second-rule",
    quote:
      "You need at least two seconds of space in front in good weather " +
      "and road conditions. Increase your following distance to three " +
      "seconds on high-speed roads and to four seconds in bad weather " +
      "conditions or on uneven or slippery roads.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 5: see-think-do - Space in front",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "two-way-left-turn-lane-use",
    quote:
      "Drivers from both directions share this centre lane when they want " +
      "to turn left. Make sure there is enough space before you enter " +
      "this lane. Remember to watch for vehicles coming from the opposite " +
      "direction.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Two-way left-turn lanes",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "two-way-stop-left-turn",
    quote:
      "If two vehicles are stopped at a two-way stop and one of the " +
      "drivers wants to turn left, this driver must yield the " +
      "right-of-way to the other vehicle. The only exception is if the " +
      "left-turning vehicle is already in the intersection and has " +
      "started to make the turn. In this case, the other vehicle must " +
      "yield.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by stop signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "uncontrolled-yield-right",
    quote:
      "If another vehicle has arrived at the intersection before you, " +
      "slow down and yield. If two vehicles arrive at the same time, the " +
      "vehicle on the left must yield to the vehicle on the right.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Uncontrolled intersections",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "uturn-business-district",
    quote:
      "in a business district, except at an intersection where there is " +
      "no traffic light",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - U-turns",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "uturn-crest-150",
    quote:
      "on or near the crest of a hill, where you cannot be seen by other " +
      "traffic within 150 metres",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - U-turns",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "warning-signs-shape",
    quote:
      "Most warning signs are yellow and diamond-shaped. They warn of " +
      "possible hazards ahead.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Warning signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "wet-road-braking",
    quote: "Allow at least twice the normal braking distance.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 8: emergency strategies - Rain",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "white-cane-raised",
    quote:
      "Often, they will raise their cane when they're uncertain about " +
      "crossing the street safely. That is your signal to stop and give " +
      "the person the rightof-way.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Pedestrians",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "winter-tire-sign",
    quote: "Winter tires or chains must be used when sign is displayed",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Regulatory signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "yellow-light-rule",
    quote:
      "steady yellow light - yellow means that the signal is about to " +
      "turn red. You must stop before entering the intersection unless " +
      "you can't safely stop in time.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 4: rules of the road - Intersections controlled by traffic lights",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "yield-sign-meaning",
    quote: "Give the right-of-way to other vehicles and crossing pedestrians",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 3: signs, signals and road markings - Regulatory signs",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
  {
    key: "yield-to-bus-60",
    quote:
      "you must allow a public transit bus that is signalling and " +
      "displaying a yield-to-bus sign to move out from the curb lane or a " +
      "bus stop. This rule applies to all roads where the speed limit is " +
      "60 km/h or lower.",
    source: "Learn to drive smart: your guide to driving safely (Insurance Corporation of British Columbia, 2026)",
    section: "Chapter 6: sharing the road - Public transit buses",
    url: "https://www.icbc.com/driver-licensing/driving-guides/Learn-to-Drive-Smart",
  },
];
