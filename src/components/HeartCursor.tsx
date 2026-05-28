import { useEffect, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

let heartIdCounter = 0;

export function HeartCursor() {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  const removeHeart = useCallback((id: number) => {
    setHearts((prev) => prev.filter((h) => h.id !== id));
  }, []);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) return;

    let lastSpawn = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastSpawn < 100) return;
      lastSpawn = now;

      const size = Math.random() * 8 + 12;
      const rotation = Math.random() * 30 - 15;
      const id = ++heartIdCounter;

      setHearts((prev) => [
        ...prev,
        {
          id,
          x: e.clientX - size / 2,
          y: e.clientY - size / 2,
          size,
          rotation,
        },
      ]);

      // Auto-remove after animation completes
      setTimeout(() => {
        removeHeart(id);
      }, 1500);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [removeHeart]);

  return createPortal(
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }}>
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{
              opacity: 0.8,
              x: heart.x,
              y: heart.y,
              scale: 1,
              rotate: heart.rotation,
            }}
            animate={{
              opacity: 0,
              y: heart.y - 40,
              scale: 0.5,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            style={{
              position: 'fixed',
              pointerEvents: 'none',
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="#C4956A"
              width={heart.size}
              height={heart.size}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  );
}
