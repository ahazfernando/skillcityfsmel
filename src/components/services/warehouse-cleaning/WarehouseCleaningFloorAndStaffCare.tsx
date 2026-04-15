"use client";

import { motion } from "framer-motion";
import { Pickaxe, Sparkles } from "lucide-react";

export function WarehouseCleaningFloorAndStaffCare() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4 max-w-5xl space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-8 border border-gray-200"
                >
                    <div className="w-20 h-20 bg-lime-50 rounded-full flex items-center justify-center shrink-0">
                        <Pickaxe className="w-10 h-10 text-lime-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Hard Floor Scrubbing &amp; Sweeping</h3>
                        <p className="text-gray-600 text-lg">
                            Industrial sweepers and ride-on scrubbers for dust, debris, and tyre marks—safer concrete for forklifts and foot traffic.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-8 border border-gray-200"
                >
                    <div className="w-20 h-20 bg-lime-50 rounded-full flex items-center justify-center shrink-0">
                        <Sparkles className="w-10 h-10 text-lime-500" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Staff Facilities &amp; Racking</h3>
                        <p className="text-gray-600 text-lg">
                            Break rooms, washrooms, lockers, plus high-level dusting of racking and storage systems.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
