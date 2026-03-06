"use client";

import { motion } from "framer-motion";
import { ArrowRight, Baby } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EarlyChildhoodHero() {
    return (
        <section className="relative pt-40 pb-32 bg-[#f8f9fa]">
            <div className="absolute inset-0 h-[600px] w-full">
                <Image
                    src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                    alt="Childcare Cleaning"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gray-900/30" />
            </div>

            <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/95 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-2xl max-w-3xl border border-white/20"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#e5f7ed] rounded-full text-[#00b050] font-bold text-xs uppercase tracking-wider mb-6">
                        <Baby className="w-4 h-4" />
                        Childcare & Kindergartens
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Gentle on Kids, <br />
                        <span className="text-[#00b050]">Tough on Germs.</span>
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                        Gentle, non-toxic cleaning for childcare centers. Children's immune systems are still developing. We use eco-friendly agents that are tough on bacteria but completely safe for staff and little ones.
                    </p>
                    <Link href="/contact-us" className="inline-flex items-center justify-center bg-[#00b050] hover:bg-[#009b46] text-white rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105 shadow-xl shadow-[#00b050]/20 gap-2">
                        Secure Your Clean <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export default EarlyChildhoodHero;
