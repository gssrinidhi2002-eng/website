import React from "react";
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

        default:
            return null;
    }
};
