"use client";

import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Gym cleaning, dedicated hero (no props). Tagline: sanitizing workout equipment and facilities. */
export function GymCleaningHero() {
    return (
        <section className="pt-32 pb-24 relative overflow-hidden bg-gray-50">
            <div className="absolute top-0 right-0 w-[120%] h-full bg-white -skew-y-6 origin-top-right -z-10" />
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 space-y-8 lg:pr-10"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-600 font-bold text-sm uppercase tracking-widest">
                            <Zap className="w-4 h-4" />
                            Gym Cleaning
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-gray-900">
                            Sweat.
                            <br />
                            Clean.
                            <br />
                            <span className="text-lime-500 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">
                                Repeat.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium max-w-xl">
                            Sanitizing workout equipment and facilities. We keep mats, machines, and change rooms hygienic so members can train with confidence.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-400 text-white rounded-none px-10 py-5 text-xl font-black uppercase tracking-widest transition-transform hover:scale-105 skew-x-[-10deg]"
                        >
                            <span className="skew-x-[10deg] flex items-center gap-2">
                                Book a Clean <ArrowRight className="w-6 h-6" />
                            </span>
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] skew-x-[-10deg] overflow-hidden border-4 border-gray-200"
                    >
                        <Image
                            src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                            alt="Gym floor and equipment cleaning"
                            fill
                            className="object-cover skew-x-[10deg] scale-125 opacity-70 contrast-125 saturate-50 mix-blend-multiply"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 to-transparent mix-blend-overlay" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
