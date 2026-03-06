"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CouncilCleaningHero() {
    return (
        <section className="relative pt-40 pb-32 text-center px-4 overflow-hidden bg-gray-50">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#e5f7ed] rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#e5f7ed] rounded-full blur-3xl opacity-50" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto relative z-10"
            >
                <span className="text-[#00b050] font-semibold tracking-wider uppercase text-sm mb-4 block">
                    Community & Public Spaces
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-serif">
                    Pristine Environments for the <span className="text-[#00b050] italic font-medium">Public</span>
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Specialized cleaning for public and community facilities. Public spaces see immense foot traffic every day, making a pristine environment essential to community health and civic pride.
                </p>
                <Link href="/contact-us" className="inline-flex items-center justify-center bg-[#00b050] hover:bg-[#009b46] text-white rounded-full px-10 py-4 text-lg font-medium transition-all hover:scale-105 shadow-[#00b050]/20 shadow-xl">
                    Schedule a Walkthrough
                </Link>
            </motion.div>
        </section>
    );
}

export default CouncilCleaningHero;
