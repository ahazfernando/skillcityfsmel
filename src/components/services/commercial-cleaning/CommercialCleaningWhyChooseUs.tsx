'use client';

import Image from 'next/image';
import { Sparkles, ShieldCheck, Leaf, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CommercialCleaningWhyChooseUs() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative h-[600px] w-full rounded-3xl overflow-hidden"
                    >
                        {/* Decorative background shape mimicking the folder-like cut */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-3xl z-10 hidden md:block" />

                        <Image
                            src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.05 PM.jpeg"
                            alt="Commercial cleaning professional at work"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-2 text-[#00b050] font-bold text-sm tracking-wider uppercase">
                            <Sparkles className="w-5 h-5" />
                            Why Choose Us
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight lg:-mr-20">
                            We Make Your Workspace <br className="hidden md:block" />
                            <span className="text-[#00b050] italic">Sparkle</span>{" "}
                            <span className="italic">And Shine</span>
                        </h2>

                        <p className="text-gray-600 text-lg leading-relaxed">
                            The cleaners we hire are professionals who take pride in doing excellent work and in exceeding expectations.
                        </p>

                        <div className="space-y-8 pt-4">
                            {/* Feature 1 */}
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e5f7ed] flex items-center justify-center border-2 border-[#bce8d0]">
                                    <ShieldCheck className="w-8 h-8 text-[#00b050]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">100% Satisfaction</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        Cleaning services encompass a wide range of tasks related to maintaining a pristine and professional commercial environment.
                                    </p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e5f7ed] flex items-center justify-center border-2 border-[#bce8d0]">
                                    <Leaf className="w-8 h-8 text-[#00b050]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#111827] mb-2">Eco-Friendly Cleaning Products</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                                        We use specialized, environmentally conscious products and equipment to ensure a safe workplace for everyone.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6">
                            <Link href="/contact-us" className="inline-flex items-center gap-4 bg-[#1e293b] hover:bg-[#0f172a] text-white rounded-full py-3 px-6 font-semibold transition-colors duration-300">
                                <span>Get a Quote</span>
                                <div className="w-8 h-8 rounded-full bg-[#00b050] flex items-center justify-center">
                                    <ArrowRight className="w-4 h-4 text-white" />
                                </div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
