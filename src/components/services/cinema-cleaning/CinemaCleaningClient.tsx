'use client';

import { motion } from 'framer-motion';
import { Film, Ticket, Star, MonitorPlay, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CinemaCleaningClient() {
    return (
        <main className="bg-white min-h-screen text-gray-200">
            {/* Cinematic Hero */}
            <section className="relative pt-40 pb-32 flex items-center justify-center overflow-hidden min-h-[80vh]">
                {/* Cinema Gradient Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-50 via-[#0f0c1b]/80 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-lime-500/50 to-transparent" />

                <div className="absolute inset-0 w-full h-full opacity-40">
                    <Image
                        src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                        alt="Theater Cleaning"
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <Film className="w-16 h-16 text-lime-400 mx-auto mb-8 opacity-80" />
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-gray-900 mb-6 drop-shadow-2xl">
                            The Show Must <br /> Go On.
                        </h1>
                        <p className="text-xl md:text-2xl text-lime-200/80 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                            Entertainment venues require consistent cleanliness to maintain customer satisfaction and strong brand reputation.
                        </p>
                        <Link href="/contact-us" className="inline-flex items-center gap-2 border-b border-lime-400 pb-1 text-lime-400 uppercase tracking-widest text-sm font-bold hover:text-gray-900 hover:border-white transition-colors">
                            Book the Premiere Clean <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Focus Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: MonitorPlay, title: "Screening Rooms", desc: "Detailing seating areas, cup holders, and floors between performances." },
                            { icon: Ticket, title: "Foyers & Ticketing", desc: "Creating a welcoming entrance with pristine counters and lobbies." },
                            { icon: Star, title: "Washrooms", desc: "High-traffic washroom sanitisation and consumable management." },
                            { icon: Film, title: "Staff Areas", desc: "Cleaning projection rooms, break rooms, and staff-only spaces." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-xl border border-lime-900/30 hover:border-lime-500/50 transition-colors"
                            >
                                <div className="p-3 bg-lime-900/20 inline-block rounded-lg mb-6 text-lime-400">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif line-clamp-1">{item.title}</h3>
                                <p className="text-sm text-lime-200/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
