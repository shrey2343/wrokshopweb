"use client";

import { motion } from "framer-motion";
import { fiveWays } from "@/data/content";

const scaleOutcomes = [
  "Technology", "Automation", "Licensing", "Partnerships", "Global Expansion",
];

export default function FiveWaysSection() {
  return (
    <section className="py-20 px-4 bg-[#1A2940]/40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          Five Ways to Turn Expertise Into a Business
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {fiveWays.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#1A2940] rounded-xl p-5"
            >
              <h3 className="text-[#C9A84C] font-bold text-sm uppercase tracking-wide mb-4">
                {card.title}
              </h3>
              <ul className="space-y-2">
                {card.items.map((item, j) => (
                  <li key={j} className="text-[#A0AEC0] text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-6">
          <p className="text-[#A0AEC0] text-sm mb-3">Scale with:</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {scaleOutcomes.map((s, i) => (
              <span key={i} className="px-4 py-1.5 rounded-full border border-[#C9A84C]/40 text-[#C9A84C] text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {["Founder", "Scalable Business", "Multiple Revenue Streams", "Long-Term Wealth"].map((o, i) => (
            <span key={i} className="px-5 py-2 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-[#C9A84C] font-semibold text-sm">
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
