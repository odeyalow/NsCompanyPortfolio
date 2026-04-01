import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProjectIcon } from "@/components/project-icon";
import { getLocalizedProjectBySlug, getRelatedLocalizedProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getLocalizedProjectBySlug(slug, "ru");

  if (!project) {
    return {
      title: "Проект не найден"
    };
  }

  return {
    title: `${project.title} | NS Company Portfolio`,
    description: project.summary
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getLocalizedProjectBySlug(slug, "ru");

  if (!project) {
    notFound();
  }

  const relatedProjects = getRelatedLocalizedProjects(project.slug, "ru");

  return (
    <main className="min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 lg:px-12 lg:py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/76 transition-colors duration-200 hover:bg-white/[0.08]"
          >
            <span className="text-base leading-none">←</span>
            На главную
          </Link>
          <div className="text-sm text-white/48">
            {project.category} / {project.year}
          </div>
        </div>

        <section className="panel-glow relative overflow-hidden rounded-[36px] border border-white/8 bg-white/[0.03] p-7 sm:p-9 lg:p-12">
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage: `radial-gradient(circle at top right, ${project.accent}38, transparent 38%)`
            }}
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/52">
                  {project.category}
                </span>
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.22em] text-white/52">
                  {project.status}
                </span>
                {project.placeholder ? (
                  <span className="rounded-full border border-amber-300/18 bg-amber-300/8 px-3 py-1 text-xs uppercase tracking-[0.22em] text-amber-100/78">
                    Placeholder content
                  </span>
                ) : null}
              </div>

              <h1 className="mt-5 font-display text-5xl font-semibold tracking-[-0.07em] text-white sm:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-black/14 px-3 py-1.5 text-sm text-white/66"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <ProjectIcon title={project.title} accent={project.accent} icon={project.icon} large />
              {project.siteUrl ? (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/[0.09]"
                >
                  Открыть исходный сайт
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {project.facts.map((fact) => (
            <div
              key={`${fact.label}-${fact.value}`}
              className="rounded-[26px] border border-white/10 bg-white/[0.025] p-5"
            >
              <div className="text-sm text-white/45">{fact.label}</div>
              <div className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                {fact.value}
              </div>
            </div>
          ))}
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          {project.sections.map((section) => (
            <article
              key={section.title}
              className="rounded-[30px] border border-white/10 bg-white/[0.025] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.2)]"
            >
              <h2 className="font-display text-2xl font-semibold tracking-[-0.05em] text-white">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">{section.text}</p>
            </article>
          ))}
        </section>

        <section className="space-y-5">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-white/42">Related</p>
              <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-white">
                Другие проекты
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.slug}
                href={`/projects/${relatedProject.slug}`}
                className="rounded-[28px] border border-white/10 bg-white/[0.025] p-5 transition-colors duration-200 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-4">
                  <ProjectIcon title={relatedProject.title} accent={relatedProject.accent} icon={relatedProject.icon} />
                  <div>
                    <div className="font-display text-xl tracking-[-0.04em] text-white">
                      {relatedProject.title}
                    </div>
                    <div className="mt-1 text-sm text-white/54">{relatedProject.category}</div>
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
