'use client';

import { motion } from 'framer-motion';
import { Pickaxe, Box, ArrowRightCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function WarehouseCleaningClient() {
    return (
        <main className="bg-gray-100 min-h-screen">
            {/* Split Wide Hero */}
            <section className="pt-32 pb-12">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="w-full lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center bg-gray-900 text-white"
                        >
                            <Box className="w-12 h-12 text-lime-400 mb-8" />
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                                Massive Scale. <br />
                                <span className="text-lime-400">Micro Detail.</span>
                            </h1>
                            <p className="text-lg text-gray-400 mb-10 max-w-md">
                                Industrial and warehouse environments require specialised cleaning solutions to minimise downtime and ensure worker safety.
                            </p>
                            <div>
                                <Link href="/contact-us" className="inline-flex items-center px-6 py-3 bg-lime-500 hover:bg-lime-600 rounded text-white font-bold tracking-wide transition-colors">
                                    Get an Estimate
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative h-[400px] lg:h-auto min-h-[500px]"
                        >
                            <Image
                                src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                alt="Warehouse Loading Bay"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Horizontal Feature Rows */}
            <section className="py-20">
                <div className="container mx-auto px-4 max-w-5xl space-y-8">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-8 border border-gray-200"
                    >
                        <div className="w-20 h-20 bg-lime-50 rounded-full flex items-center justify-center shrink-0">
                            <Pickaxe className="w-10 h-10 text-lime-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Hard Floor Scrubbing & Sweeping</h3>
                            <p className="text-gray-600 text-lg">We use advanced industrial sweepers and ride-on scrubbers to eliminate dust, dirt, and rubber tire marks from forklifts, restoring safety and appearance to concrete floors.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 md:p-12 rounded-2xl shadow-sm flex flex-col md:flex-row items-center gap-8 border border-gray-200"
                    >
                        <div className="w-20 h-20 bg-lime-50 rounded-full flex items-center justify-center shrink-0">
                            <Sparkles className="w-10 h-10 text-lime-500" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Staff Facilities & Racking</h3>
                            <p className="text-gray-600 text-lg">We thoroughly clean high-touch employee zones (break rooms, washrooms, locker rooms) as well as heavy duty dusting of racking and storage systems.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="pb-24">
                <div className="container mx-auto px-4 max-w-5xl text-center">
                    <Link href="/services" className="inline-flex items-center text-lime-600 hover:text-lime-800 font-bold text-xl gap-2 transition-colors">
                        View all commercial services <ArrowRightCircle className="w-6 h-6" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
