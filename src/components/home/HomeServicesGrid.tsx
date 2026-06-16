import { ServiceOfferingsGrid } from "@/components/services/shared/ServiceOfferingsGrid";

export default function HomeServicesGrid() {
    return (
        <ServiceOfferingsGrid
            variant="pill-list"
            eyebrow="Our services"
            title="Cleaning solutions for every need"
            description="Browse our most popular services. Choose a service to see what’s included and request a tailored quote."
        />
    );
}

