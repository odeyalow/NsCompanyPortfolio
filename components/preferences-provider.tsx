"use client";

import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";

import { type Locale, isLocale } from "@/lib/i18n";

type Theme = "light" | "dark";

type PreferencesContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  theme: Theme;
  toggleTheme: () => void;
};

const PreferencesContext = createContext<PreferencesContextValue | null>(null);

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.body.dataset.theme = theme;
}

export function PreferencesProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("ru");
  const [theme, setTheme] = useState<Theme>("light");
  const isReadyRef = useRef(false);

  useEffect(() => {
    if (!isReadyRef.current) {
      return;
    }

    window.localStorage.setItem("ns-portfolio-locale", locale);
  }, [locale]);

  useEffect(() => {
    if (!isReadyRef.current) {
      return;
    }

    window.localStorage.setItem("ns-portfolio-theme", theme);
    applyTheme(theme);
  }, [theme]);

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("ns-portfolio-locale");
    const savedTheme = window.localStorage.getItem("ns-portfolio-theme");
    const nextLocale = savedLocale && isLocale(savedLocale) ? savedLocale : "ru";
    const nextTheme = savedTheme === "dark" ? "dark" : "light";

    applyTheme(nextTheme);
    isReadyRef.current = true;

    if (nextLocale !== "ru") {
      startTransition(() => setLocale(nextLocale));
    }

    if (nextTheme !== "light") {
      startTransition(() => setTheme(nextTheme));
    }
  }, []);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      theme,
      toggleTheme: () =>
        setTheme((current) => {
          const nextTheme = current === "light" ? "dark" : "light";
          applyTheme(nextTheme);
          return nextTheme;
        })
    }),
    [locale, theme]
  );

  return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within PreferencesProvider");
  }

  return context;
}
