"use client";

import Link from "next/link";

import { ProjectCard } from "@/components/project-card";
import { ProjectIcon } from "@/components/project-icon";
import { SiteHeader } from "@/components/site-header";
import { usePreferences } from "@/components/preferences-provider";
import { getDictionary } from "@/lib/i18n";
import { getLocalizedProjects } from "@/lib/projects";

export function HomeContent() {
  const { locale } = usePreferences();
  const t = getDictionary(locale);
  const localizedProjects = getLocalizedProjects(locale);
  const featuredProjects = localizedProjects.slice(0, 3);

  return (
    <>
      <SiteHeader />
      <main>
        <div className="page-shell flex flex-col gap-16 px-6 pb-20 pt-8 sm:px-8 lg:px-12 lg:pt-10">
          <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="surface-card rounded-[32px] p-8 sm:p-10">
              <div className="mb-6 inline-flex rounded-full bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--text-secondary)] shadow-[var(--soft-shadow)]">
                {t.hero.eyebrow}
              </div>
              <h1 className="max-w-4xl font-display text-5xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-6xl">
                {t.hero.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                {t.hero.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#projects" className="button-primary">
                  {t.hero.primaryAction}
                </a>
              </div>
            </div>

            <aside className="surface-card rounded-[32px] p-7 sm:p-8">
              <div className="mb-4">
                <p className="text-sm text-[var(--text-secondary)]">{t.hero.featuredTitle}</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">{t.hero.featuredText}</p>
              </div>

              <div className="space-y-3">
                {featuredProjects.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/projects/${project.slug}`}
                    className="surface-soft flex items-center gap-4 rounded-[24px] p-4 transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <ProjectIcon title={project.title} accent={project.accent} icon={project.icon} />
                    <div className="min-w-0">
                      <div className="font-display text-lg tracking-[-0.04em] text-[var(--text-primary)]">{project.title}</div>
                      <div className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{project.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </aside>
          </section>

          <section id="projects" className="space-y-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">{t.projects.eyebrow}</p>
                <h2 className="mt-3 font-display text-4xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">
                  {t.projects.title}
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
                {t.projects.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {localizedProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  detailsLabel={t.project.details}
                />
              ))}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-2">
            <article id="approach" className="surface-card rounded-[32px] p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">{t.approach.title}</p>
              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">{t.approach.text}</p>
            </article>

            <article id="contact" className="surface-card rounded-[32px] p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-secondary)]">{t.contact.title}</p>
              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)]">{t.contact.text}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="surface-soft rounded-[24px] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    {t.contact.phoneLabel}
                  </p>
                  <p className="mt-3 text-base font-medium text-[var(--text-primary)]">{t.contact.phone}</p>
                </div>
                <div className="surface-soft rounded-[24px] p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--text-secondary)]">
                    {t.contact.addressLabel}
                  </p>
                  <p className="mt-3 text-base font-medium leading-7 text-[var(--text-primary)]">
                    {t.contact.address}
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
