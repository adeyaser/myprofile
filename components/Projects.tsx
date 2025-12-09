"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "E-Commerce Dashboard",
        description: "A comprehensive dashboard for managing online stores, featuring real-time analytics and inventory management.",
        tags: ["Next.js", "Tailwind", "Prisma"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#",
        github: "#"
    },
    {
        title: "Task Management App",
        description: "A collaborative task manager with drag-and-drop functionality and team workspaces.",
        tags: ["React", "Redux", "Firebase"],
        image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#",
        github: "#"
    },
    {
        title: "AI Image Generator",
        description: "An application that uses stable diffusion to generate unique images from text descriptions.",
        tags: ["Python", "FastAPI", "React"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        link: "#",
        github: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 bg-zinc-900/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-primary/50 transition-colors"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex gap-4">
                                    <a href={project.github} className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href={project.link} className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
