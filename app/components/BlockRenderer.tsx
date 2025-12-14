import React from "react";
import ReactMarkdown from "react-markdown";
import { ContentBlock } from "../types/content";

// Recursive Block Renderer Component
export const BlockRenderer = ({ block }: { block: ContentBlock }) => {
    switch (block.type) {
        case 'heading':
            return <h3 className={block.className || "text-2xl font-bold text-white mb-4"}>{block.content}</h3>;

        case 'text':
            return <p className={block.className || "text-zinc-400 mb-4 leading-relaxed"}>{block.content}</p>;

        case 'image':
            return (
                <div className={`overflow-hidden ${block.className || "rounded-xl my-6"}`}>
                    <img
                        src={block.src}
                        alt={block.alt || "Image"}
                        className="w-full h-full object-cover"
                    />
                </div>
            );

        case 'video':
            return (
                <div className={`overflow-hidden rounded-xl my-6 border border-zinc-800 ${block.className || "aspect-video"}`}>
                    <iframe
                        width="100%"
                        height="100%"
                        src={block.src}
                        title={block.title || "Video player"}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            );

        case 'group':
            return (
                <div className={block.className || "my-8"}>
                    {block.title && <h4 className="text-xl font-bold text-white mb-4">{block.title}</h4>}
                    {block.children?.map((child, idx) => (
                        <BlockRenderer key={idx} block={child} />
                    ))}
                </div>
            );

        case 'markdown':
            return (
                <div className={`${block.className || "mb-8"}`}>
                    {/* @ts-ignore */}
                    <ReactMarkdown
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-3xl md:text-4xl font-bold text-white mt-8 mb-4" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3" {...props} />,
                            p: ({ node, ...props }) => <p className="text-zinc-400 mb-4 leading-relaxed whitespace-pre-line" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc list-inside text-zinc-400 mb-4 space-y-2 pl-4" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal list-inside text-zinc-400 mb-4 space-y-2 pl-4" {...props} />,
                            li: ({ node, ...props }) => <li className="text-zinc-400 leading-relaxed" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-zinc-700 pl-4 py-1 my-6 text-zinc-300 italic bg-zinc-900/50 rounded-r-lg" {...props} />,
                            hr: ({ node, ...props }) => <hr className="my-8 border-zinc-800" {...props} />,
                            strong: ({ node, ...props }) => <strong className="text-white font-bold" {...props} />,
                            a: ({ node, ...props }) => <a className="text-blue-400 hover:text-blue-300 underline underline-offset-4" {...props} />,
                        }}
                    >
                        {block.content}
                    </ReactMarkdown>
                </div>
            );

        default:
            return null;
    }
};
