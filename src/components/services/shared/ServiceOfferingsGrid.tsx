import { siteServices } from "@/data/siteServices";
import { ServiceOfferingItem } from "./ServiceOfferingItem";

const GREEN = "#00b050";

type ServiceOfferingsGridProps = {
    /** Current page path — that service is hidden so users browse others */
    currentHref: string;
    eyebrow?: string;
    title?: string;
    description?: string;
};

/**
 * 4-column responsive grid of facility services (same UI as commercial-cleaning / header mega menu).
 */
export function ServiceOfferingsGrid({
    currentHref,
    eyebrow = "Our services",
    title = "More ways we support your facility",
    description = "Explore specialist cleaning across education, healthcare, industrial, hospitality, and more—delivered with the same Skill City standards.",
}: ServiceOfferingsGridProps) {
    const items = siteServices.filter((s) => s.href !== currentHref);

    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12">
                    {items.map((service) => (
                        <ServiceOfferingItem key={service.href} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
