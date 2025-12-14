import { LucideIcon } from "lucide-react";

export interface ContentBlock {
    type: 'text' | 'image' | 'video' | 'award' | 'features';
    title?: string;
    text?: string;
    src?: string; // For local images, put them in 'public/assets' and use "/assets/filename.jpg"
    layout?: 'left' | 'right' | 'full';
    caption?: string;
    items?: { title: string; desc: string; icon?: string }[]; // For feature blocks
}

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
        slug: "horizon",
        title: "Speed Pursuit",
        subtitle: "Play Fast!",
        heroImage: "/assets/Horizon/HorizonStart.jpeg",
        tags: ["Unity", "3D", "Multiplayer", "Racing"],
        description: "Unleash your speed demon and race your way to glory!",
        role: "Co-Developer",
        tech: ["Unity", "C#", "Netcode"],
        content: [
            {
                type: 'text',
                title: "Always Exiciting",
                text: "A racing game with both single player and multiplayer modes. Has adaptative AI with rubber banding to give the players an always exciting experience.",
                layout: 'left',
                src: '/assets/Horizon/HorizonNight.png'
            },
            {
                type: 'text',
                title: "Plays Fast and Runs Fast",
                text: "The scene is optimised for fast paced action with LOD systems and culling. Built with custom network sync components to handle high speed moving objects and to deliver a consistent lag free experience.",
                layout: 'right',
                src: '/assets/Horizon/HorizonMid.png'
            },
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/hQ_Di_kCpxE",
                layout: 'full'
            }
        ]
    },
    {
        slug: "motocross",
        title: "Racing Motocross",
        subtitle: "Offroad Action",
        heroImage: "/assets/Moto/MotoStart.jpg",
        tags: ["Unity", "3D", "Multiplayer", "Racing", "Motocross"],
        description: "Time for Extreme Dirt-Bike Racing!",
        role: "Co-Developer",
        tech: ["Unity", "C#", "Netcode"],
        content: [
            {
                type: 'text',
                title: "A Dirty Ride",
                text: "Prove your motocross mastery as you jump and flip your way to the finish line.",
                layout: 'left',
                src: '/assets/Moto/MotoHome.jpeg'
            },
            {
                type: 'text',
                title: "Mono vs Mono Action",
                text: "Tackle the track with your bike in 3 different modes and try to beat your friends.",
                layout: 'right',
                src: '/assets/Moto/MotoLobby.jpeg'
            },
            {
                type: 'text',
                title: "Upgrade Your Ride",
                text: "Upgrade your bike or Unlock new bikes and make it to the end.",
                layout: 'left',
                src: '/assets/Moto/MotoUpgrade.jpeg'
            },
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/I9iXj68uv_k",
                layout: 'full'
            }
        ]
    },
    {
        slug: "net-cricket",
        title: "Cricket Multiplayer",
        subtitle: "It's an out!!",
        heroImage: "/assets/Cricket/CricketStart.jpeg",
        tags: ["Unity", "3D", "Multiplayer", "Sports"],
        description: "Competitive real-time multiplayer cricket showdown!",
        role: "Co-Developer",
        tech: ["Unity", "C#", "Netcode", "Relay"],
        content: [
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/yDwV7ZCIYys",
                layout: 'full'
            },
            {
                type: 'text',
                title: "Short & Sweet",
                text: "Compete in 2 over innings and test both your batting and bowling skills.",
                layout: 'right',
                src: '/assets/Cricket/CricketMid.png'
            },
            {
                type: 'text',
                title: "Test you skills",
                text: "Built with Netcode and Relay, Challenge your friends or test your mettle against people online.",
                layout: 'left',
                src: '/assets/Cricket/CricketStats.jpeg'
            }

        ]
    },
    {
        slug: "lan-dash",
        title: "Lan Dash",
        subtitle: "A Colourful Dash",
        heroImage: "/assets/LanDash/LanDashHero.jpg",
        tags: ["Unity", "2D", "Thrilling"],
        description: "A short but hard game about dodging colourful pillars at high speed. Juggle your speed, size and direction to reach the finish line.",
        role: "Designer & Developer",
        tech: ["Unity 2D", "C#"],
        content: [
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/t-KSrKEuNfI",
                layout: 'full'
            },
            {
                type: 'text',
                title: "Lan Dashed",
                text: "My first game made in Unity utilising the 2D stack. Inspired by Chameleon Run, Lan Dash provides a unique experience where players must navigate through a colourful pillars while dodging obstacles and avoiding collisions.",
                layout: 'left',
                src: '/assets/LanDash/LanDash.png'
            },
            // {
            //     type: 'features',
            //     title: "Key Contributions",
            //     items: [
            //         { title: "Architecture", desc: "Designed scalable game engine systems.", icon: "Layers" },
            //         { title: "Performance", desc: "Optimized for low-end Android devices.", icon: "Gamepad2" },
            //         { title: "Localization", desc: "Built pipeline for 10+ languages.", icon: "Globe" },
            //     ]
            // },
            {
                type: 'text',
                title: "Magic of Colours",
                text: "Each pillar provides with a new obstacle that the player must overcome, changing speeds, sizes and directions to reach the finish line.",
                layout: 'right',
                src: '/assets/LanDash/LanDashHero.jpg'

            }
        ]
    },
    {
        slug: "galaxoid",
        title: "Galaxoid",
        subtitle: "Era Travelling Shooter",
        heroImage: "/assets/Galaxoid/G4.png",
        tags: ["Unity", "2D", "Multiplayer", "Shooter", "Action"],
        description: "Shoot the asteroids and aim for the highest score.",
        role: "Designer & Developer",
        tech: ["Unity", "C#", "Photon Networking"],
        content: [
            {
                type: 'text',
                title: "A Journey of Space and Time",
                text: "Galaxoid can be played in 3 art Styles from 3 different eras of gaming history.",
                layout: 'left',
                src: '/assets/Galaxoid/G1.png'
            },
            {
                type: 'text',
                title: "Why Travel Alone",
                text: "Galaxoid features a multiplayer mode made with using Photon PUN. Challenge your friends to a 1v1 in the multiplayer mode where the last man standing wins.",
                layout: 'right',
                src: '/assets/Galaxoid/G2.png'
            },
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/Fetk4bJBVik",
                layout: 'full'
            }
        ]
    },
    {
        slug: "citadel",
        title: "The Citadel",
        subtitle: "Can You Make it to The Top?",
        heroImage: "/assets/Citadel/Citadel.png",
        tags: ["Text Based", "Adventure", "Mystery"],
        description: "A text - based adventure game about your journey through a mysterious citadel.",
        role: "Designer & Developer",
        tech: ["C++"],
        content: [
            {
                type: 'text',
                title: "A Climb of Mystery",
                text: "Climb the citadel to unlock its mysteries and uncover your fate.",
                layout: 'left',
                src: '/assets/Citadel/Citadel.png'
            },
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/GEIemgzgQHI",
                layout: 'full'
            }
        ]
    },
    {
        slug: "henshin",
        title: "Henshin",
        subtitle: "Escape the facility",
        heroImage: "/assets/Henshin/Henshin.png",
        tags: ["Unity", "2D", "Platformer"],
        description: "Made in a 48-Hour Game Jam. Use your Telekinetic powers to alter your environment and escape the facility.",
        role: "Co - Designer & Developer",
        tech: ["C#", "Unity"],
        content: [
            {
                type: 'text',
                title: "Colourful Telekinetic Mayhem",
                text: "Use your colourful telekinetic powers to alter your environment and escape the facility before the time runs out.",
                layout: 'left',
                src: '/assets/Henshin/Henshin.png'
            },
            {
                type: 'award',
                title: "Game Jam Winner",
                text: "Henshin was our team's entry in the 48-Hour Game Jam hosted by our college. We won first place in the competition.",
                layout: 'full',
                src: "/assets/Henshin/Henshin.png"
            },
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/dabUbNpQSPM",
                layout: 'full'
            }
        ]
    },
    {
        slug: "save-the-planet",
        title: "Astroyer",
        subtitle: "Save the planet",
        heroImage: "/assets/SaveThePlanet/SaveThePlanet.png",
        tags: ["Unity", "3D", "Shooter", "VR"],
        description: "A VR Shooter where you must shoot the asteroids to save the planet.",
        role: "Co - Designer & Developer",
        tech: ["C#", "Unity", "OpenXR"],
        content: [
            {
                type: 'text',
                title: "Shoot em down",
                text: "Use your plasma pistols and take down the asteroids to save the planet.",
                layout: 'left',
                src: '/assets/SaveThePlanet/SaveThePlanet.png'
            },
            {
                type: 'video',
                title: "Video Showcase",
                src: "https://www.youtube.com/embed/nw5a2UDH1lA",
                layout: 'full'
            }
        ]
    },

];
