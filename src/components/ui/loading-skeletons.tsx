import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

/** Generic marketing page (hero + blocks) — route transitions & slow networks */
export function PageLoadingSkeleton({ className }: { className?: string }) {
    return (
        <div className={cn("container-custom py-10 md:py-16 space-y-10", className)}>
            <div className="space-y-4 max-w-3xl mx-auto text-center">
                <Skeleton className="h-6 w-32 mx-auto rounded-full" />
                <Skeleton className="h-10 md:h-12 w-full max-w-xl mx-auto" />
                <Skeleton className="h-4 w-full max-w-lg mx-auto" />
                <Skeleton className="h-4 w-full max-w-md mx-auto" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="rounded-2xl border border-border overflow-hidden space-y-4 p-4">
                        <Skeleton className="h-40 w-full rounded-xl" />
                        <Skeleton className="h-5 w-4/5" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-2/3" />
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Login / signup form area (inside admin public card layout) */
export function AdminAuthCardSkeleton() {
    return (
        <div className="w-full space-y-6">
            <div className="space-y-2">
                <Skeleton className="h-9 w-56" />
                <Skeleton className="h-4 w-full max-w-sm" />
            </div>
            <div className="space-y-4 pt-2">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-14" />
                    <Skeleton className="h-11 w-full rounded-md" />
                </div>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-11 w-full rounded-md" />
                </div>
                <Skeleton className="h-11 w-full rounded-md mt-2" />
            </div>
            <Skeleton className="h-4 w-48 mx-auto" />
        </div>
    );
}

/** Full-screen admin shell while auth / approval is resolving */
export function AdminShellSkeleton() {
    return (
        <div className="min-h-screen flex w-full bg-background">
            <div className="hidden md:flex w-[var(--sidebar-width,16rem)] flex-col border-r border-border p-4 gap-3 shrink-0">
                <div className="flex items-center gap-2 px-2 py-2 mb-2">
                    <Skeleton className="size-8 rounded-lg" />
                    <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-16" />
                    </div>
                </div>
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-9 w-full rounded-md" />
                ))}
            </div>
            <div className="flex-1 flex flex-col min-w-0">
                <div className="h-16 shrink-0 border-b border-border flex items-center gap-3 px-4">
                    <Skeleton className="h-8 w-8 rounded-md" />
                    <Skeleton className="h-4 w-px" />
                    <Skeleton className="h-4 w-40" />
                </div>
                <div className="flex-1 p-4 md:p-6 space-y-6">
                    <Skeleton className="h-8 w-48 max-w-full" />
                    <Skeleton className="h-64 w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
}

/** /admin overview stats */
export function AdminOverviewSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-8 w-40" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Array.from({ length: 3 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-card rounded-lg border border-border shadow-sm p-6 space-y-3"
                    >
                        <Skeleton className="h-5 w-36" />
                        <Skeleton className="h-10 w-20" />
                    </div>
                ))}
            </div>
        </div>
    );
}

type FilterToolbar = "triple" | "search";

export function DataTableSkeleton({
    columns,
    rows = 8,
    className,
}: {
    columns: number;
    rows?: number;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden",
                className
            )}
        >
            <Table>
                <TableHeader>
                    <TableRow>
                        {Array.from({ length: columns }).map((_, i) => (
                            <TableHead key={i}>
                                <Skeleton className="h-4 w-20" />
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({ length: rows }).map((_, r) => (
                        <TableRow key={r}>
                            {Array.from({ length: columns }).map((_, c) => (
                                <TableCell key={c}>
                                    <Skeleton className="h-4 w-full max-w-[120px]" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

/** Toolbar + table — matches inquiries / users admin list pages */
export function AdminTablePageSkeleton({
    columns,
    rows = 8,
    filterToolbar = "triple",
}: {
    columns: number;
    rows?: number;
    filterToolbar?: FilterToolbar;
}) {
    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-48" />
                    <Skeleton className="h-4 w-24" />
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center w-full md:w-auto md:space-x-2">
                    {filterToolbar === "triple" ? (
                        <>
                            <Skeleton className="h-10 w-full sm:w-[200px]" />
                            <Skeleton className="h-10 w-full sm:w-[150px]" />
                            <Skeleton className="h-10 w-full sm:w-[150px]" />
                        </>
                    ) : (
                        <Skeleton className="h-10 w-full md:w-[300px]" />
                    )}
                </div>
            </div>
            <DataTableSkeleton columns={columns} rows={rows} />
        </div>
    );
}

/** Blog listing grid */
export function BlogGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <div className="container-custom py-8 md:py-12 space-y-10">
            <div className="flex flex-wrap justify-center gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-9 w-28 rounded-full" />
                ))}
            </div>
            <Skeleton className="h-8 w-56" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array.from({ length: count }).map((_, i) => (
                    <div key={i} className="space-y-4">
                        <Skeleton className="h-56 w-full rounded-2xl" />
                        <Skeleton className="h-6 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <div className="flex items-center gap-3 pt-2">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="space-y-2 flex-1">
                                <Skeleton className="h-4 w-28" />
                                <Skeleton className="h-3 w-20" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/** Single blog article (matches two-column layout) */
export function BlogPostSkeleton() {
    return (
        <div className="bg-background min-h-screen pt-20">
            <div className="border-b border-border">
                <div className="container mx-auto px-4 py-4">
                    <Skeleton className="h-4 w-full max-w-md" />
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-[1fr,340px] gap-12">
                    <div className="space-y-6">
                        <Skeleton className="aspect-video rounded-2xl w-full" />
                        <Skeleton className="h-4 w-56" />
                        <Skeleton className="h-10 md:h-12 w-full max-w-3xl" />
                        <div className="space-y-3">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton key={i} className="h-4 w-full" />
                            ))}
                        </div>
                        <Skeleton className="h-32 w-full rounded-xl" />
                    </div>
                    <aside className="space-y-6">
                        <div className="rounded-2xl border border-border bg-card p-6 space-y-5">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="flex gap-3">
                                    <Skeleton className="h-5 w-5 shrink-0 rounded" />
                                    <div className="space-y-2 flex-1">
                                        <Skeleton className="h-3 w-20" />
                                        <Skeleton className="h-4 w-32" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Skeleton className="h-48 w-full rounded-2xl" />
                    </aside>
                </div>
            </div>
        </div>
    );
}

/** Service detail / listing hero + sections */
export function ServicesPageSkeleton() {
    return (
        <div className="space-y-0">
            <div className="relative overflow-hidden bg-muted/30 border-b border-border">
                <div className="container-custom py-12 md:py-20 space-y-6">
                    <Skeleton className="h-6 w-40 rounded-full" />
                    <Skeleton className="h-10 md:h-14 w-full max-w-2xl" />
                    <Skeleton className="h-5 w-full max-w-xl" />
                    <div className="flex gap-3 pt-2">
                        <Skeleton className="h-11 w-40 rounded-full" />
                        <Skeleton className="h-11 w-36 rounded-full" />
                    </div>
                </div>
            </div>
            <div className="container-custom py-12 md:py-16 space-y-8">
                <Skeleton className="h-7 w-64" />
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="space-y-3">
                        <Skeleton className="h-5 w-full max-w-md" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                    </div>
                ))}
            </div>
        </div>
    );
}
