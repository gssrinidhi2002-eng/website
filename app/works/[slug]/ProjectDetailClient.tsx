"use client";
import React from "react";
import { Project, ContentBlock } from "../../data/projects";
import { ArrowLeft, PlayCircle, Layers, Gamepad2, Globe, Code, Brain, LayoutTemplate } from "lucide-react";
import { motion } from "framer-motion";
import Link from 'next/link';

// Map string names to components
const IconMap: { [key: string]: any } = {
    Layers,
    Gamepad2,
    Globe,
    Code,
    Brain,
    LayoutTemplate
};

export default function ProjectDetailClient({ project }: { project: Project }) {
    if (!project) {
        return (
            <div className="flex h-screen w-full items-center justify-center bg-black text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Project Not Found</h1>
                    <Link href="/" className="mt-4 inline-block text-zinc-400 hover:text-white">Go Back Home</Link>
                </div>
            </div>
        )
    }

    return (
        <main className="min-h-screen bg-black text-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
                <Link
                    href="/#works"
                    className="flex items-center gap-2 rounded-full border border-zinc-800 bg-black/50 px-4 py-2 text-sm text-zinc-300 backdrop-blur transition-colors hover:bg-zinc-900 hover:text-white"
                >
                    <ArrowLeft size={16} /> Back
                </Link>
                <span className="text-xs uppercase tracking-widest text-zinc-500 font-bold">{project.title}</span>
            </nav>

            {/* Hero Header */}
            <header className="relative flex min-h-[60vh] flex-col justify-end px-8 pb-8 pt-32 md:px-16 md:pb-16 md:pt-48">
                <div className="absolute inset-0 z-0">
                    <img src={project.heroImage} alt={project.title} className="h-full w-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-4xl space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                            <span key={tag} className="rounded-full bg-zinc-800/80 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur">{tag}</span>
                        ))}
                    </div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold leading-tight md:text-7xl"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl font-medium text-zinc-400 md:text-4xl"
                    >
                        {project.subtitle}
                    </motion.h2>
                    <p className="max-w-xl text-lg text-zinc-300">{project.description}</p>
                </div>
            </header>

            {/* Content Blocks */}
            <div className="mx-auto max-w-5xl space-y-24 py-24 px-4">
                {project.content.map((block, index) => (
                    <BlockRenderer key={index} block={block} orientation={project.orientation} />
                ))}
            </div>

            {/* Footer Navigation */}
            <div className="border-t border-zinc-900 py-12 text-center text-zinc-500">
                <Link href="/#works" className="hover:text-white transition-colors">View All Projects</Link>
            </div>

        </main>
    );
}

function BlockRenderer({ block, orientation }: { block: ContentBlock; orientation?: string }) {
    const aspectRatioClass = orientation === 'landscape'
        ? 'aspect-[20/9]'
        : orientation === 'portrait'
            ? 'aspect-[2/3]'
            : 'aspect-video md:aspect-[4/3]'; // Default fallback

    switch (block.type) {
        case 'text':
            return (
                <div className={`flex flex-col gap-12 items-center ${block.layout === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="flex-1 space-y-4">
                        <h2 className="text-3xl font-bold">{block.title}</h2>
                        <p className="text-zinc-400 leading-relaxed text-lg">{block.text}</p>
                    </div>
                    {block.src && (
                        <div className={`flex-1 overflow-hidden rounded-2xl bg-zinc-900 shadow-xl w-full ${aspectRatioClass}`}>
                            <img src={block.src} alt={block.title} className="h-full w-full object-cover" />
                        </div>
                    )}
                </div>
            )
        case 'award':
            return (
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-zinc-900 to-zinc-800 p-8 md:p-12 border border-zinc-800">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        {block.src && (
                            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border-4 border-white/10 rotate-2">
                                <img src={block.src} alt="Award" className="w-full h-auto" />
                            </div>
                        )}
                        <div className="flex-1 space-y-4">
                            <div className="inline-block rounded-full bg-yellow-500/10 px-4 py-1 text-sm font-bold text-yellow-500 mb-4">
                                WINNER
                            </div>
                            <h2 className="text-3xl font-bold text-white">{block.title}</h2>
                            <p className="text-zinc-300">{block.text}</p>
                        </div>
                    </div>
                </div>
            )
        case 'video':
            return (
                <div className="w-full space-y-8 text-center">
                    <h2 className="text-4xl font-bold">{block.title}</h2>
                    <div className="relative w-full overflow-hidden rounded-2xl bg-zinc-900 aspect-video shadow-2xl border border-zinc-800">
                        {/* Use iframe for embed or video tag for local */}
                        <iframe
                            src={block.src}
                            className="absolute inset-0 h-full w-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </div>
            )
        case 'features':
            return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {block.items?.map((item, i) => {
                        const IconComponent = item.icon ? IconMap[item.icon] : null;
                        return (
                            <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 hover:bg-zinc-800/80 transition-colors">
                                {IconComponent && <IconComponent className="mb-4 h-8 w-8 text-purple-400" />}
                                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                                <p className="text-sm text-zinc-400">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            )
        default:
            return null;
    }
}
