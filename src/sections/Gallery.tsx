import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryConfig } from '../config';

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!galleryConfig.images.length) return null;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? galleryConfig.images.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === galleryConfig.images.length - 1 ? 0 : prev + 1));
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, closeLightbox, goToPrev, goToNext]);

  return (
    <>
      <section
        id="galeria"
        ref={sectionRef}
        className="section-padding"
        style={{ backgroundColor: '#FEFCFA' }}
      >
        <div className="container-custom">
          {/* Label */}
          <motion.div
            className="text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag-badge">{galleryConfig.label}</span>
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
            {galleryConfig.heading}
          </motion.h2>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
            {galleryConfig.images.map((image, index) => (
              <motion.div
                key={index}
                className="break-inside-avoid overflow-hidden rounded-xl cursor-pointer group relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 0.92, scale: 1 } : {}}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                whileHover={{ opacity: 1, filter: 'saturate(1.05)' }}
                onClick={() => openLightbox(index)}
                style={{ filter: 'saturate(0.95)' }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover"
                  style={{
                    aspectRatio: image.aspectRatio,
                    filter: 'saturate(1.1) brightness(1.02)',
                  }}
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 transition-opacity duration-400 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{ backgroundColor: 'rgba(247, 243, 237, 0.08)' }}
                />
              </motion.div>
            ))}
          </div>

          {/* Gallery Button */}
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button
              className="btn-outline px-8 py-3.5"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {galleryConfig.buttonText}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[200] flex items-center justify-center"
            style={{ backgroundColor: 'rgba(44, 36, 32, 0.95)' }}
            onClick={closeLightbox}
          >
            {/* Close button */}
            <motion.button
              className="absolute top-4 right-4 z-10 p-2"
              style={{ color: '#FEFCFA' }}
              onClick={closeLightbox}
              aria-label="Close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Navigation arrows */}
            <motion.button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2"
              style={{ color: 'rgba(254, 252, 250, 0.7)' }}
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              aria-label="Previous"
              whileHover={{ color: '#FEFCFA', scale: 1.1 }}
            >
              <ChevronLeft className="w-10 h-10" />
            </motion.button>

            <motion.button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2"
              style={{ color: 'rgba(254, 252, 250, 0.7)' }}
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              aria-label="Next"
              whileHover={{ color: '#FEFCFA', scale: 1.1 }}
            >
              <ChevronRight className="w-10 h-10" />
            </motion.button>

            {/* Image */}
            <motion.img
              key={currentImageIndex}
              src={galleryConfig.images[currentImageIndex].src}
              alt={galleryConfig.images[currentImageIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
