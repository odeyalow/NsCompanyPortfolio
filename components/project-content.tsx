"use client";

import Link from "next/link";

import { usePreferences } from "@/components/preferences-provider";
import { ProjectIcon } from "@/components/project-icon";
import { getDictionary } from "@/lib/i18n";
import { getLocalizedProjectBySlug, getRelatedLocalizedProjects } from "@/lib/projects";

type ProjectContentProps = {
  slug: string;
};

export function ProjectContent({ slug }: ProjectContentProps) {
  const { locale } = usePreferences();
  const t = getDictionary(locale);
  const project = getLocalizedProjectBySlug(slug, locale);

  if (!project) {
    return null;
  }

  const relatedProjects = getRelatedLocalizedProjects(project.slug, locale);

  return (
    <main>
      <div className="page-shell flex flex-col gap-8 px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="button-secondary">
            {t.project.back}
          </Link>
          <div className="text-sm text-[var(--text-secondary)]">
            {project.category} / {project.year}
          </div>
        </div>

        <section className="surface-card rounded-[32px] p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="ui-pill text-xs uppercase tracking-[0.18em]">{project.category}</span>
                <span className="ui-pill text-xs uppercase tracking-[0.18em]">{project.status}</span>
                {project.placeholder ? (
                  <span className="ui-pill text-xs uppercase tracking-[0.18em]">{t.project.placeholder}</span>
                ) : null}
              </div>

              <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-0.06em] text-[var(--text-primary)] sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="ui-pill text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <ProjectIcon title={project.title} accent={project.accent} icon={project.icon} large />
              {project.siteUrl ? (
                <a href={project.siteUrl} target="_blank" rel="noreferrer" className="button-secondary">
                  {t.project.source}
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {project.facts.map((fact) => (
            <div key={`${fact.label}-${fact.value}`} className="surface-soft rounded-[24px] p-5">
              <div className="text-sm text-[var(--text-secondary)]">{fact.label}</div>
              <div className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--text-primary)]">
                {fact.value}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          {project.sections.map((section) => (
            <article key={section.title} className="surface-card rounded-[28px] p-6">
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--text-primary)]">
            {t.project.related}
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Link key={relatedProject.slug} href={`/projects/${relatedProject.slug}`} className="surface-card rounded-[26px] p-5">
                <div className="flex items-center gap-4">
                  <ProjectIcon title={relatedProject.title} accent={relatedProject.accent} icon={relatedProject.icon} />
                  <div>
                    <div className="font-display text-xl tracking-[-0.04em] text-[var(--text-primary)]">
                      {relatedProject.title}
                    </div>
                    <div className="mt-1 text-sm text-[var(--text-secondary)]">{relatedProject.category}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
