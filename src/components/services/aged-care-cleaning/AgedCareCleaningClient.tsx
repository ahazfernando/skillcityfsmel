'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Heart, HeartPulse, Sparkles, SmileCircle, Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function AgedCareCleaningClient() {
    return (
        <main className="bg-[#fff9f9] min-h-screen font-sans">
            {/* Soft Hero Section */}
            <section className="pt-40 pb-24 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 -z-10" />

                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-100 rounded-full text-lime-800 font-medium text-sm">
                                <Heart className="w-4 h-4" />
                                Respectful & Dignified Care
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Compassionate <span className="text-lime-500 font-serif italic">Cleaning</span> for Aged Care
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                Clean surroundings not only reduce the risk of infections but also contribute to the comfort, dignity, and overall wellbeing of residents.
                            </p>
                            <div className="pt-4">
                                <Link href="/contact-us" className="inline-flex items-center justify-center bg-gray-900 hover:bg-lime-600 text-white rounded-2xl px-8 py-4 text-lg font-medium transition-colors gap-2">
                                    Discuss Your Needs <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                            className="relative grid grid-cols-2 gap-4 h-[600px]"
                        >
                            <div className="space-y-4 pt-12">
                                <div className="relative h-[250px] rounded-[2rem] overflow-hidden shadow-lg">
                                    <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Aged care interior" fill className="object-cover" />
                                </div>
                                <div className="relative h-[300px] rounded-[2rem] overflow-hidden shadow-lg">
                                    <div className="absolute inset-0 bg-lime-200" />
                                    <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Aged care interior" fill className="object-cover mix-blend-multiply opacity-50" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="relative h-[350px] rounded-[2rem] overflow-hidden shadow-lg">
                                    <Image src="/home/PHOTO-2026-01-07-18-53-29.jpg" alt="Aged care interior" fill className="object-cover" />
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-lg flex flex-col justify-center h-[200px]">
                                    <HeartPulse className="w-10 h-10 text-lime-500 mb-4" />
                                    <p className="font-bold text-gray-900 text-lg">Infection Control Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* List Features Section */}
            <section className="py-32 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Our Specialised Services</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            We provide specialised aged care cleaning services for nursing homes, retirement villages, assisted living facilities, and residential care centres.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-y-12 gap-x-16">
                        {[
                            "Resident rooms and living spaces",
                            "Communal areas and dining halls",
                            "Bathrooms and shared washrooms",
                            "High-touch surfaces sanitisation",
                            "Waste collection and disposal",
                            "Tailored infection control procedures"
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4"
                            >
                                <div className="w-8 h-8 rounded-full bg-lime-100 flex items-center justify-center shrink-0 mt-1">
                                    <Check className="w-5 h-5 text-lime-600" />
                                </div>
                                <div>
                                    <p className="text-xl font-medium text-gray-900 leading-snug">{feature}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content Highlight */}
            <section className="py-24 bg-lime-50 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <SmileCircle className="w-16 h-16 text-lime-400 mx-auto mb-8" />
                    <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-serif italic mb-10">
                        "By choosing Skill City, you partner with a trusted team that understands the care and responsibility required in aged care environments. Our trained and respectful staff follow strict health and safety standards."
                    </p>
                    <Link href="/contact-us" className="text-lime-600 font-bold text-lg hover:underline underline-offset-4">
                        Contact us today for a facility assessment &rarr;
                    </Link>
                </div>
            </section>
        </main>
    );
}
