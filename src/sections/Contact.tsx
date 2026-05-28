import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { contactConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  mapPin: MapPin,
  phone: Phone,
  mail: Mail,
};

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  if (!contactConfig.heading) return null;

  return (
    <section
      id="kontakti"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: '#FEFCFA' }}
    >
      <div className="container-custom" style={{ maxWidth: '1100px' }}>
        {/* CTA Card */}
        <motion.div
          className="relative overflow-hidden rounded-[20px] min-h-[400px] flex items-center justify-center"
          style={{
            boxShadow: '0 16px 48px rgba(44, 36, 32, 0.12)',
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Background Image */}
          <img
            src={contactConfig.backgroundImage}
            alt="Rhodope landscape"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />

          {/* Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(44, 36, 32, 0.65) 0%, rgba(44, 36, 32, 0.35) 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-6 md:px-10 py-16">
            {/* Label */}
            <motion.span
              className="inline-block text-xs font-medium uppercase tracking-[0.12em] mb-4"
              style={{
                color: 'rgba(254, 252, 250, 0.9)',
                fontFamily: "'Quicksand', sans-serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {contactConfig.label}
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="font-serif mb-5"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                lineHeight: '1.1',
                color: '#FEFCFA',
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {contactConfig.heading}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              className="mx-auto mb-8 max-w-[450px]"
              style={{
                fontSize: 'clamp(1.1rem, 1.3vw, 1.25rem)',
                lineHeight: '1.7',
                color: 'rgba(254, 252, 250, 0.9)',
                fontFamily: "'Quicksand', sans-serif",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {contactConfig.subtext}
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                className="btn-primary px-8 py-3.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {contactConfig.primaryButton}
              </motion.button>
              <motion.button
                className="btn-outline-white px-8 py-3.5"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {contactConfig.secondaryButton}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 mt-8">
          {contactConfig.infoCards.map((card, index) => {
            const IconComponent = iconMap[card.icon];
            const content = card.href ? (
              <a
                href={card.href}
                className="transition-colors duration-300 hover:underline"
                style={{ color: '#C4956A' }}
                rel="noopener noreferrer"
              >
                {card.content}
              </a>
            ) : (
              <span style={{ color: '#6B6057' }}>{card.content}</span>
            );

            return (
              <motion.div
                key={index}
                className="text-center rounded-xl p-7"
                style={{
                  backgroundColor: 'rgba(232, 221, 208, 0.5)',
                  border: '1px solid rgba(212, 184, 150, 0.2)',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.12 }}
                whileHover={{ y: -2, boxShadow: '0 2px 12px rgba(196, 149, 106, 0.08)' }}
              >
                {IconComponent && (
                  <IconComponent
                    className="w-6 h-6 mx-auto mb-3"
                    style={{ color: '#C4956A' }}
                  />
                )}
                <h4
                  className="font-medium mb-2"
                  style={{
                    color: '#2C2420',
                    fontFamily: "'Quicksand', sans-serif",
                    fontSize: '0.95rem',
                  }}
                >
                  {card.title}
                </h4>
                <p style={{ fontSize: '0.9rem', fontFamily: "'Quicksand', sans-serif" }}>
                  {content}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
