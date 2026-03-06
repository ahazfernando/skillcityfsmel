"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Image from "next/image";

export function CouncilCleaningAbout() {
    return (
        <div className="bg-white">

            {/* Zig-Zag Content Sections */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-12 h-12 bg-[#e5f7ed] rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-[#00b050]" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Tailored Council Solutions</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We provide tailored cleaning solutions designed specifically for government, council, and community-operated venues, ensuring they remain safe, hygienic, and presentable for all visitors. From local town halls to recreational centres.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-[2rem] bg-gray-100 overflow-hidden"
                        >
                            {/* Abstract placeholder for another image, fallback to primary if not provided */}
                            <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Council Cleaning" fill className="object-cover opacity-90 saturate-50" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CouncilCleaningAbout;
