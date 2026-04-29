# Navigation and sub-navigation (mega menu) — implementation guide

This document copies the **main navigation bar**, **desktop Services mega menu** (sub-navigation), and **mobile Services accordion** from this project, explains **how they sit above the page** (fixed header), and lists **implementation steps** for another Next.js + Tailwind codebase.

---

## What you are implementing

| Layer | Behavior |
|--------|-----------|
| **Main nav** | Fixed, centered bar (`top-2`, ~95% width, max width). Logo, links, phone, CTA. |
| **Sub-navigation (desktop)** | Full-width panel **below** the bar: `absolute` + `top-full` + `mt-2`, toggled by **Services** (`onMouseEnter` / `onMouseLeave` on the panel). |
| **Sub-navigation (mobile)** | **Accordion** under Services inside the hamburger drawer. |

Because the bar is **`position: fixed`**, your first content section (hero) needs **top padding** (e.g. `pt-32`) so text is not hidden under the nav.

---

## Prerequisites

- **Next.js** (App Router) with `"use client"` allowed for the header.
- **Tailwind CSS** with theme tokens matching usage: `border-border`, `bg-background`, `text-primary`, `text-foreground`, `text-muted-foreground`, `bg-muted`, `bg-primary`, `ring-primary`, etc. (align with your `tailwind.config` / CSS variables.)
- **Packages**: `lucide-react`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot`, `class-variance-authority` (for the shadcn-style `Button` below).

---

## Step 1 — Install dependencies

```bash
npm install lucide-react clsx tailwind-merge @radix-ui/react-slot class-variance-authority
```

---

## Step 2 — Path alias

Ensure `@/` resolves to `src/` (or change imports in the snippets), e.g. in `tsconfig.json`:

```json
"paths": { "@/*": ["./src/*"] }
```

---

## Step 3 — Add `cn` helper

Create `src/lib/utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

---

## Step 4 — Optional: `animate-fade-in` animation

The header uses the class `animate-fade-in`. In this repo it is defined in `tailwind.config.ts`:

```ts
keyframes: {
  "fade-in": {
    from: { opacity: "0", transform: "translateY(20px)" },
    to: { opacity: "1", transform: "translateY(0)" },
  },
},
animation: {
  "fade-in": "fade-in 0.6s ease-out forwards",
},
```

If you skip this, replace `animate-fade-in` with nothing or Tailwind’s `animate-in` utilities.

---

## Step 5 — Button component (shadcn-style)

Create `src/components/ui/button.tsx` (or use your own button and remove `Button` / `asChild` usage in the header):

```tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
```

---

## Step 6 — CTA utility class (optional)

The header uses `className="btn-secondary"` on `Button`. In this repo that lives in global CSS (`src/index.css`):

```css
@layer components {
  .btn-secondary {
    @apply bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8 py-2 font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5;
  }
}
```

If you do not use `@layer` / `accent` tokens, replace with inline Tailwind on `Button` (e.g. `variant="secondary"` + `className="rounded-full ..."`).

---

## Step 7 — Services data (feeds mega menu + mobile sub-nav)

Create `src/data/siteServices.ts` (edit titles, descriptions, `href`, and icons for your site):

