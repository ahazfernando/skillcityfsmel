"use client";

import { motion } from "framer-motion";
import { ChefHat, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Restaurant & kitchen — deep cleaning for food service. */
export function RestaurantCleaningHero() {
    return (
        <section className="pt-40 pb-20 border-b border-lime-100 relative overflow-hidden bg-[#fffdfa]">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lime-50 to-transparent pointer-events-none" />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] rounded-t-full rounded-b-2xl overflow-hidden shadow-2xl border-8 border-white"
                    >
                        <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Commercial kitchen cleaning" fill className="object-cover" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 lg:pl-10"
                    >
                        <ChefHat className="w-16 h-16 text-lime-500 mb-2" />
                        <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-4 font-serif">
                            Restaurant &amp; Kitchen Cleaning
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            Deep cleaning for food service environments—front-of-house polish and back-of-house compliance.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            We help keep your kitchen compliant and your dining area immaculate.
                        </p>
                        <div className="pt-8">
                            <Link
                                href="/contact-us"
                                className="inline-flex items-center gap-2 text-lime-600 font-bold text-lg hover:text-lime-700 hover:gap-3 transition-all"
                            >
                                Book a Consultation <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
