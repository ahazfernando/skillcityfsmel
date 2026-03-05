'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import Image from 'next/image';

const faqs = [
    {
        question: "What types of spaces do you clean?",
        answer: "We offer cleaning for commercial offices, retail spaces, medical centres, and industrial facilities. Custom packages are available based on your unique business needs."
    },
    {
        question: "Are your cleaning products eco-friendly?",
        answer: "Yes, we prioritize using environmentally friendly, non-toxic cleaning products that are safe for your employees and clients, while still being highly effective against germs and dirt."
    },
    {
        question: "How do I book a cleaning session?",
        answer: "You can easily book a session by contacting us via phone, email, or by filling out the 'Get a Quote' form on our website. We'll consult with you to create a customized cleaning plan."
    },
    {
        question: "Do I need to be present during the service?",
        answer: "No, you don't need to be present. Our staff are fully vetted, trusted professionals. We can arrange secure key access or clean during after-hours to avoid disrupting your business operations."
    },
    {
        question: "What if I'm not satisfied with the service?",
        answer: "We offer a 100% satisfaction guarantee. If you are not happy with any aspect of our cleaning, please let us know within 24 hours and we will re-clean the specific area at no additional cost."
    }
];

export default function CommercialCleaningFAQ() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="py-24 bg-[#f8fafc] overflow-hidden">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left side: FAQs */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-2 text-[#00b050] font-bold text-sm tracking-widest">
                            <HelpCircle className="w-5 h-5" />
                            Frequently Asked Questions
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-[#111827] leading-tight mb-8">
                            You Have <span className="text-[#00b050]">Questions,</span><br />
                            We Have <span className="text-gray-800">Answers</span>
                        </h2>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                        className="w-full flex items-center justify-between py-4 px-6 text-left"
                                    >
                                        <span className="font-semibold text-[#111827] text-lg pr-8">{faq.question}</span>
                                        <span className="flex-shrink-0 text-[#00b050]">
                                            {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
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
                                                <div className="px-6 pb-6 text-gray-500 leading-relaxed text-sm md:text-base border-t border-gray-50 pt-4">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right side: Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl lg:ml-8"
                    >
                        <Image
                            src="/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg"
                            alt="Commercial cleaning team member"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
