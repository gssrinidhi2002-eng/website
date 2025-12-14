export type BlockType = 'text' | 'image' | 'group' | 'heading';

export interface ContentBlock {
    type: BlockType;
    title?: string;
    content?: string;
    src?: string;
    alt?: string;
    className?: string; // For specific styling tweaks (e.g. grid layout)
    children?: ContentBlock[];
}

export interface BlogPostDetail {
    id: string; // Matches slug
    title: string;
    category: string;
    date: string;
    blocks: ContentBlock[];
}

export const blogContent: BlogPostDetail[] = [
    {
        id: "modular-multiplayer-sdk",
        title: "Modular Multiplayer SDK",
        category: "ARCHITECTURE",
        date: "Dec 14, 2025",
        blocks: [
            // Section 1: The Coupling Trap
            {
                type: 'group',
                className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
                children: [
                    {
                        type: 'heading',
                        content: "The Coupling Trap",
                        className: "text-3xl font-bold text-white mb-4"
                    },
                    {
                        type: 'text',
                        content: "What happens when you need to switch from Mirror to Photon?",
                        className: "text-zinc-400 mb-8"
                    },
                    // Two cards row
                    {
                        type: 'group',
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                        children: [
                            {
                                type: 'group',
                                className: "bg-red-900/10 border border-red-500/30 p-6 rounded-xl",
                                children: [
                                    { type: 'heading', content: "Tightly Coupled", className: "text-white font-bold mb-2" },
                                    { type: 'text', content: "Game code talks directly to SDK. Switching breaks everything.", className: "text-zinc-400 text-sm" }
                                ]
                            },
                            {
                                type: 'group',
                                className: "bg-zinc-800/50 border border-zinc-700 p-6 rounded-xl",
                                children: [
                                    { type: 'heading', content: "Interface Abstraction", className: "text-white font-bold mb-2" },
                                    { type: 'text', content: "Game code talks to an Interface. SDKs are plugins.", className: "text-zinc-400 text-sm" }
                                ]
                            }
                        ]
                    },
                    // Diagram Image
                    {
                        type: 'image',
                        src: "/assets/uploaded_image_0_placeholder.png", // User would need to provide actual ref image or we placeholder
                        alt: "Coupling Diagram",
                        className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
                    },
                    {
                        type: 'text',
                        content: "When a project requires switching from one networking SDK to another, the coupling problem becomes painfully apparent. You've probably seen this scenario play out: a team chooses Mirror for its simplicity, then business requirements shift and Photon becomes necessary.",
                        className: "text-zinc-400 mt-8 leading-relaxed"
                    }
                ]
            },

            // Section 2: Think Like a Web Dev
            {
                type: 'group',
                className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-12",
                children: [
                    {
                        type: 'heading',
                        content: "Think Like a Web Dev",
                        className: "text-3xl font-bold text-white mb-4"
                    },
                    {
                        type: 'text',
                        content: "In web development, we use ORMs (Object-Relational Mappers) like Entity Framework. We write code once, and it works on SQL Server, MySQL, or PostgreSQL.",
                        className: "text-zinc-400 mb-8"
                    },
                    {
                        type: 'group',
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
                        children: [
                            {
                                type: 'group',
                                children: [
                                    { type: 'text', content: "Why not do the same for Multiplayer?", className: "text-zinc-400 mb-6" },
                                    {
                                        type: 'group',
                                        className: "bg-zinc-800 p-4 rounded-lg border border-zinc-700 flex items-center gap-4",
                                        children: [
                                            { type: 'text', content: "SQL Abstraction → Network Abstraction", className: "font-mono text-sm text-white" }
                                        ]
                                    }
                                ]
                            },
                            {
                                type: 'group',
                                className: "bg-black rounded-xl p-6 border border-zinc-800 font-mono text-sm",
                                children: [
                                    { type: 'text', content: "// Database World\nvar users = db.Users.Where(u => u.Active);\nWorks on ANY database engine.\n\n// Unity World\nvar player = network.Spawn(\"Player\");\nWorks on ANY networking SDK.", className: "text-blue-400 whitespace-pre-wrap" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "runtime-visual-scripting",
        title: "Runtime Visual Scripting",
        category: "TOOLING",
        date: "Dec 10, 2025",
        blocks: [
            // Intro
            {
                type: 'group',
                className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
                children: [
                    { type: 'heading', content: "Empowering Designers", className: "text-3xl font-bold text-white mb-4" },
                    { type: 'text', content: "Visual scripting allows designers to implement game logic without writing code. This decoupling enables rapid iteration and empowers the creative team.", className: "text-zinc-400 mb-8" },
                    {
                        type: 'image',
                        src: "/assets/LanDash/LanDashHero.jpg",
                        alt: "Visual Scripting Node Graph",
                        className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
                    }
                ]
            },
            // Comparison Layout (Before vs After)
            {
                type: 'group',
                className: "mt-12",
                children: [
                    { type: 'heading', content: "The Paradigm Shift", className: "text-2xl font-bold text-white mb-6" },
                    {
                        type: 'group',
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            {
                                type: 'group',
                                className: "bg-red-900/10 border border-red-500/20 p-6 rounded-2xl",
                                children: [
                                    { type: 'heading', content: "Traditional Workflow", className: "text-red-200 font-bold mb-2" },
                                    { type: 'text', content: "1. Designer writes spec doc\n2. Programmer implements\n3. Compilation wait time\n4. Review & Repeat", className: "text-zinc-400 whitespace-pre-line" }
                                ]
                            },
                            {
                                type: 'group',
                                className: "bg-green-900/10 border border-green-500/20 p-6 rounded-2xl",
                                children: [
                                    { type: 'heading', content: "Visual Scripting", className: "text-green-200 font-bold mb-2" },
                                    { type: 'text', content: "1. Designer builds logic\n2. Instant Play Mode test\n3. Iterate immediately\n4. No engineer bottleneck", className: "text-zinc-400 whitespace-pre-line" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "runtime-hot-reloading",
        title: "Runtime Hot-Reloading",
        category: "ARCHITECTURE",
        date: "Dec 05, 2025",
        blocks: [
            // Intro
            {
                type: 'group',
                className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
                children: [
                    { type: 'heading', content: "Instant Feedback Loops", className: "text-3xl font-bold text-white mb-4" },
                    { type: 'text', content: "Waiting for compilation kills flow. By implementing runtime hot-reloading for game data and logic, we reduced iteration time from 45s to instant.", className: "text-zinc-400 mb-8" },
                ]
            },
            // Feature Grid (3-column metrics)
            {
                type: 'group',
                className: "grid grid-cols-1 md:grid-cols-3 gap-4 mt-8",
                children: [
                    {
                        type: 'group',
                        className: "bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-center",
                        children: [
                            { type: 'heading', content: "45s", className: "text-4xl font-bold text-red-400 mb-2" },
                            { type: 'text', content: "Previous Compilation Time", className: "text-zinc-500 text-sm" }
                        ]
                    },
                    {
                        type: 'group',
                        className: "bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-center",
                        children: [
                            { type: 'heading', content: "< 100ms", className: "text-4xl font-bold text-green-400 mb-2" },
                            { type: 'text', content: "Hot Reload Time", className: "text-zinc-500 text-sm" }
                        ]
                    },
                    {
                        type: 'group',
                        className: "bg-zinc-800 p-6 rounded-xl border border-zinc-700 text-center",
                        children: [
                            { type: 'heading', content: "100%", className: "text-4xl font-bold text-blue-400 mb-2" },
                            { type: 'text', content: "State Preservation", className: "text-zinc-500 text-sm" }
                        ]
                    }
                ]
            },
            // Technical Implementation (Code-like block)
            {
                type: 'group',
                className: "mt-12 bg-black border border-zinc-800 rounded-xl overflow-hidden",
                children: [
                    {
                        type: 'group',
                        className: "bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-2",
                        children: [
                            { type: 'group', className: "w-3 h-3 rounded-full bg-red-500" },
                            { type: 'group', className: "w-3 h-3 rounded-full bg-yellow-500" },
                            { type: 'group', className: "w-3 h-3 rounded-full bg-green-500" },
                            { type: 'text', content: "HotReloadSystem.cs", className: "ml-4 text-xs text-zinc-400 font-mono" }
                        ]
                    },
                    {
                        type: 'heading',
                        content: "// Serialize state -> Reload DLL -> Deserialize state\n\nvoid OnHotReload() {\n    var state = SerializeGameState();\n    ReloadAssemblies();\n    RestoreGameState(state);\n}",
                        className: "p-6 font-mono text-sm text-zinc-300 whitespace-pre-wrap bg-transparent"
                    }
                ]
            }
        ]
    },
    {
        id: "custom-render-pipelines",
        title: "Custom Render Pipelines",
        category: "GRAPHICS",
        date: "Nov 28, 2025",
        blocks: [
            {
                type: 'group',
                className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
                children: [
                    { type: 'heading', content: "Beyond Standard Rendering", className: "text-3xl font-bold text-white mb-4" },
                    { type: 'text', content: "Unity's Scriptable Render Pipeline (SRP) opens the door to completely custom rendering flows.", className: "text-zinc-400 mb-8" },
                ]
            },
            // Flowchart Layout
            {
                type: 'group',
                className: "mt-8",
                children: [
                    { type: 'heading', content: "The Pipeline", className: "text-xl font-bold text-white mb-4" },
                    {
                        type: 'group',
                        className: "flex flex-col md:flex-row gap-4 items-center justify-between bg-zinc-900/50 p-6 rounded-xl border border-zinc-800",
                        children: [
                            { type: 'heading', content: "Culling", className: "text-sm bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700" },
                            { type: 'text', content: "→", className: "text-zinc-500 font-bold" },
                            { type: 'heading', content: "Sorting", className: "text-sm bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700" },
                            { type: 'text', content: "→", className: "text-zinc-500 font-bold" },
                            { type: 'heading', content: "Batching", className: "text-sm bg-zinc-800 px-4 py-2 rounded-lg border border-zinc-700" },
                            { type: 'text', content: "→", className: "text-zinc-500 font-bold" },
                            { type: 'heading', content: "Draw", className: "text-sm bg-blue-900/30 text-blue-200 px-4 py-2 rounded-lg border border-blue-500/30" },
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "physically-based-rendering",
        title: "Physically Based Rendering",
        category: "GRAPHICS",
        date: "Nov 15, 2025",
        blocks: [
            {
                type: 'group',
                className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
                children: [
                    { type: 'heading', content: "Material Authenticity", className: "text-3xl font-bold text-white mb-4" },
                    { type: 'text', content: "Understanding light transport, microfacet theory, and energy conservation.", className: "text-zinc-400 mb-4" },
                ]
            },
            // Gallery Layout
            {
                type: 'group',
                className: "grid grid-cols-2 md:grid-cols-4 gap-4 mt-8",
                children: [
                    {
                        type: 'group',
                        className: "space-y-2",
                        children: [
                            { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full opacity-80 hover:opacity-100 transition-opacity" },
                            { type: 'text', content: "Albedo", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
                        ]
                    },
                    {
                        type: 'group',
                        className: "space-y-2",
                        children: [
                            { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full grayscale contrast-125 hover:contrast-100 transition-all" },
                            { type: 'text', content: "Roughness", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
                        ]
                    },
                    {
                        type: 'group',
                        className: "space-y-2",
                        children: [
                            { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full sepia brightness-50 hover:brightness-100 transition-all" },
                            { type: 'text', content: "Metallic", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
                        ]
                    },
                    {
                        type: 'group',
                        className: "space-y-2",
                        children: [
                            { type: 'image', src: "/assets/Moto/MotoStart.jpg", className: "aspect-square rounded-lg object-cover w-full hue-rotate-90 hover:hue-rotate-0 transition-all" },
                            { type: 'text', content: "Normal", className: "text-center text-xs text-zinc-500 uppercase tracking-widest" }
                        ]
                    }
                ]
            }
        ]
    }
];
