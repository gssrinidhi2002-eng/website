import { ContentBlock } from "../types/content";

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    heroImage: string;
    tags: string[];
    description: string;
    role?: string;
    tech?: string[];
    content: ContentBlock[];
}

export const projects: Project[] = [

    {
        slug: "spotify",
        title: "Spotify",
        subtitle: "The Paradox of Choice",
        heroImage: "/assets/Spotify/Thumbnail.png",
        tags: ["Personalization", "Monetization", "Regional UX", "Retention"],
        description: "Spotify must balance personalization, monetization, and regional UX—avoiding over-personalization, minimizing churn from ads or paywalls, and adapting to regional ARPU differences—to sustainably grow engagement, retention, and revenue.",
        content: [
            {
                type: 'image',
                src: "/assets/Spotify/spotify_core.png",
                className: "w-full rounded-xl border border-zinc-800"
            }
        ]
    },
    {
        slug: "krishi",
        title: "Krishi",
        subtitle: "Designing Policy & Product Interventions for a Wicked Agricultural Problem",
        heroImage: "/assets/Krishi/Thumbnail.png",
        tags: ["Wicked Problems", "Systems Thinking", "Behavioral Policy", "Social Impact"],
        description: "Krishi is a policy and product intervention design project that addresses the complex agricultural challenges in India. The project focuses on improving agricultural productivity, ensuring food security, and fostering sustainable agricultural practices.",
        content: [
            {
                type: 'image',
                src: "/assets/Krishi/Krishi.png",
                className: "w-full rounded-xl border border-zinc-800"
            }
        ]
    },
    {
        slug: "cosmos",
        title: "COSMOS",
        subtitle: "Your Gateway to Galactic Living",
        heroImage: "/assets/Cosmos/Thumbnail.png",
        tags: ["Human–AI Interaction", "Systems Visualization", "Exploratory Interfaces", "Speculative Product"],
        description: "COSMOS is an immersive speculative experience that invites users to explore futuristic megastructures and imagine humanity’s potential centuries into the future. Inspired by science fiction and scientific imagination, the project blends interaction, narrative, and exploration to let users experience bold ideas of collective creativity and futuristic living—on their own terms.",
        content: [
            {
                type: 'image',
                src: "/assets/Cosmos/Cosmos.png",
                className: "w-full rounded-xl border border-zinc-800"
            }
        ]
    },
    // {
    //     slug: "horizon",
    //     title: "Speed Pursuit",
    //     subtitle: "Play Fast!",
    //     heroImage: "/assets/Horizon/HorizonStart.jpeg",
    //     tags: ["Unity", "3D", "Multiplayer", "Racing"],
    //     description: "Unleash your speed demon and race your way to glory!",
    //     role: "Co-Developer",
    //     tech: ["Unity", "C#", "Netcode"],
    //     content: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Always Exciting", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "A racing game with both single player and multiplayer modes. Has adaptative AI with rubber banding to give the players an always exciting experience.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Horizon/HorizonNight.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-8",
    //             children: [
    //                 { type: 'heading', content: "Plays Fast and Runs Fast", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "The scene is optimised for fast paced action with LOD systems and culling. Built with custom network sync components to handle high speed moving objects and to deliver a consistent lag free experience.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Horizon/HorizonMid.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'video',
    //             src: "https://www.youtube.com/embed/hQ_Di_kCpxE",
    //             title: "Video Showcase",
    //             className: "aspect-video mt-8 rounded-2xl overflow-hidden border border-zinc-800"
    //         }
    //     ]
    // },
    // {
    //     slug: "motocross",
    //     title: "Racing Motocross",
    //     subtitle: "Offroad Action",
    //     heroImage: "/assets/Moto/MotoStart.jpg",
    //     tags: ["Unity", "3D", "Multiplayer", "Racing", "Motocross"],
    //     description: "Time for Extreme Dirt-Bike Racing!",
    //     role: "Co-Developer",
    //     tech: ["Unity", "C#", "Netcode"],
    //     content: [
    //         {
    //             type: 'group',
    //             className: "grid grid-cols-1 md:grid-cols-2 gap-6",
    //             children: [
    //                 {
    //                     type: 'group',
    //                     className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //                     children: [
    //                         { type: 'heading', content: "A Dirty Ride", className: "text-white font-bold mb-2" },
    //                         { type: 'text', content: "Prove your motocross mastery as you jump and flip your way to the finish line.", className: "text-zinc-400 text-sm mb-4" },
    //                         { type: 'image', src: "/assets/Moto/MotoHome.jpeg", className: "rounded-lg w-full aspect-video object-cover" }
    //                     ]
    //                 },
    //                 {
    //                     type: 'group',
    //                     className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //                     children: [
    //                         { type: 'heading', content: "Upgrade Your Ride", className: "text-white font-bold mb-2" },
    //                         { type: 'text', content: "Upgrade your bike or Unlock new bikes and make it to the end.", className: "text-zinc-400 text-sm mb-4" },
    //                         { type: 'image', src: "/assets/Moto/MotoUpgrade.jpeg", className: "rounded-lg w-full aspect-video object-cover" }
    //                     ]
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-6",
    //             children: [
    //                 { type: 'heading', content: "Mono vs Mono Action", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Tackle the track with your bike in 3 different modes and try to beat your friends.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Moto/MotoLobby.jpeg",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'video',
    //             src: "https://www.youtube.com/embed/I9iXj68uv_k",
    //             title: "Video Showcase",
    //             className: "aspect-video mt-8 rounded-2xl overflow-hidden border border-zinc-800"
    //         }
    //     ]
    // },
    // {
    //     slug: "net-cricket",
    //     title: "Cricket Multiplayer",
    //     subtitle: "It's an out!!",
    //     heroImage: "/assets/Cricket/CricketStart.jpeg",
    //     tags: ["Unity", "3D", "Multiplayer", "Sports"],
    //     description: "Competitive real-time multiplayer cricket showdown!",
    //     role: "Co-Developer",
    //     tech: ["Unity", "C#", "Netcode", "Relay"],
    //     content: [
    //         {
    //             type: 'video',
    //             src: "https://www.youtube.com/embed/yDwV7ZCIYys",
    //             title: "Video Showcase",
    //             className: "aspect-video mb-8 rounded-2xl overflow-hidden border border-zinc-800"
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Short & Sweet", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Compete in 2 over innings and test both your batting and bowling skills.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Cricket/CricketMid.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-8",
    //             children: [
    //                 { type: 'heading', content: "Test your skills", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Built with Netcode and Relay, Challenge your friends or test your mettle against people online.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Cricket/CricketStats.jpeg",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     slug: "lan-dash",
    //     title: "Lan Dash",
    //     subtitle: "A Colourful Dash",
    //     heroImage: "/assets/LanDash/LanDashHero.jpg",
    //     tags: ["Unity", "2D", "Thrilling"],
    //     description: "A short but hard game about dodging colourful pillars...",
    //     role: "Designer & Developer",
    //     tech: ["Unity 2D", "C#"],
    //     content: [
    //         {
    //             type: 'video',
    //             src: "https://www.youtube.com/embed/t-KSrKEuNfI",
    //             title: "Video Showcase",
    //             className: "aspect-video mb-8 rounded-2xl overflow-hidden border border-zinc-800"
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "Lan Dashed", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "My first game made in Unity utilising the 2D stack. Inspired by Chameleon Run...", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/LanDash/LanDash.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-8",
    //             children: [
    //                 { type: 'heading', content: "Magic of Colours", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Each pillar provides with a new obstacle that the player must overcome.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/LanDash/LanDashHero.jpg",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         }
    //     ]
    // },
    // {
    //     slug: "galaxoid",
    //     title: "Galaxoid",
    //     subtitle: "Era Travelling Shooter",
    //     heroImage: "/assets/Galaxoid/G4.png",
    //     tags: ["Unity", "2D", "Multiplayer", "Shooter", "Action"],
    //     description: "Shoot the asteroids and aim for the highest score.",
    //     role: "Designer & Developer",
    //     tech: ["Unity", "C#", "Photon Networking"],
    //     content: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "A Journey of Space and Time", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Galaxoid can be played in 3 art Styles from 3 different eras of gaming history.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Galaxoid/G1.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800 mt-8",
    //             children: [
    //                 { type: 'heading', content: "Why Travel Alone", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Galaxoid features a multiplayer mode made with using Photon PUN.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Galaxoid/G2.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'video',
    //             src: "https://www.youtube.com/embed/Fetk4bJBVik",
    //             title: "Video Showcase",
    //             className: "aspect-video mt-8 rounded-2xl overflow-hidden border border-zinc-800"
    //         }
    //     ]
    // },
    // {
    //     slug: "citadel",
    //     title: "The Citadel",
    //     subtitle: "Can You Make it to The Top?",
    //     heroImage: "/assets/Citadel/Citadel.png",
    //     tags: ["Text Based", "Adventure", "Mystery"],
    //     description: "A text - based adventure game about your journey through a mysterious citadel.",
    //     role: "Designer & Developer",
    //     tech: ["C++"],
    //     content: [
    //         {
    //             type: 'group',
    //             className: "bg-zinc-900 rounded-3xl p-8 border border-zinc-800",
    //             children: [
    //                 { type: 'heading', content: "A Climb of Mystery", className: "text-2xl font-bold text-white mb-4" },
    //                 { type: 'text', content: "Climb the citadel to unlock its mysteries and uncover your fate.", className: "text-zinc-400 mb-6" },
    //                 {
    //                     type: 'image',
    //                     src: "/assets/Citadel/Citadel.png",
    //                     className: "w-full rounded-xl bg-black/50 border border-zinc-800 aspect-video object-cover"
    //                 }
    //             ]
    //         },
    //         {
    //             type: 'video',
    //             src: "https://www.youtube.com/embed/GEIemgzgQHI",
    //             title: "Video Showcase",
    //             className: "aspect-video mt-8 rounded-2xl overflow-hidden border border-zinc-800"
    //         }
    //     ]
    // },

];
