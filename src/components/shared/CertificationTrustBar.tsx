import Image from "next/image";

import { cn } from "@/lib/utils";

export const CERTIFICATION_LOGOS = [
    {
        src: "/licenses/Logo_Cm3_Contractor-Management-Prequalification.svg",
        alt: "CM3 contractor management prequalification",
    },
    {
        src: "/licenses/TestandTagW1.png",
        alt: "Electrical test and tag certification",
    },
    {
        src: "/licenses/LabourHire.png",
        alt: "Victorian Labour Hire Authority licence",
    },
    {
        src: "/accredition/JointAccredtionJASANZZ1.png",
        alt: "JAS-ANZ joint accreditation",
    },
] as const;

export const DEFAULT_CERTIFICATION_CAPTION =
    "Certified for safe, compliant facility management in Australia";

type CertificationTrustBarProps = {
    /** Light: grey text on pale backgrounds. Dark: frosted strip on green heroes. White: solid card for green heroes. */
    variant?: "light" | "dark" | "white";
    align?: "start" | "center";
    /** Tighter row so all marks stay on one line on typical widths. */
    compact?: boolean;
    /** Grid: equal logo tiles in a responsive grid (best for four marks). */
    layout?: "row" | "grid";
    /** Override heading text above the logos. */
    caption?: string;
    className?: string;
};

export function CertificationTrustBar({
    variant = "light",
    align = "start",
    compact = false,
    layout = "row",
    caption = DEFAULT_CERTIFICATION_CAPTION,
    className,
}: CertificationTrustBarProps) {
    const isDark = variant === "dark";
    const isWhite = variant === "white";
    const isGrid = layout === "grid";

    return (
        <div className={cn(className)}>
            <p
                className={cn(
                    "text-sm font-medium leading-snug",
                    isGrid ? "mb-4" : "mb-3",
                    isDark && "text-green-100/95",
                    isWhite && "text-gray-600",
                    variant === "light" && "text-muted-foreground",
                    align === "center" ? "text-center" : "text-center sm:text-left",
                )}
            >
                {caption}
            </p>

            <div
                className={cn(
                    isGrid
                        ? "grid grid-cols-2 items-center gap-x-6 gap-y-4 sm:grid-cols-4 sm:gap-x-8"
                        : cn(
                              "flex items-center",
                              compact
                                  ? "min-w-0 gap-2 sm:gap-3 md:gap-4"
                                  : "flex-wrap gap-6 md:gap-8",
                              align === "center" ? "justify-center" : "justify-center sm:justify-start",
                              compact && "flex-nowrap overflow-x-auto pb-1 sm:overflow-visible sm:pb-0",
                          ),
                )}
            >
                {CERTIFICATION_LOGOS.map((logo) => (
                    <div
                        key={logo.src}
                        className={cn(
                            "flex items-center",
                            isGrid ? "h-10 justify-start sm:justify-center" : cn("shrink-0", compact ? "h-9 sm:h-10" : "h-10"),
                        )}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={compact ? 120 : 140}
                            height={compact ? 36 : 44}
                            className={cn(
                                "w-auto object-contain",
                                isGrid
                                    ? "h-8 max-w-[120px] sm:h-9 sm:max-w-[140px]"
                                    : compact
                                      ? "h-6 max-w-[96px] sm:h-7 sm:max-w-[110px]"
                                      : "h-7 max-w-[120px] sm:h-8 sm:max-w-[140px]",
                            )}
                            unoptimized={logo.src.endsWith(".svg")}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
