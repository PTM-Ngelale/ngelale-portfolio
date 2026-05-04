import { assets, serviceData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const Services = ({ isDarkMode }) => {
  return (
    <motion.div
      id="services"
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
        What I offer
      </motion.p>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo dark:text-white"
      >
        My <span className="gradient-text">Services</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-14 text-gray-500 dark:text-gray-400"
      >
        From pixel-perfect web apps to polished mobile experiences — I bring ideas to life
        with clean code, thoughtful design, and attention to detail.
      </motion.p>

      {/* ── Service cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {serviceData.map(({ icon, title, description, link }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden border border-gray-200 dark:border-white/10 rounded-2xl p-7 cursor-pointer bg-white/50 dark:bg-white/4 backdrop-blur-sm hover:shadow-xl hover:border-accent/30 dark:hover:border-accent/30 transition-all duration-500"
          >
            {/* Hover gradient bg */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(236,21,82,0.04), rgba(124,58,237,0.04))' }}
            />

            {/* Icon wrapper */}
            <div
              className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-400"
              style={{ background: 'linear-gradient(135deg, rgba(236,21,82,0.1), rgba(124,58,237,0.1))' }}
            >
              <Image src={icon} alt="" className="w-7" />
            </div>

            <h3 className="text-base font-semibold mb-2.5 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{description}</p>

            {/* "Explore" link — slides up on hover */}
            <div className="flex items-center gap-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 gradient-text">
              Explore
              <Image src={assets.right_arrow} alt="" className="w-3.5" />
            </div>

            {/* Corner accent */}
            <div
              className="absolute bottom-0 right-0 w-20 h-20 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top-left, rgba(236,21,82,0.12), transparent)' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Services;
