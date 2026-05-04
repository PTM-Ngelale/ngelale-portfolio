import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const techTags = [
  ['React', 'Tailwind CSS', 'Firebase'],
  ['React Native', 'Maps API', 'Node.js'],
  ['Next.js', 'GSAP', 'Framer Motion'],
  ['React Native', 'AI Integration', 'Expo'],
];

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
        My Portfolio
      </motion.p>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo dark:text-white"
      >
        Latest <span className="gradient-text">Work</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-14 text-gray-500 dark:text-gray-400"
      >
        A curated selection of projects showcasing my expertise in front-end development,
        mobile app development, and AI-assisted builds.
      </motion.p>

      {/* ── Project grid ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {workData.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.6 }}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-gray-200 dark:bg-gray-800"
            style={{ backgroundImage: `url(${project.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Overlay gradient */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 50%, transparent 100%)' }}
            />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              {/* Tech tags — slide up on hover */}
              <div className="flex flex-wrap gap-2 mb-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {(techTags[i] || []).map(tag => (
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
                  <h2 className="font-bold text-white text-xl leading-tight mb-0.5">
                    {project.title}
                  </h2>
                  <p className="text-sm text-white/60">{project.description}</p>
                </div>

                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg transition-all duration-300 group-hover:shadow-glow"
                  style={{ background: 'linear-gradient(135deg, #ec1552, #7c3aed)' }}
                >
                  <Image src={assets.send_icon} alt="Visit" className="w-5 brightness-0 invert" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Show more CTA ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="flex justify-center mt-12"
      >
        <motion.a
          href=""
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-2 text-gray-600 dark:text-white border border-gray-300 dark:border-white/20 rounded-full py-3 px-10 hover:border-accent hover:text-accent dark:hover:border-accent dark:hover:text-accent transition-all duration-300 font-medium"
        >
          View All Projects
          <Image
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold}
            alt=""
            className="w-4 group-hover:translate-x-1 transition-transform duration-300"
          />
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Work;
