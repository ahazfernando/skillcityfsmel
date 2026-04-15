"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Aged care — rigorous sanitization for aged care facilities. */
export function AgedCareCleaningHero() {
    return (
        <section className="pt-40 pb-24 overflow-hidden relative bg-[#fff9f9]">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 rounded-full text-lime-800 font-medium text-sm">
                            <Heart className="w-4 h-4" />
                            Aged Care Cleaning
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                            Rigorous sanitization for <span className="text-lime-500 font-serif italic">aged care facilities</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Clean surroundings reduce infection risk and support residents&apos; dignity and comfort—delivered by respectful, trained teams.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-gray-900 hover:bg-lime-600 text-white rounded-2xl px-8 py-4 text-lg font-medium transition-colors gap-2 w-fit"
                        >
                            Discuss your needs <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative grid grid-cols-2 gap-4 h-[600px]"
                    >
                        <div className="space-y-4 pt-12">
                            <div className="relative h-[250px] rounded-[2rem] overflow-hidden shadow-lg">
                                <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Aged care common area" fill className="object-cover" />
                            </div>
                            <div className="relative h-[300px] rounded-[2rem] overflow-hidden shadow-lg">
                                <div className="absolute inset-0 bg-lime-200" />
                                <Image
                                    src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                    alt="Aged care corridor"
                                    fill
                                    className="object-cover mix-blend-multiply opacity-50"
                                />
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="relative h-[350px] rounded-[2rem] overflow-hidden shadow-lg">
                                <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Aged care dining" fill className="object-cover" />
                            </div>
                            <div className="bg-white p-8 rounded-[2rem] shadow-lg flex flex-col justify-center h-[200px]">
                                <Heart className="w-10 h-10 text-lime-500 mb-4" aria-hidden />
                                <p className="font-bold text-gray-900 text-lg">Infection control excellence</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
