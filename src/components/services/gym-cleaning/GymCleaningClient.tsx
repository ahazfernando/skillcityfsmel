'use client';

import { motion } from 'framer-motion';
import { Dumbbell, ShieldCheck, Zap, ArrowRight, Droplets } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function GymCleaningClient() {
    return (
        <main className="bg-gray-50 min-h-screen text-gray-900">
            {/* Aggressive Dark Hero */}
            <section className="pt-32 pb-24 relative overflow-hidden">
                {/* Diagonal background slash */}
                <div className="absolute top-0 right-0 w-[120%] h-full bg-white -skew-y-6 origin-top-right -z-10" />

                <div className="container mx-auto px-4 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="w-full lg:w-1/2 space-y-8 lg:pr-10"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-full text-lime-400 font-bold text-sm uppercase tracking-widest">
                                <Zap className="w-4 h-4" />
                                Premium Fitness Facilities
                            </div>
                            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                                Sweat.<br />
                                Clean.<br />
                                <span className="text-lime-500 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">Repeat.</span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed font-medium">
                                Maintain a premium, sweat-free environment. We provide intense sanitisation for workout equipment, change rooms, and highly-trafficked gym floors.
                            </p>
                            <Link href="/contact-us" className="inline-flex items-center justify-center bg-lime-500 hover:bg-lime-400 text-white rounded-none px-10 py-5 text-xl font-black uppercase tracking-widest transition-transform hover:scale-105 skew-x-[-10deg]">
                                <span className="skew-x-[10deg] flex items-center gap-2">Book a Clean <ArrowRight className="w-6 h-6" /></span>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] skew-x-[-10deg] overflow-hidden border-4 border-gray-200"
                        >
                            <Image
                                src="/home/PHOTO-2026-01-07-18-53-29.jpg"
                                alt="Gym Cleaning Services"
                                fill
                                className="object-cover skew-x-[10deg] scale-125 opacity-70 contrast-125 saturate-50 mix-blend-multiply"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/20 to-transparent mix-blend-overlay" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Grid - Dark Mode Cards */}
            <section className="py-24 bg-gray-50 relative">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: Dumbbell, title: "Equipment Sanitisation", desc: "Wiping down and disinfecting all weights, machines, and cardio equipment." },
                            { icon: Droplets, title: "Change Rooms", desc: "Deep cleaning of locker rooms, showers, and saunas to prevent bacteria buildup." },
                            { icon: ShieldCheck, title: "Mat & Floor Care", desc: "Sanitising yoga mats, rubber gym flooring, and hardwood studio floors." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 border border-gray-200 hover:border-lime-500 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-lime-500/10 rounded-full blur-2xl group-hover:bg-lime-500/20 transition-colors -translate-y-1/2 translate-x-1/2" />
                                <item.icon className="w-12 h-12 text-gray-500 group-hover:text-lime-400 mb-6 transition-colors relative z-10" />
                                <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4 relative z-10">{item.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed relative z-10">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 border-t border-gray-200 text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <p className="text-2xl text-gray-700 font-light leading-relaxed">
                        "A clean gym reflects standard and dedication. By partnering with us, you keep your members focused on their workouts, not on the cleanliness of their surroundings."
                    </p>
                </div>
            </section>
        </main>
    );
}
