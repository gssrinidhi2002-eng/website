export interface Blog {
    title: string;
    category: string;
    image: string;
    description: string;
    link: string;
}

export const blogs: Blog[] = [
    {
        title: "Modular Multiplayer SDK",
        category: "ARCHITECTURE",
        image: "/assets/Horizon/HorizonStart.jpeg", // Placeholder
        description: "The Coupling Trap: What happens when you need to switch from Mirror to Photon?",
        link: "/blogs/modular-multiplayer-sdk"
    },
    {
        title: "Runtime Visual Scripting",
        category: "TOOLING",
        image: "/assets/LanDash/LanDashHero.jpg", // Placeholder using existing asset
        description: "Empowering designers with node-based logic at runtime.",
        link: "/blogs/runtime-visual-scripting"
    },
    {
        title: "Runtime Hot-Reloading",
        category: "ARCHITECTURE",
        image: "/assets/Cricket/CricketStart.jpeg", // Placeholder using existing asset
        description: "Iterate faster with instant code updates.",
        link: "/blogs/runtime-hot-reloading"
    },
    {
        title: "Custom Render Pipelines",
        category: "GRAPHICS",
        image: "/assets/Moto/MotoStart.jpg", // Placeholder using existing asset
        description: "Deep dive into scriptable render pipelines.",
        link: "/blogs/custom-render-pipelines"
    },
    {
        title: "Physically Based Rendering",
        category: "GRAPHICS",
        image: "/assets/Moto/MotoStart.jpg",
        description: "Understanding light transport and material properties.",
        link: "/blogs/physically-based-rendering"
    }

];
