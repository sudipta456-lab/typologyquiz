import type { Edition } from "../editorial/types";

import { trackAnalyticsEvent, type EditorialAnalyticsEvent } from "../analytics.ts";

export function trackEditorialEvent(event: EditorialAnalyticsEvent, edition: Edition): void {
  trackAnalyticsEvent(event, { edition_id: edition.id, series_id: edition.seriesId, edition_version: edition.version });
}
