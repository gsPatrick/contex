'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './DobraPatrocinadores.module.css';

// --- CORREÇÃO: usar paths relativos da pasta /public ---
const sponsorLogos = Array.from({ length: 12 }, (_, i) => `/images/icon${i + 1}.png`);

export default function DobraPatrocinadores() {
  const trackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  const scrollAnimation = useCallback(() => {
    if (trackRef.current && !isPaused) {
      trackRef.current.scrollLeft += 0.5;
      if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
        trackRef.current.scrollLeft = 0;
      }
    }
    animationFrameRef.current = requestAnimationFrame(scrollAnimation);
  }, [isPaused]);

  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(scrollAnimation);
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [scrollAnimation]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleNavClick = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 400;
      trackRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.patrocinadoresSection} aria-label="Nossos Patrocinadores">


      <div
        className={styles.carouselWrapper}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.carouselContainer} ref={trackRef}>
          <div className={styles.carouselTrack}>
            {duplicatedLogos.map((logo, index) => (
              <div className={styles.logoSlot} key={index}>
                <img
                  src={logo}
                  alt={`Grupo de patrocinadores ${index % 12 + 1}`}
                  className={styles.logoImage}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.fade} ${styles.fadeLeft}`}></div>
        <div className={`${styles.fade} ${styles.fadeRight}`}></div>

        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={() => handleNavClick('prev')}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={() => handleNavClick('next')}
          aria-label="Próximo"
        >
          ›
        </button>
      </div>
    </section>
  );
}