```ts
import type { LucideIcon } from "lucide-react";
import {
  Home,
  Hammer,
  Building2,
  Users,
  GraduationCap,
  Baby,
  Heart,
  Stethoscope,
  Factory,
  Warehouse,
  Utensils,
  Dumbbell,
  Film,
  Key,
  Building,
  Sparkles,
} from "lucide-react";

export type SiteService = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

/** All service routes — single source for nav, mega menu, and service-page grids */
export const siteServices: SiteService[] = [
  {
    icon: Home,
    title: "House Cleaning",
    description: "Complete residential cleaning for a spotless home",
    href: "/services/house-cleaning",
  },
  {
    icon: Hammer,
    title: "Builders Cleaning",
    description: "Post-construction cleanup and debris removal",
    href: "/services/builders-cleaning",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Comprehensive cleaning for commercial properties",
    href: "/services/commercial-cleaning",
  },
  {
    icon: Users,
    title: "Council & Community Service Cleaning",
    description: "Specialized cleaning for public and community spaces",
    href: "/services/council-cleaning",
  },
  {
    icon: GraduationCap,
    title: "School Cleaning",
    description: "Safe and hygienic environments for students",
    href: "/services/school-cleaning",
  },
  {
    icon: Baby,
    title: "Early Childhood Education Cleaning",
    description: "Gentle, non-toxic cleaning for childcare centers",
    href: "/services/early-childhood-cleaning",
  },
  {
    icon: Heart,
    title: "Aged Care Cleaning",
    description: "Rigorous sanitization for aged care facilities",
    href: "/services/aged-care-cleaning",
  },
  {
    icon: Stethoscope,
    title: "Medical / Healthcare Cleaning",
    description: "Clinical grade cleaning meeting health standards",
    href: "/services/medical-cleaning",
  },
  {
    icon: Factory,
    title: "Industrial Cleaning",
    description: "Heavy-duty cleaning for industrial sites",
    href: "/services/industrial-cleaning",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Factory Cleaning",
    description: "Large-scale cleaning for storage and production",
    href: "/services/warehouse-cleaning",
  },
  {
    icon: Utensils,
    title: "Restaurant & Kitchen Cleaning",
    description: "Deep cleaning for food service environments",
    href: "/services/restaurant-cleaning",
  },
  {
    icon: Dumbbell,
    title: "Gym Cleaning",
    description: "Sanitizing workout equipment and facilities",
    href: "/services/gym-cleaning",
  },
  {
    icon: Film,
    title: "Cinema & Theater Cleaning",
    description: "Thorough cleaning between sessions and events",
    href: "/services/cinema-cleaning",
  },
  {
    icon: Key,
    title: "End of Lease Cleaning",
    description: "Comprehensive cleaning for property transitions",
    href: "/services/end-of-lease-cleaning",
  },
  {
    icon: Building,
    title: "Office Cleaning",
    description: "Professional workspace sanitization",
    href: "/services/office-cleaning",
  },
  {
    icon: Sparkles,
    title: "One-Off Cleaning",
    description: "Single deep cleans and special-event turnaround",
    href: "/services/one-off-cleaning",
  },
];
```

---

## Step 8 — Header component (navigation + sub-navigation)

Create `src/components/layout/Header.tsx`.

**Positioning summary**

- Outer `<header>`: `fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1920px]` — floating bar on top of the page.
- Mega menu: `absolute left-0 right-0 top-full mt-2` — directly under the header box, same width as the fixed header.

