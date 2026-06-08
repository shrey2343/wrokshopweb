"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface Props {
  label?: string;
  onClick: () => void;
}

export default function UnlockVideoButton({ label = "🔓 UNLOCK VIDEO", onClick }: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      animate={{ boxShadow: ["0 0 0px #C9A84C", "0 0 20px #C9A84C", "0 0 0px #C9A84C"] }}
      transition={{ boxShadow: { repeat: Infinity, duration: 2.5 }, scale: { duration: 0.15 } }}
      className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0D1B2A] font-bold text-lg px-8 py-4 rounded-full cursor-pointer"
    >
      {label}
    </motion.button>
  );
}
