'use client';

import { motion } from 'framer-motion';
import { MapPin, ShieldCheck, Shirt, BadgeCheck } from 'lucide-react';

const steps = [
    {
        icon: MapPin,
        title: "GPS Tracked\nSign In & Out",
        description: "Every job is logged with GPS check-in and check-out for full public accountability."
    },
    {
        icon: ShieldCheck,
        title: "Trained And\nPolice Cleared",
        description: "All staff undergo rigorous training and full police background checks."
    },
    {
        icon: Shirt,
        title: "Uniformed /\nCorrect PPE",
        description: "Our team arrives in uniform with appropriate safety equipment for public spaces."
    },
    {
        icon: BadgeCheck,
        title: "ID Verified\nStaff",
        description: "Every cleaner carries verified ID so you always know who's in your facility."
    }
];

export function CouncilCleaningProcess() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-20 space-y-4">
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full border border-green-200 bg-green-50">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00b050]"></span>
                        <span className="text-xs font-bold tracking-widest text-[#00b050] uppercase">HOW WE WORK</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
                        Ensuring Public Safety
                    </h2>

                    <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        A rigorous, transparent process built around community safety from first contact to a spotless civic space.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto pt-4">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[28px] left-[12%] right-[12%] h-[1px] bg-green-200" />

                    <div className="grid md:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center"
                            >
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-[#00b050] text-white flex items-center justify-center shadow-lg shadow-green-500/20 z-10 mb-8 border-4 border-white transform transition-transform duration-300 hover:scale-110">
                                    <step.icon className="w-6 h-6" strokeWidth={2} />
                                </div>

                                <h3 className="text-lg font-bold text-[#111827] mb-3 whitespace-pre-line leading-tight">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CouncilCleaningProcess;
