"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { whyBuyFromDoctor } from "@/data/content";

export default function WhyBuyFromDoctorSection() {
  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3 text-center"
        >
          {whyBuyFromDoctor.tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          {whyBuyFromDoctor.h2Line1}{" "}
          <span className="text-[#C9A84C]">{whyBuyFromDoctor.h2Gold}</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A2940] rounded-2xl p-8"
          >
            <h3 className="text-[#C9A84C] font-bold text-sm uppercase tracking-widest mb-6">
              {whyBuyFromDoctor.leftTitle}
            </h3>
            <ul className="space-y-3">
              {whyBuyFromDoctor.leftItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <CheckCircle size={16} className="text-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — two comparison boxes */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-[#1A2940] border border-white/10 rounded-xl p-6">
              <p className="text-[#A0AEC0] text-xs uppercase tracking-widest mb-2">
                {whyBuyFromDoctor.companyALabel}
              </p>
              <p className="text-white italic">{whyBuyFromDoctor.companyA}</p>
            </div>
            <div className="bg-[#1A2940] border border-[#C9A84C]/40 rounded-xl p-6">
              <p className="text-[#C9A84C] text-xs uppercase tracking-widest mb-2">
                {whyBuyFromDoctor.companyBLabel}
              </p>
              <p className="text-white italic">{whyBuyFromDoctor.companyB}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#C9A84C]/10 border border-[#C9A84C]/30 rounded-xl p-6 text-center"
        >
          <p className="text-[#C9A84C] font-semibold text-lg">{whyBuyFromDoctor.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
