import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

const navLinks = [
  { href: '#top',     label: 'Home',     id: 'top' },
  { href: '#about',   label: 'About',    id: 'about' },
  { href: '#services',label: 'Services', id: 'services' },
  { href: '#work',    label: 'Work',     id: 'work' },
  { href: '#contact', label: 'Contact',  id: 'contact' },
];

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll]       = useState(false);
  const [menuOpen, setMenuOpen]       = useState(false);
  const [activeSection, setActive]    = useState('top');
  const { scrollYProgress }           = useScroll();
  const scaleX                        = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  /* ── Scroll detection ─────────────────────────────── */
  useEffect(() => {
    const onScroll = () => {
      setIsScroll(window.scrollY > 50);
      if (window.scrollY < 150) setActive('top');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Active section via IntersectionObserver ──────── */
  useEffect(() => {
    const ids = ['about', 'services', 'work', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0% -45% 0%' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Scroll progress bar ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
        style={{ scaleX, background: 'linear-gradient(to right, #ec1552, #7c3aed)' }}
      />

      {/* ── Background gradient blob (light mode) ── */}
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden pointer-events-none">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      {/* ── Main nav bar ── */}
      <nav className={`w-full fixed top-[3px] px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 transition-all duration-500 ${
        isScroll
          ? 'bg-white/75 backdrop-blur-2xl shadow-sm dark:bg-darkTheme/80 dark:shadow-white/5'
          : ''
      }`}>

        {/* Logo */}
        <a href="#top" className="flex items-end gap-0.5 group">
          <span className="text-[#1e1e1e] dark:text-white text-[40px] font-bold tracking-tight leading-none">
            Ngelale
          </span>
          <motion.div
            className="w-2.5 h-2.5 rounded-full bg-accent mb-1.5 ml-0.5"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </a>

        {/* Desktop nav links */}
        <ul className={`hidden md:flex items-center gap-1 rounded-full px-6 py-2 transition-all duration-500 ${
          isScroll ? '' : 'bg-white/70 shadow-sm dark:bg-white/5 dark:border dark:border-white/10'
        }`}>
          {navLinks.map(({ href, label, id }) => (
            <li key={id}>
              <a
                href={href}
                className={`relative px-4 py-2 rounded-full font-Ovo text-[13px] transition-all duration-300 block whitespace-nowrap ${
                  activeSection === id
                    ? 'text-accent bg-accent/10 dark:bg-accent/10'
                    : 'text-gray-700 dark:text-white/80 hover:text-accent dark:hover:text-white'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          {/* Dark mode toggle */}
          <motion.button
            onClick={() => setIsDarkMode(p => !p)}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/15 transition-colors duration-200"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label="Toggle dark mode"
          >
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-[18px]" />
          </motion.button>

          {/* CTA button */}
          <motion.a
            href="#contact"
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white shadow-glow"
            style={{ background: 'linear-gradient(135deg, #ec1552, #7c3aed)' }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(236,21,82,0.5)' }}
            whileTap={{ scale: 0.97 }}
          >
            Contact
            <Image src={assets.right_arrow_white} alt="" className="w-3" />
          </motion.a>

          {/* Hamburger */}
          <motion.button
            className="block md:hidden"
            onClick={() => setMenuOpen(true)}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt="" className="w-6" />
          </motion.button>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none' }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
        onClick={() => setMenuOpen(false)}
      />

      {/* ── Mobile drawer ── */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: menuOpen ? '0%' : '100%' }}
        transition={{ type: 'spring', stiffness: 320, damping: 32 }}
        className="fixed right-0 top-0 bottom-0 w-72 z-[70] bg-white dark:bg-darkTheme shadow-2xl md:hidden flex flex-col"
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 dark:border-white/10">
          <span className="text-xl font-bold dark:text-white">Menu</span>
          <button onClick={() => setMenuOpen(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10">
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-4" />
          </button>
        </div>

        <ul className="flex flex-col gap-1 px-4 py-6 flex-1">
          {navLinks.map(({ href, label, id }, i) => (
            <motion.li
              key={id}
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: menuOpen ? 0 : 40, opacity: menuOpen ? 1 : 0 }}
              transition={{ delay: i * 0.06 + 0.08, type: 'spring', stiffness: 300 }}
            >
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`block py-3 px-4 rounded-xl font-Ovo text-base transition-all duration-200 ${
                  activeSection === id
                    ? 'text-accent bg-accent/10'
                    : 'text-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {label}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="px-4 pb-8">
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-center py-3 rounded-full text-white font-medium"
            style={{ background: 'linear-gradient(135deg, #ec1552, #7c3aed)' }}
          >
            Get in Touch
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
