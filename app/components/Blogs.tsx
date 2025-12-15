"use client";
import React, { useRef, useState, useEffect } from "react";
import { blogs } from "../data/blogs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export default function Blogs() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [activePage, setActivePage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    // Update active index on scroll and calculate pages
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const updatePagination = () => {
            const itemWidth = container.children[0]?.clientWidth || 300;
            const gap = 24;
            const containerWidth = container.clientWidth;
            // Calculate how many items fit
            const itemsPerPage = Math.floor((containerWidth + gap) / (itemWidth + gap)) || 1;
            setTotalPages(Math.ceil(blogs.length / itemsPerPage));
        }

        const handleScroll = () => {
            const containerWidth = container.clientWidth;
            const scrollLeft = container.scrollLeft;
            // Active page is rough scroll / width
            const page = Math.round(scrollLeft / containerWidth);
            setActivePage(page);
        };

        // Init
        updatePagination();
        window.addEventListener('resize', updatePagination);
        container.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('resize', updatePagination);
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.clientWidth;
            const scrollAmount = containerWidth;

            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const scrollToPage = (index: number) => {
        if (scrollContainerRef.current) {
            const containerWidth = scrollContainerRef.current.clientWidth;
            const newScrollLeft = index * containerWidth;
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="blogs" className="w-full bg-background py-24 px-4 text-foreground overflow-hidden">
            <div className="mx-auto max-w-7xl mb-12">
                <div className="space-y-4 text-center">
                    <h2 className="text-4xl font-bold md:text-6xl">A Few Thoughts</h2>
                </div>
            </div>

            <div className="relative mx-auto max-w-7xl group/carousel">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar px-4 md:px-0"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {blogs.map((blog, index) => (
                        <Link
                            href={blog.link}
                            key={index}
                            className="flex-none w-[280px] md:w-[300px] aspect-[4/5] relative group rounded-2xl overflow-hidden snap-center border border-zinc-800"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg">
                                    {blog.category}
                                </span>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                                    {blog.title}
                                </h3>
                                <p className="text-xs text-zinc-300 line-clamp-2">
                                    {blog.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Controls: Dots Center, Arrows Right */}
            <div className="mx-auto max-w-7xl mt-4 relative flex items-center justify-center px-4 md:px-0">
                {/* Dots (Centered via flex default or absolute) */}
                <div className="flex gap-3">
                    {Array.from({ length: totalPages }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToPage(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${activePage === idx ? "w-8 bg-zinc-100" : "w-2 bg-zinc-700 hover:bg-zinc-500"
                                }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Arrows (Right) */}
                <div className="absolute right-0 flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700 group"
                        aria-label="Scroll left"
                    >
                        <ArrowLeft className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-3 rounded-full bg-zinc-800 hover:bg-zinc-700 transition-colors border border-zinc-700 group"
                        aria-label="Scroll right"
                    >
                        <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                    </button>
                </div>
            </div>
        </section>
    );
}
