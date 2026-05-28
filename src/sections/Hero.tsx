import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { heroConfig } from '../config';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero({ isReady }: { isReady: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  if (!heroConfig.mainTitle) return null;

  useEffect(() => {
    if (isReady && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [isReady]);

  const scrollToSection = (href: string) => {
    const id = href.replace(/^#/, '');
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          preload="auto"
          poster={heroConfig.backgroundImage}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroConfig.backgroundVideo} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(44, 36, 32, 0.35)' }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isReady ? 'visible' : 'hidden'}
        className="relative z-10 w-full max-w-[800px] mx-auto px-6 text-center flex flex-col items-center justify-center min-h-[100dvh] py-32"
      >
        {/* SVG Hand-Drawn Frame */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isReady ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            viewBox="0 0 800 500"
            className="w-[90vw] max-w-[800px]"
            style={{ height: 'auto', maxHeight: '70vh' }}
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 80,100 C 80,60 100,40 140,40 L 660,40 C 700,40 720,60 720,100 L 720,400 C 720,440 700,460 660,460 L 140,460 C 100,460 80,440 80,400 Z"
              fill="none"
              stroke="#F7F3ED"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={isReady ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            />
            {/* Corner flourishes */}
            {[
              'M 80,100 C 60,80 50,70 50,70',
              'M 720,100 C 740,80 750,70 750,70',
              'M 80,400 C 60,420 50,430 50,430',
              'M 720,400 C 740,420 750,430 750,430',
            ].map((d, i) => (
              <motion.path
                key={i}
                d={d}
                fill="none"
                stroke="#F7F3ED"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={isReady ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + i * 0.1 }}
              />
            ))}
            {/* Decorative dots */}
            {[
              { cx: 80, cy: 250 },
              { cx: 720, cy: 250 },
              { cx: 400, cy: 40 },
              { cx: 400, cy: 460 },
            ].map((dot, i) => (
              <motion.circle
                key={i}
                cx={dot.cx}
                cy={dot.cy}
                r="3"
                fill="#C4956A"
                initial={{ opacity: 0 }}
                animate={isReady ? { opacity: 0.6 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.5 + i * 0.1 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Script Text */}
        <motion.span
          variants={fadeUp}
          className="relative z-10 font-script text-2xl md:text-3xl lg:text-4xl"
          style={{
            color: '#FEFCFA',
            textShadow: '0 2px 20px rgba(44, 36, 32, 0.3)',
          }}
        >
          {heroConfig.scriptText}
        </motion.span>

        {/* Main Title */}
        <motion.h1
          variants={fadeUp}
          className="relative z-10 font-serif mt-4"
          style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            lineHeight: '1.05',
            letterSpacing: '-0.01em',
            color: '#FEFCFA',
            textShadow: '0 4px 30px rgba(44, 36, 32, 0.35)',
          }}
        >
          {heroConfig.mainTitle}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          className="relative z-10 mt-6 max-w-[500px] mx-auto"
          style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
            lineHeight: '1.6',
            color: 'rgba(254, 252, 250, 0.92)',
            fontFamily: "'Quicksand', sans-serif",
          }}
        >
          {heroConfig.subtitle}
        </motion.p>

        {/* CTA Button */}
        {heroConfig.ctaButtonText && (
          <motion.div variants={scaleIn} className="relative z-10 mt-8">
            <motion.button
              onClick={() => scrollToSection(heroConfig.ctaTarget || '#uslugi')}
              className="btn-outline-white px-9 py-3.5"
              aria-label={heroConfig.ctaButtonText}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(247, 243, 237, 0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              {heroConfig.ctaButtonText}
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isReady ? { opacity: 0.7 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FEFCFA"
          strokeWidth="2"
          className="w-6 h-6 animate-bounce-arrow"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>

      {/* Bottom wavy transition */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
          style={{ display: 'block' }}
        >
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#F7F3ED"
          />
        </svg>
      </div>
    </section>
  );
}
