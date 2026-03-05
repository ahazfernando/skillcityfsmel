'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CommercialCleaningHero from './CommercialCleaningHero';
import CommercialCleaningMarquee from './CommercialCleaningMarquee';

export function CommercialCleaningClient() {
    return (
        <main className="bg-white min-h-screen">
            <CommercialCleaningHero />
            <CommercialCleaningMarquee />

            {/* Introduction Section */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900">Consistency Meets Quality</h2>
                        <div className="w-20 h-1 bg-lime-600 mx-auto rounded-full" />
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Whether you need weekly, fortnightly, or monthly support, we assign the same cleaner to your premises each visit. This allows them to understand your specific requirements, priorities, and workplace standards, delivering a seamless and efficient service every time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Bento Box Features Grid */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-sans">
                            Why Choose Our Team?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Our commercial cleaning team is selected and trained to exceed industry expectations through strict recruitment and performance standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Large span item */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow lg:col-span-2 flex flex-col justify-center"
                        >
                            <div className="w-14 h-14 bg-lime-100 rounded-2xl flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8 text-lime-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">Professionally Trained Staff</h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Dependable, detail-oriented, fully screened, interviewed, and insured personnel for your absolute peace of mind.
                            </p>
                        </motion.div>

                        {[
                            { title: "Advanced Equipment", desc: "Skilled in operating commercial-grade cleaning products." },
                            { title: "Customer-Focused", desc: "Polished, uniformed professionals representing your brand well." },
                            { title: "Quality Checks", desc: "Committed to ongoing service improvements and audits." },
                            { title: "Secure Access", desc: "Trained in secure access systems and building entry protocols." }
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i + 1) * 0.1 }}
                                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 bg-lime-50 rounded-xl flex items-center justify-center mb-6">
                                    <CheckCircle2 className="w-6 h-6 text-lime-500" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-lime-900 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-800 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="container mx-auto px-4 max-w-3xl relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready for a spotless office?</h2>
                    <p className="text-xl text-lime-100 mb-10 leading-relaxed font-light">
                        Our goal is to maintain a clean, healthy, and professional environment that supports productivity and leaves a lasting positive impression.
                    </p>
                    <Link href="/contact-us" className="inline-flex items-center justify-center bg-white text-lime-900 hover:bg-gray-100 rounded-full px-10 py-5 text-lg font-bold transition-colors">
                        Book a Consultation
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
