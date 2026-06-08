"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import UnlockModal from "./UnlockModal";
import UnlockVideoButton from "./UnlockVideoButton";

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 left-0 right-0 z-40 bg-[#0D1B2A]/90 backdrop-blur border-b border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-white text-lg">
            <span className="text-[#C9A84C]">Dr.</span> Bhawna Nigam
          </span>
          <UnlockVideoButton
            label="🔓 Unlock Video"
            onClick={() => setModalOpen(true)}
          />
        </div>
      </motion.nav>
      <UnlockModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
