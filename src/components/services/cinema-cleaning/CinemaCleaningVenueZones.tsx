"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Ticket, Star, Film } from "lucide-react";

export function CinemaCleaningVenueZones() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 rounded-xl border border-gray-200 hover:border-lime-500/50 transition-colors"
                    >
                        <div className="p-3 bg-lime-100 inline-block rounded-lg mb-6 text-lime-700">
                            <MonitorPlay className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Screening rooms</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Seating, cup holders, and floors between performances.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-xl border border-gray-200 hover:border-lime-500/50 transition-colors"
                    >
                        <div className="p-3 bg-lime-100 inline-block rounded-lg mb-6 text-lime-700">
                            <Ticket className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Foyers &amp; ticketing</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Welcoming entrances—counters, glass, and lobbies.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-xl border border-gray-200 hover:border-lime-500/50 transition-colors"
                    >
                        <div className="p-3 bg-lime-100 inline-block rounded-lg mb-6 text-lime-700">
                            <Star className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Washrooms</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">High-traffic sanitisation and consumable care.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-xl border border-gray-200 hover:border-lime-500/50 transition-colors"
                    >
                        <div className="p-3 bg-lime-100 inline-block rounded-lg mb-6 text-lime-700">
                            <Film className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">Staff areas</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">Projection, break rooms, and back-of-house spaces.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
