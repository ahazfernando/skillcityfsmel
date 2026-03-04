'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Users, MapPin, Recycle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function CouncilCleaningClient() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Minimal Centered Hero */}
            <section className="relative pt-40 pb-32 text-center px-4 overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-green-100/40 rounded-full blur-3xl opacity-50" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-lime-100/40 rounded-full blur-3xl opacity-50" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto relative z-10"
                >
                    <span className="text-lime-700 font-semibold tracking-wider uppercase text-sm mb-4 block">
                        Community & Public Spaces
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 font-serif">
                        Pristine Environments for the <span className="text-lime-600 italic font-medium">Public</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Public facilities see immense foot traffic every day. Maintaining a pristine environment is essential to public health and community pride.
                    </p>
                    <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-full px-10 py-4 text-lg font-medium transition-all hover:scale-105 shadow-lime-600/20 shadow-xl">
                        Schedule a Walkthrough
                    </Link>
                </motion.div>
            </section>

            {/* Visual Break - Large Width Image */}
            <section className="px-4 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="container mx-auto max-w-6xl h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative shadow-2xl"
                >
                    <Image
                        src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                        alt="Public Library Cleaning"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </section>

            {/* Zig-Zag Content Sections */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="w-12 h-12 bg-lime-100 rounded-2xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-lime-600" />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900">Tailored Council Solutions</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We provide tailored cleaning solutions designed specifically for government, council, and community-operated venues, ensuring they remain safe, hygienic, and presentable for all visitors. From local town halls to recreational centres.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-96 rounded-[2rem] bg-gray-100 overflow-hidden"
                        >
                            {/* Abstract placeholder for another image, fallback to primary if not provided */}
                            <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Council Cleaning" fill className="object-cover opacity-90 saturate-50" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Icon Grid Features */}
            <section className="py-24 bg-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            Our Capabilities
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: MapPin, title: "Public Lobbies & Desks", desc: "Thorough cleaning of public lobbies, waiting areas, and reception desks." },
                            { icon: Users, title: "Event Spaces", desc: "Sanitisation of community halls, meeting rooms, and event spaces." },
                            { icon: Leaf, title: "High-Touch Hygiene", desc: "High-frequency touchpoint disinfection (doors, handles, handrails)." },
                            { icon: Recycle, title: "Waste & Recycling", desc: "Waste removal, recycling coordination, and bin management." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 text-lime-600 border border-gray-100">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic font-serif">
                        "We understand the importance of reliability and discretion when working in public and government spaces. Our carefully vetted team delivers exceptional standards."
                    </p>
                </div>
            </section>
        </main>
    );
}
