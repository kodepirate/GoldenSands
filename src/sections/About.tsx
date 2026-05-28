import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, UtensilsCrossed, Mountain } from 'lucide-react';
import { aboutConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  heart: Heart,
  utensils: UtensilsCrossed,
  mountain: Mountain,
};

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  if (!aboutConfig.text) return null;

  return (
    <section
      id="za-nas"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#FEFCFA' }}
    >
      <div className="container-custom">
        {/* Dashed Divider Top */}
        <div className="dashed-divider mb-12 md:mb-16" />

        {/* Label */}
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag-badge">{aboutConfig.label}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-serif text-center mx-auto mb-10 md:mb-14"
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
          {aboutConfig.heading}
        </motion.h2>

        {/* Split Layout */}
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Photo */}
          <motion.div
            className="overflow-hidden rounded-[20px]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src={aboutConfig.image}
              alt={aboutConfig.heading}
              className="w-full aspect-[3/4] object-cover"
              style={{ filter: 'saturate(1.1) brightness(1.02)' }}
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <p
              className="mb-6"
              style={{
                fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                lineHeight: '1.7',
                color: '#2C2420',
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {aboutConfig.text}
            </p>
            <p
              className="font-script"
              style={{
                fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                lineHeight: '1.4',
                color: '#C4956A',
              }}
            >
              {aboutConfig.signoff}
            </p>
          </motion.div>
        </div>

        {/* Value Pillars */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {aboutConfig.pillars.map((pillar, index) => {
            const IconComponent = iconMap[pillar.icon];
            return (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.12 }}
              >
                {IconComponent && (
                  <IconComponent
                    className="w-12 h-12 mx-auto mb-4"
                    style={{ color: '#C4956A' }}
                  />
                )}
                <h3
                  className="font-serif mb-3"
                  style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    lineHeight: '1.2',
                    color: '#2C2420',
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  className="mx-auto max-w-[280px]"
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.7',
                    color: '#6B6057',
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Dashed Divider Bottom */}
        <div className="dashed-divider mt-12 md:mt-16" />
      </div>
    </section>
  );
}
