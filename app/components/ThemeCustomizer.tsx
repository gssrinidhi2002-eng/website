"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";
import { useTheme, themes, Theme } from "../context/ThemeContext";

export default function ThemeCustomizer() {
    const { theme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 flex flex-col gap-2 rounded-2xl bg-zinc-900/90 p-4 shadow-xl backdrop-blur-md border border-zinc-800"
                    >
                        <div className="mb-2 text-xs font-semibold text-zinc-400">SELECT THEME</div>
                        <div className="grid grid-cols-2 gap-3">
                            {(Object.keys(themes) as Theme[]).map((t) => (
                                <button
                                    key={t}
                                    onClick={() => setTheme(t)}
                                    className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 transition-transform hover:scale-110 ${theme === t ? "border-white" : "border-transparent"
                                        }`}
                                    style={{
                                        background: `linear-gradient(135deg, ${themes[t].primary}, ${themes[t].secondary})`,
                                    }}
                                    title={t.charAt(0).toUpperCase() + t.slice(1)}
                                >
                                    {theme === t && (
                                        <div className="h-2 w-2 rounded-full bg-white shadow-sm" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all hover:scale-110 hover:bg-white/20 active:scale-95"
            >
                {isOpen ? <X className="h-6 w-6" /> : <Palette className="h-6 w-6" />}
            </button>
        </div>
    );
}
