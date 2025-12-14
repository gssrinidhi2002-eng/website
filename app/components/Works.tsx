"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects, Project } from "../data/projects";
import Link from 'next/link';

// Helper function to chunk projects into groups of 3
const chunkProjects = (arr: Project[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
};

const ProjectCard = ({ project, className }: { project: Project, className?: string }) => (
    <Link
        href={`/works/${project.slug}`}
        className={`group block relative overflow-hidden rounded-3xl ${className}`}
    >
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full h-full relative"
        >
            <img
                src={project.heroImage}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-6 left-6 flex gap-2 z-10">
                <div className="rounded-full bg-black/30 px-4 py-2 text-sm backdrop-blur-md font-medium text-white border border-white/10">
                    {project.title}
                </div>
            </div>

            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center z-10">
                <span
                    className="translate-y-4 rounded-full px-6 py-2 text-white font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ backgroundColor: 'var(--primary)' }}
                >
                    View Project
                </span>
            </div>
        </motion.div>
    </Link>
);

export default function Works() {
    const projectChunks = chunkProjects(projects, 3);

    return (
        <section id="works" className="w-full bg-background py-24 px-4 text-foreground">
            <div className="mx-auto max-w-5xl text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold md:text-5xl">&quot;Exploring uncertainty helps define what should be built next.&quot;</h2>
                <p className="mx-auto max-w-2xl text-zinc-400">
                    Questions assumptions early, simplifying systems, and designs for change rather than certainty.
                </p>
            </div>

            <div className="mx-auto max-w-5xl flex flex-col gap-6">
                {projectChunks.map((chunk, index) => {
                    const isEven = index % 2 === 0;

                    let bigProject: Project | undefined;
                    let stackProjects: Project[] = [];

                    if (isEven) {
                        bigProject = chunk[0];
                        stackProjects = chunk.slice(1);
                    } else {
                        if (chunk.length === 3) {
                            stackProjects = chunk.slice(0, 2);
                            bigProject = chunk[2];
                        } else {
                            bigProject = chunk[chunk.length - 1];
                            stackProjects = chunk.slice(0, chunk.length - 1);
                        }
                    }

                    return (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* EVEN CASE: Big Left (Span 2), Stack Right (Span 1) */}
                            {isEven && (
                                <>
                                    {/* Big Card Left */}
                                    <div className="w-full md:col-span-2 aspect-square">
                                        {bigProject && <ProjectCard project={bigProject} className="h-full" />}
                                    </div>
                                    {/* Stack Right */}
                                    <div className="flex flex-col gap-6 w-full md:col-span-1 h-full">
                                        {stackProjects.map((p) => (
                                            <div key={p.slug} className="w-full aspect-square">
                                                <ProjectCard project={p} className="h-full" />
                                            </div>
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* ODD CASE: Stack Left (Span 1), Big Right (Span 2) */}
                            {!isEven && (
                                <>
                                    {/* Stack Left */}
                                    <div className="flex flex-col gap-6 w-full md:col-span-1 h-full order-2 md:order-1">
                                        {stackProjects.map((p) => (
                                            <div key={p.slug} className="w-full aspect-square">
                                                <ProjectCard project={p} className="h-full" />
                                            </div>
                                        ))}
                                    </div>
                                    {/* Big Card Right */}
                                    <div className="w-full md:col-span-2 aspect-square order-1 md:order-2">
                                        {bigProject && <ProjectCard project={bigProject} className="h-full" />}
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
