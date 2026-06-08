"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/content";

function useCountUp(target: number, duration = 2000, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2000, triggered);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="text-center px-6 py-4">
      <div className="font-display text-4xl md:text-5xl font-bold text-[#C9A84C]">
        {count}{suffix}
      </div>
      <div className="text-[#A0AEC0] text-sm mt-1 uppercase tracking-wide">{label}</div>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section className="bg-[#1A2940] border-y border-white/10 py-8">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-white/10">
        {stats.map((s) => (
          <StatItem key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
