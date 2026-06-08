"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { imagine } from "@/data/content";

export default function ImagineSection() {
  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3 text-center"
        >
          {imagine.tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          {imagine.h2}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] rounded-2xl p-8"
          >
            <p className="text-[#A0AEC0] mb-4">{imagine.body}</p>
            <p className="font-display text-2xl italic text-[#C9A84C] mb-6">{imagine.quote}</p>
            <p className="text-white">{imagine.line}</p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] rounded-2xl p-8"
          >
            <h3 className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">
              {imagine.rightTitle}
            </h3>
            <ul className="space-y-3">
              {imagine.rightItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={16} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
