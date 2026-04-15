"use client";

import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot, Timestamp, doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { format } from "date-fns";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Copy, Mail, MapPin, MessageSquare, Phone, User } from "lucide-react";
import { AdminTablePageSkeleton } from "@/components/ui/loading-skeletons";

interface Inquiry {
    id: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    state?: string;
    postalCode?: string;
    status: string;
    createdAt: Timestamp;
}

export default function InquiriesPage() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [serviceFilter, setServiceFilter] = useState("all");
    const [stateFilter, setStateFilter] = useState("all");

    useEffect(() => {
        const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            })) as Inquiry[];
            setInquiries(data);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching inquiries:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const updateStatus = async (inquiryId: string, newStatus: string) => {
        try {
            const inquiryRef = doc(db, "inquiries", inquiryId);
            await updateDoc(inquiryRef, { status: newStatus });

            // Update local state if selected (works with onSnapshot)
            if (selectedInquiry && selectedInquiry.id === inquiryId) {
                setSelectedInquiry({ ...selectedInquiry, status: newStatus });
            }
        } catch (error) {
            console.error("Error updating status:", error);
        }
    };

    // Derived state for filters
    const filteredInquiries = inquiries.filter((inquiry) => {
        const matchesSearch =
            inquiry.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            inquiry.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (inquiry.phone && inquiry.phone.toLowerCase().includes(searchTerm.toLowerCase())) ||
            (inquiry.message && inquiry.message.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesService = serviceFilter === "all" || inquiry.service === serviceFilter;
        const matchesState = stateFilter === "all" || inquiry.state === stateFilter;

        return matchesSearch && matchesService && matchesState;
    });

    const uniqueServices = Array.from(new Set(inquiries.map(i => i.service).filter(Boolean)));
    const uniqueStates = Array.from(new Set(inquiries.map(i => i.state).filter(Boolean)));

    if (loading) {
        return (
            <div className="p-1 md:p-0">
                <AdminTablePageSkeleton columns={7} rows={8} filterToolbar="triple" />
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Inquiries</h2>
                    <span className="text-sm text-gray-500">{filteredInquiries.length} results</span>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:items-center w-full md:w-auto md:space-x-2">
                    <Input
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full sm:w-[200px]"
                    />
                    <Select value={serviceFilter} onValueChange={setServiceFilter}>
                        <SelectTrigger className="w-full sm:w-[150px]">
                            <SelectValue placeholder="Service" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Services</SelectItem>
                            {uniqueServices.map((service) => (
                                <SelectItem key={service} value={service}>{service}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={stateFilter} onValueChange={setStateFilter}>
                        <SelectTrigger className="w-full sm:w-[150px]">
                            <SelectValue placeholder="State" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All States</SelectItem>
                            {uniqueStates.map((state) => (
                                <SelectItem key={state} value={state!}>{state}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Message</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredInquiries.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center">
                                    No inquiries found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredInquiries.map((inquiry) => (
                                <TableRow
                                    key={inquiry.id}
                                    className="cursor-pointer hover:bg-muted/50"
                                    onClick={() => setSelectedInquiry(inquiry)}
                                >
                                    <TableCell className="whitespace-nowrap font-medium">
                                        {inquiry.createdAt ? format(inquiry.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                    </TableCell>
                                    <TableCell>{inquiry.name}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{inquiry.service}</Badge>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col text-sm">
                                            <span>{inquiry.email}</span>
                                            <span className="text-gray-500">{inquiry.phone}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col text-sm">
                                            <span>{inquiry.state}</span>
                                            <span className="text-gray-500">{inquiry.postalCode}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                inquiry.status === "new" ? "default" :
                                                    inquiry.status === "converted" ? "outline" :
                                                        inquiry.status === "read" ? "secondary" : "outline"
                                            }
                                            className={
                                                inquiry.status === "converted" ? "bg-green-100 text-green-800 hover:bg-green-100 border-green-200" : ""
                                            }
                                        >
                                            {inquiry.status || "new"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right max-w-xs truncate" title={inquiry.message}>
                                        {inquiry.message}
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <Dialog open={!!selectedInquiry} onOpenChange={(open) => !open && setSelectedInquiry(null)}>
                <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-white dark:bg-gray-800 border-0 shadow-2xl rounded-2xl">
                    <DialogHeader className="p-6 pb-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MessageSquare className="h-5 w-5" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <DialogTitle className="text-xl font-bold">Inquiry Details</DialogTitle>
                                    <DialogDescription className="text-sm text-gray-500">
                                        Received on {selectedInquiry?.createdAt ? format(selectedInquiry.createdAt.toDate(), "MMMM do, yyyy 'at' h:mm a") : "N/A"}
                                    </DialogDescription>
                                </div>
                            </div>

                            <Select
                                value={selectedInquiry?.status || "new"}
                                onValueChange={(value) => selectedInquiry && updateStatus(selectedInquiry.id, value)}
                            >
                                <SelectTrigger className="w-[140px] h-8 text-xs uppercase font-semibold">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="read">Read</SelectItem>
                                    <SelectItem value="converted">Converted</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </DialogHeader>

                    {selectedInquiry && (
                        <div className="p-6 pt-2 space-y-6">
                            {/* Main Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Contact Info */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Contact Information</h3>

                                    {/* Name */}
                                    <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                                        <User className="h-5 w-5 text-gray-400" />
                                        <div className="font-medium">{selectedInquiry.name}</div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 group">
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                            <a href={`mailto:${selectedInquiry.email}`} className="font-medium truncate hover:text-primary transition-colors">
                                                {selectedInquiry.email}
                                            </a>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => {
                                                navigator.clipboard.writeText(selectedInquiry.email);
                                            }}
                                            title="Copy Email"
                                        >
                                            <Copy className="h-4 w-4 text-gray-500" />
                                        </Button>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 group">
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-gray-400" />
                                            <a href={`tel:${selectedInquiry.phone}`} className="font-medium hover:text-primary transition-colors">
                                                {selectedInquiry.phone}
                                            </a>
                                        </div>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => {
                                                navigator.clipboard.writeText(selectedInquiry.phone);
                                            }}
                                            title="Copy Phone"
                                        >
                                            <Copy className="h-4 w-4 text-gray-500" />
                                        </Button>
                                    </div>
                                </div>

                                {/* Service & Location */}
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Service & Location</h3>

                                    {/* Service */}
                                    <div className="p-3 rounded-xl bg-primary/5 border border-primary/10">
                                        <div className="text-xs text-primary font-semibold uppercase mb-1">Service Type</div>
                                        <div className="font-medium text-lg text-primary text-gray-900 dark:text-gray-100">
                                            {selectedInquiry.service}
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                                        <div className="flex flex-col">
                                            <span className="font-medium">{selectedInquiry.state}</span>
                                            <span className="text-sm text-gray-500">{selectedInquiry.postalCode}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Message</h3>
                                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 text-sm leading-relaxed whitespace-pre-wrap text-gray-700 dark:text-gray-300 min-h-[100px]">
                                    {selectedInquiry.message}
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
