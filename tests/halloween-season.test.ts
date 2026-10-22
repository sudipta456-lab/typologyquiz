import test from 'node:test';
import assert from 'node:assert/strict';
import { isHalloweenSeason } from '../src/components/seasonal/halloween-season';

test('Halloween follows the Edmonton date, including both UTC boundaries', () => {
  for (const [date, expected] of [
    ['2026-10-22T05:59:59.999Z', false], ['2026-10-22T06:00:00Z', true],
    ['2026-10-31T06:00:00Z', true], ['2026-11-01T05:59:59.999Z', true],
    ['2026-11-01T06:00:00Z', false], ['2026-11-02T07:00:00Z', false],
  ] as const) assert.equal(isHalloweenSeason(new Date(date)), expected, date);
});
test('Halloween is limited to the 2026 campaign and rejects invalid dates', () => {
  assert.equal(isHalloweenSeason(new Date('2025-10-31T12:00:00Z')), false);
  assert.equal(isHalloweenSeason(new Date('2027-10-31T12:00:00Z')), false);
  assert.equal(isHalloweenSeason(new Date(NaN)), false);
});
