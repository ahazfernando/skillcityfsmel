"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

/** Medical / healthcare cleaning, clinical grade, meeting health standards. */
export function MedicalCleaningHero() {
    return (
        <section className="pt-32 pb-20 relative border-b border-lime-100 bg-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-50 via-white to-white -z-10" />
            <div className="container mx-auto px-4 text-center max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-lime-100 rounded-2xl flex items-center justify-center mx-auto mb-8 text-lime-600 shadow-sm"
                >
                    <Activity className="w-10 h-10" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
                >
                    Medical / Healthcare Cleaning
                    <br />
                    <span className="text-lime-600">Clinical-grade care</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl text-gray-600 mb-10 leading-relaxed font-light max-w-2xl mx-auto"
                >
                    Clinical grade cleaning meeting health standards. Hospitals, clinics, and labs demand rigorous infection control: we deliver with trained teams
                    and approved protocols.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                    <Link
                        href="/contact-us"
                        className="inline-flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-lg px-8 py-4 text-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1 gap-2"
                    >
                        Request Clinical Cleaning <ArrowRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
