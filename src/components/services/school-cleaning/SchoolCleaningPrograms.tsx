"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

/** School cleaning programs, each block is explicit (no config array). */
export function SchoolCleaningPrograms() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <BookOpen className="w-12 h-12 text-[#00b050] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-950 mb-6">School Cleaning</h2>
                    <p className="text-lg text-gray-900/60 leading-relaxed font-medium">
                        Safe and hygienic environments for students. Consistent quality for classrooms, restrooms, labs, and shared spaces.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all"
                    >
                        <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                        <h3 className="text-xl font-bold text-gray-950 mb-3">Daily classroom cleaning</h3>
                        <p className="text-gray-900/70 font-medium leading-relaxed">Staff rooms, libraries, and administration areas.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all md:-translate-y-8 lg:-translate-y-12"
                    >
                        <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                        <h3 className="text-xl font-bold text-gray-950 mb-3">Restroom sanitisation</h3>
                        <p className="text-gray-900/70 font-medium leading-relaxed">Thorough sanitisation and high-touch surface care.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all"
                    >
                        <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                        <h3 className="text-xl font-bold text-gray-950 mb-3">Floor maintenance</h3>
                        <p className="text-gray-900/70 font-medium leading-relaxed">Vacuuming and mopping across all floor areas.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all"
                    >
                        <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                        <h3 className="text-xl font-bold text-gray-950 mb-3">Specialist learning areas</h3>
                        <p className="text-gray-900/70 font-medium leading-relaxed">Labs, IT suites, art studios, and practical rooms.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all md:-translate-y-8 lg:-translate-y-12"
                    >
                        <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                        <h3 className="text-xl font-bold text-gray-950 mb-3">Canteen services</h3>
                        <p className="text-gray-900/70 font-medium leading-relaxed">Canteen and food-prep zone cleaning.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all"
                    >
                        <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                        <h3 className="text-xl font-bold text-gray-950 mb-3">Infection control</h3>
                        <p className="text-gray-900/70 font-medium leading-relaxed">Disinfection programs to reduce germ spread during term.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
