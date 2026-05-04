import { assets, infoList, toolsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const skills = [
  { name: 'Next.js / React',           level: 90 },
  { name: 'JavaScript / TypeScript',   level: 85 },
  { name: 'Tailwind CSS',              level: 88 },
  { name: 'React Native',              level: 78 },
  { name: 'AI-Assisted Development',   level: 92 },
];

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ── Section heading ── */}
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-xs uppercase tracking-widest font-semibold mb-3"
        style={{ color: '#ec1552' }}
      >
        Introduction
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo dark:text-white"
      >
        About <span className="gradient-text">Me</span>
      </motion.h2>

      {/* ── Two-column layout ── */}
      <div className="flex w-full flex-col lg:flex-row items-start gap-14 lg:gap-20 my-16">

        {/* Left — image + badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:w-[38%] flex justify-center lg:justify-start"
        >
          <div className="relative w-72 sm:w-80">
            {/* Glow halo */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl"
              style={{ background: 'linear-gradient(135deg, #ec1552, #7c3aed)' }}
            />
            <Image
              src={assets.user_image}
              alt="Precious Ngelale"
              className="relative w-full rounded-3xl shadow-2xl"
            />
            {/* Floating experience badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 -right-5 bg-white dark:bg-[#1a0035] border border-gray-100 dark:border-white/10 rounded-2xl px-5 py-3 shadow-xl"
            >
              <p className="text-[11px] text-gray-400 dark:text-gray-500">Experience</p>
              <p className="text-xl font-bold gradient-text leading-tight">2+ Years</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right — bio + skills + cards + tools */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex-1"
        >
          {/* Bio */}
          <p className="mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi, I'm{' '}
            <span className="font-semibold gradient-text">Precious Ngelale</span>, a web and
            mobile developer specialising in{' '}
            <span className="font-semibold text-gray-800 dark:text-white">Next.js, React Native,</span>{' '}
            and <span className="font-semibold text-gray-800 dark:text-white">Tailwind CSS</span>.
            I build fast, responsive web apps and cross-platform mobile experiences — writing clean,
            maintainable code that ships. I'm also well-versed in building alongside{' '}
            <span className="font-semibold text-gray-800 dark:text-white">AI tools</span>, using
            them to accelerate delivery without sacrificing code quality.
          </p>

          {/* Skill bars */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 uppercase tracking-wider mb-4">
              Technical Skills
            </h3>
            <div className="space-y-4">
              {skills.map(({ name, level }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08 }}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{name}</span>
                    <span className="text-sm font-semibold gradient-text">{level}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      transition={{ duration: 1.1, delay: 0.6 + i * 0.1, ease: [0.4, 0, 0.2, 1] }}
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #ec1552, #7c3aed)' }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {infoList.map(({ icon, iconDark, title, description }, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.12 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="gradient-border-card relative overflow-hidden border border-gray-200 dark:border-white/10 rounded-2xl p-5 cursor-pointer bg-white/60 dark:bg-white/4 backdrop-blur-sm hover:shadow-lg transition-all duration-400"
              >
                <div
                  className="absolute top-0 right-0 w-16 h-16 rounded-bl-full opacity-60"
                  style={{ background: 'linear-gradient(to bottom-left, rgba(236,21,82,0.12), transparent)' }}
                />
                <Image src={isDarkMode ? iconDark : icon} alt={title} className="w-8 mb-3" />
                <h3 className="font-semibold text-gray-800 dark:text-white text-sm mb-1">{title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{description}</p>
              </motion.li>
            ))}
          </ul>

          {/* Tools */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider mb-3">
              Tools I Use
            </h4>
            <ul className="flex items-center gap-3 flex-wrap">
              {toolsData.map((tool, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + i * 0.08, type: 'spring' }}
                  whileHover={{ scale: 1.18, rotate: 6 }}
                  className="flex items-center justify-center w-12 h-12 border border-gray-200 dark:border-white/10 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:border-accent/50 hover:shadow-sm transition-all duration-300"
                >
                  <Image src={tool} alt="Tool" className="w-7" />
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
