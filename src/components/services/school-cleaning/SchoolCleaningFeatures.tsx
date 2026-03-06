"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";

export function SchoolCleaningFeatures() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <BookOpen className="w-12 h-12 text-[#00b050] mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-950 mb-6">Consistent Quality & Reliability</h2>
                    <p className="text-lg text-gray-900/60 leading-relaxed">
                        Our professional school cleaning services are explicitly designed to meet the rigorous demands of educational facilities, delivering consistent quality.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    {[
                        { title: "Daily Classroom Cleaning", desc: "Staff rooms, libraries, and administrative offices." },
                        { title: "Restroom Sanitisation", desc: "Thorough sanitisation of restrooms and high-touch surfaces." },
                        { title: "Floor Maintenance", desc: "Vacuuming and mopping of all floor areas." },
                        { title: "Specialist Learning Areas", desc: "Cleaning of laboratories, computer rooms, and art studios." },
                        { title: "Canteen Services", desc: "Canteen and kitchen cleaning services." },
                        { title: "Infection Control", desc: "Disinfection programs to minimise the spread of germs." }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`bg-gray-50/50 p-8 rounded-[2rem] border border-gray-100/50 hover:bg-white hover:shadow-2xl hover:border-gray-100 transition-all cursor-default ${i === 1 || i === 4 ? "md:-translate-y-8 lg:-translate-y-12" : ""}`}
                        >
                            <Sparkles className="w-8 h-8 text-[#00b050] mb-6" />
                            <h3 className="text-xl font-bold text-gray-950 mb-3">{feature.title}</h3>
                            <p className="text-gray-900/70 font-medium leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SchoolCleaningFeatures;
