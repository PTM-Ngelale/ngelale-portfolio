import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const socialLinks = [
  { label: 'GitHub',   href: 'https://github.com/PreciousExpectoo' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter',  href: '#' },
];

const Footer = ({ isDarkMode }) => {
  return (
    <footer className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute -top-16 left-1/2 -translate-x-1/2 w-[500px] h-32 opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'linear-gradient(to right, #ec1552, #7c3aed)' }}
      />

      {/* Top section */}
      <div className="px-[12%] pt-16 pb-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-center gap-1 mb-3"
        >
          <span className="text-[#1e1e1e] dark:text-white text-[38px] font-bold tracking-tight leading-none">
            Ngelale
          </span>
          <motion.div
            className="w-2.5 h-2.5 rounded-full mb-1.5"
            style={{ background: '#ec1552' }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-gray-400 dark:text-gray-500 mb-5"
        >
          AI Agent Developer · Full-stack Engineer · Nigeria
        </motion.p>

        <motion.a
          href="mailto:preciousngelale@gmail.com"
          whileHover={{ scale: 1.04 }}
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-accent transition-colors duration-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-4" />
          preciousngelale@gmail.com
        </motion.a>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200 dark:border-white/10 mx-[10%] py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
          <p>© {new Date().getFullYear()} Precious Ngelale. All rights reserved.</p>
          <ul className="flex items-center gap-6">
            {socialLinks.map(({ label, href }) => (
              <li key={label}>
                <motion.a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.08 }}
                  className="hover:text-accent transition-colors duration-200"
                >
                  {label}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
