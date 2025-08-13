'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ImageCarousel.module.css';

interface Image {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  // We'll add props later
}

const galleryImages: Image[] = [
  {
    src: '/gallery/Rock Night, 2022.JPG',
    alt: 'Rock Night, 2022'
  },
  {
    src: '/gallery/Roundhouse, 2025.JPG',
    alt: 'Roundhouse, 2025'
  }
];

export default function ImageCarousel(props: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContent}>
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevImage}
          aria-label="Previous image"
        >
          Back
        </button>

        <div className={styles.imageContainer}>
          <AnimatePresence>
            <motion.img
              key={currentIndex}
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              className={styles.image}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
          </AnimatePresence>
        </div>

        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextImage}
          aria-label="Next image"
        >
          Next
        </button>
      </div>

      <div className={styles.imageTitle}>
        <AnimatePresence>
          <motion.h3
            key={currentIndex}
            className={styles.titleText}
            initial={{ opacity: 0, color: 'white' }}
            animate={{ opacity: 1, color: 'black' }}
            exit={{ opacity: 0, color: 'white' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {galleryImages[currentIndex].alt}
          </motion.h3>
        </AnimatePresence>
      </div>

      <div className={styles.indicators}>
        {galleryImages.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentIndex ? styles.active : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
