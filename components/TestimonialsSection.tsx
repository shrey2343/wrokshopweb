"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import { testimonials } from "@/data/content";

export default function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 px-4 bg-[#0D1B2A] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-3"
        >
          Success Stories
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#A0AEC0] text-center max-w-xl mx-auto mb-12"
        >
          Real stories from real scholars who used our proven system to complete
          their doctorate faster, with clarity and confidence.
        </motion.p>

        {/* Auto-scroll carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          >
            {/* Duplicate for seamless loop */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="bg-[#1A2940] border border-white/10 rounded-2xl p-6 min-w-[300px] max-w-[300px] flex flex-col gap-4 shrink-0"
              >
                {/* TODO: add real testimonial images and quotes */}
                {/* REPLACE: add real testimonial images and quotes */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#0D1B2A] border border-white/20 flex items-center justify-center">
                    <User size={20} className="text-[#A0AEC0]" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-[#A0AEC0] text-xs">{t.title} · {t.country}</p>
                  </div>
                </div>
                <p className="text-[#A0AEC0] text-sm italic flex-1">&quot;{t.quote}&quot;</p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} size={14} className="text-[#C9A84C] fill-[#C9A84C]" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
