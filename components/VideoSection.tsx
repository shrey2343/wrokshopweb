"use client";

import { motion } from "framer-motion";
import { Lock, MessageCircle } from "lucide-react";
import { useVideoAccess } from "@/context/VideoAccessContext";

const additionalSessions = [
  { title: "Session 2: Research & Publications", duration: "45 min" },
  { title: "Session 3: Building Academic Authority", duration: "50 min" },
  { title: "Session 4: From Doctorate to Income", duration: "55 min" },
];

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

        {/* WhatsApp CTA */}
        {/* TODO: replace with real WhatsApp number */}
        <div className="flex justify-center mt-8">
          <a
            href={`https://wa.me/YOUR_NUMBER?text=Dr.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-full transition-colors"
          >
            <MessageCircle size={20} />
            📲 Send &quot;Dr.&quot; on WhatsApp
          </a>
        </div>

        {/* Additional sessions */}
        {/* TODO: add additional session video URLs and thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          {additionalSessions.map((s, i) => (
            <div
              key={i}
              className="relative bg-[#1A2940] border border-white/10 rounded-xl overflow-hidden group"
            >
              {/* Thumbnail placeholder */}
              <div className="aspect-video bg-[#0D1B2A] flex items-center justify-center">
                <Lock size={32} className="text-[#A0AEC0]" />
              </div>
              <div className="p-4">
                <p className="text-white font-semibold text-sm">{s.title}</p>
                <p className="text-[#A0AEC0] text-xs mt-1">{s.duration}</p>
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Lock size={28} className="text-[#C9A84C]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
