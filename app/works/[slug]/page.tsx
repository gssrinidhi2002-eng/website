import React from "react";
import { projects } from "../../data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BlockRenderer } from "../../components/BlockRenderer";

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
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                <Link href="/#works" className="text-zinc-400 hover:text-white underline">Back to Works</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-foreground">
            {/* Hero Section */}
            <div className="relative w-full h-[70vh] bg-zinc-900 flex items-end pb-12 px-4 md:px-12 border-b border-zinc-800">
                {/* Back Button */}
                <div className="absolute top-8 left-8 z-10">
                    <Link href="/#works" className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors">
                        <ArrowLeft size={16} />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                </div>

                <div className="max-w-5xl w-full mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                    <div>
                        <span className="text-zinc-400 text-sm font-bold tracking-widest uppercase mb-4 block">{project.subtitle}</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{project.title}</h1>
                        <p className="text-zinc-300 text-lg leading-relaxed max-w-lg mb-6">{project.description}</p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs text-zinc-300 border border-white/5">{tag}</span>
                            ))}
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="grid grid-cols-2 gap-6 bg-black/30 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                        {project.role && (
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Role</h4>
                                <p className="text-white font-medium">{project.role}</p>
                            </div>
                        )}
                        {project.tech && (
                            <div>
                                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Tech Stack</h4>
                                <p className="text-white font-medium">{project.tech.join(", ")}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Background Image / Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
                    <img src={project.heroImage} className="w-full h-full object-cover blur-3xl opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-900/80 to-transparent" />
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="space-y-4">
                    {project.content.map((block, idx) => (
                        <BlockRenderer key={idx} block={block} />
                    ))}
                </div>
            </div>
        </main>
    );
}
