"use client";

import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useVideoAccess } from "@/context/VideoAccessContext";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  whatsapp?: string;
  stage: string;
  field: string;
}

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnlockModal({ isOpen, onClose }: Props) {
  const { unlock } = useVideoAccess();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  async function onSubmit(data: FormValues) {
    const GOOGLE_SHEET_URL =
      "https://script.google.com/macros/s/AKfycbw7FsFAKLZ7G7FcS1oIn0dVAS4Dr8_dQ2AuMPULhkR_magksuAY1WJJP9JTvsNhQ2FG/exec";

    // GET with query params is the only CORS-safe way to call Google Apps Script
    // from a browser. The request is "simple" so no preflight is sent.
    const qs = new URLSearchParams({
      name: data.name,
      email: data.email,
      phone: data.phone,
      whatsapp: data.whatsapp ?? "",
      stage: data.stage,
      field: data.field,
      timestamp: new Date().toLocaleString(),
    }).toString();

    try {
      await fetch(`${GOOGLE_SHEET_URL}?${qs}`, {
        method: "GET",
        mode: "no-cors",
      });
    } catch {
      // opaque no-cors response — ignore, data still reaches the sheet
    }

    unlock({ name: data.name, email: data.email, phone: data.phone });
    onClose();
    setTimeout(() => {
      document.getElementById("video-section")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  const inputClass =
    "w-full bg-[#0D1B2A] border border-white/20 rounded-lg px-4 py-3 text-white placeholder-[#A0AEC0] focus:outline-none focus:border-[#C9A84C] transition-colors";
  const labelClass = "block text-sm text-[#A0AEC0] mb-1";
  const errorClass = "text-red-400 text-xs mt-1";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            key="modal"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="relative w-full max-w-[480px] bg-[#1A2940] rounded-2xl p-8 shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#A0AEC0] hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2 className="font-display text-2xl font-bold text-white mb-2">
              Fill this to unlock your free training video
            </h2>
            <p className="text-[#A0AEC0] text-sm mb-6">
              Discover how 100+ professionals completed their Doctorate 2–3x faster — without stress, delays, or confusion.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
              <div>
                <label className={labelClass}>Full Name *</label>
                <input
                  {...register("name", { required: "Name is required", minLength: { value: 2, message: "Min 2 characters" } })}
                  placeholder="Your full name"
                  className={inputClass}
                />
                {errors.name && <p className={errorClass}>{errors.name.message}</p>}
              </div>

              <div>
                <label className={labelClass}>Email Address *</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                  })}
                  placeholder="your@email.com"
                  className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email.message}</p>}
              </div>

              <div>
                <label className={labelClass}>Phone Number *</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: { value: 10, message: "Min 10 digits" },
                  })}
                  placeholder="+1 234 567 8900"
                  className={inputClass}
                />
                {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
              </div>

              <div>
                <label className={labelClass}>
                  WhatsApp Number <span className="text-[#A0AEC0]/60">(optional — we&apos;ll send you the video link here)</span>
                </label>
                <input
                  type="tel"
                  {...register("whatsapp")}
                  placeholder="+1 234 567 8900"
                  className={inputClass}
                />
              </div>

              <div>
                <label className={labelClass}>Current Stage *</label>
                <select
                  {...register("stage", { required: "Please select your stage" })}
                  className={inputClass}
                >
                  <option value="">Select your stage</option>
                  <option value="starting">Just starting</option>
                  <option value="midway">Mid-way</option>
                  <option value="near">Near completion</option>
                  <option value="completed">Already completed</option>
                </select>
                {errors.stage && <p className={errorClass}>{errors.stage.message}</p>}
              </div>

              <div>
                <label className={labelClass}>Your Field *</label>
                <select
                  {...register("field", { required: "Please select your field" })}
                  className={inputClass}
                >
                  <option value="">Select your field</option>
                  <option value="business">Business / Management</option>
                  <option value="tech">Technology / AI</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
                {errors.field && <p className={errorClass}>{errors.field.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#C9A84C] hover:bg-[#b8973b] text-[#0D1B2A] font-bold py-4 rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Unlocking…
                  </>
                ) : (
                  "Unlock Video →"
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
