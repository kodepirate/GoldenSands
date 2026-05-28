import { motion } from 'framer-motion';
import { ArrowUp, Facebook, Instagram, Music } from 'lucide-react';
import { footerConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Facebook, Instagram, Music,
};

export function Footer() {
  if (!footerConfig.brandName) return null;

  const scrollToSection = (href: string) => {
    const id = href.replace(/^#/, '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{ backgroundColor: '#F7F3ED' }}
      role="contentinfo"
    >
      {/* Wavy Top Border */}
      <div className="relative" style={{ marginTop: '-40px' }}>
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          className="w-full h-[40px] md:h-[60px]"
          style={{ display: 'block' }}
        >
          <path
            d="M0,30 C240,0 480,60 720,30 C960,0 1200,60 1440,30 L1440,0 L0,0 Z"
            fill="#F7F3ED"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div>
            <h3
              className="font-serif mb-2"
              style={{
                fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                color: '#C4956A',
              }}
            >
              {footerConfig.brandName}
            </h3>
            <p
              className="mb-1"
              style={{
                fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
                color: '#6B6057',
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {footerConfig.tagline}
            </p>
            <p
              style={{
                fontSize: '0.85rem',
                color: '#6B6057',
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {footerConfig.description}
            </p>

            {/* Social Links */}
            {footerConfig.socialLinks.length > 0 && (
              <nav className="mt-6" aria-label="Social media links">
                <div className="flex gap-3">
                  {footerConfig.socialLinks.map((social) => {
                    const IconComponent = iconMap[social.icon];
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="w-9 h-9 rounded-full flex items-center justify-center"
                        style={{
                          border: '1px solid #D4B896',
                          color: '#6B6057',
                        }}
                        whileHover={{
                          backgroundColor: '#C4956A',
                          color: '#FEFCFA',
                          borderColor: '#C4956A',
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                      </motion.a>
                    );
                  })}
                </div>
              </nav>
            )}
          </div>

          {/* Navigation Column */}
          {footerConfig.linkGroups.map((group, index) => (
            <nav key={index} aria-label={group.title}>
              <h4
                className="font-medium uppercase tracking-[0.12em] mb-5"
                style={{
                  fontSize: '0.7rem',
                  color: '#2C2420',
                  fontFamily: "'Quicksand', sans-serif",
                }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <motion.button
                      onClick={() => scrollToSection(link.href)}
                      style={{
                        fontSize: '0.85rem',
                        color: '#6B6057',
                        fontFamily: "'Quicksand', sans-serif",
                      }}
                      whileHover={{ color: '#C4956A' }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.name}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Contact Column */}
          <div>
            <h4
              className="font-medium uppercase tracking-[0.12em] mb-5"
              style={{
                fontSize: '0.7rem',
                color: '#2C2420',
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li style={{ fontSize: '0.85rem', color: '#6B6057', fontFamily: "'Quicksand', sans-serif" }}>
                +359 888 123 456
              </li>
              <li style={{ fontSize: '0.85rem', color: '#6B6057', fontFamily: "'Quicksand', sans-serif" }}>
                info@goldensands.bg
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: '#D4B896' }}
      >
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            style={{
              fontSize: '0.75rem',
              color: '#6B6057',
              fontFamily: "'Quicksand', sans-serif",
            }}
          >
            {footerConfig.copyrightText}
          </p>

          <div className="flex items-center gap-4">
            <span
              style={{
                fontSize: '0.75rem',
                color: '#6B6057',
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Privacy Policy · Terms of Service
            </span>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 group"
              style={{
                fontSize: '0.75rem',
                color: '#6B6057',
                fontFamily: "'Quicksand', sans-serif",
              }}
              aria-label={footerConfig.backToTopText}
              whileHover={{ color: '#C4956A' }}
            >
              <span>{footerConfig.backToTopText}</span>
              <motion.div
                className="w-8 h-8 rounded-full border flex items-center justify-center"
                style={{ borderColor: '#D4B896' }}
                whileHover={{ backgroundColor: '#C4956A', color: '#FEFCFA', borderColor: '#C4956A' }}
                transition={{ duration: 0.2 }}
              >
                <ArrowUp className="w-4 h-4" />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="text-center py-4" style={{ fontSize: '0.75rem', color: '#6B6057', fontFamily: "'Quicksand', sans-serif" }}>
        officially made my aniket0fficial🩷
      </div>
    </footer>
  );
}
