"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-30" />
            <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] -z-10 opacity-20" />

            <div className="max-w-7xl mx-auto px-6 text-center z-10 flex flex-col items-center gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wider uppercase backdrop-blur-md">
                        Available for Work
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
                >
                    Building <span className="text-gradient-green">Digital</span> <br />
                    Experiences
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-xl md:text-2xl text-zinc-400 max-w-2xl text-center leading-relaxed"
                >
                    I craft elegant, high-performance web applications with a focus on user experience and modern design.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex gap-4"
                >
                    <a
                        href="#projects"
                        className="flex items-center gap-2 px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-primary/90 transition-all hover:scale-105"
                    >
                        View Projects <ArrowRight size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-white font-semibold text-lg rounded-full hover:bg-zinc-800 transition-all hover:scale-105"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
