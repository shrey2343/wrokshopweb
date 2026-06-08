"use client";

import { motion } from "framer-motion";
import { useVideoAccess } from "@/context/VideoAccessContext";

export default function VideoSection() {
  const { isUnlocked } = useVideoAccess();

  if (!isUnlocked) return null;

  return (
    <motion.section
      id="video-section"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Your Free Training Video
        </h2>
        <p className="text-[#A0AEC0] text-center mb-10">
          Watch the full roadmap to life after your doctorate.
        </p>

        {/* Main video embed */}
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#1A2940] border border-white/10" style={{ paddingBottom: "56.25%", height: 0 }}>
          <iframe
            src="https://www.youtube.com/embed/oDF126XIb_c"
            title="What's Next After Your Doctorate — Full Training"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>

      </div>
    </motion.section>
  );
}
