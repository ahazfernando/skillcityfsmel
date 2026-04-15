'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import CommercialCleaningHero from './CommercialCleaningHero';
import CommercialCleaningMarquee from './CommercialCleaningMarquee';
import CommercialCleaningHowItWorks from './CommercialCleaningHowItWorks';
import CommercialCleaningWhyChooseUs from './CommercialCleaningWhyChooseUs';
import CommercialCleaningBenefits from './CommercialCleaningBenefits';
import CommercialCleaningFAQ from './CommercialCleaningFAQ';
import LocationsSection from '../../home/LocationsSection';
import { CommercialCleaningInDepthTabs } from "./CommercialCleaningInDepthTabs";

export function CommercialCleaningClient() {
    return (
        <main className="bg-white min-h-screen">
            <CommercialCleaningHero />
            <CommercialCleaningMarquee />

            <CommercialCleaningWhyChooseUs />
            <CommercialCleaningBenefits />
            <CommercialCleaningInDepthTabs />

            <CommercialCleaningHowItWorks />
            <LocationsSection />
            <CommercialCleaningFAQ />
        </main>
    );
}
