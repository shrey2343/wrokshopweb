"use client";

import { motion } from "framer-motion";
import { academicLandscape } from "@/data/content";

export default function AcademiaRoadmapSection() {
  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          {academicLandscape.h2}
        </motion.h2>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          {academicLandscape.badges.map((badge, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full bg-[#1A2940] border border-[#C9A84C]/40 text-white font-semibold text-sm"
            >
              {badge}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-center font-display text-xl italic"
        >
          {academicLandscape.closing}
        </motion.p>

        {/* Why most DBA graduates never enter academia */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-[#1A2940] rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-4">
              Why Most DBA Graduates Never Enter Academia
            </h3>
            <p className="text-[#A0AEC0]">
              The title exists. The opportunities don&apos;t… unless you know how to find them.
              Most graduates aren&apos;t lacking the credential — they&apos;re lacking the roadmap.
            </p>
          </div>
          <div className="bg-[#1A2940] border border-[#C9A84C]/30 rounded-2xl p-8">
            <h3 className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-4">
              The Hidden Pathway
            </h3>
            <p className="text-white">
              Academia has back doors most graduates never discover. The right publications,
              the right network, and the right positioning unlock faculty opportunities that
              are never publicly advertised. This roadmap shows you exactly how to find them.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
