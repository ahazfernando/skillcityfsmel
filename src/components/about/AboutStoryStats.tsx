"use client";

import { useEffect, useRef, useState } from "react";

type StatFormat = "plus" | "kplus" | "percent";

function AnimatedStat({
    end,
    format,
    label,
    started,
}: {
    end: number;
    format: StatFormat;
    label: string;
    started: boolean;
}) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!started) return;
        let startTime: number | null = null;
        const duration = 1600;
        const easeOutCubic = (t: number) => 1 - (1 - t) ** 3;

        const tick = (now: number) => {
            if (startTime === null) startTime = now;
            const t = Math.min((now - startTime) / duration, 1);
            const eased = easeOutCubic(t);
            setValue(t >= 1 ? end : eased * end);
            if (t < 1) requestAnimationFrame(tick);
        };

        const id = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(id);
    }, [started, end]);

    const n = Math.min(Math.floor(value + 1e-6), end);
    const text =
        format === "kplus" ? `${n}K+` : format === "plus" ? `${n}+` : `${n}%`;

    return (
        <div className="text-left">
            <p className="text-3xl font-bold text-primary tabular-nums">{text}</p>
            <p className="text-sm text-muted-foreground">{label}</p>
        </div>
    );
}

export function AboutStoryStats() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStarted(true);
                    obs.disconnect();
                }
            },
            { threshold: 0.25, rootMargin: "0px 0px -8% 0px" }
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="grid grid-cols-3 gap-6 pt-4">
            <AnimatedStat end={120} format="plus" label="Team Members" started={started} />
            <AnimatedStat end={10} format="kplus" label="Cleans Completed" started={started} />
            <AnimatedStat end={100} format="percent" label="Satisfaction Rate" started={started} />
        </div>
    );
}
