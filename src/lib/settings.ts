/** Site preferences stored on device */

const SCHOOL_KEY = "typologyquiz_school_mode";
const THEME_KEY = "typologyquiz_theme";

export type ThemeMode = "light" | "dark" | "system";

export function loadSchoolMode(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(SCHOOL_KEY) === "1";
  } catch {
    return false;
  }
}

export function saveSchoolMode(on: boolean): void {
  try {
    localStorage.setItem(SCHOOL_KEY, on ? "1" : "0");
  } catch {
    /* ignore */
  }
}

export function loadTheme(): ThemeMode {
  if (typeof window === "undefined") return "system";
  try {
    const t = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    if (t === "light" || t === "dark" || t === "system") return t;
  } catch {
    /* ignore */
  }
  return "system";
}

export function saveTheme(mode: ThemeMode): void {
  try {
    localStorage.setItem(THEME_KEY, mode);
  } catch {
    /* ignore */
  }
}

export function applyTheme(mode: ThemeMode): void {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const prefersDark =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const dark = mode === "dark" || (mode === "system" && prefersDark);
  root.dataset.theme = dark ? "dark" : "light";
  root.style.colorScheme = dark ? "dark" : "light";
}
