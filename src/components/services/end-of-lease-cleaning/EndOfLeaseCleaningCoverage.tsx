"use client";

import { motion } from "framer-motion";
import { Search, CheckCircle } from "lucide-react";

export function EndOfLeaseCleaningCoverage() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-16">
                    <Search className="w-12 h-12 text-lime-200 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Everything we cover</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Residential and commercial end-of-lease scope: nothing rushed, nothing guessed.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">Deep cleaning of kitchens including all surfaces</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">Bathroom sanitisation: showers, toilets, tiles</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">All floors: vacuum, mop, stain attention</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">Interior windows, tracks, and frames</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">Skirting, doors, switches, and dusting</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">Wardrobes, cupboards, and drawers inside/out</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors md:col-span-2"
                    >
                        <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                        <span className="text-lg text-gray-800 font-medium">Cobweb removal and surface dust throughout</span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
