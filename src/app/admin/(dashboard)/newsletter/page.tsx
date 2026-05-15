"use client";

import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query, Timestamp } from "firebase/firestore";
import { format } from "date-fns";
import { toast } from "sonner";

import { db } from "@/lib/firebase";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AdminTablePageSkeleton } from "@/components/ui/loading-skeletons";

interface NewsletterSubscriber {
    id: string;
    email: string;
    source?: string;
    createdAt?: Timestamp;
}

export default function NewsletterPage() {
    const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const q = query(collection(db, "newsletterSubscribers"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data = snapshot.docs.map((docSnap) => ({
                    id: docSnap.id,
                    ...docSnap.data(),
                })) as NewsletterSubscriber[];
                setSubscribers(data);
                setLoading(false);
            },
            (error) => {
                console.error("Error fetching newsletter subscribers:", error);
                toast.error("Failed to load newsletter subscribers");
                setLoading(false);
            },
        );

        return () => unsubscribe();
    }, []);

    const filteredSubscribers = subscribers.filter((subscriber) =>
        subscriber.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (loading) {
        return (
            <div className="p-1 md:p-0">
                <AdminTablePageSkeleton columns={3} rows={8} filterToolbar="search" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Newsletter</h2>
                    <span className="text-sm text-gray-500">{filteredSubscribers.length} subscribers</span>
                </div>

                <Input
                    placeholder="Search emails..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full md:w-[300px]"
                />
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Subscribed</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Source</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredSubscribers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={3} className="text-center py-8 text-muted-foreground">
                                    No newsletter subscribers found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredSubscribers.map((subscriber) => (
                                <TableRow key={subscriber.id}>
                                    <TableCell className="whitespace-nowrap">
                                        {subscriber.createdAt
                                            ? format(subscriber.createdAt.toDate(), "MMM d, yyyy h:mm a")
                                            : "—"}
                                    </TableCell>
                                    <TableCell className="font-medium">{subscriber.email}</TableCell>
                                    <TableCell>
                                        <Badge variant="secondary" className="capitalize">
                                            {subscriber.source || "unknown"}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
