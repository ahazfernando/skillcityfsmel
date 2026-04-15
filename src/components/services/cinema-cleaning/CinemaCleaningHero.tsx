"use client";

import { motion } from "framer-motion";
import { Film, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Cinema & theater — between sessions and events. */
export function CinemaCleaningHero() {
    return (
        <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh] bg-gray-900">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-[#0f0c1b]/80 to-transparent" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent" />
            <div className="absolute inset-0 w-full h-full opacity-40">
                <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Theater auditorium" fill className="object-cover" />
            </div>
            <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut" }}>
                    <Film className="w-16 h-16 text-lime-400 mx-auto mb-8 opacity-80" />
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-2xl">
                        Cinema &amp; Theater Cleaning
                    </h1>
                    <p className="text-xl md:text-2xl text-lime-100/90 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                        Thorough cleaning between sessions and events—foyers, auditoriums, and high-traffic washrooms.
                    </p>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center gap-2 border-b border-lime-400 pb-1 text-lime-400 uppercase tracking-widest text-sm font-bold hover:text-white hover:border-white transition-colors"
                    >
                        Book the premiere clean <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
