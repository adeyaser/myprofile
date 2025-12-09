"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS",
    "Node.js", "PostgreSQL", "Framer Motion", "UI/UX Design"
];

export default function About() {
    return (
        <section id="about" className="py-32 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-primary blur-[80px] opacity-20" />
                        <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="About Me"
                            className="relative rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10 w-full h-auto object-cover"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                        I am a passionate Full Stack Developer based in the cloud. With years of experience in building scalable web applications,
                        I focus on creating clean, efficient, and user-friendly digital solutions. My goal is to bridge the gap between complex
                        functionality and elegant design.
                    </p>

                    <div className="grid grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <div key={index} className="flex items-center gap-2 text-zinc-300">
                                <CheckCircle2 className="text-primary" size={20} />
                                <span>{skill}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
