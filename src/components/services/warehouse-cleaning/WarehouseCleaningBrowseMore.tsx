"use client";

import Link from "next/link";
import { ArrowRightCircle } from "lucide-react";

export function WarehouseCleaningBrowseMore() {
    return (
        <section className="pb-12 bg-gray-100">
            <div className="container mx-auto px-4 max-w-5xl text-center">
                <Link
                    href="/services"
                    className="inline-flex items-center text-lime-600 hover:text-lime-800 font-bold text-xl gap-2 transition-colors"
                >
                    View all commercial services <ArrowRightCircle className="w-6 h-6" />
                </Link>
            </div>
        </section>
    );
}
