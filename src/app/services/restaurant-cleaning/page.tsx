import { RestaurantCleaningClient } from "@/components/services/restaurant-cleaning/RestaurantCleaningClient";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Restaurant & Kitchen Cleaning Melbourne | Skill City",
    description: "Deep cleaning for commercial kitchens, restaurants, and food service environments.",
};

export default function RestaurantCleaningPage() {
    return <RestaurantCleaningClient />;
}
