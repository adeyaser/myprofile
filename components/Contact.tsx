"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <footer id="contact" className="relative py-32 px-6 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let's Work <span className="text-primary">Together</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
                        Have a project in mind? I'm always interested in working on new and exciting ideas.
                        Let's turn your vision into reality.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Mail size={24} />
                            </div>
                            <span className="text-zinc-300">hello@example.com</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <Phone size={24} />
                            </div>
                            <span className="text-zinc-300">+1 (555) 123-4567</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <MapPin size={24} />
                            </div>
                            <span className="text-zinc-300">San Francisco, CA</span>
                        </div>
                    </div>

                    <a
                        href="mailto:hello@example.com"
                        className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold text-lg rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
                    >
                        Say Hello
                    </a>
                </motion.div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-sm">
                    <p>© 2024 MyProfile. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                        <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-primary transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
