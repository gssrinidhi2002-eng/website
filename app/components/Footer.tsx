import React from "react";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full border-t border-zinc-900 bg-black py-8">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-sm text-zinc-500">
                <div>2025 Angad Singh</div>
                <div className="flex gap-4">
                    <a href="https://www.linkedin.com/in/angad-kukreja-1018bba8/" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                    <a href="https://github.com/Ansink19" className="hover:text-white transition-colors"><Github size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
