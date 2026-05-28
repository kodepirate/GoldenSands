import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Sparkles, UtensilsCrossed, Image, Heart, Mail } from 'lucide-react';
import { navigationConfig } from '../config';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Home, Sparkles, UtensilsCrossed, Image, Heart, Mail,
};

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!navigationConfig.brandName) return null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const scrollToSection = (href: string) => {
    const id = href.replace(/^#/, '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -70 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-[0_2px_20px_rgba(44,36,32,0.06)]' : ''
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(247, 243, 237, 0.85)' : 'rgba(247, 243, 237, 0.7)',
        backdropFilter: 'blur(20px) saturate(1.2)',
        WebkitBackdropFilter: 'blur(20px) saturate(1.2)',
        borderBottom: '1px solid rgba(212, 184, 150, 0.2)',
        height: '70px',
      }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom h-full flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('#hero')}
          className="flex items-center gap-2 group"
          aria-label={navigationConfig.brandName}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span
            className="font-sans text-sm font-medium tracking-[0.06em] uppercase transition-colors duration-300"
            style={{ color: '#C4956A' }}
          >
            {navigationConfig.brandName}
          </span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8" role="menubar">
          {navigationConfig.navLinks.map((link) => {
            const IconComponent = iconMap[link.icon];
            return (
              <motion.button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="flex items-center gap-1.5 text-sm font-medium tracking-[0.06em] uppercase py-2"
                style={{ color: '#2C2420' }}
                whileHover={{ color: '#C4956A', y: -1 }}
                transition={{ duration: 0.2 }}
                role="menuitem"
              >
                {IconComponent && <IconComponent className="w-4 h-4" aria-hidden="true" />}
                {link.name}
              </motion.button>
            );
          })}
        </div>

        {/* CTA Button */}
        {navigationConfig.ctaButtonText && (
          <motion.button
            onClick={() => scrollToSection('#kontakti')}
            className="hidden lg:block btn-primary"
            aria-label={navigationConfig.ctaButtonText}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {navigationConfig.ctaButtonText}
          </motion.button>
        )}

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          style={{ color: '#2C2420' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 top-[70px]"
            style={{
              backgroundColor: 'rgba(247, 243, 237, 0.98)',
              backdropFilter: 'blur(20px)',
            }}
            role="menu"
          >
            <div className="container-custom py-8 flex flex-col gap-2">
              {navigationConfig.navLinks.map((link, i) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <motion.button
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-3 w-full py-4 text-lg border-b transition-colors"
                    style={{
                      color: '#2C2420',
                      borderColor: 'rgba(212, 184, 150, 0.2)',
                    }}
                    role="menuitem"
                  >
                    {IconComponent && (
                      <span style={{ color: '#C4956A' }}>
                        <IconComponent className="w-5 h-5" />
                      </span>
                    )}
                    {link.name}
                  </motion.button>
                );
              })}

              {navigationConfig.ctaButtonText && (
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  onClick={() => scrollToSection('#kontakti')}
                  className="btn-primary mt-6 text-center"
                  role="menuitem"
                >
                  {navigationConfig.ctaButtonText}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
