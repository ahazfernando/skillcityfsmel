'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Book Online",
        description: "Choose your service and schedule a convenient time"
    },
    {
        number: "02",
        title: "We Arrive",
        description: "Our vetted professionals arrive on time, ready to clean"
    },
    {
        number: "03",
        title: "We Clean",
        description: "Thorough cleaning following our detailed checklist"
    },
    {
        number: "04",
        title: "You Relax",
        description: "Enjoy your sparkling clean space, guaranteed"
    }
];

export default function CommercialCleaningHowItWorks() {
    return (
        <section className="py-24 bg-[#fcfdfc]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-20 space-y-4">
                    <p className="text-sm font-bold tracking-widest text-[#2f8a42] uppercase">
                        How It Works
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e3b2b]">
                        Quick and Easy
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Getting your space cleaned has never been easier
                    </p>
                </div>

                <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 px-4">
                    {/* Decorative connecting line for desktop */}
                    <div className="hidden lg:block absolute top-[36px] left-[12.5%] right-[12.5%] h-[2px] bg-[#b6d0b9]/40 z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center flex flex-col items-center relative z-10"
                        >
                            <div className="text-7xl font-bold text-[#b6d0b9] mb-6 bg-[#fcfdfc] px-6">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold text-[#1e3b2b] mb-4">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 font-medium leading-relaxed text-sm max-w-[200px]">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
