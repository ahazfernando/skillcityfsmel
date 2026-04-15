"use client";

import { motion } from "framer-motion";
import { Dumbbell, Droplets, ShieldCheck } from "lucide-react";

/** Gym — three fixed focus areas (no data props). */
export function GymCleaningSanitisationFocus() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0 }}
                        className="bg-white p-10 border border-gray-200 hover:border-lime-500 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-colors -translate-y-1/2 translate-x-1/2" />
                        <Dumbbell className="w-12 h-12 text-gray-500 group-hover:text-lime-500 mb-6 transition-colors relative z-10" />
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 relative z-10">
                            Equipment Sanitisation
                        </h3>
                        <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                            Wiping down and disinfecting all weights, machines, and cardio equipment.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-10 border border-gray-200 hover:border-lime-500 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-colors -translate-y-1/2 translate-x-1/2" />
                        <Droplets className="w-12 h-12 text-gray-500 group-hover:text-lime-500 mb-6 transition-colors relative z-10" />
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 relative z-10">
                            Change Rooms
                        </h3>
                        <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                            Deep cleaning of locker rooms, showers, and saunas to prevent bacteria buildup.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-10 border border-gray-200 hover:border-lime-500 transition-colors group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-colors -translate-y-1/2 translate-x-1/2" />
                        <ShieldCheck className="w-12 h-12 text-gray-500 group-hover:text-lime-500 mb-6 transition-colors relative z-10" />
                        <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 relative z-10">
                            Mat & Floor Care
                        </h3>
                        <p className="text-gray-600 font-medium leading-relaxed relative z-10">
                            Sanitising yoga mats, rubber gym flooring, and hardwood studio floors.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
