'use client';

import { motion } from 'framer-motion';
import { ChefHat, CheckSquare, Utensils, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function RestaurantCleaningClient() {
    return (
        <main className="bg-[#fffdfa] min-h-screen">
            {/* Minimal White Hero with Food Accents */}
            <section className="pt-40 pb-20 border-b border-lime-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lime-50 to-transparent pointer-events-none" />
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] rounded-t-full rounded-b-2xl overflow-hidden shadow-lime-900/10 shadow-2xl border-8 border-white"
                        >
                            <Image
                                src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                alt="Commercial Kitchen Cleaning"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 lg:pl-10"
                        >
                            <ChefHat className="w-16 h-16 text-lime-500 mb-2" />
                            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-none mb-4 font-serif">
                                Feast without the <span className="text-lime-500 italic">Mess</span>.
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                Maintaining front-of-house perfection and back-of-house hygiene in food service environments requires specialised attention.
                            </p>
                            <p className="text-gray-500 leading-relaxed">
                                We help keep your kitchen compliant and your dining area immaculate.
                            </p>

                            <div className="pt-8">
                                <Link href="/contact-us" className="inline-flex items-center gap-2 text-lime-600 font-bold text-lg hover:text-lime-700 hover:gap-3 transition-all">
                                    Book a Consultation <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Checklist Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-16">
                        <Utensils className="w-10 h-10 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-lime-200 inline-block pb-2">Our Culinary Cleaning Checklist</h2>
                    </div>

                    <div className="bg-lime-50 rounded-[2rem] p-8 md:p-12 shadow-inner border border-lime-100">
                        <div className="space-y-6">
                            {[
                                "Deep cleaning and degreasing of commercial ovens, fryers, and grills",
                                "Canopy, exhaust, and range hood filter cleaning",
                                "Sanitisation of all food preparation surfaces and stainless steel benches",
                                "Thorough dining area cleaning, including tables, chairs, and floors",
                                "Restroom deep cleaning for patron comfort",
                                "Hard floor scrubbing to remove built-up grease and food spills",
                                "Cool room and dry storage cleaning"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-default"
                                >
                                    <div className="mt-1 flex-shrink-0">
                                        <CheckSquare className="w-6 h-6 text-lime-500" />
                                    </div>
                                    <p className="text-lg text-gray-700 font-medium">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
