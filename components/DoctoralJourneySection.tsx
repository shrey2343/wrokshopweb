"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { doctoralJourney } from "@/data/content";

export default function DoctoralJourneySection() {
  return (
    <section className="py-20 px-4 bg-[#1A2940]/40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          {doctoralJourney.h2}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Invested card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] border border-[#C9A84C]/40 rounded-2xl p-8"
          >
            <h3 className="text-[#C9A84C] font-bold tracking-widest text-sm uppercase mb-6">
              {doctoralJourney.invested.title}
            </h3>
            <ul className="space-y-3">
              {doctoralJourney.invested.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={16} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Survived card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-[#1A2940] border border-blue-500/40 rounded-2xl p-8"
          >
            <h3 className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-6">
              {doctoralJourney.survived.title}
            </h3>
            <ul className="space-y-3">
              {doctoralJourney.survived.items.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={16} className="text-blue-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-xl italic text-[#C9A84C]"
        >
          {doctoralJourney.closing}
        </motion.p>
      </div>
    </section>
  );
}
