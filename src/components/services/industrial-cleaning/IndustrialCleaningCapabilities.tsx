"use client";

import { motion } from "framer-motion";
import { Factory, ShieldAlert, Key, HardHat } from "lucide-react";

export function IndustrialCleaningCapabilities() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight border-b-4 border-lime-500 inline-block pb-2">Capabilities</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-none border-2 border-gray-200 hover:border-lime-500 transition-colors group flex flex-col h-full"
                    >
                        <Factory className="w-10 h-10 text-gray-400 group-hover:text-lime-500 transition-colors mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">Machinery Degreasing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium mt-auto">
                            Removing tough grime and build-up to maintain optimal operational performance.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-none border-2 border-gray-200 hover:border-lime-500 transition-colors group flex flex-col h-full"
                    >
                        <ShieldAlert className="w-10 h-10 text-gray-400 group-hover:text-lime-500 transition-colors mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">Spill Response</h3>
                        <p className="text-gray-600 leading-relaxed font-medium mt-auto">
                            Rapid and compliant cleaning for hazardous or disruptive spills.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-none border-2 border-gray-200 hover:border-lime-500 transition-colors group flex flex-col h-full"
                    >
                        <Key className="w-10 h-10 text-gray-400 group-hover:text-lime-500 transition-colors mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">High-Level Cleaning</h3>
                        <p className="text-gray-600 leading-relaxed font-medium mt-auto">
                            Safe cleaning of ceilings, rafters, and hard-to-reach industrial areas.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-none border-2 border-gray-200 hover:border-lime-500 transition-colors group flex flex-col h-full"
                    >
                        <HardHat className="w-10 h-10 text-gray-400 group-hover:text-lime-500 transition-colors mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">Floor Scrubbing</h3>
                        <p className="text-gray-600 leading-relaxed font-medium mt-auto">
                            Heavy-duty ride-on scrubbing for massive concrete footprints.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
