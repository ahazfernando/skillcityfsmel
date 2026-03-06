"use client";

import { motion } from "framer-motion";
import { MapPin, Users, Leaf, Recycle } from "lucide-react";

export function CouncilCleaningCapabilities() {
    return (
        <div className="bg-gray-100">
            {/* Icon Grid Features */}
            <section className="py-24">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
                            Our Capabilities
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: MapPin, title: "Public Lobbies & Desks", desc: "Thorough cleaning of public lobbies, waiting areas, and reception desks." },
                            { icon: Users, title: "Event Spaces", desc: "Sanitisation of community halls, meeting rooms, and event spaces." },
                            { icon: Leaf, title: "High-Touch Hygiene", desc: "High-frequency touchpoint disinfection (doors, handles, handrails)." },
                            { icon: Recycle, title: "Waste & Recycling", desc: "Waste removal, recycling coordination, and bin management." },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow text-center"
                            >
                                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-6 text-[#00b050] border border-gray-100">
                                    <feature.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonial / Quote */}
            <section className="py-24 bg-white text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed italic font-serif">
                        "We understand the importance of reliability and discretion when working in public and government spaces. Our carefully vetted team delivers exceptional standards."
                    </p>
                </div>
            </section>
        </div>
    );
}

export default CouncilCleaningCapabilities;
