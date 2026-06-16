import { siteServices } from "@/data/siteServices";
import { ServiceOfferingItem } from "./ServiceOfferingItem";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, type LucideIcon } from "lucide-react";

const GREEN = "#00b050";
const NAVY = "#0b2b3c";

type ServiceOfferingsGridProps = {
    /** When set, that service is hidden so users browse others on individual service pages */
    currentHref?: string;
    eyebrow?: string;
    title?: string;
    description?: string;
    variant?: "grid" | "pill-list";
};

/**
 * 4-column responsive grid of facility services (same UI as commercial-cleaning / header mega menu).
 */
export function ServiceOfferingsGrid({
    currentHref,
    eyebrow = "Our services",
    title = "More ways we support your facility",
    description = "Explore specialist cleaning across education, healthcare, industrial, hospitality, and more: delivered with the same Skill City standards.",
    variant = "grid",
}: ServiceOfferingsGridProps) {
    const items = currentHref
        ? siteServices.filter((s) => s.href !== currentHref)
        : siteServices;

    return (
        <section
            className={cn(
                "py-16 md:py-24 border-t border-gray-100",
                variant === "pill-list" ? "bg-[#f4f7f5]" : "bg-white",
            )}
        >
            <div className="container mx-auto px-4 xl:px-8 max-w-7xl">
                <div className="mb-10 md:mb-14 max-w-3xl">
                    <span
                        className="inline-block font-bold text-sm tracking-wider uppercase mb-3"
                        style={{ color: GREEN }}
                    >
                        {eyebrow}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#111827] leading-tight mb-4">
                        {title}
                    </h2>
                    <p className="text-base md:text-lg text-gray-500 leading-relaxed">{description}</p>
                </div>

                {variant === "pill-list" ? (
                    <div
                        className={cn(
                            "rounded-[28px] p-4 sm:p-6 md:p-8",
                            "border border-white/10 shadow-[0_30px_80px_rgba(6,36,51,0.35)]",
                        )}
                        style={{
                            background: `radial-gradient(900px circle at 8% 0%, rgba(0,176,80,0.20) 0%, rgba(0,0,0,0) 55%),
                            radial-gradient(800px circle at 95% 10%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0) 60%),
                            linear-gradient(180deg, ${NAVY} 0%, #061f2c 100%)`,
                        }}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                            {items.map((service) => (
                                <PillServiceItem key={service.href} {...service} />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
                        {items.map((service) => (
                            <ServiceOfferingItem key={service.href} {...service} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function PillServiceItem({
    icon: Icon,
    title,
    href,
}: {
    icon: LucideIcon;
    title: string;
    href: string;
}) {
    return (
        <Link
            href={href}
            className={cn(
                "group relative flex items-center gap-4 rounded-2xl px-5 py-4 min-h-[76px]",
                "border border-white/10 bg-white/5 backdrop-blur-md",
                "transition-all duration-200",
                "hover:bg-white/10 hover:border-white/20 hover:-translate-y-[1px]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7cf0a7]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#061f2c]",
            )}
        >
            <div
                className={cn(
                    "h-12 w-12 rounded-full flex items-center justify-center shrink-0",
                    "bg-[#c9f4d8] ring-1 ring-white/10",
                )}
            >
                <Icon className="h-6 w-6 text-[#0a6b34]" strokeWidth={2.2} aria-hidden />
            </div>
            <div className="min-w-0">
                <div className="text-white font-semibold leading-snug truncate">{title}</div>
            </div>
            <ArrowRight
                className={cn(
                    "ml-auto h-5 w-5 text-white/40 shrink-0",
                    "transition-all duration-200",
                    "group-hover:text-white/70 group-hover:translate-x-0.5",
                )}
                aria-hidden
            />
        </Link>
    );
}
