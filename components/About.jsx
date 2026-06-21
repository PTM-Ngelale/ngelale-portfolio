import { assets, infoList, toolsData, certsData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const capabilityGroups = [
  {
    heading: 'AI Agents',
    items: ['Multi-agent architecture', 'Tool use & function calling', 'Memory & state management', 'LangGraph, MCP, A2A', 'Guardrails & grounding'],
  },
  {
    heading: 'Full-stack',
    items: ['TypeScript — end to end', 'Next.js & Hono', 'React Native + Expo', 'Supabase', 'Claude Code'],
  },
  {
    heading: 'Platforms & Cloud',
    items: ['Azure AI Foundry', 'Anthropic API', 'WhatsApp Business Platform', 'Google Sheets API'],
  },
  {
    heading: 'Domains',
    items: ['Fintech — payments, USDC, FX', 'Financial document intelligence', 'African / Nigerian markets', 'Offline-first systems'],
  },
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
              <p className="text-xl font-bold gradient-text leading-tight">4+ Years</p>
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
          <div className="mb-8 space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I'm a full-stack developer. The last year or so I've been going deep on{' '}
              <span className="font-semibold text-gray-800 dark:text-white">AI agents</span> — not
              chatbots, but things that actually do work: pull data, reconcile records, draft
              documents.
            </p>
            <p>
              My production background is in{' '}
              <span className="font-semibold text-gray-800 dark:text-white">fintech</span>. I helped
              build a WhatsApp USDC payments bot at Flipeet — the actual shipping parts: auth flows,
              getting through Meta's approval process, picking a BSP. That showed up in how I build
              now. I care more about what happens on a bad network than how clever the architecture
              looks.
            </p>
            <p>
              Most of what I build is for{' '}
              <span className="font-semibold text-gray-800 dark:text-white">Nigerian markets</span>{' '}
              — fintech, SME tooling, and some side stuff around football. TypeScript across the
              board, Claude Code day-to-day. The problems I like best are the ones where there's a
              real gap and nobody's bothered to fill it properly yet.
            </p>
          </div>

          {/* Capability groups */}
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-gray-700 dark:text-white/80 uppercase tracking-wider mb-4">
              What I work with
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {capabilityGroups.map(({ heading, items }, i) => (
                <motion.div
                  key={heading}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/4 p-4"
                >
                  <p
                    className="text-[11px] font-semibold uppercase tracking-wider mb-2.5"
                    style={{ color: '#ec1552' }}
                  >
                    {heading}
                  </p>
                  <ul className="space-y-1">
                    {items.map((item) => (
                      <li key={item} className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-1.5">
                        <span className="mt-1 w-1 h-1 rounded-full flex-shrink-0" style={{ background: '#ec1552' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
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
          <div className="mb-10">
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

          {/* Certifications */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 dark:text-white/70 uppercase tracking-wider mb-3">
              Certifications & Learning
            </h4>
            <ul className="space-y-2.5">
              {certsData.map(({ status, title, detail }) => (
                <motion.li
                  key={title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-0.5 shrink-0 text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full"
                    style={
                      status === 'Completed'
                        ? { background: 'rgba(16,185,129,0.12)', color: '#10b981' }
                        : { background: 'rgba(236,21,82,0.1)', color: '#ec1552' }
                    }
                  >
                    {status}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-white leading-snug">{title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{detail}</p>
                  </div>
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
