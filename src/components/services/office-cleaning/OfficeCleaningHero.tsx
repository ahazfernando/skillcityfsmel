"use client";

import { motion } from "framer-motion";
import { Building, ArrowRight } from "lucide-react";
import Link from "next/link";

/** Office cleaning — professional workspace sanitization. */
export function OfficeCleaningHero() {
    return (
        <section className="pt-40 pb-24 bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />
            <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <Building className="w-16 h-16 text-lime-400 mx-auto mb-6" />
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        Office Cleaning
                        <br />
                        <span className="text-lime-400">Professional workspace sanitization</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                        From boutique studios to multi-level HQs—after-hours schedules, vetted staff, and consistent desk-to-kitchen standards.
                    </p>
                    <div className="pt-8">
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-600 text-white rounded-lg px-8 py-4 text-lg font-bold transition-all hover:-translate-y-1 shadow-xl shadow-lime-500/20 gap-2"
                        >
                            Get Corporate Pricing <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
