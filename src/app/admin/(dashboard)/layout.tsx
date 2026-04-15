"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { AdminShellSkeleton } from "@/components/ui/loading-skeletons";

export default function AdminDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [approvalChecked, setApprovalChecked] = useState(false);

    useEffect(() => {
        if (!loading && !user) {
            router.push("/admin/login");
            return;
        }
        if (!user) return;

        const checkApproval = async () => {
            try {
                const userDoc = await getDoc(doc(db, "users", user.uid));
                if (!userDoc.exists()) {
                    await signOut(auth);
                    router.push("/admin/login");
                    return;
                }
                const data = userDoc.data();
                if (data.role !== "admin" || !data.isApproved) {
                    await signOut(auth);
                    router.push("/admin/login");
                    return;
                }
            } catch {
                await signOut(auth);
                router.push("/admin/login");
                return;
            }
            setApprovalChecked(true);
        };

        checkApproval();
    }, [user, loading, router]);

    if (loading) {
        return <AdminShellSkeleton />;
    }

    if (!user) return null;

    if (!approvalChecked) {
        return <AdminShellSkeleton />;
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b px-4">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbLink href="/admin">
                                        Admin
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Dashboard</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <main className="flex-1 flex flex-col gap-4 p-4 pt-0 mt-4">
                    {children}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}
