"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Download, Code, Wrench, Network, Briefcase, GraduationCap,
  Mail, ArrowUpRight, ChevronDown, Menu, X, ArrowDown,
  Home as HomeIcon, User, Cpu, FileText
} from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

/* ===== SECTION REVEAL — lightweight, repeating ===== */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.12], [0, -40]);

  // Parallax effects for global background assets
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: <HomeIcon size={14} /> },
    { name: "Profile", href: "#profile", icon: <User size={14} /> },
    { name: "About", href: "#about", icon: <GraduationCap size={14} /> },
    { name: "Projects", href: "#projects", icon: <Code size={14} /> },
    { name: "Skills", href: "#skills", icon: <Cpu size={14} /> },
    { name: "Portfolio", href: "#portfolio", icon: <Briefcase size={14} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={14} /> },
  ];

  const skills = [
    {
      title: "Teknisi Hardware & Perakitan PC",
      desc: "Berpengalaman dalam bongkar pasang, perakitan PC, diagnosa kerusakan perangkat keras, instalasi sistem operasi Windows, hingga maintenance rutin komputer kerja.",
      icon: <Wrench size={24} />,
    },
    {
      title: "Jaringan & Sistem CCTV",
      desc: "Mampu melakukan crimping kabel LAN (RJ45), konfigurasi dasar switch/router, penarikan kabel jaringan, serta instalasi dan maintenance kamera CCTV.",
      icon: <Network size={24} />,
    },
    {
      title: "Software & Web Development (AI-Assisted)",
      desc: "Menguasai pembuatan aplikasi web dan desktop menggunakan framework modern seperti Laravel, Next.js, React, serta integrasi AI (Kecerdasan Buatan) untuk efisiensi perancangan sistem.",
      icon: <Code size={24} />,
    },
  ];

  const portfolio = [
    {
      title: "Website SMP Katolik Don Bosco Bitung",
      subtitle: "Fullstack Laravel • Tugas Akhir (Skripsi)",
      desc: "Membangun website resmi sekolah berbasis Fullstack Laravel dengan integrasi fitur eLapor untuk pelaporan dan transparansi informasi sekolah secara real-time.",
      icon: <GraduationCap size={20} />,
    },
    {
      title: "Aplikasi Desktop Sistem Keuangan",
      subtitle: "Fullstack Desktop App",
      desc: "Merancang dan membangun aplikasi desktop Fullstack untuk manajemen SBOP dan Dana Pembangunan sekolah SMP Katolik Don Bosco Bitung.",
      icon: <Briefcase size={20} />,
    },
    {
      title: "IT Support Junior (Magang)",
      subtitle: "PT. Salim Ivomas Pratama, Tbk Bitung (Bimoli)",
      desc: "Menangani troubleshooting hardware, instalasi OS Windows, maintenance jaringan LAN dasar, serta perakitan dan konfigurasi CCTV di lingkungan operasional pabrik.",
      icon: <Wrench size={20} />,
    },
  ];

  const contacts = [
    { label: "Email", href: "mailto:petiunaungjoshua@gmail.com", icon: <Mail size={18} /> },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/joshua-petiunaung-491419356/", icon: <FaLinkedin size={18} />, external: true },
    { label: "Instagram", href: "https://www.instagram.com/joshuapetiunaung", icon: <FaInstagram size={18} />, external: true },
    { label: "Facebook", href: "https://www.facebook.com/share/18H2vH1bYt/", icon: <FaFacebook size={18} />, external: true },
  ];

  return (
    <div className="min-h-screen relative">
      {/* ===== GLOBAL BACKGROUND GRID & AMBIENT GLOW ===== */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden tech-grid-bg">
        {/* Ambient Glow Orbs */}
        <div className="bg-glow">
          <div className="bg-glow-orb bg-glow-orb-1"></div>
          <div className="bg-glow-orb bg-glow-orb-2"></div>
        </div>

        {/* Laser Beams on subtle vertical guide lines */}
        <div className="block absolute left-2 sm:left-4 md:left-[8%] inset-y-0 w-px bg-white/[0.03]">
          <div className="laser-beam" style={{ animationDelay: "0s" }}></div>
        </div>
        <div className="block absolute right-2 sm:right-4 md:right-[8%] inset-y-0 w-px bg-white/[0.03]">
          <div className="laser-beam" style={{ animationDelay: "4s" }}></div>
        </div>

        {/* Subtle Cyber Crosshairs (+) on Viewport Corners */}
        <div className="absolute top-24 left-4 md:left-10 text-white/10 font-mono text-xs select-none">+</div>
        <div className="absolute top-24 right-4 md:right-10 text-white/10 font-mono text-xs select-none">+</div>
        <div className="absolute top-1/2 left-3 md:left-8 text-white/10 font-mono text-xs select-none">+</div>
        <div className="absolute top-1/2 right-3 md:right-8 text-white/10 font-mono text-xs select-none">+</div>
        <div className="absolute bottom-24 left-4 md:left-10 text-white/10 font-mono text-xs select-none">+</div>
        <div className="absolute bottom-24 right-4 md:right-10 text-white/10 font-mono text-xs select-none">+</div>
      </div>

      {/* ===== NAVBAR (CYBER FLOATING ISLAND) ===== */}
      <motion.nav
        className="fixed w-full z-50 top-0 left-0 right-0 px-4 sm:px-6 pt-3 pointer-events-none"
        initial={false}
        animate={{ y: navVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between px-3 sm:px-4 py-2 nav-glass rounded-full pointer-events-auto transition-all duration-300">
          {/* Brand Logo & Avatar Badge */}
          <a href="#home" className="flex items-center gap-2.5 pl-1.5 pr-2 py-1 rounded-full hover:bg-white/[0.04] transition-colors group">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/20 group-hover:border-accent/60 transition-colors shadow-sm bg-neutral-900">
              <Image src="/new-profile-photo.jpg" alt="Jozhh" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-bold tracking-tight font-[family-name:var(--font-heading)] gradient-text">Jozhh</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              </div>
              <span className="text-[8px] sm:text-[9px] font-mono text-muted-foreground/60 tracking-wider -mt-1 uppercase">IT Support &amp; Dev</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.05] p-1 rounded-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-white/[0.08] transition-all duration-200 group flex items-center gap-1.5"
              >
                <span className="text-muted-foreground/60 group-hover:text-accent transition-colors">{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Quick Action Button (Contact) */}
          <div className="hidden sm:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-foreground text-background hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] transition-all duration-200"
            >
              <span>Contact</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 border border-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="max-w-5xl mx-auto mt-2 p-3 bg-background/95 backdrop-blur-2xl flex flex-col gap-2 lg:hidden rounded-3xl border border-white/10 shadow-2xl pointer-events-auto"
            >
              <div className="grid grid-cols-2 gap-1.5 p-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 p-2.5 rounded-2xl transition-colors border border-transparent hover:border-white/5"
                  >
                    <span className="text-accent/80">{item.icon}</span>
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
              <div className="pt-2 border-t border-white/[0.06]">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-foreground text-background hover:bg-white transition-colors"
                >
                  <span>Hubungi Saya</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <main className="relative z-10">
        {/* ===== HERO (CINEMATIC HOOK) ===== */}
        <motion.section
          id="home"
          className="min-h-screen flex flex-col items-center justify-center px-6 relative pt-28 pb-16 text-center overflow-hidden"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          {/* Unique Background Asset for Hero */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Rotating Tech Gyroscope (Top Right) */}
            <div className="absolute top-[8%] -right-8 sm:right-4 md:right-[10%] w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 pointer-events-none opacity-60 md:opacity-100">
              <div className="w-full h-full rounded-full border border-dashed border-accent/20 animate-spin-slow relative flex items-center justify-center">
                <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-accent/60 shadow-[0_0_12px_rgba(192,192,192,0.8)]"></div>
                <div className="w-3/4 h-3/4 rounded-full border border-white/10 animate-spin-slow-reverse flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full border border-accent/25 bg-accent/[0.02]"></div>
                </div>
              </div>
            </div>

            {/* Floating Hero Cyber Badges */}
            <div className="flex absolute top-[16%] sm:top-[20%] left-2 sm:left-6 md:left-[8%] animate-float-1 items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-[9px] md:text-[10px] font-mono text-muted-foreground/80 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>SYS_CORE: OPTIMAL</span>
            </div>
            <div className="flex absolute bottom-[18%] sm:bottom-[22%] right-2 sm:right-6 md:right-[8%] animate-float-2 items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-[9px] md:text-[10px] font-mono text-muted-foreground/80 scale-90 sm:scale-100">
              <span className="text-accent/50">&lt;/&gt;</span>
              <span>FULLSTACK_LARAVEL</span>
            </div>
          </div>

          <div className="max-w-4xl mx-auto w-full flex flex-col items-center relative z-10">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08] backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider uppercase text-foreground/80">
                IT Support Junior &amp; Software Developer
              </span>
            </motion.div>

            {/* Cinematic Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight font-[family-name:var(--font-heading)] leading-[1.1] mb-6 glow-text"
            >
              Bridging <span className="gradient-text-hero">IT Infrastructure</span> &amp; Modern <span className="gradient-text-hero">Software Engineering</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl font-[family-name:var(--font-heading)] leading-relaxed mb-10"
            >
              Building robust technological foundations — from hardware infrastructure, networking &amp; CCTV, to modern web and AI-integrated desktop application development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex justify-center items-center mb-14"
            >
              <a href="#profile" className="btn-premium">
                <span>Explore Profile</span>
                <ArrowDown size={16} />
              </a>
            </motion.div>

            {/* Marquee Ticker */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-full max-w-4xl overflow-hidden py-2 md:py-2.5 border-y border-white/[0.05] bg-white/[0.01] relative"
            >
              <div className="absolute left-0 inset-y-0 w-12 md:w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 inset-y-0 w-12 md:w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

              <div className="animate-marquee gap-6 items-center text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground/80 font-medium whitespace-nowrap">
                {["IT SUPPORT JUNIOR", "SOFTWARE DEVELOPER (AI-ASSISTED)", "LARAVEL, NEXT.JS & REACT", "CCTV & NETWORK SYSTEMS", "PC BUILD & MAINTENANCE", "MUSICIAN (PIANO & BASS)", "BITUNG, INDONESIA"].map((text, i) => (
                  <span key={i} className="flex items-center gap-6">
                    <span>{text}</span>
                    <span className="text-accent/30">•</span>
                  </span>
                ))}
                {["IT SUPPORT JUNIOR", "SOFTWARE DEVELOPER (AI-ASSISTED)", "LARAVEL, NEXT.JS & REACT", "CCTV & NETWORK SYSTEMS", "PC BUILD & MAINTENANCE", "MUSICIAN (PIANO & BASS)", "BITUNG, INDONESIA"].map((text, i) => (
                  <span key={`dup-${i}`} className="flex items-center gap-6">
                    <span>{text}</span>
                    <span className="text-accent/30">•</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="hidden sm:flex absolute bottom-4 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown size={16} className="text-accent/50" />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="glow-line"></div></div>

        {/* ===== PERSONAL PROFILE ===== */}
        <section id="profile" className="py-12 md:py-16 relative overflow-hidden">
          {/* Unique Background Asset for Profile */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div style={{ y: y1 }} className="absolute top-[5%] -right-10 sm:right-2 md:right-[6%] w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border border-dashed border-accent/20 animate-spin-slow opacity-60 md:opacity-100" />
            <motion.div style={{ y: y2 }} className="absolute bottom-[5%] -left-6 sm:left-2 md:left-[4%] pointer-events-none animate-float-1">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex items-center justify-center">
                <div className="w-full h-full rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.04] to-transparent rotate-45 animate-spin-slow" />
                <div className="absolute w-2/3 h-2/3 rounded-xl border border-white/10 rotate-12 animate-spin-slow-reverse" />
                <div className="absolute w-2 h-2 rounded-full bg-accent/40 shadow-[0_0_8px_rgba(192,192,192,0.6)]" />
              </div>
            </motion.div>
            <div className="flex absolute top-[6%] sm:top-[12%] left-2 sm:left-6 md:left-[8%] animate-float-2 items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-[9px] md:text-[10px] font-mono text-muted-foreground/80 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>ID: Jozhh // 2026</span>
            </div>
            <div className="flex absolute bottom-[6%] sm:bottom-[12%] right-2 sm:right-6 md:right-[8%] animate-float-1 items-center gap-1.5 md:gap-2 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm text-[9px] md:text-[10px] font-mono text-muted-foreground/80 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
              <span>01001001 01010100</span>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
            {/* Text */}
            <Reveal className="flex-1 flex flex-col items-center text-center md:items-start md:text-left gap-5 md:gap-6 w-full">
              <div className="flex items-center gap-4">
                <div className="section-divider"></div>
                <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-medium">Personal Profile</span>
              </div>

              <div className="flex flex-col gap-1.5 items-center md:items-start">
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-tight text-foreground/50 leading-none font-[family-name:var(--font-heading)]">
                  Halo, Saya
                </h2>
                <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-[family-name:var(--font-heading)] gradient-text-hero glow-text tracking-tight whitespace-nowrap">
                  Joshua Ezra Petiunaung
                </h3>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-[family-name:var(--font-heading)] max-w-xl">
                Fresh Graduate <strong className="text-foreground">Teknik Informatika Universitas Sam Ratulangi</strong> angkatan 2022 lulus tahun 2026. Memiliki pengalaman teknis sebagai <strong className="text-foreground">IT Support Junior di PT. Salim Ivomas Pratama, Tbk Bitung (Bimoli)</strong> serta aktif mengembangkan sistem perangkat lunak web &amp; desktop.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-1">
                <a href="/cv" target="_blank" rel="noopener noreferrer" className="btn-premium">
                  <span>Lihat &amp; Download CV</span>
                  <Download size={16} />
                </a>
                <a href="#about" className="btn-outline-premium">
                  <span>Tentang Saya</span>
                  <ArrowDown size={16} />
                </a>
              </div>
            </Reveal>

            {/* Photo */}
            <Reveal delay={0.2} className="flex-1 relative flex justify-center items-center w-full">
              {/* Subtle glow behind photo */}
              <div className="absolute w-[240px] h-[300px] sm:w-[280px] sm:h-[345px] md:w-[380px] md:h-[465px] rounded-3xl bg-gradient-to-br from-accent/15 via-transparent to-accent/5 rotate-3"></div>

              {/* Decorative lines */}
              <div className="hidden sm:block absolute -top-6 right-10 md:right-16 w-px h-16 bg-gradient-to-b from-accent/40 to-transparent"></div>
              <div className="hidden sm:block absolute top-14 -right-1 md:right-5 w-2 h-2 bg-accent/30 rounded-full"></div>
              <div className="hidden sm:block absolute bottom-10 left-4 md:left-10 w-8 h-px bg-gradient-to-r from-accent/40 to-transparent"></div>

              {/* Photo */}
              <div className="relative w-[230px] h-[290px] sm:w-[265px] sm:h-[330px] md:w-[365px] md:h-[450px] rounded-3xl overflow-hidden border border-white/[0.06] shadow-[0_0_60px_rgba(192,192,192,0.06)]">
                <Image
                  src="/new-profile-photo.jpg"
                  alt="Joshua Ezra Petiunaung"
                  fill
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ===== ABOUT ===== */}
        <section id="about" className="py-12 md:py-16 relative overflow-hidden">
          {/* Unique Asset for About */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div animate={{ opacity: [0.06, 0.18, 0.06] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[10%] -right-6 sm:right-4 md:right-[10%] w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.35)_0%,transparent_70%)]" />
            <motion.div style={{ y: y3 }} className="absolute top-[15%] -left-6 sm:left-2 md:left-[5%] animate-float-1">
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 border border-blue-500/25 rounded-2xl rotate-45 animate-spin-slow-reverse flex items-center justify-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 border border-blue-400/20 rounded-xl rotate-12"></div>
              </div>
            </motion.div>
            <div className="flex absolute top-[3%] sm:top-[5%] right-2 sm:right-6 md:right-[8%] animate-float-2 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-blue-500/20 bg-blue-500/[0.04] text-[9px] md:text-[10px] font-mono text-blue-300/80 scale-90 sm:scale-100">
              <span>&#123; role: &quot;IT_Support &amp; Dev&quot;, music: &quot;Piano &amp; Bass&quot; &#125;</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-3">
                <div className="section-divider"></div>
                <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-medium">About Me</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-8">
                Tentang Saya
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card p-8 md:p-12 space-y-6">
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-[family-name:var(--font-heading)]">
                  Perkenalkan, nama lengkap saya <strong className="text-foreground">Joshua Ezra Petiunaung</strong>, lahir di Bitung pada 29 September 2004. Saya merupakan <strong className="text-foreground">Fresh Graduate</strong> dari program studi <strong className="text-foreground">Teknik Informatika, Universitas Sam Ratulangi</strong> angkatan 2022 lulus tahun 2026. Saya memiliki pengalaman magang di <strong className="text-foreground">PT. Salim Ivomas Pratama, Tbk Bitung (Bimoli)</strong> sebagai IT Support Junior. Di sana, saya terbiasa menangani operasional teknis seperti perakitan PC, instalasi ulang Windows, pemasangan sistem CCTV, hingga perbaikan masalah jaringan dasar.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-[family-name:var(--font-heading)]">
                  Selain infrastruktur keras, saya juga sangat antusias dalam pengembangan perangkat lunak. Dengan memanfaatkan dukungan <strong className="text-foreground">AI (Kecerdasan Buatan)</strong> untuk memaksimalkan efisiensi <em>coding</em>, saya berhasil merancang <strong className="text-foreground">Website SMP Katolik Don Bosco Bitung</strong> dengan fitur eLapor sebagai tugas akhir skripsi, serta mengembangkan <strong className="text-foreground">Aplikasi Desktop Sistem Keuangan</strong> untuk sekolah yang sama.
                </p>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-[family-name:var(--font-heading)]">
                  Di luar ketertarikan saya pada dunia teknologi, saya juga memiliki minat yang besar pada seni. Saya sangat hobi bermain musik, khususnya memainkan instrumen <strong className="text-foreground">Piano</strong> dan <strong className="text-foreground">Gitar Bass</strong>, yang membantu saya menyeimbangkan logika teknis dengan kreativitas.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="glow-line"></div></div>

        {/* ===== PROJECT SHOWCASE ===== */}
        <section id="projects" className="py-12 md:py-16 relative overflow-hidden">
          {/* Unique Asset for Projects */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div animate={{ opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] -left-10 sm:left-0 md:left-[-5%] w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.3)_0%,transparent_70%)]" />
            <div className="absolute top-[6%] -right-10 sm:right-2 md:right-[6%] w-52 h-52 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full border border-dashed border-purple-500/20 animate-spin-slow flex items-center justify-center opacity-60 md:opacity-100">
              <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border border-purple-400/10 animate-spin-slow-reverse"></div>
            </div>
            <div className="flex absolute top-[3%] sm:top-[5%] left-2 sm:left-6 md:left-[8%] animate-float-1 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-purple-500/20 bg-purple-500/[0.04] text-[9px] md:text-[10px] font-mono text-purple-300/80 scale-90 sm:scale-100">
              <span className="text-purple-400">&lt;/&gt;</span>
              <span>FULLSTACK_LARAVEL_SYSTEM</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <Reveal>
              <div className="flex items-center gap-4 mb-3">
                <div className="section-divider"></div>
                <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-medium">Projects</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-8">
                Karya Saya
              </h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Reveal delay={0.05}>
                <div className="card overflow-hidden h-full group">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src="/project-website-donbosco.png"
                      alt="Website SMP Katolik Don Bosco Bitung"
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--muted)] to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <GraduationCap size={16} className="text-accent" />
                      <span className="text-xs text-accent font-medium tracking-wide uppercase">Fullstack Laravel • Tugas Akhir (Skripsi)</span>
                    </div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-foreground mb-2">
                      Website SMP Katolik Don Bosco Bitung
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Membangun website resmi sekolah SMP Katolik Don Bosco Bitung berbasis <strong className="text-foreground">Fullstack Laravel</strong> dengan mengintegrasikan fitur <strong className="text-foreground">E-Lapor</strong> di dalamnya untuk sistem pelaporan dan informasi terpusat.
                    </p>
                    <a
                      href="https://smpkatdonboscobitung.id"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent text-sm font-medium mt-3 hover:text-foreground transition-colors duration-200"
                    >
                      smpkatdonboscobitung.id
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card overflow-hidden h-full group">
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src="/project-sistem-keuangan.png"
                      alt="Aplikasi Sistem Keuangan"
                      fill
                      className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--muted)] to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase size={16} className="text-accent" />
                      <span className="text-xs text-accent font-medium tracking-wide uppercase">Fullstack Desktop App</span>
                    </div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-foreground mb-2">
                      Aplikasi Sistem Keuangan
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Aplikasi desktop <strong className="text-foreground">Fullstack</strong> untuk mengelola keuangan sekolah, termasuk pengelolaan <strong className="text-foreground">SBOP</strong> dan <strong className="text-foreground">Dana Pembangunan</strong> secara terstruktur dan efisien.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="glow-line"></div></div>

        {/* ===== SKILLS ===== */}
        <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
          {/* Unique Asset for Skills */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div animate={{ y: [60, -60], opacity: [0, 0.6, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} className="absolute top-[60%] left-[8%] sm:left-[12%] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400/50 shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
            <motion.div animate={{ y: [100, -100], opacity: [0, 0.5, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: 2 }} className="absolute top-[70%] left-[22%] sm:left-[28%] w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent/40 shadow-[0_0_8px_rgba(192,192,192,0.5)]" />
            <motion.div animate={{ y: [80, -80], opacity: [0, 0.7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "linear", delay: 4 }} className="absolute top-[50%] right-[10%] sm:right-[18%] w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-amber-300/60" />
            <motion.div style={{ y: y4 }} className="absolute top-[10%] -right-10 sm:right-2 md:right-[5%] w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-3xl border border-amber-500/15 rotate-12 animate-spin-slow opacity-60 md:opacity-100" />
            <div className="flex absolute top-[3%] sm:top-[5%] right-2 sm:right-6 md:right-[10%] animate-float-2 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-amber-500/20 bg-amber-500/[0.04] text-[9px] md:text-[10px] font-mono text-amber-300/80 scale-90 sm:scale-100">
              <span>[ HARDWARE // NETWORK // AI ]</span>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <Reveal className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="section-divider"></div>
                <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-medium">Expertise</span>
                <div className="section-divider" style={{ transform: "scaleX(-1)" }}></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-3">
                My Skills
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                Berikut adalah keahlian teknis yang saya kuasai, mulai dari penanganan infrastruktur keras hingga pengembangan perangkat lunak.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="card p-8 h-full flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-accent/5 border border-accent/10 flex items-center justify-center mb-6 text-accent">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-foreground mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {skill.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="glow-line"></div></div>

        {/* ===== PORTFOLIO ===== */}
        <section id="portfolio" className="py-12 md:py-16 relative overflow-hidden">
          {/* Unique Asset for Portfolio */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <motion.div animate={{ scale: [1, 1.25, 1], opacity: [0.05, 0.2, 0.05] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[10%] -left-10 sm:left-2 md:left-[8%] w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border border-emerald-500/20" />
            <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.25, 0.08] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[16%] -left-4 sm:left-6 md:left-[13%] w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border border-emerald-400/15" />
            <motion.div style={{ y: y2 }} className="absolute top-[15%] -right-6 sm:right-2 md:right-[8%] w-24 h-24 sm:w-30 sm:h-30 md:w-36 md:h-36 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent rotate-45 animate-spin-slow-reverse" />
            <div className="flex absolute top-[6%] sm:top-[10%] left-2 sm:left-6 md:left-[8%] animate-float-1 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/[0.04] text-[9px] md:text-[10px] font-mono text-emerald-300/80 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>// WORK_LOG: 2022_2026</span>
            </div>
          </div>
          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <Reveal className="text-center mb-10">
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="section-divider"></div>
                <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-medium">Works</span>
                <div className="section-divider" style={{ transform: "scaleX(-1)" }}></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-3">
                Pengalaman & Portofolio
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                Beberapa pencapaian, proyek utama, dan pengalaman kerja teknis yang telah saya selesaikan.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <Reveal key={index} delay={index * 0.08}>
                  <div className="card p-8 h-full flex flex-col group">
                    <div className="w-12 h-12 rounded-full bg-accent/5 border border-accent/10 flex items-center justify-center mb-5 text-accent">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-accent font-medium tracking-wide mb-4">
                      {item.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {item.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-6"><div className="glow-line"></div></div>

        {/* ===== CONTACT ===== */}
        <section id="contact" className="py-12 md:py-16 relative overflow-hidden">
          {/* Unique Asset for Contact */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center">
            {/* Center expanding beacon ripples */}
            <div className="absolute w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-accent/30 animate-beacon-1"></div>
            <div className="absolute w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-accent/20 animate-beacon-2"></div>
            <div className="absolute w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full border border-accent/15 animate-beacon-3"></div>
            <motion.div animate={{ opacity: [0.05, 0.15, 0.05] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(192,192,192,0.08)_0%,transparent_70%)]" />
            <div className="flex absolute top-[6%] sm:top-[10%] right-2 sm:right-6 md:right-[12%] animate-float-1 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-[9px] md:text-[10px] font-mono text-muted-foreground/80 scale-90 sm:scale-100">
              <span>LOC: 1.4404° N, 125.1217° E</span>
            </div>
            <div className="flex absolute bottom-[4%] sm:bottom-[10%] left-2 sm:left-6 md:left-[10%] animate-float-2 items-center gap-1.5 md:gap-2 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg border border-white/10 bg-white/[0.03] text-[9px] md:text-[10px] font-mono text-muted-foreground/80 scale-90 sm:scale-100">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span>STATUS: OPEN_FOR_OPPORTUNITIES</span>
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
              <div className="flex items-center justify-center gap-4 mb-3">
                <div className="section-divider"></div>
                <span className="text-xs text-muted-foreground tracking-[0.3em] uppercase font-medium">Get in Touch</span>
                <div className="section-divider" style={{ transform: "scaleX(-1)" }}></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-3">
                Hubungi Saya
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg mb-8">
                Tertarik untuk bekerja sama atau memiliki pertanyaan? Hubungi saya melalui platform di bawah ini.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-wrap justify-center gap-4">
                {contacts.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={contact.external ? "noopener noreferrer" : undefined}
                    className="card flex items-center gap-3 px-6 py-4 group"
                  >
                    <span className="text-accent group-hover:scale-110 transition-transform duration-200">
                      {contact.icon}
                    </span>
                    <span className="font-medium text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-200">
                      {contact.label}
                    </span>
                    {contact.external && (
                      <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-accent transition-colors duration-200" />
                    )}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="relative z-10 py-12 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="glow-line mb-8"></div>
          <div className="text-xl font-bold tracking-tighter font-[family-name:var(--font-heading)] mb-4">
            <span className="gradient-text">Jozhh</span>
            <span className="text-muted-foreground">.</span>
          </div>
          <p className="text-muted-foreground/60 text-sm">
            © {new Date().getFullYear()} Joshua Ezra Petiunaung. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
