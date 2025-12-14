import React from "react";
import { blogs } from "../../data/blogs";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { BlockRenderer } from "../../components/BlockRenderer";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = blogs.find(p => p.id === slug);

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                <Link href="/#blogs" className="text-zinc-400 hover:text-white underline">Back to Blogs</Link>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-foreground">
            {/* Hero Section of the Blog */}
            <div className="relative w-full h-[30vh] bg-zinc-900 flex items-end pb-12 px-4 md:px-12 border-b border-zinc-800">
                {/* Back Button */}
                <div className="absolute top-8 left-8 z-10">
                    <Link href="/#blogs" className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full text-white hover:bg-black/70 transition-colors">
                        <ArrowLeft size={16} />
                        <span className="text-sm font-medium">Back</span>
                    </Link>
                </div>

                <div className="max-w-4xl w-full mx-auto relative z-10">
                    <span className="text-zinc-400 text-sm font-bold tracking-widest uppercase mb-4 block">{post.category}</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{post.title}</h1>
                    <div className="flex items-center gap-4 text-zinc-500 text-sm">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>5 min read</span>
                    </div>
                </div>

                {/* Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 blur-[120px] rounded-full" />
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="space-y-2">
                    {post.blocks.map((block, idx) => (
                        <BlockRenderer key={idx} block={block} />
                    ))}
                </div>
            </div>
        </main>
    );
}
export async function generateStaticParams() {
    return blogs.map((post) => ({
        slug: post.id,
    }));
}
