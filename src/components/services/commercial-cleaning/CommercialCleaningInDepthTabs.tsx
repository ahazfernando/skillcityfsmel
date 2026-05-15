"use client";

import { GraduationCap, Store, Factory, Stethoscope } from "lucide-react";
import { ServiceInDepthTabs } from "@/components/services/shared/ServiceInDepthTabs";

const EDUCATION_IMG = "/newimages/SchoolWindowCleaning.jpg";
const RETAIL_IMG = "/newimages/KitchenCleaning.jpg";
const INDUSTRIAL_IMG = "/newimages/commercialcleaningimage.jpg";
const MEDICAL_IMG = "/newimages/Screenshot 2026-05-12 at 10.26.39 AM.png";

export function CommercialCleaningInDepthTabs() {
    return (
        <ServiceInDepthTabs
            eyebrow="In-depth services"
            titleLine1="How Skill City Facility Solutions"
            titleGreen="maintains commercial spaces in detail"
            description="Switch between services to see exactly what is included, how we operate on-site, and what you can expect when you partner with us for your commercial cleaning needs."
            tabs={[
                {
                    id: "education-cleaning",
                    label: "Education Cleaning",
                    title: "A productive, pristine workspace.",
                    subtitle: "Daily or weekly maintenance for schools and learning environments.",
                    description:
                        "We keep classrooms, common areas, and staff spaces clean and welcoming for students, teachers, and visitors. Our teams work around school schedules with minimal disruption.",
                    bullets: [
                        "Classroom and desk sanitisation",
                        "Hallways, stairwells, and common area cleaning",
                        "Washroom sanitisation and restocking",
                        "After-hours and holiday-period cleaning",
                    ],
                    image: EDUCATION_IMG,
                    Icon: GraduationCap,
                    ctaText: "Get an education cleaning quote",
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
                    image: RETAIL_IMG,
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
                    image: INDUSTRIAL_IMG,
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
                    image: MEDICAL_IMG,
                    Icon: Stethoscope,
                    ctaText: "Consult on medical cleaning",
                },
            ]}
        />
    );
}
