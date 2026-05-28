import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Flower2 } from 'lucide-react';
import { siteConfig } from '../config';

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [phase, setPhase] = useState<'loading' | 'fadeout'>('loading');

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('fadeout');
      setTimeout(onComplete, 800);
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center"
      style={{ backgroundColor: '#F7F3ED' }}
      animate={phase === 'fadeout' ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Icon */}
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <Flower2
          className="w-12 h-12"
          style={{ color: '#C4956A' }}
        />
      </motion.div>

      {/* Brand Name */}
      <motion.h2
        className="font-serif text-2xl tracking-wide mb-2"
        style={{ color: '#2C2420' }}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {siteConfig.title.split('—')[0].trim()}
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        className="text-sm tracking-widest uppercase mb-10"
        style={{ color: '#6B6057', fontFamily: "'Quicksand', sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Guesthouse and Family Restaurant
      </motion.p>

      {/* Loading Line */}
      <div
        className="w-48 h-px overflow-hidden"
        style={{ backgroundColor: 'rgba(212, 184, 150, 0.3)' }}
      >
        <motion.div
          className="h-full"
          style={{ backgroundColor: '#C4956A' }}
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </div>

      {/* Loading text */}
      <motion.p
        className="mt-4 text-xs tracking-wider uppercase"
        style={{ color: '#6B6057', fontFamily: "'Quicksand', sans-serif" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}
