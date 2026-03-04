'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Baby, ShieldAlert, HeartHandshake, LeafyGreen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function EarlyChildhoodCleaningClient() {
    return (
        <main className="bg-lime-50/30 min-h-screen">
            {/* Full Width Hero with Floating Content Pane */}
            <section className="relative pt-40 pb-32">
                <div className="absolute inset-0 h-[600px] w-full">
                    <Image
                        src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                        alt="Childcare Cleaning"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gray-900/30" />
                </div>

                <div className="container mx-auto px-4 relative z-10 pt-12 md:pt-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-white/95 backdrop-blur-xl p-8 md:p-14 rounded-[2.5rem] shadow-2xl max-w-3xl border border-white/20"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-lime-100 rounded-full text-lime-700 font-bold text-xs uppercase tracking-wider mb-6">
                            <Baby className="w-4 h-4" />
                            Childcare & Kindergartens
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                            Gentle on Kids, <br />
                            <span className="text-lime-500">Tough on Germs.</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed font-medium">
                            Children's immune systems are still developing. We use 100% non-toxic, eco-friendly agents that are tough on bacteria but completely safe for staff and little ones.
                        </p>
                        <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-600 text-white rounded-full px-8 py-4 text-lg font-bold transition-transform hover:scale-105 shadow-xl shadow-lime-500/20 gap-2">
                            Secure Your Clean <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Information Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 item-center max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Peace of mind for parents and educators.</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Maintaining a hygienic space is critical not just for health, but for providing parents with the peace of mind they deserve. Our specialised cleaning services prioritise safety above all else.
                            </p>
                            <div className="flex items-center gap-4 p-4 bg-lime-50 rounded-2xl border border-lime-100">
                                <LeafyGreen className="w-8 h-8 text-lime-500 flex-shrink-0" />
                                <p className="text-sm font-medium text-gray-800">Eco-friendly, chemical-free sanitisation available upon request.</p>
                            </div>
                        </motion.div>

                        <div className="grid gap-4">
                            {[
                                { icon: ShieldAlert, title: "After-Hours Service", desc: "Zero disruption to children's daily routines." },
                                { icon: HeartHandshake, title: "Compliance Ready", desc: "Helping you meet strict childcare health regulations." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="p-6 rounded-[2rem] border border-gray-200 hover:border-lime-200 hover:bg-lime-50/50 transition-colors flex items-start gap-4"
                                >
                                    <div className="bg-lime-100 p-3 rounded-xl text-lime-600">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                        <p className="text-gray-600 mt-1">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Playful Floating Features Cards */}
            <section className="py-24 bg-lime-50 overflow-hidden relative">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Areas We Protect</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                        {[
                            "High-touch play areas & toys",
                            "Sleep & nap areas",
                            "Nappy-change stations",
                            "Residue-free floors",
                            "Food preparation zones",
                            "Outdoor equipment"
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ y: -5 }}
                                className="bg-white px-6 py-4 rounded-full shadow-sm border border-lime-100 font-medium text-gray-700 hover:text-lime-600 transition-colors cursor-default"
                            >
                                {feature}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
