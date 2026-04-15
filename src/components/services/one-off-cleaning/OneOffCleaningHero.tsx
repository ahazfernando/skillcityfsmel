"use client";

import { motion } from "framer-motion";
import { CalendarClock, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** One-off cleaning — single deep cleans and event turnaround. */
export function OneOffCleaningHero() {
    return (
        <section className="pt-40 pb-24 text-center px-4 relative overflow-hidden bg-lime-50">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-lime-200/50 rounded-[100%] blur-[120px] -z-10" />
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl mx-auto space-y-8 relative z-10"
            >
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-lime-900 text-lime-100 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-lime-900/20">
                    <CalendarClock className="w-5 h-5" />
                    One-Off Cleaning
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter">
                    Single deep cleans &amp;
                    <br />
                    <span className="text-lime-600">special-event turnaround</span>
                </h1>
                <p className="text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                    Pre-inspection prep, post-event reset, or an intensive spring clean—we arrive equipped and leave the space transformed.
                </p>
                <div className="pt-8 mb-16">
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full px-12 py-5 text-xl font-bold transition-transform hover:scale-105 shadow-xl shadow-lime-600/30 gap-3"
                    >
                        <PhoneCall className="w-6 h-6" /> Book a one-off clean
                    </Link>
                </div>
                <div className="relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white max-w-5xl mx-auto">
                    <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Intensive one-off clean" fill className="object-cover" />
                </div>
            </motion.div>
        </section>
    );
}
