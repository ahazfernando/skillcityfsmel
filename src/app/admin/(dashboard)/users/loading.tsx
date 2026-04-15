import { AdminTablePageSkeleton } from "@/components/ui/loading-skeletons";

export default function Loading() {
    return <AdminTablePageSkeleton columns={5} rows={6} filterToolbar="search" />;
}
