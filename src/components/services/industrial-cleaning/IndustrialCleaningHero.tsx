"use client";

import { motion } from "framer-motion";
import { Factory, HardHat, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Industrial cleaning, heavy-duty sites. */
export function IndustrialCleaningHero() {
    return (
        <section className="pt-32 pb-16 px-4 bg-gray-50 min-h-0">
            <div className="container mx-auto max-w-7xl">
                <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                        <div className="absolute top-[-20%] right-[-10%] w-1/2 h-[150%] bg-lime-500 transform rotate-12" />
                    </div>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-lime-500 font-bold uppercase tracking-widest text-xs">
                                <Factory className="w-4 h-4" />
                                Industrial Cleaning
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight leading-[1]">
                                Heavy-duty cleaning
                                <br />
                                <span className="text-lime-500">for industrial sites</span>
                            </h1>
                            <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                                Heavy-duty cleaning for industrial sites: degreasing, high-level dusting, spill response, and safe floor programs across Victoria.
                            </p>
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-400 text-gray-900 rounded-lg px-8 py-4 text-lg font-bold transition-transform hover:-translate-y-1 group"
                            >
                                Deploy Our Team{" "}
                                <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
                        >
                            <Image
                                src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                alt="Industrial facility cleaning"
                                fill
                                className="object-cover saturate-0 opacity-80 mix-blend-luminosity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                            <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                <div className="w-12 h-12 bg-lime-500 flex items-center justify-center rounded-lg text-gray-900 shadow-lg">
                                    <HardHat className="w-6 h-6" />
                                </div>
                                <p className="text-white font-bold uppercase tracking-wide">
                                    Safety
                                    <br />
                                    First Protocol
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
