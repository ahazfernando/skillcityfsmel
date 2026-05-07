"use client";

import { motion } from "framer-motion";
import { Box } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Warehouse & factory, large-scale storage and production. */
export function WarehouseCleaningHero() {
    return (
        <section className="pt-32 pb-12 bg-gray-100">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-gray-900 text-white"
                    >
                        <Box className="w-12 h-12 text-lime-400 mb-8" />
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                            Warehouse &amp; Factory Cleaning
                            <br />
                            <span className="text-lime-400">Large-scale. Detail-driven.</span>
                        </h1>
                        <p className="text-lg text-gray-400 mb-10 max-w-xl leading-relaxed">
                            Large-scale cleaning for storage and production: minimise downtime, protect workers, and keep docks and racking presentable.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center px-6 py-3 bg-lime-500 hover:bg-lime-600 rounded text-white font-bold tracking-wide transition-colors w-fit"
                        >
                            Get an Estimate
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px]"
                    >
                        <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Warehouse loading bay cleaning" fill className="object-cover" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
