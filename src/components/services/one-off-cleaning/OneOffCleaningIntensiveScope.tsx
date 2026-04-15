"use client";

import { motion } from "framer-motion";
import { Brush, Sparkles } from "lucide-react";

export function OneOffCleaningIntensiveScope() {
    return (
        <section className="py-24 bg-white rounded-t-[4rem] relative z-20 border-t border-lime-100 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16">
                    <Brush className="w-12 h-12 text-lime-300 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Intensive cleaning protocol</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                    >
                        <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-200 mb-6 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">Top-to-bottom dusting</h3>
                        <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">
                            Every surface wiped—no cobweb left behind.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                    >
                        <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-200 mb-6 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">Floor restoration</h3>
                        <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">
                            Deep vacuum, mop, and carpet attention where needed.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                    >
                        <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-200 mb-6 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">Kitchen degreasing</h3>
                        <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">
                            Intensive degrease and appliance exteriors.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                    >
                        <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-200 mb-6 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">Bathroom scrubbing</h3>
                        <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">
                            Full sanitisation and lime-scale attention.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                    >
                        <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-200 mb-6 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">Windows &amp; glass</h3>
                        <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">
                            Interior glass and sills for a clear finish.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                    >
                        <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-200 mb-6 transition-colors" />
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">Rapid response crew</h3>
                        <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">
                            Commercial-grade products and equipment on arrival.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
