"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

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
}: ServiceInDepthTabsProps) {
    if (!tabs.length) return null;

    return (
        <section className="py-16 md:py-20 bg-white">
            <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
                <div className="mb-8 md:mb-12">
                    <span className="inline-block text-[#00b050] font-bold text-sm tracking-wider uppercase mb-2">
                        {eyebrow}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827] leading-tight mb-4">
                        {titleLine1}
                        <br />
                        <span className="text-[#00b050]">{titleGreen}</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">{description}</p>
                </div>

                <Tabs defaultValue={tabs[0].id} className="w-full">
                    <TabsList className="w-full h-auto flex flex-wrap justify-start md:justify-center lg:justify-between gap-2 md:gap-3 bg-gray-50 p-2 rounded-2xl md:rounded-full border border-gray-100">
                        {tabs.map((service) => (
                            <TabsTrigger
                                key={service.id}
                                value={service.id}
                                className="flex-1 min-w-[140px] rounded-xl md:rounded-full px-4 py-3 text-sm font-semibold data-[state=active]:bg-[#00b050] data-[state=active]:text-white data-[state=active]:shadow-md text-gray-600 hover:text-gray-900 transition-all"
                            >
                                {service.label}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {tabs.map((service) => {
                        const Icon = service.Icon;
                        return (
                            <TabsContent
                                key={service.id}
                                value={service.id}
                                className="mt-8 focus-visible:ring-0 focus-visible:outline-none"
                            >
                                <div className="grid lg:grid-cols-2 gap-8 items-stretch bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/40 p-6 md:p-8">
                                    <div className="flex flex-col justify-between gap-6 py-1">
                                        <div>
                                            <div className="inline-flex items-center gap-2 rounded-full bg-[#e5f7ed] px-4 py-1.5 mb-6">
                                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00b050]">
                                                    <Icon className="w-3.5 h-3.5 text-white" />
                                                </span>
                                                <span className="text-sm font-bold text-[#00b050]">{service.label}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-[#111827] mb-2 leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-base font-medium text-[#00b050] mb-3">{service.subtitle}</p>
                                            <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100/50">
                                            <h4 className="text-base font-bold text-[#111827] mb-4">
                                                What this service includes
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {service.bullets.map((bullet) => (
                                                    <div key={bullet} className="flex items-start gap-3">
                                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00b050]" />
                                                        <p className="text-sm text-gray-600 leading-relaxed">{bullet}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <Button
                                            asChild
                                            className="w-full sm:w-auto self-start rounded-full bg-[#00b050] hover:bg-[#009b46] text-white px-6 py-5.5 text-sm md:text-base font-medium shadow-lg shadow-[#00b050]/20 transition-all"
                                        >
                                            <Link href="/contact-us">{service.ctaText}</Link>
                                        </Button>
                                    </div>

                                    <div className="relative rounded-2xl overflow-hidden min-h-[250px] md:min-h-[350px] lg:min-h-[400px] max-h-[450px] bg-gray-100 order-first lg:order-last">
                                        <Image
                                            src={service.image}
                                            alt={service.label}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
}
