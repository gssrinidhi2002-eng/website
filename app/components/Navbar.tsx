"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "WORKS", href: "#works" },
    { name: "BLOGS", href: "#blogs" },
    { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 rounded-full bg-zinc-900/80 px-6 py-3 backdrop-blur-md border border-zinc-800 shadow-xl"
        >
            <a href="#" className="flex h-8 w-8 items-center justify-center rounded-full overflow-hidden bg-zinc-700 transition-transform hover:scale-110">
                <img src="/assets/Profile.png" alt="Profile" className="w-full h-full object-cover" />
            </a>
            <nav className="flex gap-6">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-xs font-medium text-zinc-400 transition-colors"
                        style={{
                            ['--hover-color' as any]: 'var(--primary)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                    >
                        {item.name}
                    </a>
                ))}
            </nav>
        </motion.div>
    );
}
