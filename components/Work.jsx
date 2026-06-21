import { assets, workData, moreBuildData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const statusStyles = {
  live:     { bg: 'rgba(16,185,129,0.12)', text: '#10b981', label: 'Live' },
  'in-build': { bg: 'rgba(236,21,82,0.1)',  text: '#ec1552', label: 'In build' },
  shipped:  { bg: 'rgba(124,58,237,0.1)', text: '#7c3aed', label: 'Shipped' },
};

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      id="work"
      className="w-full px-[12%] py-20 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* ── Section heading ── */}
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center text-xs uppercase tracking-widest font-semibold mb-3"
        style={{ color: '#ec1552' }}
      >
        Selected work
      </motion.p>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo dark:text-white"
      >
        Case <span className="gradient-text">Files</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-14 text-gray-500 dark:text-gray-400"
      >
        Things I've actually built and shipped, or am building now.
      </motion.p>

      {/* ── Featured project grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {workData.map((project, i) => {
          const s = statusStyles[project.status] ?? statusStyles.live;
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-200 dark:bg-gray-800"
              style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Overlay gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 55%, transparent 100%)' }}
              />

              {/* Status badge */}
              <div className="absolute top-4 left-4">
                <span
                  className="text-[10px] font-semibold uppercase px-2.5 py-1 rounded-full"
                  style={{ background: s.bg, color: s.text }}
                >
                  {s.label}
                </span>
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Tech stack tags — slide up on hover */}
                <div className="flex flex-wrap gap-2 mb-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.stack.map(tag => (
                    <span
                      key={tag}
                      className="text-[11px] text-white px-2.5 py-1 rounded-full border border-white/25 bg-white/10 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + arrow */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-white/50 mb-0.5 uppercase tracking-wider">{project.category}</p>
                    <h2 className="font-bold text-white text-xl leading-tight mb-1">
                      {project.title}
                    </h2>
                    <p className="text-xs text-white/60 leading-relaxed line-clamp-2">{project.summary}</p>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:shadow-glow"
                    style={{ background: 'linear-gradient(135deg, #ec1552, #7c3aed)' }}
                  >
                    <Image src={assets.send_icon} alt="View project" className="w-5 brightness-0 invert" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ── More builds heading ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-20 mb-6"
      >
        <p
          className="text-xs uppercase tracking-widest font-semibold mb-1"
          style={{ color: '#ec1552' }}
        >
          More builds
        </p>
        <h3 className="text-2xl font-bold font-Ovo dark:text-white">
          Everything else
        </h3>
      </motion.div>

      {/* ── Secondary grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {moreBuildData.map((project, i) => {
          const s = statusStyles[project.status] ?? statusStyles.live;
          return (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              className="relative overflow-hidden border border-gray-200 dark:border-white/10 rounded-2xl p-5 bg-white/50 dark:bg-white/4 backdrop-blur-sm hover:border-accent/30 dark:hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider">{project.category}</span>
                <span
                  className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full"
                  style={{ background: s.bg, color: s.text }}
                >
                  {s.label}
                </span>
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-3 line-clamp-2">{project.summary}</p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map(tag => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Work;
