import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import DownloadButton from "./DownloadButton";

export default function CVPage() {
  return (
    <div className="cv-page min-h-screen bg-muted/30 py-4 sm:py-8 px-2 sm:px-4 flex justify-center font-sans relative">
      <DownloadButton />
      {/* A4 Paper Container — Responsive for Mobile/Tablet/Desktop Screen, exact A4 2-column on Print */}
      <div className="cv-paper bg-white w-full max-w-[96vw] md:max-w-[21cm] min-h-auto md:min-h-[29.7cm] shadow-xl relative overflow-hidden flex flex-col md:flex-row text-slate-800 rounded-2xl md:rounded-none">
        
        {/* LEFT COLUMN - DARK */}
        <div className="cv-left-col w-full md:w-[35%] bg-[#1F2937] text-white px-5 sm:px-6 py-7 md:py-8 flex flex-col items-center relative z-10 shrink-0">
          {/* Photo Container */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-white shadow-lg mb-6 overflow-hidden shrink-0 relative">
            <Image
              src="/cv-photo.webp"
              alt="Joshua Ezra Petiunaung"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="w-full flex flex-col gap-5">
            {/* KONTAK */}
            <section>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-zinc-500 pb-1 mb-3">
                Kontak
              </h3>
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-center gap-3">
                  <Phone size={14} className="shrink-0 text-amber-500" />
                  <p>0878-1243-1720</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={14} className="shrink-0 text-amber-500" />
                  <p className="break-all">joshua.petiunaung56@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="shrink-0 mt-0.5 text-amber-500" />
                  <p>Bitung, Sulawesi Utara</p>
                </div>
              </div>
            </section>

            {/* SOSIAL MEDIA */}
            <section>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-zinc-500 pb-1 mb-3">
                Sosial Media
              </h3>
              <div className="space-y-3 text-xs text-zinc-300">
                <div className="flex items-center gap-3">
                  <FaInstagram size={14} className="shrink-0 text-amber-500" />
                  <p>@joshuapetiunaung</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaFacebook size={14} className="shrink-0 text-amber-500" />
                  <p>Joshua Petiunaung</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaLinkedin size={14} className="shrink-0 text-amber-500 mt-0.5" />
                  <p className="break-all leading-tight">joshua-ezra-petiunaung-80839642a</p>
                </div>
              </div>
            </section>

            {/* KEAHLIAN */}
            <section>
              <h3 className="text-sm font-bold text-white uppercase tracking-widest border-b border-zinc-500 pb-1 mb-3">
                Keahlian
              </h3>
              <ul className="list-disc list-inside text-xs text-zinc-300 space-y-1.5">
                <li>Perakitan PC & Instalasi OS</li>
                <li>Hardware Troubleshooting</li>
                <li>Jaringan LAN/WLAN</li>
                <li>Instalasi CCTV</li>
                <li>Web Development</li>
                <li>Desktop Apps</li>
                <li className="font-semibold text-amber-400">AI-Assisted Coding</li>
              </ul>
            </section>
          </div>
        </div>

        {/* RIGHT COLUMN - WHITE */}
        <div className="cv-right-col w-full md:w-[65%] bg-white px-5 sm:px-8 py-7 md:py-8 md:pt-10 relative flex flex-col gap-4">
          
          {/* Top Right Decoration to match the screenshot */}
          <div className="cv-corner-decor absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 overflow-hidden pointer-events-none">
            <div className="absolute top-[-20px] right-[-20px] w-0 h-0 border-l-[60px] sm:border-l-[80px] border-l-transparent border-b-[60px] sm:border-b-[80px] border-b-transparent border-t-[60px] sm:border-t-[80px] border-t-amber-500 border-r-[60px] sm:border-r-[80px] border-r-amber-500"></div>
            <div className="absolute top-[10px] right-[-30px] w-0 h-0 border-l-[45px] sm:border-l-[60px] border-l-transparent border-b-[75px] sm:border-b-[100px] border-b-transparent border-t-[75px] sm:border-t-[100px] border-t-[#1F2937] border-r-[45px] sm:border-r-[60px] border-r-[#1F2937]"></div>
          </div>

          {/* HEADER NAME */}
          <div className="mb-1 relative z-10 pr-12 md:pr-0">
            <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-black text-slate-800 tracking-tight leading-snug uppercase mb-1">
              JOSHUA EZRA PETIUNAUNG
            </h1>
            <h2 className="text-sm sm:text-base text-slate-600 italic">
              Fresh Graduate
            </h2>
          </div>
          
          {/* TENTANG SAYA */}
          <section className="relative z-10">
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wide">
              Tentang Saya
            </h3>
            <p className="text-xs leading-relaxed text-slate-600 text-justify">
              Berpengalaman sebagai IT Support Junior dan Software Developer Junior. Menguasai infrastruktur perangkat keras mulai dari perakitan PC, instalasi sistem operasi, hingga perbaikan jaringan dasar. Saya juga memiliki antusiasme tinggi dalam pengembangan perangkat lunak modern dan mampu membangun aplikasi web dan desktop secara efisien dengan bantuan teknologi AI.
            </p>
          </section>

          {/* PENGALAMAN KERJA */}
          <section>
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wide">
              Pengalaman Kerja
            </h3>
            <div className="mb-2">
              <div className="flex flex-wrap justify-between items-start gap-1 mb-0.5">
                <h4 className="font-bold text-slate-800 text-sm">IT Support Junior (Magang)</h4>
                <span className="text-slate-500 text-xs italic">10 Jun 2025 – 10 Ags 2025</span>
              </div>
              <h5 className="text-xs font-semibold text-slate-600 mb-1.5">PT. Salim Ivomas Pratama, Tbk Bitung (Bimoli)</h5>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-1">
                <li>Melakukan instalasi ulang OS (Windows) dan perakitan PC secara mandiri.</li>
                <li>Menangani perbaikan dan <em>maintenance</em> jaringan dasar perusahaan.</li>
                <li>Memasang dan mengonfigurasi sistem pemantauan keamanan (CCTV).</li>
              </ul>
            </div>
          </section>

          {/* PENDIDIKAN */}
          <section>
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wide">
              Pendidikan
            </h3>
            <div className="space-y-2">
              <div>
                <div className="flex flex-wrap justify-between items-start gap-1 mb-0.5">
                  <h4 className="font-bold text-slate-800 text-sm">S1 Universitas Sam Ratulangi</h4>
                  <span className="text-slate-500 text-xs italic">2022 – 2026</span>
                </div>
                <p className="text-xs text-slate-600">Teknik Informatika</p>
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-1 mb-0.5">
                  <h4 className="font-bold text-slate-800 text-sm">SMA N 2 Bitung</h4>
                  <span className="text-slate-500 text-xs italic">2019 – 2022</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-1 mb-0.5">
                  <h4 className="font-bold text-slate-800 text-sm">SMP Katolik Don Bosco Bitung</h4>
                  <span className="text-slate-500 text-xs italic">2016 – 2019</span>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap justify-between items-start gap-1 mb-0.5">
                  <h4 className="font-bold text-slate-800 text-sm">SD RK 2 Bitung</h4>
                  <span className="text-slate-500 text-xs italic">2010 – 2016</span>
                </div>
              </div>
            </div>
          </section>

          {/* PROYEK & PENCAPAIAN */}
          <section>
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wide">
              Proyek & Pencapaian
            </h3>
            
            <div className="mb-3">
              <h4 className="font-bold text-slate-800 text-sm mb-0.5">Website eLapor (Fullstack Laravel - Skripsi)</h4>
              <p className="text-xs text-slate-600 italic mb-1">SMP Katolik Don Bosco Bitung</p>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-1">
                <li>Membangun website resmi sekolah berbasis Fullstack Laravel yang terintegrasi dengan sistem pelaporan terpusat (eLapor).</li>
                <li>Pengembangan diakselerasi dan dioptimalkan secara signifikan menggunakan bantuan kecerdasan buatan (AI).</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 text-sm mb-0.5">Aplikasi Sistem Keuangan (Fullstack Desktop)</h4>
              <p className="text-xs text-slate-600 italic mb-1">SMP Katolik Don Bosco Bitung</p>
              <ul className="list-disc list-outside ml-4 text-xs text-slate-600 space-y-1">
                <li>Merancang dan mengembangkan aplikasi desktop Fullstack untuk mempermudah operasional dan rekapitulasi manajemen keuangan sekolah.</li>
                <li>Pengembangan diakselerasi dan dioptimalkan secara signifikan menggunakan bantuan kecerdasan buatan (AI).</li>
              </ul>
            </div>
          </section>

          {/* PROFIL PRIBADI */}
          <section>
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wide">
              Profil Pribadi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-xs text-slate-600">
              <div>
                <span className="font-semibold text-slate-800">Kelahiran:</span> Bitung, 29 Sep 2004
              </div>
              <div>
                <span className="font-semibold text-slate-800">Gender:</span> Laki-Laki
              </div>
              <div>
                <span className="font-semibold text-slate-800">Kewarganegaraan:</span> Indonesia
              </div>
            </div>
          </section>

          {/* HOBI */}
          <section>
            <h3 className="text-sm font-bold text-slate-800 border-b border-slate-300 pb-1 mb-2 uppercase tracking-wide">
              Hobi & Minat
            </h3>
            <p className="text-xs text-slate-600">
              Di luar dunia teknologi, saya sangat menikmati bermain musik. Instrumen utama yang saya mainkan adalah <strong>Keyboard</strong> dan <strong>Gitar Bass</strong>.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
