"use client";

import { motion } from "framer-motion";
import { Utensils, CheckSquare } from "lucide-react";

export function RestaurantCleaningKitchenStandards() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <Utensils className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-lime-200 inline-block pb-2">Culinary cleaning checklist</h2>
                </div>
                <div className="bg-lime-50 rounded-[2rem] p-8 md:p-12 shadow-inner border border-lime-100">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">
                                Deep cleaning and degreasing of commercial ovens, fryers, and grills
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.05 }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">Canopy, exhaust, and range hood filter cleaning</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">
                                Sanitisation of food preparation surfaces and stainless steel benches
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">Dining area cleaning: tables, chairs, and floors</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">Restroom deep cleaning for patrons</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25 }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">Hard floor scrubbing for grease and food spills</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                        >
                            <CheckSquare className="w-6 h-6 text-lime-500 shrink-0 mt-1" />
                            <p className="text-lg text-gray-700 font-medium">Cool room and dry storage cleaning</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
