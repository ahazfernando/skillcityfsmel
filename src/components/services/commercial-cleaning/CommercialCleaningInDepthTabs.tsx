"use client";

import { Briefcase, Store, Factory, Stethoscope } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const IMG = "/CommercialCleaning/WhatsApp Image 2026-01-14 at 7.26.15 PM (1).jpeg";

export function CommercialCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="How Skill City Facility Solutions"
            titleGreen="maintains commercial spaces in detail"
            description="Switch between services to see exactly what is included, how we operate on-site, and what you can expect when you partner with us for your commercial cleaning needs."
            tabs={[
                {
                    id: "office-cleaning",
                    label: "Office Cleaning",
                    title: "A productive, pristine workspace.",
                    subtitle: "Daily or weekly maintenance for professional environments.",
                    description:
                        "We ensure your office remains a healthy, welcoming environment for staff and visitors. From boardrooms to breakrooms, our teams operate discreetly and efficiently.",
                    bullets: [
                        "Workstation and desk sanitisation",
                        "Emptying bins and recycling management",
                        "Kitchen and breakroom deep cleaning",
                        "Restroom sanitisation and restocking",
                    ],
                    image: IMG,
                    Icon: Briefcase,
                    ctaText: "Get an office cleaning quote",
                },
                {
                    id: "retail-cleaning",
                    label: "Retail Space Cleaning",
                    title: "Make a lasting first impression.",
                    subtitle: "Immaculate presentation for your storefront.",
                    description:
                        "In retail, cleanliness directly impacts sales. We keep your shop floors shining, displays dust-free, and fitting rooms spotless to enhance the customer experience.",
                    bullets: [
                        "High-traffic hard floor care and polishing",
                        "Interior window and glass display cleaning",
                        "Fitting room and public restroom maintenance",
                        "After-hours cleaning to avoid disruption",
                    ],
                    image: IMG,
                    Icon: Store,
                    ctaText: "Enquire about retail cleaning",
                },
                {
                    id: "industrial-cleaning",
                    label: "Industrial & Warehouse",
                    title: "Heavy-duty cleaning for tough environments.",
                    subtitle: "Safety-first cleaning for factories and warehouses.",
                    description:
                        "Industrial sites require specialised equipment and safety training. We handle large-scale sweeping, degreasing, and high-level dusting to keep your operations compliant and safe.",
                    bullets: [
                        "Machine scrubbing for concrete flooring",
                        "High-level dusting of warehouse racking and piping",
                        "Industrial degreasing and spill response",
                        "Staff amenities and locker room sanitisation",
                    ],
                    image: IMG,
                    Icon: Factory,
                    ctaText: "Discuss industrial cleaning",
                },
                {
                    id: "medical-cleaning",
                    label: "Medical & Clinical",
                    title: "Hospital-grade sanitisation standards.",
                    subtitle: "Protecting patients and staff with rigorous protocols.",
                    description:
                        "Medical facilities demand the highest hygiene levels. Our trained staff use TGA-approved hospital-grade disinfectants and strict cross-contamination prevention protocols.",
                    bullets: [
                        "Terminal cleaning for clinical and surgical areas",
                        "Waiting room and reception sanitisation",
                        "Safe handling protocols for clinical waste areas",
                        "Infection control and cross-contamination prevention",
                    ],
                    image: IMG,
                    Icon: Stethoscope,
                    ctaText: "Consult on medical cleaning",
                },
            ]}
        />
    );
}
