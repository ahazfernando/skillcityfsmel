"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BriefcaseBusiness, CheckCircle2 } from "lucide-react";

export function OfficeCleaningFacilityLayout() {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4 relative -mt-16 z-20 bg-gray-100">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl lg:col-span-2 group"
                >
                    <Image
                        src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                        alt="Office cleaning Melbourne"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white max-w-md">
                        <h3 className="text-2xl font-bold mb-2">Flexible scheduling</h3>
                        <p className="text-gray-300">After-hours and weekend cleaning with minimal disruption.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-center border border-gray-200"
                >
                    <BriefcaseBusiness className="w-12 h-12 text-lime-500 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully vetted staff</h3>
                    <p className="text-gray-600 leading-relaxed font-medium">
                        Insured teams trained in access protocols: your floors and data stay protected.
                    </p>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-lime-300 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-8 h-8 text-lime-200 group-hover:text-lime-500 transition-colors shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Floor care</h3>
                            <p className="text-gray-600">Vacuuming, sweeping, and mopping corridors and open plan areas.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-lime-300 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-8 h-8 text-lime-200 group-hover:text-lime-500 transition-colors shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Desk detailing</h3>
                            <p className="text-gray-600">Workstations and meeting rooms: dust-free surfaces.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-lime-300 transition-colors group"
                >
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="w-8 h-8 text-lime-200 group-hover:text-lime-500 transition-colors shrink-0" />
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Breakroom hygiene</h3>
                            <p className="text-gray-600">Kitchens, microwaves, fridges, and tea points sanitised.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
