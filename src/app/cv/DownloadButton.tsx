"use client";

import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="download-cv-btn fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 flex items-center gap-2 bg-[#1F2937]/90 backdrop-blur-md text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-2xl border border-white/10 hover:bg-amber-500 hover:border-amber-400 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer font-semibold text-xs sm:text-sm group"
    >
      <Download
        size={16}
        className="group-hover:animate-bounce shrink-0"
      />
      <span>Download CV</span>
    </button>
  );
}
