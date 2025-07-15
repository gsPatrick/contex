'use client';

import { useRef } from 'react';
import styles from './DobraPatrocinadores.module.css';

const sponsorLogos = Array.from({ length: 12 }, (_, i) => `/images/icon${i + 1}.png`);

export default function DobraPatrocinadores() {
  const trackRef = useRef(null);

  // A lista de logos é duplicada para criar o efeito de loop infinito no CSS
  const duplicatedLogos = [...sponsorLogos, ...sponsorLogos];

  // A função para navegar com os botões permanece, pois é uma funcionalidade extra
  const handleNavClick = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 400; // O quanto rolar a cada clique
      trackRef.current.scrollBy({
        left: direction === 'next' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.patrocinadoresSection} aria-label="Nossos Patrocinadores">
      <div className={styles.carouselWrapper}>
        {/* O container agora não precisa pausar a animação, o CSS cuidará disso */}
        <div className={styles.carouselContainer}>
          <div className={styles.carouselTrack} ref={trackRef}>
            {duplicatedLogos.map((logo, index) => (
              <div className={styles.logoSlot} key={index}>
                <img
                  src={logo}
                  alt={`Logo do patrocinador ${index % 12 + 1}`}
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