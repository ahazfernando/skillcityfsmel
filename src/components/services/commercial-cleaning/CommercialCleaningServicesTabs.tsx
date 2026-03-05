'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Stethoscope, Store, Home, CheckCircle2, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        id: 'office',
        name: 'Office Cleaning',
        icon: Building2,
        title: 'Professional Office Cleaning',
        description: 'Office cleaning remains a popular choice for maintaining productivity and health. We offer expert cleaning tailored to your schedule.',
        features: [
            'Daily and weekly cleaning schedule',
            'Workstation and boardroom sanitation',
            'Breakroom, kitchen, and washroom cleaning'
        ],
        image: '/CommercialCleaning/CommercialCleaning.png'
    },
    {
        id: 'medical',
        name: 'Medical Centres',
        icon: Stethoscope,
        title: 'Clinical & Medical Cleaning',
        description: 'Specialized cleaning services that comply with strict health and safety standards for medical facilities and clinics.',
        features: [
            'Hospital-grade disinfection',
            'Waiting room & reception sanitation',
            'Compliance with health regulations'
        ],
        image: '/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg'
    },
    {
        id: 'retail',
        name: 'Retail Spaces',
        icon: Store,
        title: 'Retail Store Cleaning',
        description: 'First impressions matter. We keep your retail environment spotless, ensuring a welcoming atmosphere for your customers.',
        features: [
            'Floor care & window cleaning',
            'Fitting room sanitation',
            'High-traffic area maintenance'
        ],
        image: '/CommercialCleaning/CommercialCleaning.png'
    },
    {
        id: 'strata',
        name: 'Strata Maintenance',
        icon: Home,
        title: 'Strata & Common Area Cleaning',
        description: 'Comprehensive cleaning for shared residential or commercial building spaces, ensuring they are always pristine.',
        features: [
            'Lobby and hallway vacuuming',
            'Elevator and stairwell cleaning',
            'Bin management and exterior sweeping'
        ],
        image: '/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg'
    }
];

export default function CommercialCleaningServicesTabs() {
    const [activeTab, setActiveTab] = useState(services[0].id);

    const activeService = services.find(s => s.id === activeTab) || services[0];

    return (
        <section className="py-24 bg-[#f4f7f5] overflow-hidden relative">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="text-[#00b050] font-bold text-sm tracking-widest uppercase bg-[#e5f7ed] inline-block px-3 py-1 rounded">
                        Our Service
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#111827]">
                        Protect Your Business with<br />Our Commercial Cleaning
                    </h2>
                </div>

                <div className="grid lg:grid-cols-[1fr_2.5fr] gap-8 relative z-10">

                    {/* Left Tabs */}
                    <div className="space-y-3">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveTab(service.id)}
                                className={`w-full flex items-center gap-4 p-3.5 rounded-xl font-bold transition-all duration-300 shadow-sm ${activeTab === service.id
                                    ? 'bg-[#00b050] text-white shadow-[#00b050]/20 scale-[1.02] z-10'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-100/50'
                                    }`}
                            >
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${activeTab === service.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                                    }`}>
                                    <service.icon className="w-5 h-5" />
                                </div>
                                <span className="text-lg text-left">{service.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Right Content Panel */}
                    <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 overflow-hidden relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid lg:grid-cols-2 gap-10 items-center h-full"
                            >
                                {/* Image */}
                                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-md">
                                    <Image
                                        src={activeService.image}
                                        alt={activeService.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Details */}
                                <div className="space-y-6 flex flex-col justify-center">
                                    <h3 className="text-3xl font-bold text-[#111827]">
                                        {activeService.title}
                                    </h3>

                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        {activeService.description}
                                    </p>

                                    <ul className="space-y-4">
                                        {activeService.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-gray-600 font-medium">
                                                <CheckCircle2 className="w-6 h-6 text-[#00b050] flex-shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-6">
                                        <Link href="/contact-us" className="inline-block bg-[#00b050] hover:bg-[#008f40] text-white font-bold py-3 px-8 rounded transition-colors shadow-lg">
                                            LEARN MORE
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                {/* Decorative Visit Site circle element */}
                <div className="absolute right-10 bottom-10 animate-pulse hidden xl:block z-0 opacity-50">
                    <div className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center animate-spin-slow">
                        {/* Just a nice decorative touch mimicking the mockup */}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-gray-800 text-lg">
                        <ArrowUpRight className="w-10 h-10" />
                    </div>
                </div>

            </div>
        </section>
    );
}
