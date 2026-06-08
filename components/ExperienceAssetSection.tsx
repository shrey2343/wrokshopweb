"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { experienceAsset } from "@/data/content";

export default function ExperienceAssetSection() {
  return (
    <section className="py-20 px-4 bg-[#1A2940]/40">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-[#C9A84C] text-center mb-12"
        >
          {experienceAsset.h2}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] rounded-2xl p-8"
          >
            <h3 className="text-[#C9A84C] font-bold text-sm tracking-widest uppercase mb-6">
              {experienceAsset.leftTitle}
            </h3>
            <ul className="space-y-3">
              {experienceAsset.leftItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={16} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] border border-[#D4732A]/40 rounded-2xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-[#D4732A] font-bold text-sm tracking-widest uppercase mb-4">
              {experienceAsset.rightTitle}
            </h3>
            <p className="text-white text-lg leading-relaxed">{experienceAsset.rightBody}</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-lg italic text-[#C9A84C] mb-8"
        >
          {experienceAsset.question}
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center">
          {experienceAsset.pills.map((pill, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="px-6 py-3 rounded-full border border-[#C9A84C] text-[#C9A84C] font-bold text-sm"
            >
              {pill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
