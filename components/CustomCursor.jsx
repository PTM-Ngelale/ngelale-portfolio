'use client';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      setIsPointer(!!e.target.closest('a, button, input, textarea, select, label, [role="button"]'));
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [isVisible]);

  const ringSize = isPointer ? 48 : 32;

  return (
    <>
      {/* Outer ring — slow spring follow */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block"
        animate={{
          x: pos.x - ringSize / 2,
          y: pos.y - ringSize / 2,
          width: ringSize,
          height: ringSize,
          opacity: isVisible ? 1 : 0,
          scale: isPointer ? 1.1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.6 }}
        style={{ border: '1.5px solid rgba(236,21,82,0.7)' }}
      />

      {/* Inner dot — instant follow */}
      <motion.div
        className="fixed top-0 left-0 w-[6px] h-[6px] rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: pos.x - 3,
          y: pos.y - 3,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
        style={{ background: '#ec1552' }}
      />
    </>
  );
};

export default CustomCursor;
