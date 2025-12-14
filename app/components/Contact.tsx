"use client";
import React from "react";
import { Copy } from "lucide-react";

export default function Contact() {
    const email = "gssrinidhi2002@gmail.com";

    const copyToClipboard = () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(email).then(() => {
                alert("Email copied to clipboard!");
            }).catch(err => {
                console.error("Failed to copy using Clipboard API", err);
                fallbackCopyTextToClipboard(email);
            });
        } else {
            fallbackCopyTextToClipboard(email);
        }
    };

    const fallbackCopyTextToClipboard = (text: string) => {
        const textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            const successful = document.execCommand('copy');
            if (successful) {
                alert("Email copied to clipboard!");
            } else {
                alert("Failed to copy email.");
            }
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
            alert("Failed to copy email.");
        }

        document.body.removeChild(textArea);
    };

    return (
        <section id="contact" className="w-full bg-background py-24 px-4 text-foreground">
            <div className="mx-auto max-w-5xl space-y-8">
                <h2 className="text-5xl font-bold">Get In Touch</h2>
                <p className="max-w-xl text-zinc-400">
                    Interested in working together? Have a question? Feel free to reach out. I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <div className="relative mt-12 flex w-full flex-col overflow-hidden rounded-2xl bg-zinc-900 p-8 sm:p-12">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold break-all md:break-normal">{email}</h3>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={copyToClipboard}
                                    className="rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-xs md:px-6 md:py-3 md:text-sm transition-colors hover:bg-zinc-700"
                                >
                                    Copy Email
                                </button>
                                <a
                                    href={`mailto:${email}`}
                                    className="rounded-full px-4 py-2 text-xs font-semibold text-white md:px-6 md:py-3 md:text-sm transition-opacity hover:opacity-90"
                                    style={{ backgroundColor: 'var(--primary)' }}
                                >
                                    Send Mail
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a href="https://www.linkedin.com/in/srinidhi-gs-47a348200/" className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm hover:bg-zinc-800 text-center">LinkedIn</a>
                            <a href="https://www.behance.net/srinidhig/" className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm hover:bg-zinc-800 text-center">Behance</a>
                            <a href="/assets/Srinidhi_Resume.pdf" download="Srinidhi_Resume.pdf" className="rounded-full border border-zinc-700 px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm hover:bg-zinc-800 text-center">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
