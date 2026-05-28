import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { servicesConfig } from '../config';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
      delay: i * 0.12,
    },
  }),
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  if (!servicesConfig.cards.length) return null;

  return (
    <section
      id="uslugi"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#F7F3ED' }}
    >
      <div className="container-custom">
        {/* Label */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-badge">{servicesConfig.label}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-serif text-center mx-auto mb-12 md:mb-16"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            lineHeight: '1.1',
            color: '#2C2420',
            maxWidth: '600px',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {servicesConfig.heading}
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-7">
          {servicesConfig.cards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(44, 36, 32, 0.08)' }}
              className="group rounded-[20px] overflow-hidden cursor-pointer"
              style={{
                backgroundColor: '#FEFCFA',
                border: '1px solid rgba(212, 184, 150, 0.3)',
                boxShadow: '0 2px 12px rgba(196, 149, 106, 0.08)',
              }}
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3]">
                <motion.img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(1.1) brightness(1.02)' }}
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3
                  className="font-serif mb-3"
                  style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    lineHeight: '1.2',
                    color: '#2C2420',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="mb-4"
                  style={{
                    fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                    lineHeight: '1.7',
                    color: '#6B6057',
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {card.description}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-300"
                  style={{ color: '#C4956A' }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
