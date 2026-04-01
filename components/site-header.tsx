"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { getDictionary, localeLabels, locales, type Locale } from "@/lib/i18n";

import { usePreferences } from "./preferences-provider";

const localeNames: Record<Locale, string> = {
  ru: "Русский",
  kz: "Қазақша",
  en: "English"
};

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="block h-[1.15rem] w-[1.15rem]">
      <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M12 2.75V5.1M12 18.9V21.25M5.45 5.45L7.1 7.1M16.9 16.9L18.55 18.55M2.75 12H5.1M18.9 12H21.25M5.45 18.55L7.1 16.9M16.9 7.1L18.55 5.45"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="block h-[1.15rem] w-[1.15rem] translate-x-[0.5px]"
    >
      <path
        d="M20.2 14.55A8.8 8.8 0 1 1 9.45 3.8A7.1 7.1 0 0 0 20.2 14.55Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type SiteHeaderProps = {
  linkPrefix?: string;
};

export function SiteHeader({ linkPrefix = "" }: SiteHeaderProps) {
  const { locale, setLocale, theme, toggleTheme } = usePreferences();
  const t = getDictionary(locale);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsLanguageOpen(false);
      }
    }

    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-[var(--page-header)]/88 backdrop-blur-xl">
      <div className="page-shell flex items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="font-display text-lg font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
          {t.brand}
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <a
            href={`${linkPrefix}#projects`}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {t.nav.projects}
          </a>
          <a
            href={`${linkPrefix}#approach`}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {t.nav.approach}
          </a>
          <a
            href={`${linkPrefix}#contact`}
            className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <div ref={languageMenuRef} className="relative">
            <button
              type="button"
              onClick={() => setIsLanguageOpen((current) => !current)}
              className="inline-flex min-w-[8.75rem] items-center justify-between gap-3 rounded-full bg-[var(--surface)] px-4 py-2.5 text-sm text-[var(--text-primary)] shadow-[var(--soft-shadow)] transition-transform duration-200 hover:-translate-y-0.5"
              aria-expanded={isLanguageOpen}
              aria-haspopup="menu"
            >
              <span className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface-soft)] text-xs font-semibold text-[var(--text-secondary)]">
                  {localeLabels[locale]}
                </span>
                <span>{localeNames[locale]}</span>
              </span>
              <ChevronIcon open={isLanguageOpen} />
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+0.75rem)] w-48 rounded-[22px] bg-[var(--surface)] p-2 shadow-[var(--shadow)] transition-all duration-200 ${
                isLanguageOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
              }`}
            >
              {locales.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setLocale(item);
                    setIsLanguageOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-[16px] px-3 py-3 text-left text-sm transition-colors ${
                    item === locale
                      ? "bg-[var(--surface-soft)] text-[var(--text-primary)]"
                      : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)]"
                  }`}
                >
                  <span>{localeNames[item]}</span>
                  <span className="text-xs uppercase tracking-[0.18em]">{localeLabels[item]}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="relative inline-flex h-12 w-[6rem] items-center justify-between rounded-full bg-[var(--surface)] px-1 shadow-[var(--soft-shadow)] transition-transform duration-200 hover:-translate-y-0.5"
            aria-label={theme === "light" ? t.theme.dark : t.theme.light}
          >
            <span
              className={`absolute left-1 top-1 h-10 w-10 rounded-full bg-[var(--surface-soft)] transition-transform duration-300 ${
                theme === "dark" ? "translate-x-[3rem]" : "translate-x-0"
              }`}
            />
            <span className="relative z-10 grid w-full grid-cols-2 place-items-center text-[var(--text-primary)]">
              <span className="flex h-10 w-10 items-center justify-center">
                <SunIcon />
              </span>
              <span className="flex h-10 w-10 items-center justify-center">
                <MoonIcon />
              </span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
