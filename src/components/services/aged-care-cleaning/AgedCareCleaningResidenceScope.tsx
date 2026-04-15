"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function AgedCareCleaningResidenceScope() {
    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our specialised aged care scope</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Nursing homes, retirement villages, assisted living, and residential care centres across Melbourne and Victoria.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-y-12 gap-x-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-5 h-5 text-lime-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-snug">Resident rooms and living spaces</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-start gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-5 h-5 text-lime-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-snug">Communal areas and dining halls</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-start gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-5 h-5 text-lime-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-snug">Bathrooms and shared washrooms</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex items-start gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-5 h-5 text-lime-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-snug">High-touch surface sanitisation</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-start gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-5 h-5 text-lime-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-snug">Waste collection and disposal</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex items-start gap-4"
                    >
                        <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                            <Check className="w-5 h-5 text-lime-600" />
                        </div>
                        <p className="text-xl font-medium text-gray-900 leading-snug">Tailored infection control procedures</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
