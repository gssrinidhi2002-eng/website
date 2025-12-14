import React from "react";
import { projects } from "../../data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

// Generate params for static export
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return <div>Project not found</div>;
    }

    return <ProjectDetailClient project={project} />;
}
