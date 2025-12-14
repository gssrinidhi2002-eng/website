"use client";
import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import Link from 'next/link';

export default function Works() {
    return (
        <section id="works" className="w-full bg-background py-24 px-4 text-foreground">
            <div className="mx-auto max-w-5xl text-center mb-16 space-y-4">
                <h2 className="text-3xl font-bold md:text-5xl">&quot;I build worlds that leave a memorable mark.&quot;</h2>
                <p className="mx-auto max-w-2xl text-zinc-400">
                    I turn ideas into responsive, polished, and performant gameplay.
                </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 md:grid-flow-dense">
                {projects.map((project, index) => (
                    <Link
                        href={`/works/${project.slug}`}
                        key={project.slug}
                        className={`group block ${project.orientation === 'landscape' ? 'md:col-span-2' :
                            project.orientation === 'portrait' ? 'md:row-span-2' : ''
                            }`}
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-2xl bg-zinc-900 w-full h-full ${project.orientation === 'landscape' ? 'aspect-[20/9]' :
                                project.orientation === 'portrait' ? 'aspect-[9/16]' : 'aspect-[4/3]'
                                }`}
                        >
                            <img
                                src={project.heroImage}
                                alt={project.title}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 flex gap-2">
                                <div className="rounded-full bg-white/20 px-4 py-1 text-sm backdrop-blur-md font-medium">
                                    {project.title}
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                                <span
                                    className="translate-y-4 rounded-full px-6 py-2 text-white font-semibold opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                                    style={{ backgroundColor: 'var(--primary)' }}
                                >
                                    View Project
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
