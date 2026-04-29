"use client";

import { Phone, Mail, MapPin, Clock, Send, Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PhoneInput } from "@/components/ui/phone-input";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        value: "03 9034 6492",
        link: "tel:+61390346492",
    },
    {
        icon: Mail,
        title: "Email",
        value: "admin@skillcityfacilitysolutions.com.au",
        link: "mailto:admin@skillcityfacilitysolutions.com.au",
    },
    {
        icon: MapPin,
        title: "Address",
        value: "4A Haughton Road, Oakleigh,\n3166, VIC",
        link: "#",
    },
    {
        icon: Clock,
        title: "Business Hours",
        value: "Mon - Fri: 8:00 AM - 6:00 PM\nSat: 9:00 AM - 4:00 PM",
        link: "#",
    },
];

const serviceTypes = [
    "House Cleaning",
    "Office Cleaning",
    "Deep Cleaning",
    "Move In/Out Cleaning",
    "Other",
];

const australianStates = [
    { value: "NSW", label: "New South Wales" },
    { value: "VIC", label: "Victoria" },
    { value: "QLD", label: "Queensland" },
    { value: "WA", label: "Western Australia" },
    { value: "SA", label: "South Australia" },
    { value: "TAS", label: "Tasmania" },
    { value: "ACT", label: "Australian Capital Territory" },
    { value: "NT", label: "Northern Territory" },
];

export default function ContactPageContent() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        state: "",
        postalCode: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [openState, setOpenState] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
            const { db } = await import("@/lib/firebase");

            await addDoc(collection(db, "inquiries"), {
                ...formData,
                createdAt: serverTimestamp(),
                status: "new",
            });

            toast({
                title: "Quote Request Submitted!",
                description: "We'll get back to you within 24 hours.",
            });
            setFormData({
                name: "",
                email: "",
                phone: "",
                service: "",
                state: "",
                postalCode: "",
                message: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handlePhoneChange = (value: string) => {
        setFormData({ ...formData, phone: value });
    };

    const handleStateSelect = (currentValue: string) => {
        setFormData({ ...formData, state: currentValue === formData.state ? "" : currentValue });
        setOpenState(false);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative py-32 md:py-40 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/home/ContactPageHeader.png)' }}
                />
                <div className="container-custom text-center relative z-10">
                    <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
                        Contact Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6">
                        Book a Free Consultation
                    </h1>
                    <p className="text-lg text-white max-w-2xl mx-auto">
                        Ready to experience spotless cleaning? Reach out to us for a free, no-obligation quote. We're here to help!
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-5 gap-12">
                        <div className="lg:col-span-2 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-foreground mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                                </p>
                            </div>
                            <div className="space-y-6">
                                {contactInfo.map((info) => (
                                    <a
                                        key={info.title}
                                        href={info.link}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                            <info.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-foreground">{info.title}</h3>
                                            <p className="text-muted-foreground text-sm whitespace-pre-line">
                                                {info.value}
                                            </p>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <div className="bg-card rounded-3xl p-8 shadow-lg border border-border">
                                <h3 className="text-2xl font-bold text-foreground mb-6">
                                    Book a Free Consultation
                                </h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Your Name *
                                            </label>
                                            <Input
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="John Doe"
                                                required
                                                className="rounded-xl"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Email Address *
                                            </label>
                                            <Input
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                required
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Phone Number
                                            </label>
                                            <PhoneInput
                                                value={formData.phone}
                                                onChange={handlePhoneChange}
                                                defaultCountry="AU"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Service Type *
                                            </label>
                                            <select
                                                name="service"
                                                value={formData.service}
                                                onChange={handleChange}
                                                required
                                                className="w-full h-10 rounded-xl border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                                            >
                                                <option value="">Select a service</option>
                                                {serviceTypes.map((type) => (
                                                    <option key={type} value={type}>
                                                        {type}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex flex-col">
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                State *
                                            </label>
                                            <Popover open={openState} onOpenChange={setOpenState}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant="outline"
                                                        role="combobox"
                                                        aria-expanded={openState}
                                                        className="w-full justify-between rounded-xl"
                                                    >
                                                        {formData.state
                                                            ? australianStates.find((state) => state.value === formData.state)?.label
                                                            : "Select state..."}
                                                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                                                    <Command>
                                                        <CommandInput placeholder="Search state..." />
                                                        <CommandList>
                                                            <CommandEmpty>No state found.</CommandEmpty>
                                                            <CommandGroup>
                                                                {australianStates.map((state) => (
                                                                    <CommandItem
                                                                        key={state.value}
                                                                        value={state.label}
                                                                        onSelect={() => handleStateSelect(state.value)}
                                                                    >
                                                                        <Check
                                                                            className={cn(
                                                                                "mr-2 h-4 w-4",
                                                                                formData.state === state.value ? "opacity-100" : "opacity-0"
                                                                            )}
                                                                        />
                                                                        {state.label}
                                                                    </CommandItem>
                                                                ))}
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground mb-2">
                                                Postal Code *
                                            </label>
                                            <Input
                                                name="postalCode"
                                                value={formData.postalCode}
                                                onChange={handleChange}
                                                placeholder="3166"
                                                required
                                                className="rounded-xl"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-foreground mb-2">
                                            Message
                                        </label>
                                        <Textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your cleaning needs, property size, preferred schedule, etc."
                                            rows={5}
                                            className="rounded-xl"
                                        />
                                    </div>
                                    <Button type="submit" className="btn-primary w-full flex items-center justify-center gap-2" disabled={loading}>
                                        {loading ? "Sending..." : "Send Request"}
                                        <Send className="w-4 h-4" />
                                    </Button>
                                </form>
                                <p className="text-center text-sm text-muted-foreground mt-6">
                                    ✨ 100% Satisfaction Guarantee • Free Estimates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Preview */}
            <section className="section-padding bg-secondary">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            {
                                q: "How do I get a quote?",
                                a: "Fill out our contact form or call us directly. We'll provide a free estimate based on your needs.",
                            },
                            {
                                q: "What cleaning products do you use?",
                                a: "We use eco-friendly, professional-grade cleaning products that are safe for your family and pets.",
                            },
                            {
                                q: "Are your cleaners insured?",
                                a: "Yes, all our cleaners are fully insured and background checked for your peace of mind.",
                            },
                            {
                                q: "Can I schedule recurring cleanings?",
                                a: "Absolutely! We offer weekly, bi-weekly, and monthly cleaning plans with discounted rates.",
                            },
                        ].map((faq) => (
                            <div key={faq.q} className="bg-card rounded-2xl p-6 shadow-md">
                                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                                <p className="text-muted-foreground text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
