export interface Blog {
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
}

export const blogs: Blog[] = [
    {
        title: "Unity as a Library (UaaL)",
        category: "MOBILE",
        image: "/assets/Horizon/HorizonStart.jpeg", // Placeholder using existing asset
        description: "Integrating Unity features into native mobile apps.",
        link: "#"
    },
    {
        title: "Runtime Visual Scripting",
        category: "TOOLING",
        image: "/assets/LanDash/LanDashHero.jpg", // Placeholder using existing asset
        description: "Empowering designers with node-based logic at runtime.",
        link: "#"
    },
    {
        title: "Runtime Hot-Reloading",
        category: "ARCHITECTURE",
        image: "/assets/Cricket/CricketStart.jpeg", // Placeholder using existing asset
        description: "Iterate faster with instant code updates.",
        link: "#"
    },
    {
        title: "Custom Render Pipelines",
        category: "GRAPHICS",
        image: "/assets/Moto/MotoStart.jpg", // Placeholder using existing asset
        description: "Deep dive into scriptable render pipelines.",
        link: "#"
    },
    {
        title: "Physically Based Rendering",
        category: "GRAPHICS",
        image: "/assets/Moto/MotoStart.jpg",
        description: "Understanding light transport and material properties.",
        link: "#"
    },
    {
        title: "Entity Component System",
        category: "ARCHITECTURE",
        image: "/assets/LanDash/LanDashHero.jpg",
        description: "Maximizing performance with data-oriented design.",
        link: "#"
    },
    {
        title: "Procedural Generation",
        category: "ALGORITHMS",
        image: "/assets/Horizon/HorizonStart.jpeg",
        description: "Creating infinite worlds with noise functions.",
        link: "#"
    },
    {
        title: "Multiplayer Networking",
        category: "NETWORKING",
        image: "/assets/Cricket/CricketStart.jpeg",
        description: "Synchronizing game state across the globe.",
        link: "#"
    },
    {
        title: "UI/UX Optimization",
        category: "DESIGN",
        image: "/assets/Moto/MotoStart.jpg",
        description: "Building responsive and intuitive interfaces.",
        link: "#"
    }
];
