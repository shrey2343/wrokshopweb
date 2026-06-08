"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0D1B2A] border-t border-white/10 py-10 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-4">
        <p className="text-[#A0AEC0] text-xs max-w-2xl mx-auto leading-relaxed">
          This site is not a part of the Facebook website or Facebook Inc. Additionally,
          this site is not endorsed by Facebook in any way. FACEBOOK is a trademark of
          FACEBOOK, Inc.
        </p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="text-[#A0AEC0] hover:text-white text-sm transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-[#A0AEC0] hover:text-white text-sm transition-colors">
            Terms of Service
          </a>
        </div>
        <p className="text-[#A0AEC0] text-xs">
          © 2025 Research Mentor Clinic · Deepiotics. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
