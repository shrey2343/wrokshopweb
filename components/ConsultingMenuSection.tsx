"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { consulting } from "@/data/content";

export default function ConsultingMenuSection() {
  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Step 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A2940] rounded-2xl p-8"
        >
          <h3 className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-6">
            {consulting.step1.title}
          </h3>
          <div className="space-y-2 mb-8">
            {consulting.step1.questions.map((q, i) => (
              <p key={i} className="text-white flex items-center gap-2">
                <span className="text-[#D4732A]">→</span> {q}
              </p>
            ))}
          </div>
          <h4 className="text-white font-semibold mb-4">YOUR LIKELY TERRITORY</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {consulting.step1.territory.map((pair, i) =>
              pair.map((item, j) => (
                <span
                  key={`${i}-${j}`}
                  className="bg-[#0D1B2A] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#A0AEC0]"
                >
                  {item}
                </span>
              ))
            )}
          </div>
        </motion.div>

        {/* Step 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1A2940] rounded-2xl p-8"
        >
          <h3 className="text-[#C9A84C] font-bold tracking-widest uppercase text-sm mb-6">
            {consulting.step2.title}
          </h3>
          <div className="space-y-3">
            {consulting.step2.arrows.map(([from, to], i) => (
              <div key={i} className="flex items-center gap-3 flex-wrap">
                <span className="bg-[#0D1B2A] border border-white/20 rounded-lg px-3 py-2 text-sm text-white">
                  {from}
                </span>
                <ArrowRight size={16} className="text-[#C9A84C] shrink-0" />
                <span className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-lg px-3 py-2 text-sm text-[#C9A84C] font-semibold">
                  {to}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industry consulting grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-bold text-lg mb-6 text-center">
            Industry Consulting Menu
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {consulting.grid.map((col, i) => (
              <div key={i} className="bg-[#1A2940] rounded-xl p-5">
                <h4 className="text-[#C9A84C] font-bold text-sm uppercase tracking-wide mb-3">
                  {col.category}
                </h4>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="text-[#A0AEC0] text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Find clients */}
          <div className="text-center mb-6">
            <p className="text-[#A0AEC0] text-sm mb-3">Find clients via:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {consulting.findClients.map((c, i) => (
                <span key={i} className="px-4 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm">
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Outcome pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {consulting.outcome.map((o, i) => (
              <span key={i} className="px-5 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] font-semibold text-sm">
                {o}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
