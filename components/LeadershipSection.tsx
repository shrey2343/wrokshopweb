"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { leadership, stats } from "@/data/content";

export default function LeadershipSection() {
  return (
    <section className="py-20 px-4 bg-[#0D1B2A]">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-3 text-center"
        >
          {leadership.tag}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-2"
        >
          {leadership.h2Line1}{" "}
          <span className="text-[#C9A84C]">{leadership.h2Gold}</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#A0AEC0] text-center mb-12"
        >
          {leadership.sub}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {/* Left: credentials + stats */}
          <div>
            <ul className="space-y-3 mb-8">
              {leadership.credentials.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3 text-white"
                >
                  <CheckCircle size={16} className="text-[#C9A84C] mt-0.5 shrink-0" />
                  {c}
                </motion.li>
              ))}
            </ul>

            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="bg-[#1A2940] rounded-xl p-4 text-center">
                  <div className="font-display text-2xl font-bold text-[#C9A84C]">
                    {s.value}{s.suffix}
                  </div>
                  <div className="text-[#A0AEC0] text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: book cover — full column width, self-stretches to match left */}
          <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            {/* TODO: add Dr. Bhawna Nigam photo here */}
            <Image
              src="/Screenshot (3398).png"
              alt="Doctorate to Dollars — Book by Dr. Bhawna Nigam"
              width={800}
              height={800}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Quote bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#1A2940] border-l-4 border-[#C9A84C] rounded-r-xl px-8 py-5"
        >
          <p className="font-display text-lg italic text-white">{leadership.quote}</p>
        </motion.div>
      </div>
    </section>
  );
}
