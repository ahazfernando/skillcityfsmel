'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Factory, HardHat, ShieldAlert, Key } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function IndustrialCleaningClient() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Bold Industrial Hero */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl">
                        {/* Abstract background element */}
                        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                            <div className="absolute top-[-20%] right-[-10%] w-1/2 h-[150%] bg-lime-500 transform rotate-12" />
                        </div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-lime-500 font-bold uppercase tracking-widest text-xs">
                                    <Factory className="w-4 h-4" />
                                    Heavy Duty Solutions
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight leading-[1]">
                                    Industrial <br />
                                    <span className="text-lime-500">Power Clean</span>
                                </h1>
                                <p className="text-lg text-gray-400 max-w-md leading-relaxed">
                                    Specialised cleaning solutions designed to maintain safety and efficiency in high-risk industrial environments.
                                </p>
                                <div className="pt-4">
                                    <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-400 text-gray-900 rounded-lg px-8 py-4 text-lg font-bold transition-transform hover:-translate-y-1 group">
                                        Deploy Our Team <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl"
                            >
                                <Image
                                    src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                    alt="Industrial Cleaning"
                                    fill
                                    className="object-cover saturate-0 opacity-80 mix-blend-luminosity"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80" />
                                <div className="absolute bottom-6 left-6 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-lime-500 flex items-center justify-center rounded-lg text-gray-900 shadow-lg">
                                        <HardHat className="w-6 h-6" />
                                    </div>
                                    <p className="text-white font-bold uppercase tracking-wide">Safety <br /> First Protocol</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brutalist Grid Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-tight border-b-4 border-lime-500 inline-block pb-2">
                            Capabilities
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Factory, title: "Machinery Degreasing", desc: "Removing tough grime and build-up to maintain optimal operational performance." },
                            { icon: ShieldAlert, title: "Spill Response", desc: "Rapid and compliant cleaning for hazardous or disruptive spills." },
                            { icon: Key, title: "High-Level Cleaning", desc: "Safe cleaning of ceilings, rafters, and hard-to-reach industrial areas." },
                            { icon: HardHat, title: "Floor Scrubbing", desc: "Heavy-duty ride-on scrubbing for massive concrete footprints." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-none border-2 border-gray-200 hover:border-lime-500 transition-colors group flex flex-col h-full"
                            >
                                <item.icon className="w-10 h-10 text-gray-400 group-hover:text-lime-500 transition-colors mb-6" />
                                <h3 className="text-xl font-bold text-gray-900 uppercase tracking-tight mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-medium mt-auto">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
