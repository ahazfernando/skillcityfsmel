"use client";

import { motion } from "framer-motion";

export function EarlyChildhoodProtectedAreas() {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden relative">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Areas We Protect</h2>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {[
                        "High-touch play areas & toys",
                        "Sleep & nap areas",
                        "Nappy-change stations",
                        "Residue-free floors",
                        "Food preparation zones",
                        "Outdoor equipment"
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="bg-white px-6 py-4 rounded-full shadow-sm border border-gray-100 font-medium text-gray-700 hover:text-[#00b050] transition-colors cursor-default hover:border-green-200"
                        >
                            {feature}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EarlyChildhoodProtectedAreas;
