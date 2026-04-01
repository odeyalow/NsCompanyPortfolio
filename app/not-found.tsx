"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences-provider";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/i18n";

export default function NotFound() {
  const { locale } = usePreferences();
  const t = getDictionary(locale);

  return (
    <>
      <SiteHeader linkPrefix="/" />
      <main className="flex min-h-[calc(100vh-4.75rem)] items-center justify-center px-6">
        <div className="surface-card max-w-xl rounded-[32px] p-8 text-center sm:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">{t.notFound.eyebrow}</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)]">
            {t.notFound.title}
          </h1>
          <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">{t.notFound.description}</p>
          <Link href="/" className="button-secondary mt-8">
            {t.notFound.action}
          </Link>
        </div>
      </main>
    </>
  );
}
