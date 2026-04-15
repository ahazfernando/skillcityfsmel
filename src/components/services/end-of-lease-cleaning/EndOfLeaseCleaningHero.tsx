"use client";

import { motion } from "framer-motion";
import { Key, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** End of lease — property transitions. */
export function EndOfLeaseCleaningHero() {
    return (
        <section className="pt-32 pb-20 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="bg-lime-50 rounded-[3rem] p-10 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-16 items-center border border-lime-100 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-white rounded-full blur-[80px] -translate-y-1/2 -z-0 opacity-60" />
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-lime-700 font-bold text-sm shadow-sm">
                            <Key className="w-4 h-4" />
                            End of Lease Cleaning
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                            Comprehensive cleaning for <span className="text-lime-600">property transitions</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                            Bond-focused detail for tenants and landlords—kitchens, baths, floors, and fixtures inspection-ready.
                        </p>
                        <Link
                            href="/contact-us"
                            className="inline-flex items-center justify-center bg-gray-900 hover:bg-lime-600 text-white rounded-2xl px-8 py-4 text-lg font-medium transition-colors gap-2 w-fit"
                        >
                            Secure Your Bond <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10"
                    >
                        <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                            <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="End of lease property cleaning" fill className="object-cover" />
                            <div className="absolute -left-6 -bottom-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                                <ShieldCheck className="w-10 h-10 text-lime-500" />
                                <div>
                                    <p className="font-bold text-gray-900">Inspection-ready</p>
                                    <p className="text-sm text-gray-500">Structured checklist</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
