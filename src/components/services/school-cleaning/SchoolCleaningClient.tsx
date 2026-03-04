'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Sparkles, GraduationCap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function SchoolCleaningClient() {
    return (
        <main className="bg-lime-50/30 min-h-screen">
            {/* Left Image / Right Text Hero */}
            <section className="pt-32 pb-24 overflow-hidden relative">
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
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-400 rounded-full blur-3xl opacity-30 -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-7/12 order-1 lg:order-2 space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-gray-800 font-bold text-sm tracking-wide">
                                <GraduationCap className="w-4 h-4" />
                                Educational Facilities
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-gray-950 leading-[1.1]">
                                Healthy Spaces for <span className="text-lime-500 relative inline-block"><span className="relative z-10">Brighter Minds</span><span className="absolute bottom-2 left-0 w-full h-4 bg-lime-200/60 -z-0 -rotate-2"></span></span>
                            </h1>
                            <p className="text-xl text-gray-900/70 leading-relaxed max-w-xl font-medium">
                                A clean school environment plays a vital role in supporting student wellbeing. We help prevent the spread of illness and ensure a safe space for students, teachers, and staff.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row gap-4">
                                <Link href="/contact-us" className="inline-flex items-center justify-center bg-gray-600 hover:bg-gray-700 text-white rounded-full px-8 py-4 text-lg font-bold transition-all hover:scale-105 shadow-xl shadow-gray-600/20 gap-2">
                                    Request a School Audit <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content & Staggered Cards */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <BookOpen className="w-12 h-12 text-gray-200 mx-auto mb-6" />
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-950 mb-6">Consistent Quality & Reliability</h2>
                        <p className="text-lg text-gray-900/60 leading-relaxed">
                            Our professional school cleaning services are explicitly designed to meet the rigorous demands of educational facilities, delivering consistent quality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                        {[
                            { title: "Daily Classroom Cleaning", desc: "Staff rooms, libraries, and administrative offices." },
                            { title: "Restroom Sanitisation", desc: "Thorough sanitisation of restrooms and high-touch surfaces." },
                            { title: "Floor Maintenance", desc: "Vacuuming and mopping of all floor areas." },
                            { title: "Specialist Learning Areas", desc: "Cleaning of laboratories, computer rooms, and art studios." },
                            { title: "Canteen Services", desc: "Canteen and kitchen cleaning services." },
                            { title: "Infection Control", desc: "Disinfection programs to minimise the spread of germs." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all cursor-default ${i === 1 || i === 4 ? 'md:-translate-y-8 lg:-translate-y-12' : ''}`}
                            >
                                <Sparkles className="w-8 h-8 text-lime-500 mb-6" />
                                <h3 className="text-xl font-bold text-gray-950 mb-3">{feature.title}</h3>
                                <p className="text-gray-900/70 font-medium leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
