"use client";

import { motion } from "framer-motion";
import { roadmaps } from "@/data/content";

export default function RoadmapSection() {
  return (
    <section className="py-20 px-4 bg-[#1A2940]/40">
      <div className="max-w-6xl mx-auto space-y-8">
        {roadmaps.map((road, ri) => (
          <motion.div
            key={ri}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ri * 0.1 }}
            className="bg-[#1A2940] rounded-2xl p-8"
          >
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-1">
              {road.label}
            </p>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              {road.title}
            </h3>
            <p className="text-[#A0AEC0] text-sm mb-6">{road.subtitle}</p>

            <div className="bg-[#0D1B2A] rounded-xl px-6 py-3 inline-block mb-4">
              <span className="text-[#C9A84C] font-bold text-sm uppercase tracking-wide">
                Outcome:
              </span>{" "}
              <span className="text-white font-semibold">{road.outcome}</span>
            </div>

            <p className="text-[#A0AEC0] italic text-sm">{road.quote}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
