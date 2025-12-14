"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative flex w-full justify-center bg-black py-24 px-4">
            <div className="relative z-10 w-full max-w-5xl rounded-[3rem] border border-white/10 bg-[#0a0a0a] p-8 md:p-12 overflow-hidden shadow-2xl">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Image/Profile Card Side */}
                    <div className="relative h-[400px] w-full md:w-[350px] shrink-0 overflow-hidden rounded-2xl bg-zinc-800">
                        {/* Placeholder for Profile - In a real app we'd use Next/Image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                        <img
                            src="assets/Profile.jpeg"
                            alt="Profile"
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute bottom-6 left-6 z-20">
                            <h3 className="text-2xl font-bold text-white">Angad Singh</h3>
                            <p className="text-sm text-zinc-400">Game Developer</p>
                        </div>
                    </div>

                    {/* Text Content Side */}
                    <div className="flex-1 space-y-6">
                        <h2 className="text-4xl font-bold text-white md:text-5xl">About Me</h2>
                        <p className="uppercase tracking-widest text-zinc-500 font-semibold text-sm">Unity Game Developer</p>

                        <div className="space-y-4 text-zinc-300 leading-relaxed">
                            <p>
                                I specialize in building immersive <strong className="text-white">2D/3D gaming</strong> experiences using <strong className="text-white">Unity</strong>.
                            </p>
                            <p>
                                I&apos;ve built <strong className="text-white">Multiplayer</strong> systems used by many to make immersive multiplayer gaming experiences.
                            </p>
                            <p>
                                My expertise spans game development, performance <strong className="text-white">optimization</strong>, and elegant solutions that deliver exceptional user experiences.
                            </p>
                            <p>
                                My goal is to give people a lifetime experience that they can enjoy by themselves, with family, friends or with someone special.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
