export type BlockType = 'text' | 'image' | 'group' | 'heading' | 'video' | 'markdown';

export interface ContentBlock {
    type: BlockType;
    title?: string;
    content?: string;
    src?: string;
    alt?: string;
    className?: string; // For specific styling tweaks (e.g. grid layout)
    children?: ContentBlock[];
}
