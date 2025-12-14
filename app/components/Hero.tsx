"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background px-4 pt-30 pb-20">
            {/* Background Glows */}
            {/* Background Glows */}
            <div className="absolute top-0 left-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]" style={{ backgroundColor: 'var(--primary)', opacity: 0.2 }} />
            <div className="absolute bottom-0 right-0 h-[800px] w-[800px] translate-x-1/2 translate-y-1/2 rounded-full blur-[120px]" style={{ backgroundColor: 'var(--secondary)', opacity: 0.2 }} />

            <div className="z-10 flex flex-col items-center text-center max-w-8xl mx-auto space-y-8">
                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
                >
                    <img
                        src="assets/Profile.png"
                        alt="Srinidhi"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Name & Role */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="space-y-2"
                >
                    <h1 className="text-4xl md:text-5xl font-medium text-white">
                        Hi, I’m Srinidhi
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base font-light tracking-wide">
                        Associate Product Manager | AI-native, HCI and consumer products.
                    </p>
                </motion.div>

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full max-w-6xl px-4"
                >
                    <img
                        src="/assets/hero_text.png"
                        alt="Building the bridge between intention and interaction"
                        className="w-full h-auto object-contain"
                    />
                </motion.div>

                {/* Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="max-w-3xl text-zinc-400 leading-relaxed text-base md:text-lg"
                >
                    <p>
                        Working at the <strong className="text-zinc-200">intersection of UX</strong>, product strategy, and execution—owning <strong className="text-zinc-200">zero-to-one</strong> features, stabilising <strong className="text-zinc-200">fast-changing systems</strong>, and shipping decisions when requirements, metrics, and <strong className="text-zinc-200">direction</strong> are still evolving.
                    </p>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="pt-4"
                >
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-8 py-3 bg-white text-black rounded-full font-bold text-sm tracking-wide hover:bg-zinc-200 transition-colors"
                    >
                        CONNECT
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
