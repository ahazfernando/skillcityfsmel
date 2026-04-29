'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const certificationLogos: { src: string; alt: string }[] = [
    {
        src: "/licenses/Logo_Cm3_Contractor-Management-Prequalification.svg",
        alt: "CM3 contractor management prequalification",
    },
    {
        src: "/licenses/TestandTagW1.png",
        alt: "Electrical test and tag certification",
    },
    {
        src: "/licenses/LabourHire.png",
        alt: "Victorian Labour Hire Authority licence",
    },
];

export function HouseCleaningHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white pt-40">
            {/* Abstract Background Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-lime-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-forest/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-50 rounded-full text-forest font-medium text-sm">
                            <Sparkles className="w-4 h-4" />
                            <span>Premium House Cleaning Services</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="font-bold leading-[1.1] tracking-tight text-forest font-sans">
                                <span className="block text-3xl sm:text-4xl lg:text-5xl">
                                    Your Trusted Partner in
                                </span>
                                <span className="block text-4xl sm:text-5xl lg:text-6xl text-lime-600">
                                    Professional House Cleaning
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                                We clean your home thoroughly and reliably, so you can enjoy a fresh, comfortable space without the stress.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact-us" className="group relative px-8 py-4 bg-forest text-white rounded-full font-medium overflow-hidden transition-transform hover:scale-105 active:scale-95">
                                <span className="relative z-10 flex items-center gap-2">
                                    Book a Clean
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-lime-600 transform translate-y-full transition-transform group-hover:translate-y-0" />
                            </Link>

                            <Link
                                href="/about-us"
                                className="px-8 py-4 bg-white border border-gray-200 text-forest rounded-full font-medium hover:bg-gray-50 transition-colors"
                            >
                                Why Choose Us
                            </Link>
                        </div>

                        <div className="pt-1">
                            <p className="text-xs text-gray-500 mb-2">
                                Certified for safe, compliant facility management in Australia
                            </p>
                            <div className="flex items-center gap-4 flex-wrap">
                                {certificationLogos.map((logo) => (
                                    <div key={logo.src} className="h-10 flex items-center">
                                        <Image
                                            src={logo.src}
                                            alt={logo.alt}
                                            width={120}
                                            height={36}
                                            className="h-7 w-auto object-contain"
                                            unoptimized={logo.src.endsWith(".svg")}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center gap-8 pt-5">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white relative overflow-hidden">
                                        <Image
                                            src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full bg-lime-100 border-2 border-white flex items-center justify-center text-xs font-bold text-forest">
                                    +2k
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-1 text-yellow-400">
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                    <Star className="w-4 h-4 fill-current" />
                                </div>
                                <p className="text-sm text-gray-500 font-medium">Trusted by 2,000+ homeowners</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Content - Floating Elements */}
                    <div className="relative h-[600px] hidden lg:block">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* Central Image Mask with interesting shape */}
                            <div className="relative w-[500px] h-[600px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3">
                                <Image
                                    src="/home/Both_people_here_should_be_202604290733.jpeg"
                                    alt="Clean Living Room"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                            </div>

                            {/* Floating Cards */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute top-20 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">100% Eco-Friendly</p>
                                        <p className="text-xs text-gray-500">Safe for pets & kids</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute bottom-32 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Verified Pros</p>
                                        <p className="text-xs text-gray-500">Background checked</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ShieldCheck({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
    )
}
