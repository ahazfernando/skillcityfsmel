"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ServiceInDepthTabItem = {
    id: string;
    label: string;
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
    image: string;
    Icon: LucideIcon;
    ctaText: string;
};

export type ServiceInDepthTabsProps = {
    eyebrow: string;
    titleLine1: string;
    titleGreen: string;
    description: string;
    tabs: ServiceInDepthTabItem[];
    /** Match nav-aligned full-width layout (e.g. house cleaning page). */
    wide?: boolean;
};

/**
 * Standalone in-depth services tab block (house-style layout).
 * Each service page uses its own wrapper that passes copy + tabs.
 */
export function ServiceInDepthTabs({
    eyebrow,
    titleLine1,
    titleGreen,
    description,
    tabs,
    wide = false,
}: ServiceInDepthTabsProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!tabs.length) return null;

    const tabListClass = cn(
        "w-full h-auto gap-2 md:gap-3 bg-gray-50 p-2 rounded-2xl md:rounded-full border border-gray-100",
        wide && tabs.length <= 3
            ? "grid grid-cols-1 sm:grid-cols-3"
            : wide && tabs.length === 4
              ? "grid grid-cols-2 lg:grid-cols-4"
              : wide && tabs.length >= 5
                ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                : "flex flex-wrap justify-start md:justify-center lg:justify-between",
    );

    const tabTriggerClass = cn(
        "rounded-xl md:rounded-full px-3 py-2.5 text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 hover:text-gray-900 transition-all",
        wide && tabs.length <= 5 ? "w-full" : "flex-1 min-w-[120px]",
    );

    return (
        <section className="py-12 md:py-14 bg-white">
            <div
                className={
                    wide
                        ? "w-[95%] max-w-[1920px] mx-auto px-4 xl:px-8"
                        : "container mx-auto px-4 xl:px-8 max-w-7xl"
                }
            >
                <div className="mb-6 md:mb-8">
                    <span className="inline-block text-primary font-bold text-sm tracking-wider uppercase mb-2">
                        {eyebrow}
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-[1.15] mb-3">
                        {titleLine1}{" "}
                        <span className="text-primary">{titleGreen}</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 max-w-2xl leading-relaxed">{description}</p>
                </div>

                {mounted ? (
                    <Tabs defaultValue={tabs[0].id} className="w-full">
                        <TabsList className={tabListClass}>
                            {tabs.map((service) => (
                                <TabsTrigger
                                    key={service.id}
                                    value={service.id}
                                    className={tabTriggerClass}
                                >
                                    {service.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {tabs.map((service) => (
                            <TabsContent
                                key={service.id}
                                value={service.id}
                                className="mt-5 focus-visible:ring-0 focus-visible:outline-none"
                            >
                                <TabPanel service={service} />
                            </TabsContent>
                        ))}
                    </Tabs>
                ) : (
                    <div className="w-full" suppressHydrationWarning>
                        <div
                            className={tabListClass}
                            role="tablist"
                            aria-label="Service types"
                        >
                            {tabs.map((service, index) => (
                                <div
                                    key={service.id}
                                    role="tab"
                                    aria-selected={index === 0}
                                    className={cn(
                                        tabTriggerClass,
                                        "text-center",
                                        index === 0
                                            ? "bg-primary text-white shadow-md"
                                            : "text-gray-600",
                                    )}
                                >
                                    {service.label}
                                </div>
                            ))}
                        </div>
                        <div className="mt-5">
                            <TabPanel service={tabs[0]} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

function TabPanel({ service }: { service: ServiceInDepthTabItem }) {
    const Icon = service.Icon;

    return (
        <div className="grid lg:grid-cols-2 gap-6 items-stretch bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-5 md:p-6">
            <div className="flex flex-col justify-between gap-4 py-1">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 mb-4">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                            <Icon className="w-3.5 h-3.5 text-white" />
                        </span>
                        <span className="text-sm font-bold text-primary">{service.label}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#111827] mb-1.5 leading-tight">
                        {service.title}
                    </h3>
                    <p className="text-sm font-medium text-primary mb-2">{service.subtitle}</p>
                    <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                        {service.description}
                    </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-100/50">
                    <h4 className="text-sm font-bold text-[#111827] mb-3">
                        What this service includes
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                        {service.bullets.map((bullet) => (
                            <div key={bullet} className="flex items-start gap-3">
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <p className="text-sm text-gray-600 leading-relaxed">{bullet}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Button
                    asChild
                    className="w-full sm:w-auto self-start rounded-full bg-primary hover:bg-primary/90 text-white px-5 py-4 text-sm font-medium shadow-lg shadow-primary/20 transition-all"
                >
                    <Link href="/contact-us">{service.ctaText}</Link>
                </Button>
            </div>

            <div className="relative rounded-2xl overflow-hidden min-h-[200px] md:min-h-[260px] lg:min-h-[300px] max-h-[340px] bg-gray-100 order-first lg:order-last">
                <Image src={service.image} alt={service.label} fill className="object-cover" />
            </div>
        </div>
    );
}
