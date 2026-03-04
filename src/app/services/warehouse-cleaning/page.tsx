import { WarehouseCleaningClient } from "@/components/services/warehouse-cleaning/WarehouseCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Warehouse & Factory Cleaning Melbourne | Skill City",
    description: "Large-scale cleaning for warehouses and storage facilities. Keeping your logistics running smoothly.",
};

export default function WarehouseCleaningPage() {
    return <WarehouseCleaningClient />;
}
