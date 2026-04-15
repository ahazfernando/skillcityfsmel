import type { LucideIcon } from "lucide-react";
import {
    Home,
    Hammer,
    Building2,
    Users,
    GraduationCap,
    Baby,
    Heart,
    Stethoscope,
    Factory,
    Warehouse,
    Utensils,
    Dumbbell,
    Film,
    Key,
    Building,
    Sparkles,
} from "lucide-react";

export type SiteService = {
    icon: LucideIcon;
    title: string;
    description: string;
    href: string;
};

/** All service routes — single source for nav, mega menu, and service-page grids */
export const siteServices: SiteService[] = [
    {
        icon: Home,
        title: "House Cleaning",
        description: "Complete residential cleaning for a spotless home",
        href: "/services/house-cleaning",
    },
    {
        icon: Hammer,
        title: "Builders Cleaning",
        description: "Post-construction cleanup and debris removal",
        href: "/services/builders-cleaning",
    },
    {
        icon: Building2,
        title: "Commercial Cleaning",
        description: "Comprehensive cleaning for commercial properties",
        href: "/services/commercial-cleaning",
    },
    {
        icon: Users,
        title: "Council & Community Service Cleaning",
        description: "Specialized cleaning for public and community spaces",
        href: "/services/council-cleaning",
    },
    {
        icon: GraduationCap,
        title: "School Cleaning",
        description: "Safe and hygienic environments for students",
        href: "/services/school-cleaning",
    },
    {
        icon: Baby,
        title: "Early Childhood Education Cleaning",
        description: "Gentle, non-toxic cleaning for childcare centers",
        href: "/services/early-childhood-cleaning",
    },
    {
        icon: Heart,
        title: "Aged Care Cleaning",
        description: "Rigorous sanitization for aged care facilities",
        href: "/services/aged-care-cleaning",
    },
    {
        icon: Stethoscope,
        title: "Medical / Healthcare Cleaning",
        description: "Clinical grade cleaning meeting health standards",
        href: "/services/medical-cleaning",
    },
    {
        icon: Factory,
        title: "Industrial Cleaning",
        description: "Heavy-duty cleaning for industrial sites",
        href: "/services/industrial-cleaning",
    },
    {
        icon: Warehouse,
        title: "Warehouse & Factory Cleaning",
        description: "Large-scale cleaning for storage and production",
        href: "/services/warehouse-cleaning",
    },
    {
        icon: Utensils,
        title: "Restaurant & Kitchen Cleaning",
        description: "Deep cleaning for food service environments",
        href: "/services/restaurant-cleaning",
    },
    {
        icon: Dumbbell,
        title: "Gym Cleaning",
        description: "Sanitizing workout equipment and facilities",
        href: "/services/gym-cleaning",
    },
    {
        icon: Film,
        title: "Cinema & Theater Cleaning",
        description: "Thorough cleaning between sessions and events",
        href: "/services/cinema-cleaning",
    },
    {
        icon: Key,
        title: "End of Lease Cleaning",
        description: "Comprehensive cleaning for property transitions",
        href: "/services/end-of-lease-cleaning",
    },
    {
        icon: Building,
        title: "Office Cleaning",
        description: "Professional workspace sanitization",
        href: "/services/office-cleaning",
    },
    {
        icon: Sparkles,
        title: "One-Off Cleaning",
        description: "Single deep cleans and special-event turnaround",
        href: "/services/one-off-cleaning",
    },
];
