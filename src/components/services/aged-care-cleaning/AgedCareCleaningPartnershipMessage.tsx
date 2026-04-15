"use client";

import Link from "next/link";
import { Smile } from "lucide-react";

export function AgedCareCleaningPartnershipMessage() {
    return (
        <section className="py-24 bg-lime-50 text-center">
            <div className="container mx-auto px-4 max-w-4xl">
                <Smile className="w-16 h-16 text-lime-400 mx-auto mb-8" />
                <p className="text-2xl md:text-3xl text-gray-800 leading-relaxed font-serif italic mb-10">
                    By choosing Skill City, you partner with a team that understands the care and responsibility required in aged care. Our staff follow strict
                    health and safety standards with respect for every resident.
                </p>
                <Link href="/contact-us" className="text-lime-600 font-bold text-lg hover:underline underline-offset-4">
                    Contact us for a facility assessment →
                </Link>
            </div>
        </section>
    );
}
