import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';
import { testimonialsConfig } from '../config';

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  if (!testimonialsConfig.items.length) return null;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#F7F3ED' }}
    >
      <div className="container-custom" style={{ maxWidth: '1100px' }}>
        {/* Label */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-badge">{testimonialsConfig.label}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-serif text-center mx-auto mb-10 md:mb-14"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            lineHeight: '1.1',
            color: '#2C2420',
            maxWidth: '500px',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {testimonialsConfig.heading}
        </motion.h2>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {testimonialsConfig.items.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-[20px] p-8"
              style={{
                backgroundColor: '#FEFCFA',
                border: '1px solid rgba(212, 184, 150, 0.25)',
                boxShadow: '0 2px 12px rgba(196, 149, 106, 0.08)',
              }}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + index * 0.12 }}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(44, 36, 32, 0.08)' }}
            >
              {/* Quote Mark */}
              <span
                className="absolute font-serif"
                style={{
                  fontSize: '4rem',
                  lineHeight: '1',
                  color: '#D4B896',
                  opacity: 0.3,
                  top: '16px',
                  left: '24px',
                }}
              >
                "
              </span>

              {/* Quote Text */}
              <p
                className="mt-8 mb-5"
                style={{
                  fontSize: '1.05rem',
                  lineHeight: '1.7',
                  color: '#2C2420',
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {item.quote}
              </p>

              {/* Guest Name */}
              <p
                className="font-medium mb-2"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  color: '#C4956A',
                }}
              >
                {item.guest}
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                    style={{ color: '#C4956A' }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
