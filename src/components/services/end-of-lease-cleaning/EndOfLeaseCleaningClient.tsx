'use client';

import { motion } from 'framer-motion';
import { Key, CheckCircle, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function EndOfLeaseCleaningClient() {
    return (
        <main className="bg-white min-h-screen">
            {/* Split Screen Hero */}
            <section className="pt-32 pb-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="bg-lime-50 rounded-[3rem] p-10 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-16 items-center border border-lime-100 relative overflow-hidden">

                        {/* Decorative Background blob */}
                        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-white rounded-full blur-[80px] -translate-y-1/2 -z-0 opacity-60" />

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-lime-700 font-bold text-sm shadow-sm">
                                <Key className="w-4 h-4" />
                                Bond Return Guarantee
                            </div>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                Hand the Keys Back with <span className="text-lime-500">Confidence.</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                                End of lease cleaning requires careful attention to detail. We are designed to help tenants leave the property in excellent condition.
                            </p>
                            <Link href="/contact-us" className="inline-flex items-center justify-center bg-gray-900 hover:bg-lime-600 text-white rounded-2xl px-8 py-4 text-lg font-medium transition-colors gap-2">
                                Secure Your Bond <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                                <Image
                                    src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                    alt="End of Lease Cleaning"
                                    fill
                                    className="object-cover"
                                />
                                {/* Floating Badge */}
                                <div className="absolute -left-6 -bottom-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                                    <ShieldCheck className="w-10 h-10 text-lime-500" />
                                    <div>
                                        <p className="font-bold text-gray-900">Passed Inspection</p>
                                        <p className="text-sm text-gray-500">100% Satisfaction Rate</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Checklist Driven Features */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="text-center mb-16">
                        <Search className="w-12 h-12 text-lime-200 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Everything We Cover</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            We follow a structured cleaning checklist tailored to residential and commercial properties to ensure nothing is overlooked.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                        {[
                            "Deep cleaning of kitchens including all inventory",
                            "Thorough bathroom sanitisation (showers, toilets, tiles)",
                            "Cleaning of all floors (vacuuming, mopping, stain removal)",
                            "Interior window cleaning, tracks, and frames",
                            "Dusting and wiping skirting boards, doors, switches",
                            "Wardrobe, cupboard, and drawer cleaning (inside/out)",
                            "Removal of cobwebs and surface dust"
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-start gap-4 p-5 rounded-2xl hover:bg-lime-50 transition-colors"
                            >
                                <CheckCircle className="w-6 h-6 text-lime-500 shrink-0 mt-0.5" />
                                <span className="text-lg text-gray-800 font-medium">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
