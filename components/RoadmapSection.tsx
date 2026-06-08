"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { roadmaps } from "@/data/content";

export default function RoadmapSection() {
  return (
    <section className="py-20 px-4 bg-[#1A2940]/40">
      <div className="max-w-6xl mx-auto space-y-16">
        {roadmaps.map((road, ri) => (
          <motion.div
            key={ri}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ri * 0.1 }}
            className="bg-[#1A2940] rounded-2xl p-8"
          >
            <p className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase mb-1">
              {road.label}
            </p>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              {road.title}
            </h3>
            <p className="text-[#A0AEC0] text-sm mb-8">{road.subtitle}</p>

            {/* Steps flow — wraps on mobile */}
            {ri === 2 ? (
              // Road C: 5+4 split into two rows
              <div className="space-y-4 mb-6">
                <StepRow steps={road.steps.slice(0, 5)} activeStep={road.activeStep} offset={0} />
                <StepRow steps={road.steps.slice(5)} activeStep={road.activeStep} offset={5} />
              </div>
            ) : (
              <div className="mb-6">
                <StepRow steps={road.steps} activeStep={road.activeStep} offset={0} />
              </div>
            )}

            {/* Outcome */}
            <div className="bg-[#0D1B2A] rounded-xl px-6 py-3 inline-block mb-4">
              <span className="text-[#C9A84C] font-bold text-sm uppercase tracking-wide">
                Outcome:
              </span>{" "}
              <span className="text-white font-semibold">{road.outcome}</span>
            </div>

            <p className="text-[#A0AEC0] italic text-sm">{road.quote}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function StepRow({
  steps,
  activeStep,
  offset,
}: {
  steps: string[];
  activeStep: number;
  offset: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {steps.map((step, i) => {
        const globalIdx = i + offset;
        const isActive = globalIdx === activeStep;
        return (
          <div key={i} className="flex items-center gap-2">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap ${
                isActive
                  ? "bg-[#C9A84C] text-[#0D1B2A]"
                  : "bg-[#0D1B2A] text-white border border-white/20"
              }`}
            >
              {step}
            </motion.div>
            {i < steps.length - 1 && (
              <ArrowRight size={14} className="text-[#C9A84C] shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
}
