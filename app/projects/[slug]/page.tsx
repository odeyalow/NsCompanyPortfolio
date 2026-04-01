import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectContent } from "@/components/project-content";
import { SiteHeader } from "@/components/site-header";
import { getVisibleProjectBySlug } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getVisibleProjectBySlug(slug);

  if (!project) {
    return {
      title: "Проект не найден"
    };
  }

  return {
    title: `${project.title.ru} | NS Company Portfolio`,
    description: project.summary.ru
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getVisibleProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader linkPrefix="/" />
      <ProjectContent slug={slug} />
    </>
  );
}
