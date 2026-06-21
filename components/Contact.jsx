'use client';
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Contact = ({ isDarkMode }) => {
  const [result,     setResult]     = useState('');
  const [isSuccess,  setIsSuccess]  = useState(false);
  const [isSending,  setIsSending]  = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setResult('');

    const formData = new FormData(e.target);
    formData.append('access_key', '0eb6585f-a5b1-471f-89e8-89ea8970bd3e');

    const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
    const data = await res.json();

    setIsSending(false);

    if (data.success) {
      setIsSuccess(true);
      setResult("Message sent! I'll get back to you shortly.");
      e.target.reset();
      setTimeout(() => setResult(''), 6000);
    } else {
      setIsSuccess(false);
      setResult(data.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <motion.div
      id="contact"
      className='w-full px-[12%] py-20 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
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
        open to opportunities
      </motion.p>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-bold font-Ovo dark:text-white mb-14"
      >
        Let's build something{' '}
        <span className="gradient-text">that ships.</span>
      </motion.h2>

      {/* ── Split layout ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

        {/* Left — contact info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold dark:text-white mb-3">Let's talk.</h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              If you're building something that needs AI agents or full-stack dev — or just want
              to see if I'm a fit — the form works, or email me directly.
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-5">
            {[
              {
                icon: isDarkMode ? assets.mail_icon_dark : assets.mail_icon,
                label: 'Email',
                value: 'preciousngelale@gmail.com',
                href: 'mailto:preciousngelale@gmail.com',
              },
              {
                icon: isDarkMode ? assets.mail_icon_dark : assets.mail_icon,
                label: 'Location',
                value: 'Nigeria',
                href: null,
              },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(236,21,82,0.1)' }}
                >
                  <Image src={icon} alt="" className="w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-accent transition-colors duration-200">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div>
            <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Find me on</p>
            <div className="flex gap-2.5 flex-wrap">
              {[
                { label: 'GitHub',   href: 'https://github.com/PreciousExpectoo' },
                { label: 'LinkedIn', href: '#' },
                { label: 'Twitter',  href: '#' },
              ].map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 text-xs font-medium border border-gray-200 dark:border-white/10 rounded-full text-gray-600 dark:text-gray-300 hover:border-accent hover:text-accent transition-all duration-200"
                >
                  {label}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</span>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200 focus:border-accent dark:focus:border-accent"
              />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</span>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 transition-all duration-200 focus:border-accent dark:focus:border-accent"
              />
            </label>
          </div>

          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</span>
            <textarea
              name="message"
              rows="6"
              placeholder="Tell me about your project or just say hi..."
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-sm text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 resize-none transition-all duration-200 focus:border-accent dark:focus:border-accent"
            />
          </label>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 40px rgba(236,21,82,0.4)' }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSending}
            className="w-full py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-60 shadow-glow"
            style={{ background: 'linear-gradient(135deg, #ec1552, #7c3aed)' }}
          >
            {isSending ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </>
            )}
          </motion.button>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`p-4 rounded-xl text-sm font-medium border ${
                  isSuccess
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50'
                    : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800/50'
                }`}
              >
                {result}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
