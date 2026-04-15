"use client";

import { motion } from "framer-motion";
import { Stethoscope, Crosshair, Microscope, Droplet, Activity } from "lucide-react";

export function MedicalCleaningClinicalAreas() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl shadow-sm border border-gray-200 md:col-span-2 flex flex-col justify-center"
                    >
                        <Stethoscope className="w-12 h-12 text-lime-600 mb-6" />
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Uncompromising Protocols</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our team is trained in medical-grade cleaning procedures so clinical areas remain sterile, sanitised, and compliant—from waiting rooms
                            to sensitive treatment zones.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-lime-600 p-10 rounded-2xl shadow-xl text-white flex justify-center items-center text-center"
                    >
                        <div>
                            <Crosshair className="w-16 h-16 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold">
                                Infection
                                <br />
                                Control
                            </h3>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                    >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <Microscope className="w-6 h-6 text-lime-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Operating & procedure areas</h3>
                        <p className="text-gray-600">Rigorous cleaning of sensitive clinical spaces.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                    >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <Droplet className="w-6 h-6 text-lime-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Biohazard-aware handling</h3>
                        <p className="text-gray-600">Safe waste-area and spill protocols where required.</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200"
                    >
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                            <Activity className="w-6 h-6 text-lime-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">High-touch zones</h3>
                        <p className="text-gray-600">Disinfection of rails, handles, and shared equipment.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
