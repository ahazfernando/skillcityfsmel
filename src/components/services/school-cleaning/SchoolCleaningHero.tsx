"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function SchoolCleaningHero() {
    return (
        <section className="pt-32 pb-24 overflow-hidden relative bg-[#f8f9fa]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-5/12 order-2 lg:order-1 relative"
                    >
                        <div className="h-[500px] lg:h-[700px] rounded-[3rem] overflow-hidden relative shadow-2xl z-10">
                            <Image
                                src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                alt="School Cleaning Services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#00b050] rounded-full blur-3xl opacity-30 -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-7/12 order-1 lg:order-2 space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-bold text-sm tracking-wide">
                            <GraduationCap className="w-4 h-4 text-[#00b050]" />
                            Educational Facilities
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-gray-950 leading-[1.1]">
                            Healthy Spaces for <span className="text-[#00b050] relative inline-block"><span className="relative z-10">Brighter Minds</span></span>
                        </h1>
                        <p className="text-xl text-gray-900/70 leading-relaxed max-w-xl font-medium">
                            Safe and hygienic environments for students. A clean school environment plays a vital role in supporting student wellbeing. We help prevent the spread of illness and ensure a safe space for students, teachers, and staff.
                        </p>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Link href="/contact-us" className="inline-flex items-center justify-center bg-[#00b050] hover:bg-[#009b46] text-white rounded-full px-8 py-4 text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-[#00b050]/20 gap-2">
                                Request a School Audit <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default SchoolCleaningHero;
