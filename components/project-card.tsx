import Link from "next/link";

import type { LocalizedProject } from "@/lib/projects";

import { ProjectIcon } from "./project-icon";

type ProjectCardProps = {
  project: LocalizedProject;
  detailsLabel: string;
};

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
      <path
        d="M4.16602 10H15.8327M15.8327 10L10.8327 5M15.8327 10L10.8327 15"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getAccentPillStyle(accent: string) {
  return {
    backgroundColor: `${accent}18`,
    color: accent
  };
}

export function ProjectCard({ project, detailsLabel }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface-card group flex h-full flex-col gap-5 rounded-[28px] p-6 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <ProjectIcon title={project.title} accent={project.accent} icon={project.icon} />
        <div className="flex flex-wrap justify-end gap-2">
          <span
            className="ui-pill text-[0.68rem] uppercase tracking-[0.2em]"
            style={getAccentPillStyle(project.accent)}
          >
            {project.category}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--text-primary)]">
          {project.title}
        </h3>
        <p className="text-sm leading-7 text-[var(--text-secondary)]">{project.summary}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="ui-pill text-xs" style={getAccentPillStyle(project.accent)}>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between pt-3 text-sm text-[var(--text-secondary)]">
        <span>{project.year}</span>
        <span className="inline-flex items-center gap-2 font-medium text-[var(--text-primary)]">
          {detailsLabel}
          <ArrowIcon />
        </span>
      </div>
    </Link>
  );
}
