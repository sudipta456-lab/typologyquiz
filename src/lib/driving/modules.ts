import type { Jurisdiction, HandbookExcerpt } from "./types";
import type { HandbookSnippet } from "./excerpts";

/**
 * Jurisdictions built as self-contained modules (src/lib/driving/<slug>/index.ts)
 * rather than spliced into jurisdictions.ts and excerpts.ts by hand.
 *
 * The first 22 banks were wired by editing three registry files per
 * jurisdiction. That does not scale to six builders working at once, so from
 * the 23rd on, a bank exports { jurisdiction, excerpts, snippets, officialHosts }
 * from its own folder and is registered by ONE line here. The registries read
 * this list and merge it in after their hand-written entries.
 *
 * Order here is not display order: the hub sorts alphabetically within each
 * country.
 */
export interface DrivingModule {
  jurisdiction: Jurisdiction;
  excerpts: HandbookExcerpt[];
  snippets: Record<string, HandbookSnippet>;
  officialHosts?: string[];
}

import * as alabama from "./alabama";
import * as arkansas from "./arkansas";
import * as colorado from "./colorado";
import * as connecticut from "./connecticut";
import * as iowa from "./iowa";
import * as kansas from "./kansas";
import * as kentucky from "./kentucky";
import * as louisiana from "./louisiana";
import * as manitoba from "./manitoba";
import * as minnesota from "./minnesota";
import * as mississippi from "./mississippi";
import * as nevada from "./nevada";
import * as novascotia from "./novascotia";
import * as oklahoma from "./oklahoma";
import * as oregon from "./oregon";
import * as quebec from "./quebec";
import * as saskatchewan from "./saskatchewan";
import * as southcarolina from "./southcarolina";
import * as utah from "./utah";
import * as wisconsin from "./wisconsin";

export const MODULES: DrivingModule[] = [
  alabama,
  arkansas,
  colorado,
  connecticut,
  iowa,
  kansas,
  kentucky,
  louisiana,
  manitoba,
  minnesota,
  mississippi,
  nevada,
  novascotia,
  oklahoma,
  oregon,
  quebec,
  saskatchewan,
  southcarolina,
  utah,
  wisconsin,
];
