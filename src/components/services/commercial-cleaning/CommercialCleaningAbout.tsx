'use client';

import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const aboutAccordions = [
    {
        title: "Our Mission",
        content: "With years of experience in the industry, our team of skilled professionals is dedicated to delivering top-tier commercial cleaning services. We prioritize reliability, quality, and safety, taking pride in creating pristine workspaces for our clients."
    },
    {
        title: "Our Vision",
        content: "To be the leading commercial cleaning provider recognized for our commitment to excellence, sustainable practices, and creating exceptionally healthy environments for businesses to thrive."
    },
    {
        title: "Our Value",
        content: "Integrity, diligence, and customer satisfaction form the core of our business. We believe in transparent communication and consistently exceeding expectations in every clean."
    }
];

export default function CommercialCleaningAbout() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-3 gap-12 items-center">

                    {/* Column 1: Text & Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="text-[#00b050] font-bold text-sm tracking-widest uppercase bg-[#e5f7ed] inline-block px-3 py-1 rounded">
                            About Us
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight">
                            Transforming Workspaces with Quality Cleaning Solutions
                        </h2>

                        <p className="text-gray-500 text-lg leading-relaxed">
                            From daily maintenance to full deep-cleans, we treat each office as our own, providing personalized commercial cleaning solutions tailored to meet the unique needs of your business.
                        </p>

                        <div className="pt-4">
                            <Link href="/contact-us" className="inline-block bg-[#00b050] hover:bg-[#008f40] text-white font-bold py-3 px-8 rounded transition-colors shadow-lg shadow-[#00b050]/30">
                                Book a Free Consultation
                            </Link>
                        </div>
                    </motion.div>

                    {/* Column 2: Center Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[550px] w-full rounded-2xl overflow-hidden shadow-xl"
                    >
                        <Image
                            src="/CommercialCleaning/CommercialCleaning.png"
                            alt="Commercial cleaning professional"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Column 3: Accordion */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        {aboutAccordions.map((item, index) => (
                            <div
                                key={index}
                                className={`rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-[#00b050] text-white shadow-lg' : 'bg-white border border-gray-100 shadow-sm'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-[#111827]'}`}>
                                        {item.title}
                                    </span>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-white text-[#00b050]' : 'bg-[#e5f7ed] text-[#00b050]'}`}>
                                        {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                    </span>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-6 pb-6 text-white/90 leading-relaxed text-sm">
                                                {item.content}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
