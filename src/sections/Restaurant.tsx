import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { restaurantConfig } from '../config';

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

export function Restaurant() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  if (!restaurantConfig.text) return null;

  return (
    <section
      id="restorant"
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
          <span className="tag-badge">{restaurantConfig.label}</span>
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
          {restaurantConfig.heading}
        </motion.h2>

        {/* Split Layout (reversed) */}
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center mb-12 md:mb-16">
          {/* Text Left */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
              {restaurantConfig.text}
            </p>
            <p
              className="font-script"
              style={{
                fontSize: 'clamp(1.1rem, 1.5vw, 1.35rem)',
                lineHeight: '1.4',
                color: '#C4956A',
              }}
            >
              {restaurantConfig.signoff}
            </p>
          </motion.div>

          {/* Photo Right */}
          <motion.div
            className="order-1 md:order-2 overflow-hidden rounded-[20px]"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <motion.img
              src={restaurantConfig.image}
              alt={restaurantConfig.heading}
              className="w-full aspect-[3/4] md:aspect-square object-cover"
              style={{ filter: 'saturate(1.1) brightness(1.02)' }}
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>

        {/* Menu Teaser */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {restaurantConfig.dishes.map((dish, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{ y: -4, boxShadow: '0 8px 32px rgba(44, 36, 32, 0.08)' }}
              className="rounded-xl overflow-hidden cursor-pointer"
              style={{
                backgroundColor: '#FEFCFA',
                boxShadow: '0 2px 12px rgba(196, 149, 106, 0.08)',
              }}
            >
              {/* Dish Image */}
              <div className="overflow-hidden aspect-square">
                <motion.img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(1.1) brightness(1.02)' }}
                  loading="lazy"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Dish Content */}
              <div className="p-4">
                <h3
                  className="font-serif mb-2"
                  style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    lineHeight: '1.2',
                    color: '#2C2420',
                  }}
                >
                  {dish.name}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: '1.7',
                    color: '#6B6057',
                    fontFamily: "'Quicksand', sans-serif",
                  }}
                >
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
