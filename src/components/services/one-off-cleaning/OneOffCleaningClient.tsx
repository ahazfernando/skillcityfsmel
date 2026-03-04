'use client';

import { motion } from 'framer-motion';
import { Sparkles, CalendarClock, PhoneCall, ArrowRight, Brush } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function OneOffCleaningClient() {
    return (
        <main className="bg-lime-50 min-h-screen">
            {/* Urgent / Vibrant Hero */}
            <section className="pt-40 pb-24 text-center px-4 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-lime-200/50 rounded-[100%] blur-[120px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8 relative z-10"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-lime-900 text-lime-100 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg shadow-lime-900/20">
                        <CalendarClock className="w-5 h-5" />
                        Urgent & Special Occasions
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-gray-900 tracking-tighter">
                        Complete <span className="text-lime-600">Refresh</span>,<br />
                        Right when you need it.
                    </h1>

                    <p className="text-2xl text-gray-600 font-medium max-w-2xl mx-auto leading-relaxed">
                        Pre-inspection prep, post-event restoration, or just an intensive spring clean. We hit the reset button on your facility.
                    </p>

                    <div className="pt-8 mb-16">
                        <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full px-12 py-5 text-xl font-bold transition-transform hover:scale-105 shadow-xl shadow-lime-600/30 gap-3">
                            <PhoneCall className="w-6 h-6" /> Book a One-Off Clean
                        </Link>
                    </div>

                    <div className="relative h-[300px] md:h-[400px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white max-w-5xl mx-auto">
                        <Image
                            src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                            alt="Spring Cleaning"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Clean Feature Grid */}
            <section className="py-24 bg-white rounded-t-[4rem] relative z-20 border-t border-lime-100 shadow-[0_-20px_50px_-20px_rgba(0,0,0,0.05)]">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-16">
                        <Brush className="w-12 h-12 text-lime-300 mx-auto mb-4" />
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Intensive Cleaning Protocol</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Top-to-Bottom Dusting", desc: "Comprehensive wiping of all surfaces, ensuring no cobweb is left behind." },
                            { title: "Floor Restoration", desc: "Deep vacuuming and mopping of all hard floors and intensive carpet care." },
                            { title: "Kitchen Degreasing", desc: "Intensive degreasing and appliance exterior cleaning." },
                            { title: "Bathroom Scrubbing", desc: "Full bathroom sanitisation, lime-scale removal, and intense scrubbing." },
                            { title: "Window Sills & Glass", desc: "Interior window cleaning and sill wiping for a crystal-clear finish." },
                            { title: "Rapid Response Crew", desc: "Arriving fully equipped with commercial-grade products for immediate results." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-lime-50/50 p-8 rounded-3xl border border-lime-100 hover:bg-lime-600 hover:text-white transition-colors group cursor-default"
                            >
                                <Sparkles className="w-8 h-8 text-lime-500 group-hover:text-lime-300 mb-6 transition-colors" />
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-3 transition-colors">{item.title}</h3>
                                <p className="text-gray-600 group-hover:text-lime-100 font-medium leading-relaxed transition-colors">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
