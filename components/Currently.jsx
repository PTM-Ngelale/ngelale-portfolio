'use client';
import React from 'react';
import { motion } from 'motion/react';
import { currentlyData } from '@/assets/assets';

const labelColors = {
  Building: { bg: 'rgba(236,21,82,0.1)', text: '#ec1552' },
  Studying: { bg: 'rgba(124,58,237,0.1)', text: '#7c3aed' },
  Shipping: { bg: 'rgba(16,185,129,0.1)', text: '#10b981' },
};

const Currently = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full px-[12%] py-10"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        {currentlyData.map(({ label, title, body }, i) => {
          const colors = labelColors[label] ?? { bg: 'rgba(236,21,82,0.1)', text: '#ec1552' };
          return (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white/50 dark:bg-white/4 backdrop-blur-sm p-5"
            >
              <span
                className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3"
                style={{ background: colors.bg, color: colors.text }}
              >
                {label}
              </span>
              <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-1.5 leading-snug">
                {title}
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{body}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Currently;
