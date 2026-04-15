import Link from "next/link";
import type { SiteService } from "@/data/siteServices";
import { cn } from "@/lib/utils";

type ServiceOfferingItemProps = SiteService & {
    className?: string;
};

/**
 * Single service row: green circular icon, bold title, muted description (matches commercial-cleaning mega-menu style).
 */
export function ServiceOfferingItem({
    icon: Icon,
    title,
    description,
    href,
    className,
}: ServiceOfferingItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "group flex gap-4 text-left rounded-xl p-2 -m-2 transition-colors hover:bg-[#f0fdf4]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00b050]/30",
                className
            )}
        >
            <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#e5f7ed] flex items-center justify-center border border-[#bce8d0]/60">
                <Icon className="w-7 h-7 text-[#00b050]" strokeWidth={2} aria-hidden />
            </div>
            <div className="min-w-0 pt-0.5">
                <h3 className="font-bold text-[#111827] text-[15px] leading-snug group-hover:text-[#00b050] transition-colors">
                    {title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{description}</p>
            </div>
        </Link>
    );
}
