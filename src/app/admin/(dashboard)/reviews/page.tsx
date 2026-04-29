"use client";

import { useEffect, useMemo, useState } from "react";
import {
    Timestamp,
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Edit, Plus, Save, Trash2, X } from "lucide-react";
import { format } from "date-fns";

type HomepageReview = {
    id: string;
    text: string;
    name: string;
    timeAgo: string;
    rating: number;
    avatar?: string;
    createdAt?: Timestamp;
    updatedAt?: Timestamp;
};

type ReviewForm = {
    name: string;
    timeAgo: string;
    rating: string;
    text: string;
    avatar: string;
};

const initialForm: ReviewForm = {
    name: "",
    timeAgo: "",
    rating: "5",
    text: "",
    avatar: "",
};

export default function AdminReviewsPage() {
    const [reviews, setReviews] = useState<HomepageReview[]>([]);
    const [loading, setLoading] = useState(true);
    const [form, setForm] = useState<ReviewForm>(initialForm);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const q = query(collection(db, "homepageReviews"), orderBy("createdAt", "desc"));
        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const data = snapshot.docs.map((item) => ({
                    id: item.id,
                    ...item.data(),
                })) as HomepageReview[];
                setReviews(data);
                setLoading(false);
            },
            (error) => {
                console.error("Error loading homepage reviews:", error);
                toast.error("Failed to load reviews");
                setLoading(false);
            }
        );

        return () => unsubscribe();
    }, []);

    const isEditing = useMemo(() => Boolean(editingId), [editingId]);

    const resetForm = () => {
        setForm(initialForm);
        setEditingId(null);
    };

    const startEdit = (review: HomepageReview) => {
        setEditingId(review.id);
        setForm({
            name: review.name ?? "",
            timeAgo: review.timeAgo ?? "",
            rating: String(review.rating ?? 5),
            text: review.text ?? "",
            avatar: review.avatar ?? "",
        });
    };

    const validateForm = () => {
        if (!form.name.trim() || !form.text.trim() || !form.timeAgo.trim()) {
            toast.error("Name, time ago, and review text are required");
            return false;
        }

        const rating = Number(form.rating);
        if (!Number.isFinite(rating) || rating < 1 || rating > 5) {
            toast.error("Rating must be between 1 and 5");
            return false;
        }

        return true;
    };

    const handleSubmit = async () => {
        if (!validateForm()) return;
        setSubmitting(true);

        const payload = {
            name: form.name.trim(),
            timeAgo: form.timeAgo.trim(),
            text: form.text.trim(),
            rating: Number(form.rating),
            avatar: form.avatar.trim() || "",
            updatedAt: serverTimestamp(),
        };

        try {
            if (editingId) {
                await updateDoc(doc(db, "homepageReviews", editingId), payload);
                toast.success("Review updated");
            } else {
                await addDoc(collection(db, "homepageReviews"), {
                    ...payload,
                    createdAt: serverTimestamp(),
                });
                toast.success("Review added");
            }
            resetForm();
        } catch (error) {
            console.error("Error saving review:", error);
            toast.error("Failed to save review");
        } finally {
            setSubmitting(false);
        }
    };

    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, "homepageReviews", id));
            if (editingId === id) resetForm();
            toast.success("Review deleted");
        } catch (error) {
            console.error("Error deleting review:", error);
            toast.error("Failed to delete review");
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Homepage Reviews</h2>
                <p className="text-sm text-gray-500">Manage the review cards shown on the homepage.</p>
            </div>

            <div className="rounded-lg border bg-white p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900">{isEditing ? "Edit review" : "Add new review"}</h3>
                    {isEditing && (
                        <Button variant="ghost" size="sm" onClick={resetForm}>
                            <X className="h-4 w-4 mr-2" />
                            Cancel edit
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Input
                        placeholder="Reviewer name"
                        value={form.name}
                        onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                    />
                    <Input
                        placeholder="Time ago (e.g. 3 days ago)"
                        value={form.timeAgo}
                        onChange={(e) => setForm((prev) => ({ ...prev, timeAgo: e.target.value }))}
                    />
                    <Input
                        placeholder="Rating (1-5)"
                        type="number"
                        min={1}
                        max={5}
                        value={form.rating}
                        onChange={(e) => setForm((prev) => ({ ...prev, rating: e.target.value }))}
                    />
                    <Input
                        placeholder="Avatar URL (optional)"
                        value={form.avatar}
                        onChange={(e) => setForm((prev) => ({ ...prev, avatar: e.target.value }))}
                    />
                </div>

                <Textarea
                    placeholder="Review text"
                    value={form.text}
                    onChange={(e) => setForm((prev) => ({ ...prev, text: e.target.value }))}
                    rows={4}
                />

                <Button onClick={handleSubmit} disabled={submitting}>
                    {isEditing ? (
                        <>
                            <Save className="h-4 w-4 mr-2" />
                            Update review
                        </>
                    ) : (
                        <>
                            <Plus className="h-4 w-4 mr-2" />
                            Add review
                        </>
                    )}
                </Button>
            </div>

            <div className="rounded-lg border bg-white shadow-sm overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Rating</TableHead>
                            <TableHead>Time ago</TableHead>
                            <TableHead>Created</TableHead>
                            <TableHead>Preview</TableHead>
                            <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    Loading reviews...
                                </TableCell>
                            </TableRow>
                        ) : reviews.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="h-24 text-center">
                                    No reviews yet. Add one above.
                                </TableCell>
                            </TableRow>
                        ) : (
                            reviews.map((review) => (
                                <TableRow key={review.id}>
                                    <TableCell className="font-medium">{review.name}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{review.rating}/5</Badge>
                                    </TableCell>
                                    <TableCell>{review.timeAgo}</TableCell>
                                    <TableCell className="whitespace-nowrap">
                                        {review.createdAt ? format(review.createdAt.toDate(), "MMM d, yyyy") : "N/A"}
                                    </TableCell>
                                    <TableCell className="max-w-[380px] truncate" title={review.text}>
                                        {review.text}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <div className="inline-flex items-center gap-2">
                                            <Button variant="outline" size="sm" onClick={() => startEdit(review)}>
                                                <Edit className="h-4 w-4 mr-2" />
                                                Edit
                                            </Button>
                                            <Button variant="destructive" size="sm" onClick={() => handleDelete(review.id)}>
                                                <Trash2 className="h-4 w-4 mr-2" />
                                                Delete
                                            </Button>
                                        </div>
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

