"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const roles = [
  "Web Developer",
  "Mobile Developer",
  "Next.js Developer",
  "AI-Powered Builder",
];

const Header = ({ isDarkMode }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [stats, setStats] = useState({ years: 0, projects: 0, clients: 0 });

  /* ── Role cycling ─────────────────────────────────── */
  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      3000,
    );
    return () => clearInterval(id);
  }, []);

  /* ── Counter animation ────────────────────────────── */
  useEffect(() => {
    const targets = { years: 2, projects: 5, clients: 10 };
    const duration = 1800;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      setStats({
        years: Math.floor(targets.years * ease),
        projects: Math.floor(targets.projects * ease),
        clients: Math.floor(targets.clients * ease),
      });
      if (t < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Ambient background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -right-32 w-[500px] h-[500px] rounded-full blob-filter animate-blob"
          style={{
            background:
              "radial-gradient(circle, rgba(236,21,82,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-32 w-[440px] h-[440px] rounded-full blob-filter animate-blob-delayed"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full blob-filter animate-blob-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(236,21,82,0.15) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 w-11/12 max-w-4xl mx-auto flex flex-col items-center gap-6 text-center pt-24 pb-16">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          className="relative"
        >
          <div className="relative w-36 h-36 sm:w-40 sm:h-40">
            <div
              className="absolute inset-[-10px] rounded-full animate-spin-slow opacity-60"
              style={{ border: "2px dashed rgba(236,21,82,0.5)" }}
            />
            <div
              className="absolute inset-0 rounded-full blur-xl scale-125 opacity-40"
              style={{
                background: "linear-gradient(135deg, #ec1552, #7c3aed)",
              }}
            />
            <Image
              src={assets.profile_img}
              alt="Precious Ngelale"
              width={160}
              height={160}
              className="relative rounded-full w-full h-full object-cover ring-4 ring-white/30 dark:ring-white/10"
              priority
            />
            <span className="absolute bottom-2 right-2 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white dark:border-darkTheme" />
          </div>
        </motion.div>

        {/* Greeting pill */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 dark:bg-white/8 border border-gray-200 dark:border-white/10 shadow-sm backdrop-blur-sm"
        >
          <Image src={assets.hand_icon} alt="" className="w-5" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Hi there! I'm Precious Ngelale
          </span>
        </motion.div>

        {/* Main headline + role switcher */}
        <div className="space-y-2">
          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-[68px] font-bold font-Ovo leading-tight dark:text-white"
          >
            Building beautiful
          </motion.h1>

          {/* Animated role */}
          <div className="h-[60px] sm:h-[80px] lg:h-[88px] flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 56, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -56, opacity: 0 }}
                transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
                className="text-4xl sm:text-6xl lg:text-[68px] font-bold font-Ovo gradient-text-animated block"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.h1
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-[68px] font-bold font-Ovo leading-tight dark:text-white"
          >
            experiences
          </motion.h1>
        </div>

        {/* Sub-description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="max-w-xl text-gray-500 dark:text-gray-400 text-base leading-relaxed"
        >
          I'm a frontend developer from Port Harcourt, Nigeria — crafting
          performant, pixel-perfect interfaces with React, Next.js, and a
          passion for great UX.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(236,21,82,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative overflow-hidden px-8 py-3.5 rounded-full font-medium text-white flex items-center gap-2 shadow-glow"
            style={{ background: "linear-gradient(135deg, #ec1552, #7c3aed)" }}
          >
            Let's Work Together
            <Image src={assets.right_arrow_white} alt="" className="w-4" />
          </motion.a>

          <motion.a
            href="/sample-resume.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-full font-medium flex items-center gap-2 border-2 border-gray-300 dark:border-white/20 text-gray-700 dark:text-white hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent transition-all duration-300"
          >
            Download CV
            <Image src={assets.download_icon} alt="" className="w-4" />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.55 }}
          className="flex items-center gap-10 sm:gap-16 pt-6 mt-2 border-t border-gray-200 dark:border-white/10"
        >
          {[
            { value: `${stats.years}+`, label: "Years Experience" },
            { value: `${stats.projects}+`, label: "Projects Built" },
            { value: `${stats.clients}+`, label: "Happy Clients" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 whitespace-nowrap">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-400 dark:text-gray-600 tracking-widest uppercase"></span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #ec1552, transparent)",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Header;
