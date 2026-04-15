"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, doc, updateDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";
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
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { toast } from "sonner";
import { AdminTablePageSkeleton } from "@/components/ui/loading-skeletons";

interface UserData {
    id: string;
    email: string;
    role: string;
    isApproved: boolean;
    createdAt: Timestamp;
}

export default function UsersPage() {
    const [users, setUsers] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const q = query(collection(db, "users"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as UserData[];
            setUsers(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching users:", error);
            toast.error("Failed to load users");
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const toggleApproval = async (userId: string, currentStatus: boolean) => {
        try {
            const userRef = doc(db, "users", userId);
            await updateDoc(userRef, { isApproved: !currentStatus });
            toast.success(`User ${!currentStatus ? 'approved' : 'unapproved'} successfully`);
        } catch (error) {
            console.error("Error updating user status:", error);
            toast.error("Failed to update user status");
        }
    };

    const filteredUsers = users.filter((user) =>
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="p-1 md:p-0">
                <AdminTablePageSkeleton columns={5} rows={6} filterToolbar="search" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">User Management</h2>
                    <span className="text-sm text-gray-500">{filteredUsers.length} users</span>
                </div>

                <div className="flex w-full md:w-auto">
                    <Input
                        placeholder="Search emails..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full md:w-[300px]"
                    />
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date Joined</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredUsers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    No users found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="whitespace-nowrap font-medium">
                                        {user.createdAt ? format(user.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell className="capitalize">{user.role}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={user.isApproved ? "default" : "secondary"}
                                            className={user.isApproved ? "bg-green-600 hover:bg-green-700" : "bg-yellow-500 hover:bg-yellow-600 text-white"}
                                        >
                                            {user.isApproved ? "Approved" : "Pending"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant={user.isApproved ? "destructive" : "default"}
                                            size="sm"
                                            onClick={() => toggleApproval(user.id, user.isApproved)}
                                            className="h-8"
                                        >
                                            {user.isApproved ? (
                                                <>
                                                    <X className="mr-2 h-4 w-4" /> Revoke
                                                </>
                                            ) : (
                                                <>
                                                    <Check className="mr-2 h-4 w-4" /> Approve
                                                </>
                                            )}
                                        </Button>
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
