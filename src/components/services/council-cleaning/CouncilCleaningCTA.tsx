'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CouncilCleaningCTA() {
    return (
        <section className="py-32 relative overflow-hidden bg-white">
            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-green-600 to-green-900 rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
                >
                    {/* Shapes */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold text-white font-sans leading-tight">
                            Elevate Your Community's <br />
                            <span className="text-green-300">Public Spaces</span>
                        </h2>
                        <p className="text-xl text-white/90">
                            Partner with us for reliable, transparent, and superior council cleaning services.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white text-green-900 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                Schedule a Walkthrough
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default CouncilCleaningCTA;
