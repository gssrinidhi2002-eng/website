"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4">
            {/* Background Glows */}
            <div className="absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" style={{ backgroundColor: 'var(--primary)', opacity: 0.4 }} />
            <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/2 translate-y-1/2 rounded-full blur-[120px]" style={{ backgroundColor: 'var(--secondary)', opacity: 0.4 }} />

            {/* Abstract Lines - Simplified SVG representation */}
            <div className="absolute inset-0 z-0 opacity-30">
                <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 Q 25 30, 50 50 T 100 50" stroke="url(#grad1)" strokeWidth="0.5" fill="transparent" />
                    <path d="M0 55 Q 25 35, 50 55 T 100 55" stroke="url(#grad2)" strokeWidth="0.5" fill="transparent" />
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--primary)" />
                            <stop offset="100%" stopColor="var(--secondary)" />
                        </linearGradient>
                        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="var(--accent)" />
                            <stop offset="100%" stopColor="var(--secondary)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="z-10 flex flex-col items-center text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
                >
                    Let&apos;s build
                    <br />
                    <span className="relative mt-2 inline-block rounded-lg bg-white/10 px-4 py-2 backdrop-blur-sm">
                        a game
                        {/* Glow under text */}
                        <div className="absolute inset-0 -z-10 blur-xl" style={{ background: 'linear-gradient(to right, var(--primary), var(--secondary))', opacity: 0.2 }} />
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-16"
                >
                    <a href="#about" className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105">
                        Scroll to know me
                        <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