Put your logo file in `public/` and update `src` / `alt` below.

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteServices as services } from "@/data/siteServices";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact-us" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-2 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1920px]">
      <div className="bg-white border border-border rounded-[24px] shadow-lg px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" title="Skill City Facility Solutions - Home">
            <div className="relative h-16 w-56">
              <Image
                src="/SkillCityPNGLOGO.png"
                alt="Skill City Facility Solutions - Professional Cleaning Melbourne Victoria"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/") ? "text-primary" : "text-foreground/80"
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown Trigger */}
            <button
              onMouseEnter={() => setIsServicesOpen(true)}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary",
                pathname === "/services" ? "text-primary" : "text-foreground/80"
              )}
            >
              Services
              <ChevronDown className={cn("w-3 h-3 transition-transform", isServicesOpen && "rotate-180")} />
            </button>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path)
                  ? "text-primary"
                  : "text-foreground/80"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+61390346492"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              03 9034 6492
            </a>
            <Button className="btn-secondary" asChild>
              <Link href="/contact-us">Book a Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in overflow-y-auto max-h-[75vh]">
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${isActive("/") ? "text-primary" : "text-foreground/80"
                  }`}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-sm font-medium text-foreground/80 hover:text-primary py-2"
                >
                  Services
                  <ChevronDown className={cn("w-4 h-4 transition-transform", isMobileServicesOpen && "rotate-180")} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-2 animate-fade-in">
                    {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className={cn(
                            "flex items-center gap-2 py-2 text-sm transition-colors hover:text-primary",
                            pathname === service.href ? "text-primary font-medium" : "text-muted-foreground"
                          )}
                        >
                          <service.icon className="w-4 h-4 shrink-0" />
                          {service.title}
                        </Link>
                    ))}
                    <Link
                      href="/services"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className="flex items-center gap-2 py-2 text-sm font-medium text-primary"
                    >
                      View all services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                )}
              </div>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-primary py-2 ${isActive(link.path)
                    ? "text-primary"
                    : "text-foreground/80"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="tel:+61390346492"
                className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                03 9034 6492
              </a>
              <Button className="btn-secondary w-full mt-2" asChild>
                <Link href="/contact-us">Book a Free Consultation</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Full-width Services Mega Menu - Positioned below header */}
      {isServicesOpen && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full mt-2 bg-background border border-border shadow-lg z-50 animate-fade-in rounded-3xl overflow-hidden"
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
        >
          <div className="w-full px-6 md:px-8 py-8">
            <div className="flex gap-12">
              {/* Services Grid */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Our Services
                  </span>
                </div>
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                  {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setIsServicesOpen(false)}
                        className={cn(
                          "flex items-start gap-3 p-3 rounded-xl transition-colors group hover:bg-muted",
                          pathname === service.href && "bg-primary/10 ring-1 ring-primary/20"
                        )}
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-primary/20">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                            {service.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                  ))}
                </div>
              </div>

              {/* Explore Section */}
              <div className="w-72 border-l border-border pl-8">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block mb-6">
                  Explore
                </span>
                <div className="space-y-4">
                  <Link
                    href="/blog"
                    onClick={() => setIsServicesOpen(false)}
                    className="block p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Cleaning Tips & Guides
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Expert advice for a cleaner home
                    </p>
                  </Link>
                  <Link
                    href="/why-choose-us"
                    onClick={() => setIsServicesOpen(false)}
                    className="block p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Why Choose Us
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Learn about our expertise and team
                    </p>
                  </Link>
                  <Link
                    href="/contact-us"
                    onClick={() => setIsServicesOpen(false)}
                    className="block p-3 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Book a Free Consultation
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Request a no-obligation estimate
                    </p>
                  </Link>
                </div>
                <Link
                  href="/services"
                  onClick={() => setIsServicesOpen(false)}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline mt-6"
                >
                  View all services <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
```

---

## Step 9 — Mount the header above page content

In this repo, a client layout wraps pages:

```tsx
"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdmin && <Header />}
      <main className="flex-1">{children}</main>
      {!isAdmin && <Footer />}
    </div>
  );
}
```

Wire `ClientLayout` (or inline `<Header />`) from `src/app/layout.tsx` according to your structure.

---

## Step 10 — Clear space under the fixed header

Add top padding to your hero or first section, for example:

```tsx
<section className="pt-32 ...">
```

Tune `pt-28` / `pt-32` / `md:pt-40` until content clears the bar and mega menu gap.

---

## Step 11 — Quality checks

- [ ] Logo path exists under `public/`.
- [ ] All routes in `navLinks` and `siteServices` exist.
- [ ] Desktop: hover **Services** opens mega menu; moving mouse into panel keeps it open; leaving closes it.
- [ ] Desktop: click **Services** toggles menu (keyboard / touch users).
- [ ] Mobile: hamburger opens drawer; Services expands nested links.
- [ ] `z-50` is above hero imagery; increase if something overlaps.

---

## Source files in this repository

For a diff against the live project:

- `src/components/layout/Header.tsx`
- `src/data/siteServices.ts`
- `src/components/layout/ClientLayout.tsx`
- `src/lib/utils.ts`
- `src/components/ui/button.tsx`
- `src/index.css` (`.btn-secondary`)
- `tailwind.config.ts` (`fade-in` animation)
