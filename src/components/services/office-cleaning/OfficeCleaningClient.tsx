'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Building, CheckCircle2, BriefcaseBusiness, Coffee } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function OfficeCleaningClient() {
    return (
        <main className="bg-gray-100 min-h-screen">
            {/* Corporate Structured Hero */}
            <section className="pt-40 pb-24 bg-gray-900 text-white relative overflow-hidden">
                {/* Clean, geometric grid background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

                <div className="container mx-auto px-4 max-w-5xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <Building className="w-16 h-16 text-lime-400 mx-auto mb-6" />
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                            A Pristine Office is a <br />
                            <span className="text-lime-400">Productive Office.</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
                            From boutique agencies to multi-level corporate headquarters, a spotless workspace reduces sick days, boosts employee morale, and leaves a lasting positive impression.
                        </p>
                        <div className="pt-8">
                            <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-600 text-white rounded-lg px-8 py-4 text-lg font-bold transition-all hover:-translate-y-1 shadow-xl shadow-lime-500/20 gap-2">
                                Get Corporate Pricing <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Structured Grid Layout for corporate feel */}
            <section className="py-24 max-w-7xl mx-auto px-4 relative -mt-16 z-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Image Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl lg:col-span-2 group"
                    >
                        <Image
                            src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                            alt="Office Cleaning"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 text-white max-w-md">
                            <h3 className="text-2xl font-bold mb-2">Flexible Scheduling</h3>
                            <p className="text-gray-300">After-hours and weekend cleaning ensuring zero disruption to your team.</p>
                        </div>
                    </motion.div>

                    {/* Vetted Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-white p-10 rounded-2xl shadow-xl flex flex-col justify-center border border-gray-200"
                    >
                        <BriefcaseBusiness className="w-12 h-12 text-lime-500 mb-6" />
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Fully Vetted Staff</h3>
                        <p className="text-gray-600 leading-relaxed font-medium">
                            Our staff are fully vetted, insured, and trained in modern security and access protocols, giving you complete peace of mind.
                        </p>
                    </motion.div>

                    {/* Task List items */}
                    {[
                        { title: "Floor Care", desc: "Vacuuming, sweeping, and mopping of all open areas and corridors." },
                        { title: "Desk Detailing", desc: "Workstation and meeting room dusting and comprehensive surface wiping." },
                        { title: "Breakroom Hygiene", desc: "Kitchen cleaning, including microwaves and refrigerators." },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-lime-300 transition-colors group"
                        >
                            <div className="flex items-start gap-4">
                                <CheckCircle2 className="w-8 h-8 text-lime-200 group-hover:text-lime-500 transition-colors shrink-0" />
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </main>
    );
}
