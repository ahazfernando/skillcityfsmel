'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Activity, Crosshair, Microscope, Stethoscope, Droplet } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function MedicalCleaningClient() {
    return (
        <main className="bg-white min-h-screen">
            {/* Clinical Centered Hero */}
            <section className="pt-32 pb-20 relative border-b border-lime-100">
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
                        Hospital-Grade <br />
                        <span className="text-lime-600">Sanitisation</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-gray-600 mb-10 leading-relaxed font-light"
                    >
                        Medical environments require the highest standards of hygiene and strict adherence to infection control protocols. We provide specialised cleaning solutions for hospitals, clinics, and laboratories.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-lg px-8 py-4 text-lg font-semibold transition-all hover:shadow-lg hover:-translate-y-1 gap-2">
                            Request Clinical Cleaning <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Clinical Bento Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Large feature card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 md:col-span-2 flex flex-col justify-center"
                        >
                            <Stethoscope className="w-12 h-12 text-lime-600 mb-6" />
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Uncompromising Protocols</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Our team is trained in medical-grade cleaning procedures to ensure all areas remain sterile, sanitised, and fully compliant with healthcare regulations. From operating theatres to clinical environments.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-lime-600 p-10 rounded-2xl shadow-xl text-white flex justify-center items-center text-center"
                        >
                            <div>
                                <Crosshair className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                <h3 className="text-2xl font-bold">Infection<br />Control</h3>
                            </div>
                        </motion.div>

                        {[
                            { icon: Microscope, title: "Operating Theatres", desc: "Rigorous cleaning of sensitive clinical areas." },
                            { icon: Droplet, title: "Biohazard Handling", desc: "Safe waste management and sanitisation." },
                            { icon: Activity, title: "High-Touch Zones", desc: "Disinfection of handles, rails, and equipment." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i + 2) * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                            >
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-lime-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
