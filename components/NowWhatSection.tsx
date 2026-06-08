"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import { nowWhat } from "@/data/content";
import ModalController from "./ModalController";

export default function NowWhatSection() {
  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3 text-center"
        >
          {nowWhat.tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl font-bold text-white text-center mb-4"
        >
          {nowWhat.h2Line1}{" "}
          <span className="text-[#C9A84C]">{nowWhat.h2Gold}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#A0AEC0] text-center max-w-xl mx-auto mb-12"
        >
          {nowWhat.subtext}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Questions list */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] rounded-2xl p-8 space-y-4"
          >
            {nowWhat.items.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <HelpCircle size={18} className="text-[#D4732A] shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] border border-[#C9A84C]/30 rounded-2xl p-8 flex items-center justify-center"
          >
            <p className="font-display text-2xl italic text-[#C9A84C] text-center">
              {nowWhat.quote}
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center">
          <ModalController />
        </div>
      </div>
    </section>
  );
}
