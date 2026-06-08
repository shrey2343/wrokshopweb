"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { hero } from "@/data/content";
import ModalController from "./ModalController";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-[#0D1B2A] pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <motion.p
            {...fadeUp(0.1)}
            className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-4"
          >
            {hero.tag}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
          >
            {hero.h1Line1}{" "}
            <span className="text-[#C9A84C]">{hero.h1Gold}</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            className="text-lg text-[#A0AEC0] mb-6"
          >
            {hero.subtitle}
          </motion.p>

          <motion.blockquote
            {...fadeUp(0.4)}
            className="border-l-4 border-[#C9A84C] pl-4 italic text-white/80 mb-4"
          >
            {hero.quote}
          </motion.blockquote>

          <motion.p
            {...fadeUp(0.45)}
            className="text-[#A0AEC0] text-sm mb-8"
          >
            {hero.byline}
          </motion.p>

          <motion.div {...fadeUp(0.55)}>
            <ModalController />
          </motion.div>
        </div>

        {/* Right — sidebar box */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-[#1A2940] border border-[#C9A84C]/30 rounded-2xl p-8"
        >
          <h3 className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">
            {hero.sidebar.title}
          </h3>
          <ul className="space-y-4">
            {hero.sidebar.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-white">
                <CheckCircle size={18} className="text-[#C9A84C] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
