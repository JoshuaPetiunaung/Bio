"use client";

import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="download-cv-btn fixed bottom-8 right-8 z-50 flex items-center gap-2.5 bg-[#1F2937] text-white px-6 py-3 rounded-full shadow-lg hover:bg-amber-500 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer font-semibold text-sm group"
    >
      <Download
        size={18}
        className="group-hover:animate-bounce"
      />
      Download CV
    </button>
  );
}
