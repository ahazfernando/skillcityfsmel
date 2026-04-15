import { AdminTablePageSkeleton } from "@/components/ui/loading-skeletons";

export default function Loading() {
    return <AdminTablePageSkeleton columns={7} rows={8} filterToolbar="triple" />;
}
