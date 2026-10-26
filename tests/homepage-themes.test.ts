import test from 'node:test';
import assert from 'node:assert/strict';
import { HOMEPAGE_THEMES, getHomepageTheme, subscribeToThemeClock } from '../src/components/seasonal/theme-calendar';
import { SUMMARIES } from '../src/lib/interactive/catalog.generated';

test('the recurring schedule covers every date with one or two windows per month', () => {
  assert.equal(new Set(HOMEPAGE_THEMES.map(theme => theme.id)).size, HOMEPAGE_THEMES.length);
  for (let month = 1; month <= 12; month++) {
    const windows = HOMEPAGE_THEMES.filter(theme => theme.month === month);
    assert.ok(windows.length >= 1 && windows.length <= 2, `month ${month}`);
    assert.equal(windows[0].fromDay, 1);
    assert.deepEqual(windows.map(theme => theme.fromDay), [...new Set(windows.map(theme => theme.fromDay))].sort((a, b) => a - b));
    assert.ok(windows.every(theme => theme.fromDay <= new Date(Date.UTC(2027, month, 0)).getUTCDate()));
  }
  for (const year of [2026, 2027, 2028, 2030]) {
    let previous = '';
    let changes = 0;
    for (let day = Date.UTC(year, 0, 1, 18); day < Date.UTC(year + 1, 0, 1); day += 86_400_000) {
      const theme = getHomepageTheme(new Date(day));
      assert.ok(theme, new Date(day).toISOString());
      if (previous !== theme.id) changes++;
      previous = theme.id;
    }
    assert.equal(changes, HOMEPAGE_THEMES.length);
  }
});

test('theme changes happen on Edmonton dates, independent of build time or visitor timezone', () => {
  for (const [boundary, before, after] of [
    ['2026-10-16T06:00:00Z', 'curiosity-cabinet', 'after-hours'],
    ['2026-11-01T06:00:00Z', 'after-hours', 'kindred-signals'],
    ['2026-11-16T06:00:00Z', 'kindred-signals', 'story-mode'],
    ['2026-12-21T06:00:00Z', 'small-wonders', 'long-night'],
    ['2027-01-01T06:00:00Z', 'long-night', 'fresh-page'],
    ['2027-03-20T06:00:00Z', 'new-growth', 'human-in-the-loop'],
    ['2028-03-01T06:00:00Z', 'better-together', 'new-growth'],
    ['2026-01-01T07:00:00Z', 'long-night', 'fresh-page'],
  ] as const) {
    const time = new Date(boundary).getTime();
    assert.equal(getHomepageTheme(new Date(time - 1))?.id, before, `${boundary}: before`);
    assert.equal(getHomepageTheme(new Date(time))?.id, after, `${boundary}: after`);
  }
  assert.equal(getHomepageTheme(new Date('2026-11-01T07:30:00Z'))?.id, 'kindred-signals');
  assert.equal(getHomepageTheme(new Date('2026-11-01T08:30:00Z'))?.id, 'kindred-signals');
  assert.equal(getHomepageTheme(new Date('2026-03-08T08:59:59Z'))?.id, 'new-growth');
  assert.equal(getHomepageTheme(new Date('2026-03-08T09:00:00Z'))?.id, 'new-growth');
  assert.equal(getHomepageTheme(new Date('2027-10-31T18:00:00Z'))?.id, 'after-hours');
  assert.equal(getHomepageTheme(new Date(NaN)), undefined);
});

test('all seasonal detours point to distinct existing quizzes, without sending question banks', () => {
  const summaries = new Map(SUMMARIES.map(quiz => [quiz.id, quiz]));
  for (const theme of HOMEPAGE_THEMES) {
    assert.equal(theme.detours.length, 3, theme.id);
    assert.equal(new Set(theme.detours.map(detour => detour.quizId)).size, 3, theme.id);
    assert.match(theme.accent, /^#[0-9a-f]{6}$/i);
    assert.match(theme.companion, /^#[0-9a-f]{6}$/i);
    for (const detour of theme.detours) {
      const quiz = summaries.get(detour.quizId);
      assert.ok(quiz, `${theme.id}: ${detour.quizId}`);
      assert.ok(quiz.slug && quiz.title && quiz.minutes && quiz.questionCount);
    }
  }
});

test('the browser clock refreshes on a timer, focus and visibility, and removes its listeners', () => {
  const originalWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const originalDocument = Object.getOwnPropertyDescriptor(globalThis, 'document');
  let timerCallback: (() => void) | undefined;
  let timerDelay = 0;
  let cleared = false;
  let calls = 0;
  const fakeWindow = new EventTarget();
  const fakeDocument = new EventTarget();
  Object.assign(fakeWindow, {
    setInterval(callback: () => void, delay: number) { timerCallback = callback; timerDelay = delay; return 42; },
    clearInterval(id: number) { assert.equal(id, 42); cleared = true; },
  });
  try {
    Object.defineProperty(globalThis, 'window', { configurable: true, value: fakeWindow });
    Object.defineProperty(globalThis, 'document', { configurable: true, value: fakeDocument });
    const unsubscribe = subscribeToThemeClock(() => calls++);
    assert.equal(timerDelay, 30_000);
    timerCallback?.();
    fakeWindow.dispatchEvent(new Event('focus'));
    fakeDocument.dispatchEvent(new Event('visibilitychange'));
    assert.equal(calls, 3);
    unsubscribe();
    assert.equal(cleared, true);
    fakeWindow.dispatchEvent(new Event('focus'));
    fakeDocument.dispatchEvent(new Event('visibilitychange'));
    assert.equal(calls, 3);
  } finally {
    if (originalWindow) Object.defineProperty(globalThis, 'window', originalWindow);
    else Reflect.deleteProperty(globalThis, 'window');
    if (originalDocument) Object.defineProperty(globalThis, 'document', originalDocument);
    else Reflect.deleteProperty(globalThis, 'document');
  }
});
