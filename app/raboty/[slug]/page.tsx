import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkProjectView } from "@/components/work-pages/WorkProjectView";
import { getWorkProjectBySlug } from "@/lib/works/projects";
import {
  buildWorkProjectMetadata,
  getPublishableWorkProjects,
  isPublishableWorkProject,
} from "@/lib/works/project-seo";

type WorkProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishableWorkProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project || !isPublishableWorkProject(project)) {
    return {};
  }

  return buildWorkProjectMetadata(project);
}

export default async function WorkProjectPage({ params }: WorkProjectPageProps) {
  const { slug } = await params;
  const project = getWorkProjectBySlug(slug);

  if (!project || !isPublishableWorkProject(project)) {
    notFound();
  }

  return <WorkProjectView project={project} />;
}
