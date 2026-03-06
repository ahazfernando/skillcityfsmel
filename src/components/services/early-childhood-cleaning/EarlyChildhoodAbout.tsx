"use client";

import { motion } from "framer-motion";
import { LeafyGreen, ShieldAlert, HeartHandshake } from "lucide-react";

export function EarlyChildhoodAbout() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 item-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Peace of mind for parents and educators.</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Maintaining a hygienic space is critical not just for health, but for providing parents with the peace of mind they deserve. Our specialised cleaning services prioritise safety above all else.
                        </p>
                        <div className="flex items-center gap-4 p-4 bg-[#e5f7ed] rounded-2xl border border-green-100">
                            <LeafyGreen className="w-8 h-8 text-[#00b050] flex-shrink-0" />
                            <p className="text-sm font-medium text-gray-800">Eco-friendly, chemical-free sanitisation available upon request.</p>
                        </div>
                    </motion.div>

                    <div className="grid gap-4">
                        {[
                            { icon: ShieldAlert, title: "After-Hours Service", desc: "Zero disruption to children's daily routines." },
                            { icon: HeartHandshake, title: "Compliance Ready", desc: "Helping you meet strict childcare health regulations." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="p-6 rounded-[2rem] border border-gray-200 hover:border-green-200 hover:bg-[#e5f7ed]/50 transition-colors flex items-start gap-4"
                            >
                                <div className="bg-[#e5f7ed] p-3 rounded-xl text-[#00b050]">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                                    <p className="text-gray-600 mt-1">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EarlyChildhoodAbout;
