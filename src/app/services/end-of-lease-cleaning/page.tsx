import { EndOfLeaseCleaningClient } from "@/components/services/end-of-lease-cleaning/EndOfLeaseCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "End of Lease Cleaning Melbourne | Skill City",
    description: "Detailed end of lease cleaning designed to meet property manager expectations and deliver full bond returns.",
};

export default function EndOfLeaseCleaningPage() {
    return <EndOfLeaseCleaningClient />;
}
