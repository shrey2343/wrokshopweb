"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/data/content";
import ModalController from "./ModalController";

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-[#1A2940]/40">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-12"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1A2940] rounded-2xl p-6 text-center relative"
            >
              <div className="w-12 h-12 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center mx-auto mb-4">
                <span className="text-[#C9A84C] font-bold text-sm">{step.num}</span>
              </div>
              <h3 className="text-white font-bold mb-2">{step.title}</h3>
              <p className="text-[#A0AEC0] text-sm">{step.body}</p>
              {i < howItWorks.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-[#C9A84C] text-xl z-10">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <ModalController />
        </div>
      </div>
    </section>
  );
}
